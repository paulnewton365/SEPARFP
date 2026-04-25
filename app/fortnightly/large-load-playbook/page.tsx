import Link from 'next/link';
import { Annotation } from '@/components/Annotation';
import { ShareButtons } from '@/components/SocialIcons';

export default function ArticlePage() {
  return (
    <>
      {/* META BAR - back link, reading time, share */}
      <div className="article-meta-bar">
        <div className="article-meta-bar-inner">
          <Link href="/fortnightly">← Fortnightly</Link>
          <div style={{ color: 'var(--ink-3)', display: 'flex', gap: 16, alignItems: 'center' }}>
            <span>14 min read</span>
            <ShareButtons title="Power to the People — Fortnightly" />
          </div>
        </div>
      </div>

      {/* ARTICLE */}
      <article className="article">
        <header className="article-header">
          {/* TAGS - up top, signal what this is before you read it */}
          <div className="article-tags">
            <a className="article-tag">Affordability</a>
            <a className="article-tag">Regulatory</a>
            <a className="article-tag">Consumer Advocacy</a>
            <a className="article-tag">Rate Design</a>
            <Annotation
              number={25}
              note="Tags up front act as both signal and filter. Click any tag to see other articles. Progressive disclosure: tags tell you the article's territory before the headline asks for your time."
            />
          </div>

          <h1 className="article-title">
            Power to the People: NASUCA on affordability
          </h1>

          {/* DECK - the standfirst, written to earn the next 14 minutes */}
          <p className="article-deck">
            The nation&apos;s consumer advocates sit at the table where utility affordability
            gets decided. Three of their leaders tell PUF what it takes to hold that line now
            that load growth, data centers, and capital costs are rewriting the rate case math
            at the same time.
          </p>

          <div className="article-byline-row">
            <div className="article-byline">
              <div className="article-byline-avatar" />
              <div>
                <div className="name">Michael Moody, Tom Content &amp; Anthony Swinger</div>
                <div className="meta">Published April 2026 · Vol. 164 · Issue 4</div>
              </div>
            </div>
            <ShareButtons title="Power to the People — Fortnightly" />
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
            Three of NASUCA&apos;s officers — president Michael Moody, vice president Tom Content,
            and treasurer Anthony Swinger — sat down with <em>Public Utilities Fortnightly</em> to
            discuss what affordability looks like in 2026, and what advocates are asking for as
            the sector enters a period of genuinely unprecedented capital deployment.
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
            for this in early 2026; NASUCA was among the first organizations to formally endorse it.
          </p>

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

        {/* AUTHOR BIO */}
        <div className="article-author-bio">
          <div className="photo" />
          <div>
            <div className="label">About the authors</div>
            <h4>Michael Moody, Tom Content &amp; Anthony Swinger</h4>
            <p>
              Michael Moody is President of NASUCA and Director of the Maryland Office of People&apos;s
              Counsel. Tom Content is Vice President of NASUCA and Executive Director of the
              Citizens Utility Board of Wisconsin. Anthony Swinger is Treasurer of NASUCA and a
              senior advocate with the Tennessee Office of Consumer Affairs.
            </p>
            <div className="links">
              <a>Read more from Michael Moody →</a>
              <a>About NASUCA →</a>
            </div>
          </div>
        </div>

        {/* ARTICLE FOOTER - share + tags */}
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

      {/* RELATED CONTENT - cross-link to research and other articles */}
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
