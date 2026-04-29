'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { VersionBadge } from '@/components/VersionBadge';
import { AntennaLogo } from '@/components/AntennaLogo';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      if (res.ok) {
        router.push(from);
        router.refresh();
      } else {
        setError(true);
        setSubmitting(false);
      }
    } catch {
      setError(true);
      setSubmitting(false);
    }
  };

  return (
    <form className="tlogin-form" onSubmit={handleSubmit}>
      <label htmlFor="access" className="tlogin-field-label">Password</label>
      <div className="tlogin-input-row">
        <input
          id="access"
          className={`tlogin-input ${error ? 'error' : ''}`}
          type="password"
          placeholder="Enter password"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(false); }}
          autoFocus
          autoComplete="off"
          disabled={submitting}
        />
        <button type="submit" className="tlogin-enter" disabled={submitting || !code}>
          {submitting ? '...' : 'Enter the prototype'}
        </button>
      </div>
      {error ? (
        <div className="tlogin-error">That password isn&apos;t recognized. Please check and try again.</div>
      ) : (
        <div className="tlogin-help">If you do not have a password, please reference our RFP response.</div>
      )}
    </form>
  );
}

export default function LoginPage() {
  useEffect(() => {
    document.body.classList.add('tlogin-mode');
    return () => { document.body.classList.remove('tlogin-mode'); };
  }, []);

  return (
    <div className="tlogin-page">
      <header className="tlogin-topbar">
        <div className="tlogin-topbar-inner">
          <div className="tlogin-brand">
            <AntennaLogo className="tlogin-brand-logo" />
          </div>
          <div className="tlogin-status">Confidential Preview</div>
        </div>
      </header>

      <main className="tlogin-main">
        <div className="tlogin-inner">
          <div className="tlogin-eyebrow">SEPA · Working prototype</div>
          <h1 className="tlogin-heading">
            From idea,<br />
            to architecture.
          </h1>
          <p className="tlogin-body">
            A clickable hypothesis for SEPA. This shows how the organizing idea, <em>let&apos;s shape
            energy&apos;s transition</em>, becomes a structure for your audiences. This represents
            a hypothesis for testing rather than a final recommendation.
          </p>

          {/* QUICK ORIENTATION - three lines on how to read the prototype */}
          <ul className="tlogin-quickread">
            <li>
              <span className="tlogin-quickread-num">01</span>
              <span>
                A fully interactable, very early prototype for SEPA &amp; Fortnightly.
              </span>
            </li>
            <li>
              <span className="tlogin-quickread-num">02</span>
              <span>
                <strong>Hover the blue annotation markers</strong> on any page to read our rationale.
              </span>
            </li>
            <li>
              <span className="tlogin-quickread-num">03</span>
              <span>
                Sign in below to access the live prototype. The password sits with the deck.
              </span>
            </li>
          </ul>

          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>

          {/* ORIENTATION GRID - three columns of context */}
          <div className="tlogin-orient">
            <div className="tlogin-orient-col">
              <div className="tlogin-orient-label">How to use this</div>
              <p>
                Start on the homepage. Click into Shape, Research, Membership, Fortnightly,
                Join, About. Open the article inside Fortnightly. Set your role using the
                audience selector in the top nav and watch the experience reorder.
              </p>
              <p>
                Most links are active, and this is optimized for desktop and mobile.
              </p>
            </div>

            <div className="tlogin-orient-col">
              <div className="tlogin-orient-label">
                <span className="tlogin-annot-marker" aria-hidden="true">1</span>
                The blue numbers
              </div>
              <p>
                Every page carries blue numbered markers. They&apos;re annotations.
                <strong> Hover any marker to read why a structural decision was made</strong>{' '}
               , what it&apos;s leading on, what it replaces, and what we&apos;d want
                to test with you.
              </p>
              <p>
                The annotations are the reasoning that travels with the work. Think of them
                as a designer talking you through a wall of sketches.
              </p>
            </div>

            <div className="tlogin-orient-col">
              <div className="tlogin-orient-label">What this is not</div>
              <p>
                <strong>Not a finalized design.</strong> Visual identity, photography,
                illustration, and motion all live in the design phase ahead.
              </p>
              <p>
                <strong>Not a messaging recommendation.</strong> Copy is indicative, written
                to test structure. Final language gets developed in collaboration with you.
              </p>
              <p>
                <strong>Not a conclusion.</strong> A working hypothesis, sharper for being
                challenged. Disagreement is the most useful thing you can give us.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="tlogin-footer">
        <div className="tlogin-footer-inner">
          <a href="https://antennagroup.com" target="_blank" rel="noopener noreferrer">
            antennagroup.com
          </a>
          <VersionBadge variant="light" />
          <div>© 2026 Antenna Group</div>
        </div>
      </footer>
    </div>
  );
}
