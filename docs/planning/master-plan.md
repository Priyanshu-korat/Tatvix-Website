# Tatvix Technologies — website master plan

Prepared: 3 October 2026. Revision 3: implementation playbook and software delivery management process. Status: planning only; website implementation has not started. The implementation tasks and website audits below remain pending.

## How to use this plan

Sections 1–5 establish the purpose, creative direction, and page structure. Section 6 is the ten-stage overview. Section 10 expands every stage into executable tasks with inputs, methods, deliverables, checks, and fallback decisions. Sections 11–14 provide page specifications, test cases, release controls, and a record of the two plan reviews. Section 15 defines project management, responsibilities, development review, QA, business acceptance, and release governance across all stages. Treat the detailed runbooks as the execution specification where they clarify the overview. Read the companion [SEO and verification guide](tatvix-seo-plan.md) alongside this document.

Work through gates G1–G10 in order, allowing preparation that does not depend on an unfinished gate. SEO, accessibility, and performance are continuous requirements, starting with architecture and content; their dedicated stages consolidate and verify that work. A gate is a recorded evidence checkpoint, not an automatic request for user permission. Ask for business facts, credentials, or decisions only when needed; continue independent work in the meantime.

This plan does not promise that every future test will pass. It specifies how to discover problems, fix them, retest, and accurately report what remains unverified.

## 1. The outcome we are designing for

Build a distinctive, credible engineering company website that earns attention immediately, explains Tatvix clearly, and helps suitable customers start a project. “World class” will mean excellent visual craft, useful original content, working interactions, accessible implementation, fast mobile delivery, and reliable enquiry handling—not a claim we put in the marketing copy.

Primary audience hypothesis: founders, product leaders, and engineering teams looking for embedded hardware, firmware, and connected-product development. Confirm priority sectors and geography during content discovery. Primary conversion: a successfully delivered, relevant project enquiry. Secondary conversion: a visitor explores a relevant service and supporting project story before contacting Tatvix.

The first screen must answer three questions: What does Tatvix build? Is this relevant to my project? What should I do next? A short comprehension check with representative prospective customers is desirable; no conversion uplift is promised before measurement.

## 2. What we learned from the existing website

Reviewed the live desktop homepage visually and its navigation/text, plus the services page, process page, and one engineering article. This was a reference review, not a complete accessibility, technical, or performance audit.

Preserve the recognizable logo and blue/teal family, the hardware-to-software positioning, service deliverables, process explanation, useful engineering writing, and contact routes. Improve the abstract hero treatment with a product-focused composition. Make service discovery more specific and group related capabilities so the homepage is easier to scan. The current homepage routes multiple service links to the shared services page; the redesign should offer meaningful service destinations.

Inventory and verify existing numerical claims, testimonials, certification wording, timelines, and technology marks before reuse. Existing publication is evidence of what the old site says, not proof that each claim is accurate. Keep source-derived summary content concise; write the new pages from company-approved facts.

## 3. Creative direction: precision made tangible

Recommended direction: a calm, premium engineering studio with a memorable product illustration, strong typography, real engineering evidence, and deliberate movement.

Hero concept: an exploded connected-device assembly—enclosure, PCB, sensing element, and a companion interface—showing how Tatvix connects physical hardware to useful software. Use a real approved product/CAD asset if available. Otherwise create an illustrative concept and identify it as such where it might be mistaken for client work. Generated images must never serve as fabricated evidence of a delivered product, facility, team, or certification.

Proposed headline for refinement: “Engineering connected products, from board to interface.” Supporting copy will explain hardware, firmware, cloud, and applications in one plain sentence. Primary action: “Discuss your project.” Secondary action: “Explore our engineering.” Final wording follows factual content review.

The hero is the main expressive moment. Other sections use quiet surfaces, generous spacing, precise diagrams, and varied layouts according to their content. Avoid repeated glowing cards, generic particle backgrounds, constant logo marquees, scroll hijacking, cursor replacements, and an animation on every element. Retain normal scrolling and immediately readable text.

Two directions to compare in the design pass:

| Direction | Treatment | Decision |
|---|---|---|
| Product on the engineering bench | Light surfaces, navy text, deep teal actions, large product composition | Recommended: connects directly to Tatvix's engineering offer and gives case studies room to breathe |
| Dark technical showcase | Dark hero, illuminated product, light supporting pages | Alternative if actual assets look substantially stronger; test legibility and mobile load before choosing |

UI UX Pro Max returned useful accessibility and trust guidance, but its initial traditional/legal typography recommendation did not fit Tatvix. A narrower typography search was also too generic to establish the brand. The proposed type and layout below are editorial choices using Frontend Design principles, not blindly adopted database output.

## 4. Initial design system

These are proposed tokens, to be refined against the logo and real content in the first browser design pass.

| Token | Value | Role |
|---|---|---|
| Ink | #123047 | Headings, body text, dark panels |
| Paper | #F5F8FA | Main page surface |
| White | #FFFFFF | Secondary surface and inverse text |
| Deep teal | #006B73 | Primary actions and links |
| Steel | #526777 | Secondary text |
| Signal cyan | #53D3DD | Illustration accent; not small text on light surfaces |

Typography proposal: IBM Plex Sans for a technical but readable identity, with a system sans-serif fallback; optional IBM Plex Mono only for actual technical labels. Confirm official font files and licensing before bundling. Limit families and weights. Use fluid heading sizes, approximately 16–18px body text, comfortable line height, and paragraphs around 55–75 characters wide.

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Use a fluid container capped near 1240px, 20–24px mobile gutters, and content-driven breakpoints. Define component-specific radius, borders, focus, error, hover, disabled, loading, and success states. Check every real text/background combination, including hover/focus states.

## 5. Page structure and homepage sequence

Main navigation: Services, Work, Process, About, Insights, and Discuss your project. Industries may live under Services initially to keep navigation manageable.

| Route or page | Job and required content |
|---|---|
| / | Clear offer, distinctive hero, selected proof, capability overview, process preview, customer questions, contact action |
| /services | Overview organized around customer needs and deliverables |
| Service detail pages | Hardware/PCB, firmware, IoT/cloud, and connected applications; testing/production support gets a separate page only with sufficient useful content |
| /work and project details | Evidence-backed engineering stories: problem, constraints, Tatvix's role, approach, deliverables, substantiated outcomes |
| /process | Discovery through validation and handover; what the customer receives at each stage |
| /industries | Preserve existing route; publish only sectors supported by relevant expertise and useful examples |
| /about | Real company story, people if approved, engineering approach, location and contact details |
| /insights and existing article routes | Original technical explanations, real authors/reviewers, accurate dates and related services |
| /contact | Accessible enquiry form, direct contact fallback, explanation of the next step |
| /privacy and /terms | Accurate policies matching actual processing and business practices; preserve routes |
| /careers | Preserve useful existing content; show accurate current status rather than invented vacancies |
| 404 page | Correct HTTP status and helpful navigation |

Homepage order:

1. Header and immediately understandable hero with one dominant illustration.
2. A concise evidence section: approved project facts or real capabilities, not unsupported metrics.
3. Selected engineering work, with one large story and smaller supporting stories if evidence exists.
4. Connected-product capability map with adjacent HTML descriptions and service links.
5. Service overview organized by the customer's project need.
6. Development process with clear stage outputs.
7. Industry relevance and selected technical writing, kept compact.
8. Answers to common project questions and a clear enquiry invitation.
9. Footer with contact, navigation, legal links, and accurate business identity.

If credible work assets are not ready, replace the work showcase with an honest engineering approach section and defer empty project pages. Keep the rest of the launch scope usable.

## 6. Step-by-step delivery plan

### Step 1 — Audit and assemble the source material

Inventory all current public URLs, titles, descriptions, images, internal links, contact flows, and downloadable files. Check for existing Search Console/Bing properties and analytics if access is available. Record current performance before making comparisons. Collect logo originals, actual product imagery, company details, service priorities, approved case studies, and claim evidence. Maintain a content ledger: confirmed, awaiting confirmation, or omit.

Deliverables: URL inventory, asset inventory, fact ledger, and baseline report. Exit condition: no important existing route or unverified marketing claim is silently carried forward.

### Step 2 — Define the content and customer journey

Map customer questions to pages. Draft service content around problems solved, deliverables, collaboration process, constraints, and next steps. Cover questions about existing hardware, prototypes, firmware support, handover, and project inputs only with verified answers. Avoid unsupported fixed delivery promises. Assign each page a primary purpose and enquiry path.

Deliverables: final sitemap, content outlines, metadata map, and old-to-new URL map. Exit condition: no duplicate thin pages or service pages without distinct value.

### Step 3 — Establish the visual system in the browser

