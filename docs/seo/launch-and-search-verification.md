# Tatvix search readiness and public launch

Updated 10 October 2026. Chosen canonical origin: **https://www.tatvixtech.com**. Public brand names: **Tatvix** and **Tatvix Technologies**.

## Implemented

- 29 server-rendered pages with useful first-response HTML, one H1, unique titles/descriptions, canonical URLs and social metadata. Important content does not depend on 3D or animation.
- Eight service pages, seven application/industry pages, four original published case studies and company/process/contact/legal pages. Service and industry URLs from the old sitemap are retained.
- Visible short/full brand identity, Gandhinagar location and verified LinkedIn link; Organization and WebSite entity markup. Service, BreadcrumbList and Article markup describe the content actually present.
- Canonical XML sitemap without fabricated freshness dates. Known `/insights` paths permanently redirect to the corresponding `/case-studies` paths. Unknown detail pages return 404.
- Production indexing applies only to the exact www host. Other hosts carry noindex in metadata and the Worker response header; authentication remains the access boundary for the private preview. Robots permits crawlers to see content/assets while excluding API paths. Robots is not a security control.
- Googlebot, Bingbot and OAI-SearchBot have search access in the prepared configuration. GPTBot and Google-Extended retain the permission already explicitly published on the existing site; search and training are separate choices. CCBot retains its existing block. No special AI files, hidden prompts, keyword lists or review/rating markup were added.
- Text technology lists are tied to services. Names identify relevant options, not vendor partnerships. No unsupported years/project counts, delivery percentages, client endorsements, certification claims or invented case studies were added.

## Verification performed

1. TypeScript check and 15 automated tests covering contact safeguards, stable-backend forwarding and redirect rejection, the actual Workers request runtime, scene geometry, host indexing policy, crawler rules, route inventory, legacy mapping, brand metadata and safe JSON-LD serialization.
2. HTTP crawl of the built Worker: 29 pages, 30 linked local targets, unique metadata, first-response text, canonical URLs, H1s, JSON-LD parsing, social metadata, preview noindex meta/header, sitemap inventory, legacy 301s and unknown 404s. Full results: `../qa/seo-audit.json`. Run `node scripts/audit-seo.mjs http://127.0.0.1:5173 docs/qa/seo-audit.json` against a running built local Worker.
3. Desktop and mobile visual inspection of services, application content and homepage links. The new reading pages load no Three.js scene; the homepage retains adaptive rendering, reduced-motion and pause controls. Public field performance and search-engine acceptance remain unmeasured. A passed JSON parse is not external rich-result validation.

## Public launch gates, in order

1. **Email delivery — confirmed for the built local website and real backend:** the bridge now forwards to the original server's stable `https://tatvix.netlify.app/api/contact`, independently of www DNS. The existing DNS CNAME identifies this Netlify site; direct GET checks returned 405 for the contact route with no redirect. Redirect following is disabled using Workers-supported manual mode, and self-forwarding remains blocked. The authorised retry succeeded and the user confirmed receipt at `info@tatvixtech.com` on 10 October 2026. Keep that Netlify deployment and its SMTP configuration running after the marketing-domain cutover. Check final-domain routing at launch without duplicate unsolicited tests. The failure diagnosis, authorised retry and receipt evidence are recorded in [the launch-readiness report](../qa/launch-readiness-2026-10-10.md).
2. Review application scopes with the company, especially medical, automotive and security work. Keep only services the company can actually offer. Reconfirm the careers status at launch; the carried-forward “not hiring” status was checked on the old public page on 10 October.
3. Preserve/backup the existing deployment and DNS records. Attach www using the exact records supplied by Sites. Preserve MX and mail-related TXT records. Provision TLS and choose public visitor access for the marketing site when launch is ready. No domain is currently attached to this Sites project and access is still owner-private.
4. Route apex `tatvixtech.com` and HTTP traffic to HTTPS www. The Worker includes canonical redirects when these hosts reach it; DNS/gateway routing and TLS still need verification. Preserve old paths and the specific case-study redirects. Do not redirect every unknown URL to the homepage.
5. Verify from an unauthenticated connection that production pages/assets return 200, intended redirects return 301, missing pages return 404, and Google/Bing/OpenAI search crawlers face no sign-in, firewall or bot challenge. Confirm the www responses have index/follow and no inherited X-Robots-Tag noindex. Keep the preview non-indexable.
6. Open `https://www.tatvixtech.com/robots.txt` and `/sitemap.xml`. Confirm all sitemap URLs resolve on www, use the desired canonical and are indexable. Inspect representative JSON-LD in Schema.org Validator and supported Article/Breadcrumb markup in Google's Rich Results Test. Service/Organization parsing does not promise a special search appearance.
7. Run mobile and desktop PageSpeed/Lighthouse on the public deployment. Inspect LCP, INP and CLS, plus the homepage's WebGL load cost on representative hardware. Fix regressions before declaring launch QA passed. Field Core Web Vitals require real traffic; no performance score is claimed here.
8. Complete ownership verification and sitemap submission below. Record launch date, deployment version, DNS/TLS checks, mail receipt, audit findings and rollback destination. Search discovery, ranking and AI citations are not guaranteed.

