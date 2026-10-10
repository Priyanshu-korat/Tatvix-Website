# Google Analytics 4 — Tatvix

Measurement ID: G-L3DWKK55NR. Account: 411413656. Property: 558360798. Web stream: 16101129541. Stream URL: https://www.tatvixtech.com.

## Collection and consent

The shared layout includes the consent controller on every route. The tag loads only on www.tatvixtech.com after explicit acceptance; development, Netlify aliases, deploy previews and Sites previews do not collect Analytics. Both acceptance and rejection are equally available. Cookie settings in the footer lets visitors revise their decision. Choices expire after 180 days. Withdrawal disables Analytics, clears accessible _ga cookies and reloads the document to unload the downloaded tag. No pre-consent or rejected-consent pings are sent (basic consent mode).

Consent Mode defaults deny analytics_storage, ad_storage, ad_user_data and ad_personalization. Acceptance grants only analytics_storage. Google signals and advertising personalization remain disabled. No extra package or Tag Manager container is needed.

## Events

- page_view: one event per page change, with page title, path-only URL and sanitized referring origin/path. Query strings and fragments are excluded.
- generate_lead: only after the contact endpoint returns HTTP success with success:true. The only custom parameter is form_id:project_enquiry. Failed validation and failed delivery do not count. No name, email, phone, company, job title, project message or submission reference is passed.
- GA may also record standard consented session/engagement events.

Enhanced measurement was turned off in the Analytics stream to avoid automatic form, URL-query and outbound-link capture or duplicate history page views. Revisit this decision only with a privacy and duplication review.

## Owner reporting

Open https://analytics.google.com/analytics/web/#/a411413656p558360798/reports/intelligenthome. Realtime shows current consented visitors. Traffic acquisition shows referring sources; Pages and screens shows service, industry and case-study interest. Mark generate_lead as a key event in Admin > Events if it is not already marked. Standard reports can lag behind Realtime. Rejected, blocked and preview visits are intentionally absent.

No new real enquiry is required to test tracking. Use a local mocked success response when validating the form event; production enquiry sending needs separate approval.

## Validation

Automated tests check no tracking without consent/on preview hosts, tag deduplication, URL cleanup, event parameters, withdrawal and cookie cleanup, and malformed/expired stored choices. Production build and scoped lint must pass before release. Live verification checks the consent banner, acceptance, Google collect requests, rejection and cookie settings; confirm receipt separately in Analytics Realtime.
