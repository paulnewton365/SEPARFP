'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
    <form className="antenna-login-form" onSubmit={handleSubmit}>
      <label htmlFor="access" className="antenna-login-field-label">
        Access code
      </label>
      <div className="antenna-login-input-row">
        <input
          id="access"
          className={`antenna-login-input ${error ? 'error' : ''}`}
          type="password"
          placeholder="Enter access code"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(false); }}
          autoFocus
          autoComplete="off"
          disabled={submitting}
        />
        <button type="submit" className="antenna-login-enter" disabled={submitting || !code}>
          {submitting ? '...' : 'Enter'}
        </button>
      </div>
      {error && (
        <div className="antenna-login-error">
          That code isn&apos;t recognized. Please check and try again.
        </div>
      )}
    </form>
  );
}

export default function LoginPage() {
  // Ensure page fills viewport without Nav overhead
  useEffect(() => {
    document.body.classList.add('antenna-login-mode');
    return () => {
      document.body.classList.remove('antenna-login-mode');
    };
  }, []);

  return (
    <div className="antenna-login-page">
      <div className="antenna-login-topbar">
        <div className="antenna-login-topbar-inner">
          <div className="antenna-login-brandmark">
            <div className="antenna-mark" aria-hidden="true">
              <span className="antenna-mark-sq" />
              <span className="antenna-mark-sq yellow" />
            </div>
            <span className="antenna-wordmark">
              .<strong>antenna</strong><span className="antenna-sub">group</span>
            </span>
          </div>
          <div className="antenna-login-status">Confidential Preview</div>
        </div>
      </div>

      <main className="antenna-login-main">
        <div className="antenna-login-inner">
          <div className="antenna-login-eyebrow">SEPA · Proposal prototype</div>
          <h1 className="antenna-login-heading">
            Let&apos;s shape<br />
            energy&apos;s transition.
          </h1>
          <p className="antenna-login-body">
            This is a working prototype of a proposed new experience for the Smart Electric Power
            Alliance, prepared by Antenna Group. Enter your access code to continue.
          </p>
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </main>

      <footer className="antenna-login-footer">
        <div className="antenna-login-footer-inner">
          <div>antennagroup.com</div>
          <VersionBadge variant="dark" />
          <div>© 2026 Antenna Group</div>
        </div>
      </footer>
    </div>
  );
}
