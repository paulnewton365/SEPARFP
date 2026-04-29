import Link from 'next/link';
import { Annotation } from '@/components/Annotation';

export default function MembershipPage() {
  return (
    <>
      {/* HERO - dark inverted, gives the page gravity on arrival */}
      <section className="member-hero">
        <div className="member-hero-inner">
          <div className="eyebrow">Membership</div>
          <h1>
            The room <em>compounds.</em><br />
            Show up.
          </h1>
          <p className="lead">
            Membership is how decisions get made faster, with better evidence, alongside
            the people doing the same work. Not a directory you join. A room you walk into,
            and walk out of with a sharper view of what to do next.
            <Annotation
              number={20}
              note="Membership leads with the principle, not the form. Compound, do not reset — the case for being in the room is made before any ask. Conversion happens after the argument is won, not before."
            />
          </p>
        </div>
      </section>

      {/* IMPACT STRIP - own section, white bg */}
      <section className="section" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="section-inner">
          <div className="eyebrow">The work, in numbers</div>
          <h2 className="impact-title">What collaboration produces.</h2>

          <div className="member-impact-strip">
            <div className="member-impact-stat">
              <div className="num">2,400+</div>
              <div className="label">utility, regulator, and provider participants in working groups since 2023</div>
            </div>
            <div className="member-impact-stat">
              <div className="num">147</div>
              <div className="label">tariff filings tracked in DELTa, drawn from working group contributions</div>
            </div>
            <div className="member-impact-stat">
              <div className="num">42</div>
              <div className="label">state commissions cited SEPA research in 2025 dockets</div>
            </div>
            <div className="member-impact-stat">
              <div className="num">$340M</div>
              <div className="label">in member-reported pilot savings attributed to SEPA peer benchmarks</div>
            </div>
            <Annotation
              number={28}
              note="The impact strip leads with what membership produces, not what SEPA does. Numbers chosen to be defensible, decision-relevant, and not generic engagement metrics."
            />
          </div>
        </div>
      </section>

      {/* MEMBER STORIES */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Member stories</div>
            <h2>Decisions, in their words.</h2>
            <p className="lede" style={{ maxWidth: 720 }}>
              Six stories from the last twelve months. Each one is a decision that
              membership made faster, sharper, or possible at all.
              <Annotation
                number={29}
                note="Stories foreground decisions and decision-makers, not the SEPA brand. The brand is the room these stories happen in. Members showcase what membership produces; SEPA earns credibility by making them the protagonists."
              />
            </p>
          </div>

          <div className="member-stories-grid">
            <article className="member-story">
              <div className="member-story-meta">
                <span className="role-tag role-utility">Utility leader</span>
                <span className="org">[Mid-Atlantic IOU]</span>
              </div>
              <h3>&ldquo;We brought a 90-day rate-design timeline back from a conversation that started in a working group.&rdquo;</h3>
              <p>
                [Name], VP of Regulatory Strategy, used the Large Load Tariff working group
                to pressure-test a cost-allocation model with peers from four other IOUs
                before filing. The model survived intervenor scrutiny in the first round.
              </p>
              <div className="member-story-foot">
                <span>Working Group: Large Load Tariffs</span>
                <span>Read the full story →</span>
              </div>
            </article>

            <article className="member-story">
              <div className="member-story-meta">
                <span className="role-tag role-regulator">Regulator</span>
                <span className="org">[Western state PUC]</span>
              </div>
              <h3>&ldquo;The DELTa data let me cite peer-state evidence in three different orders this year.&rdquo;</h3>
              <p>
                [Name], Commissioner, used SEPA&apos;s DELTa platform as the source for
                cross-jurisdictional comparisons in dockets covering rate design,
                interconnection queues, and IRP review. Cited eleven times in 2025.
              </p>
              <div className="member-story-foot">
                <span>Tool: DELTa Cross-Jurisdictional Database</span>
                <span>Read the full story →</span>
              </div>
            </article>

            <article className="member-story">
              <div className="member-story-meta">
                <span className="role-tag role-provider">Solution provider</span>
                <span className="org">[Series B grid software]</span>
              </div>
              <h3>&ldquo;Three months in the working group taught us what we&apos;d have spent a year learning at conferences.&rdquo;</h3>
              <p>
                [Name], CEO, joined SEPA at Series B specifically to compress the learning
                curve on utility procurement timelines. Closed first IOU pilot inside six
                months of joining.
              </p>
              <div className="member-story-foot">
                <span>Working Group: DERMS Integration</span>
                <span>Read the full story →</span>
              </div>
            </article>

            <article className="member-story">
              <div className="member-story-meta">
                <span className="role-tag role-buyer">Large energy user</span>
                <span className="org">[Fortune 100 industrial]</span>
              </div>
              <h3>&ldquo;The roadmap clarity from membership shaped a $400M procurement decision.&rdquo;</h3>
              <p>
                [Name], Head of Sustainability, used the Buyer-Utility Dialogue series to
                align internal procurement timelines with utility resource plans across
                twelve service territories.
              </p>
              <div className="member-story-foot">
                <span>Series: Buyer-Utility Dialogue</span>
                <span>Read the full story →</span>
              </div>
            </article>

            <article className="member-story">
              <div className="member-story-meta">
                <span className="role-tag role-utility">Utility leader</span>
                <span className="org">[Rural electric cooperative]</span>
              </div>
              <h3>&ldquo;A small co-op got the same caliber of evidence as a major IOU. That changes the conversation.&rdquo;</h3>
              <p>
                [Name], CEO, brought SEPA peer-benchmark data to a board discussion on
                distribution-grid modernization. Approved a five-year capital plan in a
                single board cycle.
              </p>
              <div className="member-story-foot">
                <span>Research: Rural Modernization Benchmark</span>
                <span>Read the full story →</span>
              </div>
            </article>

            <article className="member-story">
              <div className="member-story-meta">
                <span className="role-tag role-regulator">Consumer advocate</span>
                <span className="org">[State office]</span>
              </div>
              <h3>&ldquo;I needed cost-causation language a commission would actually accept. The working group draft did the work.&rdquo;</h3>
              <p>
                [Name], Senior Advocate, contributed to the Large Load Tariff principles
                draft and used the framework verbatim in two state proceedings. NASUCA
                endorsed the framework in early 2026.
              </p>
              <div className="member-story-foot">
                <span>Working Group: Large Load Tariffs</span>
                <span>Read the full story →</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHO'S IN THE ROOM */}
      <section className="section">
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Who&apos;s in the room</div>
            <h2>Designed for the people deciding the transition.</h2>
            <Annotation
              number={30}
              note="Tiers are framed as roles in the conversation, not pricing categories. The decision a member is trying to make is the organizing logic. Pricing lives on the join page; this page is about who's in the room and why."
            />
          </div>

          <div className="member-roles">
            <div className="member-role">
              <div className="role-tag role-utility" style={{ marginBottom: 14 }}>Utility leader</div>
              <h4>You set strategy. We sharpen it with peer evidence.</h4>
              <p>
                Strategy, innovation, and resource officers at IOUs, munis, and co-ops.
                Membership gives you peer-tested benchmarks, working group access on the
                decisions you&apos;re actually making, and credible cover for the bold moves
                you bring to your board.
              </p>
              <div className="role-meta">
                <span>1,200+ utility leaders</span>
                <span>13 active working groups</span>
              </div>
            </div>

            <div className="member-role">
              <div className="role-tag role-regulator" style={{ marginBottom: 14 }}>Regulator and policymaker</div>
              <h4>You weigh the evidence. We make sure it&apos;s defensible.</h4>
              <p>
                State PUCs, legislators, and federal agencies. Membership is access to
                cross-jurisdictional evidence, neutral ground to engage industry without
                appearing captured, and a peer network across forty-one states.
              </p>
              <div className="role-meta">
                <span>180+ regulator participants</span>
                <span>Public-interest pricing tier</span>
              </div>
            </div>

            <div className="member-role">
              <div className="role-tag role-provider" style={{ marginBottom: 14 }}>Solution provider</div>
              <h4>You build for the grid. We connect you to the buyers.</h4>
              <p>
                Tech, software, storage, DER, and emerging clean-energy companies selling
                into utilities. Membership compresses your learning curve on utility
                procurement and puts you in the room where pilots are scoped.
              </p>
              <div className="role-meta">
                <span>440+ provider members</span>
                <span>Tiered fees by company stage</span>
              </div>
            </div>

            <div className="member-role">
              <div className="role-tag role-buyer" style={{ marginBottom: 14 }}>Large energy user</div>
              <h4>You set the demand signal. We help utilities answer it.</h4>
              <p>
                Fortune 500 sustainability leads, industrials, and data center operators.
                Membership translates procurement ambition into what utilities can actually
                deliver, on timelines that work for both sides.
              </p>
              <div className="role-meta">
                <span>New tier, launching 2026</span>
                <span>Buyer-Utility Dialogue series</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS - tighter component, not a full calendar */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="upcoming-events-head">
            <div>
              <div className="eyebrow">Upcoming</div>
              <h2 style={{ marginBottom: 0 }}>Where members show up next.</h2>
            </div>
            <Link href="#" className="link-arrow">View the full calendar →</Link>
          </div>
          <Annotation
            number={31}
            note="Upcoming events live as a compact component, not a full calendar. The page is about membership; the calendar is one expression of it. A short list with a link to depth respects the page's purpose."
          />

          <div className="upcoming-events">
            <article className="upcoming-event upcoming-event-featured">
              <div className="upcoming-event-date">
                <div className="month">May</div>
                <div className="day">14</div>
                <div className="year">2026</div>
              </div>
              <div className="upcoming-event-body">
                <div className="upcoming-event-tags">
                  <span className="event-type">Working group</span>
                  <span className="event-access">Members + invited</span>
                  <span className="event-pin">Featured</span>
                </div>
                <h3>Large Load Tariff Principles · Session 4</h3>
                <p>
                  The fourth working session refining the cost-causation framework that
                  NASUCA endorsed in early 2026. 60+ utility, regulatory, and consumer-advocate
                  leads pressure-testing the principles against real-world tariff cases.
                </p>
                <div className="upcoming-event-meta">
                  <span>Virtual</span>
                  <span>1:00–4:30 PM ET</span>
                  <span>Reserve →</span>
                </div>
              </div>
            </article>

            <article className="upcoming-event">
              <div className="upcoming-event-date">
                <div className="month">May</div>
                <div className="day">21</div>
                <div className="year">2026</div>
              </div>
              <div className="upcoming-event-body">
                <div className="upcoming-event-tags">
                  <span className="event-type">Briefing</span>
                  <span className="event-access open">Open to all</span>
                </div>
                <h3>The State of DERMS · Quarterly Briefing</h3>
                <div className="upcoming-event-meta">
                  <span>Virtual</span>
                  <span>2:00–3:00 PM ET</span>
                  <span>Register →</span>
                </div>
              </div>
            </article>

            <article className="upcoming-event">
              <div className="upcoming-event-date">
                <div className="month">Jun</div>
                <div className="day">3</div>
                <div className="year">2026</div>
              </div>
              <div className="upcoming-event-body">
                <div className="upcoming-event-tags">
                  <span className="event-type">Summit</span>
                  <span className="event-access">Members + registered</span>
                </div>
                <h3>Energy Evolution Summit 2026</h3>
                <div className="upcoming-event-meta">
                  <span>Washington, D.C.</span>
                  <span>Three days</span>
                  <span>Register →</span>
                </div>
              </div>
            </article>

            <article className="upcoming-event">
              <div className="upcoming-event-date">
                <div className="month">Jun</div>
                <div className="day">12</div>
                <div className="year">2026</div>
              </div>
              <div className="upcoming-event-body">
                <div className="upcoming-event-tags">
                  <span className="event-type">Dialogue</span>
                  <span className="event-access">Members only</span>
                </div>
                <h3>Buyer-Utility Dialogue · Q2 Session</h3>
                <div className="upcoming-event-meta">
                  <span>Virtual</span>
                  <span>11:00 AM–1:00 PM ET</span>
                  <span>Reserve →</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cta">
        <div className="cta-card">
          <div className="eyebrow">Membership</div>
          <h2>The transition is being shaped right now. Be in the room.</h2>
          <p className="lede" style={{ maxWidth: 640, marginInline: 'auto' }}>
            Membership opens working groups, dialogues, and the data the sector is using
            to decide what comes next. Thirty seconds to start.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/join" className="btn btn-primary">Join SEPA</Link>
            <Link href="#" className="btn btn-secondary">Talk to membership</Link>
          </div>
        </div>
      </section>
    </>
  );
}
