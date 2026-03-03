import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const OS_OPTIONS = [
  { id: 'windows', label: 'Windows', emoji: '🪟' },
  { id: 'mac',     label: 'Mac',     emoji: '🍎' },
  { id: 'linux',   label: 'Linux',   emoji: '🐧', comingSoon: true },
];

export default function PlatformPicker({ onSelect }) {
  const [comingSoonOS, setComingSoonOS] = useState(null);

  function handleCardClick(os) {
    if (os.comingSoon) {
      setComingSoonOS(os.id);
    } else {
      onSelect(os.id);
    }
  }

  const comingSoonLabel = OS_OPTIONS.find((o) => o.id === comingSoonOS)?.label;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4" role="img" aria-label="keyboard">⌨</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Keyboard Warrior
          </h1>
          <p className="text-text-secondary mt-2 text-base">
            Master your keyboard, faster
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
          {OS_OPTIONS.map((os) => (
            <button
              key={os.id}
              onClick={() => handleCardClick(os)}
              aria-label={os.comingSoon ? `${os.label} — coming soon` : `Select ${os.label}`}
              className={[
                'relative flex-1 flex flex-col items-center justify-center gap-3 p-8 rounded-xl border-2 transition-colors cursor-pointer',
                os.comingSoon
                  ? 'border-surface-lighter opacity-60 hover:opacity-80'
                  : 'border-surface-lighter hover:border-accent hover:bg-surface-lighter',
              ].join(' ')}
            >
              {os.comingSoon && (
                <span className="absolute top-3 right-3 text-xs bg-surface-lighter text-text-secondary px-2 py-0.5 rounded-full">
                  Coming soon
                </span>
              )}
              <span className="text-4xl" role="img" aria-hidden="true">
                {os.emoji}
              </span>
              <span className="text-lg font-semibold text-text-primary">
                {os.label}
              </span>
            </button>
          ))}
        </div>

        {comingSoonOS && (
          <p className="mt-6 text-text-secondary text-sm" role="status">
            {comingSoonLabel} shortcuts are coming soon! 🎉
          </p>
        )}
      </div>
    </div>
  );
}
