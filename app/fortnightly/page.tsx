'use client';

import { Annotation } from '@/components/Annotation';
import Link from 'next/link';

export default function FortnightlyPage() {
  return (
    <div className="fn-page">
      {/* JSON-LD schema for AI discoverability — visible response to RFP critique #7 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsMediaOrganization',
            name: 'Public Utilities Fortnightly',
            alternateName: 'PUF',
            url: 'https://separfp.vercel.app/fortnightly',
            foundingDate: '1928',
            parentOrganization: {
              '@type': 'NonprofitOrganization',
              name: 'Smart Electric Power Alliance',
            },
            description:
              'An independent editorial publication covering the US utility sector. Editorially independent. Published by SEPA.',
          }),
        }}
      />

      {/* Return path to SEPA */}
      <div className="fn-topstrip">
        <div className="fn-topstrip-inner">
          <Link href="/" className="fn-back">← SEPA</Link>
          <span>April 2026 · Vol. 164 · Issue 4</span>
        </div>
      </div>

      {/* MASTHEAD - one name (response to critique #2) + clear endorsement (#4) */}
      <header className="fn-masthead">
        <div className="fn-masthead-inner">
          <div className="fn-masthead-mark">
            <div className="fn-wordmark">Public Utilities <em>Fortnightly</em></div>
            <div className="fn-since">Since 1928</div>
            <Annotation
              number={38}
              note="One name only. The masthead is 'Public Utilities Fortnightly' everywhere — no fragmentation across PUF, fortnightly.com, and Public Utilities Fortnightly. PUF survives only as a conversational shorthand inside body copy. The current site uses three names interchangeably and the resulting brand recall, search authority, and architecture all suffer."
            />
          </div>
          <div className="fn-masthead-relationship">
            <div className="fn-relationship-label">The relationship</div>
            <div className="fn-relationship-statement">
              <strong>Editorially independent.</strong><br />
              <span>Published by the Smart Electric Power Alliance.</span>
            </div>
            <Annotation
              number={39}
              note="'Powered by SEPA' on the current site reads as ownership and leaves editorial independence ambiguous. The new framing is explicit: Fortnightly's editor sets the agenda; SEPA does not direct content. The relationship is endorsement, not editorial control."
            />
          </div>
        </div>
      </header>

      {/* POSITIONING - response to critique #3 (homepage doesn't introduce) */}
      <section className="fn-positioning">
        <div className="fn-positioning-inner">
          <div className="fn-positioning-eyebrow">What this is</div>
          <h2 className="fn-positioning-statement">
            The record of how the US utility sector argues with itself <em>—</em> and with its future.
          </h2>
          <p className="fn-positioning-body">
            A near-century-old editorial property covering rate cases, regulatory shifts,
            and the strategic choices the sector is making now. Read by commission chairs,
            utility CEOs, and the policy class shaping what comes next.
          </p>
          <Annotation
            number={40}
            note="The current Fortnightly homepage is a content feed without orientation. New visitors have no way to know what PUF is, who reads it, or what makes it different. This positioning section answers those three questions in three lines, before any article appears."
          />
        </div>
      </section>

      {/* EDITOR'S LETTER - response to critique #1 (express editorial judgment) */}
      <section className="fn-editor">
        <div className="fn-editor-inner">
          <div className="fn-editor-grid">
            <div className="fn-editor-portrait">
              <span>Photo · Rachel Bryant</span>
            </div>
            <div className="fn-editor-body">
              <div className="fn-editor-eyebrow">From the editor</div>
              <h3 className="fn-editor-headline">
                What matters this week, why, and what to read after.
              </h3>
              <p>
                The affordability conversation is reaching a tipping point. NASUCA&apos;s
                endorsement of the Large Load Tariff principles in early April changed the
                temperature in twelve open dockets. This week we lead with that story
                because the next eighteen months will be decided by whether utilities,
                regulators, and consumer advocates can hold the same line on cost causation
                across jurisdictions.
              </p>
              <p>
                After you read it, the Schopenhauer piece on rate-case timing is the
                companion. Together they make the argument we&apos;d make if we only had
                one to make.
              </p>
              <div className="fn-editor-attr">
                <strong>Rachel Bryant</strong>, Editor-in-Chief
              </div>
            </div>
          </div>
          <Annotation
            number={41}
            note="Every issue opens with a named editor making a case. 'This matters most this week, here's why, and here's what to read after.' Replaces the current homepage's flat content distribution with explicit editorial judgment — the central job of any publication."
          />
        </div>
      </section>

      {/* LEAD STORY */}
      <section className="fn-lead-section">
        <div className="fn-lead-inner">
          <div className="fn-issue-label">Lead feature · Affordability</div>
          <Link href="/fortnightly/large-load-playbook" className="fn-lead-card">
            <div className="fn-lead-img">
              <span>Photo · Affordability cover image</span>
            </div>
            <div className="fn-lead-body">
              <div className="fn-tag-row">
                <span className="fn-tag">Affordability</span>
                <span className="fn-tag">Regulatory</span>
                <span className="fn-tag">Rate Design</span>
              </div>
              <h2>Power to the People: NASUCA on affordability</h2>
              <p className="fn-deck">
                The nation&apos;s consumer advocates sit at the table where utility
                affordability gets decided. Three of their leaders tell PUF what it takes
                to hold that line now that load growth, data centers, and capital costs
                are rewriting the rate case math at the same time.
              </p>
              <div className="fn-byline">
                <span>By Michael Moody, Tom Content &amp; Anthony Swinger</span>
                <span className="fn-read-time">14 min read</span>
              </div>
            </div>
          </Link>
          <Annotation
            number={16}
            note="Editorial-first layout. One lead, one image, real bylines. Replaces the typical magazine homepage with dozens of thumbnail cards and no editorial hierarchy."
          />
        </div>
      </section>

      {/* THIS ISSUE */}
      <section className="fn-issue-section">
        <div className="fn-issue-inner">
          <div className="fn-issue-head">
            <div>
              <div className="fn-issue-label">In this issue</div>
              <h3>Five more from April 2026.</h3>
            </div>
            <Link href="#" className="fn-link-arrow">View the full issue →</Link>
          </div>

          <div className="fn-issue-grid">
            <article className="fn-article">
              <div className="fn-article-img"><span>Photo</span></div>
              <div className="fn-tag-row">
                <span className="fn-tag">Rate Design</span>
              </div>
              <h4>Schopenhauer on the rate case clock: A meditation on amortization</h4>
              <p>How recovery periods quietly compound — or contain — affordability pressure.</p>
              <div className="fn-byline">
                <span>By Steven Mitnick</span>
                <span className="fn-read-time">9 min</span>
              </div>
            </article>

            <article className="fn-article">
              <div className="fn-article-img"><span>Photo</span></div>
              <div className="fn-tag-row">
                <span className="fn-tag">Capital Markets</span>
              </div>
              <h4>The infrastructure bond market in 2026: Capital, but at a price</h4>
              <p>Utility CFOs on what the new cost of capital does to project pipelines.</p>
              <div className="fn-byline">
                <span>By Diana Murphy</span>
                <span className="fn-read-time">11 min</span>
              </div>
            </article>

            <article className="fn-article">
              <div className="fn-article-img"><span>Photo</span></div>
              <div className="fn-tag-row">
                <span className="fn-tag">Regulatory</span>
              </div>
              <h4>The five commission chairs who will define 2026</h4>
              <p>A roundtable on rate design, data centers, and the limits of state authority.</p>
              <div className="fn-byline">
                <span>By PUF Editorial</span>
                <span className="fn-read-time">10 min</span>
              </div>
            </article>

            <article className="fn-article">
              <div className="fn-article-img"><span>Photo</span></div>
              <div className="fn-tag-row">
                <span className="fn-tag">Workforce</span>
              </div>
              <h4>Who builds the grid of 2030? A workforce shortage we can name</h4>
              <p>Lineworkers, planners, engineers — the bench is thinner than the capital plan assumes.</p>
              <div className="fn-byline">
                <span>By Howard Axelrod</span>
                <span className="fn-read-time">8 min</span>
              </div>
            </article>

            <article className="fn-article">
              <div className="fn-article-img"><span>Photo</span></div>
              <div className="fn-tag-row">
                <span className="fn-tag">Reliability</span>
              </div>
              <h4>After the storm: What 2025&apos;s outage record actually tells us</h4>
              <p>Five utilities, five different operating realities, one shared inflection point.</p>
              <div className="fn-byline">
                <span>By Janet Swain</span>
                <span className="fn-read-time">12 min</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TOPIC CLUSTERS - response to critique #7 (AI discoverability) */}
      <section className="fn-topics">
        <div className="fn-topics-inner">
          <div className="fn-topics-head">
            <div className="fn-issue-label">Browse by topic</div>
            <h3>What we cover, in clusters.</h3>
            <p className="fn-topics-blurb">
              Topics are tagged consistently across every article, with structured metadata
              that AI engines and search platforms can read cleanly. Click any cluster to
              see everything PUF has published in that conversation.
            </p>
            <Annotation
              number={42}
              note="Structured topic clusters with consistent tagging address AI discoverability head-on. Every article carries schema.org markup (visible in page source). Each topic page is a clean entity that LLMs can cite. The current site has none of this — AI engines have nothing clean to anchor to."
            />
          </div>
          <div className="fn-topics-grid">
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Affordability</div>
              <div className="fn-topic-count">42 articles</div>
            </Link>
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Rate Design</div>
              <div className="fn-topic-count">86 articles</div>
            </Link>
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Regulatory</div>
              <div className="fn-topic-count">128 articles</div>
            </Link>
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Capital Markets</div>
              <div className="fn-topic-count">54 articles</div>
            </Link>
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Reliability</div>
              <div className="fn-topic-count">71 articles</div>
            </Link>
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Workforce</div>
              <div className="fn-topic-count">38 articles</div>
            </Link>
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Data Centers</div>
              <div className="fn-topic-count">24 articles</div>
            </Link>
            <Link href="#" className="fn-topic-card">
              <div className="fn-topic-name">Consumer Advocacy</div>
              <div className="fn-topic-count">31 articles</div>
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="fn-subscribe">
        <div className="fn-subscribe-inner">
          <div className="fn-issue-label">The publication</div>
          <h2>Read every issue. Cited in every docket.</h2>
          <p>
            Public Utilities Fortnightly publishes monthly in print and continuously online.
            Subscribers receive every issue, the full archive, and the policy briefings
            we send between issues.
          </p>
          <div className="fn-subscribe-cta">
            <button className="btn btn-primary">Subscribe</button>
            <Link href="/login" className="fn-link-arrow">Already a subscriber? Sign in →</Link>
          </div>
        </div>
      </section>

      {/* COLOPHON / FOOTER */}
      <footer className="fn-colophon">
        <div className="fn-colophon-inner">
          <div className="fn-colophon-block">
            <div className="fn-colophon-label">Public Utilities Fortnightly</div>
            <p>
              Founded 1928. Editorially independent. Published by the Smart Electric Power
              Alliance. Editorial offices in Reston, VA and New York, NY.
            </p>
          </div>
          <div className="fn-colophon-block">
            <div className="fn-colophon-label">Editorial</div>
            <ul>
              <li><strong>Rachel Bryant</strong> · Editor-in-Chief</li>
              <li>Editorial standards</li>
              <li>Submit a pitch</li>
              <li>Reprints &amp; permissions</li>
            </ul>
          </div>
          <div className="fn-colophon-block">
            <div className="fn-colophon-label">SEPA</div>
            <ul>
              <li><Link href="/">SEPA homepage</Link></li>
              <li><Link href="/about">About SEPA</Link></li>
              <li><Link href="/convene">Membership</Link></li>
              <li><Link href="/research">Research</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
