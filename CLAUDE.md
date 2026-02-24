# Keyboard Warrior - Claude Code Notes

## Project Overview

A Windows keyboard shortcuts reference app built with React + Vite + Tailwind CSS.
Hosted at: **keyboardwarrior.cc** (custom domain on SiteGround)
GitHub repo: https://github.com/stephenbeale/keyboard-warrior

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin, no tailwind.config.js)
- Fuse.js 7 for fuzzy search (token-based multi-word matching)
- GitHub Actions for CI (`.github/workflows/deploy.yml`)

## Key Files

| File | Purpose |
|---|---|
| `src/data/shortcuts.js` | All shortcut data + categories array |
| `src/data/workflows.js` | 20 curated multi-step workflow guides |
| `src/components/WorkflowCard.jsx` | Renders workflow guides with numbered steps |
| `src/components/ResultCard.jsx` | Renders individual shortcut entries |
| `src/hooks/useSearch.js` | Combined Fuse.js search across shortcuts + workflows |
| `src/App.jsx` | Root component, grouped browse + search result rendering |
| `src/components/CardFeedback.jsx` | Star rating + report incorrect (localStorage) |
| `src/components/ThemeToggle.jsx` | Light/dark mode toggle with system preference detection |
| `src/components/CoffeeNudge.jsx` | Buy Me a Coffee nudge (inline + footer) |
| `vite.config.js` | base set to `/` for custom domain (not GitHub Pages) |
| `ROADMAP.md` | Feature roadmap (4 phases) |

## Architecture Notes

### Search
`useSearch.js` maintains a single Fuse.js index over both `shortcutItems` and `workflowItems`
(each tagged with a `type` field: `"shortcut"` or `"workflow"`). When the best shortcut
match score exceeds 0.3 (i.e. weak shortcut results), workflow scores are multiplied by 0.7
to boost them toward the top of results.

### Browsing by category
In `App.jsx`, the grouped (non-search) view splits each category's items into `shortcuts`
and `workflows` arrays. Workflows render in a "Workflows" subsection below the shortcuts
for each category.

### Theme system
`src/index.css` uses CSS custom property indirection: `@theme` references `var(--th-*)` variables.
`:root` defines dark theme, `[data-theme="light"]` overrides for light. Flash-prevention script
in `index.html <head>` sets `data-theme` before first paint via localStorage / prefers-color-scheme.

### Vite base path
`base: '/'` in `vite.config.js` — this is correct for the custom domain `keyboardwarrior.cc`.
Do NOT change it back to `/keyboard-warrior/` (that was the GitHub Pages path).
GitHub Pages workflow uses `VITE_BASE` env var to override to `/keyboard-warrior/`.

---

## Session Notes

### 2026-02-22 - Session Summary

**Work Completed:**
- Implemented Workflow Guides feature (20 workflows covering window snapping, virtual
  desktops, batch file rename, clipboard history, Focus Assist, Run dialog tricks, etc.)
- Created `src/data/workflows.js` — each workflow has `id`, `title`, `description`,
  `category`, `type: "workflow"`, and a `steps` array (each step has `instruction` and
  optional `keys` array for kbd rendering)
- Created `src/components/WorkflowCard.jsx` — left accent border, numbered steps,
  inline `<kbd>` key badges, "Workflow" badge in the header
- Updated `src/hooks/useSearch.js` — unified search index, workflow score boosting
- Updated `src/App.jsx` — WorkflowCard rendering in both search and browse modes
- Updated `vite.config.js` base to `/` for custom domain hosting
- Build confirmed passing before session end
- Committed and pushed: commit `a384329` on `master`

