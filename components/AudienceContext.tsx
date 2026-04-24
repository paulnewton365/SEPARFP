'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Audience = 'all' | 'utility' | 'regulator' | 'provider' | 'buyer';

export const AUDIENCE_LABELS: Record<Audience, string> = {
  all: 'Everyone',
  utility: 'Utility leader',
  regulator: 'Regulator / policymaker',
  provider: 'Solution provider',
  buyer: 'Large energy buyer',
};

export const AUDIENCE_SHORT: Record<Audience, string> = {
  all: 'All',
  utility: 'Utility',
  regulator: 'Regulator',
  provider: 'Provider',
  buyer: 'Buyer',
};

interface AudienceContextValue {
  audience: Audience;
  setAudience: (a: Audience) => void;
  hydrated: boolean;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

const STORAGE_KEY = 'sepa-audience';

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>('all');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Audience | null;
      if (stored && stored in AUDIENCE_LABELS) {
        setAudienceState(stored);
      }
    } catch {
      // localStorage disabled, stay with default
    }
    setHydrated(true);
  }, []);

  const setAudience = (a: Audience) => {
    setAudienceState(a);
    try {
      localStorage.setItem(STORAGE_KEY, a);
    } catch {
      // silently fail
    }
  };

  return (
    <AudienceContext.Provider value={{ audience, setAudience, hydrated }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceContext);
  if (!ctx) {
    throw new Error('useAudience must be used within AudienceProvider');
  }
  return ctx;
}
