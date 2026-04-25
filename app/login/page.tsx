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
          {submitting ? '...' : 'Enter'}
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
          <div className="tlogin-eyebrow">SEPA · Proposal prototype</div>
          <h1 className="tlogin-heading">
            Let&apos;s shape<br />
            energy&apos;s transition.
          </h1>
          <p className="tlogin-body">
            This is a working prototype of a proposed new experience for the Smart Electric Power
            Alliance, prepared by Antenna Group. Enter your access code to continue.
          </p>
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
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