## Google Search Console

1. Use the company's Google account and reuse an existing verified `tatvixtech.com` Domain property where possible. A Domain property covers www, apex and protocols.
2. Otherwise add a Domain property for `tatvixtech.com`. Copy Google's exact TXT record into the authoritative DNS, wait for propagation and choose Verify. Retain the verification record. Do not invent or reuse another property's token.
3. If DNS verification is unavailable, add a URL-prefix property for **https://www.tatvixtech.com/** and use one of Google's offered file/meta methods. Keep the verification file/tag accessible.
4. Submit **https://www.tatvixtech.com/sitemap.xml** after public launch. Use URL Inspection and its live test for the homepage, firmware service, agriculture page and a case study. Compare declared and Google-selected canonicals, rendered text and crawl/index eligibility.
5. Request indexing for important changed pages where appropriate. Watch sitemap processing, page indexing, crawl errors, performance queries for both brand names and service topics, and Core Web Vitals. Submission does not guarantee indexing or ranking.

## Bing Webmaster Tools

1. Use the company's account. Reuse an existing verified site or import the verified property from Google Search Console when offered.
2. Alternatively add **https://www.tatvixtech.com/** manually and follow the exact XML-file, meta-tag or DNS verification method offered by Bing. Keep its verification artefact in place.
3. Submit the www sitemap. Use URL Inspection, Site Scan and the robots tester on representative service/industry pages. Check public access and the canonical destination of legacy paths.
4. Monitor indexing, relevant search queries and crawler failures. IndexNow can be evaluated for future real content updates; it is optional and does not guarantee inclusion or rank.

## Official guidance reviewed

- Google AI features: https://developers.google.com/search/docs/appearance/ai-features — normal SEO, index/snippet eligibility, visible text and matching structured data; no special AI file or schema required.
- Google site names: https://developers.google.com/search/docs/appearance/site-names — WebSite name and alternateName for consistent identity.
- Google verification: https://support.google.com/webmasters/answer/9008080 — Domain DNS verification and URL-prefix alternatives.
- Bing guidelines: https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a — clear crawlable structure and entities, factual content, canonical sitemaps, no stuffing. Read in the browser because the text fetch omitted its JS content.
- Bing verification: https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b — ownership verification reference.
- OpenAI crawler reference: https://developers.openai.com/api/docs/bots — OAI-SearchBot supports Search; GPTBot training and ChatGPT-User retrieval have different roles. Check current published IP guidance at the gateway, rather than hard-coding stale ranges.

Recheck these references before changing public access or crawler policy. No claim of universal first position, rich-result eligibility or AI citation is made.
