'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/shape/grid', label: 'Shape' },
  { href: '/research', label: 'Research' },
  { href: '/convene', label: 'Membership' },
  { href: '/fortnightly', label: 'Fortnightly' },
  { href: '/join', label: 'Join' },
  { href: '/about', label: 'About' },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`ham ${open ? 'open' : ''}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div className="mobile-menu-panel" role="dialog" aria-modal="true">
          <div className="mobile-menu-inner">
            <div className="mobile-menu-label">Navigate</div>
            {links.map((link) => {
              const active = link.href !== '#' && pathname.startsWith(link.href.split('/')[1] ? `/${link.href.split('/')[1]}` : link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`mobile-menu-link ${active ? 'active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span className="arrow">→</span>
                </Link>
              );
            })}
            <div className="mobile-menu-divider" />
            <a className="mobile-menu-link muted" aria-disabled="true">
              Sign in
              <span className="arrow">→</span>
            </a>
            <a className="btn" style={{ marginTop: 20, display: 'inline-block' }}>
              Participate
            </a>
          </div>
        </div>
      )}
    </>
  );
}
