import { Annotation } from '@/components/Annotation';

export default function UtilityHubPage() {
  return (
    <>
      {/* HERO */}
      <section className="audience-hero">
        <div className="audience-hero-inner">
          <div>
            <div className="eyebrow">For utility leaders</div>
            <h1>
              The room where peers compare notes before the rate case.
              <Annotation
                number={7}
                note="Audience hubs reframe the same content under new headings. No duplicate content, just different navigation logic tuned to a role."
              />
            </h1>
            <p>
              Strategy, innovation, and resource officers at IOUs, munis, and co-ops use SEPA to
              de-risk major investments with peer benchmarks, move faster by learning from what
              others have already solved, and get credible cover for bold moves with boards and
              regulators.
            </p>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <a className="btn">See membership for utilities</a>
              <a className="link-arrow">Talk to our utility team →</a>
            </div>
          </div>
          <div className="audience-image" />
        </div>
      </section>

      {/* CURATED STACK */}
      <section style={{ background: 'var(--paper)', padding: '0 24px' }}>
        <div className="curated-stack">
          <div className="curated-row">
            <div className="curated-label">
              <h3>De-risk the big decisions</h3>
              <p>Peer benchmarks, cost data, and decision-grade evidence for your next board deck.</p>
            </div>
            <div className="curated-items">
              <div className="curated-item">
                <div className="tag">Flagship Report</div>
                <h4>The Large Load Playbook: Principles for rate design in a data center decade</h4>
                <p>Framework for managing 100+ MW customer requests.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Benchmark</div>
                <h4>After the storm: Five utility playbooks for recovery</h4>
                <p>Cost, timelines, and comms frameworks that worked.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Data tool</div>
                <h4>DELTa database: 147 tariffs, 42 states</h4>
                <p>Searchable, updated weekly. The definitive map.</p>
              </div>
            </div>
          </div>

          <div className="curated-row">
            <div className="curated-label">
              <h3>Join the working groups</h3>
              <p>Members-only forums where the next set of utility practices gets written.</p>
            </div>
            <div className="curated-items">
              <div className="curated-item">
                <div className="tag">Monthly</div>
                <h4>Large Load Tariff Principles Working Group</h4>
                <p>Cost allocation frameworks, session 4 on May 14.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Monthly</div>
                <h4>Resilience Planning Working Group</h4>
                <p>Storm hardening economics, next session May 28.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Quarterly</div>
                <h4>Utility CIO Roundtable</h4>
                <p>OT/IT convergence, grid modernization, Q2 session.</p>
              </div>
            </div>
          </div>

          <div className="curated-row">
            <div className="curated-label">
              <h3>Meet your peers</h3>
              <p>In-person convenings sized for candor, not keynotes.</p>
            </div>
            <div className="curated-items">
              <div className="curated-item">
                <div className="tag">May 22 · Raleigh</div>
                <h4>Grid Resilience Summit</h4>
                <p>Post-storm recovery, investment planning. Open.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Jun 10 · Chicago</div>
                <h4>Utility Innovation Forum</h4>
                <p>Pilots, pre-competitive R&amp;D, peer-only sessions.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Sep 14-16 · Anaheim</div>
                <h4>RE+ 2026</h4>
                <p>SEPA&apos;s flagship annual convening.</p>
              </div>
            </div>
          </div>

          <div className="curated-row">
            <div className="curated-label">
              <h3>What membership actually does</h3>
              <p>Real numbers from real members. No marketing-speak.</p>
            </div>
            <div className="curated-items">
              <div className="curated-item">
                <div className="tag">Outcome</div>
                <h4>$4.2M saved on DER pilot</h4>
                <p>A municipal utility avoided duplicate work by using a SEPA benchmark.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Outcome</div>
                <h4>Rate case cited 6 SEPA reports</h4>
                <p>An IOU&apos;s successful large-load tariff filing drew on DELTa data.</p>
              </div>
              <div className="curated-item">
                <div className="tag">Outcome</div>
                <h4>12 peer utilities in 6 months</h4>
                <p>What a new innovation lead got out of Year 1.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pov" style={{ background: 'var(--ink-1)', color: 'var(--paper)' }}>
        <div className="pov-inner" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>
              If this is you
            </div>
            <h2 style={{ color: 'var(--paper)' }}>Talk to our utility team.</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              A 30-minute call walking through what your peers at similar utilities are working on,
              and where SEPA would fit. No sales pitch. Just a map.
            </p>
            <div className="hero-actions">
              <a className="btn" style={{ background: 'var(--paper)', color: 'var(--ink-1)' }}>
                Book a call
              </a>
            </div>
          </div>
          <div />
        </div>
      </section>
    </>
  );
}