Create a small coded design study when building is authorized: header, hero, one service section, one evidence section, and mobile equivalents. Compare the two visual directions above using the same content. Refine palette, type, grid, spacing, illustration, and component states. Review the result against Tatvix's subject matter rather than a generic technology template.

Deliverables: selected design direction and reusable tokens/components. Exit condition: headline clarity, readable contrast, usable mobile composition, and distinctive brand character. Figma is not required.

### Step 4 — Set up the Sites project and source workflow

Use the available Sites capability, its supported starter, and the portable Windows setup/preview workflow. Follow current Sites setup references at implementation time. Establish a working Git branch in Priyanshu-korat/Tatvix-Website after checking repository state. Sites may manage a separate source repository: confirm the supported relationship and maintain a documented GitHub source copy or synchronization workflow without assuming native linking.

Use TypeScript where the starter supports it. Require prerendered or server-rendered HTML for all public marketing routes; prove the chosen starter delivers headings, body copy, metadata, and links in the initial response. If it cannot, use a Sites-supported static output approach before building the remaining pages. Do not ship a client-only shell as the SEO foundation.

Set up reproducible dependencies and a lockfile, environment examples without secrets, formatting/lint checks, build checks, and a content model that can be edited without changing layout code. Keep a CMS optional until the publishing workflow justifies it.

Deliverables: reproducible project, working preview, documented source ownership, and one verified rendered route. Exit condition: clean build and crawlable initial HTML.

### Step 5 — Build content, navigation, and conversion first

Implement the common layout, page templates, navigation, service pages, evidence content, and responsive footer. Build a concise enquiry form with name, email, and project summary; optional company/project-stage fields only where useful. Include visible labels, field-level errors, sending/success/failure states, rate limiting and spam controls, and a real server-side delivery path supported by Sites and the chosen provider.

Confirm enquiry recipient and credentials before delivery setup. Never report success before the server accepts the submission. Test a labelled test enquiry end-to-end with authorization and verify its receipt. Avoid file uploads in the first release unless there is a clear requirement. Ensure privacy copy matches collected data and retention. Provide a working direct email/contact fallback.

Deliverables: functioning content routes and enquiry flow. Exit condition: links work, forms are usable by keyboard, errors recover, and delivery is verified before launch.

### Step 6 — Add the signature visuals and motion

Use image generation for custom illustrative assets where actual assets are unavailable; optimize outputs for their display sizes. Use Lucide with individual icon imports and accessible labels for controls.

Choose GSAP for the proposed coordinated product sequence and scroll-linked explanation if that direction is selected. Choose Motion instead if the design mainly needs component transitions. Do not add both automatically. Install Three.js only if interactive 3D clearly improves understanding and fits measured performance budgets. A well-composed image or SVG is the default fallback, not an unfinished state.

Motion is progressive enhancement: text and navigation render first. No content relies on a timeline to become accessible. Respect prefers-reduced-motion, pause offscreen activity, clean up listeners, avoid layout-heavy animation, and stop unnecessary continuous rendering. For 3D, lazy-load the bundle, cap rendering resolution, handle WebGL/context failure, provide keyboard-operable controls where relevant, and offer equivalent textual information. Mobile may receive a static composition.

Deliverables: approved hero visual, purposeful motion, and tested static/reduced-motion alternatives. Exit condition: the effect enhances comprehension without delaying the core content.

### Step 7 — Implement SEO and AI search readiness

Use the accompanying tatvix-seo-plan.md as the detailed specification. Add unique titles/descriptions, absolute production canonicals, semantic headings, normal internal anchor links, XML sitemap, appropriate robots.txt, and structured data that matches visible content. Use Organization, BreadcrumbList, and Article where appropriate; Service markup is descriptive and is not a promise of a Google rich result.

Recheck official Google, Bing, and OpenAI guidance immediately before configuring crawler access. Search bots and training controls are separate. Verify both robots rules and actual unauthenticated hosting/CDN access. Keep preview URLs non-indexable, then ensure production is intentionally public and indexable. No llms.txt requirement or promise of rankings or AI citations.

Preserve useful existing paths and maintain permanent redirect mappings for changed routes. Check HTTPS/hostname normalization, real 404 responses, canonical consistency, and sitemap coverage. Add social sharing metadata and appropriate preview images.

Deliverables: metadata inventory, sitemap, robots rules, schema validation, redirect map, and crawler-access evidence. Exit condition: all intended public routes can be discovered and read.

### Step 8 — Verification pass A: implementation quality

Run build/type/lint checks appropriate to the project. Crawl all routes for status codes, internal links, metadata, canonical/sitemap consistency, duplicate content, and redirects. Inspect initial HTML and JavaScript-disabled pages. Validate structured data and compare it with visible facts.

Check representative widths at 360, 390, 768, 1024, and 1440px, plus fluid resizing and zoom. Test keyboard navigation, focus visibility, screen-reader landmarks, form errors, reduced motion, touch targets, and contrast. Use automated accessibility checks plus manual review; an automated score alone is insufficient. Review hero, navigation, service detail, article, and contact on Chromium and available Firefox/Safari or equivalent real devices; mark unavailable combinations as untested.

Measure mobile performance on homepage, a service detail, an article, and contact. Investigate slow assets and long tasks. Aim for good field Core Web Vitals: LCP ≤2.5 seconds, INP ≤200ms, CLS ≤0.1 at the 75th percentile. Pre-launch lab tests are proxies; field outcomes need real traffic. Initial engineering budgets: core compressed JavaScript around 200KB or less before optional 3D, hero image around 250KB where visual quality permits, and minimal critical font files. Adjust only with recorded reasons and measurements.

Deliverable: audit report with page, issue, severity, evidence, and fix. Exit condition: no broken enquiries, inaccessible primary actions, critical crawl blocks, false claims, or major mobile failures.

### Step 9 — Verification pass B: fresh review and regression

After fixes, repeat affected tests from a fresh session, then recheck the full primary visitor journey: land on homepage, understand the offer, open a relevant service, inspect evidence, and enquire. Review every page against the requirements matrix below. Recheck factual claims and all published asset permissions. Repeat mobile performance under the same conditions for a meaningful comparison.

This is a second review pass by the same agent unless the user later authorizes another reviewer; do not describe it as an independent external audit. Retain results from both passes and label untested items accurately.

Deliverable: second audit with pass/fail/blocked status and regression results. Exit condition: launch blockers resolved and remaining limitations visible.

### Step 10 — Publish, verify the live domain, and hand over

Publish through Sites after the implementation and pre-launch checks are complete. Confirm the production hostname and DNS access before replacing the old website. Preserve the existing live site and DNS records for rollback until cutover succeeds; do not assume the empty GitHub repository contains the old source.

Check deployment readiness, HTTPS, primary URLs, redirects, forms, robots, canonical tags, and sitemap on the actual public domain. If domain access is unavailable, distinguish a Sites review URL from completion of the production migration. Document the last working version and rollback procedure.

Use the separate verification guide for Google Search Console and Bing Webmaster Tools, reusing existing properties where appropriate. Submit the sitemap and inspect representative URLs. Keep verification records in place. Measure enquiry submissions and useful service journeys with an appropriately configured analytics approach, excluding personal enquiry content from analytics.

Deliverables: live URL, source and update instructions, deployment/rollback notes, verification guide, and audit reports. After launch, review indexing, errors, real-user performance, and enquiry quality at agreed checkpoints; no background monitoring is scheduled by this plan.

## 7. Two-pass acceptance matrix

Both implementation passes are pending; only the plan has been reviewed so far.

| Area | Pass A | Pass B / final proof |
|---|---|---|
| First impression | Desktop/mobile visual critique and clear proposition | Fresh visitor journey and optional human comprehension check |
| Brand consistency | Token/component review | Every page checked for drift and inconsistent states |
| Content credibility | Fact ledger and source review | Published claims, testimonials, and visuals rechecked |
| Essential content | Initial HTML and JS-disabled inspection | Repeat on final build and public deployment |
| Accessibility | Automated scan + keyboard/zoom/contrast review | Retest fixes, focus, form states, touch and reduced motion |
| Performance | Representative mobile lab runs | Repeat same conditions; post-launch field data when available |
| SEO and AI access | Crawl, metadata/schema/robots/sitemap tests | Recheck final build, redirects and production access |
| Enquiries | Validation, failure states, spam controls, test delivery | Fresh submission and verified receipt before launch completion |
| Release reliability | Build, route coverage, source and rollback plan | Production smoke checks and recorded working version |

## 8. Dependencies and working boundaries

Installed skills: Frontend Design and UI UX Pro Max. Available capabilities: Sites build/preview/publish and image generation. Add project dependencies only as needed: Lucide, GSAP OR Motion, and optional Three.js, using their free features. No Figma dependency.

