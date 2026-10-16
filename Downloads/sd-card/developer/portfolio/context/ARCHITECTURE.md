# Architecture Record

## Current architecture

- **Application type:** static single-page portfolio.
- **Markup:** `index.html` defines navigation, hero, featured work, development direction, about, and contact sections.
- **Styling:** `styles.css` contains CSS custom properties for colors/type/spacing, responsive layouts, focus treatments, reduced-motion rules, ambient background light, orbit/object animations, and entrance/reveal transitions.
- **Behavior:** `app.js` handles English/Filipino copy, metadata/title updates, local language preference, responsive navigation open/close/Escape behavior, copy-email feedback/fallback, and IntersectionObserver-based section reveals when reduced motion is not requested.
- **Runtime and persistence:** browser-side portfolio served by a small dependency-free Node static file server (`serve.js`), launchable with `npm start` or `node serve.js`. The server binds to `127.0.0.1` by default, serves files rooted at the project directory, and has no application API, authentication, database, or external data store. Language preference uses local storage when available.
- **Build and hosting:** `scripts/build-static.js` copies only `index.html`, `styles.css`, and `app.js` into `dist`; `npm run preview` serves that artifact locally. `vercel.json` sets Framework Other, skips package installation, builds `dist`, and adds response security headers. No external service credentials are required.
- **Dependencies:** no third-party packages or install step. Node.js is required for local serving and the allowlisted static build.
- **External links:** contact links use the supplied email with `mailto:`; no analytics or third-party image/font requests are used.

See `../docs/REPOSITORY_AUDIT.md` for verified implementation and browser-check results.

## Open operational choices

- Vercel is configured as the static deployment target, but no project/account is linked and no production domain or release has been configured.
- The actual LMS project details, screenshots, public URL, and source link are not available yet.
- No resume download, social profile, or contact form has been added because no source content or service was provided.

## Guardrails

1. Keep the portfolio static unless a concrete requirement needs trusted server behavior.
2. Do not add analytics, tracking, or third-party assets without an explicit need and privacy review.
3. Do not imply the public portfolio provides authentication, project hosting, or backend functionality.
4. Treat the displayed email and city as intentionally public portfolio details; do not add more personal details without a clear portfolio purpose.
5. Keep deployment and external account setup separate from local implementation and report them only when verified.
