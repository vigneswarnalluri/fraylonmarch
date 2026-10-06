// Create or update an admin user in Supabase Auth.
// Run with:  node --env-file=.env.local scripts/create-admin.cjs <email> <password>
// Example:   node --env-file=.env.local scripts/create-admin.cjs vigneswarnalluri10@gmail.com MySecurePass123!

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ALLOWLIST = (process.env.ADMIN_EMAIL_ALLOWLIST || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

const email = (process.argv[2] || ALLOWLIST[0] || '').trim().toLowerCase();
const password = process.argv[3];

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

if (!email || !password) {
  console.error('Usage: node --env-file=.env.local scripts/create-admin.cjs <email> <password>');
  console.error('Example: node --env-file=.env.local scripts/create-admin.cjs vigneswarnalluri10@gmail.com MyPass123!');
  process.exit(1);
}

if (!ALLOWLIST.includes(email)) {
  console.warn(`WARNING: "${email}" is NOT in ADMIN_EMAIL_ALLOWLIST (${ALLOWLIST.join(', ')}).`);
  console.warn('The user will be created, but middleware will reject sign-in until you add it to .env.local.');
}

const supabase = createClient(new URL(SUPABASE_URL).origin, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

(async () => {
  // Check if user already exists
  const { data: listData, error: listErr } = await supabase.auth.admin.listUsers();
  if (listErr) {
    console.error('Failed to list users:', listErr.message);
    process.exit(1);
  }

  const existing = listData.users.find((u) => u.email?.toLowerCase() === email);

  if (existing) {
    // Update password
    const { error: updateErr } = await supabase.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
    });
    if (updateErr) {
      console.error('Failed to update password:', updateErr.message);
      process.exit(1);
    }
    console.log(`Password updated successfully for existing user: ${email}`);
    console.log('You can now log in at: http://localhost:3000/login');
    return;
  }

  // Create new user
  const { data: newUser, error: createErr } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (createErr) {
    console.error('Failed to create user:', createErr.message);
    process.exit(1);
  }

  console.log(`Admin user created successfully!`);
  console.log(`  ID   : ${newUser.user.id}`);
  console.log(`  Email: ${newUser.user.email}`);
  console.log('You can now log in at: http://localhost:3000/login');
})().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
