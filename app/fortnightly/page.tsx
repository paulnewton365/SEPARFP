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
              'An editorial publication covering the US utility sector. A publication of the Smart Electric Power Alliance.',
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

      {/* MASTHEAD - publication identity, neutral on brand architecture */}
      <header className="fn-masthead">
        <div className="fn-masthead-inner">
          <div className="fn-masthead-mark">
            <div className="fn-wordmark">Public Utilities <em>Fortnightly</em></div>
            <div className="fn-since">Since 1928 · A publication of the Smart Electric Power Alliance</div>
            <Annotation
              number={38}
              note="A consistent name across the masthead, the metadata, and every reference. Naming is one of the levers the RFP names directly — fragmented identifiers fragment brand recall, search authority, and AI discoverability. The brand-architecture decision (sub-brand, endorsed brand, or other) is one of the strategic outcomes of the work ahead; this masthead identifies the relationship without pre-committing to a model."
            />
          </div>
          <div className="fn-masthead-issue">
            <div className="fn-issue-num">Issue 4</div>
            <div className="fn-issue-vol">Vol. 164 · April 2026</div>
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
            note="A publication needs to declare what it is in its own front matter so readers and AI engines can place it. Three short statements — what it is, who it is for, what makes it distinctive — answer the orientation questions before any article appears. Maps to RFP language around being sought out as a go-to authority and discoverability across traditional and AI search."
          />
        </div>
      </section>

      {/* EDITORIAL BRIEF - publication voice, the lead argument */}
      <section className="fn-brief">
        <div className="fn-brief-inner">
          <div className="fn-brief-eyebrow">Editorial brief</div>
          <h3 className="fn-brief-headline">
            What this issue argues.
          </h3>
          <div className="fn-brief-body">
            <p>
              The affordability conversation is reaching a tipping point. NASUCA&apos;s
              endorsement of the Large Load Tariff principles in early April changed the
              temperature in twelve open dockets. The lead this issue makes the case
              that the next eighteen months will be decided by whether utilities,
              regulators, and consumer advocates can hold the same line on cost causation
              across jurisdictions.
            </p>
            <p>
              The Schopenhauer piece on rate-case timing is the companion. Together they
              make the argument the issue would make if it only had one to make.
            </p>
          </div>
          <div className="fn-brief-reads">
            <div className="fn-brief-reads-label">Reads in this argument</div>
            <ul>
              <li><Link href="/fortnightly/large-load-playbook">Power to the People: NASUCA on affordability</Link> · 14 min</li>
              <li>Schopenhauer on the rate case clock · 9 min</li>
              <li>The five commission chairs who will define 2026 · 10 min</li>
            </ul>
          </div>
          <Annotation
            number={39}
            note="A publication's central job is editorial judgment — naming what matters, why, and what reads compose the argument. The brief carries publication voice rather than a personal letter so the editorial position is the publication's, not one editor's. Maps to RFP language around proactive narrative leadership."
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
            note="Editorial-first layout. One lead, one image, real bylines. The most consequential argument carries the most visual weight, so a reader can see what the publication considers most important first. Maps to RFP language around proactive narrative leadership."
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
              note="Structured topic clusters with consistent tagging give AI engines clean entities to anchor citations. Each topic page becomes an authoritative endpoint that LLMs can quote. Schema.org markup is embedded in the page source so the publication is machine-readable as a NewsMediaOrganization. Maps directly to RFP success criteria around discoverability across traditional and AI search."
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
              Founded 1928. A publication of the Smart Electric Power Alliance.
              Editorial offices in Reston, VA and New York, NY.
            </p>
          </div>
          <div className="fn-colophon-block">
            <div className="fn-colophon-label">Editorial</div>
            <ul>
              <li>Editorial standards</li>
              <li>Submit a pitch</li>
              <li>Reprints &amp; permissions</li>
              <li>Advertise in PUF</li>
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
