import { useState, useCallback } from "react";

const STORAGE_KEY = "favourites";

function loadFavourites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveFavourites(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export function useFavourites() {
  const [favourites, setFavourites] = useState(loadFavourites);

  const toggleFavourite = useCallback((id) => {
    setFavourites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveFavourites(next);
      return next;
    });
  }, []);

  const isFavourite = useCallback((id) => favourites.has(id), [favourites]);

  return { favourites, toggleFavourite, isFavourite, count: favourites.size };
}
