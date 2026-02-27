import { useRef, useCallback } from "react";
import { categories } from "../data/shortcuts";
import { useFavourites } from "../hooks/useFavourites";

export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const containerRef = useRef(null);
  const { favourites } = useFavourites();

  const handleKeyDown = useCallback(
    (e) => {
      const buttons = containerRef.current?.querySelectorAll("button");
      if (!buttons) return;

      const currentIndex = Array.from(buttons).indexOf(document.activeElement);
      if (currentIndex === -1) return;

      let nextIndex;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextIndex = (currentIndex + 1) % buttons.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      }

      if (nextIndex !== undefined) {
        buttons[nextIndex].focus();
      }
    },
    []
  );

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label="Filter by category"
      className="flex flex-wrap gap-2"
      onKeyDown={handleKeyDown}
    >
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === null
            ? "bg-accent text-surface"
            : "bg-surface-light text-text-secondary hover:bg-surface-lighter hover:text-text-primary"
        }`}
        aria-pressed={selectedCategory === null}
      >
        All
      </button>
      {favourites.length > 0 && (
        <button
          onClick={() =>
            setSelectedCategory(selectedCategory === "__favourites" ? null : "__favourites")
          }
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
            selectedCategory === "__favourites"
              ? "bg-accent text-surface"
              : "bg-surface-light text-text-secondary hover:bg-surface-lighter hover:text-text-primary"
          }`}
          aria-pressed={selectedCategory === "__favourites"}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          My Shortcuts ({favourites.length})
        </button>
      )}
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() =>
            setSelectedCategory(selectedCategory === cat.id ? null : cat.id)
          }
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === cat.id
              ? "bg-accent text-surface"
              : "bg-surface-light text-text-secondary hover:bg-surface-lighter hover:text-text-primary"
          }`}
          aria-pressed={selectedCategory === cat.id}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
