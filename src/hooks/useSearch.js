import { useMemo, useState, useCallback } from "react";
import Fuse from "fuse.js";
import { shortcuts } from "../data/shortcuts";
import { workflows } from "../data/workflows";
import { useFavourites } from "./useFavourites";

const shortcutItems = shortcuts.map((s) => ({ ...s, type: "shortcut" }));
const workflowItems = workflows.map((w) => ({ ...w, type: "workflow" }));
const allItems = [...shortcutItems, ...workflowItems];

const fuseOptions = {
  keys: [
    { name: "title", weight: 0.45 },
    { name: "tags", weight: 0.25 },
    { name: "description", weight: 0.15 },
    { name: "keysDisplay", weight: 0.1 },
    { name: "category", weight: 0.05 },
  ],
  threshold: 0.3,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

function tokenSearch(fuse, query) {
  const tokens = query.trim().split(/\s+/).filter((t) => t.length >= 2);

  if (tokens.length <= 1) {
    return fuse.search(query);
  }

  // Search each token independently
  const resultSets = tokens.map((token) => {
    const hits = fuse.search(token);
    const map = new Map();
    for (const hit of hits) {
      map.set(hit.item, hit.score);
    }
    return map;
  });

  // Intersect: only keep items that matched ALL tokens
  const firstSet = resultSets[0];
  const combined = [];

  for (const [item, score] of firstSet) {
    let allMatch = true;
    let totalScore = score;

    for (let i = 1; i < resultSets.length; i++) {
      const otherScore = resultSets[i].get(item);
      if (otherScore === undefined) {
        allMatch = false;
        break;
      }
      totalScore += otherScore;
    }

    if (allMatch) {
      combined.push({ item, score: totalScore / tokens.length });
    }
  }

  combined.sort((a, b) => a.score - b.score);
  return combined;
}

export function useSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { favourites } = useFavourites();

  const fuse = useMemo(() => new Fuse(allItems, fuseOptions), []);

  const results = useMemo(() => {
    let items;

    if (query.trim().length < 2) {
      items = allItems;
    } else {
      const raw = tokenSearch(fuse, query);

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

    if (selectedCategory === "__favourites") {
      items = items.filter((item) => favourites.includes(item.id));
    } else if (selectedCategory) {
      items = items.filter((item) => item.category === selectedCategory);
    }

    return items;
  }, [query, selectedCategory, fuse, favourites]);

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
