# Architecture Record

## Evidence status at bootstrap (updated 2026-10-17)

**Application architecture: unable to verify.** The audited workspace contains the context keeper only; no application source/configuration was present. The historical HTML/JavaScript description remains unverified. See `../docs/REPOSITORY_AUDIT.md`.

**Current workspace facts:** `context/` contains keeper records; `scripts/` contains Python snapshot, validation, and watcher utilities. The utilities are Python standard-library scripts. `context_sync.py` reads Git metadata/path names and writes `context/AUTO_STATE.md`; `context_validate.py` checks required keeper files/phrases. There is no application entry point, framework manifest, app data store, backend, auth provider, or deployment configuration in the audited inventory. No target architecture decision was made.

## Current-state facts to establish in `docs/REPOSITORY_AUDIT.md` for the actual application

- Languages, frameworks, build tooling, package managers, entry points and key directories.
- Runtime/hosting assumptions and environment/configuration inputs (names only; never values for secrets).
- Client/server or trusted-service boundaries.
- Persistence, database/storage, schema/migrations and data ownership rules.
- Authentication/session setup and role/authorization enforcement points.
- Chat/realtime, media upload, external backup and billing/subscription integrations where present.
- Tests, lint/type-check/build commands and observed results.
- Feature-by-feature evidence and ranked security/reliability risks.

## Architecture guardrails

1. Do not select a new framework, backend, database, auth service, cloud host, realtime provider, QR package, payment provider or external storage provider without evidence or an explicit owner decision.
2. Prefer one clear trusted path for sensitive operations; do not create overlapping backends/data stores without a concrete rationale.
3. A browser-only UI cannot be treated as a trusted authority for authentication, authorization, billing entitlements, moderation, protected backups, or cross-user access control.
4. Enforce record ownership and authorization at the trusted server/service layer; UI checks support usability but do not replace authorization.
5. Document data model, retention/deletion, migration, recovery and compatibility implications when relevant.
6. Keep provider-independent interfaces only when they solve a real current requirement; avoid speculative abstraction layers.
7. Separate confirmed current architecture from recommended target architecture. Mark proposals as `Proposed` until selected.

## Decisions not yet made

Provider selection, production URL, deployment environment, persistence technology, realtime transport, payment system, and external backup destination remain undecided here unless the actual repository or owner configuration establishes otherwise. Do not fill these gaps with invented values.

## After an audit of the actual application

Update this file with evidence-backed current architecture and links to source paths/symbols. The target architecture should be recorded separately in `docs/ARCHITECTURE_DECISIONS.md` (as the development guide recommends) with trust boundaries, data ownership, service responsibilities, migration stages and unresolved decisions. A recommendation is not a fact about what is implemented.
