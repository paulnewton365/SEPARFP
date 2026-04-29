import Link from 'next/link';
import { Annotation } from '@/components/Annotation';
import { MemberRoleTabs } from '@/components/MemberRoleTabs';

export default function MembershipPage() {
  return (
    <>
      {/* HERO - dark inverted */}
      <section className="member-hero">
        <div className="member-hero-inner">
          <div className="eyebrow">Membership</div>
          <h1>
            Membership is how decisions <em>get made faster.</em>
          </h1>
          <p className="lead">
            Energy&apos;s future will be shaped by utilities, regulators, providers, and
            buyers working together, informed by credible evidence and aligned on
            what actually works. Membership is how that shaping happens.
            <Annotation
              number={20}
              note="Membership leads with the principle of the work, not the form. The case for being in the room is made before any ask. Maps to RFP language around members feeling more connected, not less, and around the brand being inspiring."
            />
          </p>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="section" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="section-inner">
          <div className="eyebrow">The work, in numbers</div>
          <h2 className="impact-title">What collaboration produces.</h2>

          <div className="member-impact-strip">
            <div className="member-impact-stat">
              <div className="num">1,000+</div>
              <div className="label">members across utilities, regulators, providers, buyers, and academia</div>
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
              note="Numbers chosen to be defensible, decision-relevant, and tied to outcomes rather than activity. The 1,000+ membership scale anchors the page in familiar SEPA framing, while the rest of the metrics establish what that scale produces. Maps to RFP language around being sought out as a go-to authority."
            />
          </div>
        </div>
      </section>

      {/* MEMBER SPOTLIGHTS - the "members on stage" idea */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Members on stage</div>
            <h2>The brand revealed by the people who chose it.</h2>
            <p className="lede" style={{ maxWidth: 680 }}>
              Four members, in their own words, on what membership produces.
              Their stories are the brand&apos;s expression, SEPA is the frame.
              <Annotation
                number={32}
                note="Spotlights embody the members-on-stage idea, SEPA as the frame, members as the subject. The brand is revealed by the people who chose it, not by the brand talking about itself. Maps to RFP language around members feeling more connected and around proactive narrative leadership."
              />
            </p>
          </div>

          <div className="spotlights-grid">
            <article className="spotlight">
              <div className="spotlight-media">
                <span className="spotlight-media-label">Photo · Member portrait</span>
                <div className="spotlight-media-play" aria-hidden="true">▶</div>
              </div>
              <div className="spotlight-body">
                <div className="spotlight-quote">
                  &ldquo;SEPA basically gets you to the information you need that much
                  faster. SEPA gives you that forum to discuss openly and freely with
                  other program managers and utilities what they&apos;ve learned.&rdquo;
                </div>
                <div className="spotlight-attr">
                  <div className="name">Jake Wade</div>
                  <div className="role">Renewable Energy Program Manager</div>
                  <div className="org">Seattle City Light</div>
                </div>
                <div className="spotlight-foot">
                  <span className="role-tag role-utility">Utility</span>
                  <span className="spotlight-link">Watch Jake&apos;s story →</span>
                </div>
              </div>
            </article>

            <article className="spotlight">
              <div className="spotlight-media">
                <span className="spotlight-media-label">Photo · Member portrait</span>
                <div className="spotlight-media-play" aria-hidden="true">▶</div>
              </div>
              <div className="spotlight-body">
                <div className="spotlight-quote">
                  &ldquo;SEPA provides us the depth of knowledge that I can&apos;t get
                  on my own. The research is an immeasurable benefit to utilities that
                  don&apos;t have the staff, you provide that to us.&rdquo;
                </div>
                <div className="spotlight-attr">
                  <div className="name">Gerald Buydos</div>
                  <div className="role">Solar Program Manager</div>
                  <div className="org">City of Riverside, CA</div>
                </div>
                <div className="spotlight-foot">
                  <span className="role-tag role-utility">Utility</span>
                  <span className="spotlight-link">Read Gerald&apos;s story →</span>
                </div>
              </div>
            </article>

            <article className="spotlight">
              <div className="spotlight-media">
                <span className="spotlight-media-label">Photo · Member portrait</span>
                <div className="spotlight-media-play" aria-hidden="true">▶</div>
              </div>
              <div className="spotlight-body">
                <div className="spotlight-quote">
                  &ldquo;The cross-jurisdictional evidence let me cite peer-state precedent
                  in three different orders this year. That kind of comparison work used to
                  take months of staff time. SEPA does it for me.&rdquo;
                </div>
                <div className="spotlight-attr">
                  <div className="name">[Commissioner Name]</div>
                  <div className="role">Commissioner</div>
                  <div className="org">[Western state PUC]</div>
                </div>
                <div className="spotlight-foot">
                  <span className="role-tag role-regulator">Regulator</span>
                  <span className="spotlight-link">Read the story →</span>
                </div>
              </div>
            </article>

            <article className="spotlight">
              <div className="spotlight-media">
                <span className="spotlight-media-label">Photo · Member portrait</span>
                <div className="spotlight-media-play" aria-hidden="true">▶</div>
              </div>
              <div className="spotlight-body">
                <div className="spotlight-quote">
                  &ldquo;Three months in the working group taught us what we&apos;d have
                  spent a year learning at conferences. We closed our first IOU pilot inside
                  six months of joining.&rdquo;
                </div>
                <div className="spotlight-attr">
                  <div className="name">[Founder Name]</div>
                  <div className="role">CEO</div>
                  <div className="org">[Series B grid software]</div>
                </div>
                <div className="spotlight-foot">
                  <span className="role-tag role-provider">Provider</span>
                  <span className="spotlight-link">Read the story →</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* THE PEOPLE DECIDING THE TRANSITION - interactive tabs */}
      <section className="section">
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Who&apos;s in the room</div>
            <h2>The people deciding the transition.</h2>
            <p className="lede" style={{ maxWidth: 680 }}>
              Four roles. Four different decisions to make. One room.
              Choose a role to see what membership opens.
              <Annotation
                number={33}
                note="Tabs let a reader examine one role in depth without forcing a comparison they have not asked for. The role-keyed content keeps detail accessible without crowding the page. Maps to RFP language around a unified, understandable experience."
              />
            </p>
          </div>

          <MemberRoleTabs />
        </div>
      </section>

      {/* MEMBER COMPOSITION DATA VIZ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="composition-grid">
            <div className="composition-text">
              <div className="eyebrow">The composition</div>
              <h2>Our breadth is our power.</h2>
              <p>
                Investor-owned utilities, electric cooperatives, public power, technology
                companies, state utility commissions, consumer advocates, large energy users,
                and academic institutions. The breadth is the point, no single
                perspective dominates the room.
              </p>
              <p>
                <Link href="#" className="link-arrow">View the full member directory →</Link>
              </p>
              <Annotation
                number={34}
                note="Composition visualized so the breadth of stakeholder classes becomes legible at a glance. The composition itself is proof that SEPA's neutrality has substance, it shows up in who is in the room. Maps to RFP language around being sought out as a go-to authority."
              />
            </div>
            <div className="composition-viz">
              <div className="composition-viz-label">Member composition by class · 2026</div>
              <svg viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Donut chart of member composition">
                {/* Donut chart - segments calculated as cumulative arc paths */}
                {(() => {
                  const segments = [
                    { label: 'Utility', pct: 52, color: 'var(--accent)' },
                    { label: 'Solution provider', pct: 26, color: 'var(--ink-1)' },
                    { label: 'Regulator/Gov', pct: 10, color: 'var(--ink-2)' },
                    { label: 'Large energy user', pct: 6, color: 'var(--ink-3)' },
                    { label: 'Academic/NGO', pct: 6, color: 'var(--line)' },
                  ];
                  const cx = 190;
                  const cy = 190;
                  const r = 140;
                  const innerR = 90;
                  let cumulative = 0;
                  return segments.map((s, i) => {
                    const startAngle = (cumulative / 100) * Math.PI * 2 - Math.PI / 2;
                    cumulative += s.pct;
                    const endAngle = (cumulative / 100) * Math.PI * 2 - Math.PI / 2;
                    const x1 = cx + r * Math.cos(startAngle);
                    const y1 = cy + r * Math.sin(startAngle);
                    const x2 = cx + r * Math.cos(endAngle);
                    const y2 = cy + r * Math.sin(endAngle);
                    const x3 = cx + innerR * Math.cos(endAngle);
                    const y3 = cy + innerR * Math.sin(endAngle);
                    const x4 = cx + innerR * Math.cos(startAngle);
                    const y4 = cy + innerR * Math.sin(startAngle);
                    const largeArc = s.pct > 50 ? 1 : 0;
                    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
                    return <path key={i} d={path} fill={s.color} stroke="var(--paper)" strokeWidth="2" />;
                  });
                })()}
                <text x="190" y="186" textAnchor="middle" fontSize="42" fontWeight="500" fill="var(--ink-1)" letterSpacing="-1">1,000+</text>
                <text x="190" y="208" textAnchor="middle" fontSize="11" fill="var(--ink-3)" letterSpacing="2">MEMBERS</text>
              </svg>
              <div className="composition-legend">
                <div className="composition-legend-item"><span className="swatch" style={{ background: 'var(--accent)' }} /> Utility · 52%</div>
                <div className="composition-legend-item"><span className="swatch" style={{ background: 'var(--ink-1)' }} /> Solution provider · 26%</div>
                <div className="composition-legend-item"><span className="swatch" style={{ background: 'var(--ink-2)' }} /> Regulator and government · 10%</div>
                <div className="composition-legend-item"><span className="swatch" style={{ background: 'var(--ink-3)' }} /> Large energy user · 6%</div>
                <div className="composition-legend-item"><span className="swatch" style={{ background: 'var(--line)' }} /> Academic and NGO · 6%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="section">
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Your members team</div>
            <h2>The people you actually work with.</h2>
            <p className="lede" style={{ maxWidth: 680 }}>
              Membership is a relationship, not a subscription. Four leaders run the program
              that connects you to the people, the research, and the rooms where decisions
              get made.
              <Annotation
                number={35}
                note="Leadership surfaced because the team running membership is the day-to-day relationship members actually experience. Familiar names anchor the new experience for existing members. Maps to RFP language around members feeling more connected, not less."
              />
            </p>
          </div>

          <div className="leadership-grid">
            <div className="leader">
              <div className="leader-photo" />
              <h4>Sheri Givens</h4>
              <div className="leader-role">President &amp; CEO</div>
              <p>Leads SEPA&apos;s strategic direction since November 2022. Twenty-plus years across utility regulation, consumer advocacy, and energy policy.</p>
              <a className="leader-link">Connect on LinkedIn →</a>
            </div>
            <div className="leader">
              <div className="leader-photo" />
              <h4>Courtney Galatioto</h4>
              <div className="leader-role">VP, Membership</div>
              <p>Steers the membership program, engagement, retention, growth. A decade in the energy sector. Master&apos;s in energy and climate change from Johns Hopkins.</p>
              <a className="leader-link">Connect on LinkedIn →</a>
            </div>
            <div className="leader">
              <div className="leader-photo" />
              <h4>Sarah Gott</h4>
              <div className="leader-role">Director, Utility Engagement</div>
              <p>Leads the utility relationships that anchor the membership. Twenty years in strategic relationship management, including fifteen at an electric utility.</p>
              <a className="leader-link">Connect on LinkedIn →</a>
            </div>
            <div className="leader">
              <div className="leader-photo" />
              <h4>Monica Trauzzi</h4>
              <div className="leader-role">Chief Communications Officer</div>
              <p>Oversees communications, marketing, brand, and Public Utilities Fortnightly since August 2025. Former journalist. Two decades at the energy &amp; climate intersection.</p>
              <a className="leader-link">Connect on LinkedIn →</a>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS - compact component */}
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
            note="Upcoming events live as a compact component. The page is about membership; the calendar is one expression of it. A short list with a link to depth respects the page's purpose."
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
                <h3>Grid Evolution Summit 2026</h3>
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
