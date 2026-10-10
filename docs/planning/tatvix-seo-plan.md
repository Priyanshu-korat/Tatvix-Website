# Tatvix website SEO and AI search requirements

Updated 10 October 2026. SEO implementation and local built-Worker audit completed; the new site remains an owner-private preview. The public www domain still serves the existing website. See `../qa/seo-audit.json` for the executable crawl audit and `../seo/launch-and-search-verification.md` for remaining launch gates and verification instructions.

## Build requirements
- Deliver static or server-rendered semantic HTML with meaningful visible text, headings, navigation, and real anchor links. Core company information, services, answers, and contact details must work without JavaScript, animation, or 3D.
- Give each indexable page a unique descriptive title and meta description, an absolute canonical URL on the chosen production domain, and useful internal links.
- Generate an XML sitemap containing only canonical, indexable, successful production URLs. Use accurate last-modified dates when available. Reference it in robots.txt.
- Plan migration from the existing website: inventory old URLs, preserve useful routes, and use permanent redirects for changed URLs. Normalize HTTPS and the chosen www/non-www hostname; avoid redirect chains and soft 404s.
- Use valid JSON-LD only where appropriate and supported by visible factual content. Include Organization and relevant breadcrumbs/services/article data as appropriate; do not invent reviews, certifications, clients, results, or schema properties. Schema validity does not guarantee a rich result.
- Write original customer-focused service content explaining capabilities, deliverables, development process, requirements, and common questions. Verify claims with the company before publishing. Show clear company identity and contact information.
- Use consistent design tokens, accessible contrast and keyboard navigation, reduced-motion alternatives, responsive media, reserved image dimensions, font optimization, lazy-loaded nonessential assets, and minimal JavaScript. Load 3D only when useful, with a static fallback.

## Crawler policy
Recheck official guidance immediately before configuring production access. Allow intended public pages to Googlebot, Bingbot, and OAI-SearchBot, and verify that hosting, CDN, authentication, and bot protection do not obstruct them. Search discovery and model-training access are separate choices: do not infer GPTBot or Google-Extended training permission from a request for search readiness. ChatGPT-User is user-triggered retrieval and is distinct from automated search crawling. Keep previews non-indexable; robots.txt is not access control. Ensure launch removes unintended noindex and X-Robots-Tag restrictions. Do not block crawling of a page whose noindex directive must be read.

No llms.txt requirement and no promises of rankings, indexing, rich results, or AI citations.

## Pre-launch audit (to execute against the completed site)
- Crawl all routes; report status codes, broken links, orphan pages, redirect chains, duplicate/missing metadata, canonicals, sitemap consistency, and unintended index restrictions.
- Inspect initial HTML and a JavaScript-disabled view for essential content and navigation.
- Validate robots.txt for each intended crawler and test public access without a session.
- Validate structured data syntax and compare every claim with visible content; run Google's Rich Results Test only for supported types.
- Review factual copy, headings, customer answers, image alternative text, and internal linking.
- Test mobile layouts, keyboard access, reduced motion, and performance with Lighthouse/PageSpeed. Report lab measurements honestly; field Core Web Vitals may need traffic and time after launch.
- Record findings, fixes, remaining issues, and launch readiness. Check the deployed production domain again after publishing.

## Google Search Console verification
1. Sign in to Search Console using the company's account.
2. Add a Domain property for tatvixtech.com, if it remains the production domain; reuse an existing verified property when appropriate.
3. Copy the exact TXT verification record supplied by Google into the domain's DNS, then verify after propagation. Keep the record in place. If DNS access is unavailable, use a URL-prefix property for the exact production URL with an offered HTML file or meta-tag method.
4. Submit the production sitemap URL, inspect important URLs using URL Inspection, and check live crawl access and canonical selection.
5. After launch, monitor page indexing, sitemap processing, enhancements where relevant, and Core Web Vitals. Verification and submission do not guarantee indexing.

## Bing Webmaster Tools verification
1. Sign in using the company's account and reuse an existing verified site when appropriate.
2. Import the verified site from Google Search Console, or add the production URL manually and use Bing's offered DNS, XML-file, or meta-tag verification method.
3. Keep the verification record/file/tag in place and submit the production XML sitemap.
4. Use URL Inspection, the robots.txt tester, and Site Scan to check public access and SEO issues; monitor indexing after launch.

## Official guidance checked
- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- Google technical requirements: https://developers.google.com/search/docs/essentials/technical
- Google ownership verification: https://support.google.com/webmasters/answer/9008080
- Bing verification: https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b
- Bing sitemaps: https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed
- Bing robots.txt tester: https://www4.bing.com/webmasters/help/robots-txt-tester-623520ca
- OpenAI crawlers: https://developers.openai.com/api/docs/bots
