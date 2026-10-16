# Portfolio Development Sequence

Use this as a lightweight order for future changes; do not treat it as a feature checklist.

1. **Repository audit** — inspect current source/content and run the safe checks before changing the site. Keep `docs/REPOSITORY_AUDIT.md` evidence-based.
2. **Content confirmation** — verify personal claims, project facts, links, and contact details from owner-provided sources. Keep aspirations distinct from demonstrated experience.
3. **Experience design** — improve hierarchy, navigation, case-study storytelling, bilingual clarity, responsiveness, accessibility, and performance within the existing static setup.
4. **Implementation** — preserve working interactions and avoid unnecessary dependencies. Add a backend only for a concrete feature that requires one.
5. **Validation** — run JavaScript syntax and HTML parsing checks, test navigation/language/contact affordances, inspect desktop and mobile widths, and report any unverified behavior honestly.
6. **Release** — connect the configured Vercel project with the owner, choose/confirm the production domain, verify output and privacy implications, then document the actual deployment. Do not claim a deployment that was not performed.

## Current known content gaps

- Detailed LMS features, technologies, project images, code/demo links, and additional work examples.
- Any confirmed resume/CV, social links, education history, or specific role preferences beyond the supplied profile notes.
- Production domain and release timing; Vercel is configured but not linked/deployed.

## Release checks

- [ ] Main navigation and all in-page links work.
- [ ] English and Filipino content and accessible control names remain synchronized.
- [ ] Email link and copy feedback are accurate; no fake form submission is shown.
- [ ] No horizontal overflow at narrow, tablet, and desktop widths.
- [ ] Keyboard focus, semantic headings/landmarks, and reduced-motion preferences are respected.
- [ ] Project copy is evidence-based and does not imply unprovided tools, outcomes, endorsements, or deployments.
- [ ] Available checks have exact PASS / FAIL / NOT RUN results recorded in the audit and handoff.
