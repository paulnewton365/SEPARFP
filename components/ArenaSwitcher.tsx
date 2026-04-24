'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Annotation } from './Annotation';

const arenas = [
  { slug: 'grid', label: 'Grid' },
  { slug: 'growth', label: 'Growth' },
  { slug: 'globe', label: 'Globe' },
];

export function ArenaSwitcher({ showAnnotation = false }: { showAnnotation?: boolean }) {
  const pathname = usePathname();

  return (
    <div className="arena-switcher">
      <div className="arena-switcher-inner">
        <div className="arena-switcher-label">
          Shaping
          {showAnnotation && (
            <Annotation
              number={9}
              note="Arena switcher sits above every Shape page. Grid/Growth/Globe are always visible and one click apart, so the framework becomes the skeleton of the Shape experience."
            />
          )}
        </div>
        <div className="arena-switcher-links">
          {arenas.map((a) => {
            const active = pathname === `/shape/${a.slug}`;
            return (
              <Link
                key={a.slug}
                href={`/shape/${a.slug}`}
                className={`arena-switcher-link ${active ? 'active' : ''}`}
              >
                <span className="dot" />
                {a.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
