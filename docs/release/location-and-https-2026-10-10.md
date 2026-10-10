# Gandhinagar identity and HTTPS correction — 10 October 2026

## Website release

- Source: `721be84` on `feat/website-foundation`, pushed to Priyanshu-korat/Tatvix-Website.
- Netlify deploy: `6aca2c78a505d6f5249d31e9`, published 15:19:47 UTC, ready and locked.
- Updated company base from Ahmedabad to Gandhinagar, Gujarat, India in homepage, About, Services metadata, Contact, Privacy, Terms, shared footer and Organization structured data. Only city/state/country are published, with no building/street/postcode/coordinates.
- About now welcomes enquiries from Ahmedabad and across Gujarat without claiming an office there. Added useful selection criteria for embedded/IoT engineering partners and internal links to existing factual service and industry pages. Agriculture IoT page answers how to begin a device development project.
- Native production build passed and all 18 automated checks passed. Hosted audit passed all 29 pages and 33 internal targets: metadata, canonicals, H1, initial HTML content, structured data, indexing, links, sitemap, redirects, 404s and crawler rules.
- Desktop Contact visually checked; mobile Contact and About checked at 390 × 844 with no horizontal overflow. Gandhinagar was visible. Actual live HTML was checked on home, About, Contact, Privacy and Terms: no incorrect Ahmedabad company-base statements or streetAddress fields.
- No additional email was sent. Existing Analytics consent and lead handling were preserved.

## Browser certificate warning

The owner reported `NET::ERR_CERT_DATE_INVALID` on https://tatvixtech.com. The apex had two A records: `216.198.79.1` and Netlify's `75.2.60.5`. Explicit requests to Netlify passed certificate validation and redirected to www. Explicit requests to the conflicting address failed with an expired certificate. Netlify already had a valid Let's Encrypt certificate for both hostnames; a certificate renewal was not needed.

Removed only the conflicting apex A record `216.198.79.1` through the existing signed-in GoDaddy DNS dashboard. Retained the Netlify apex address, www CNAME, nameservers, email MX and Google/Bing verification records. Nameserver settings and email routing were not changed.

After correction, the authoritative nameserver and Cloudflare public resolver returned only `75.2.60.5`. Normal HTTPS requests, with certificate validation enabled, returned 301 from the apex to https://www.tatvixtech.com/ and 200 on www. Both names share a trusted certificate valid 20 August–18 November 2026. Browser navigation from the bare domain loaded the www homepage and Contact page without a security interstitial. HTTP also redirects to HTTPS.

Some clients may retain a previous DNS answer temporarily; this does not justify bypassing a browser security warning. Refresh after the cache expires. Netlify manages certificate renewal automatically; DNS must remain pointed at Netlify.

## Remaining work

Current Git continuous deployment is still connected to the old repository. The published release remains locked to prevent accidental replacement. See the existing Netlify launch runbook for the separate GitHub identity confirmation/reconnection steps.

Search Console, Bing and Business Profile verification status has not been established in this release. Existing DNS ownership records were preserved; their presence alone does not prove current verification or indexing. Follow `docs/seo/local-search.md` for next steps. Rankings, indexing and AI citations are not guaranteed.
