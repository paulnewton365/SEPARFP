import Link from 'next/link';
import { Annotation } from '@/components/Annotation';

export default function ShapeIndexPage() {
  return (
    <>
      {/* HERO - kept structure, shape language restored */}
      <section className="member-hero">
        <div className="member-hero-inner">
          <div className="eyebrow">Shape</div>
          <h1>
            Three arenas, <em>one transition.</em>
          </h1>
          <p className="lead">
            Let&apos;s shape energy&apos;s transition. The future will be shaped by
            utilities, regulators, providers, and buyers working together ,
            informed by credible evidence and aligned on what actually works.
            SEPA&apos;s members are doing the shaping. Three arenas. One transition.
            Each one is a piece of the work.
            <Annotation
              number={44}
              note="An index page so the three arenas land with equal billing on first arrival. The lead activates the organizing idea, Let's shape energy's transition, and names who does the shaping. Each arena card holds the same shape and depth, so the choice of where to start is the reader's. Maps to RFP language around a unified digital experience and the brand being understandable and inspiring."
            />
          </p>
        </div>
      </section>

      {/* ARENA 01 - GRID */}
      <section className="arena-segment arena-segment-grid">
        <div className="arena-segment-inner">
          <div className="arena-segment-media">
            <span className="arena-segment-media-label">Image · Grid arena</span>
          </div>
          <div className="arena-segment-body">
            <div className="arena-segment-meta">
              <span className="arena-segment-num">Arena 01</span>
              <span className="arena-segment-name">Grid</span>
            </div>
            <h2>The wires we keep alive while we rebuild them.</h2>
            <p>
              For utility leaders managing storm response and capital plans, transmission
              planners under FERC pressure, and commissioners weighing whether the rate
              base can absorb what the grid actually needs, Grid is the work of
              keeping reliability and modernization on speaking terms.
            </p>
            <div className="arena-segment-stats">
              <div><strong>74%</strong> of US MWh from members in Grid working groups</div>
              <div><strong>23</strong> commissions cited Grid research in 2025</div>
            </div>
            <Link href="/shape/grid" className="btn btn-primary arena-segment-cta">
              Shape the grid →
            </Link>
            <Annotation
              number={45}
              note="Each arena gets a substantial segment with a reason-to-care framing for the audience, a key image, and a clear path through. The structural symmetry makes the three arenas legible at a glance, and the audience-keyed framing lets a reader identify whether this is their work before they click. Maps to RFP language around the brand being understandable and inspiring."
            />
          </div>
        </div>
      </section>

      {/* ARENA 02 - GROWTH (reversed layout) */}
      <section className="arena-segment arena-segment-growth arena-segment-reverse">
        <div className="arena-segment-inner">
          <div className="arena-segment-body">
            <div className="arena-segment-meta">
              <span className="arena-segment-num">Arena 02</span>
              <span className="arena-segment-name">Growth</span>
            </div>
            <h2>The demand picture is rewriting itself in real time.</h2>
            <p>
              For utility resource planners absorbing data centers and fleet electrification,
              regulators rewriting the rate cases that follow, and Fortune 500 buyers trying
              to plan around utility timelines, Growth is the conversation that
              compounds across every other decision.
            </p>
            <div className="arena-segment-stats">
              <div><strong>147</strong> tariff filings tracked in DELTa</div>
              <div><strong>NASUCA</strong> endorsed the Large Load principles in Apr 2026</div>
            </div>
            <Link href="/shape/growth" className="btn btn-primary arena-segment-cta">
              Shape the growth →
            </Link>
          </div>
          <div className="arena-segment-media">
            <span className="arena-segment-media-label">Image · Growth arena</span>
          </div>
        </div>
      </section>

      {/* ARENA 03 - GLOBE */}
      <section className="arena-segment arena-segment-globe">
        <div className="arena-segment-inner">
          <div className="arena-segment-media">
            <span className="arena-segment-media-label">Image · Globe arena</span>
          </div>
          <div className="arena-segment-body">
            <div className="arena-segment-meta">
              <span className="arena-segment-num">Arena 03</span>
              <span className="arena-segment-name">Globe</span>
            </div>
            <h2>What the rest of the world has tried, and what travels.</h2>
            <p>
              For utility planners citing international precedent, federal labs running
              comparative work, and state offices learning from regimes that solved
              specific problems first, Globe is the comparative evidence base US
              policy can stop relying on intuition for.
            </p>
            <div className="arena-segment-stats">
              <div><strong>12</strong> cross-border collaborations since 2023</div>
              <div><strong>8</strong> federal labs and academic partners</div>
            </div>
            <Link href="/shape/globe" className="btn btn-primary arena-segment-cta">
              Shape the globe →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY THREE ARENAS - closing rationale */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Why three arenas</div>
            <h2>The framework, on purpose.</h2>
            <p className="lede" style={{ maxWidth: 720 }}>
              SEPA used to talk in six focus areas. Then four pathways. Then five priorities.
              The framework changed; the framing did not. Three arenas is what stuck because
              it is what the work actually looks like, the foundation members maintain,
              the demand picture they have to absorb, and the comparative evidence they
              bring back from the rest of the world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
