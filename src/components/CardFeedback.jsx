import { useState } from "react";

function getStorageKey(id, type) {
  return `${type}:${id}`;
}

function loadRating(id) {
  const val = localStorage.getItem(getStorageKey(id, "rating"));
  return val ? Number(val) : 0;
}

function saveRating(id, rating) {
  localStorage.setItem(getStorageKey(id, "rating"), String(rating));
}

function loadReport(id) {
  return localStorage.getItem(getStorageKey(id, "report")) === "1";
}

function saveReport(id, reported) {
  if (reported) {
    localStorage.setItem(getStorageKey(id, "report"), "1");
  } else {
    localStorage.removeItem(getStorageKey(id, "report"));
  }
}

export default function CardFeedback({ id }) {
  const [rating, setRating] = useState(() => loadRating(id));
  const [hoveredStar, setHoveredStar] = useState(0);
  const [reported, setReported] = useState(() => loadReport(id));

  function handleRate(star) {
    const newRating = star === rating ? 0 : star;
    setRating(newRating);
    saveRating(id, newRating);
  }

  function handleReport() {
    const newState = !reported;
    setReported(newState);
    saveReport(id, newState);
  }

  const displayRating = hoveredStar || rating;

  return (
    <div className="flex items-center justify-between mt-3 pt-2 border-t border-surface-lighter">
      <div
        className="flex items-center gap-0.5"
        onMouseLeave={() => setHoveredStar(0)}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRate(star)}
            onMouseEnter={() => setHoveredStar(star)}
            className="p-0.5 text-base leading-none cursor-pointer bg-transparent border-none transition-transform hover:scale-110"
            aria-label={`Rate ${star} out of 5`}
            title={`Rate ${star} out of 5`}
          >
            <span className={star <= displayRating ? "text-amber-400" : "text-text-muted/40"}>
              {star <= displayRating ? "\u2605" : "\u2606"}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleReport}
        className={`flex items-center gap-1 text-xs cursor-pointer bg-transparent border-none transition-colors ${
          reported
            ? "text-red-400"
            : "text-text-muted hover:text-text-secondary"
        }`}
        aria-label={reported ? "Reported as incorrect" : "Report incorrect"}
        title={reported ? "Reported as incorrect" : "Report incorrect"}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={reported ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
        {reported ? "Reported" : "Report"}
      </button>
    </div>
  );
}