Inputs needed at the appropriate stage: approved logo/assets; factual service and company details; permission to publish project stories and testimonials; enquiry destination/provider configuration; production domain/DNS access; and existing webmaster property access if available. These are delivery dependencies, not reasons to stop preliminary implementation once building is requested. Omit unsupported claims and use labelled illustrative assets while evidence is pending.

Suggested order of effort: content and routes → design study → functioning site → visuals/motion → two audits → production cutover. Do not assign a fixed delivery date until content availability, page scope, and backend requirements are known. Add optional sector pages, 3D, or a CMS only after core quality is established.

## 9. Plan verification record

Review 1 — requirement coverage: checked against the user's setup, no-Figma, library selection, design quality, SEO, crawler guidance, factual content, mobile performance, pre-launch audit, and webmaster-verification requirements. Each is assigned an implementation step and an acceptance check.

Review 2 — consistency and feasibility: checked dependency order, source ownership, Sites portability, crawlable rendering, 3D fallback, training-vs-search controls, content-evidence gaps, enquiry delivery, staging/production separation, URL migration, and rollback. Clarified that Sites/GitHub synchronization needs verification and lab performance is not field performance. Removed wording that could imply the second review uses an independent reviewer. The Step 3 design study uses a minimal local preview; Step 4 establishes the production project and source workflow. No claimed implementation test has been marked complete.

Result: the plan is ready to guide implementation. Design tokens, final copy, case-study evidence, chosen animation library, and hosting/domain details remain decisions to validate during the build.

## References

- Existing homepage: https://www.tatvixtech.com/
- Existing services: https://www.tatvixtech.com/services
- Existing process: https://www.tatvixtech.com/process
- Existing engineering article: https://www.tatvixtech.com/insights/battery-efficient-industrial-pressure-monitoring
- Core Web Vitals definitions: https://web.dev/articles/vitals
- Google AI/search guidance: https://developers.google.com/search/docs/appearance/ai-features
- Bing crawler testing: https://www4.bing.com/webmasters/help/robots-txt-tester-623520ca
- OpenAI crawler controls: https://developers.openai.com/api/docs/bots
- Detailed SEO and verification guide: tatvix-seo-plan.md (same folder)

## 10. Detailed execution runbooks

### Working roles and records

The implementing agent owns design, code, technical checks, and delivery records. Tatvix supplies or confirms company facts, client permissions, business priorities, enquiry routing, and domain/account access. No separate agent or external reviewer is assumed. Human visitor feedback is optional supporting evidence, not something to fabricate or claim was collected.

Create the following project documentation when implementation starts: `docs/content-inventory.csv`, `docs/claims.csv`, `docs/assets.csv`, `docs/route-map.csv`, `docs/page-briefs.md`, `docs/decisions.md`, `docs/design-system.md`, `docs/test-matrix.csv`, `docs/audits/pass-a.md`, `docs/audits/pass-b.md`, and `docs/launch-runbook.md`. These are planned deliverables, not files created by this planning task. Keep private evidence, credentials, and customer information out of the public GitHub repository. Public documentation may reference a private evidence identifier without embedding the evidence.

Use task states: not started, in progress, blocked, verified, or intentionally deferred. A verified item needs an evidence reference. A blocked item needs the missing dependency and the work that can continue. Every design/architecture decision records the choice, reason, alternative, tradeoff, and reversal cost.

### Runbook 1 — Discovery, baseline, and factual source material

**Goal:** know what must be preserved, what is credible, and what customers need before committing to page layouts.

**Inputs:** the current site, this plan, the new repository, any supplied company assets, and existing webmaster/analytics data only if accessible.

**Do and how:**

1. Record every discoverable current URL from navigation, sitemap, and internal links. Capture response status, canonical, title, description, heading, indexability, inbound internal links, content purpose, and proposed keep/update/redirect/remove action. Do not infer that a route is unused merely because it is absent from the main navigation.
2. Save a dated reference inventory of homepage, service, process, article, contact, and mobile layouts. Record actual observations separately from design opinions. Check existing interactions without submitting enquiries or changing the site.
3. Establish performance and crawl baselines with named tools, device/network conditions, timestamp, and URL. If a measurement cannot run, write “not measured”; do not invent a baseline score.
4. Build the claims ledger with fields: claim ID, existing wording, proposed wording, page, evidence owner, evidence reference, verification date, publication permission, and status. Prioritize project counts, years of experience, on-time delivery, named testimonials, certification language, and outcome metrics. Separate engineering support for certification from certification held by a company or product.
5. Build the asset ledger: original file, owner, license/permission, dimensions, subject, intended role, alt-text intent, and whether it is actual work or illustrative. Obtain usable vector logo files where possible; preserve the existing mark unless a redesign is requested.
6. Confirm priority services and audiences using available company context first. Ask one focused batch of missing business questions only when their answers affect content or routing. Treat proposed segments as hypotheses until confirmed.

**Deliverables:** inventories, baseline evidence, factual gaps, and initial route dispositions.

**Gate G1:** every discovered route has a disposition; every prominent claim has an evidence status; launch-blocking input gaps are identified. Missing optional photographs or testimonials do not block structure and design work.

**Fallback:** omit unsupported statistics, use accurate qualitative capability statements, and label conceptual visuals. Preserve existing useful pages until a replacement or legitimate removal decision is ready.

### Runbook 2 — Information architecture, content SEO, and conversion journey

**Goal:** give each page a distinct customer question and a natural next action.

**Inputs:** G1 inventory, confirmed service priorities, existing useful content, and the SEO guide.

**Do and how:**

1. Map three working journeys: founder assessing an idea; engineering lead needing a specific capability; product team seeking integration or production support. For each, document entry page, question, evidence needed, likely objection, next link, and enquiry action.
2. Create a page brief per launch route. Include audience, primary intent, headline, short answer, sections, supporting facts, image needs, internal links, primary action, title, description, canonical, schema candidates, and dependencies. Distinguish proposed new slugs from current routes.
3. Organize service pages around deliverables and customer problems. Explain inputs, output artifacts, collaboration, testing, ownership/handover where confirmed, and scope-dependent timing. Avoid interchangeable pages with only keywords swapped.
4. Research query language from customer questions and available search data. Group topics by intent; do not invent search volumes or keyword difficulty. Write naturally and cover the topic clearly before adjusting titles and headings.
5. Draft project stories using problem → constraints → Tatvix role → engineering decisions → validation → outcome. Publish quantified results only with a measurement basis. Anonymous case studies still need permission and must not reveal protected client details.
6. Design a short contact journey with consistent labels and one main action per decision point. Prefer a dedicated contact page over a mandatory modal. Link relevant services, articles, and work stories contextually with descriptive anchor text.
7. Review copy for specificity, readability, factual accuracy, terminology consistency, and repetition. Technical acronyms get a short explanation on first relevant use. Do not generate thin location or industry pages merely to increase page count.

**Deliverables:** page briefs, editorial checklist, topic-to-page map, CTA map, and migration map.

**Gate G2:** every launch page has a distinct purpose and sufficient content; every major journey reaches a useful next action. Unverified content is visibly flagged in working documents and excluded from publishable content.

**Fallback:** consolidate overlapping services into a strong overview until enough substantive material supports separate pages. Remove Work navigation if no publishable work exists; do not link an empty section.

### Runbook 3 — Art direction, design system, and first impression

**Goal:** make the first screen memorable and understandable while establishing a system that works across all page types.

**Inputs:** page briefs, logo, real content samples, and asset availability.

**Do and how:**

1. Sketch two compositions using the same real headline and content: product-on-bench and dark technical showcase. Start with layout wireframes, then a minimal local browser study. This study is disposable and is not a second production Site.
2. Define the hero composition before adding animation: text hierarchy, product scale, viewpoint, lighting, background, primary CTA, and mobile crop. Ensure the product visual makes sense as a still image. Do not conceal the offer behind an intro animation or loading screen.
3. Develop the selected token palette and verify actual foreground/background pairs. Set type roles and fluid sizes; check long headings, fallback fonts, and ordinary paragraph reading. Use IBM Plex only after verifying the required font files and license; avoid excessive weights and external runtime font dependencies.
4. Prototype the header, mobile menu, service entry, project story preview, form controls, FAQ disclosure, and footer. Define responsive behavior and states together with appearance. A pleasing default state is insufficient if loading, errors, focus, and long text break.
5. Compare the compositions with a simple 1–5 rubric: relevance to Tatvix, message clarity, visual distinction, reading comfort, credible evidence, mobile composition, and implementation cost. Scores express a reasoned design review, not external validation. Record the rationale rather than selecting the flashiest version automatically.
6. Review at narrow widths and zoom. Confirm the first screen exposes enough headline, context, and action to orient visitors, without assuming every viewport can fit all content above the fold. Keep sticky navigation compact and avoid covering content.
7. Save the chosen layout rules and tokens; remove decorative elements that do not support the message. Optional feedback from 3–5 representative people asks what Tatvix does, whom it serves, and what action they would take. Record the actual answers if this feedback occurs.

