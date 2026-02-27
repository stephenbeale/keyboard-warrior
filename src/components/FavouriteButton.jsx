import { useFavourites } from "../hooks/useFavourites";

export default function FavouriteButton({ id }) {
  const { isFavourite, toggle } = useFavourites();
  const active = isFavourite(id);

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      className={`flex items-center gap-1 text-xs cursor-pointer bg-transparent border-none transition-colors ${
        active ? "text-red-400" : "text-text-muted hover:text-text-secondary"
      }`}
      aria-label={active ? "Remove from favourites" : "Add to favourites"}
      title={active ? "Remove from favourites" : "Add to favourites"}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {active ? "Saved" : "Save"}
    </button>
  );
}
