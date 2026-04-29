'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

export function NavSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-focus when opened
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Click outside to close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }
  }, [open]);

  // Esc to close
  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
    }
  }, [open]);

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      alert(`Search for "${query}"\n\n(Wireframe stub, would route to /search.)`);
      setQuery('');
      setOpen(false);
    }
  };

  return (
    <div className="nav-search" ref={containerRef}>
      {!open ? (
        <button
          className="nav-search-btn"
          onClick={() => setOpen(true)}
          aria-label="Open search"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
      ) : (
        <div className="nav-search-expanded">
          <svg
            className="nav-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            className="nav-search-input"
            type="text"
            placeholder="Search research, events…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            aria-label="Search SEPA"
          />
          <button
            className="nav-search-close"
            onClick={() => setOpen(false)}
            aria-label="Close search"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
