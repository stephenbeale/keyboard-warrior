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

function loadSuggestion(id) {
  return localStorage.getItem(getStorageKey(id, "suggestion")) || "";
}

function saveSuggestion(id, text) {
  if (text) {
    localStorage.setItem(getStorageKey(id, "suggestion"), text);
  } else {
    localStorage.removeItem(getStorageKey(id, "suggestion"));
  }
}

export default function CardFeedback({ id }) {
  const [rating, setRating] = useState(() => loadRating(id));
  const [hoveredStar, setHoveredStar] = useState(0);
  const [reported, setReported] = useState(() => loadReport(id));
  const [showInput, setShowInput] = useState(() => loadReport(id));
  const [suggestion, setSuggestion] = useState(() => loadSuggestion(id));
  const [saved, setSaved] = useState(() => !!loadSuggestion(id));
  const [ratingSubmitted, setRatingSubmitted] = useState(() => loadRating(id) > 0);

  function handleRate(star) {
    const newRating = star === rating ? 0 : star;
    setRating(newRating);
    saveRating(id, newRating);
    setRatingSubmitted(newRating > 0);
  }

  function handleImprove() {
    if (reported) {
      setReported(false);
      saveReport(id, false);
      setSuggestion("");
      saveSuggestion(id, "");
      setShowInput(false);
      setSaved(false);
    } else {
      setReported(true);
      saveReport(id, true);
      setShowInput(true);
      setSaved(false);
    }
  }

  function handleSaveSuggestion() {
    saveSuggestion(id, suggestion);
    setSaved(true);
  }

  const displayRating = hoveredStar || rating;
  const hasSuggestion = saved && suggestion.trim().length > 0;

  return (
    <div className="mt-3 pt-2 border-t border-surface-lighter">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-text-muted text-xs">Rate this shortcut</span>
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
          {ratingSubmitted && (
            <span className="text-[10px] text-green-400">Submitted</span>
          )}
        </div>

        <button
          type="button"
          onClick={handleImprove}
          className={`flex items-center gap-1 text-xs cursor-pointer bg-transparent border-none transition-colors ${
            reported
              ? "text-accent"
              : "text-text-muted hover:text-text-secondary"
          }`}
          aria-label={reported ? "Collapse suggestion" : "Improve this shortcut"}
          title={reported ? "Click to collapse" : "Suggest an improvement"}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
          Improve this!
          {hasSuggestion && (
            <span className="text-[10px] text-green-400">(submitted)</span>
          )}
        </button>
      </div>

      {showInput && (
        <div className="flex items-center gap-2 mt-2">
          <input
            type="text"
            value={suggestion}
            onChange={(e) => {
              setSuggestion(e.target.value);
              setSaved(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && suggestion.trim()) handleSaveSuggestion();
            }}
            placeholder="What should it say instead?"
            className="flex-1 px-2 py-1 text-xs rounded border border-surface-lighter bg-surface text-text-primary placeholder:text-text-muted/50 outline-none focus:border-accent"
          />
          <button
            type="button"
            onClick={handleSaveSuggestion}
            disabled={!suggestion.trim()}
            className="px-2 py-1 text-xs rounded bg-accent text-white border-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          >
            {saved ? "Submitted" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
}
