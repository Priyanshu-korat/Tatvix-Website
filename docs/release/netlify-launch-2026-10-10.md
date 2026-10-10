# Netlify release — 10 October 2026

Target: existing Netlify project `tatvix` (`790f1bc0-f4af-4135-9f54-8881db5641c5`), already mapped to **https://www.tatvixtech.com**. No DNS, MX or mail TXT record changes are required.

## Hosting implementation

- `npm run build:netlify` builds the same React pages and Three.js/GSAP experience using Next.js 16.3.4. Netlify's current OpenNext adapter provides server-rendered pages and Next route handling. The existing Sites/Vinext build remains available through `npm run build`.
- `netlify.toml` sets Node 24, `.next` as the publish directory, functions bundling and the known legacy article redirects. There is no SPA fallback. Secret scanning remains enabled, with a narrow exception for seven existing variables containing public company details (including the public SMTP username/contact mailbox); SMTP_PASSWORD remains scanned.
- Existing Google Search Console and Bing verification values are preserved as ownership metadata when configured in the hosting environment.
- The custom `/api/contact` Netlify function uses the existing server-side SMTP variables (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, optional `SMTP_PORT`). Mail is explicitly addressed to `info@tatvixtech.com`. These values remain in Netlify's Functions environment, never in the repository or browser bundle.
- Both hosting targets share validation, consent, honeypot and throttling. Netlify sends directly through SMTP; Sites forwards validated fields including consent to the stable Netlify origin. Direct delivery does not forward over HTTP and therefore cannot create a self-forwarding loop.
- `.netlify/` is ignored; local linking metadata must never be committed.

## Validation and release record

- Local native Next.js production build passed.
- First hosted attempt `6aca1844ad3673323a9cad3a` compiled and bundled successfully, then failed because the existing project classified public business details as secrets. It did not replace the live website. The corrective configuration only excludes the seven confirmed public keys reported by that scan.
- 17 automated checks passed, including SMTP address/content sanitisation and the direct-mode delivery path with a stub transport. These tests send no email.
- After deployment, run `node scripts/audit-seo.mjs https://www.tatvixtech.com docs/qa/netlify-production-seo-audit.json`, check the rendered desktop/mobile experience, the contact route's no-mail validation, TLS and legacy redirects. Record the native deploy result and any limitations in the task response.
- The previously received test confirmed the old backend's actual SMTP credentials work. A stub transport test is not a new production inbox-receipt check. Do not send another test email without specific authorisation.

## Continuous deployment connection

Before this release, Netlify was connected to **IndiGtech/TatvixTech**, branch **main**, while the redesigned website is maintained in **Priyanshu-korat/Tatvix-Website**, branch **feat/website-foundation**. A source-upload deployment does not change that Git connection. A subsequent push to the old production branch can replace the manual release. Reconnect the Netlify project to the maintained repository/branch through Project configuration → Build & deploy → Continuous deployment, or explicitly lock automatic publishing while that connection is being updated. The browser dashboard requires the account's existing sign-in; no password is read or changed by this release.

The Site's private preview and Netlify production are separate deployments. The production canonical remains www; secondary preview addresses remain non-indexable in page metadata. Verify Search Console and Bing ownership and submit the www sitemap using the search-verification runbook. Rankings and AI citations are not guaranteed.
