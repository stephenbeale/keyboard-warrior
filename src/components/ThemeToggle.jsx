import { useState, useEffect } from 'react';

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: light)');
    function handleChange(e) {
      if (localStorage.getItem('theme')) return; // user override takes precedence
      const next = e.matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      setTheme(next);
    }
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  const isLight = theme === 'light';

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-lighter transition-colors cursor-pointer"
    >
      {isLight ? (
        // Moon icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
      ) : (
        // Sun icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}
