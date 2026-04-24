'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { VersionBadge } from './VersionBadge';

const views = [
  { path: '/', label: 'Home' },
  { path: '/shape/grid', label: 'Shape' },
  { path: '/research', label: 'Research' },
  { path: '/for/utility', label: 'Utility Hub' },
  { path: '/fortnightly', label: 'Fortnightly' },
  { path: '/about', label: 'About' },
];

export function ProtoBanner() {
  const pathname = usePathname();
  const [annotationsOn, setAnnotationsOn] = useState(true);

  useEffect(() => {
    // Sync DOM class on mount and whenever flag changes
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('annotations-off', !annotationsOn);
    }
  }, [annotationsOn]);

  const toggleAnnotations = () => setAnnotationsOn((on) => !on);

  return (
    <div className="proto-banner">
      <div>
        <strong>WORKING PROTOTYPE</strong>
        <span className="tag"> / SEPA IA / For internal review</span>
        <VersionBadge variant="dark" />
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <span className="tag" style={{ marginRight: 4 }}>View:</span>
        {views.map((view) => {
          const active = view.path === '/' ? pathname === '/' : pathname.startsWith(view.path);
          return (
            <Link
              key={view.path}
              href={view.path}
              className={active ? 'active' : ''}
            >
              {view.label}
            </Link>
          );
        })}
        <button
          onClick={toggleAnnotations}
          className={annotationsOn ? 'active' : ''}
          style={{ marginLeft: 12 }}
        >
          Annotations
        </button>
      </div>
    </div>
  );
}
