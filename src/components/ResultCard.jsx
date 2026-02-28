import { categories } from "../data/shortcuts";
import CardFeedback from "./CardFeedback";
import CopyButton from "./CopyButton";

export default function ResultCard({ shortcut }) {
  const categoryLabel =
    categories.find((c) => c.id === shortcut.category)?.label ?? shortcut.category;

  return (
    <article
      className="bg-surface-light border border-surface-lighter rounded-lg p-4 hover:border-accent/40 transition-colors focus-within:ring-2 focus-within:ring-accent/30"
      tabIndex={0}
      aria-label={`${shortcut.title}: ${shortcut.keysDisplay}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-text-primary font-semibold text-base">
            {shortcut.title}
          </h3>
          <p className="text-text-secondary text-sm mt-1 leading-relaxed">
            {shortcut.description}
          </p>
        </div>
        <div className="flex-shrink-0 sm:text-right">
          <span className="text-accent font-mono text-sm whitespace-nowrap">
            {shortcut.keysDisplay.split(" ").map((part, i) =>
              part === "+" || part === "→" || part === "/" ? (
                <span key={i} className="text-text-muted mx-0.5">
                  {part === "+" ? " + " : ` ${part} `}
                </span>
              ) : (
                <kbd key={i}>{part}</kbd>
              )
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-surface-lighter text-text-muted">
          {categoryLabel}
        </span>
        <CopyButton text={shortcut.keysDisplay} />
      </div>
      <CardFeedback id={shortcut.id} />
    </article>
  );
}
