export const workflows = [
  {
    id: "w1",
    type: "workflow",
    title: "Resize columns in File Explorer",
    description:
      "How to auto-fit or manually resize column widths in Details view",
    steps: [
      { instruction: "Open File Explorer", keys: "Win + E" },
      { instruction: "Switch to Details view", keys: "Ctrl + Shift + 6" },
      {
        instruction: "Auto-fit all columns to content",
        keys: "Ctrl + + (numpad)",
      },
      {
        instruction:
          "Or: drag column borders with mouse, or right-click any column header to show/hide columns",
      },
    ],
    category: "file-explorer",
    tags: [
      "resize",
      "column",
      "width",
      "explorer",
      "details",
      "adjust",
      "fit",
      "auto-size",
    ],
  },
  {
    id: "w2",
    type: "workflow",
    title: "Snap two windows side by side",
    description: "Tile two windows so each takes half the screen",
    steps: [
      { instruction: "Focus the first window you want on the left" },
      { instruction: "Snap it to the left half", keys: "Win + \u2190" },
      {
        instruction:
          "Windows shows remaining open windows \u2014 use arrow keys to pick the second window, then press Enter",
      },
      {
        instruction:
          "Or: snap a second window to the right half manually",
        keys: "Win + \u2192",
      },
    ],
    category: "window-management",
    tags: [
      "snap",
      "tile",
      "side by side",
      "split",
      "two windows",
      "half",
      "arrange",
      "left",
      "right",
    ],
  },
  {
    id: "w3",
    type: "workflow",
    title: "Batch rename files in File Explorer",
    description: "Rename multiple files at once using a common base name",
    steps: [
      { instruction: "Open the folder containing the files", keys: "Win + E" },
      { instruction: "Select all files you want to rename", keys: "Ctrl + A" },
      {
        instruction:
          "Or select specific files: hold Ctrl, use arrow keys to move, press Space to toggle each file",
      },
      {
        instruction:
          'Press F2 to rename \u2014 type the new base name and press Enter',
        keys: "F2",
      },
      {
        instruction:
          'Windows appends (1), (2), (3)\u2026 to each file automatically',
      },
    ],
    category: "file-explorer",
    tags: [
      "batch",
      "rename",
      "multiple",
      "files",
      "bulk",
      "mass",
      "sequential",
    ],
  },
  {
    id: "w4",
    type: "workflow",
    title: "Navigate the desktop without a mouse",
    description: "Get around Windows using only the keyboard from the desktop",
    steps: [
      { instruction: "Show the desktop", keys: "Win + D" },
      {
        instruction:
          "Navigate desktop icons with arrow keys, press Enter to open",
      },
      {
        instruction: "Open the Start Menu and type to search for any app",
        keys: "Win",
      },
      {
        instruction: "Switch between open apps",
        keys: "Alt + Tab",
      },
      {
        instruction: "Access the system tray and notification icons",
        keys: "Win + B",
      },
    ],
    category: "desktop",
    tags: [
      "navigate",
      "desktop",
      "no mouse",
      "keyboard only",
      "mouseless",
      "accessibility",
    ],
  },
  {
    id: "w5",
    type: "workflow",
    title: "Manage virtual desktops",
    description:
      "Create, switch between, and close virtual desktops for organizing workspaces",
    steps: [
      { instruction: "Create a new virtual desktop", keys: "Win + Ctrl + D" },
      {
        instruction: "Switch to the next desktop",
        keys: "Win + Ctrl + \u2192",
      },
      {
        instruction: "Switch to the previous desktop",
        keys: "Win + Ctrl + \u2190",
      },
      {
        instruction: "Open Task View to see all desktops and drag windows between them",
        keys: "Win + Tab",
      },
      {
        instruction: "Close the current virtual desktop",
        keys: "Win + Ctrl + F4",
      },
    ],
    category: "task-switching",
    tags: [
      "virtual desktop",
      "workspace",
      "multiple desktops",
      "organize",
      "manage",
      "create",
      "switch",
    ],
  },
  {
    id: "w6",
    type: "workflow",
    title: "Take and annotate a screenshot",
    description:
      "Capture a screen region and mark it up with Snipping Tool",
    steps: [
      {
        instruction: "Open Snipping Tool and select a region",
        keys: "Win + Shift + S",
      },
      {
        instruction:
          "Click the notification that appears to open the snip in Snipping Tool editor",
      },
      {
        instruction:
          "Use the pen, highlighter, or ruler tools in the editor to annotate",
      },
      {
        instruction: "Save the annotated screenshot",
        keys: "Ctrl + S",
      },
    ],
    category: "desktop",
    tags: [
      "screenshot",
      "annotate",
      "snip",
      "markup",
      "draw",
      "highlight",
      "capture",
      "edit",
    ],
  },
  {
    id: "w7",
    type: "workflow",
    title: "Keyboard-only browser tab workflow",
    description:
      "Open, navigate, and manage browser tabs entirely with the keyboard",
    steps: [
      { instruction: "Open a new tab", keys: "Ctrl + T" },
      {
        instruction: "Type a URL or search query in the address bar (auto-focused) and press Enter",
      },
      {
        instruction: "Switch between tabs",
        keys: "Ctrl + Tab / Ctrl + Shift + Tab",
      },
      {
        instruction: "Jump to a specific tab by number",
        keys: "Ctrl + 1\u20138",
      },
      { instruction: "Close the current tab", keys: "Ctrl + W" },
      {
        instruction: "Reopen an accidentally closed tab",
        keys: "Ctrl + Shift + T",
      },
    ],
    category: "browser",
    tags: [
      "browser",
      "tab",
      "keyboard",
      "navigate",
      "manage",
      "open",
      "close",
      "switch",
    ],
  },
  {
    id: "w8",
    type: "workflow",
    title: "Open an app as administrator",
    description: "Launch any application with elevated admin privileges",
    steps: [
      {
        instruction: "Open the Start Menu and type the app name",
        keys: "Win",
      },
      {
        instruction:
          "When the app appears in results, press Ctrl + Shift + Enter to run as admin",
        keys: "Ctrl + Shift + Enter",
      },
      {
        instruction:
          "Confirm the UAC (User Account Control) prompt with arrow keys and Enter",
      },
    ],
    category: "system",
    tags: [
      "admin",
      "administrator",
      "elevated",
      "run as",
      "privileges",
      "UAC",
      "launch",
    ],
  },
  {
    id: "w9",
    type: "workflow",
    title: "Navigate Windows Settings with the keyboard",
    description: "Find and change any setting without a mouse",
    steps: [
      { instruction: "Open Settings", keys: "Win + I" },
      {
        instruction:
          "Use Tab to move between sections, arrow keys within lists",
      },
      {
        instruction: "Press the search box and type what you're looking for",
      },
      {
        instruction:
          "Use Enter to select items, Space to toggle switches, and Escape to go back",
      },
    ],
    category: "system",
    tags: [
      "settings",
      "navigate",
      "keyboard",
      "configure",
      "options",
      "preferences",
      "no mouse",
    ],
  },
  {
    id: "w10",
    type: "workflow",
    title: "Select non-contiguous files in File Explorer",
    description:
      "Cherry-pick individual files from a list without selecting everything in between",
    steps: [
      {
        instruction: "Open the folder in File Explorer",
        keys: "Win + E",
      },
      {
        instruction: "Focus the first file you want to select",
      },
      {
        instruction:
          "Hold Ctrl and use arrow keys to move focus without selecting",
        keys: "Ctrl + Arrow keys",
      },
      {
        instruction: "Press Ctrl + Space to toggle selection on each file you want",
        keys: "Ctrl + Space",
      },
      {
        instruction: "Repeat: move with Ctrl + Arrow, toggle with Ctrl + Space",
      },
    ],
    category: "file-explorer",
    tags: [
      "select",
      "non-contiguous",
      "individual",
      "cherry-pick",
      "multiple",
      "files",
      "specific",
    ],
  },
  {
    id: "w11",
    type: "workflow",
    title: "Quickly launch apps from the taskbar",
    description: "Use keyboard shortcuts to open or switch to pinned taskbar apps",
    steps: [
      {
        instruction:
          "Pin your most-used apps to the taskbar by right-clicking them and choosing 'Pin to taskbar'",
      },
      {
        instruction: "Launch the first pinned app",
        keys: "Win + 1",
      },
      {
        instruction: "Launch the second pinned app",
        keys: "Win + 2",
      },
      {
        instruction:
          "Open a new instance of an already-running pinned app",
        keys: "Win + Shift + 1\u20139",
      },
    ],
    category: "start-menu-taskbar",
    tags: [
      "taskbar",
      "launch",
      "pin",
      "app",
      "quick",
      "shortcut",
      "open",
      "fast",
    ],
  },
  {
    id: "w12",
    type: "workflow",
    title: "Force close an unresponsive app",
    description:
      "When an app freezes, use Task Manager to end it",
    steps: [
      { instruction: "Open Task Manager", keys: "Ctrl + Shift + Esc" },
      {
        instruction:
          "Find the unresponsive app in the Processes tab (it may say 'Not Responding')",
      },
      {
        instruction: "Select it with arrow keys and press Delete or Alt + E to end task",
      },
      {
        instruction:
          "If Task Manager won't open, use the security screen",
        keys: "Ctrl + Alt + Delete",
      },
    ],
    category: "system",
    tags: [
      "force close",
      "unresponsive",
      "frozen",
      "hang",
      "kill",
      "end task",
      "not responding",
      "crash",
    ],
  },
  {
    id: "w13",
    type: "workflow",
    title: "Record your screen",
    description:
      "Capture a video of your screen using the built-in Xbox Game Bar",
    steps: [
      {
        instruction: "Make sure the app or window you want to record is focused",
      },
      {
        instruction: "Start recording",
        keys: "Win + Alt + R",
      },
      {
        instruction: "Toggle microphone audio during recording",
        keys: "Win + Alt + M",
      },
      {
        instruction: "Stop recording",
        keys: "Win + Alt + R",
      },
      {
        instruction:
          "Find your recording in the Videos > Captures folder",
      },
    ],
    category: "system",
    tags: [
      "record",
      "screen",
      "video",
      "capture",
      "game bar",
      "screencast",
      "tutorial",
    ],
  },
  {
    id: "w14",
    type: "workflow",
    title: "Use clipboard history for repeated pasting",
    description: "Copy multiple items and paste any of them from a history panel",
    steps: [
      { instruction: "Copy your first item", keys: "Ctrl + C" },
      { instruction: "Copy your second item", keys: "Ctrl + C" },
      {
        instruction:
          "Open clipboard history to see all copied items",
        keys: "Win + V",
      },
      {
        instruction:
          "Use arrow keys to select the item you want and press Enter to paste it",
      },
      {
        instruction: "Pin frequently-used items so they persist after restart",
      },
    ],
    category: "general",
    tags: [
      "clipboard",
      "history",
      "copy",
      "paste",
      "multiple",
      "items",
      "pin",
      "reuse",
    ],
  },
  {
    id: "w15",
    type: "workflow",
    title: "Arrange windows in a grid layout (Windows 11)",
    description:
      "Use Snap Layouts to organize windows into 2, 3, or 4-pane layouts",
    steps: [
      { instruction: "Focus any open window" },
      {
        instruction: "Open Snap Layouts",
        keys: "Win + Z",
      },
      {
        instruction:
          "Use arrow keys to choose a layout zone and press Enter",
      },
      {
        instruction:
          "Windows will prompt you to fill remaining zones \u2014 pick apps with arrow keys and Enter",
      },
    ],
    category: "window-management",
    tags: [
      "snap",
      "layout",
      "grid",
      "arrange",
      "organize",
      "tile",
      "zones",
      "quadrant",
    ],
  },
  {
    id: "w16",
    type: "workflow",
    title: "Quickly find and open any file or app",
    description:
      "Use Windows Search to launch anything without browsing through folders",
    steps: [
      {
        instruction: "Open Windows Search",
        keys: "Win + S",
      },
      {
        instruction: "Start typing the name of the app, file, or setting",
      },
      {
        instruction: "Use arrow keys to navigate results by category (Apps, Documents, Web, etc.)",
      },
      { instruction: "Press Enter to open the selected result" },
    ],
    category: "system",
    tags: [
      "search",
      "find",
      "open",
      "launch",
      "app",
      "file",
      "quick",
      "fast",
      "locate",
    ],
  },
  {
    id: "w17",
    type: "workflow",
    title: "Move a window to another monitor",
    description:
      "Relocate windows between monitors using only the keyboard",
    steps: [
      { instruction: "Focus the window you want to move" },
      {
        instruction: "Move window to the next monitor",
        keys: "Win + Shift + \u2192",
      },
      {
        instruction: "Or move to the previous monitor",
        keys: "Win + Shift + \u2190",
      },
      {
        instruction:
          "If the window is snapped, it will snap to the same position on the other monitor",
      },
    ],
    category: "window-management",
    tags: [
      "move",
      "window",
      "monitor",
      "screen",
      "display",
      "multi-monitor",
      "dual",
      "transfer",
    ],
  },
  {
    id: "w18",
    type: "workflow",
    title: "Zoom in on anything with Magnifier",
    description:
      "Use the built-in Magnifier to enlarge parts of the screen",
    steps: [
      { instruction: "Turn on Magnifier and zoom in", keys: "Win + + (plus)" },
      { instruction: "Zoom in further", keys: "Win + + (plus)" },
      { instruction: "Zoom out", keys: "Win + - (minus)" },
      {
        instruction:
          "Move around the zoomed view with Ctrl + Alt + arrow keys",
        keys: "Ctrl + Alt + Arrow keys",
      },
      { instruction: "Close Magnifier", keys: "Win + Esc" },
    ],
    category: "accessibility",
    tags: [
      "magnifier",
      "zoom",
      "enlarge",
      "accessibility",
      "vision",
      "bigger",
      "read",
    ],
  },
  {
    id: "w19",
    type: "workflow",
    title: "Use Find and Replace across a document",
    description:
      "Search for text and replace it throughout a document efficiently",
    steps: [
      { instruction: "Open Find and Replace", keys: "Ctrl + H" },
      {
        instruction:
          "Type the text to find in the 'Find' field",
      },
      {
        instruction:
          "Tab to the 'Replace with' field and type the replacement text",
      },
      {
        instruction: "Press Enter or click 'Replace' to replace one at a time, or Alt + A to replace all",
      },
      { instruction: "Close the dialog", keys: "Esc" },
    ],
    category: "text-editing",
    tags: [
      "find",
      "replace",
      "substitute",
      "text",
      "change",
      "all",
      "document",
      "bulk edit",
    ],
  },
  {
    id: "w20",
    type: "workflow",
    title: "Connect to a wireless display or TV",
    description:
      "Cast your screen to a Miracast-compatible display wirelessly",
    steps: [
      {
        instruction: "Open the Cast/Connect panel",
        keys: "Win + K",
      },
      {
        instruction:
          "Wait for available devices to appear and select one with arrow keys",
      },
      {
        instruction: "Press Enter to connect",
      },
      {
        instruction:
          "Choose display mode (Duplicate or Extend)",
        keys: "Win + P",
      },
    ],
    category: "system",
    tags: [
      "cast",
      "wireless",
      "display",
      "TV",
      "Miracast",
      "connect",
      "project",
      "screen share",
    ],
  },
];
