import { useState, useCallback } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-surface-lighter text-text-muted hover:text-text-primary hover:bg-surface-lighter/80 transition-colors cursor-pointer"
      aria-label={copied ? "Copied!" : `Copy ${text}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}
