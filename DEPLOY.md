# Deploy & Sync Checklist

## After ANY change to src/ in paintpro-site
- [ ] `npm run build` locally — refreshes dist/ for the XAMPP/ZeroTier copy.
      dist/ is gitignored; Apache serves whatever's currently built, regardless
      of git status.
- [ ] Verify at http://localhost/paintpro-site/ before pushing.
- [ ] `git push` — Vercel auto-builds its OWN dist/ from source on push. No
      local action needed for Vercel; it never reads your locally-built dist/.

## API contract changes only (rare)
- [ ] The Android app and main PaintPro app don't currently call paintpro-site's
      API — only relevant if that changes in the future.

## paintpro-admin — same discipline
- [ ] `npm run build` after any src/ change (no Vercel target at all for this app).
- [ ] Still git push to keep the repo backed up, even though nothing auto-deploys.

## One-time / rare
- [ ] New admin_users rows or leads table schema changes (status/notes/
      last_contacted columns, lead_messages table) are applied manually via
      phpMyAdmin or CLI mysql — neither paintpro-site nor paintpro-admin has an
      automatic migration runner (unlike the main app's api/migrations/).
      CRM schema lives in paintpro-admin/api/crm_schema.sql.

## CRM email (Resend) setup — paintpro-admin
- [ ] Create a free Resend account (resend.com), verify the sending domain
      (forgefield.company) by adding the DNS records Resend gives you at
      Cloudflare, and generate an API key.
- [ ] Copy paintpro-admin/api/secrets.example.php -> secrets.php (gitignored)
      and fill in RESEND_API_KEY, CRM_FROM_EMAIL, CRM_FROM_NAME, and a random
      CRM_INBOUND_SECRET. Outbound reply-email works as soon as the key is set.
- [ ] INBOUND replies (customer emails landing back in the dashboard thread)
      also require the admin panel to be reachable from the public internet so
      Resend's webhook can POST to api/inbound_email.php?secret=... — while the
      panel stays ZeroTier-only, outbound sending works fully; inbound is the
      only piece gated on a public route.

## Domain (forgefield.company)
- [ ] Registered at Cloudflare. Point it at Vercel per the site project's
      Settings > Domains instructions (CNAME/A record added in Cloudflare DNS,
      proxy set to DNS-only until Vercel shows "Valid Configuration").
