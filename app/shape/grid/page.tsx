'use client';

import { Annotation } from '@/components/Annotation';
import { ArenaSwitcher } from '@/components/ArenaSwitcher';
import { useAudience, AUDIENCE_LABELS } from '@/components/AudienceContext';

interface Topic {
  name: string;
  desc: string;
  audiences: string[]; // primary audiences for this topic
}

const TOPICS: Topic[] = [
  {
    name: 'Resilience',
    desc: 'Storm hardening, distributed backup, and the economics of keeping service on.',
    audiences: ['utility', 'regulator'],
  },
  {
    name: 'Storage',
    desc: 'Battery deployment, siting frameworks, and the role of long-duration.',
    audiences: ['utility', 'provider'],
  },
  {
    name: 'Emerging Technology',
    desc: 'Advanced inverters, grid-enhancing tech, and what\'s ready for deployment.',
    audiences: ['utility', 'provider'],
  },
  {
    name: 'Policy & Regulation',
    desc: 'Rate design, cost allocation, and the regulatory frameworks shaping investment.',
    audiences: ['regulator', 'utility'],
  },
];

export default function ShapeGridPage() {
  const { audience } = useAudience();

  // Reorder topics so the user's primary topic surfaces first
  const orderedTopics = audience === 'all'
    ? TOPICS
    : [
        ...TOPICS.filter((t) => t.audiences[0] === audience),
        ...TOPICS.filter((t) => t.audiences[0] !== audience && t.audiences.includes(audience)),
        ...TOPICS.filter((t) => !t.audiences.includes(audience)),
      ];

  return (
    <>
      {/* ARENA HERO */}
      <section className="arena-hero">
        <div className="arena-hero-inner">
          <div className="arena-number">Arena 01 · Grid</div>
          <h1>
            Let&apos;s shape{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--ink-2)' }}>the grid.</em>
          </h1>
          <p className="stance">
            Keeping the lights on while rebuilding the system that delivers them. The grid is
            both the constraint and the opportunity. Every decarbonization pathway, every large
            load interconnection, every new rate design lives or dies here.
          </p>
        </div>
      </section>

      <ArenaSwitcher showAnnotation />

      {/* SUB NAV */}
      <div className="arena-subnav">
        <div className="arena-subnav-inner">
          <a className="active">Overview</a>
          <a>Our position</a>
          <a>Research</a>
          <a>Working groups</a>
          <a>Events</a>
          <a>Tools &amp; data</a>
        </div>
      </div>

      {/* POSITION */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="two-col">
          <div>
            <div className="eyebrow">SEPA&apos;s position</div>
            <h2 style={{ fontSize: 40 }}>
              The grid is the bottleneck. That makes it the leverage point.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 24 }}>
              Transmission queues are backed up with decades of projects. Distribution planning has
              not caught up with electrification. Resilience investments compete with affordability
              in every rate case. These are not separate problems. They are one system under pressure.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              SEPA&apos;s role is not to pick a winning technology or lobby for a policy.
              It&apos;s to give the sector the evidence, the forums, and the benchmarks to make
              the next set of grid decisions on purpose.
            </p>
          </div>
        </div>
      </section>

      {/* TOPICS - reordered by audience */}
      <section className="section" style={{ background: 'var(--bg)', paddingTop: 48 }}>
        <div className="section-head">
          <div className="eyebrow">Topics we&apos;re shaping</div>
          <h2>
            Four threads inside this arena.
            {audience !== 'all' && (
              <Annotation
                number={19}
                note={`Topics reordered to put ${AUDIENCE_LABELS[audience]}-relevant threads first. Audience selector now actively shapes how this page reads.`}
              />
            )}
          </h2>
          {audience !== 'all' && (
            <p className="section-sub">
              Reordered for {AUDIENCE_LABELS[audience]}. Topics most relevant to your role lead.
            </p>
          )}
        </div>
        <div className="topics-grid">
          {orderedTopics.map((t, i) => {
            const isPrimary = audience !== 'all' && t.audiences[0] === audience;
            return (
              <div
                key={t.name}
                className="topic-card"
                style={isPrimary ? {
                  background: 'var(--ink-1)',
                  borderColor: 'var(--ink-1)',
                  color: 'var(--paper)',
                } : undefined}
              >
                <div
                  className="dot"
                  style={isPrimary ? { background: 'var(--paper)' } : undefined}
                />
                <h4>{t.name}</h4>
                <p style={isPrimary ? { color: 'rgba(255,255,255,0.7)' } : undefined}>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* RESEARCH FROM ARENA */}
      <section className="section">
        <div className="section-head">
          <div className="eyebrow">Latest from this arena</div>
          <h2>What we&apos;ve published on the grid.</h2>
        </div>
        <div className="research-grid">
          <div className="research-card feature">
            <div className="research-label">Quarterly · Resilient by Design</div>
            <h3>After the storm: Five utilities, five playbooks for post-event recovery</h3>
            <p>
              A cross-utility synthesis of what worked and what didn&apos;t in the 2025 storm
              season. Includes cost data, restoration timelines, and communications frameworks.
            </p>
            <div className="meta">
              <span>58 pages</span>
              <span>Utility, Regulator</span>
              <span>Mar 2026</span>
            </div>
          </div>
          <div className="research-card">
            <div className="research-label">Brief</div>
            <h3>Grid-enhancing technologies: Deployment status across 30 utilities</h3>
            <p>
              Where dynamic line rating, topology optimization, and power flow control are
              actually running.
            </p>
            <div className="meta">
              <span>Feb 2026</span>
            </div>
          </div>
          <div className="research-card">
            <div className="research-label">Blog</div>
            <h3>Why distribution planning needs to catch up with the load forecast</h3>
            <p>A perspective from SEPA&apos;s Grid Modernization team on the decade ahead.</p>
            <div className="meta">
              <span>Jan 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="pov">
        <div className="pov-inner">
          <div>
            <div className="eyebrow">Ways to participate</div>
            <h2>Three ways to shape this arena.</h2>
            <div style={{ marginTop: 32 }}>
              <div className="bullet">
                <div className="bullet-dot" />
                <div>
                  <h4>Join a working group</h4>
                  <p>
                    Four active groups meet monthly. Rate design. Resilience planning. Storage
                    siting. Grid modernization.
                  </p>
                </div>
              </div>
              <div className="bullet">
                <div className="bullet-dot" />
                <div>
                  <h4>Contribute to research</h4>
                  <p>
                    Every flagship report includes member utilities as data contributors and
                    co-authors where appropriate.
                  </p>
                </div>
              </div>
              <div className="bullet">
                <div className="bullet-dot" />
                <div>
                  <h4>Attend the convening</h4>
                  <p>
                    Grid Resilience Summit, May 22 in Raleigh. Open to members and invited
                    non-members.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pov-img" style={{ aspectRatio: '3 / 4' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="6" width="18" height="12" strokeWidth="1" />
              <path d="M3 10h18M8 6v12M16 6v12" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
