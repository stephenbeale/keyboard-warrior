export default function CoffeeNudge() {
  return (
    <p className="text-center text-text-muted text-xs py-2">
      ☕ Enjoying this? Consider{' '}
      <a
        href="https://buymeacoffee.com/stephenbeale"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-dim underline"
      >
        buying me a coffee
      </a>
      {' '}to support this site ☕
    </p>
  );
}
