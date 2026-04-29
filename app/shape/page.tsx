import Link from 'next/link';
import { Annotation } from '@/components/Annotation';

export default function ShapeIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="member-hero">
        <div className="member-hero-inner">
          <div className="eyebrow">Shape</div>
          <h1>
            Three arenas, <em>one transition.</em>
          </h1>
          <p className="lead">
            The energy transition does not happen in one conversation. It happens in three.
            Grid is the foundation. Growth is the demand picture. Globe is the comparative
            evidence we bring back. Each one has its own working groups, its own members,
            its own research.
            <Annotation
              number={44}
              note="An index page so the three arenas land with equal billing on first arrival. Each arena card holds the same shape, the same depth of detail, so the choice of where to start is the reader's. Maps to RFP language around a unified digital experience."
            />
          </p>
        </div>
      </section>

      {/* THREE ARENA CARDS - equal weight, each linking through */}
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="section-inner">
          <div className="arena-index-grid">
            <Link href="/shape/grid" className="arena-index-card arena-index-grid-card">
              <div className="arena-index-num">Arena 01</div>
              <h2>Grid</h2>
              <p className="arena-index-blurb">
                The physical and regulatory foundation of the transition. Reliability,
                distribution, transmission, and the regulatory frameworks that govern them.
              </p>
              <div className="arena-index-stats">
                <div><strong>74%</strong> of US MWh from members in Grid working groups</div>
                <div><strong>23</strong> state commissions cited Grid research in 2025</div>
                <div><strong>4</strong> active working groups</div>
              </div>
              <div className="arena-index-cta">Explore the Grid arena →</div>
            </Link>

            <Link href="/shape/growth" className="arena-index-card arena-index-growth-card">
              <div className="arena-index-num">Arena 02</div>
              <h2>Growth</h2>
              <p className="arena-index-blurb">
                Demand planning for the defining utility challenge of the decade. Large-load
                tariffs, transportation electrification, and the buyer-utility conversations
                that compound them.
              </p>
              <div className="arena-index-stats">
                <div><strong>147</strong> tariff filings tracked in DELTa</div>
                <div><strong>NASUCA</strong> endorsed the principles in Apr 2026</div>
                <div><strong>4</strong> active working groups</div>
              </div>
              <div className="arena-index-cta">Explore the Growth arena →</div>
            </Link>

            <Link href="/shape/globe" className="arena-index-card arena-index-globe-card">
              <div className="arena-index-num">Arena 03</div>
              <h2>Globe</h2>
              <p className="arena-index-blurb">
                The lessons we bring back to the US sector and make the case for.
                Cross-border infrastructure, international market design, and the
                comparative evidence base for US policy.
              </p>
              <div className="arena-index-stats">
                <div><strong>12</strong> cross-border collaborations since 2023</div>
                <div><strong>8</strong> federal labs and academic partners</div>
                <div><strong>4</strong> active working groups</div>
              </div>
              <div className="arena-index-cta">Explore the Globe arena →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY THREE - editorial framing */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Why three arenas</div>
            <h2>The framework, on purpose.</h2>
            <p className="lede" style={{ maxWidth: 720 }}>
              SEPA used to talk in six focus areas. Then four pathways. Then five priorities.
              The framework changed; the framing did not. Three arenas is what stuck because
              it is what the work actually looks like &mdash; the foundation members maintain,
              the demand picture they have to absorb, and the comparative evidence they
              bring back from the rest of the world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
