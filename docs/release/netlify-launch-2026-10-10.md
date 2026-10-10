# Netlify release — 10 October 2026

Target: existing Netlify project `tatvix` (`790f1bc0-f4af-4135-9f54-8881db5641c5`), already mapped to **https://www.tatvixtech.com**. No DNS, MX or mail TXT record changes are required.

## Hosting implementation

- `npm run build:netlify` builds the same React pages and Three.js/GSAP experience using Next.js 16.3.4. Netlify's current OpenNext adapter provides server-rendered pages and Next route handling. The existing Sites/Vinext build remains available through `npm run build`.
- `netlify.toml` sets Node 24, `.next` as the publish directory, functions bundling and the known legacy article redirects. There is no SPA fallback. Secret scanning remains enabled, with a narrow exception for existing variables containing public company details (including aliases for the public SMTP username/contact mailbox); SMTP_PASSWORD remains scanned.
- Existing Google Search Console and Bing verification values are preserved as ownership metadata when configured in the hosting environment.
- The custom `/api/contact` Netlify function uses the existing server-side SMTP variables (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, optional `SMTP_PORT`). Mail is explicitly addressed to `info@tatvixtech.com`. These values remain in Netlify's Functions environment, never in the repository or browser bundle.
- Both hosting targets share validation, consent, honeypot and throttling. Netlify sends directly through SMTP; Sites forwards validated fields including consent to the stable Netlify origin. Direct delivery does not forward over HTTP and therefore cannot create a self-forwarding loop.
- `.netlify/` is ignored; local linking metadata must never be committed.

## Validation and release record

- Production deployment `6aca1b74507334178db4630f` reached ready and served https://www.tatvixtech.com on 10 October 2026, source `f616f3ec1c4dbc4a4ae4ea8dfa0247e335366c05`.
- Public audit passed: 29 pages, 30 internal targets, unique metadata, initial HTML, canonicals, sitemap, crawler rules, legacy 301s and genuine missing-route 404s. Apex HTTPS and HTTP www redirect to HTTPS www with 301. TLS checks used normal certificate validation.
- `/api/contact` on both www and the stable Netlify origin returns 405 for GET and 400 with field errors for an empty POST. These validation checks send no mail.
- The single separately authorised public enquiry test, reference `TATVIX-NETLIFY-20261010-01`, returned success in the browser; the user confirmed receipt at info@tatvixtech.com. No further retry was sent.
- Desktop and 390 × 844 mobile inspection confirmed the homepage 3D renderer, firmware scene, readable content, navigation and contact success state. No browser warnings/errors appeared in the inspected desktop session. This is not a measured PageSpeed/Core Web Vitals result.
- The starter favicon has been replaced with a temporary plain T initial in SVG, 96px PNG, multi-size ICO and 180px Apple icon. It is not an official company logo. Google must recrawl before its search icon can change; display is not guaranteed. Guidance checked: https://developers.google.com/search/docs/appearance/favicon-in-search (10 October 2026).

- Local native Next.js production build passed.
- Hosted attempts `6aca1844ad3673323a9cad3a` and `6aca1add90d71fb6077c5e9b` compiled and bundled successfully, then failed because the existing project classified public business details as secrets. Neither replaced the live website. The second scan revealed additional aliases for the same public city and email values; the exception explicitly names these public keys rather than disabling scanning.
- 17 automated checks passed, including SMTP address/content sanitisation and the direct-mode delivery path with a stub transport. These tests send no email.
- After deployment, run `node scripts/audit-seo.mjs https://www.tatvixtech.com docs/qa/netlify-production-seo-audit.json`, check the rendered desktop/mobile experience, the contact route's no-mail validation, TLS and legacy redirects. Record the native deploy result and any limitations in the task response.
- The previously received test confirmed the old backend's actual SMTP credentials work. A stub transport test is not a new production inbox-receipt check. Do not send another test email without specific authorisation.

## Continuous deployment connection

Before this release, Netlify was connected to **IndiGtech/TatvixTech**, branch **main**, while the redesigned website is maintained in **Priyanshu-korat/Tatvix-Website**, branch **feat/website-foundation**. A source-upload deployment does not change that Git connection. A subsequent push to the old production branch can replace the manual release. Reconnect the Netlify project to the maintained repository/branch through Project configuration → Build & deploy → Continuous deployment, or explicitly lock automatic publishing while that connection is being updated. The browser dashboard requires the account's existing sign-in; no password is read or changed by this release.

The Site's private preview and Netlify production are separate deployments. The production canonical remains www; secondary preview addresses remain non-indexable in page metadata. Verify Search Console and Bing ownership and submit the www sitemap using the search-verification runbook. Rankings and AI citations are not guaranteed.
