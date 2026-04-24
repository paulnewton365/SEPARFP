'use client';

import { useState, KeyboardEvent } from 'react';

export function NavSearch() {
  const [query, setQuery] = useState('');

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      // Prototype: in the deployed site this would route to /search?q=...
      // For the wireframe, show a simple alert so reviewers see the behaviour.
      alert(`Search for "${query}"\n\n(Wireframe stub — in the live site this would route to /search.)`);
      setQuery('');
    }
  };

  return (
    <div className="nav-search">
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
        className="nav-search-input"
        type="text"
        placeholder="Search research, events…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKey}
        aria-label="Search SEPA"
      />
    </div>
  );
}
