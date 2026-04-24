'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavSearch } from './NavSearch';
import { AudienceSelector } from './AudienceSelector';

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <div className="logo-mark" />
          <div className="logo-text">
            SEPA<span>Smart Electric Power Alliance</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/shape/grid" className={isActive('/shape') ? 'active' : ''}>
              Shape
            </Link>
          </li>
          <li>
            <Link href="/research" className={isActive('/research') ? 'active' : ''}>
              Research
            </Link>
          </li>
          <li>
            <a>Convene</a>
          </li>
          <li>
            <Link href="/fortnightly" className={isActive('/fortnightly') ? 'active' : ''}>
              Fortnightly
            </Link>
          </li>
          <li>
            <a>Join</a>
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              About
            </Link>
          </li>
        </ul>
        <div className="nav-cta">
          <NavSearch />
          <AudienceSelector />
          <Link href="/login" className="sign-in">Sign in</Link>
        </div>
      </div>
    </nav>
  );
}
