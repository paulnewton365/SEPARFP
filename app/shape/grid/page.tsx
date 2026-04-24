export default function ShapeGridPage() {
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

      {/* TOPICS */}
      <section className="section" style={{ background: 'var(--bg)', paddingTop: 48 }}>
        <div className="section-head">
          <div className="eyebrow">Topics we&apos;re shaping</div>
          <h2>Four threads inside this arena.</h2>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="dot" />
            <h4>Resilience</h4>
            <p>Storm hardening, distributed backup, and the economics of keeping service on.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Storage</h4>
            <p>Battery deployment, siting frameworks, and the role of long-duration.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Emerging Technology</h4>
            <p>Advanced inverters, grid-enhancing tech, and what&apos;s ready for deployment.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Policy &amp; Regulation</h4>
            <p>Rate design, cost allocation, and the regulatory frameworks shaping investment.</p>
          </div>
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
