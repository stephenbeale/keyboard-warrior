import { useRef, useEffect } from "react";

export default function SearchBar({ query, setQuery, clearSearch, resultCount }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();

    function handleGlobalKey(e) {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        if (query) {
          clearSearch();
        } else {
          inputRef.current?.blur();
        }
      }
    }

    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, [query, clearSearch]);

  return (
    <div className="relative">
      <label htmlFor="search-input" className="sr-only">
        Search for keyboard shortcuts
      </label>
      <input
        ref={inputRef}
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Try "resize column explorer" or "snap window"...'
        className="w-full bg-surface-light border border-surface-lighter rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted text-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors"
        autoComplete="off"
        aria-label="Search for keyboard shortcuts and tips"
      />
      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary px-2 py-1 text-sm rounded transition-colors"
          aria-label="Clear search"
        >
          Clear
        </button>
      )}
      {query.length >= 2 && (
        <div className="mt-2 text-text-muted text-sm" aria-live="polite">
          {resultCount} {resultCount === 1 ? "result" : "results"} found
        </div>
      )}
    </div>
  );
}
