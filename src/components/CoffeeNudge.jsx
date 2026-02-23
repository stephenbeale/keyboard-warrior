export default function CoffeeNudge() {
  return (
    <div className="my-3 rounded-lg bg-surface-light border border-surface-lighter px-4 py-3 text-center">
      <p className="text-text-secondary text-sm">
        ☕ Enjoying this? Consider{' '}
        <a
          href="https://buymeacoffee.com/stephenbeale"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent hover:text-accent-dim underline"
        >
          buying me a coffee
        </a>
        {' '}to support this site ☕
      </p>
    </div>
  );
}
