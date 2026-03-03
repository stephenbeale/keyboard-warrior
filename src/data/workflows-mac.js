export const workflowsMac = [
  {
    id: "wm1",
    type: "workflow",
    title: "Annotate a screenshot",
    description: "Take a screenshot, add arrows/text, and share it — all without opening a separate app",
    steps: [
      { instruction: "Take a selection screenshot", keys: "⌘ + ⇧ + 4" },
      { instruction: "Drag to select the region you want to capture" },
      {
        instruction:
          "A thumbnail appears in the corner — click it before it disappears to open Markup",
      },
      {
        instruction:
          "Use the toolbar to add arrows, text, shapes, or a magnifier loupe, then click Done",
      },
      {
        instruction:
          "Or: open any screenshot from the Desktop in Preview, then use Tools → Annotate",
      },
    ],
    category: "desktop",
    tags: ["screenshot", "annotate", "markup", "arrow", "text", "preview", "share"],
  },
  {
    id: "wm2",
    type: "workflow",
    title: "Move files with Cut & Paste in Finder",
    description:
      "Mac doesn't have a Cut shortcut for files, but you can still move them with the keyboard",
    steps: [
      { instruction: "Select the file(s) you want to move in Finder" },
      { instruction: "Copy them to the clipboard", keys: "⌘ + C" },
      { instruction: "Navigate to the destination folder" },
      {
        instruction: "Move (paste and delete original)",
        keys: "⌘ + ⌥ + V",
      },
    ],
    category: "finder",
    tags: ["cut", "paste", "move", "file", "finder", "keyboard", "drag"],
  },
  {
    id: "wm3",
    type: "workflow",
    title: "Set up Mission Control Spaces for focused work",
    description: "Organise your apps across virtual desktops for a distraction-free workflow",
    steps: [
      { instruction: "Open Mission Control", keys: "⌃ + ↑" },
      {
        instruction:
          "Hover over the top of the screen to reveal the Spaces bar, then click + to add a new Space",
      },
      {
        instruction:
          "Drag windows from Mission Control into the new Space, or open apps directly in that Space",
      },
      {
        instruction: "Switch between Spaces fluidly",
        keys: "⌃ + ← / ⌃ + →",
      },
      {
        instruction:
          "Tip: assign apps to a specific Space by right-clicking the app in the Dock → Options → Assign to This Desktop",
      },
    ],
    category: "window-management",
    tags: ["spaces", "mission control", "virtual desktop", "focus", "workflow", "organise"],
  },
];
