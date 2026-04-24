'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            <a>Fortnightly</a>
          </li>
          <li>
            <a>Join</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
        <div className="nav-cta">
          <a className="sign-in">Sign in</a>
          <a className="btn">Participate</a>
        </div>
      </div>
    </nav>
  );
}
