import ThemeToggle from './ThemeToggle';
import CoffeeNudge from './CoffeeNudge';
import HostingNudge from './HostingNudge';

const CLAUDE_REFERRAL_URL = 'CLAUDE_REFERRAL_URL';
const QUIDCO_REFERRAL_URL = 'QUIDCO_REFERRAL_URL';

const OS_LABELS = {
  windows: '⊞ Windows',
  mac: '⌘ Mac',
  linux: '🐧 Linux',
};

export default function Layout({ children, onChangeOS, selectedOS, onNavigate }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-surface-lighter px-4 py-5">
          <div className="max-w-3xl mx-auto flex items-center">
            <div className="w-10" />
            <div className="flex-1 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Keyboard Warrior
              </h1>
              <p className="text-text-muted text-sm mt-1">
                Navigate Windows without a mouse — search for shortcuts & tips
              </p>
            </div>
            <div className="flex items-center gap-2">
              {selectedOS && onChangeOS && (
                <button
                  onClick={onChangeOS}
                  aria-label="Change operating system"
                  title="Switch platform"
                  className="text-xs px-2 py-1 rounded-full bg-surface-lighter text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  {OS_LABELS[selectedOS] ?? selectedOS}
                </button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main id="main-content" className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
          {children}
        </main>

        <footer className="border-t border-surface-lighter px-4 py-4 text-center text-text-muted text-xs">
          Press <kbd>/</kbd> to search &middot; <kbd>Esc</kbd> to clear &middot; <kbd>Tab</kbd> to navigate
          <CoffeeNudge />
          <HostingNudge />
          <div className="mt-2 text-xs text-text-muted">
            Built with the help of{' '}
            <a href={CLAUDE_REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Claude</a>
            {' '}&middot;{' '}
            Save on tech gear with{' '}
            <a href={QUIDCO_REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Quidco cashback</a>
          </div>
          <div className="mt-3 pt-3 border-t border-surface-lighter text-xs text-text-muted">
            Also by me:{' '}
            <a href="https://waffley.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Waffley</a>
            {' '}&middot;{' '}
            <a href="https://stephenbeale.github.io/snout/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Snout</a>
            {' '}&middot;{' '}
            <a href="https://stephenbeale.github.io/job-compare/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">JobWeigh</a>
            {onNavigate && (
              <>
                {' '}&middot;{' '}
                <button
                  onClick={() => onNavigate('recommended')}
                  className="text-accent hover:underline cursor-pointer"
                >
                  Tools I Use
                </button>
              </>
            )}
          </div>
        </footer>
      </div>
    </>
  );
}
