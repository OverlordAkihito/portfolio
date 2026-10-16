# Requirements Register

**Scope:** Personal developer portfolio for Jenren “Renz” B. Datan. Statuses below refer to this repository's current implementation and the checks recorded in `docs/REPOSITORY_AUDIT.md`.

## Status vocabulary

Use `Implemented`, `Partial`, `UI-only`, `Missing`, or `Unable to verify`. An implemented visual control must have real behavior where its appearance promises it.

| ID | Requirement | Status and evidence |
|---|---|---|
| PORT-01 | Introduce Renz, his location, student status, and full-stack development direction without inventing credentials. | Implemented — hero and about sections in `index.html`; copy is based on supplied `info.txt`. |
| PORT-02 | Present a featured LMS project and accurately disclose AI assistance. | Partial — `index.html` presents the functional LMS and AI assistance; detailed features, technologies, screenshots, source/demo link, and case-study evidence are not supplied. |
| PORT-03 | Provide English and Filipino site copy with a usable language toggle and saved preference where browser storage allows. | Implemented — `app.js` updates copy, document language/title/metadata, and local preference. |
| PORT-04 | Make primary navigation and content responsive for desktop, tablet, and mobile, with a usable mobile menu. | Implemented — `styles.css` breakpoints and `app.js` menu behavior; tested at 1440, 768, 390, and 320 CSS pixels with no horizontal overflow. |
| PORT-05 | Provide clear email contact through a mail link and copy action. | Implemented — `mailto:` links and clipboard/fallback logic in `index.html` and `app.js`; copy action is not separately verified in the browser. |
| PORT-06 | Use semantic structure, keyboard-visible focus, accessible labels, and reduced-motion support. | Partial — landmarks, heading structure, focus styles, accessible menu labels, and `prefers-reduced-motion` treatment are present; no formal WCAG audit or screen-reader review was performed. |
| PORT-07 | Keep the site static, lightweight, and free of unsupported external-service claims. | Implemented — no app dependencies, backend, analytics, or remote assets; local preference is the only browser-side persistence. |

## Deferred content

Add more detailed LMS content only after the owner supplies verified features, technologies, screenshots, or a demo/source link. Do not fabricate additional projects, certifications, job history, metrics, testimonials, or social profiles.
