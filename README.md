# Tatvix website

A redesigned company website for Tatvix Technologies, bringing hardware design, embedded firmware, IoT, and connected application development together.

## Working locally

Use Node.js 24 and the package lock. Run `npm run install:ci`, then `npm run dev`. The application uses the Sites portable starter (React, vinext, Vite, TypeScript). Run `npx tsc --noEmit` and `npm run build` before a release.

## Project map

- `app/`: server-rendered pages, metadata, global design tokens and responsive layout.
- `components/`: interactive UI; `chapter-experience.tsx` owns the lazy-loaded Three.js scene and GSAP transitions, and `engineering-scenes.ts` builds the engineering illustrations.
- `public/images/`: product concept fallback imagery.
- `docs/planning/`: master plan and SEO plan.
- `docs/discovery/`: source inventory and business claims.
- `docs/design/`: design direction and interaction specifications.
- `docs/architecture/`: technical decisions.
- `docs/project/`: milestones and current status.
- `docs/qa/`: test matrix and evidence.
- `docs/reviews/`: review outcomes.
- `docs/release/`: release, verification and rollback instructions.
- `content/`: published case-study content migrated from the owner's live-site repository.
- `tests/`: enquiry-handler and engineering geometry checks.
- `.openai/hosting.json`: registered Sites project identity. Credentials must never be committed.

## Current milestone

The homepage uses distinct, scroll-synchronised engineering scenes for hardware, firmware, connectivity, applications and delivery. Four published case studies have full article pages. Footer links expose the existing Privacy Policy, Terms and LinkedIn profile. Navigation and content remain usable without WebGL.

The enquiry form validates input and forwards approved fields over HTTPS to the existing Tatvix production mail handler. SMTP credentials remain on that server. Inbox receipt and its configured recipient still need an approved live test. Before migrating `www.tatvixtech.com` to this application, replace the bridge with a separate stable delivery origin or mail API; a guard prevents self-forwarding after migration.

Run `node --test tests/contact-handler.test.mjs tests/engineering-scenes.test.mjs` for the automated checks. See `docs/qa/feedback-revision-2026-10-10.md` for source provenance and delivery constraints, and the visual verification report for the subsequent review.

This is not the production release. Staging metadata is noindex. Service routes, final factual content approval, crawler configuration, redirects, structured data and the full pre-launch audit remain tracked in the master plan. No certifications, client outcomes or numerical business claims have been invented.
