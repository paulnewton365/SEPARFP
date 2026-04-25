'use client';

import { useState } from 'react';
import { Annotation } from '@/components/Annotation';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* HERO with sign-up form alongside */}
      <section className="join-hero">
        <div className="join-hero-inner">
          <div>
            <div className="eyebrow">Join SEPA</div>
            <h1>
              The room compounds.<br />
              <em>Show up.</em>
              <Annotation
                number={23}
                note="Join leads with the principle — compound, do not reset — before the form. The hero argues why membership matters before asking for an email. Conversion happens when the case is made first."
              />
            </h1>
            <p className="lead">
              Every working group, every convening, every research panel adds to the same body of
              practice. The members who show up early shape the next decade of utility decisions.
              The ones who join later inherit them.
            </p>
            <p className="lead">
              No lobbying. No advocacy. Just the room where the sector compares notes before the
              rate case.
            </p>
          </div>

          {/* Sign-up form */}
          <div className="signup-card">
            <div className="eyebrow">Start here</div>
            <h3>Tell us where you fit.</h3>
            <p>
              We&apos;ll route you to the right membership conversation. Takes 30 seconds. No
              pitch — just the right person from our team.
            </p>
            {submitted ? (
              <div style={{ padding: '20px 0', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)', marginBottom: 16, fontSize: 16,
                }}>✓</div>
                <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 8 }}>Got it.</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  Someone from the SEPA team will reach out within 48 hours with the membership
                  options that fit your role. Check your inbox.
                </div>
              </div>
            ) : (
              <form
                className="signup-form"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <input className="signup-input" type="text" placeholder="Full name" required />
                <input className="signup-input" type="email" placeholder="Work email" required />
                <input className="signup-input" type="text" placeholder="Organization" required />
                <select className="signup-input select" defaultValue="" required>
                  <option value="" disabled>I&apos;m a…</option>
                  <option>Utility leader</option>
                  <option>Regulator / policymaker</option>
                  <option>Solution provider</option>
                  <option>Large energy buyer</option>
                  <option>Other</option>
                </select>
                <button type="submit" className="signup-submit">
                  Start the conversation
                </button>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4, lineHeight: 1.4 }}>
                  No marketing emails. We use this only to route the right colleague to you.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* IMPACT CREDENTIALS - the receipts */}
      <section className="impact-band">
        <div className="impact-band-inner">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>The membership receipts</div>
          <h2 style={{ color: 'var(--paper)', fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>
            What members get out of the room.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640, fontSize: 15, lineHeight: 1.55 }}>
            Numbers reported by members in the 2025 annual survey. Not marketing claims.
          </p>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="num">$340M</div>
              <div className="label">in member-reported pilot savings attributed to peer benchmarks</div>
            </div>
            <div className="impact-item">
              <div className="num">87%</div>
              <div className="label">of members say SEPA research informed at least one major decision</div>
            </div>
            <div className="impact-item">
              <div className="num">14</div>
              <div className="label">months — average time from working group output to regulatory citation</div>
            </div>
            <div className="impact-item">
              <div className="num">94%</div>
              <div className="label">member retention rate over the last five years</div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE BENEFITS */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="section-head">
          <div className="eyebrow">Why join</div>
          <h2>Three things membership actually does.</h2>
          <p className="section-sub">
            Not features. Outcomes. What members consistently tell us they get from the work.
          </p>
        </div>
        <div className="benefits-list">
          <div className="benefit">
            <div className="num">01</div>
            <h4>De-risk the big decisions</h4>
            <p>
              Members get peer benchmarks before rate cases, pilot data before procurement, and
              decision-grade research before board meetings. The cost of making the wrong call
              alone is bigger than any annual fee.
            </p>
          </div>
          <div className="benefit">
            <div className="num">02</div>
            <h4>Move the room with you in it</h4>
            <p>
              Working groups don&apos;t just consume SEPA research. They produce it. Members shape
              the questions the sector gets asked, the metrics the sector measures, and the
              practices regulators see as standard.
            </p>
          </div>
          <div className="benefit">
            <div className="num">03</div>
            <h4>Compound, don&apos;t reset</h4>
            <p>
              The transition doesn&apos;t restart every news cycle. Member access compounds:
              Year One is orientation, Year Two is leverage, Year Five is being the peer that
              other utilities cite.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-head">
          <div className="eyebrow">Voices</div>
          <h2>
            Members on what the work has done.
            <Annotation
              number={24}
              note="Testimonials are role-specific (utility, regulator, provider, buyer) so each visitor sees themselves represented at least once. Each quote names a concrete outcome, not a feeling."
            />
          </h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <span className="testimonial-mark">&ldquo;</span>
            <div className="quote">
              SEPA is the only room where I can share what we&apos;re piloting before I&apos;ve
              had to defend it in a rate case. That changes what we&apos;re willing to try.
            </div>
            <div className="person">
              <div className="testimonial-avatar" />
              <div className="testimonial-meta">
                <div className="name">[Utility VP, Innovation]</div>
                <div className="role">Investor-owned utility · Member since 2019</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <span className="testimonial-mark">&ldquo;</span>
            <div className="quote">
              The research isn&apos;t advocacy. It&apos;s the evidence I take into the commission
              hearing. That&apos;s why six of my last decisions cite SEPA reports in the docket.
            </div>
            <div className="person">
              <div className="testimonial-avatar" />
              <div className="testimonial-meta">
                <div className="name">[State PUC Commissioner]</div>
                <div className="role">Western state · Policy advisor seat since 2021</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <span className="testimonial-mark">&ldquo;</span>
            <div className="quote">
              We came in thinking SEPA was just for utilities. We stayed because it was the first
              place where buyers, utilities, and regulators could have one conversation about the
              same problem.
            </div>
            <div className="person">
              <div className="testimonial-avatar" />
              <div className="testimonial-meta">
                <div className="name">[Head of Clean Energy]</div>
                <div className="role">Fortune 500 buyer · Member since 2022</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <span className="testimonial-mark">&ldquo;</span>
            <div className="quote">
              For a provider company our size, SEPA is the only forum that puts us at the table
              with utility decision-makers without a sales process in between. The credibility
              compounds.
            </div>
            <div className="person">
              <div className="testimonial-avatar" />
              <div className="testimonial-meta">
                <div className="name">[Founder & CEO]</div>
                <div className="role">DER software provider · Series B</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA - back to top form */}
      <section className="pov" style={{ background: 'var(--paper)' }}>
        <div className="pov-inner" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow">Ready</div>
            <h2>Three minutes from this page to the right person on our team.</h2>
            <p>
              Membership conversations don&apos;t start with a pitch. They start with a question:
              what are you trying to figure out, and how can SEPA help. The form above kicks
              off that conversation.
            </p>
            <p>
              For utility, regulator, and large-buyer membership, expect a 30-minute scoping call
              within a week. For solution providers, the path runs through our partnerships team.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
