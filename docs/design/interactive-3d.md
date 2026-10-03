# Interactive 3D direction — 2026-10-03

Reference: https://dribbble.com/shots/25191434-Exito-AI-landing-page-web-design-3D-animation (Alex Bender for Fancy). Visually reviewed in the browser. The visible presentation contains airy page compositions and floating glossy 3D objects. The screenshot establishes visual direction; it does not prove the example is a shipped interactive WebGL implementation.

Adapt the material depth, soft lighting, large typography and spacious composition into an original Tatvix engineering story. Do not copy its assets, brand, trading subject or content.

## Implemented first experience

- A real Three.js device model: metal enclosure, PCB, components and translucent lid.
- GSAP coordinates layer separation and rotation, with short transitions initiated by the visitor.
- Reveal/assemble is a button with a pressed state. Rotation is a native labelled range input. Reset is a labelled button. All can be operated by keyboard and touch.
- Desktop mouse movement applies a slight tilt. Touch users have explicit controls, with normal page scrolling preserved.
- No automatic perpetual spinning, scroll hijacking, custom cursor, or content locked inside canvas.
- Reduced-motion preference makes transitions immediate; preference is read at each interaction.
- Dynamic Three.js/GSAP imports begin near the viewport. DPR is capped at 1.25 on narrow screens and 1.75 on wider screens. Rendering happens on changes, and is skipped when offscreen or the document is hidden.
- ResizeObserver updates viewport and camera. Geometries, materials, observers and tweens are disposed on unmount.
- An approximately 99 KB WebP conceptual image is visible before loading and when rendering fails.

## Next refinement and acceptance

1. Confirm the product story and visual direction with the owner using the working preview.
2. Refine the model’s silhouette, lighting and material separation after desktop and mobile review.
3. Add one concise scroll-linked assembly sequence only if it improves understanding; disable scrub and parallax under reduced motion. Keep reading order and native scroll intact.
4. Test 320, 375, 390, 768, 1024, 1440 and 1920 CSS-pixel viewports, portrait and landscape. Test touch on real iOS Safari and Android Chrome; desktop Chrome, Edge, Firefox and Safari. Simulation alone does not establish device coverage.
5. Verify WebGL unavailable/context loss, reduced motion, tab background/resume, resize, repeated interactions, keyboard controls and zoom at 200%.
6. Measure mobile LCP/CLS/INP and graphics memory before launch. Target LCP <=2.5s, CLS <=0.1, INP <=200ms; report actual values, not promises.

The device is an illustrative concept, not a client case study. All important copy and enquiry links exist in HTML outside the canvas.
