import ThemeToggle from './ThemeToggle';
import CoffeeNudge from './CoffeeNudge';
import HostingNudge from './HostingNudge';

export default function Layout({ children }) {
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
            <ThemeToggle />
          </div>
        </header>

        <main id="main-content" className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
          {children}
        </main>

        <footer className="border-t border-surface-lighter px-4 py-4 text-center text-text-muted text-xs">
          Press <kbd>/</kbd> to search &middot; <kbd>Esc</kbd> to clear &middot; <kbd>Tab</kbd> to navigate
          <CoffeeNudge />
          <HostingNudge />
        </footer>
      </div>
    </>
  );
}
