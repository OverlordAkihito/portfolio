# Security and Privacy Context

## Current portfolio surface

- The site is a static public page. It has no account system, API, visitor-submitted form, database, analytics, or privileged operation.
- The supplied contact email and city are displayed so visitors can make professional contact. The site uses a `mailto:` action and a local copy-email control.
- A language choice is stored in browser local storage. It is not a credential or identity record; language switching still works for the current page if storage is unavailable.
- No age, sex, relationship status, home address, private account, or authentication data is displayed.
- The Vercel build serves only an explicit allowlist (`index.html`, `styles.css`, `app.js`) from `dist`, keeping repository prompts, agent instructions, and context documents out of the public output. Recheck the allowlist when adding assets.

## Requirements for future changes

- Do not add credentials, tokens, unnecessary personal information, or private user data to client files or context records.
- If a contact form or other data collection is proposed, identify the recipient, retention, spam controls, and secure service boundary before implementation. Do not pretend a static form sends or stores messages.
- Keep the email as a direct user-provided contact detail; do not send it to analytics, third-party widgets, or other services without explicit need.
- Do not add tracking/location collection. The broad city displayed in the portfolio is profile content, not device location.
- Validate external links and avoid implying security or privacy guarantees that are not implemented.

## Evidence limits

The code and browser behavior were inspected locally. No deployment, server security assessment, privacy certification, formal WCAG audit, or third-party integration was performed.
