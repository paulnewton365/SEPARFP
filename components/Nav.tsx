'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavSearch } from './NavSearch';
import { AudienceSelector } from './AudienceSelector';
import { MobileMenu } from './MobileMenu';
import { Annotation } from './Annotation';

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
        <span className="nav-name-annotation">
          <Annotation
            number={46}
            note="The SEPA name and identity are placeholders for the prototype. The brand name itself is one of the strategic outcomes of this engagement, as set out in the RFP, the discovery and brand strategy phase will determine whether the name evolves, the architecture changes, or the existing identifier carries forward. The wordmark, the logo mark, and the lockup shown here exist only to anchor the prototype layout."
          />
        </span>
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
