'use client';

import { VersionBadge } from './VersionBadge';

export function ProtoBanner() {
  return (
    <div className="proto-banner">
      <div>
        <strong>WORKING PROTOTYPE</strong>
        <span className="tag"> / SEPA IA / For internal review</span>
        <VersionBadge variant="dark" />
      </div>
      <div className="proto-banner-meta">
        <span className="tag">Annotations are visible inline. Hover to read.</span>
      </div>
    </div>
  );
}
