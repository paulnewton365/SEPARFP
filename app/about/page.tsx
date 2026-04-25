import { Annotation } from '@/components/Annotation';

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="tag">About SEPA</div>
          <h1>
            The room where energy&apos;s transition<br />
            gets <em>shaped.</em>
            <Annotation
              number={10}
              note="About page leads with positioning, not organizational history. The opening claim describes what SEPA is FOR, not what it DOES."
            />
          </h1>
          <p className="lead">
            Smart Electric Power Alliance is the neutral ground where utilities, regulators,
            providers, and large buyers turn credible evidence into coordinated action. Since 1992.
            Still the only convener that sits at the institutional center of the clean energy
            transition.
          </p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="about-section" style={{ background: 'var(--paper)' }}>
        <div className="about-section-inner">
          <div className="about-two-col">
            <div className="about-col-label">
              <div className="eyebrow">What we stand for</div>
              <h2>
                Stop inviting. Start leading.
                <Annotation
                  number={11}
                  note="The About page declares the brand's values as commitments, not descriptions. Every claim here is a behavior the rest of the site has to honor."
                />
              </h2>
            </div>
            <div className="about-col-body">
              <p>
                Energy&apos;s future will be shaped by utilities, regulators, providers, and buyers
                working together, informed by credible evidence, and aligned on what actually works.
                SEPA&apos;s job is to make that alignment possible.
              </p>
              <p>
                We do not lobby. We do not advocate. We do not pick winning technologies. What we
                do is convene the people who can, fund the research they need, and publish the
                answers that outlast the news cycle.
              </p>
              <p className="muted">
                This is an invitation to do something that lasts. That is the brief. That is the
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEUTRALITY AS PRINCIPLE */}
      <section className="about-section" style={{ background: 'var(--bg)' }}>
        <div className="about-section-inner">
          <div className="section-head" style={{ margin: 0, marginBottom: 40 }}>
            <div className="eyebrow">Our operating principle</div>
            <h2>
              Neutrality as a principle, not a disclaimer.
              <Annotation
                number={12}
                note="'SEPA does not lobby' has historically read as a limitation. Reframed here as the differentiator it actually is — the source of the trust that makes the rest of the work possible."
              />
            </h2>
          </div>
          <div className="neutrality-block">
            <div className="neutrality-claim">
              In a polarized sector, <em>neutrality is leverage.</em>
            </div>
            <div className="neutrality-detail">
              <p>
                Regulators cite our research in commission hearings because it&apos;s unbiased.
                Utilities share pilots with us before they defend them in rate cases because
                we don&apos;t have a side. Buyers trust our utility roadmaps because we
                don&apos;t sell anything.
              </p>
              <p>
                That is the value of neutrality. It is not the absence of a point of view. It is
                the discipline to let evidence make the case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="about-section" style={{ background: 'var(--paper)' }}>
        <div className="about-section-inner">
          <div className="section-head" style={{ margin: 0 }}>
            <div className="eyebrow">Leadership</div>
            <h2>
              The people behind the work.
              <Annotation
                number={13}
                note="Leadership surfaced with photos, focus areas, and links to their published thinking. An organization is more trustworthy when its leaders are visible, quotable, and followable."
              />
            </h2>
            <p className="section-sub">
              Every leader below has a published track record you can read, a working group
              they run, and an open door for sector peers.
            </p>
          </div>
          <div className="leader-grid">
            <div className="leader-card">
              <div className="leader-avatar">Portrait</div>
              <div className="leader-name">[CEO]</div>
              <div className="leader-title">
                President &amp; CEO. Former utility executive and regulatory policy lead.
              </div>
              <div className="leader-focus">Strategy · Policy</div>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">Portrait</div>
              <div className="leader-name">[Chief Research Officer]</div>
              <div className="leader-title">
                Leads DELTa, the Carbon-Reduction Tracker, and SEPA&apos;s flagship reports.
              </div>
              <div className="leader-focus">Research · Grid</div>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">Portrait</div>
              <div className="leader-name">[Head of Convening]</div>
              <div className="leader-title">
                Runs working groups, the RE+ program, and the SEPA Academy.
              </div>
              <div className="leader-focus">Convening · Growth</div>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">Portrait</div>
              <div className="leader-name">[Head of Member Engagement]</div>
              <div className="leader-title">
                First point of contact for utility and provider members.
              </div>
              <div className="leader-focus">Members · Globe</div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <a className="link-arrow">Meet the full team →</a>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="about-section" style={{ background: 'var(--ink-1)', color: 'var(--paper)' }}>
        <div className="about-section-inner">
          <div className="section-head" style={{ margin: 0 }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
              How we work
            </div>
            <h2 style={{ color: 'var(--paper)' }}>
              Three principles that show up every day.
              <Annotation
                number={14}
                note="Culture surfaced as behaviors, not platitudes. Each principle describes how SEPA shows up — the kind of thing a member or staffer could hold the organization accountable to."
              />
            </h2>
          </div>
          <div className="culture-grid">
            <div
              className="culture-card"
              style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--paper)' }}
            >
              <div className="num" style={{ color: 'rgba(255,255,255,0.5)' }}>01</div>
              <h4>Measured, not muted.</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Neutral is not quiet. We take positions. We just take them based on evidence and
                cross-sector alignment, not on what&apos;s trending.
              </p>
            </div>
            <div
              className="culture-card"
              style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--paper)' }}
            >
              <div className="num" style={{ color: 'rgba(255,255,255,0.5)' }}>02</div>
              <h4>Plainspoken about big things.</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                The sector is full of jargon. We write in direct sentences, make clear claims, and
                cut words that protect the speaker instead of sharpening the point.
              </p>
            </div>
            <div
              className="culture-card"
              style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--paper)' }}
            >
              <div className="num" style={{ color: 'rgba(255,255,255,0.5)' }}>03</div>
              <h4>Compound, don&apos;t reset.</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                The transition doesn&apos;t restart every news cycle. Our research, our working
                groups, and our convenings build on themselves across years. That&apos;s the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VOICES (moved from homepage — sits naturally with leadership and culture) */}
      <section className="voices" style={{ background: 'var(--paper)', paddingTop: 88, paddingBottom: 88 }}>
        <div className="section-head">
          <div className="eyebrow">Voices from the sector</div>
          <h2>
            What members tell us, in their own words.
            <Annotation
              number={18}
              note="Voices live with the institutional story — leadership, culture, neutrality. Quotes about institutional trust belong here, not on the homepage."
            />
          </h2>
        </div>
        <div className="voices-grid">
          <div className="voice">
            <div className="voice-quote">
              &ldquo;SEPA is the only room where I can share what we&apos;re piloting before
              I&apos;ve had to defend it in a rate case. That changes what we&apos;re willing to
              try.&rdquo;
            </div>
            <div className="voice-person">
              <div className="voice-avatar" />
              <div>
                <div className="voice-name">[Utility VP, IOU]</div>
                <div className="voice-role">Member since 2019</div>
              </div>
            </div>
          </div>
          <div className="voice">
            <div className="voice-quote">
              &ldquo;The research isn&apos;t advocacy. It&apos;s the evidence I take into the
              commission hearing. That&apos;s why we cite it.&rdquo;
            </div>
            <div className="voice-person">
              <div className="voice-avatar" />
              <div>
                <div className="voice-name">[State PUC Commissioner]</div>
                <div className="voice-role">Policy advisor</div>
              </div>
            </div>
          </div>
          <div className="voice">
            <div className="voice-quote">
              &ldquo;We came in thinking SEPA was for utilities. We stayed because it was the first
              place buyers, utilities, and regulators could have one conversation.&rdquo;
            </div>
            <div className="voice-person">
              <div className="voice-avatar" />
              <div>
                <div className="voice-name">[Head of Clean Energy, Fortune 500]</div>
                <div className="voice-role">Large buyer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="about-section" style={{ background: 'var(--bg)' }}>
        <div className="about-section-inner">
          <div className="section-head" style={{ margin: 0, marginBottom: 40 }}>
            <div className="eyebrow">The scale of the work</div>
            <h2>Numbers that earn the &ldquo;trusted&rdquo; word.</h2>
          </div>
          <div className="proof-inner" style={{ color: 'var(--ink-1)' }}>
            <div className="proof-item" style={{ borderLeftColor: 'var(--line)' }}>
              <div className="num">74%</div>
              <div className="label" style={{ color: 'var(--ink-2)' }}>of US MWh sold from SEPA members</div>
            </div>
            <div className="proof-item" style={{ borderLeftColor: 'var(--line)' }}>
              <div className="num">482</div>
              <div className="label" style={{ color: 'var(--ink-2)' }}>research assets published</div>
            </div>
            <div className="proof-item" style={{ borderLeftColor: 'var(--line)' }}>
              <div className="num">1,000+</div>
              <div className="label" style={{ color: 'var(--ink-2)' }}>utilities, regulators, providers, buyers</div>
            </div>
            <div className="proof-item" style={{ borderLeftColor: 'var(--line)' }}>
              <div className="num">34</div>
              <div className="label" style={{ color: 'var(--ink-2)' }}>years convening the sector</div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS CTA */}
      <section className="about-section" style={{ background: 'var(--paper)' }}>
        <div className="about-section-inner">
          <div className="about-two-col">
            <div className="about-col-label">
              <div className="eyebrow">Work at SEPA</div>
              <h2>Careers at the center of the transition.</h2>
            </div>
            <div className="about-col-body">
              <p>
                We hire researchers, program leads, and communicators who want to work on the
                hardest unresolved questions in US energy. Not because we have the loudest voice,
                but because we have the most trusted room.
              </p>
              <div className="hero-actions" style={{ marginTop: 24 }}>
                <a className="btn">See open roles</a>
                <a className="link-arrow">Read how we hire →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
