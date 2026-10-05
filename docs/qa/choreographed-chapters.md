# Choreographed homepage QA - 2026-10-05

## Implemented
Six original Three.js scenes: signal sculpture, layered PCB, processor and buses, distributed network, desktop/mobile interface surfaces, and engineering delivery modules. Scroll chooses the chapter; scene opacity, depth and scale transition together. Desktop compositions vary between centered, left and right arrangements. Mobile uses a reserved illustration area between heading and detailed copy. Chapter navigation reflects the active section.

## Verified
- TypeScript: `tsc --noEmit --incremental false` passed.
- Desktop visual review: opening, hardware, firmware, connectivity, applications and process.
- Fixed observed heading/object overlaps and tightened the process section spacing.
- Mobile review at 390 x 844: hardware and application scenes, no horizontal document overflow, one WebGL canvas.
- Reduced application-model scale after observing phone clipping at the right edge.
- Mobile menu opens, selects chapters and closes; Escape closes it and restores focus.
- Pause/resume control changes state; chapter navigation still changes the displayed scene while paused.
- No browser console errors observed during these checks.
- All service details, headings, FAQ answers and contact information remain ordinary HTML.

## Remaining launch verification
Physical mobile GPU/frame-rate profiling, Safari/Firefox and real-device matrix, reduced-motion OS/browser emulation, formal accessibility audit and final-domain SEO audit. Reduced-motion behavior exists in source but was not emulated in this browser session. Visual models and sample dashboard data are explicitly illustrative. Private review deployment remains noindex.
