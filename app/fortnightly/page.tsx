'use client';

import { Annotation } from '@/components/Annotation';
import Link from 'next/link';

export default function FortnightlyPage() {
  return (
    <div className="fn-page">
      {/* Return path to SEPA - important for users landing here directly */}
      <div style={{
        padding: '14px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 500,
        }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
            ← SEPA
          </Link>
          <span>Public Utilities Fortnightly</span>
        </div>
      </div>

      {/* MASTHEAD */}
      <header className="fn-masthead">
        <div className="fn-masthead-inner">
          <div>
            <div className="fn-wordmark">Fortnightly</div>
          </div>
          <div className="fn-tagline">
            <div className="since">Public Utilities Fortnightly · Since 1928</div>
            The record of how the US utility sector<br />
            argues with itself, and with its future.
            <div className="endorsed">
              A SEPA publication
              <Annotation
                number={15}
                note="The Fortnightly page tests the sub-brand hypothesis from the deck: PUF keeps its masthead and editorial voice, but the SEPA endorsement is clear and intentional, not hidden."
              />
            </div>
          </div>
        </div>
      </header>

      {/* ISSUE BAR */}
      <div className="fn-issue-bar">
        <div className="fn-issue-bar-inner">
          <div>
            Current issue · <strong>Vol. 164 · Issue 4 · April 2026</strong>
          </div>
          <div>The Affordability Issue</div>
        </div>
      </div>

      {/* LEAD FEATURE */}
      <section className="fn-lead">
        <div className="fn-lead-inner">
          <div className="fn-lead-img">
            Cover image · Affordability
          </div>
          <div>
            <div className="fn-lead-cat">Lead feature · Affordability</div>
            <h2>
              Power to the People: NASUCA on affordability
              <Annotation
                number={16}
                note="Editorial-first layout. One lead, one image, real bylines. Directly answers the current fortnightly.com problem: dozens of thumbnail-and-link cards with no editorial hierarchy."
              />
            </h2>
            <p>
              The nation&apos;s consumer advocates sit at the table where utility affordability
              gets decided. Their president, vice president, and treasurer tell PUF what it takes
              to hold that line now that load growth, data centers, and capital costs are
              rewriting the rate case math at the same time.
            </p>
            <p>
              A roundtable on what&apos;s at stake, what advocates are asking for, and where the
              regulatory conversation is headed in the next eighteen months.
            </p>
            <div className="byline">
              <strong>Michael Moody, Tom Content &amp; Anthony Swinger</strong> &middot; 14 min read
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="fn-section">
        <div className="fn-section-inner">
          <div className="fn-section-head">
            <h3>In this issue</h3>
            <div className="label">Six features</div>
          </div>
          <div className="fn-grid-3">
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">AI for Affordability</div>
              <h4>Three ways AI can help deliver more power at lower costs</h4>
              <div className="pull">
                Utilities and grid operators are deploying new AI and ML tools to improve what was
                once un-improvable: dispatch, forecasting, and asset management under pressure.
              </div>
              <div className="byline">Lesley Jantarasami &amp; Jeff Guldner</div>
            </article>
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">Accenture · CIO Mandate</div>
              <h4>The new CIO mandate: Using AI to bend the utility cost curve</h4>
              <div className="pull">
                Affordability is the outcome regulators and customers care about. For the utility
                CIO, it&apos;s increasingly the KPI. What the math actually looks like.
              </div>
              <div className="byline">Debanjan Chakraborty, Miguel Torreira &amp; Jim Mazurek</div>
            </article>
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">Regulatory</div>
              <h4>What&apos;s ahead with commission chairs</h4>
              <div className="pull">
                A roundtable with the chairs of five state commissions on rate design, data
                centers, and the pressure points they&apos;re watching in the second half of 2026.
              </div>
              <div className="byline">PUF Editorial</div>
            </article>
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">AGA · Regulatory Compact</div>
              <h4>Line extension policies and the economics of affordable utility rates</h4>
              <div className="pull">
                By severing the traditional safeguards for reasonable system growth, new policies
                create new math. Juan Alvarado on what&apos;s being lost.
              </div>
              <div className="byline">Juan Alvarado</div>
            </article>
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">DERs and Data Centers</div>
              <h4>FERC Order 2222: Can a good order solve it?</h4>
              <div className="pull">
                FERC Order 2222 opened wholesale markets to aggregated DERs. Three years in,
                what&apos;s actually moved, and where&apos;s the implementation stuck.
              </div>
              <div className="byline">Margarita Patria &amp; Dmitry Balashov</div>
            </article>
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">Grid Data · Practical Tools</div>
              <h4>Better grid data can speed up EV charger deployment</h4>
              <div className="pull">
                Hosting capacity analysis maps can be the practical tool that turns EV charger
                siting from a guessing game into a planning exercise.
              </div>
              <div className="byline">Catelyn Sweeney</div>
            </article>
          </div>
        </div>
      </section>

      {/* VOICES */}
      <section className="fn-section">
        <div className="fn-section-inner">
          <div className="fn-section-head">
            <h3>Voices</h3>
            <div className="label">Author-forward</div>
          </div>
          <div className="fn-grid-2">
            <div className="fn-voice">
              <div className="fn-voice-portrait" />
              <div>
                <div className="fn-voice-cat">Transmission Renaissance</div>
                <h5>Tracey LeBeau, WAPA</h5>
                <div className="quote">
                  &ldquo;If this is not the beginning of a transmission renaissance, I don&apos;t
                  know what we are calling the decade we&apos;re in.&rdquo;
                </div>
                <div className="name">Administrator, Western Area Power Administration</div>
              </div>
            </div>
            <div className="fn-voice">
              <div className="fn-voice-portrait" />
              <div>
                <div className="fn-voice-cat">Regulatory Voice</div>
                <h5>Ann Rendahl, NARUC President</h5>
                <div className="quote">
                  &ldquo;One of the best pieces of advice I received was simple: if you do not know
                  the answer, say so. Do the work.&rdquo;
                </div>
                <div className="name">Commissioner, Washington UTC</div>
              </div>
            </div>
            <div className="fn-voice">
              <div className="fn-voice-portrait" />
              <div>
                <div className="fn-voice-cat">Optimism for the Future</div>
                <h5>Sheri Givens on energy leadership</h5>
                <div className="quote">
                  &ldquo;There is no single right path into energy leadership, but there is real
                  value in leaders who have taken a different one.&rdquo;
                </div>
                <div className="name">Consumer advocate &amp; former utility executive</div>
              </div>
            </div>
            <div className="fn-voice">
              <div className="fn-voice-portrait" />
              <div>
                <div className="fn-voice-cat">Orange and Rockland</div>
                <h5>Elizabeth Cook on turning data into action</h5>
                <div className="quote">
                  &ldquo;The Building Energy Usage Portal represents a different theory of what a
                  utility owes its customers.&rdquo;
                </div>
                <div className="name">Director, Customer Energy Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY FROM PUF + ARCHIVE */}
      <section className="fn-section">
        <div className="fn-section-inner">
          <div className="fn-section-head">
            <h3>Where&apos;s energy going</h3>
            <div className="label">Today from PUF</div>
          </div>
          <div className="fn-grid-3">
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">Annual · Top Innovators</div>
              <h4>2025 Fortnightly Top Innovators</h4>
              <div className="pull">
                The people and projects that moved the needle this year, chosen by a panel of
                utility and regulatory leaders.
              </div>
              <div className="byline">PUF Editorial</div>
            </article>
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">Exelon · Interview</div>
              <h4>Fifty million for affordability</h4>
              <div className="pull">
                Exelon COO Mike Innocenzo on the bill-relief programs, what&apos;s working, and
                what&apos;s not.
              </div>
              <div className="byline">Steve Mitnick</div>
            </article>
            <article className="fn-article">
              <div className="fn-article-img" />
              <div className="fn-article-cat">PUF Report</div>
              <h4>PUF&apos;s report on affordability</h4>
              <div className="pull">
                Who is most vulnerable to energy costs? How might the energy system address it?
                The full field report.
              </div>
              <div className="byline">PUF Research</div>
            </article>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="fn-subscribe">
        <div className="fn-subscribe-inner">
          <h2>
            A century in. Still the record.
            <Annotation
              number={17}
              note="The subscribe CTA doubles as positioning. Treats PUF's 98-year track record as the reason to sign up, not a masthead ornament."
            />
          </h2>
          <p>
            Get every issue of Public Utilities Fortnightly, plus the weekly brief, delivered to
            your inbox. No paywall games. Just the work.
          </p>
          <form
            className="fn-subscribe-form"
            onSubmit={(e) => { e.preventDefault(); alert('Subscribed. (Wireframe stub.)'); }}
          >
            <input type="email" placeholder="your@email.com" required />
            <button type="submit">Subscribe</button>
          </form>
          <div style={{ marginTop: 32, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
            Already a subscriber? <Link href="/login" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline' }}>Sign in</Link>.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '40px 24px',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          fontSize: 11,
          color: 'rgba(255,255,255,0.5)',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        <div>Fortnightly · A SEPA publication · © 2026 Lines Up, Inc.</div>
        <div>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>
            ← Back to SEPA
          </Link>
        </div>
      </footer>
    </div>
  );
}
