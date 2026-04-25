'use client';

import { useState, useEffect } from 'react';
import { Annotation } from '@/components/Annotation';
import { useAudience, AUDIENCE_LABELS, type Audience } from '@/components/AudienceContext';

type AudienceTag = 'utility' | 'regulator' | 'provider' | 'buyer';
type Arena = 'grid' | 'growth' | 'globe';

interface Report {
  id: string;
  date: string;
  title: string;
  abstract: string;
  audiences: AudienceTag[];
  arena: Arena;
  type: string;
}

const REPORTS: Report[] = [
  {
    id: '1',
    date: 'Apr 2026',
    title: 'The Large Load Playbook: Principles for rate design in a data center decade',
    abstract: 'A cross-jurisdictional framework for utilities and regulators managing 100+ MW customer requests. Draws on 147 tariff filings across 42 states and benchmarks from six leading utilities.',
    audiences: ['utility', 'regulator'],
    arena: 'growth',
    type: 'Flagship Report',
  },
  {
    id: '2',
    date: 'Mar 2026',
    title: 'After the storm: Five utilities, five playbooks for post-event recovery',
    abstract: 'Cross-utility synthesis of the 2025 storm season. Cost data, restoration timelines, and communications frameworks that worked.',
    audiences: ['utility'],
    arena: 'grid',
    type: 'Resilient by Design',
  },
  {
    id: '3',
    date: 'Mar 2026',
    title: 'VPP & DER Policy Developments: Q1 2026 update',
    abstract: 'Quarterly snapshot of virtual power plant and distributed energy resource policy across 50 states. Enrollment data, compensation models, and open dockets.',
    audiences: ['regulator', 'provider'],
    arena: 'growth',
    type: 'Quarterly',
  },
  {
    id: '4',
    date: 'Feb 2026',
    title: 'Grid-enhancing technologies: Deployment status across 30 utilities',
    abstract: 'Where dynamic line rating, topology optimization, and power flow control are actually running. Interconnection impact and cost data included.',
    audiences: ['utility', 'regulator'],
    arena: 'grid',
    type: 'Brief',
  },
  {
    id: '5',
    date: 'Feb 2026',
    title: 'What the buyers want: Fortune 500 energy procurement signals',
    abstract: 'Synthesized interviews with 28 corporate sustainability leads on what they need from utilities in the next three years. Procurement trends and unmet demand.',
    audiences: ['buyer', 'utility'],
    arena: 'growth',
    type: 'Research',
  },
  {
    id: '6',
    date: 'Jan 2026',
    title: 'Energy equity metrics: What the sector is actually measuring',
    abstract: "A scan of 45 utilities' equity reporting. Common frameworks, gaps, and a proposed minimum viable metric set.",
    audiences: ['utility', 'regulator'],
    arena: 'globe',
    type: 'Snapshot',
  },
  {
    id: '7',
    date: 'Jan 2026',
    title: 'Transportation electrification: Charging the heavy-duty decade',
    abstract: 'Medium- and heavy-duty fleet electrification pilots across 12 utilities. Load profiles, infrastructure costs, and customer acquisition data.',
    audiences: ['utility', 'provider'],
    arena: 'growth',
    type: 'Flagship Report',
  },
];

const audienceToTag: Record<Audience, AudienceTag | null> = {
  all: null,
  utility: 'utility',
  regulator: 'regulator',
  provider: 'provider',
  buyer: 'buyer',
};

const audienceShort: Record<AudienceTag, string> = {
  utility: 'Utility',
  regulator: 'Regulator',
  provider: 'Provider',
  buyer: 'Buyer',
};

