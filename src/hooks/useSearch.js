import { useMemo, useState, useCallback } from "react";
import Fuse from "fuse.js";
import { shortcuts } from "../data/shortcuts";

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

  const fuse = useMemo(() => new Fuse(shortcuts, fuseOptions), []);

  const results = useMemo(() => {
    let items;

    if (query.trim().length < 2) {
      items = shortcuts;
    } else {
      items = fuse.search(query).map((r) => r.item);
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
