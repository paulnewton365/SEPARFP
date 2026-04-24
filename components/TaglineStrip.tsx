'use client';

import { usePathname } from 'next/navigation';

const breadcrumbs: Record<string, string> = {
  '/': 'Home',
  '/shape/grid': 'Home › Shape › Grid',
  '/research': 'Home › Research',
  '/for/utility': 'Home › For utility leaders',
  '/fortnightly': 'Home › Fortnightly',
  '/about': 'Home › About',
  '/login': 'Home › Sign in',
};

export function TaglineStrip() {
  const pathname = usePathname();
  const breadcrumb = breadcrumbs[pathname] || 'Home';

  // Hide on login and Fortnightly pages (they have their own identity)
  if (pathname === '/login' || pathname === '/fortnightly') return null;

  return (
    <div className="tagline-strip">
      <div className="tagline-inner">
        <div className="idea">Let&apos;s shape energy&apos;s transition.</div>
        <div className="breadcrumb">{breadcrumb}</div>
      </div>
    </div>
  );
}
