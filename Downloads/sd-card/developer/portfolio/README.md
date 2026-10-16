# Jenren Renz B. Datan Portfolio

This workspace now contains a lightweight, bilingual developer portfolio and the context-keeper materials used to maintain it. The site uses plain HTML, CSS, and JavaScript with no application dependencies or build step.

## Run the portfolio locally

From this folder, start any static file server. With Python 3:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`. You can also open `index.html` directly, though clipboard behavior works best from localhost or a deployed HTTPS site.

## Portfolio files

- `index.html` — semantic page structure and portfolio copy.
- `styles.css` — color tokens, layouts, responsive styling, and reduced-motion treatment.
- `app.js` — English/Filipino switching, responsive navigation, and email copying.

The portfolio content is based on the supplied profile notes. The LMS is described only as a functional learning management system made with AI assistance; the source notes do not provide its feature list, public demo, code link, or screenshots.

## Context keeper

The `context/` and `scripts/` folders retain the repository handoff, requirements, architecture/security notes, and metadata snapshot tools. The audit in `docs/REPOSITORY_AUDIT.md` records the current portfolio implementation. This section below describes the context-keeper tools and their use.

---

## Context Keeper Kit for Codex and Other Coding AIs

**Version:** 1.0.0  
**Purpose:** Preserve accurate project context across AI sessions, make meaningful changes traceable, and help the next agent resume from repository evidence instead of chat-memory guesses.

## What is included

- `index.html`, `styles.css`, and `app.js` — the static bilingual portfolio website.
- `AGENTS.md` — canonical project instructions for coding agents.
- `context/SESSION_HANDOFF.md` — the next-session starting point.
- `context/PROJECT_OVERVIEW.md` — product purpose and boundaries.
- `context/REQUIREMENTS.md` — feature goals, acceptance expectations, and evidence-based status fields.
- `context/ARCHITECTURE.md` — actual architecture facts separated from open choices and principles.
- `context/WORK_STATE.md` — active work, blockers, and verified checks.
- `context/DECISIONS.md` — durable decisions and the reasons behind them.
- `context/SECURITY_AND_PRIVACY.md` — security/privacy invariants for this multi-user app.
- `context/SESSION_LOG.md` — concise, meaningful session history.
- `context/AUTO_STATE.md` — generated repository snapshot, refreshed by a script.
- `context/CONTEXT_INDEX.md` — tells the agent which context file to use and when to update it.
- `context/PROMPT_COMPLETENESS.md` — a reusable prompt/task completeness checklist based on RTCCO and explicit acceptance criteria.
- `context/DEVELOPMENT_SEQUENCE.md` — development order and app-specific release checks from the supplied development guide.
- `scripts/context_sync.py` — refreshes the machine-generated repository state without reading source-file contents.
- `scripts/context_watch.py` — optional foreground watcher that refreshes the machine snapshot while repository metadata changes.
- `scripts/context_validate.py` — validates the presence and basic integrity of the keeper files.
- `FIRST_RUN_PROMPT.txt` — audit-only bootstrap instruction.
- `NEXT_SESSION_PROMPT.txt` — reusable template for ordinary work.

## Install it safely

1. Extract this kit.
2. Open the **actual application repository root** in Codex or your coding assistant. Do not use the extracted kit folder as a substitute for the application.
3. Copy `AGENTS.md`, `context/`, and `scripts/` into the application root. Copy the prompts and README if useful.
4. **Merge; do not blindly overwrite.** If the repository already has `AGENTS.md` or context files, compare them and preserve valid existing constraints and decisions. Resolve conflicts explicitly rather than silently deleting established project knowledge.
5. Run the first-run prompt in `FIRST_RUN_PROMPT.txt`. The first task is repository discovery and documentation, not feature implementation.
6. Keep the kit files under version control alongside the project when appropriate. Do not place credentials, tokens, production data, or private user records in them.

## Use it in each session

At session start, the agent should read `AGENTS.md`, `context/SESSION_HANDOFF.md`, `context/WORK_STATE.md`, `context/PROJECT_OVERVIEW.md`, and the relevant requirements/security/architecture notes. It should run:

```bash
python scripts/context_sync.py
python scripts/context_sync.py --check
python scripts/context_validate.py
```

For continuous machine-snapshot refresh while actively coding, you can optionally keep a terminal running:

```bash
python scripts/context_watch.py
```

Stop it with `Ctrl+C`. It is a foreground polling process, not an installed OS service; no background process is assumed to persist across sessions.

Then it should inspect the actual code relevant to the task. Do not re-audit the entire application for every small bug once a reliable audit exists; expand inspection when dependencies or risk require it.

Before handing off, the agent must refresh the generated snapshot, update the semantic context files affected by the change, update `WORK_STATE.md` and `SESSION_HANDOFF.md`, and append a concise entry to `SESSION_LOG.md` for meaningful work. Re-run validation afterward.

## What “auto-tracking” means here

The sync script automatically captures repository metadata when run: Git branch/commit, working-tree changes, recent commit subjects, top-level structure, and common tooling/configuration **signals**. Use `--check` to determine whether the saved snapshot is stale. The agent runs it at session start and before handoff. For live refresh during a coding period, `scripts/context_watch.py` optionally polls for changes and refreshes the machine snapshot.

The watcher is an optional foreground process and must be explicitly started; no OS-level background service is installed or assumed to persist across sessions. Both tools track repository metadata, not whether a feature is functionally correct. Semantic memory—why a change was made, requirements status, architecture decisions, risks, and next steps—must still be updated by the agent from evidence. A file watcher cannot understand code behavior.

## Current repository state

The portfolio is implemented as a static site. The LMS story is limited to the facts in the supplied profile notes; its detailed functions, technology stack, images, and public link remain unknown. See `docs/REPOSITORY_AUDIT.md` and `context/SESSION_HANDOFF.md` for current evidence and remaining content gaps.

## Suggested portfolio workflow

- Keep project content factual; confirm new experience, tools, metrics, and links before publishing them.
- Inspect the page at desktop and mobile widths after visual changes.
- Choose hosting/domain with the owner before deploying.
- Update the handoff, audit, and generated snapshot after meaningful changes.

## Status vocabulary

Use these consistently:

- **Verified / Implemented:** traced to the relevant implementation and corroborated by suitable checks where feasible.
- **Partial:** some path exists, but one or more important requirements are missing or unverified.
- **UI-only:** visible controls/screens exist, but the complete underlying behavior is not established.
- **Missing:** repository inspection supports that the capability is absent.
- **Unable to verify / Unknown:** evidence or access is insufficient.
- **Blocked:** a specific dependency, credential, owner decision, or permission prevents completion.
- **Not applicable:** deliberately out of scope, with rationale recorded.

A label or button is never enough by itself to mark a feature implemented.