**Deliverables:** selected direction, desktop/mobile captures, token specification, component state sheet, and asset briefs.

**Gate G3:** coherent visual identity; legible real content; complete important component states; a compelling static hero; no reliance on motion for comprehension. Direction is documented and ready for implementation, with business preferences sought only if a material unresolved choice remains.

**Fallback:** reduce scene complexity, improve typography and imagery, and retain the strongest static composition before adding more effects.

### Runbook 4 — Sites architecture and reproducible project setup

**Goal:** prove the delivery platform, rendering model, source workflow, and enquiry backend before implementing every page.

**Inputs:** selected design, route map, current Sites instructions, and repository state.

**Do and how:**

1. Inspect the GitHub repository and any local checkout for existing files and instructions. Preserve user changes. Create an isolated working branch as appropriate; do not assume the repository is still empty because it was empty earlier.
2. Follow the currently installed Sites portable setup. As reviewed on 3 October, the helper supplies a Vinext starter and npm workflow, with Cloudflare Workers-compatible server output. Confirm these details again at execution rather than hardcoding assumptions about a generic Next.js server.
3. Prove a small vertical slice: homepage initial HTML, one nested service route, one 404, local assets, route-specific metadata, and a non-sending form-handler stub. Verify refresh/deep-link behavior, server compatibility, and environment variable handling. The handler must not pretend to deliver messages while it is a stub.
4. Use a server-rendered/prerendered route strategy supported by the starter. If the compatibility proof fails, evaluate Sites static output for marketing pages plus a supported real form endpoint. Record the choice before scaling page implementation. Avoid server dependencies requiring persistent local disk or unsupported Node behavior. Respect the documented Worker memory limit when designing server processing.
5. Register one Site when project files exist, preserving the returned identity. New registration is private and unpublished. Resolve uncertain registration results before retrying to avoid duplicates. No workspace connectors are needed merely to render a company marketing website.
6. Document the Sites source workflow and how the requested GitHub repository receives source. Keep one authoritative working source; avoid bidirectional auto-sync without a proven conflict strategy. Use separate named remotes or a documented export if needed. Never place publishing credentials in arguments, committed files, or logs.
7. Establish scripts for dev, build, type checks, lint, meaningful tests, and static route inspection. Record Node/package-manager versions and the lockfile. Keep private environment values in the supported secrets mechanism; commit only descriptive examples.
8. Start one retained preview server, verify its printed URL responds, and open it in the app. Reuse the preview through edits. Create a README with install, preview, build, content-edit, publish, and rollback instructions.

**Deliverables:** architecture decision, compatible vertical slice, registered identity when applicable, source mapping, lockfile, scripts, and README.

**Gate G4:** reproducible build; correct initial HTML and nested routes; real 404 response; supported server execution; clear source ownership. Do not expand the full site until these fundamentals work.

**Fallback:** use a simpler supported rendering architecture. A private review deployment can demonstrate progress but cannot satisfy public crawling or production launch requirements.

### Runbook 5 — Page implementation and reliable enquiries

**Goal:** deliver the complete useful website before adding optional visual complexity.

**Inputs:** G4 architecture, approved page briefs, component system, and form provider decision.

**Do and how:**

1. Build global shell and semantic page templates first. Use native links for navigation and buttons for actions. Implement skip navigation, logical headings, landmarks, page language, menu states, route transitions, and footer. Keep content separate from layout components.
2. Implement in order: homepage → services overview/detail → process/about → work where evidence exists → insights/detail → contact → legal/current careers → 404. Connect every route as it becomes ready; do not leave placeholder links in a release candidate.
3. Give content records stable identifiers, slug, title, summary, sections, related links, SEO fields, asset references, and publication status. Validate missing required fields and duplicate slugs during the build. Draft records must not appear in pages, feeds, search surfaces, or sitemap.
4. Implement enquiry validation on both client and server. Trim inputs, limit lengths, accept common legitimate email formats, reject malformed/oversized requests, escape user content in notifications, and avoid reflecting raw submitted HTML. Never put submitted personal information into URLs or analytics events.
5. Choose explicit submission semantics. With synchronous delivery, show acceptance only after the provider accepts the message. With durable queueing, say the enquiry was received only after durable storage succeeds, then retry delivery and alert on failures. Provider acceptance is not proof of inbox delivery; verify receipt separately during end-to-end testing.
6. Prevent accidental duplicates, add appropriate rate limiting and a honeypot or similarly low-friction spam measure, and preserve entered text on recoverable failure. Prefer accessible anti-abuse measures; do not add a CAPTCHA by default. Protect server credentials and keep request logs minimal.
7. Define recipient, sender-domain configuration if required, reply-to behavior, retention/deletion rules, and failure notifications. Ask the company only for unavailable routing/account decisions. Do not add a paid service automatically. Confirm terms and limits of any selected free provider when choosing it.
8. Test empty, invalid, valid, overly long, duplicate, slow, offline, provider-rejected, and rate-limited submissions. Test success with a clearly identified test enquiry only when sending is authorized, then verify its receipt. Keep a direct contact fallback visible during errors.

**Deliverables:** complete routes, reusable templates, validated content records, working enquiry integration, and documented form behavior.

**Gate G5:** every primary journey works; no fictional success; real delivery verified before release. If delivery is blocked, the preview must disclose that state and production cannot advertise a working form until fixed or explicitly rescoped to direct contact.

### Runbook 6 — Custom imagery, animation, and optional 3D

**Goal:** add one signature visual experience without weakening usability or loading speed.

**Inputs:** selected static composition, real assets, performance baseline, and completed core pages.

**Do and how:**

1. Write an asset brief specifying subject, purpose, perspective, lighting, crop, palette, source provenance, and mobile version. Use actual approved hardware/CAD or image generation for clearly illustrative concepts. Keep product claims and UI text in HTML, not baked into decorative images.
2. Produce a composition with enough breathing room for the heading and a responsive crop that keeps the subject legible. Review components and connectors for obvious visual errors. Record prompts/source and final asset provenance; do not pass generated product renders off as delivered work.
3. Export appropriately sized modern image formats with fallbacks, intrinsic dimensions, descriptive filenames, and meaningful alt text only for informative images. Decorative assets use empty alt text. Load the main hero image promptly; lazy-load below-fold visuals rather than lazy-loading the likely LCP image.
4. Make an animation decision record. GSAP is the provisional choice for a coordinated assembly/connection sequence; Motion replaces it if final interaction needs are primarily component state transitions. Ordinary hover/focus changes can remain CSS. Only install a library when an actual accepted use exists.
5. Specify each effect: trigger, purpose, duration range, affected elements, interruption behavior, reduced-motion alternative, and cleanup. Allow visitors to interrupt an effect without losing content or focus. Keep controls responsive during animation and preserve native scrolling.
6. Evaluate Three.js with a small performance prototype before committing. Prefer a user-initiated enhancement and render-on-demand where practical. Measure total transfer including scene assets; geometry and textures count, not just the JavaScript bundle. Stop rendering offscreen, dispose resources, and handle resize and context loss.
7. Compare static and enhanced versions under identical mobile conditions. If the enhancement pushes a core route outside its performance budget or fails to explain the offer better, ship the static version. Reduced-motion users must receive a finished composition, not blank space.

**Deliverables:** optimized asset set, provenance record, motion specification, and optional 3D decision with measurements.

**Gate G6:** all essential content works without these enhancements; the visual survives narrow layouts, slow loading, and reduced motion; resource costs are measured and justified.

### Runbook 7 — Technical SEO, content SEO, and AI discovery

**Goal:** make approved public content discoverable, understandable, and consistent across routes and deployment environments.

**Inputs:** completed routes, factual content, production-domain decision, and current crawler guidance.

**Do and how:**

