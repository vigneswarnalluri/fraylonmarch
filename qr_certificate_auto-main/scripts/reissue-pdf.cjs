// Renders and uploads the PDF for a certificate row that already exists in Supabase.
// Run with: node --env-file=.env.local scripts/reissue-pdf.cjs FRY-INT-2026-00002

const QRCode = require('qrcode');
const { createClient } = require('@supabase/supabase-js');
const { renderCertPdf } = require('../puppeteer-service/dist/render.js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const VERIFY_BASE = process.env.NEXT_PUBLIC_VERIFY_BASE_URL || 'https://verify.fraylontech.com';

const certNumber = process.argv[2] || 'FRY-INT-2026-00002';

const supabase = createClient(new URL(SUPABASE_URL).origin, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function formatLongDate(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
}

function composeBodyText(cert) {
  const s = formatLongDate(cert.start_date);
  const e = formatLongDate(cert.end_date);
  return `has successfully completed a ${cert.duration} in ${cert.program} at Fraylon Technologies from ${s} to ${e}. During the internship, the candidate demonstrated dedication, technical skills, and excellent performance in ${cert.program} and project development.`;
}

(async () => {
  const { data: cert, error } = await supabase
    .from('certificates')
    .select('*')
    .eq('cert_number', certNumber)
    .single();

  if (error || !cert) {
    console.error('Cert not found:', error?.message);
    process.exit(1);
  }

  console.log(`Generating QR for ${certNumber}…`);
  const verifyUrl = `${VERIFY_BASE.replace(/\/+$/, '')}/c/${certNumber}`;
  const qrBuf = await QRCode.toBuffer(verifyUrl, {
    errorCorrectionLevel: 'H',
    type: 'png',
    width: 600,
    margin: 1,
  });
  const qrPngBase64 = qrBuf.toString('base64');

  console.log(`Rendering PDF directly via updated template…`);
  const pdfBuf = await renderCertPdf({
    recipientName: cert.recipient_name,
    bodyText: composeBodyText(cert),
    issueDateLabel: formatLongDate(cert.issue_date),
    qrPngBase64,
  });

  console.log(`Rendered ${pdfBuf.length} bytes PDF.`);

  console.log(`Uploading to Supabase Storage bucket 'certificates'…`);
  const path = `${certNumber}.pdf`;
  const { error: upErr } = await supabase.storage
    .from('certificates')
    .upload(path, pdfBuf, {
      contentType: 'application/pdf',
      upsert: true,
      cacheControl: 'no-store',
    });

  if (upErr) {
    console.error('Storage upload failed:', upErr.message);
    process.exit(1);
  }

  const { data: signed } = await supabase.storage
    .from('certificates')
    .createSignedUrl(path, 60 * 60 * 24 * 7);

  console.log('SUCCESS! Updated PDF uploaded.');
  console.log('Download URL:', signed?.signedUrl);
  process.exit(0);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
