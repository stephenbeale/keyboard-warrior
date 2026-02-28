# Keyboard Warrior - Roadmap

## Phase 1 - Polish (next up)

- [x] Star ratings + report incorrect button on shortcut/workflow cards
- [x] Redesign feedback bar: "Rate this shortcut" label next to stars with submit button; rename "Report" to "Improve this!" with expandable text box and submit button
- [ ] Feedback backend via Supabase (free tier) — thumbs up/down ratings + "Improve this!" text submissions; display aggregate ratings to all users
- [x] Copy shortcut to clipboard button
- [x] Favourites / "My Shortcuts" (localStorage)
- [x] `/` keyboard shortcut to focus the search bar from anywhere in the app
- [x] SiteGround affiliate link nudge in footer
- [x] PWA support (offline, installable)

## Phase 2 - Content Expansion

- [ ] **OS home page** — landing page with large buttons for Windows, Mac, and Linux; each leads to the OS-filtered shortcuts/search page. Persist choice in localStorage so returning users skip the picker.
- [ ] Mac shortcuts data (`shortcuts-mac.js`) — Cmd-based equivalents, Finder workflows, Spotlight, Mission Control
- [ ] Linux shortcuts data (`shortcuts-linux.js`) — Super key, Nautilus/Files, terminal workflows, common DE shortcuts (GNOME/KDE)
- [ ] More workflows (PowerToys, WSL, Terminal tricks)
- [ ] Skill level tags (beginner / intermediate / advanced)

## Phase 3 - Engagement

- [ ] Shortcut of the day
- [ ] Quiz / practice mode
- [ ] Printable cheat sheet
- [ ] Deep links / shareable URLs

## Phase 4 - Multi-Platform Architecture

When we add Mac and Linux support, here's the plan:

- **OS home page** with platform picker (Windows / Mac / Linux) leading into the OS-filtered search page
- **Platform-specific data files:** `shortcuts-windows.js`, `shortcuts-mac.js`, `shortcuts-linux.js`
- **Shared categories** where applicable (General, Browser, Text Editing)
- **Platform-specific categories** (File Explorer vs Finder vs Nautilus)
- **Key mapping layer** (Ctrl to Cmd on Mac, Win to Super on Linux)
- **React context** for platform state, persisted in localStorage
- **React Router** for `/windows`, `/mac`, `/linux` routes
