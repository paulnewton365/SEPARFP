'use client';

import Link from 'next/link';
import { Annotation } from '@/components/Annotation';
import { useAudience } from '@/components/AudienceContext';

export default function HomePage() {
  const { audience } = useAudience();

  const paths = [
    {
      key: 'utility' as const,
      href: '/for/utility',
      title: 'Utility leaders',
      body: 'Peer benchmarks, de-risked investment research, credible cover for bold moves.',
    },
    {
      key: 'regulator' as const,
      href: '#',
      title: 'Regulators & policymakers',
      body: 'Unbiased evidence, state-by-state comparisons, neutrality as a principle.',
    },
    {
      key: 'provider' as const,
      href: '#',
      title: 'Solution providers',
      body: 'Direct access to utility decision-makers, early market signals, partnership paths.',
    },
    {
      key: 'buyer' as const,
      href: '#',
      title: 'Large energy buyers',
      body: 'Utility roadmaps, collective voice, translation between procurement and grid reality.',
    },
  ];
  const orderedPaths = audience === 'all'
    ? paths
    : [...paths.filter((p) => p.key === audience), ...paths.filter((p) => p.key !== audience)];

  return (
    <>
      {/* SECTION 1: HERO with elevated G/G/G */}
      <section className="hero-arenas">
        <div className="hero-arenas-inner">
          <h1>
            Let&apos;s shape<br />
            energy&apos;s <em>transition.</em>
            <Annotation
              number={1}
              note="The organizing idea, paired with the three arenas. Grid, Growth, Globe live on the first screen in indexable text, not buried in a video."
            />
          </h1>
          <p className="hero-sub">
            Energy&apos;s future will be shaped by utilities, regulators, providers, and buyers
            working together, informed by credible evidence, and aligned on what actually works.
          </p>
          <div className="hero-actions" style={{ marginBottom: 60 }}>
            <a className="btn">Read this quarter&apos;s position paper</a>
            <Link href="/research" className="link-arrow">
              Browse all research →
            </Link>
          </div>

          <div className="hero-arena-strip">
            <Link href="/shape/grid" className="hero-arena-cell">
              <div className="num">Arena 01</div>
              <div className="name">Grid.</div>
              <p className="desc">
                The physical and regulatory foundation of the transition. Keeping the lights on
                while rebuilding the system that delivers them.
              </p>
              <div className="tags">Resilience · Storage · Emerging Tech · Policy</div>
            </Link>
            <Link href="/shape/growth" className="hero-arena-cell">
              <div className="num">Arena 02</div>
              <div className="name">Growth.</div>
              <p className="desc">
                AI, data centers, fleets, and heat pumps are remaking demand. Planning for that
                growth is the defining utility challenge of the decade.
              </p>
              <div className="tags">Transport · Large Loads · Electrification · Demand</div>
            </Link>
            <Link href="/shape/globe" className="hero-arena-cell">
              <div className="num">Arena 03</div>
              <div className="name">Globe.</div>
              <p className="desc">
                Innovation crosses borders. So do the lessons. We bring global thinking back to
                the US sector and make the case for equitable transition outcomes.
              </p>
              <div className="tags">International · Cross-Border · Equity · Inclusion</div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROOF STRIP */}
      <section className="proof">
        <div className="proof-inner">
          <div className="proof-item">
            <div className="num">74%</div>
            <div className="label">of US megawatt-hours sold come from SEPA members</div>
          </div>
          <div className="proof-item">
            <div className="num">80%</div>
            <div className="label">of US utilities with carbon-free goals are SEPA members</div>
          </div>
          <div className="proof-item">
            <div className="num">1,000+</div>
            <div className="label">utilities, regulators, providers, and buyers in the room</div>
          </div>
          <div className="proof-item">
            <div className="num">Zero</div>
            <div className="label">dollars spent on lobbying. Neutrality as a principle.</div>
          </div>
        </div>
      </section>

      {/* MEMBERS LEAD - small pull quote from real member, anchored to membership page */}
      <section className="section members-lead">
        <div className="section-inner">
          <div className="members-lead-grid">
            <div>
              <div className="eyebrow">Members lead the work</div>
              <h2>
                Our members accelerate transformation.
                <Annotation
                  number={36}
                  note="The home page anchors membership as the substrate of everything else SEPA does. The proof section above shows what membership covers in the sector; this callout shows what membership produces in member voice. Maps to RFP language around members feeling more connected, not less."
                />
              </h2>
            </div>
            <div className="members-lead-quote">
              <div className="quote-mark" aria-hidden="true">&ldquo;</div>
              <p>
                SEPA basically gets you to the information you need that much faster.
                It gives you that forum to discuss openly and freely with other program
                managers and utilities what they&apos;ve learned.
              </p>
              <div className="members-lead-attr">
                <strong>Jake Wade</strong>, Renewable Energy Program Manager · Seattle City Light
              </div>
              <Link href="/convene" className="link-arrow">See how membership works →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CURRENT POV / CAMPAIGN */}
      <section className="pov">
        <div className="pov-inner">
          <div className="pov-img">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 20l5-7 4 5 3-4 6 6" />
              <path d="M3 20h18" strokeWidth="0.8" />
            </svg>
          </div>
          <div>
            <div className="eyebrow">This quarter&apos;s campaign</div>
            <h2>
              Let&apos;s shape <em>rate design.</em>
            </h2>
            <p>
              Large loads are rewriting utility economics faster than tariffs can keep up. Our
              DELTa database tracks 147 emerging large-load tariffs across 42 states. Our working
              group has drafted the first cross-jurisdictional principles for cost allocation.
              The question is no longer whether data center demand reshapes rates. It&apos;s
              whether the sector shapes rate design on purpose, or by accident.
            </p>
            <div className="hero-actions">
              <a className="btn">Read the position paper</a>
              <a className="link-arrow">Join the working group →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESEARCH SPOTLIGHT */}
      <section className="section">
        <div className="section-head">
          <div className="eyebrow">This month&apos;s evidence</div>
          <h2>Research that moves decisions.</h2>
          <p className="section-sub">
            Every report leads with findings, audience, and a decision it helps you make.
          </p>
        </div>
        <div className="research-grid">
          <Link href="/research" className="research-card feature">
            <div className="research-label">Featured / Quarterly Flagship</div>
            <h3>The Large Load Playbook: Principles for rate design in a data center decade</h3>
            <p>
              A cross-jurisdictional framework for utilities and regulators managing 100+ MW
              customer requests. Draws on 147 tariff filings, 12 working group sessions, and
              benchmarks from six leading utilities.
            </p>
            <div className="meta">
              <span>42 pages</span>
              <span>Utility, Regulator</span>
              <span>Apr 2026</span>
            </div>
          </Link>
          <div className="research-card">
            <div className="research-label">DELTa Database</div>
            <h3>147 emerging large-load tariffs, fully searchable</h3>
            <p>The definitive map of how utilities are pricing the next decade of demand. Updated weekly.</p>
            <div className="meta">
              <span>Live data</span>
              <span>Members</span>
            </div>
          </div>
          <div className="research-card">
            <div className="research-label">Carbon-Reduction Tracker</div>
            <h3>How 80% of the sector is actually decarbonizing</h3>
            <p>Utility-level carbon goals, progress to date, and the gap between commitment and delivery.</p>
            <div className="meta">
              <span>Interactive</span>
              <span>Public</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHERE TO START - merged Convening + Paths into one decisive section */}
      <section className="paths" style={{ background: 'var(--bg)' }}>
        <div className="section-head">
          <div className="eyebrow">We are here for you</div>
          <h2>
            {audience === 'all' ? 'Whoever you are.' : 'Curated for you.'}
            <Annotation
              number={5}
              note="The audience paths section answers a reader's quiet first question, is this place for me, and if so, where do I start. Three concrete entry points by role address the four primary audiences the RFP names: utility leaders, regulators, providers, and large energy users."
            />
          </h2>
          <p className="section-sub">
            {audience === 'all'
              ? "Pick the entry point closest to how you'll actually use SEPA."
              : "Your selected role is featured first. Three concrete starts. Change your role in the nav anytime."}
          </p>
        </div>

        {/* Audience paths */}
        <div className="paths-grid" style={{ marginBottom: 16 }}>
          {orderedPaths.map((p) => {
            const isSelected = audience === p.key;
            return (
              <Link
                key={p.key}
                href={p.href}
                className="path-card"
                style={isSelected ? {
                  background: 'var(--ink-1)',
                  borderColor: 'var(--ink-1)',
                  color: 'var(--paper)',
                } : undefined}
              >
                <div className="path-label" style={isSelected ? { color: 'rgba(255,255,255,0.5)' } : undefined}>
                  {isSelected ? 'Your view' : 'For'}
                </div>
                <h4>{p.title}</h4>
                <p style={isSelected ? { color: 'rgba(255,255,255,0.7)' } : undefined}>{p.body}</p>
                <div className="arrow" style={isSelected ? { color: 'var(--paper)' } : undefined}>→</div>
              </Link>
            );
          })}
        </div>

        {/* Inline events list - kept for the "convening now" signal but tighter */}
        <div className="events-list" style={{ marginTop: 40 }}>
          <div className="event-row">
            <div className="event-date">May 14, 2026</div>
            <div className="event-type">Working group</div>
            <div className="event-title">Large Load Tariff Principles, Session 4</div>
            <div className="event-topic">Cost allocation frameworks · Members only</div>
            <div className="event-arrow">→</div>
          </div>
          <div className="event-row">
            <div className="event-date">May 22, 2026</div>
            <div className="event-type">Convening</div>
            <div className="event-title">Grid Resilience Summit · Raleigh, NC</div>
            <div className="event-topic">Post-storm recovery, investment planning · Open</div>
            <div className="event-arrow">→</div>
          </div>
          <div className="event-row">
            <div className="event-date">Jun 18, 2026</div>
            <div className="event-type">Webinar</div>
            <div className="event-title">What the data centers want, what the grid can deliver</div>
            <div className="event-topic">Q2 briefing · Open to all</div>
            <div className="event-arrow">→</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a className="link-arrow">See all upcoming convenings →</a>
        </div>
      </section>

      {/* SECTION 6: FORTNIGHTLY */}
      <section className="fortnightly">
        <div className="fortnightly-inner">
          <Link href="/fortnightly" className="fortnightly-cover" style={{ cursor: 'pointer', textDecoration: 'none' }}>Vol. 164 · Issue 4</Link>
          <div>
            <div className="eyebrow">
              Fortnightly
              <Annotation
                number={4}
                note="PUF presented as a publication within the SEPA ecosystem. The brand-architecture decision, sub-brand, endorsed brand, or other, is one of the strategic outcomes of the work ahead. Maps to RFP language around SEPA and PUF as distinct but mutually reinforcing brands."
              />
            </div>
            <h2>A century of utility thinking, now connected to the sector&apos;s working files.</h2>
            <p>
              Public Utilities Fortnightly has shaped how the industry debates itself since 1928.
              As part of SEPA, its editorial independence stays intact, and its reach gets sharper.
            </p>
            <div className="hero-actions">
              <Link href="/fortnightly" className="btn">Read the current issue</Link>
              <a className="link-arrow" style={{ color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.9)' }}>
                Subscribe to the brief →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
