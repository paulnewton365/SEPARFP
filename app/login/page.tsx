'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { VersionBadge } from '@/components/VersionBadge';

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
      <label htmlFor="access" className="tlogin-field-label">Access code</label>
      <div className="tlogin-input-row">
        <input
          id="access"
          className={`tlogin-input ${error ? 'error' : ''}`}
          type="password"
          placeholder="Enter access code"
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
      {error && (
        <div className="tlogin-error">That code isn&apos;t recognized. Please check and try again.</div>
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
            <Image
              src="/antenna-logo.svg"
              alt="Antenna Group"
              width={140}
              height={36}
              priority
            />
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
            A clickable hypothesis of how the organizing idea — <em>let&apos;s shape
            energy&apos;s transition</em> — becomes a structure people can walk through.
            Built so you can question it.
          </p>

          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>

          {/* ORIENTATION GRID - three columns of context */}
          <div className="tlogin-orient">
            <div className="tlogin-orient-col">
              <div className="tlogin-orient-label">How to walk it</div>
              <p>
                Start on the homepage. Click into Shape, Research, Membership, Fortnightly,
                Join, About. Open the article inside Fortnightly. Set your role using the
                audience selector in the top nav and watch the experience reorder.
              </p>
              <p>
                Every link works. Every form submits. Browse it on your phone if you want.
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
                — what it&apos;s leading on, what it replaces, and what we&apos;d want
                to test with you.
              </p>
              <p>
                The annotations are the reasoning that travels with the work. Think of them
                as a designer talking you through a wall of pinups.
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