1. Maintain a single metadata source per route. Generate title, description, canonical, Open Graph, and structured data from approved page facts. Ensure route-specific head tags are delivered in initial HTML. Use descriptive titles; length checks are editorial aids, not rigid ranking rules.
2. Keep one canonical hostname and URL style. Exclude preview hosts and tracking parameters from canonical URLs. A canonical is a signal, not a substitute for correcting duplicate URL behavior. Check internal links and sitemap against the same route source.
3. Generate the sitemap from published, canonical, indexable routes returning successful responses. Exclude drafts, errors, redirects, preview URLs, and thank-you pages if designated non-indexable. Use lastmod only when based on meaningful content changes.
4. Re-read Google, Bing, and OpenAI official crawler documentation immediately before writing robots rules. Review specific-agent rules and wildcard rules together because specific groups can change rule selection. Inspect meta robots, HTTP X-Robots-Tag, authentication, CDN/WAF behavior, and necessary resource access as well as robots.txt.
5. Document separate decisions for search crawling, user-triggered retrieval, and training agents. A custom user-agent request checks server behavior but does not prove that a genuine search bot can reach the site. Use available verified webmaster tools and logs for further evidence, and mark this distinction in the audit.
6. Implement appropriate JSON-LD from visible approved facts with stable identifiers. Validate syntax, supported rich-result eligibility where relevant, and consistency with visible names, URLs, dates, and content. Avoid invented reviews, fake FAQ content, or claiming that valid schema guarantees eligibility or display.
7. Review content for direct answers, subject expertise, useful examples, clear company identity, descriptive links, and authentic authorship. Preserve useful article slugs. Separate articles from case-study claims when the available evidence does not support a case study.
8. Implement per-URL migration decisions: preserve; redirect permanently to the closest equivalent; or return 404/410 when content has genuinely been removed. Avoid redirecting all missing URLs to the homepage. Update internal links to final destinations and eliminate chains. Preserve useful old fragment IDs where practical because URL fragments are not sent to the server for redirect matching.

**Deliverables:** metadata and crawler-policy records, sitemap, redirect map, schema evidence, and page-level audit.

**Gate G7:** every intended public route has correct metadata and a discoverable path; preview restrictions and production configuration are explicitly separate. Search rankings, indexing, and AI citations remain outside our control. llms.txt is optional and is not a launch requirement.

### Runbook 8 — Verification pass A: systematic implementation audit

**Goal:** find defects with repeatable evidence before selecting a release candidate.

**Inputs:** completed functional build, test catalogue in Section 12, and current commit/build identifier.

**Do and how:**

1. Record the source version, environment, browser, viewport, device/network conditions, and date. Run the project's existing build and checks. Add tests for important behavior such as route rendering and form failure handling; avoid redundant tests that merely restate implementation.
2. Crawl every public route, not only a sample. Inspect status, head tags, indexability, internal links, canonical/sitemap agreement, and content presence. Perform full visual/manual testing on each template and every unique interactive feature; spot-check the remaining repeated content pages for layout/content errors.
3. Run the accessibility and responsive cases in Section 12, including long text, failed assets, focus flow, and mobile navigation. Keep automated and manual results distinct. State which devices and assistive technologies were actually available.
4. Measure representative routes with cold-cache mobile lab runs under fixed conditions. Use at least three runs for the initial comparison and report the median plus meaningful variance. Record the actual LCP element and largest resources, then fix the largest causes first. Lab TBT/interaction checks may diagnose responsiveness but are not field INP.
5. Test the full enquiry state matrix using a test destination/mode where possible and one authorized live delivery test. Verify secrets are absent from client bundles and public source. Run dependency checks and inspect findings for actual applicability rather than blindly changing versions.
6. Create an issue for each defect with severity, reproduction steps, expected/actual result, evidence, owner, and retest scope. Fix root causes in shared components before making page-specific patches.

**Deliverables:** pass-A report and issue list tied to the build.

**Gate G8:** all tests have a result or explicit untested/blocked status. Launch blockers are fixed before pass B; material defects cannot be hidden by a favorable average score.

### Runbook 9 — Verification pass B: regression and release-readiness review

**Goal:** confirm fixes and catch problems that a developer familiar with the implementation might overlook.

**Inputs:** pass-A findings, corrected release candidate, and requirement traceability matrix.

**Do and how:**

1. Start a fresh browser session against the intended release build, not a stale dev server. Retest every repaired defect and neighboring behaviors affected by shared component changes. Record the same issue IDs so pass-A findings remain traceable.
2. Repeat all critical journeys and release-blocking checks. Re-run route/SEO automation on the final build. Repeat performance only where required for the second-pass comparison or where relevant code/assets changed; avoid endless unchanged reruns.
3. Read each public page as a customer. Check offer clarity, factual consistency, relevance of visuals, specificity of CTAs, jargon, dead ends, duplicated paragraphs, and missing evidence. Confirm the final headline and project claims match the approved ledger.
4. Review reduced-motion and static fallback states as finished designs. Inspect fresh-load and cached-load behavior, direct deep links, back/forward navigation, and recovery after interrupted requests.
5. Verify deployment variables, audience plan, domain ownership, source version, rollback route, and form recipient. Produce a release summary listing passed, failed, blocked, and intentionally deferred items; never convert “not tested” into “passed.”

**Deliverables:** pass-B report, reconciled issue list, final content snapshot, and release-candidate identifier.

**Gate G9:** no unresolved critical/high defects; deferred lower-impact items have rationale and a next action. Missing access or unavailable browser coverage is disclosed with its impact. This is a fresh second pass by the same agent unless a different reviewer is later authorized.

### Runbook 10 — Publication, domain migration, and handover

**Goal:** release the verified source with correct access, a recoverable migration, and a usable maintenance workflow.

**Inputs:** G9 candidate, chosen hostname, Sites identity, required publishing/domain permissions, enquiry configuration, and backup/rollback record.

**Do and how:**

1. Capture the existing site's hosting location, known working release, DNS records relevant to the website, and rollback procedure. Verify the old deployment remains recoverable. Do not overwrite mail MX/TXT records while changing web DNS. Credentials stay outside the repository and chat output.
2. Follow the Sites workflow for source push, checks/build, archive creation, version saving, and deployment. Reuse the registered Site identity and returned version identifiers. Native deployment success is required; a prepared archive or upload alone is not a live website.
3. Preserve private preview access during review. A public, indexable marketing release needs an explicit audience decision and supported access configuration; follow native access checks rather than assuming deployment changes visibility automatically. Distinguish review publication from public launch.
4. Configure the verified production hostname using the supported custom-domain workflow when domain access is available. Check HTTPS readiness and final hostname behavior. If access is unavailable, deliver the review URL and list domain cutover as incomplete.
5. Perform the production checks requested by this project: homepage and key routes, redirects, real 404, initial text/metadata, robots/sitemap, anonymous access, contact flow, and mobile layout. These checks verify the migration and SEO requirements; they are additional to Sites' native deployment-status confirmation.
6. If a release blocks enquiries, serves widespread errors, exposes private content, or applies the wrong indexing policy, use the last known working deployment or DNS rollback procedure and verify recovery. Record which layer failed; restoring a Site version does not necessarily restore DNS or provider settings.
7. Reuse or verify Search Console and Bing properties using the companion guide. Submit the production sitemap and inspect important URLs. Preserve verification tokens. For a same-domain redesign, do not use a domain-move tool just because layouts or individual paths changed.
8. Handover source location, build/deploy commands, content-edit process, asset licenses, form-provider configuration references, audit results, known limitations, and rollback notes. Provide an edit checklist so later content updates preserve metadata, schema, and links.
9. Propose manual reviews at launch day, roughly one week, and roughly one month for errors, enquiry delivery, indexing, and available field performance. Scheduling or monitoring is a separate action and is not activated by this plan.

**Deliverables:** verified deployment URL, documented production status, migration results, webmaster setup status, and handover package.

**Gate G10:** the stated delivery accurately distinguishes a private review site, public Site, and completed custom-domain migration. Production checks pass; unresolved external dependencies are clearly recorded.

## 11. Page and component specification

### Page content contracts

| Template | Required content and implementation | Completion evidence |
|---|---|---|
| Homepage | Offer, relevant visual, one primary action, evidence or honest capability statement, linked services, process preview, contact | First-screen screenshots, initial HTML, working navigation |
| Service detail | Who needs it, problems addressed, deliverables, process, relevant technologies only, scope factors, useful questions, related work/contact | Unique brief, confirmed facts, contextual links |
| Project story | Permission status, problem, constraints, role, technical decisions, validation, outcome, accurate imagery | Claim/asset ledger references; no invented metric |
| Process | Stages, customer inputs, Tatvix outputs, decision points, scope-dependent expectations | Consistent terminology and delivery facts |
| About | Verified identity, engineering approach, location/contact, approved people imagery if used | Fact review; no stock/generated people presented as staff |
| Article | Clear answer, substantive explanation, accurate attribution/dates, related service and articles | Preserved/redirected slug, Article data matching visible content |
| Contact | Labels, minimal fields, privacy context, next step, direct fallback, full submission states | Form test record and verified delivery |
| Legal/careers | Content reflecting actual practices/current opportunities | Company confirmation where facts are unavailable |
| 404 | Actual 404 status, clear message, useful navigation | Unknown URL request and visual check |

