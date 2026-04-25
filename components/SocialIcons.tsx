import Link from 'next/link';

export function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function ShareIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}

export function SocialLinks({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <div className={`social-links ${variant}`}>
      <a href="https://x.com/SEPAPower" target="_blank" rel="noopener noreferrer" aria-label="SEPA on X">
        <XIcon />
      </a>
      <a href="https://linkedin.com/company/smart-electric-power-alliance" target="_blank" rel="noopener noreferrer" aria-label="SEPA on LinkedIn">
        <LinkedInIcon />
      </a>
      <a href="https://youtube.com/@SEPAPower" target="_blank" rel="noopener noreferrer" aria-label="SEPA on YouTube">
        <YouTubeIcon />
      </a>
    </div>
  );
}

interface ShareButtonsProps {
  url?: string;
  title?: string;
  variant?: 'light' | 'dark';
}

export function ShareButtons({ url = '', title = '', variant = 'light' }: ShareButtonsProps) {
  // For wireframe: links use share intents; in production these would deep-link properly
  const encoded = encodeURIComponent(url || (typeof window !== 'undefined' ? window.location.href : ''));
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    { label: 'X', icon: <XIcon size={14} />, href: `https://x.com/intent/tweet?url=${encoded}&text=${encodedTitle}` },
    { label: 'LinkedIn', icon: <LinkedInIcon size={14} />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}` },
  ];

  return (
    <div className={`share-buttons ${variant}`}>
      <span className="share-label">Share</span>
      {shares.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="share-btn" aria-label={`Share on ${s.label}`}>
          {s.icon}
        </a>
      ))}
    </div>
  );
}
