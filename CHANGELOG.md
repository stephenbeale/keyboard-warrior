# Changelog

## 2026-02-24

### Added
- Coffee nudge in site footer (always visible)
- `CardFeedback` suggest-alternative input: clicking "Report" now expands an inline text
  input so users can suggest a correction; suggestion persists to localStorage alongside
  the report flag; "(with suggestion)" badge shown when saved; clearing report also clears
  the stored suggestion (PR #10)
- ROADMAP.md Phase 2 gains "OS home page" item (platform picker -> filtered search)

### Changed
- Cleaned up stale git branches
- Fresh production build for SiteGround deployment

---

## 2026-02-23

### Added
- Star rating (1-5) on shortcut and workflow cards (localStorage)
- "Report incorrect" button on all cards (localStorage)
- `CardFeedback` component shared by ResultCard and WorkflowCard
- `ROADMAP.md` with 4-phase feature plan
- Coffee nudge restyled as a prominent card layout

---

## 2026-02-22

### Added
- Light/dark mode toggle with system preference detection
- Flash-prevention inline script in `index.html`
- `ThemeToggle` component with sun/moon icons
- CSS variable indirection (`--th-*`) for theme switching
- Workflow guides feature (20 curated multi-step workflows)
- `WorkflowCard` component with numbered steps and kbd badges
- `workflows.js` data file
- Token-based multi-word search (all tokens must match)
- Workflow score boosting when shortcut matches are weak
- `CoffeeNudge` component (Buy Me a Coffee link)
- GitHub Actions deploy workflow with `VITE_BASE` env var

### Changed
- Fuse.js search weights retuned (title 0.45, tags 0.25)
- Fuse.js threshold tightened to 0.3
- Vite base path changed from `/keyboard-warrior/` to `/` for custom domain
- `useSearch.js` merged shortcuts + workflows into single Fuse index
- `App.jsx` renders WorkflowCard for workflow items, workflows subsection per category