**Hosting Setup (user handling manually - in progress):**
- Domain `keyboardwarrior.cc` purchased on Namecheap
- SiteGround hosting account exists
- Steps given to user:
  1. Add domain in SiteGround (Websites > Add Website)
  2. Point Namecheap DNS nameservers to SiteGround's ns1/ns2
  3. Install free SSL in SiteGround (Security > SSL Manager > Let's Encrypt)
  4. Build locally with `npm run build`
  5. Upload contents of `dist/` to `public_html/` via SiteGround File Manager
- DNS propagation can take up to 24-48 hours after nameserver change

**Unfinished Git Workflows:**
- None — working tree is clean, all commits pushed to origin/master

**Next Steps:**
1. Verify the site is live at https://keyboardwarrior.cc after DNS propagates
2. If SiteGround hosting is confirmed working, consider setting up a deploy script or
   GitHub Actions workflow to auto-upload `dist/` to SiteGround via FTP/SFTP
   (SiteGround supports SFTP — credentials in SiteGround dashboard under Websites > FTP)
3. Possible future features to consider:
   - Add a "copy shortcut" button on ResultCard
   - Add more workflows (PowerToys, WSL, Terminal tricks)
   - Add a favorites/bookmarks system (localStorage)
   - Add keyboard navigation through results

**Technical Notes:**
- The GitHub Actions CI workflow (`.github/workflows/deploy.yml`) was set up for GitHub Pages
  in a prior session but the deploy target has since changed to SiteGround. The file is
  intentionally preserved — do NOT delete it. It could be repurposed for SFTP deploy to
  SiteGround. The user has not yet decided on this.
- Tailwind v4 uses `@tailwindcss/vite` plugin instead of a `tailwind.config.js` file —
  no PostCSS config needed, styles are in `src/index.css` using `@import "tailwindcss"`.
- Fuse.js score: 0 = perfect match, 1 = no match. The 0.3 threshold in useSearch.js
  is tuned to feel natural — adjust if search relevance feels off.

---

### 2026-02-22 - Session Closure Audit

**Git Audit Result:**
- Working tree: clean
- Unpushed commits: none
- All work is on `origin/master` (latest commits: `deeb32f`, `a384329`)
- No open PRs

**Hosting Status (NOT yet complete — action required by user):**
- Domain `keyboardwarrior.cc` purchased on Namecheap but DNS is NOT yet pointed anywhere
- SiteGround account exists but domain has NOT been added there yet
- SSL has NOT been installed
- `dist/` has NOT been uploaded to `public_html/` yet
- The site is not live

**Required manual steps before site goes live:**
1. In SiteGround Site Tools: add `keyboardwarrior.cc` as a domain (Websites > Add Website)
2. In Namecheap: point nameservers to SiteGround's ns1/ns2 (or set A record to SiteGround IP)
3. Wait for DNS propagation (up to 24-48 hours)
4. In SiteGround: install Let's Encrypt SSL (Security > SSL Manager)
5. Run `npm run build` locally to regenerate `dist/`
6. Upload contents of `dist/` to `public_html/` via SiteGround File Manager or SFTP

**Decision deferred:**
- Whether to delete or repurpose `.github/workflows/deploy.yml` for SFTP auto-deploy

---

### 2026-02-23 - Session Summary

**Work Completed:**
- Created `ROADMAP.md` in project root — 4 phased feature groups: Phase 1 Polish,
  Phase 2 Content Expansion, Phase 3 Engagement, Phase 4 Multi-Platform Architecture
- Created `src/components/CardFeedback.jsx` — star rating (1-5 stars) and "Report Incorrect"
  button; both states persisted to localStorage keyed by card id
- Integrated `CardFeedback` into `src/components/ResultCard.jsx` and
  `src/components/WorkflowCard.jsx` (import + `<CardFeedback id={...} />` at card footer)
- Build verified passing
- PRs merged:
  - PR #8 - "Add star rating and report feedback to shortcut cards" (feature/rating-reporting)
  - PR #9 - "Make coffee nudge more prominent with card-style layout" (feature/coffee-nudge-prominent)

**Unfinished Git Workflows:**
- None — all PRs merged, working tree clean

**Note on CardFeedback Integration:**
- After PR #8 merged, the user reported that the CardFeedback import/usage lines were
  reverted from ResultCard.jsx and WorkflowCard.jsx locally (possibly via linter or manual
  edit). At session closure, the current files on master DO still contain the CardFeedback
  integration (confirmed by grep). If integration is missing locally, the merged master
  commit `382c9ee` is the source of truth.

**Next Steps:**
1. Phase 1 roadmap items: copy to clipboard, favourites, PWA support
2. Phase 2: multi-platform support (Mac, Linux), more workflows
3. Hosting: complete SiteGround deployment (see 2026-02-24 notes)

---

### 2026-02-24 - Session Summary

**Work Completed:**
- Merged PR #5 (coffee nudge inline) and PR #7 (coffee nudge in footer)
- Cleaned up stale local branches — only `master` remains
- Fresh production build generated in `dist/`
- Began SiteGround deployment:
  - Phase 1 done: domain `keyboardwarrior.cc` added to SiteGround
  - Phase 2 pending: user needs to update Namecheap nameservers to SiteGround's
  - Phases 3-5 pending: file upload, SSL, verification

**Hosting Deployment Status:**
- Domain added to SiteGround (Phase 1 complete)
- Namecheap nameservers NOT yet updated (Phase 2 pending)
- Files NOT yet uploaded to `public_html/` (Phase 3 pending)
- SSL NOT yet installed (Phase 4 pending)
- Remaining phases: update NS on Namecheap, upload dist/ to public_html, install SSL, verify

**Git Status:**
- Working tree: clean
- All PRs merged (#1-#9)
- Only `master` branch locally

**Technical Notes:**
- `CardFeedback.jsx` localStorage keys: `rating:<id>` and `report:<id>`
- `CoffeeNudge.jsx` renders in two places: inline after first result (App.jsx) and in footer (Layout.jsx)
- `website-deployer` agent updated: recognizes "SG"/"HG" shorthand, uses clickable markdown links
