import Link from 'next/link';
import { Annotation } from '@/components/Annotation';
import { ArenaSwitcher } from '@/components/ArenaSwitcher';

export interface ArenaImpactStat {
  num: string;
  label: string;
}

export interface ArenaSpotlight {
  quote: string;
  name: string;
  role: string;
  org: string;
  tag: string;
  tagColor: 'utility' | 'regulator' | 'provider' | 'buyer';
}

export interface ArenaTopic {
  title: string;
  blurb: string;
  meta: string;
}

export interface ArenaResearch {
  label: string;
  title: string;
  blurb: string;
  meta: string[];
  feature?: boolean;
}

export interface ArenaWorkingGroup {
  name: string;
  count: string;
  desc: string;
}

export interface ArenaPageProps {
  slug: 'grid' | 'growth' | 'globe';
  label: string;
  number: '01' | '02' | '03';
  heroHeadline: React.ReactNode;
  heroLead: string;
  impact: ArenaImpactStat[];
  topics: ArenaTopic[];
  spotlights: ArenaSpotlight[];
  research: ArenaResearch[];
  workingGroups: ArenaWorkingGroup[];
  membersLeading: { headline: string; logos: string[] };
}

export function ArenaPage(props: ArenaPageProps) {
  return (
    <>
      {/* Peer arena switcher - all three always visible */}
      <ArenaSwitcher showAnnotation={props.slug === 'grid'} />

      {/* HERO - dark inverted, parallel to membership page */}
      <section className={`arena-hero arena-hero-${props.slug}`}>
        <div className="arena-hero-inner">
          <div className="arena-hero-meta">
            <span className="arena-hero-num">Arena {props.number}</span>
            <span className="arena-hero-name">{props.label}</span>
          </div>
          <h1>{props.heroHeadline}</h1>
          <p className="lead">{props.heroLead}</p>
        </div>
      </section>

      {/* IMPACT STRIP - what this arena produces, in numbers */}
      <section className="section" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="section-inner">
          <div className="eyebrow">The work, in numbers</div>
          <h2 className="impact-title">What members shaping {props.label.toLowerCase()} produce.</h2>

          <div className="member-impact-strip">
            {props.impact.map((s) => (
              <div key={s.label} className="member-impact-stat">
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS - what's inside this arena */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">What this arena covers</div>
            <h2>The conversations underway.</h2>
          </div>
          <div className="arena-topics-grid">
            {props.topics.map((t) => (
              <div key={t.title} className="arena-topic">
                <h4>{t.title}</h4>
                <p>{t.blurb}</p>
                <div className="arena-topic-meta">{t.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHTS - members on stage, parallel to membership page */}
      <section className="section">
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Members on stage</div>
            <h2>Who&apos;s shaping {props.label.toLowerCase()} right now.</h2>
            {props.slug === 'grid' && (
              <p className="lede" style={{ maxWidth: 680 }}>
                Three members on what they brought to the room and what they took back.
                <Annotation
                  number={43}
                  note="The three arena pages share a common layout rhythm — hero, impact, spotlights, working groups — so a reader learns the structure once and applies it to whichever arena they care about most. Maps to RFP language around a unified digital experience."
                />
              </p>
            )}
          </div>
          <div className="spotlights-grid spotlights-grid-3">
            {props.spotlights.map((s) => (
              <article key={s.name} className="spotlight spotlight-vertical">
                <div className="spotlight-media">
                  <span className="spotlight-media-label">Photo · {s.name}</span>
                </div>
                <div className="spotlight-body">
                  <div className="spotlight-quote">&ldquo;{s.quote}&rdquo;</div>
                  <div className="spotlight-attr">
                    <div className="name">{s.name}</div>
                    <div className="role">{s.role}</div>
                    <div className="org">{s.org}</div>
                  </div>
                  <div className="spotlight-foot">
                    <span className={`role-tag role-${s.tagColor}`}>{s.tag}</span>
                    <span className="spotlight-link">Read the story →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING GROUPS in this arena */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Where the work happens</div>
            <h2>Active working groups in {props.label.toLowerCase()}.</h2>
          </div>
          <div className="working-groups-list">
            {props.workingGroups.map((wg) => (
              <div key={wg.name} className="working-group">
                <div className="wg-count">{wg.count}</div>
                <div className="wg-body">
                  <h4>{wg.name}</h4>
                  <p>{wg.desc}</p>
                </div>
                <Link href="/convene" className="wg-cta">Join →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH from this arena */}
      <section className="section">
        <div className="section-inner">
          <div className="member-section-head">
            <div className="eyebrow">Latest from this arena</div>
            <h2>What we&apos;ve published on {props.label.toLowerCase()}.</h2>
          </div>
          <div className="research-grid">
            {props.research.map((r) => (
              <div key={r.title} className={`research-card ${r.feature ? 'feature' : ''}`}>
                <div className="research-label">{r.label}</div>
                <h3>{r.title}</h3>
                <p>{r.blurb}</p>
                <div className="meta">
                  {r.meta.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERS LEADING - kept from v1.4.0 */}
      <section className="section members-leading-strip">
        <div className="section-inner">
          <div className="eyebrow">Members leading this work</div>
          <h3 className="members-leading-title">{props.membersLeading.headline}</h3>
          <div className="members-leading-logos">
            {props.membersLeading.logos.map((l) => <span key={l}>{l}</span>)}
          </div>
          <Link href="/convene" className="link-arrow" style={{ marginTop: 20, display: 'inline-block' }}>
            See members shaping {props.label.toLowerCase()} →
          </Link>
        </div>
      </section>
    </>
  );
}
