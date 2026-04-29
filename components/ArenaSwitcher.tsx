'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Annotation } from './Annotation';

const arenas = [
  {
    slug: 'grid',
    label: 'Grid',
    blurb: 'The physical and regulatory foundation of the transition.',
  },
  {
    slug: 'growth',
    label: 'Growth',
    blurb: 'Demand planning for the defining utility challenge of the decade.',
  },
  {
    slug: 'globe',
    label: 'Globe',
    blurb: 'The lessons we bring back to the US sector and make the case for.',
  },
];

export function ArenaSwitcher({ showAnnotation = false }: { showAnnotation?: boolean }) {
  const pathname = usePathname();

  return (
    <div className="arena-peers">
      <div className="arena-peers-inner">
        <div className="arena-peers-label">
          The three arenas
          {showAnnotation && (
            <Annotation
              number={9}
              note="Arena navigation as peer cards. All three arenas remain equally visible from every page, so Grid, Growth, and Globe carry equal billing throughout the experience. Maps to RFP language around a unified digital experience."
            />
          )}
        </div>
        <div className="arena-peers-grid">
          {arenas.map((a) => {
            const active = pathname === `/shape/${a.slug}`;
            return (
              <Link
                key={a.slug}
                href={`/shape/${a.slug}`}
                className={`arena-peer ${active ? 'active' : ''} arena-peer-${a.slug}`}
              >
                <div className="arena-peer-head">
                  <span className="arena-peer-marker" aria-hidden="true">{active ? '●' : '○'}</span>
                  <span className="arena-peer-label">{a.label}</span>
                  <span className="arena-peer-state">{active ? 'You are here' : 'Explore →'}</span>
                </div>
                <p className="arena-peer-blurb">{a.blurb}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
