import { useRef, useCallback } from "react";
import { categories } from "../data/shortcuts";

export default function CategoryFilter({ selectedCategory, setSelectedCategory, favouriteCount = 0 }) {
  const containerRef = useRef(null);

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
      {favouriteCount > 0 && (
        <button
          onClick={() =>
            setSelectedCategory(selectedCategory === "favourites" ? null : "favourites")
          }
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === "favourites"
              ? "bg-red-400 text-surface"
              : "bg-surface-light text-text-secondary hover:bg-surface-lighter hover:text-text-primary"
          }`}
          aria-pressed={selectedCategory === "favourites"}
        >
          Favourites ({favouriteCount})
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
