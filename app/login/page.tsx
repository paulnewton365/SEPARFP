'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  // Simple access code gate. In production, wire to real auth.
  const ACCESS_CODE = 'sepa2026';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toLowerCase() === ACCESS_CODE) {
      setError(false);
      router.push('/');
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Link href="/" className="login-brand">
          <div className="logo-mark" />
          <div className="login-brand-text">
            <strong>SEPA</strong>
            <span>Smart Electric Power Alliance</span>
          </div>
        </Link>

        <div className="login-label">Confidential Preview</div>
        <h1 className="login-heading">
          Working prototype.
        </h1>
        <p className="login-body">
          This is a working prototype of a proposed new SEPA experience, prepared by Antenna Group.
          Enter your access code to continue.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className={`login-input ${error ? 'error' : ''}`}
            type="text"
            placeholder="Access code"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(false); }}
            autoFocus
            autoComplete="off"
          />
          {error && <div className="login-error">That code isn&apos;t recognized. Try again.</div>}
          <button type="submit" className="login-submit">
            Enter the preview
          </button>
        </form>

        <div className="login-meta">
          <a href="mailto:paul.newton@antennagroup.com">Need access?</a>
          <span>antennagroup.com</span>
        </div>
      </div>
    </div>
  );
}
