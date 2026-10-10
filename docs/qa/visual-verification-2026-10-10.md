# Tatvix visual verification — 10 October 2026

The prepared revision was applied to `D:\Git\Tatvix-Website` after full permissions were restored. The existing Sites source was opened through the supported helper before applying files. The source base was `68b0c3e84995251605e27df895f65edae8a920fc` on `feat/website-foundation`. Existing project identity, owner-only audience and dependency versions were retained.

## Review and corrections

- Reviewed the homepage, firmware and IoT compositions at desktop and mobile sizes. The processor now uses a contained carrier/interconnect design. IoT includes a companion screen, mesh nodes, gateway/cloud and recognisable Wi-Fi/BLE symbols, with the protocols also present as readable HTML.
- Reviewed desktop and mobile enquiry layouts, case-study summaries and an individual article; reviewed Privacy Policy and Terms pages. Checked capitalised wordmarks, footer links and LinkedIn destination.
- Corrected horizontal overflow at the 760 px breakpoint: the hero's decorative pseudo-element extended beyond its mobile padding. Recheck showed document scroll width matching its client width.
- Aligned the JavaScript mobile threshold with CSS at exactly 760 px and recalculated the render pixel limit on resize.
- Made mobile navigation links at least 44 px high; the menu remains bounded and scrollable. Checked a short 360 × 640 viewport with all nine navigation links accessible.
- Positioned the desktop process illustration between its heading and step grid, following the measured content spacing. This resolves crowding against step labels on taller desktop screens.
- Removed migration-only wording from the policy UI; the original policy bodies remain intact. Matched the sample application wordmark to Tatvix's capitalisation.

## Browser evidence

Reviewed viewport sizes include 1440 × 900, 1280 × 720, 1191 × 668, 760 × 900, 390 × 844 and 360 × 640. These are browser viewport checks, not claims of testing every device or browser.

- Mobile menu opens, closes on selection and dismisses on Escape with focus returned to its toggle.
- Empty form submission shows a focused error summary and associated inline errors. The summary's name error link focuses the corresponding input. No email is sent for this check.
- The motion toggle changes its label and pressed state. Two screenshots taken after pausing were identical; resume restores motion.
- Case-study navigation opens the article at the top. Article structured data parses and reflects visible title, description, team author and publication date.
- Browser errors were checked during the scene review. Meaningful service information remains ordinary HTML outside the canvas.

Saved visual evidence in the task output folder includes processor mobile, IoT desktop, contact desktop and case-study mobile screenshots. Final publication details are recorded in the task's release verification output after deployment.

## Automated checks

- Seven automated checks pass: six enquiry-handler cases and one geometry/animation check.
- TypeScript passes.
- HTTP checks: homepage, both policies and all four case-study pages return 200 with an H1; an unknown case study returns 404; an empty JSON enquiry returns 400 with `success: false`.
- Source whitespace verification passes.
- The release workflow runs the framework build and packages the exact pushed source before deployment.

## Remaining launch verification

No actual enquiry was submitted. Verify the old server's CONTACT_EMAIL/SMTP_USER destination and inbox receipt at `info@tatvixtech.com` with an approved test. Preserve the self-forwarding guard and move delivery to a separate stable origin or supported mail API before migrating `www.tatvixtech.com` to this application.

Reduced-motion and WebGL-fallback paths were retained and source-reviewed; this session did not emulate an OS reduced-motion preference or a failed GPU. Physical-device GPU/battery performance, a full browser matrix, production domain mapping, final crawler/sitemap configuration and the full pre-launch SEO/accessibility audit remain release work. The current preview keeps its noindex configuration.
