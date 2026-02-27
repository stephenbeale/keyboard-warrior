import { createContext, useContext, useState, useCallback, useMemo } from "react";

const STORAGE_KEY = "favourites";

function loadFavourites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavourites(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(loadFavourites);

  const toggle = useCallback((id) => {
    setFavourites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];
      saveFavourites(next);
      return next;
    });
  }, []);

  const isFavourite = useCallback(
    (id) => favourites.includes(id),
    [favourites]
  );

  const value = useMemo(
    () => ({ favourites, toggle, isFavourite }),
    [favourites, toggle, isFavourite]
  );

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error("useFavourites must be used within FavouritesProvider");
  return ctx;
}
