# Launch readiness — 10 October 2026

## Confirmed this release

- The enquiry bridge now calls `https://tatvix.netlify.app/api/contact`, the stable original backend, rather than the marketing domain. DNS inspection showed the existing www site uses that Netlify origin. Keeping it independent prevents the bridge forwarding to itself when www moves to Sites.
- Redirects are never followed. The local workerd runtime rejected `redirect: 'error'` before making an outbound request, despite the current Cloudflare reference listing that mode. The bridge now uses supported `manual` mode and explicitly rejects 3xx responses.
- A no-mail diagnostic with the old server's documented honeypot confirmed the corrected transport reaches that server. Honeypot success alone was not treated as proof of delivery.
- The first authorised browser submission at **10:22:24 UTC / 15:52:24 IST** returned 502 before outbound delivery. The user confirmed no receipt. After correcting the runtime setting, the user separately authorised one retry.
- The retry at **10:30:34 UTC / 16:00:34 IST** used the local production-built Worker and the real original email backend. The form displayed its thank-you state, and the user confirmed receipt at **info@tatvixtech.com**. Subject: **New Inquiry: General from Tatvix Website QA**. Reference: **TATVIX-LAUNCH-20261010-01**. This closes the local-to-real-backend delivery test; it does not claim a separate submission from the hosted preview or final custom domain.
- SMTP credentials remain on the existing server. The new Sites project has no SMTP credentials and does not expose them to the browser. Keep the original Netlify backend and its SMTP settings running after the marketing domain moves.

## Validation

- 15 automated tests passed, including validation, consent, honeypot, throttling, stable-backend forwarding, redirect rejection, the actual workerd Request constructor, scene geometry and SEO host policy.
- TypeScript and the supported Sites production build passed. A Windows build initially encountered the running preview's file lock; stopping the owned preview and rebuilding resolved it.
- The production-built local Worker passed the 29-page / 30-internal-target SEO audit: unique metadata, canonical URLs, meaningful initial HTML, one H1, parseable JSON-LD, social metadata, sitemap, internal links, preview noindex, old-case 301s and genuine 404s. See `seo-audit.json`.
- Visually checked the desktop enquiry success state. Screenshot saved in the task output as `tatvix-contact-delivery-success-2026-10-10.png`. Earlier release records cover the mobile contact and case-study layouts; this release changes transport, not layout.
- The source helper packages the verified build and publishes it to the existing owner-private audience. Exact deployment identifiers are returned in the conversation after publication.

## Remaining public-launch gates

1. Connect **www.tatvixtech.com** to Sites with the exact records supplied by hosting, verify DNS/TLS and preserve the current site as rollback. Do not retire the Netlify email backend.
2. Apply the intended public audience for launch, then check unauthenticated production access and crawler access. The current private preview remains deliberately noindex.
3. Verify canonical www redirects, production robots/sitemap, index/follow headers and representative structured data on the actual public host.
4. Run public mobile/desktop PageSpeed and interactive WebGL checks on representative hardware. The build still warns about a client chunk over 500 kB; no Lighthouse score or field Core Web Vitals pass is claimed.
5. Verify Google Search Console and Bing Webmaster Tools ownership and submit the public sitemap using the launch runbook. No search ranking or AI citation is guaranteed.
6. Check final-domain enquiry routing at launch without sending unsolicited duplicate QA emails. The receipt confirmed above is the completed real delivery test for this release.

Unverified numerical delivery claims, named testimonials and endorsement-style logo displays remain omitted pending factual evidence and permission. Published case studies and relevant technology descriptions provide the current proof of expertise.
