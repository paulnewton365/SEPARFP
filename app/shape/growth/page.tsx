import { ArenaSwitcher } from '@/components/ArenaSwitcher';

export default function ShapeGrowthPage() {
  return (
    <>
      <section className="arena-hero">
        <div className="arena-hero-inner">
          <div className="arena-number">Arena 02 · Growth</div>
          <h1>
            Let&apos;s shape{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--ink-2)' }}>demand.</em>
          </h1>
          <p className="stance">
            AI, data centers, transportation fleets, and heat pumps are remaking US electricity
            demand on a scale the sector hasn&apos;t seen since WWII. Planning for that growth,
            without breaking affordability, is the defining utility challenge of the decade.
          </p>
        </div>
      </section>

      <ArenaSwitcher />

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

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="two-col">
          <div>
            <div className="eyebrow">SEPA&apos;s position</div>
            <h2 style={{ fontSize: 40 }}>
              Load growth isn&apos;t a problem to absorb. It&apos;s a planning question to answer.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 24 }}>
              US peak demand is forecast to rise faster in the next five years than in the previous
              twenty combined. Most of that comes from four sources: data center hyperscalers,
              transportation electrification, industrial reshoring, and building electrification.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              Each of those sources has different characteristics, different geographies, and
              different rate implications. SEPA&apos;s job is to help utilities, regulators, and
              buyers plan for them as one coordinated growth story, not four competing ones.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)', paddingTop: 48 }}>
        <div className="section-head">
          <div className="eyebrow">Topics we&apos;re shaping</div>
          <h2>Four threads inside this arena.</h2>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="dot" />
            <h4>Large Loads</h4>
            <p>Data centers, industrial, and the tariff design that keeps them fair to everyone else.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Transportation</h4>
            <p>EV charging, fleet electrification, and managed charging at scale.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Electrification</h4>
            <p>Buildings, heat pumps, and the residential demand shape ahead.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Demand Management</h4>
            <p>Virtual power plants, DERs, and the flexibility that keeps the lights on.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="eyebrow">Latest from this arena</div>
          <h2>What we&apos;ve published on growth.</h2>
        </div>
        <div className="research-grid">
          <div className="research-card feature">
            <div className="research-label">Flagship · Large Load Playbook</div>
            <h3>Principles for rate design in a data center decade</h3>
            <p>
              A cross-jurisdictional framework for utilities and regulators managing 100+ MW
              customer requests. Draws on 147 tariff filings and six utility benchmarks.
            </p>
            <div className="meta">
              <span>42 pages</span>
              <span>Utility, Regulator</span>
              <span>Apr 2026</span>
            </div>
          </div>
          <div className="research-card">
            <div className="research-label">Research</div>
            <h3>Transportation electrification: Charging the heavy-duty decade</h3>
            <p>MHD fleet pilots across 12 utilities. Load profiles, costs, and customer acquisition.</p>
            <div className="meta">
              <span>Jan 2026</span>
            </div>
          </div>
          <div className="research-card">
            <div className="research-label">Snapshot</div>
            <h3>VPP & DER policy developments, Q1 2026</h3>
            <p>Quarterly map of VPP and DER policy across 50 states. Enrollment and compensation.</p>
            <div className="meta">
              <span>Mar 2026</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
