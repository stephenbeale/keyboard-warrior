# Keyboard Warrior - Roadmap

## Phase 1 - Polish (next up)

- [x] Star ratings + report incorrect button on shortcut/workflow cards
- [ ] Copy shortcut to clipboard button
- [ ] Favourites / "My Shortcuts" (localStorage)
- [ ] PWA support (offline, installable)

## Phase 2 - Content Expansion

- [ ] Multi-platform support (Mac, Linux) with landing page platform selector
- [ ] More workflows (PowerToys, WSL, Terminal tricks)
- [ ] Skill level tags (beginner / intermediate / advanced)

## Phase 3 - Engagement

- [ ] Shortcut of the day
- [ ] Quiz / practice mode
- [ ] Printable cheat sheet
- [ ] Deep links / shareable URLs

## Phase 4 - Multi-Platform Architecture

When we add Mac and Linux support, here's the plan:

- **Landing page** with platform picker (Windows / Mac / Linux)
- **Platform-specific data files:** `shortcuts-windows.js`, `shortcuts-mac.js`, `shortcuts-linux.js`
- **Shared categories** where applicable (General, Browser, Text Editing)
- **Platform-specific categories** (File Explorer vs Finder vs Nautilus)
- **Key mapping layer** (Ctrl to Cmd on Mac, Win to Super on Linux)
- **React context** for platform state, persisted in localStorage
- **React Router** for `/windows`, `/mac`, `/linux` routes