### Component behavior contracts

| Component | Required states/behavior | Edge cases |
|---|---|---|
| Header/mobile navigation | Current page, keyboard access, expanded state, close action | Long labels, zoom, back navigation, sticky header focus obstruction |
| Buttons/links | Clear purpose, visible focus, appropriate semantics | Wrapping text, disabled/loading actions, external destinations |
| Service/project preview | Whole interaction has a clear accessible name; meaningful image/text hierarchy | Missing optional imagery, long titles, no hover capability |
| Accordion/FAQ | Native disclosure or correct button/expanded semantics; meaningful content in HTML | Keyboard use, all collapsed, long answers, JS failure |
| Forms | Idle, invalid, submitting, accepted, failed, rate-limited | Duplicate action, offline, slow provider, lost response |
| Hero/3D enhancement | Finished static state first; optional loading/interactive states | Reduced motion, no WebGL, context loss, low bandwidth, touch |
| Content images | Correct sizing and text alternatives | Missing asset, delayed loading, responsive crop |

Keep a desktop-first interaction from becoming the mobile default by accident: no hover-only information, no mandatory drag, no small controls over a moving scene. Prefer inline content over unnecessary dialogs. If a modal is used, test focus entry, containment, Escape close, and return focus.

## 12. Verification catalogue and measurable quality targets

These are engineering targets and test protocols, not completed results or a guarantee of formal certification.

### Accessibility and responsive quality

Target WCAG 2.2 AA as the implementation baseline, with a deliberately generous 44px control target where practical. That 44px target is a design preference, not a claim that all AA targets require 44px. Review applicable exceptions and criteria in the current W3C reference when testing.

Measure normal text contrast at least 4.5:1 and large text at least 3:1; relevant non-text controls need 3:1. Check reflow at 320 CSS px, 200% text resize, and a 400% zoom scenario on an appropriate desktop viewport. Test visible focus, unobscured focused controls, logical reading/tab order, accessible names, error/status announcements, and non-color meaning. Include reduced motion and native scrolling. A scan is supporting evidence, not proof of full conformance.

### Test cases to execute and record

| ID | Procedure | Expected result |
|---|---|---|
| HTML-01 | Request each route without running JS | Correct status, meaningful main text, navigation, title, canonical |
| NAV-01 | Use keyboard from skip link through main navigation and CTA | Logical order, visible focus, no trap or obscured destination |
| NAV-02 | Open/close mobile menu and follow a deep link | Operable menu; correct state after navigation/back |
| ROUTE-01 | Refresh nested routes and request an invented path | Deep links work; unknown path returns 404 |
| FORM-01 | Empty/invalid/long input | Clear associated errors; entered data retained appropriately |
| FORM-02 | Valid authorized test enquiry | Acceptance reflects actual processing; expected recipient receives it |
| FORM-03 | Slow/offline/provider rejection/duplicate click | No false success; recoverable feedback; duplicate control |
| SEO-01 | Crawl final route list and compare metadata/sitemap | Unique purposeful metadata, consistent canonical routes, no broken links |
| SEO-02 | Evaluate robots groups, headers, audience and anonymous access | Intended public pages crawlable; previews restricted appropriately |
| DATA-01 | Validate JSON-LD and compare with page and claim ledger | Valid, relevant facts; no hidden unsupported assertions |
| MOBILE-01 | 320 reflow; 360/390/768/1024/1440 visual checks | No unintended horizontal scroll, clipped text, or unusable controls |
| MOTION-01 | Enable reduced motion and fail optional scene loading | Complete readable layout, essential controls and content available |
| PERF-01 | Three consistent mobile lab runs per representative template | Budget report with median/variance and fixes; no fabricated field metrics |
| CONTENT-01 | Review all published copy/assets against ledgers | Verified facts, permitted assets, no drafts or placeholders |
| RELEASE-01 | Check production routes, access, domain and form after publish | Correct live version and environment; documented rollback available |

### Performance budgets and tradeoffs

Treat the earlier 200KB compressed core-JavaScript and 250KB hero-image values as initial budgets, not universal guarantees. Track the initial route transfer and deferred 3D separately so optional downloads do not disappear from reporting. Record CSS, fonts, images, third-party scripts, and execution cost as well as JS transfer. Use the actual image subject and visible quality to choose encoding rather than chasing a size at any cost.

Prevent layout shifts by reserving media dimensions; minimize render-blocking work; avoid preloading every asset; defer analytics and optional code appropriately. Test font fallback and late-load behavior. Check low/mid-range mobile conditions rather than relying only on a powerful desktop. Core Web Vitals targets remain LCP ≤2.5s, INP ≤200ms, and CLS ≤0.1 at the 75th percentile when adequate field data exists. Do not substitute a Lighthouse score for those real-user measurements.

### Defect severity and release rules

| Severity | Examples | Release rule |
|---|---|---|
| Critical | Wrong access exposure, widespread failure, leaked secret, lost enquiries with false success | Stop release; fix or restore working version |
| High | Broken primary action, keyboard-blocked navigation, production noindex/crawl block, unsupported major claim | Resolve before launch |
| Medium | Significant secondary layout/content issue or budget miss requiring investigation | Fix where practical; any deferral needs documented impact and next action |
| Low | Minor spacing inconsistency or cosmetic issue without usability impact | Track for polish; do not hide it in a pass score |

Evidence record format: test ID, route, commit/version, environment, conditions, expected result, actual result, status, screenshot/log reference, defect ID, fix reference, and second-pass result. Redact private input and credentials from stored evidence.

## 13. Dependency map, decision log, and operational controls

### Critical path and permissible overlap

The dependency path is G1 facts → G2 page briefs → G3 direction → G4 platform proof → G5 functional routes → G6 final visuals → G7 SEO completion → G8 fixes → G9 release candidate → G10 production. Content research and asset gathering may continue alongside setup; metadata and accessibility are built with templates from G4/G5 rather than postponed to G7. The early design study is local and separate from Site registration. No additional agents are assumed or needed by this plan.

### Decisions that must be resolved at the right time

| Decision | Default/proposal | Resolve before | If unavailable |
|---|---|---|---|
| Primary audience/services | Embedded and connected-product customers; verify priority | Final page copy | Use broad accurate capability language |
| Visual direction | Product-on-bench, existing blue/teal identity | Full component styling | Continue with proposed static design study |
| Rendering/stack | Current Sites starter with server/prerendered pages | Full page implementation | Switch to supported static architecture after compatibility review |
| Animation | GSAP for coordinated sequence; Motion alternative | Installing animation dependencies | CSS/static treatment |
| 3D | Optional, gated by explanatory value and measured cost | Integrating Three.js | Finished static artwork |
| Case studies/testimonials | Verified and permitted only | Publication | Omit unsupported proof sections/routes |
| Enquiry provider/recipient | Existing suitable service if available | Live sending test and launch | Keep preview clearly limited; resolve or explicitly rescope |
| Public audience/domain | Intended company website; actual access configuration pending | Public release and DNS change | Private Sites review URL with accurate status |
| GitHub/Sites source mapping | One source of truth and documented synchronization | First source publication | Preserve source and report unsupported integration |
| Analytics | Minimal useful conversion measurement | Tracking deployment | Launch without optional tracking if privacy/configuration unresolved |

### Scope protection

Launch essentials: useful content pages, strong static design, working contact path, SEO foundation, accessible responsive behavior, audits, and release documentation. Conditional essentials: case-study pages only with usable evidence; live form only with delivery configuration; custom-domain migration only with access. Optional later work: interactive 3D, CMS, localization, calculators, additional industry pages, CRM automation, and elaborate visual sequences. Optional features must not displace core quality.

Estimate effort only after the content/route inventory and platform proof. Estimate page templates separately from repeated content pages, plus integrations, assets, QA/fixes, and launch. Revise estimates when inputs change; do not imply a deadline from arbitrary day counts. Record change requests with impact on scope, dependencies, and tests.

### Measurement after launch

Define enquiry conversion using confirmed successful submissions divided by eligible visits, if analytics are configured. Track service-to-contact navigation and source at an aggregate level; do not send names, emails, or project descriptions to analytics. Tatvix evaluates lead quality using a simple business rubric, such as relevant service need and actionable project scope. Compare against a recorded baseline only when measurement is comparable. Low traffic may be insufficient for statistically meaningful A/B tests; avoid claiming a design win from a handful of visits.

### Maintenance checklist

