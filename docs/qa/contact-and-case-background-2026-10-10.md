# Contact invitation and case-study background revision

## Delivered

- The homepage contact section is a concise invitation. “Discuss your project” opens `/contact`, which contains the existing enquiry form and a link back to the homepage invitation. Direct email remains available.
- The form page has its own title, description, canonical URL and H1. Form validation, consent and the established HTTPS mail bridge are retained.
- All four case-study pages share a faint edge grid and a slow ambient glow. The effect uses CSS rather than an additional WebGL scene. A labelled pause/resume button controls it, and reduced-motion CSS removes the animation and control.
- Case-study enquiry links open the new form page directly. Case-study text and structured data are unchanged.

## Verification

- Visually reviewed the invitation, dedicated form and article at 1191 × 668 and 390 × 844 browser viewports.
- Confirmed the invitation button opens `/contact` at the top, and “Back to website” returns to the homepage contact invitation.
- Confirmed empty submission focuses the error summary and marks five required fields invalid. This check sends no email.
- Confirmed the article pause button changes the effect's computed animation state to paused. Reduced-motion behavior was source-reviewed; OS preference was not emulated.
- Confirmed no horizontal overflow in the reviewed mobile form and article. No browser warnings/errors were recorded in the final local check.
- `/contact` and all four case-study URLs returned HTTP 200 with an H1.
- Final publication runs TypeScript and the production build through the supported Sites source workflow. Release identifiers are recorded in the task output after publication.

Actual inbox delivery remains unverified, as documented in the preceding release. The existing owner-private audience and noindex setting are preserved.