export default function ResearchPage() {
  const { audience, setAudience } = useAudience();
  const [arenaFilter, setArenaFilter] = useState<Arena | 'all'>('all');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Auto-sync audience filter from the global selector
  const audienceFilter: AudienceTag | 'all' = audienceToTag[audience] || 'all';

  const filtered = REPORTS.filter((r) => {
    if (arenaFilter !== 'all' && r.arena !== arenaFilter) return false;
    if (audienceFilter !== 'all' && !r.audiences.includes(audienceFilter)) return false;
    return true;
  });

  // Show "audience filter active" pill that the user can dismiss
  const audienceActive = audienceFilter !== 'all';

  return (
    <>
      {/* HERO */}
      <section className="research-hero">
        <div className="research-hero-inner">
          <div className="eyebrow">The evidence engine</div>
          <h1>
            Research that helps you decide, not just describe.
            <Annotation
              number={6}
              note="Research as a noun, not Knowledge Center. Every listing leads with abstract, audience, and decision relevance — so a reader can tell whether a report is for them before they click."
            />
          </h1>
          <p>
            Every report we publish starts with the question it answers. Every dataset leads with
            how it&apos;s used. Every abstract tells you whether it&apos;s for you before you click.
          </p>

          {/* Primary action above the fold - new visitors start with DELTa */}
          <div className="hero-actions" style={{ marginTop: 32 }}>
            <a className="btn">Open the DELTa database</a>
            <a className="link-arrow">New here? Start with our flagship report →</a>
          </div>
        </div>

        {/* TOOLS */}
        <div className="tools-row">
          <div className="tool-card featured">
            <div className="label">DELTa · Flagship database</div>
            <h3>Emerging large-load tariffs, mapped.</h3>
            <p>
              The definitive tracker of how utilities are pricing the next decade of demand. 147
              tariffs, 42 states, updated weekly. Cited by FERC, the DOE, and 60+ utilities.
            </p>
            <div className="data-mini">
              <div>
                <div className="num">147</div>
                <div className="desc">Tariffs tracked</div>
              </div>
              <div>
                <div className="num">42</div>
                <div className="desc">States covered</div>
              </div>
              <div>
                <div className="num">Weekly</div>
                <div className="desc">Update cadence</div>
              </div>
            </div>
          </div>
          <div className="tool-card">
            <div className="label">Carbon-Reduction Tracker · Public tool</div>
            <h3>Where the utility sector actually is on decarbonization.</h3>
            <p>
              Utility-level carbon goals, emissions data, and the gap between commitment and
              delivery. Updated quarterly. Free to the public.
            </p>
            <div className="data-mini">
              <div>
                <div className="num">312</div>
                <div className="desc">Utilities tracked</div>
              </div>
              <div>
                <div className="num">81%</div>
                <div className="desc">Of US generation</div>
              </div>
              <div>
                <div className="num">Quarterly</div>
                <div className="desc">Refresh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERED LIST */}
      <section className="section" style={{ background: 'var(--paper)', paddingTop: 48 }}>
        {/* Active audience filter banner - shows when selector is set */}
        {audienceActive && (
          <div
            className="container-site"
            style={{
              background: 'var(--ink-1)',
              color: 'var(--paper)',
              padding: '14px 20px',
              borderRadius: 2,
              marginBottom: 24,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 13,
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <div>
              <strong>Filtered for {AUDIENCE_LABELS[audience]}.</strong>
              <span style={{ color: 'rgba(255,255,255,0.7)', marginLeft: 8 }}>
                Showing {filtered.length} of {REPORTS.length} reports relevant to your role.
              </span>
            </div>
            <button
              onClick={() => setAudience('all')}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'var(--paper)',
                padding: '6px 12px',
                fontSize: 12,
                fontFamily: 'inherit',
                cursor: 'pointer',
                borderRadius: 2,
              }}
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Progressive-disclosure filter bar - arena filters always visible, others behind a toggle */}
        <div className="filter-bar">
          <span className="filter-label">Arena</span>
          <button
            className={`filter-chip ${arenaFilter === 'all' ? 'active' : ''}`}
            onClick={() => setArenaFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-chip ${arenaFilter === 'grid' ? 'active' : ''}`}
            onClick={() => setArenaFilter('grid')}
          >
            Grid
          </button>
          <button
            className={`filter-chip ${arenaFilter === 'growth' ? 'active' : ''}`}
            onClick={() => setArenaFilter('growth')}
          >
            Growth
          </button>
          <button
            className={`filter-chip ${arenaFilter === 'globe' ? 'active' : ''}`}
            onClick={() => setArenaFilter('globe')}
          >
            Globe
          </button>

          <button
            onClick={() => setShowAdvanced((v) => !v)}
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'inherit',
              fontSize: 12,
              color: 'var(--ink-3)',
              cursor: 'pointer',
              marginLeft: 'auto',
              padding: '6px 0',
            }}
          >
            {showAdvanced ? '− Less' : '+ More filters'}
          </button>
        </div>

        {showAdvanced && (
          <div className="filter-bar" style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}>
            <span className="filter-label">Type</span>
            <span className="filter-chip">Report</span>
            <span className="filter-chip">Brief</span>
            <span className="filter-chip">Data</span>
            <span className="filter-chip">Blog</span>
          </div>
        )}

        <div className="report-list">
          {filtered.length === 0 ? (
            <div style={{ padding: 60, textAlign: 'center', color: 'var(--ink-3)' }}>
              No reports match these filters yet.
              <button
                onClick={() => { setArenaFilter('all'); setAudience('all'); }}
                style={{
                  display: 'block', margin: '16px auto 0', background: 'transparent',
                  border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: 13,
                }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filtered.map((r) => (
              <div className="report-row" key={r.id}>
                <div className="report-date">{r.date}</div>
                <div className="report-main">
                  <h4>{r.title}</h4>
                  <div className="abstract">{r.abstract}</div>
                </div>
                <div className="report-audience">
                  {r.audiences.map((a) => (
                    <span key={a}>{audienceShort[a]}</span>
                  ))}
                </div>
                <div className="report-type">{r.type}</div>
                <div className="report-arrow">→</div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
