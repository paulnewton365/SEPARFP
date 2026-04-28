'use client';

import { usePathname } from 'next/navigation';

const breadcrumbs: Record<string, string> = {
  '/': 'Home',
  '/shape/grid': 'Home › Shape › Grid',
  '/shape/growth': 'Home › Shape › Growth',
  '/shape/globe': 'Home › Shape › Globe',
  '/research': 'Home › Research',
  '/convene': 'Home › Membership',
  '/for/utility': 'Home › For utility leaders',
  '/fortnightly': 'Home › Fortnightly',
  '/fortnightly/large-load-playbook': 'Home › Fortnightly › Power to the People',
  '/about': 'Home › About',
  '/join': 'Home › Join',
  '/login': 'Home › Sign in',
};

export function TaglineStrip() {
  const pathname = usePathname();
  const breadcrumb = breadcrumbs[pathname] || 'Home';

  // Hide on login, Fortnightly, and article pages (they have their own identity)
  if (pathname === '/login' || pathname === '/fortnightly' || pathname.startsWith('/fortnightly/')) return null;

  return (
    <div className="tagline-strip">
      <div className="tagline-inner">
        <div className="idea">Let&apos;s shape energy&apos;s transition.</div>
        <div className="breadcrumb">{breadcrumb}</div>
      </div>
    </div>
  );
}
