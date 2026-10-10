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

The public website runs on the existing Netlify project at **https://www.tatvixtech.com**. `npm run build:netlify` creates its native Next.js production build. The Netlify function validates enquiries and sends directly to info@tatvixtech.com with server-side SMTP credentials. The approved public production test succeeded and the user confirmed inbox receipt on 10 October 2026. Sites remains a separate private preview, forwarding validated enquiries to the stable Netlify origin.

Run `node --test tests/*.test.mjs` for the 17 automated checks. See `docs/release/netlify-launch-2026-10-10.md` for hosting details and `docs/qa/netlify-production-seo-audit.json` for the public 29-page audit.

Production metadata allows indexing only on www; previews remain noindex. Search Console/Bing ownership and sitemap submission instructions are in `docs/seo/launch-and-search-verification.md`. No certifications, client outcomes or numerical business claims have been invented. The temporary favicon is a plain T text initial, pending an official company logo.
