import Link from 'next/link';
import { Annotation } from '@/components/Annotation';
import { ShareButtons } from '@/components/SocialIcons';

export default function ArticlePage() {
  return (
    <>
      {/* META BAR */}
      <div className="article-meta-bar">
        <div className="article-meta-bar-inner">
          <Link href="/fortnightly">← Fortnightly</Link>
          <div style={{ color: 'var(--ink-3)', display: 'flex', gap: 16, alignItems: 'center' }}>
            <span>14 min read</span>
            <ShareButtons title="Power to the People — Fortnightly" />
          </div>
        </div>
      </div>

      {/* HERO IMAGE - full bleed, sets the tone */}
      <div className="article-hero-img">
        <div className="article-hero-img-inner">
          <span className="hero-img-caption">Photo · Capitol building, dusk</span>
        </div>
      </div>

      {/* ARTICLE */}
      <article className="article">
        <header className="article-header">
          {/* TAGS */}
          <div className="article-tags">
            <a className="article-tag">Affordability</a>
            <a className="article-tag">Regulatory</a>
            <a className="article-tag">Consumer Advocacy</a>
            <a className="article-tag">Rate Design</a>
            <Annotation
              number={25}
              note="Tags up front act as both signal and filter. Click any tag to find related work. They tell the reader what territory the article covers before the headline asks for their time."
            />
          </div>

          <h1 className="article-title">
            Power to the People: NASUCA on affordability
          </h1>

          <p className="article-deck">
            The nation&apos;s consumer advocates sit at the table where utility affordability
            gets decided. Three of their leaders tell PUF what it takes to hold that line now
            that load growth, data centers, and capital costs are rewriting the rate case math
            at the same time.
          </p>

          {/* BYLINE WITH AUTHOR INTRO */}
          <div className="article-byline-row">
            <div className="article-byline">
              <div className="article-byline-avatars">
                <div className="article-byline-avatar" />
                <div className="article-byline-avatar" />
                <div className="article-byline-avatar" />
              </div>
              <div>
                <div className="name">Michael Moody, Tom Content &amp; Anthony Swinger</div>
                <div className="meta">Officers, NASUCA · April 2026 · Vol. 164 · Issue 4</div>
              </div>
            </div>
            <ShareButtons title="Power to the People — Fortnightly" />
          </div>

          {/* SHORT INTRO TO AUTHORS - sits in header before the body starts */}
          <div className="article-intro-authors">
            <div className="intro-label">About the contributors</div>
            <p>
              Three of the people the sector listens to on rate cases.{' '}
              <strong>Michael Moody</strong> chairs NASUCA and runs Maryland&apos;s Office of
              People&apos;s Counsel. <strong>Tom Content</strong> is NASUCA&apos;s vice
              president and leads the Citizens Utility Board of Wisconsin.{' '}
              <strong>Anthony Swinger</strong>, NASUCA&apos;s treasurer, is a senior advocate
              with Tennessee&apos;s consumer affairs office. Together they sit in front of more
              utility commissions in a year than most people see in a career.
            </p>
            <Annotation
              number={26}
              note="Author intro runs at the top of the article, not just in a bio at the foot. Readers decide whether to invest 14 minutes partly on who's writing — surfacing that early respects their time."
            />
          </div>
        </header>

        {/* BODY */}
        <div className="article-body">
          <p>
            For most utility customers, the experience of an affordability crisis arrives in a
            single moment: opening a bill that&apos;s materially higher than last month&apos;s.
            For the National Association of State Utility Consumer Advocates, that moment is the
            end of a chain that starts much earlier — in rate case filings, in capital plan
            approvals, in the way utilities forecast load and propose to recover the cost of
            meeting it.
          </p>

          <p>
            Three of NASUCA&apos;s officers — Moody, Content, and Swinger — sat down with{' '}
            <em>Public Utilities Fortnightly</em> to discuss what affordability looks like in
            2026, and what advocates are asking for as the sector enters a period of genuinely
            unprecedented capital deployment.
          </p>

          <h2>The new affordability math</h2>

          <p>
            The headline pressure on residential rates comes from three directions at once.
            Distribution capital is up because utilities are catching up on infrastructure
            previously deferred. Generation capital is up because of large new commitments to
            grid-connected storage and firm capacity. And the load forecast itself has become
            volatile in a way the sector hasn&apos;t seen since the early 1990s, driven by AI
            data centers, transportation electrification, and reshoring of US industrial demand.
          </p>

          {/* FIRST DATA VIZ - the rate base trend */}
          <figure className="article-figure data-viz">
            <div className="figure-label">Figure 1 · Source: SEPA analysis of FERC Form 1, 2018–2025</div>
            <div className="figure-frame">
              <div className="dataviz-placeholder">
                <div className="dataviz-title">US investor-owned utility rate base, 2018–2025</div>
                <div className="dataviz-axis">$ trillion (cumulative)</div>
                {/* Simple inline SVG chart - not a real chart library, just a placeholder */}
                <svg viewBox="0 0 600 240" className="dataviz-svg" preserveAspectRatio="none">
                  <line x1="50" y1="200" x2="580" y2="200" stroke="var(--line)" strokeWidth="1" />
                  <line x1="50" y1="40" x2="50" y2="200" stroke="var(--line)" strokeWidth="1" />
                  {/* Bars */}
                  {[
                    { x: 70, h: 80, label: '2018' },
                    { x: 140, h: 92, label: '2019' },
                    { x: 210, h: 100, label: '2020' },
                    { x: 280, h: 110, label: '2021' },
                    { x: 350, h: 122, label: '2022' },
                    { x: 420, h: 138, label: '2023' },
                    { x: 490, h: 152, label: '2024' },
                    { x: 560, h: 168, label: '2025' },
                  ].map((b, i) => (
                    <g key={i}>
                      <rect
                        x={b.x - 18}
                        y={200 - b.h}
                        width="36"
                        height={b.h}
                        fill={i >= 5 ? 'var(--accent)' : 'var(--ink-2)'}
                      />
                      <text x={b.x} y={218} fontSize="10" fill="var(--ink-3)" textAnchor="middle">{b.label}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="figure-caption">
                Rate base growth accelerated from a 5.4% annual pace (2018–2022) to a 10.7% annual
                pace (2023–2025), with the bulk concentrated in distribution and generation
                investments.
              </div>
            </div>
            <Annotation
              number={27}
              note="Data visualization placeholder — labeled, captioned, and sourced even in wireframe form. Establishes the editorial discipline: every chart leads with what it shows, not how it was built."
            />
          </figure>

          <p>
            Each of those drivers has a defensible justification on its own. The problem,
            according to Moody, is that they all hit the rate base in the same five-year window.
          </p>

          {/* PULL QUOTE */}
          <div className="article-pullquote">
            <div className="text">
              &ldquo;If every project is justified on its own, but together they double the
              average bill, then the question isn&apos;t whether each project is reasonable.
              It&apos;s who pays for them and on what timeline.&rdquo;
            </div>
            <div className="attr">— Michael Moody, NASUCA President</div>
          </div>

          <h2>What advocates are asking for</h2>

          <p>
            Across the conversation, three asks emerged that advocates are bringing to commissions
            in 2026, with varying degrees of acceptance.
          </p>

          <p>
            <strong>First, separate cost causation.</strong> When a utility brings forward a large
            customer with a 100+ MW load profile, advocates want the cost of serving that customer
            allocated to the customer, not socialized into the residential class. SEPA&apos;s{' '}
            <Link href="/research">Large Load Playbook</Link> proposed a four-principle framework
            for this in early 2026; NASUCA was among the first organizations to formally endorse
            it.
          </p>

          {/* INLINE PHOTO - mid-article, breaks up the read */}
          <figure className="article-figure inline-photo">
            <div className="figure-frame photo">
              <div className="photo-placeholder">
                Photo · NASUCA leadership at the 2025 annual meeting
              </div>
              <div className="figure-caption">
                Moody, Content, and Swinger at NASUCA&apos;s November 2025 annual meeting in
                Phoenix. The cost-causation principle was first drafted in the conference&apos;s
                rate-design working session.
              </div>
            </div>
          </figure>

          <p>
            <strong>Second, transparent forecasting.</strong> Advocates have grown skeptical of
            integrated resource plans that show load growth driven by &ldquo;assumed&rdquo; large
            customer additions. Content notes that several states have moved to require utilities
            to show signed contracts before load growth from data centers can be used to justify
            new generation.
          </p>

          <p>
            <strong>Third, longer recovery periods.</strong> Where capital is genuinely needed,
            advocates are arguing for amortization periods that match the asset life rather than
            shorter periods that compress recovery into the next two rate cases. This is less
            visible to customers month-to-month but materially changes the bill trajectory.
          </p>

          <h2>The political ground</h2>

          <p>
            Affordability has become the ground on which the politics of the energy transition
            are being fought. Swinger argues that it&apos;s also the ground on which the
            transition can be defended — if the conversation stays grounded in evidence rather
            than rhetoric.
          </p>

          <div className="article-pullquote">
            <div className="text">
              &ldquo;You can&apos;t out-message a bill increase. You can only out-evidence it.
              That means showing your work, not just defending the outcome.&rdquo;
            </div>
            <div className="attr">— Anthony Swinger, NASUCA Treasurer</div>
          </div>

          {/* SECOND DATA VIZ - residential bill composition */}
          <figure className="article-figure data-viz">
            <div className="figure-label">Figure 2 · Source: SEPA member survey, n=84 IOUs, 2025</div>
            <div className="figure-frame">
              <div className="dataviz-placeholder">
                <div className="dataviz-title">Drivers of projected residential bill increase, 2026–2030</div>
                <div className="dataviz-axis">% of forecast bill increase by category</div>
                <svg viewBox="0 0 600 220" className="dataviz-svg" preserveAspectRatio="none">
                  {/* Stacked horizontal bars showing composition */}
                  {[
                    { y: 30, label: 'Distribution capital', pct: 38, color: 'var(--ink-1)' },
                    { y: 75, label: 'Generation capital', pct: 27, color: 'var(--accent)' },
                    { y: 120, label: 'Storm / resilience', pct: 14, color: 'var(--ink-2)' },
                    { y: 165, label: 'Operating costs', pct: 11, color: 'var(--ink-3)' },
                  ].map((b, i) => (
                    <g key={i}>
                      <text x="0" y={b.y + 14} fontSize="11" fill="var(--ink-2)">{b.label}</text>
                      <rect x="180" y={b.y} width={b.pct * 7} height="22" fill={b.color} />
                      <text x={185 + b.pct * 7} y={b.y + 16} fontSize="11" fill="var(--ink-1)" fontWeight="500">{b.pct}%</text>
                    </g>
                  ))}
                  {/* Axis */}
                  <line x1="180" y1="200" x2="580" y2="200" stroke="var(--line)" strokeWidth="1" />
                  {[0, 25, 50, 75, 100].map((p) => (
                    <text key={p} x={180 + p * 4} y={216} fontSize="10" fill="var(--ink-3)" textAnchor="middle">{p}%</text>
                  ))}
                </svg>
              </div>
              <div className="figure-caption">
                Distribution capital and generation capital together account for 65% of the
                projected bill increase across the 84 IOUs surveyed — making them the natural
                focus for advocates seeking to flatten the trajectory.
              </div>
            </div>
          </figure>

          <p>
            For NASUCA, the next twelve months will see continued advocacy in front of state
            commissions on cost causation, sharper opposition to load forecasts that assume
            customers who haven&apos;t yet signed, and a push to standardize how affordability
            is measured across regulatory filings — currently a patchwork of metrics that vary
            by state.
          </p>

          <h2>What this means for the sector</h2>

          <p>
            The affordability debate is not a backlash against the energy transition. It&apos;s
            the test the transition has to pass. Sectors that fail this test — that ask customers
            to bear costs they didn&apos;t cause, on timelines they didn&apos;t agree to — lose
            the political support that the transition needs to keep moving.
          </p>

          <p>
            For utilities, that means rate case discipline. For regulators, it means tighter
            scrutiny of forecasts and cost allocation. For advocates, it means continuing to
            translate technical filings into language that the public can engage with. And for
            buyers — particularly the large data center customers driving much of the new load —
            it means accepting that the cost of being served may need to sit closer to the cost
            of serving them.
          </p>
        </div>

        {/* FULL AUTHOR BIOS */}
        <div className="article-author-bios-full">
          <div className="author-bios-label">About the contributors</div>
          <div className="author-bios-grid">
            <div className="author-bio">
              <div className="author-photo" />
              <h4>Michael Moody</h4>
              <div className="author-role">President, NASUCA</div>
              <p>
                Director of the Maryland Office of People&apos;s Counsel since 2019. Previously
                served as senior counsel for the New Jersey Division of Rate Counsel. Frequent
                witness in multi-state rate cases and FERC proceedings.
              </p>
              <a className="author-link">More from Michael →</a>
            </div>
            <div className="author-bio">
              <div className="author-photo" />
              <h4>Tom Content</h4>
              <div className="author-role">Vice President, NASUCA</div>
              <p>
                Executive Director of the Citizens Utility Board of Wisconsin. Former
                Milwaukee Journal Sentinel energy reporter. Published in Energy Law Journal,
                Public Utilities Fortnightly, and Utility Dive.
              </p>
              <a className="author-link">More from Tom →</a>
            </div>
            <div className="author-bio">
              <div className="author-photo" />
              <h4>Anthony Swinger</h4>
              <div className="author-role">Treasurer, NASUCA</div>
              <p>
                Senior advocate with the Tennessee Office of Consumer Affairs. Twenty-year
                career across the Southeast in utility regulation, with a focus on rate design,
                cost allocation, and customer affordability frameworks.
              </p>
              <a className="author-link">More from Anthony →</a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="article-footer">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase', alignSelf: 'center', marginRight: 4 }}>Tagged</span>
            <a className="article-tag">Affordability</a>
            <a className="article-tag">Regulatory</a>
            <a className="article-tag">Consumer Advocacy</a>
            <a className="article-tag">Rate Design</a>
          </div>
          <ShareButtons title="Power to the People — Fortnightly" />
        </div>
      </article>

      {/* RELATED */}
      <section className="article-related" style={{ background: 'var(--bg)' }}>
        <div className="article-related-head">
          <div className="label">Continue reading</div>
          <h3>Related work across SEPA</h3>
        </div>
        <div className="article-related-grid">
          <Link href="/research" className="research-card" style={{ background: 'var(--paper)' }}>
            <div className="research-label">Flagship Report · SEPA Research</div>
            <h3>The Large Load Playbook</h3>
            <p>The cross-jurisdictional rate-design framework cited in the article.</p>
            <div className="meta">
              <span>42 pages</span>
              <span>Apr 2026</span>
            </div>
          </Link>
          <Link href="/fortnightly" className="research-card" style={{ background: 'var(--paper)' }}>
            <div className="research-label">Fortnightly · April 2026</div>
            <h3>What&apos;s ahead with commission chairs</h3>
            <p>A roundtable with five state commission chairs on rate design and data centers.</p>
            <div className="meta">
              <span>10 min read</span>
              <span>PUF Editorial</span>
            </div>
          </Link>
          <Link href="/convene" className="research-card" style={{ background: 'var(--paper)' }}>
            <div className="research-label">Convening · May 14, 2026</div>
            <h3>Large Load Tariff Principles, Session 4</h3>
            <p>The working group meeting where the principles cited above are being refined.</p>
            <div className="meta">
              <span>Members only</span>
              <span>Virtual</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
