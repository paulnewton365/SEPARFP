'use client';

import Link from 'next/link';
import { Annotation } from '@/components/Annotation';
import { useAudience } from '@/components/AudienceContext';

export default function HomePage() {
  const { audience } = useAudience();

  // Order the path cards by which is selected (selected first)
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
      {/* HERO with elevated G/G/G */}
      <section className="hero-arenas">
        <div className="hero-arenas-inner">
          <h1>
            Let&apos;s shape<br />
            energy&apos;s <em>transition.</em>
            <Annotation
              number={1}
              note="The organizing idea, paired with the three arenas. Grid, Growth, Globe now live on the first screen in indexable text, not buried in a video."
            />
          </h1>
          <p className="hero-sub">
            Energy&apos;s future will be shaped by utilities, regulators, providers, and buyers
            working together, informed by credible evidence, and aligned on what actually works.
          </p>
          <div className="hero-actions" style={{ marginBottom: 60 }}>
            <a className="btn">Explore the work</a>
            <Link href="/research" className="link-arrow">
              See this quarter&apos;s research →
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
            <Link href="/shape/grid" className="hero-arena-cell">
              <div className="num">Arena 02</div>
              <div className="name">Growth.</div>
              <p className="desc">
                AI, data centers, fleets, and heat pumps are remaking demand. Planning for that
                growth is the defining utility challenge of the decade.
              </p>
              <div className="tags">Transport · Large Loads · Electrification · Demand</div>
            </Link>
            <Link href="/shape/grid" className="hero-arena-cell">
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

      {/* PROOF STRIP */}
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

      {/* CURRENT POV / CAMPAIGN */}
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

      {/* RESEARCH SPOTLIGHT */}
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

      {/* VOICES */}
      <section className="voices">
        <div className="section-head">
          <div className="eyebrow">Voices from the sector</div>
          <h2>
            The people doing the shaping.
            <Annotation
              number={3}
              note="Elevating leaders, members, and staff on the homepage directly addresses the assessment's finding that SEPA feels institutional rather than human."
            />
          </h2>
        </div>
        <div className="voices-grid">
          <div className="voice">
            <div className="voice-quote">
              &ldquo;SEPA is the only room where I can share what we&apos;re piloting before
              I&apos;ve had to defend it in a rate case. That changes what we&apos;re willing to
              try.&rdquo;
            </div>
            <div className="voice-person">
              <div className="voice-avatar" />
              <div>
                <div className="voice-name">[Utility VP, IOU]</div>
                <div className="voice-role">Member since 2019</div>
              </div>
            </div>
          </div>
          <div className="voice">
            <div className="voice-quote">
              &ldquo;The research isn&apos;t advocacy. It&apos;s the evidence I take into the
              commission hearing. That&apos;s why we cite it.&rdquo;
            </div>
            <div className="voice-person">
              <div className="voice-avatar" />
              <div>
                <div className="voice-name">[State PUC Commissioner]</div>
                <div className="voice-role">Policy advisor</div>
              </div>
            </div>
          </div>
          <div className="voice">
            <div className="voice-quote">
              &ldquo;We came in thinking SEPA was for utilities. We stayed because it was the first
              place buyers, utilities, and regulators could have one conversation.&rdquo;
            </div>
            <div className="voice-person">
              <div className="voice-avatar" />
              <div>
                <div className="voice-name">[Head of Clean Energy, Fortune 500]</div>
                <div className="voice-role">Large buyer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVENING NOW */}
      <section className="convene-strip">
        <div className="section-head">
          <div className="eyebrow">Convening now</div>
          <h2>What&apos;s happening this month.</h2>
        </div>
        <div className="events-list">
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
            <div className="event-date">Jun 3, 2026</div>
            <div className="event-type">Academy</div>
            <div className="event-title">DER Integration Certification, Cohort 12</div>
            <div className="event-topic">8-week program · Utility staff, regulators</div>
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
      </section>

      {/* FORTNIGHTLY */}
      <section className="fortnightly">
        <div className="fortnightly-inner">
          <div className="fortnightly-cover">Vol. 164 · Issue 4</div>
          <div>
            <div className="eyebrow">
              Fortnightly
              <Annotation
                number={4}
                note="Placement tests the sub-brand hypothesis: PUF keeps its masthead, but its proximity to SEPA's work is clear and intentional."
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

      {/* AUDIENCE PATHS - audience-aware ordering */}
      <section className="paths">
        <div className="section-head">
          <div className="eyebrow">Find your path</div>
          <h2>
            {audience === 'all' ? 'What brought you here?' : 'Curated for you.'}
            <Annotation
              number={5}
              note="Four curated entry points. When an audience is selected from the nav, their path leads and gets a highlighted treatment. Same content, different framings per role."
            />
          </h2>
          <p className="section-sub">
            {audience === 'all'
              ? "We've curated the work four ways, so you don't have to browse 482 reports to find yours."
              : "Your selected role is featured first. Change it in the nav anytime."}
          </p>
        </div>
        <div className="paths-grid">
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
      </section>
    </>
  );
}
