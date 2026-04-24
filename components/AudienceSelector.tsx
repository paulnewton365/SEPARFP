'use client';

import { useState, useRef, useEffect } from 'react';
import { useAudience, AUDIENCE_LABELS, AUDIENCE_SHORT, Audience } from './AudienceContext';

const ORDER: Audience[] = ['all', 'utility', 'regulator', 'provider', 'buyer'];

export function AudienceSelector() {
  const { audience, setAudience, hydrated } = useAudience();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }
  }, [open]);

  if (!hydrated) {
    // Render a placeholder to avoid hydration flicker
    return <div style={{ width: 120, height: 32 }} />;
  }

  const isSet = audience !== 'all';

  return (
    <div className="audience-select" ref={ref}>
      <button
        className={`audience-trigger ${isSet ? 'set' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="dot" />
        <span className="label-text">
          {isSet ? AUDIENCE_SHORT[audience] : "I'm a…"}
        </span>
        <span className="caret" />
      </button>
      {open && (
        <div className="audience-menu" role="menu">
          <div className="audience-menu-head">
            <div className="label">Personalize your view</div>
            <div className="desc">
              Select your role and we&apos;ll surface the most relevant research, events, and peer
              context. Change it anytime.
            </div>
          </div>
          {ORDER.map((opt) => (
            <button
              key={opt}
              className={`audience-option ${audience === opt ? 'active' : ''}`}
              onClick={() => {
                setAudience(opt);
                setOpen(false);
              }}
              role="menuitem"
            >
              <span>{AUDIENCE_LABELS[opt]}</span>
              {audience === opt && <span className="check">●</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