For content edits: verify facts/permissions, preview layout, update related links and metadata, check schema consistency, and use accurate modification dates. For dependency updates: review compatibility, build, and run affected regression cases. For domain or form changes: repeat production access/delivery checks. For outages: use the documented rollback and verify recovery. These are future operating instructions, not an active automation.

## 14. Revision 2 review record

The two reviews below concern this document. All website test cases remain unexecuted until implementation.

### Pass 1 — Coverage and execution detail

Checked that all ten stages have a goal, inputs, implementation method, deliverables, and exit gate. Traced the user's requests for old-site continuity, distinctive design, installed skills, Sites, generated visuals, selective free dependencies, accessibility, mobile performance, technical/content SEO, AI readiness, two audits, and webmaster verification. Added component/page contracts, form failure cases, evidence templates, defect severity, and staged decisions.

### Pass 2 — Feasibility, contradictions, and failure recovery

Checked against current Sites portable setup, registration, preview, and publishing instructions. Clarified private review versus public launch; native deployment success versus project-specific production QA; source mapping versus assumed GitHub integration; platform proof versus full implementation; and provider acceptance versus inbox delivery. Checked that optional 3D cannot become a prerequisite for content, search visibility, or launch. Added anonymous-access checks, old-fragment handling, actual 404/410 decisions, DNS/email preservation, and rollback by affected layer.

Reviewed the distinction between proposed design targets, observed old-site facts, unverified company claims, pending website tests, and completed planning reviews. Confirmed that no implementation result, external reviewer, user study, launch date, ranking result, or field metric is claimed without evidence.

### Source additions for this revision

