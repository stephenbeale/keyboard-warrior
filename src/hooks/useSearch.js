import { useMemo, useState, useCallback } from "react";
import Fuse from "fuse.js";
import { shortcuts } from "../data/shortcuts";
import { workflows } from "../data/workflows";

const shortcutItems = shortcuts.map((s) => ({ ...s, type: "shortcut" }));
const workflowItems = workflows.map((w) => ({ ...w, type: "workflow" }));
const allItems = [...shortcutItems, ...workflowItems];

const fuseOptions = {
  keys: [
    { name: "title", weight: 0.35 },
    { name: "tags", weight: 0.3 },
    { name: "description", weight: 0.2 },
    { name: "keysDisplay", weight: 0.1 },
    { name: "category", weight: 0.05 },
  ],
  threshold: 0.4,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

export function useSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fuse = useMemo(() => new Fuse(allItems, fuseOptions), []);

  const results = useMemo(() => {
    let items;

    if (query.trim().length < 2) {
      items = allItems;
    } else {
      const raw = fuse.search(query);

      // Check if shortcut results are weak (best shortcut score > 0.3)
      const bestShortcutScore = raw
        .filter((r) => r.item.type === "shortcut")
        .reduce((best, r) => Math.min(best, r.score), 1);
      const weakShortcuts = bestShortcutScore > 0.3;

      items = raw
        .map((r) => ({
          ...r.item,
          _score: r.score,
          // Boost workflows when shortcut results are weak
          _sortScore:
            r.item.type === "workflow" && weakShortcuts
              ? r.score * 0.7
              : r.score,
        }))
        .sort((a, b) => a._sortScore - b._sortScore);
    }

    if (selectedCategory) {
      items = items.filter((item) => item.category === selectedCategory);
    }

    return items;
  }, [query, selectedCategory, fuse]);

  const clearSearch = useCallback(() => {
    setQuery("");
  }, []);

  return {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    results,
    clearSearch,
  };
}
