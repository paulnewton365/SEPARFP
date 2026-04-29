'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavSearch } from './NavSearch';
import { AudienceSelector } from './AudienceSelector';
import { MobileMenu } from './MobileMenu';

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
            <Link href="/shape" className={isActive('/shape') ? 'active' : ''}>
              Shape
            </Link>
          </li>
          <li>
            <Link href="/research" className={isActive('/research') ? 'active' : ''}>
              Research
            </Link>
          </li>
          <li>
            <Link href="/convene" className={isActive('/convene') ? 'active' : ''}>
              Membership
            </Link>
          </li>
          <li>
            <Link href="/join" className={isActive('/join') ? 'active' : ''}>
              Join
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              About
            </Link>
          </li>
          <li className="nav-divider" aria-hidden="true" />
          <li>
            <Link href="/fortnightly" className={`nav-fortnightly ${isActive('/fortnightly') ? 'active' : ''}`}>
              Fortnightly
            </Link>
          </li>
        </ul>
        <div className="nav-cta">
          <NavSearch />
          <AudienceSelector />
          <a className="sign-in" aria-disabled="true">Sign in</a>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
