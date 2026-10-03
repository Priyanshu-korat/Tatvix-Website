# Tatvix website

A redesigned company website for Tatvix Technologies, bringing hardware design, embedded firmware, IoT, and connected application development together.

## Working locally

Use Node.js 24 and the package lock. Run `npm run install:ci`, then `npm run dev`. The application uses the Sites portable starter (React, vinext, Vite, TypeScript). Run `npx tsc --noEmit` and `npm run build` before a release.

## Project map

- `app/`: server-rendered pages, metadata, global design tokens and responsive layout.
- `components/`: interactive UI; `device-experience.tsx` owns the lazy-loaded Three.js scene and GSAP transitions.
- `public/images/`: product concept fallback imagery.
- `docs/planning/`: master plan and SEO plan.
- `docs/discovery/`: source inventory and business claims.
- `docs/design/`: design direction and interaction specifications.
- `docs/architecture/`: technical decisions.
- `docs/project/`: milestones and current status.
- `docs/qa/`: test matrix and evidence.
- `docs/reviews/`: review outcomes.
- `docs/release/`: release, verification and rollback instructions.
- `content/`: future approved content records.
- `tests/`: future automated regression coverage.
- `.openai/hosting.json`: registered Sites project identity. Credentials must never be committed.

## Current milestone

The first homepage implementation is ready for local review. It has a real-time interactive concept device, explicit layer and rotation controls, responsive layouts, static fallback and semantic page content. Contact links open the visitor’s email client at `info@tatvixtech.com`; they do not submit or store enquiries.

This is not the production release. Staging metadata is noindex. Service routes, final factual content approval, crawler configuration, redirects, structured data and the full pre-launch audit remain tracked in the master plan. No certifications, client outcomes or numerical business claims have been invented.
