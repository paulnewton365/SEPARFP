'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const labels: Record<string, string> = {
  shape: 'Shape',
  grid: 'Grid',
  growth: 'Growth',
  globe: 'Globe',
  research: 'Research',
  convene: 'Membership',
  fortnightly: 'Fortnightly',
  'large-load-playbook': 'Power to the People',
  join: 'Join',
  about: 'About',
  for: 'Audiences',
  utility: 'Utility leaders',
};

export function TaglineStrip() {
  const pathname = usePathname();

  // Hide on login, Fortnightly, and article pages, they have their own identity
  if (
    pathname === '/login' ||
    pathname === '/fortnightly' ||
    pathname.startsWith('/fortnightly/')
  ) {
    return null;
  }

  // Don't render breadcrumb on home, only the tagline
  const isHome = pathname === '/';

  const parts = pathname.split('/').filter(Boolean);
  const trail = parts.map((seg, i) => ({
    label: labels[seg] || seg,
    href: '/' + parts.slice(0, i + 1).join('/'),
    isCurrent: i === parts.length - 1,
  }));

  return (
    <div className="tagline-strip">
      <div className="tagline-inner">
        <div className="idea">Let&apos;s shape energy&apos;s transition.</div>
        {!isHome && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            {trail.map((item) => (
              <span key={item.href} className="breadcrumb-segment">
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                {item.isCurrent ? (
                  <span className="breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="breadcrumb-link">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
