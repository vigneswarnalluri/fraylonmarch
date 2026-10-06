// HTML certificate template. The PNG (cert-template.png) is the canvas;
// overlays sit on top of it.
//
// Template revision (2026-05-16): the source PNG was upgraded to a richer
// design that bakes placeholder text into every overlay slot — "Candidate
// Name", a sample 4-line body paragraph, "DD MM YYYY", "Scan Above",
// "CEO", "Date of issue". So every overlay region now needs a WHITE WIPE
// behind the real text to cover the baked placeholder, except QR which
// already had one. "Scan Above" / "CEO" / "Date of issue" captions stay
// baked-in — we only wipe the variable slots.
//
// Pixel positions derived programmatically from the new template via
// measure-template-v3.cjs + zoom-{name,date}.cjs (ruled crops).
// Re-run those if the template PNG changes.
//
// Canvas: 2000 x 1414.
// Landmarks measured against the new template:
//   "Candidate Name" placeholder: y 620..720, x ~640..1360 (h ~100)
//   Recipient underline (teal):   y 743..747  (long horizontal line)
//   Body paragraph (4 lines):     y 780..945, x ~390..1640
//   Baked QR placeholder:         x 314..502, y 1002..1191
//   "DD MM YYYY" placeholder:     y 1100..1145, x ~1130..1390
//   Date-of-issue underline:      y 1175..1180

export interface CertTemplateInput {
  recipientName: string;
  bodyText: string;         // full paragraph composed by orchestrator
  issueDateLabel: string;   // e.g. "15 May 2026"
  qrPngBase64: string;      // raw base64, no data: prefix
  templatePngBase64: string;
  fontFaceCss: string;      // self-hosted @font-face blocks (data: URIs)
}

export const CANVAS_WIDTH = 2000;
export const CANVAS_HEIGHT = 1414;

// Brand palette — the new template's date placeholder is dark navy, not
// brand teal. Match that exactly so the overlay blends with the baked
// "Date of issue" caption sitting underneath.
const BRAND_TEAL_DARK = '#0E2A3A';
const BRAND_TEAL = '#1E5F7E';
const BODY_GRAY = '#3A3A3A';
// Template paper color — sampled from blank regions of cert-template.png
// (consistent ~RGB(248,245,242) across the page). Wipe blocks use this so
// they vanish against the cream background instead of showing as bright
// white patches.
const PAPER_BG = '#f8f5f2';

