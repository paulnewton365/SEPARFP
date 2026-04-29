'use client';

import { Annotation } from '@/components/Annotation';
import Link from 'next/link';

export default function FortnightlyPage() {
  return (
    <div className="fn-page">
      {/* JSON-LD schema for AI discoverability */}
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

      {/* Top strip - back to SEPA */}
      <div className="fn-topstrip">
        <div className="fn-topstrip-inner">
          <Link href="/" className="fn-back">← SEPA</Link>
          <span>Public Utilities Fortnightly</span>
        </div>
      </div>

      {/* COMPACT MASTHEAD - publication identity, no issue framing */}
      <header className="fn-masthead-compact">
        <div className="fn-masthead-compact-inner">
          <div className="fn-wordmark">Public Utilities <em>Fortnightly</em></div>
          <div className="fn-tagline">
            The record of how the US utility sector argues with itself <em>—</em> and with its future.
          </div>
          <div className="fn-attribution">A publication of the Smart Electric Power Alliance · Since 1928</div>
          <Annotation
            number={38}
            note="Publication identity in three lines — name, tagline, and attribution. The masthead introduces what this is, what it does, and where it sits, before any content appears. The brand-architecture decision (sub-brand, endorsed brand, or other) is one of the strategic outcomes of the work ahead; this masthead identifies the relationship without pre-committing to a model. Maps to RFP language around being sought out as a go-to authority."
          />
        </div>
      </header>

      {/* LEAD STORY - above the fold */}
      <section className="fn-lead-hero">
        <div className="fn-lead-hero-inner">
          <Link href="/fortnightly/large-load-playbook" className="fn-lead-hero-card">
            <div className="fn-lead-hero-media">
              <span className="fn-lead-hero-media-label">Lead image · Affordability</span>
            </div>
            <div className="fn-lead-hero-body">
              <div className="fn-lead-hero-eyebrow">Lead story · Affordability</div>
              <h1 className="fn-lead-hero-headline">
                Power to the People: NASUCA on affordability
              </h1>
              <p className="fn-lead-hero-deck">
                The nation&apos;s consumer advocates sit at the table where utility
                affordability gets decided. Three of their leaders tell PUF what it takes
                to hold that line now that load growth, data centers, and capital costs
                are rewriting the rate-case math at the same time.
              </p>
              <div className="fn-lead-hero-byline">
                <span>Michael Moody, Tom Content &amp; Anthony Swinger</span>
                <span className="fn-lead-hero-readtime">14 min read</span>
              </div>
              <span className="fn-lead-hero-cta">Read the lead story →</span>
            </div>
          </Link>
          <Annotation
            number={16}
            note="Lead story above the fold. The most consequential argument is the first thing a reader sees — image, headline, deck, byline, and a clear path to read it. Editorial judgment is expressed through placement, not just framing. Maps to RFP language around proactive narrative leadership."
          />
        </div>
      </section>

      {/* WHAT WE ARGUE - publication voice on the lead */}
      <section className="fn-brief">
        <div className="fn-brief-inner">
          <div className="fn-brief-eyebrow">What we argue this week</div>
          <p className="fn-brief-body-single">
            The affordability conversation is reaching a tipping point. NASUCA&apos;s
            endorsement of the Large Load Tariff principles in early April changed the
            temperature in twelve open dockets. The lead this week makes the case that
            the next eighteen months will be decided by whether utilities, regulators,
            and consumer advocates can hold the same line on cost causation across
            jurisdictions. The Schopenhauer piece on rate-case timing is the companion;
            together they make the argument the publication would make if it only had
            one to make.
          </p>
          <Annotation
            number={39}
            note="A short publication-voice argument tying the lead story to the supporting reads. The brief carries the publication's editorial position rather than a personal letter, so the argument is the publication's. Maps to RFP language around proactive narrative leadership."
          />
        </div>
      </section>

      {/* THEMES - what PUF is currently arguing about */}
      <section className="fn-themes">
        <div className="fn-themes-inner">
          <div className="fn-themes-head">
            <div className="fn-section-eyebrow">Themes</div>
            <h2>What we&apos;re arguing about now.</h2>
            <p className="fn-themes-blurb">
              Themes are the active editorial conversations PUF is following.
              Each one runs across multiple stories and resolves into a position
              over time. Click any theme to see every story we&apos;ve published
              in that conversation.
            </p>
          </div>
          <div className="fn-themes-grid">
            <Link href="#" className="fn-theme fn-theme-active">
              <div className="fn-theme-state">Active conversation</div>
              <h3>Affordability</h3>
              <p>The conversation of 2026. Cost causation, rate-case timing, and the limits of what regulators will accept.</p>
              <div className="fn-theme-meta">
                <span>14 stories</span>
                <span className="fn-theme-cta">Read the theme →</span>
              </div>
            </Link>
            <Link href="#" className="fn-theme">
              <div className="fn-theme-state">Active conversation</div>
              <h3>Capital &amp; the cost of building</h3>
              <p>What 7% bond markets and a $1 trillion capex pipeline do to project ranking, ratemaking, and customer bills.</p>
              <div className="fn-theme-meta">
                <span>9 stories</span>
                <span className="fn-theme-cta">Read the theme →</span>
              </div>
            </Link>
            <Link href="#" className="fn-theme">
              <div className="fn-theme-state">Active conversation</div>
              <h3>Reliability after the storms</h3>
              <p>What 2025&apos;s outage record actually tells us about distribution, vegetation management, and the storm-hardening case.</p>
              <div className="fn-theme-meta">
                <span>11 stories</span>
                <span className="fn-theme-cta">Read the theme →</span>
              </div>
            </Link>
            <Link href="#" className="fn-theme">
              <div className="fn-theme-state">Active conversation</div>
              <h3>Demand and the data-center decade</h3>
              <p>How load growth is rewriting the resource plan, the tariff, and the commission&apos;s standard of evidence.</p>
              <div className="fn-theme-meta">
                <span>17 stories</span>
                <span className="fn-theme-cta">Read the theme →</span>
              </div>
            </Link>
          </div>
          <Annotation
            number={43}
            note="Themes are the active editorial conversations PUF is following — distinct from topic clusters, which are the full taxonomic browse. Themes carry editorial judgment (what is worth arguing about now); topics carry discoverability (what we have ever published). Both serve the RFP language around being sought out as a go-to authority and discoverability across traditional and AI search."
          />
        </div>
      </section>

      {/* CONTENT STORIES */}
      <section className="fn-stories">
        <div className="fn-stories-inner">
          <div className="fn-stories-head">
            <div>
              <div className="fn-section-eyebrow">Content stories</div>
              <h2>The reads building the conversation.</h2>
            </div>
            <Link href="#" className="fn-link-arrow">View all stories →</Link>
          </div>

          <div className="fn-stories-grid">
            <article className="fn-article">
              <div className="fn-article-img"><span>Photo</span></div>
              <div className="fn-tag-row">
                <span className="fn-tag">Rate Design</span>
              </div>
              <h4>Schopenhauer on the rate-case clock: A meditation on amortization</h4>
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

            <article className="fn-article">
              <div className="fn-article-img"><span>Photo</span></div>
              <div className="fn-tag-row">
                <span className="fn-tag">Affordability</span>
              </div>
              <h4>What NASUCA&apos;s endorsement actually changes</h4>
              <p>The procedural mechanics of why a single endorsement is moving twelve dockets.</p>
              <div className="fn-byline">
                <span>By PUF Editorial</span>
                <span className="fn-read-time">7 min</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TOPIC CLUSTERS - browse by topic */}
      <section className="fn-topics">
        <div className="fn-topics-inner">
          <div className="fn-topics-head">
            <div className="fn-section-eyebrow">Browse by topic</div>
            <h2>The full library, by topic.</h2>
            <p className="fn-topics-blurb">
              Topics are the taxonomic browse across everything PUF has published.
              Each topic page is a clean entity with consistent tagging and structured
              metadata, so AI engines and search platforms have something authoritative
              to anchor citations to.
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
          <div className="fn-section-eyebrow">The publication</div>
          <h2>Read every story. Cited in every docket.</h2>
          <p>
            Public Utilities Fortnightly publishes monthly in print and continuously online.
            Subscribers receive every story, the full archive, and the policy briefings
            we send between issues.
          </p>
          <div className="fn-subscribe-cta">
            <button className="btn btn-primary">Subscribe</button>
            <Link href="/login" className="fn-link-arrow">Already a subscriber? Sign in →</Link>
          </div>
        </div>
      </section>

      {/* COLOPHON */}
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