- [W3C WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/) — accessibility testing reference.
- [Core Web Vitals](https://web.dev/articles/vitals) — field metric definitions and targets.
- [IBM Plex official repository](https://github.com/IBM/plex) — proposed typeface source and license to retain with distributed fonts.
- [Google site migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) — URL mapping and migration checks.
- Installed Sites references reviewed: portable project setup, registration, portable preview, and sites-hosting instructions, plugin version 0.1.75. Re-read current versions when implementation starts.

**Planning completion:** expanded execution specification ready. **Build completion:** not started. **Production verification:** pending. The next authorized build begins with Runbook 1 and progresses through the gates with recorded evidence.

## 15. Software company delivery process

### 15.1 Operating model and accountability

Manage this as a professional software delivery project: requirements become tracked work; work is designed and implemented; changes are reviewed; QA verifies behavior; business acceptance confirms suitability; and a recorded release is deployed and supported. Use the ten runbooks as the technical workstreams inside this process rather than inventing a second competing schedule.

The following are responsibility areas, not claims that a staffed team exists. The implementing agent currently performs the delivery roles in separate work/review passes. Tatvix supplies business decisions and acceptance. Do not claim independent QA or peer review when the author performed it. Additional people or agents can be assigned later if explicitly authorized.

| Role | Accountable for | Evidence/output |
|---|---|---|
| Tatvix product owner | Business priorities, facts, brand preferences, client permissions, business acceptance | Confirmed requirements and decisions; acceptance feedback |
| Delivery lead / project manager | Scope, backlog, dependencies, risks, progress, handoffs | Project status, milestone plan, blocker and decision records |
| Design lead | Customer journey, visual identity, content hierarchy, component states | Design rationale, tokens, responsive previews, critique |
| Technical lead | Architecture, Sites compatibility, rendering, integrations, source workflow | Architecture decisions, working compatibility proof, standards |
| Developer | Implement accepted work and verify it before review | Focused commits, checks, implementation notes |
| Reviewer | Examine changes against requirements and maintainability | Review findings, resolutions, residual concerns |
| QA lead | Test design, execution, defect severity, regression, coverage | Traceable test results, pass-A/pass-B reports |
| SEO/content reviewer | Factual content, migration, metadata, crawler readiness | Fact ledger, route audit, schema and crawl evidence |
| Release owner | Release candidate, configuration, deployment, rollback, handover | Release manifest, deployment evidence, production checks |

The delivery lead owns progression; each specialist responsibility owns the correctness of its output. Tatvix is not asked to approve routine implementation details. Ask for a business decision only when there is a meaningful unresolved choice, unavailable fact/access, material scope change, or action requiring authorization.

### 15.2 Project initiation and management artifacts

At implementation kickoff, create a short project charter covering objective, audience, agreed launch scope, exclusions, success measures, key dependencies, and constraints. Use this master plan as its source. Confirm the current repository and Site state before creating project infrastructure.

Maintain one lightweight source of truth for project tracking. Prefer repository-backed Markdown/CSV initially; use GitHub Issues and a board if they materially improve the work. Do not create duplicate trackers, meetings, external messages, or management tools merely to imitate a company process.

Planned project records:

- `docs/project-charter.md`: business outcome, scope, responsibilities, constraints.
- `docs/backlog.md`: prioritized epics/stories/tasks and their status.
- `docs/status.md`: current milestone, verified work, remaining work, risks, and next actions.
- `docs/requirements-matrix.csv`: requirement → task → implementation → test → release evidence.
- `docs/risks-and-dependencies.md`: risk/assumption/dependency, impact, owner, mitigation, next review.
- `docs/decisions.md`: decisions and scope changes with rationale.
- `docs/reviews/`: code/design/content review findings and resolutions.
- `docs/uat.md`: business acceptance scenarios and actual feedback.
- Existing audit and launch documents from Section 10: technical verification and release records.

Keep these records proportional to project size. No client-confidential evidence, account secrets, or enquiry data belongs in a public repository. These files will be created when the build starts; this revision only updates the plan.

### 15.3 Backlog structure and task definition

Group work into epics: discovery/content; design system; platform/source setup; page implementation; enquiry integration; visual enhancements; SEO/migration; QA/accessibility/performance; release/handover. Preserve the dependencies in Section 13 when prioritizing them.

Each implementation story contains:

1. Stable ID and a short outcome-based title.
2. Customer or business need and relevant source requirement.
3. Scope, exclusions, route/component affected, and dependencies.
4. Responsible role, priority, and an estimate after investigation where needed.
5. Observable acceptance criteria, including error and mobile states.
6. Required design/content inputs and factual evidence references.
7. Test IDs and expected verification evidence.
8. Commit/PR reference, review findings, and completion status.

Example story: `CONTACT-01 — A prospective customer can send a project enquiry`. Acceptance criteria include accessible labels, server validation, recoverable failure, accurate acceptance messaging, duplicate handling, direct contact fallback, and verified receipt of an authorized test message. A visually complete form alone does not finish this story.

Use priority separately from defect severity: Must for launch-critical requirements, Should for valuable improvements, Could for optional polish, and Deferred for deliberately excluded scope. A low-priority feature can still introduce a high-severity defect that must be fixed or removed.

### 15.4 Workflow, readiness, and completion

Use this work-item flow:

`Backlog → Ready → In development → In review → In QA → Verified → Released`

Blocked and Deferred are explicit states with reasons. Review/QA failures return to development while preserving the same task and defect references. Verified means acceptance criteria passed in the recorded environment; Released means the verified change is included in a confirmed deployment. Avoid treating “code written,” “PR opened,” or “build succeeded” as completion of the feature.

**Definition of Ready:** purpose and acceptance criteria are clear; critical dependencies are identified; required content/design exists or an honest fallback is chosen; the work fits the authorized scope; and a test approach is known. A research task may be Ready precisely to resolve an unknown—do not demand implementation certainty before investigation.

**Definition of Done for a story:** implementation meets acceptance criteria; relevant checks pass; code/design/content review is recorded; QA evidence is linked; significant defects are resolved; documentation and metadata are updated where affected; and remaining limitations are explicitly recorded. Release inclusion is tracked separately.

**Definition of Done for the project:** the agreed launch scope is delivered, both QA passes and business acceptance status are recorded, production/migration status is accurate, agreed launch blockers are resolved, and source/operations handover is complete. A review URL alone does not count as a completed production migration.

### 15.5 Milestones and progress reporting

| Milestone | Runbooks/gates | Review focus | Completion evidence |
|---|---|---|---|
| M1: Discovery and scope baseline | G1–G2 | Factual inputs, customer journeys, launch pages, dependencies | Inventories, page briefs, scoped backlog |
| M2: Design and architecture proven | G3–G4 | First impression, responsive system, supported rendering/integrations | Browser study, tokens, working platform slice |
| M3: Feature-complete candidate | G5–G7 | Content, enquiries, visuals, SEO and migration | Functioning preview, source references, feature checks |
| M4: Quality and acceptance | G8–G9 | Defects, regression, business suitability, launch readiness | Two QA reports, review log, UAT status |
| M5: Release and handover | G10 | Live operation, public access, migration, recoverability | Deployment manifest, production checks, handover |

Work in small demonstrable increments rather than coding the entire website before review. At each milestone, provide a concise update: what is verified, what is ready to inspect, what remains, risks/blockers, and the next action. Show the preview for meaningful visual decisions. Do not report fictional percentage completion or promise dates without an estimated and dependency-aware scope.

At the beginning of each implementation session, inspect the current source and status, select the next unblocked item, and preserve earlier decisions. At the end, record the changed source/version, checks, outstanding issues, and next action. This is session-based reporting, not a recurring automation or a promise of unattended monitoring.

### 15.6 Development and review standards

Keep changes focused and reviewable, with meaningful commit messages. Use a feature branch and pull request where appropriate for the repository workflow. PR descriptions state the problem, resulting behavior, validation, screenshots for visual changes where useful, and remaining limitations. Do not create or enforce branch-protection settings without evaluating existing rules and authorization; a solo workflow must not pretend an unavailable second approver exists.

Use the project's supported stack and established patterns. Prefer semantic components, consistent tokens, explicit content models, small dependencies, and server-side secrets. Keep error handling and loading states within each feature's scope. Avoid unrelated refactors while fixing a narrow defect.

Before review, the developer runs relevant checks and inspects the result in the browser. The review then asks:

- Does the implementation satisfy the requirement and its edge cases?
- Is the design consistent, readable, and useful across responsive states?
- Is the structure maintainable, with understandable data flow and appropriate dependencies?
- Are content, HTML rendering, metadata, and structured data coherent?
- Are validation, failure handling, secrets, and personal data handled appropriately?
- Does the change create avoidable loading or execution cost?
- Do tests verify meaningful behavior and cover likely regressions?

Record findings as Must fix, Recommended improvement, or Question. Resolve Must fix findings before marking review complete. A fresh self-review is useful but must be labelled as self-review. Peer review is recorded only when a real separate reviewer participated.

### 15.7 QA strategy and defect lifecycle

QA planning starts with story acceptance criteria and continues throughout development. The two broad audits remain the release-level checks, not the first time features are tested.

| Test layer | Purpose | Application here |
|---|---|---|
| Static/build checks | Catch integration and type/build errors | Every relevant implementation increment |
| Unit tests | Verify isolated consequential logic | Validation, route/metadata generation, decision logic where useful |
| Integration tests | Verify boundaries and failure handling | Form endpoint/provider behavior, rendering/content integration |
| End-to-end tests | Verify primary visitor journeys | Navigation, service discovery, enquiry completion and recovery |
| Manual visual/accessibility review | Catch usability and presentation problems | Responsive states, focus, reading order, contrast, reduced motion |
| SEO/performance review | Verify delivery and discoverability | Route crawl, initial HTML, migration, assets and responsiveness |
| Production smoke checks | Verify the released environment | Public access, routes, form, hostname and indexing configuration |

Use test doubles or a provider sandbox for repeated integration tests; use an authorized live test for actual delivery verification. Tests that cannot run are marked blocked or not tested with a reason. Do not install or claim access to browser/device testing services without checking availability.

Defect flow: `Reported → Triaged → Assigned → Fixed → Retest → Closed`. Reopen when the original issue or a regression persists. Severity follows Section 12; priority reflects when it must be addressed. Each defect records reproduction conditions, expected/actual behavior, impacted users/pages, evidence, fix reference, and retest result.

Pass A systematically discovers and fixes defects. Pass B verifies those fixes and the final journeys on the release candidate. Neither pass is allowed to silently omit a failed result. For shared-component fixes, expand regression scope to every affected template. Stop expanding tests once the defined relevant checks pass unless changes or unresolved concerns justify more work.

### 15.8 Business acceptance and review with Tatvix

Separate technical verification from business acceptance. QA can confirm a form works and a page renders; Tatvix confirms that the service descriptions, positioning, project examples, and enquiry workflow represent the company correctly.

Prepare a concrete review package at M4: preview URL, launch-page list, short change summary, known limitations, and these acceptance scenarios:

1. A new visitor can explain Tatvix's offer and find the relevant service.
2. The service scope and deliverables match what Tatvix actually offers.
3. Work stories, logos, testimonials, and numerical claims are accurate and publishable.
4. Mobile presentation gives the intended first impression and makes contact easy.
5. The enquiry arrives at the intended destination and the next-step wording matches company practice.

Record actual feedback and resolve material issues. Offer a focused review opportunity; do not ask repeated blanket approvals for routine work already authorized. Where a business fact or acceptance decision is essential, obtain it rather than inventing approval. If the user authorizes proceeding without a separate UAT round, record that decision and the still-unverified business assumptions; never label a review as completed when it did not occur.

### 15.9 Change control, risk management, and escalation

For a change request, record requested outcome, reason, affected pages/features, effort/dependencies, effect on SEO/performance/accessibility, test scope, and milestone impact. Fixing a defect within agreed scope is ordinary delivery; adding a CMS, new integration, localization, or major redesign is a scope decision. Continue unaffected work while a material decision is pending.

Use a short risk register with likelihood, impact, trigger, mitigation, owner role, and next action. Start with known project risks: missing factual evidence, poor source imagery, unsupported platform behavior, unavailable form provider access, custom-domain access, excess 3D cost, and URL migration mistakes. A risk is not an existing failure; distinguish assumptions, active issues, and external dependencies.

Escalate only with a concrete explanation and options: what is blocked, why it matters, what has been tried, the recommended next step, and work that can continue. Do not let an optional effect or unavailable testimonial stop the core site. Do not hide an unresolved launch blocker behind a polished preview.

### 15.10 Release management and support

Create a release manifest linking version/commit, Sites version, included stories, checks, QA reports, business acceptance status, migrations/redirects, environment configuration references, and rollback target. Keep secret values out of this manifest. A material change after the candidate is verified requires relevant re-review/retesting and an updated version reference.

Before release, the release owner checks G9, deployment configuration, source traceability, rollback readiness, and any required business/access decisions. Reuse existing authorization rather than creating a redundant approval ceremony. The company-facing launch summary should say exactly what is being released and what remains incomplete.

After release, execute G10 checks and record the result. If a serious regression occurs, stabilize the site using the documented recovery path, then investigate and fix the cause. Keep a short incident record: symptom, affected period, impact, corrective action, verification, and prevention. Do not claim an SLA, 24/7 support, warranty duration, or maintenance contract that has not been agreed.

Handover includes the source, design/content editing instructions, verification reports, known backlog, hosting/domain configuration references, enquiry handling, and recovery instructions. Close the delivery with a brief retrospective: what worked, what caused rework, and what should change in future updates.

### 15.11 Requirement-to-release traceability example

| Requirement | Backlog item | Review | Verification | Release evidence |
|---|---|---|---|---|
| Strong, clear first impression | DESIGN-HERO | Design critique and content review | Desktop/mobile captures; clarity review | Hero included in release version |
| Crawlable service pages | SEO-HTML | Rendering/metadata code review | HTML-01 and SEO-01 | Public route checks and sitemap |
| Reliable enquiry | CONTACT-01 | Backend/UI behavior review | FORM-01/02/03 | Authorized receipt check |
| Accessible optional motion | MOTION-01 implementation item | Motion and component review | MOTION-01 test; keyboard/mobile checks | Static/reduced-motion state verified |
| Preserve useful old URLs | MIGRATION-01 | Route-map review | Redirect crawl and ROUTE-01 | Production migration report |

These are proposed tracking examples, not completed stories or created GitHub issues.

### 15.12 Revision 3 double review

Review A — lifecycle coverage: checked that planning, scope/backlog, design, architecture, development, review, QA, regression, business acceptance, release, support, and retrospective each have an accountable responsibility and recorded output. Added readiness/completion definitions and requirement-to-release traceability.

Review B — consistency and practical execution: checked that the process uses the existing G1–G10 gates and two QA passes; does not invent a staffed team or independent review; distinguishes technical QA from business acceptance; preserves existing authorization; and does not create new automations, service commitments, trackers, or website work during this planning request. Responsibilities may be exercised by one agent transparently, with user input limited to necessary business/access decisions.

Status: management process documented; execution, reviews, tests, business acceptance, and release will be recorded as they actually occur.

## Required interactive 3D experience — user steering, 2026-10-03

Real-time interactive 3D is now required for the homepage rather than an optional enhancement. Use the approved Exito Dribbble reference for depth, lighting and compositional rhythm, adapted into original Tatvix engineering visuals. Follow `docs/design/interactive-3d.md` for controls, touch/keyboard parity, performance budgets, reduced motion and fallback acceptance. Keep important content in crawlable HTML. The initial implementation uses Three.js and GSAP; do not automatically add Motion as well.
