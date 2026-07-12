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
- [ ] New admin_users rows or leads table schema changes (status/source columns)
      are applied manually via phpMyAdmin or CLI mysql — neither paintpro-site
      nor paintpro-admin has an automatic migration runner (unlike the main app's
      api/migrations/).