// --------------------------------------------------------------------------
// Overlay rectangles. (x, y, w, h) in canvas pixels.
//
// `*Wipe` rects paint a flat #fff block to cover the baked placeholder
// text. They sit underneath the text overlay and end JUST ABOVE the
// teal underlines so those stay visible.
//
// Text rects host the rendered overlay content. The `name` rect is full
// width (200..1800) so any name length stays centered — the wipe is
// narrower because it only needs to cover where the baked text was.
// --------------------------------------------------------------------------
const RECT = {
  // -- White wipes (cover baked placeholders) --
  nameWipe:  { x: 440, y: 605, w: 1120, h: 130 }, // ends at y=735, under name, above underline at 743
  bodyWipe:  { x: 350, y: 775, w: 1340, h: 175 }, // 4 body lines
  dateWipe:  { x: 1080, y: 1085, w: 340, h: 85 }, // "DD MM YYYY" only, above underline at 1175
  // QR wipe stays as-is (covers baked QR placeholder pattern).
  qrWipe:    { x: 308, y: 996, w: 200, h: 201 },

  // -- Text / image overlays --
  name:      { x: 200, y: 605, w: 1600, h: 125 },
  body:      { x: 350, y: 778, w: 1340, h: 175 },
  issueDate: { x: 1080, y: 1115, w: 340, h: 55 },

  // QR — overlay the real QR PNG on top of the wipe.
  qr:        { x: 314, y: 1002, w: 188, h: 189 },
} as const;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function buildCertHtml(input: CertTemplateInput): string {
  const name = escapeHtml(input.recipientName);
  const bodyText = escapeHtml(input.bodyText);
  const issueDate = escapeHtml(input.issueDateLabel);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Fraylon Certificate</title>
<style>
  /* Self-hosted fonts via data: URIs — see render.ts loadFontFaceCss(). */
  ${input.fontFaceCss}

  @page { size: ${CANVAS_WIDTH}px ${CANVAS_HEIGHT}px; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${CANVAS_WIDTH}px;
    height: ${CANVAS_HEIGHT}px;
    overflow: hidden;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .canvas {
    position: relative;
    width: ${CANVAS_WIDTH}px;
    height: ${CANVAS_HEIGHT}px;
    background-image: url('data:image/png;base64,${input.templatePngBase64}');
    background-size: ${CANVAS_WIDTH}px ${CANVAS_HEIGHT}px;
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  .wipe {
    position: absolute;
    background: ${PAPER_BG};
  }
  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
  .name {
    left: ${RECT.name.x}px; top: ${RECT.name.y}px;
    width: ${RECT.name.w}px; height: ${RECT.name.h}px;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 0.04em;
    color: #0b1a24;
    text-transform: uppercase;
    align-items: flex-end;
    padding-bottom: 12px;
  }
  .body {
    display: block;
    left: ${RECT.body.x}px; top: ${RECT.body.y}px;
    width: ${RECT.body.w}px; height: ${RECT.body.h}px;
    font-family: 'Times New Roman', Times, 'Playfair Display', Georgia, serif;
    font-weight: 400;
    font-size: 27px;
    line-height: 1.65;
    color: #111;
    text-align: justify;
    text-align-last: center;
    padding: 0 10px;
    overflow: hidden;
  }
  .issue-date {
    left: ${RECT.issueDate.x}px; top: ${RECT.issueDate.y}px;
    width: ${RECT.issueDate.w}px; height: ${RECT.issueDate.h}px;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700;
    font-size: 32px;
    color: #0b1a24;
    align-items: flex-end;
    padding-bottom: 6px;
  }
  .qr {
    left: ${RECT.qr.x}px; top: ${RECT.qr.y}px;
    width: ${RECT.qr.w}px; height: ${RECT.qr.h}px;
    /* The QR PNG has a white quiet zone, so we keep a white background
       behind it for the actual barcode area. The wipe block underneath
       covers the baked placeholder pattern; QR image then covers the wipe. */
    background: #fff;
    padding: 0;
  }
  .qr img {
    width: 100%; height: 100%; display: block;
    image-rendering: pixelated;
  }
</style>
</head>
<body>
  <div class="canvas">
    <div class="wipe" style="left:${RECT.nameWipe.x}px;top:${RECT.nameWipe.y}px;width:${RECT.nameWipe.w}px;height:${RECT.nameWipe.h}px"></div>
    <div class="wipe" style="left:${RECT.bodyWipe.x}px;top:${RECT.bodyWipe.y}px;width:${RECT.bodyWipe.w}px;height:${RECT.bodyWipe.h}px"></div>
    <div class="wipe" style="left:${RECT.dateWipe.x}px;top:${RECT.dateWipe.y}px;width:${RECT.dateWipe.w}px;height:${RECT.dateWipe.h}px"></div>
    <div class="wipe" style="left:${RECT.qrWipe.x}px;top:${RECT.qrWipe.y}px;width:${RECT.qrWipe.w}px;height:${RECT.qrWipe.h}px"></div>
    <div class="overlay name">${name}</div>
    <div class="overlay body">${bodyText}</div>
    <div class="overlay issue-date">${issueDate}</div>
    <div class="overlay qr"><img alt="" src="data:image/png;base64,${input.qrPngBase64}" /></div>
  </div>
</body>
</html>`;
}

// Keep BRAND_TEAL in scope for potential future re-tinting of overlays.
void BRAND_TEAL;
