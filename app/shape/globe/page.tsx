import { ArenaSwitcher } from '@/components/ArenaSwitcher';
import { Annotation } from '@/components/Annotation';
import Link from 'next/link';

export default function ShapeGlobePage() {
  return (
    <>
      <section className="arena-hero">
        <div className="arena-hero-inner">
          <div className="arena-number">Arena 03 · Globe</div>
          <h1>
            Let&apos;s shape{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--ink-2)' }}>what crosses borders.</em>
          </h1>
          <p className="stance">
            Innovation doesn&apos;t stop at the US edge. Neither do the lessons. The energy
            transition is a global experiment happening at different speeds, and the sector that
            learns fastest shapes it first. This arena is how we bring that learning home.
          </p>
        </div>
      </section>

      <ArenaSwitcher />

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="two-col">
          <div>
            <div className="eyebrow">SEPA&apos;s position</div>
            <h2 style={{ fontSize: 40 }}>
              The US isn&apos;t first. That&apos;s an advantage, if we use it.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 24 }}>
              Europe has ten more years of wholesale market design than we do. Australia has
              stress-tested the largest DER penetration on earth. China has scaled battery
              manufacturing beyond what most US forecasts imagined. The learnings are available.
              The question is whether the US utility sector is paying attention.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              At the same time, the transition won&apos;t work if its benefits stop at affluent
              ZIP codes. SEPA&apos;s work on energy equity and inclusion sits inside this arena
              because both are questions of who gets to participate in shaping the future.
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
            <h4>International Learning</h4>
            <p>Benchmarking US practice against the peer markets that are already past us.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Cross-Border Innovation</h4>
            <p>How Mexican and Canadian grid integration shapes what&apos;s possible in North America.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Energy Equity</h4>
            <p>Affordability, access, and who actually bears the cost of the transition.</p>
          </div>
          <div className="topic-card">
            <div className="dot" />
            <h4>Inclusion</h4>
            <p>Workforce, community engagement, and who gets to shape the next decade of energy.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="eyebrow">Latest from this arena</div>
          <h2>What we&apos;ve published on globe.</h2>
        </div>
        <div className="research-grid">
          <div className="research-card feature">
            <div className="research-label">International Brief</div>
            <h3>What US utilities can learn from Australia&apos;s DER rollout</h3>
            <p>
              The country with the highest residential solar penetration on earth just spent five
              years reworking its distribution model. Here&apos;s what carries over.
            </p>
            <div className="meta">
              <span>28 pages</span>
              <span>Utility, Regulator</span>
              <span>Feb 2026</span>
            </div>
          </div>
          <div className="research-card">
            <div className="research-label">Research</div>
            <h3>Energy equity metrics: What the sector is actually measuring</h3>
            <p>A scan of 45 utilities&apos; equity reporting. Frameworks, gaps, and a proposed set.</p>
            <div className="meta">
              <span>Jan 2026</span>
            </div>
          </div>
          <div className="research-card">
            <div className="research-label">Snapshot</div>
            <h3>Cross-border transmission: The Canada-US interconnect picture</h3>
            <p>Five key projects, the regulatory status, and what&apos;s at stake for both grids.</p>
            <div className="meta">
              <span>Dec 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS LEADING THIS WORK */}
      <section className="section members-leading-strip">
        <div className="section-inner">
          <div className="eyebrow">Members leading this work</div>
          <h3 className="members-leading-title">
            Eight utilities and three federal labs in cross-border conversations.
          </h3>
          <div className="members-leading-logos">
            <span>[Border IOU]</span>
            <span>[Federal lab]</span>
            <span>[Cross-border RTO]</span>
            <span>[State energy office]</span>
            <span>[Equity NGO]</span>
            <span>[Academic partner]</span>
            <span>+ many more</span>
          </div>
          <Link href="/convene" className="link-arrow" style={{ marginTop: 20, display: 'inline-block' }}>
            See members shaping the global conversation →
          </Link>
          <Annotation
            number={37}
            note="Each Shape page surfaces who's actually leading the work in that arena. Members are not the audience — they are the protagonists."
          />
        </div>
      </section>
    </>
  );
}
