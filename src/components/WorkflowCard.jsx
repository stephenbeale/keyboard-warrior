import { categories } from "../data/shortcuts";

function StepKeys({ keys }) {
  return (
    <span className="text-accent font-mono text-sm whitespace-nowrap">
      {keys.split(" ").map((part, i) =>
        part === "+" || part === "\u2192" || part === "/" ? (
          <span key={i} className="text-text-muted mx-0.5">
            {part === "+" ? " + " : ` ${part} `}
          </span>
        ) : (
          <kbd key={i}>{part}</kbd>
        )
      )}
    </span>
  );
}

export default function WorkflowCard({ workflow }) {
  const categoryLabel =
    categories.find((c) => c.id === workflow.category)?.label ??
    workflow.category;

  return (
    <article
      className="bg-surface-light border border-surface-lighter rounded-lg p-4 hover:border-accent/40 transition-colors focus-within:ring-2 focus-within:ring-accent/30 border-l-4 border-l-accent-dim"
      tabIndex={0}
      aria-label={`Workflow: ${workflow.title}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-text-primary font-semibold text-base">
          {workflow.title}
        </h3>
        <span className="flex-shrink-0 inline-block px-2 py-0.5 rounded text-xs font-medium bg-accent-dim/20 text-accent">
          Workflow
        </span>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed mb-3">
        {workflow.description}
      </p>

      <ol className="space-y-2">
        {workflow.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-surface-lighter text-text-muted flex items-center justify-center text-xs font-semibold mt-0.5">
              {i + 1}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 flex-1 min-w-0">
              <span className="text-text-primary leading-relaxed">
                {step.instruction}
              </span>
              {step.keys && (
                <span className="flex-shrink-0">
                  <StepKeys keys={step.keys} />
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-3">
        <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-surface-lighter text-text-muted">
          {categoryLabel}
        </span>
      </div>
    </article>
  );
}
