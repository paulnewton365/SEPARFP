'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const views = [
  { path: '/', label: 'Home' },
  { path: '/shape/grid', label: 'Shape / Grid' },
  { path: '/research', label: 'Research' },
  { path: '/for/utility', label: 'Utility Hub' },
];

export function ProtoBanner() {
  const pathname = usePathname();
  const [annotationsOn, setAnnotationsOn] = useState(true);

  const toggleAnnotations = () => {
    const next = !annotationsOn;
    setAnnotationsOn(next);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('annotations-off', !next);
    }
  };

  return (
    <div className="proto-banner">
      <div>
        <strong>WORKING PROTOTYPE</strong>
        <span className="tag"> / SEPA IA v0.1 / For internal review</span>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span className="tag" style={{ marginRight: 4 }}>
          View:
        </span>
        {views.map((view) => (
          <Link
            key={view.path}
            href={view.path}
            className={pathname === view.path ? 'active' : ''}
          >
            {view.label}
          </Link>
        ))}
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
