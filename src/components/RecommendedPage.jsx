const CLAUDE_REFERRAL_URL = 'CLAUDE_REFERRAL_URL';
const QUIDCO_REFERRAL_URL = 'QUIDCO_REFERRAL_URL';
const MONZO_REFERRAL_URL = 'MONZO_REFERRAL_URL';
const LEBARA_REFERRAL_URL = 'LEBARA_REFERRAL_URL';
const SITEGROUND_URL = 'https://www.siteground.com/go/steve';
const BMAC_URL = 'https://buymeacoffee.com/stephenbeale';

const recommendations = [
  {
    name: 'Claude',
    description: 'AI assistant I use for coding and building this site',
    url: CLAUDE_REFERRAL_URL,
  },
  {
    name: 'Buy Me a Coffee',
    description: 'Support my work',
    url: BMAC_URL,
  },
  {
    name: 'Quidco',
    description: 'Cashback on UK purchases',
    url: QUIDCO_REFERRAL_URL,
  },
  {
    name: 'Monzo',
    description: 'My main bank \u2014 great for budgeting',
    url: MONZO_REFERRAL_URL,
  },
  {
    name: 'Lebara',
    description: 'Cheap SIM for international calls',
    url: LEBARA_REFERRAL_URL,
  },
  {
    name: 'SiteGround',
    description: 'Hosting I use for my projects',
    url: SITEGROUND_URL,
  },
];

export default function RecommendedPage({ onBack }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="text-accent hover:text-accent-dim text-sm mb-6 cursor-pointer"
      >
        &larr; Back to shortcuts
      </button>

      <h1 className="text-2xl font-bold text-text-primary mb-2">Tools I Use</h1>

      <p className="text-text-secondary text-sm mb-6">
        Some links are referral links &mdash; if you sign up, you get a benefit and so do I. I only list things I actually use.
      </p>

      <div className="space-y-3">
        {recommendations.map((rec) => (
          <a
            key={rec.name}
            href={rec.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-surface-light border border-surface-lighter px-4 py-3 hover:border-accent transition-colors"
          >
            <span className="font-semibold text-text-primary">{rec.name}</span>
            <span className="text-text-secondary text-sm ml-2">{rec.description}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
