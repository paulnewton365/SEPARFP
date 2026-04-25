'use client';

import { useState } from 'react';
import { Annotation } from '@/components/Annotation';

interface CalEvent {
  day: number;
  title: string;
  type: 'group' | 'convening' | 'webinar' | 'academy';
}

// May 2026 calendar — Friday May 1 starts the month
const MAY_EVENTS: CalEvent[] = [
  { day: 14, title: 'Large Load WG · Session 4', type: 'group' },
  { day: 22, title: 'Grid Resilience Summit', type: 'convening' },
  { day: 28, title: 'Resilience Planning WG', type: 'group' },
];

const TODAY_DAY = 6; // mock today

function MayCalendar() {
  // May 2026 starts on Friday (day 5 of the week, 0=Sun)
  const startOffset = 5;
  const daysInMay = 31;
  const cells = [];

  // Empty cells before May 1
  for (let i = 0; i < startOffset; i++) {
    cells.push(
      <div key={`pre-${i}`} className="calendar-cell muted">
        <div className="day-num">{30 - (startOffset - 1 - i)}</div>
      </div>
    );
  }

  // Days of May
  for (let day = 1; day <= daysInMay; day++) {
    const events = MAY_EVENTS.filter((e) => e.day === day);
    const isToday = day === TODAY_DAY;
    cells.push(
      <div key={day} className={`calendar-cell ${isToday ? 'today' : ''}`}>
        <div className="day-num">{day}</div>
        {events.map((e, i) => (
          <a key={i} className={`cal-event ${e.type === 'convening' ? 'dark' : ''}`}>
            {e.title}
          </a>
        ))}
      </div>
    );
  }

  // Trailing cells to fill to 35 (5 rows x 7)
  const totalSoFar = startOffset + daysInMay;
  const trailing = totalSoFar > 35 ? 42 - totalSoFar : 35 - totalSoFar;
  for (let i = 1; i <= trailing; i++) {
    cells.push(
      <div key={`post-${i}`} className="calendar-cell muted">
        <div className="day-num">{i}</div>
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="calendar-head">
        <h3>May 2026</h3>
        <div className="calendar-controls">
          <button aria-label="Previous month">‹</button>
          <button aria-label="Next month">›</button>
        </div>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="calendar-dow">{d}</div>
        ))}
        {cells}
      </div>
    </div>
  );
}

export default function ConvenePage() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  return (
    <>
      {/* HERO */}
      <section className="convene-hero">
        <div className="convene-hero-inner">
          <div className="eyebrow">Convene</div>
          <h1>
            Where the shaping<br />
            <em>actually happens.</em>
            <Annotation
              number={20}
              note="Convene leads with the verb that defines SEPA's value: shaping happens in rooms, in working groups, in the relationships that get built across rate cases. Page treats events as outcomes, not invitations."
            />
          </h1>
          <p className="lead">
            Working groups, in-person convenings, the SEPA Academy, and the Power Player Awards.
            Four ways the sector comes together to compare notes, run pilots, and write the
            next set of practices on purpose, not by accident.
          </p>
        </div>
      </section>

      {/* IMPACT BAND - the stakes upfront */}
      <section className="impact-band">
        <div className="impact-band-inner">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>The work, in numbers</div>
          <h2 style={{ color: 'var(--paper)', fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em' }}>
            What collaboration produces.
          </h2>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="num">2,400+</div>
              <div className="label">utility, regulator, and provider participants in working groups since 2022</div>
            </div>
            <div className="impact-item">
              <div className="num">147</div>
              <div className="label">tariff filings tracked in DELTa, drawn from working group contributions</div>
            </div>
            <div className="impact-item">
              <div className="num">42</div>
              <div className="label">state commissions cited SEPA research in 2025 dockets</div>
            </div>
            <div className="impact-item">
              <div className="num">$340M</div>
              <div className="label">in member-reported pilot savings attributed to SEPA peer benchmarks</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR / LIST TOGGLE */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="eyebrow">Upcoming</div>
            <h2>What&apos;s on the calendar.</h2>
            <p className="section-sub">
              Events are open, member-only, or by-invitation. Filter when you find your role above.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 4, border: '1px solid var(--line)', borderRadius: 2, overflow: 'hidden' }}>
            <button
              onClick={() => setView('calendar')}
              style={{
                padding: '8px 14px', background: view === 'calendar' ? 'var(--ink-1)' : 'var(--paper)',
                color: view === 'calendar' ? 'var(--paper)' : 'var(--ink-2)',
                border: 'none', fontSize: 12, fontFamily: 'inherit', cursor: 'pointer',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}
            >Calendar</button>
            <button
              onClick={() => setView('list')}
              style={{
                padding: '8px 14px', background: view === 'list' ? 'var(--ink-1)' : 'var(--paper)',
                color: view === 'list' ? 'var(--paper)' : 'var(--ink-2)',
                border: 'none', fontSize: 12, fontFamily: 'inherit', cursor: 'pointer',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}
            >List</button>
          </div>
        </div>

        {view === 'calendar' ? (
          <MayCalendar />
        ) : (
          <div className="events-list" style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
            <div className="event-row">
              <div className="event-date">May 14, 2026</div>
              <div className="event-type">Working group</div>
              <div className="event-title">Large Load Tariff Principles, Session 4</div>
              <div className="event-topic">Cost allocation frameworks · Members only</div>
              <div className="event-arrow">→</div>
            </div>
            <div className="event-row">
              <div className="event-date">May 22, 2026</div>
              <div className="event-type">Convening</div>
              <div className="event-title">Grid Resilience Summit · Raleigh, NC</div>
              <div className="event-topic">Post-storm recovery, investment planning · Open</div>
              <div className="event-arrow">→</div>
            </div>
            <div className="event-row">
              <div className="event-date">May 28, 2026</div>
              <div className="event-type">Working group</div>
              <div className="event-title">Resilience Planning WG, Q2 session</div>
              <div className="event-topic">Storm hardening economics · Members only</div>
              <div className="event-arrow">→</div>
            </div>
            <div className="event-row">
              <div className="event-date">Jun 3, 2026</div>
              <div className="event-type">Academy</div>
              <div className="event-title">DER Integration Certification, Cohort 12</div>
              <div className="event-topic">8-week program · Utility staff, regulators</div>
              <div className="event-arrow">→</div>
            </div>
            <div className="event-row">
              <div className="event-date">Jun 18, 2026</div>
              <div className="event-type">Webinar</div>
              <div className="event-title">What the data centers want, what the grid can deliver</div>
              <div className="event-topic">Q2 briefing · Open to all</div>
              <div className="event-arrow">→</div>
            </div>
          </div>
        )}
      </section>

      {/* OPPORTUNITIES TO COLLABORATE */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-head">
          <div className="eyebrow">Open invitations</div>
          <h2>
            Three ways to step in this quarter.
            <Annotation
              number={21}
              note="The page distinguishes between attending an event (passive) and joining a collaboration (active). Active invitations live here as named, open opportunities."
            />
          </h2>
          <p className="section-sub">
            Active calls for participation. Co-author a report, host a member visit, or join a peer review panel.
          </p>
        </div>
        <div className="collab-grid">
          <div className="collab-card">
            <div className="label">Co-author · Open until June 1</div>
            <h4>Heat pump deployment economics: A four-utility benchmark</h4>
            <p>
              Three utilities have committed to share 2024-2025 data. We&apos;re seeking one more
              partner — ideally a southwest IOU or a New England muni — to round out regional coverage.
            </p>
            <div className="stat">3 of 4 partners committed · 6 months</div>
          </div>
          <div className="collab-card">
            <div className="label">Host · Open until July 15</div>
            <h4>Member site visit: Storm-hardened distribution in practice</h4>
            <p>
              SEPA is organizing a two-day site visit to a utility that completed major resilience
              upgrades after the 2024 hurricane season. Hosting utilities get reimbursed for staff
              time and gain peer reviewers.
            </p>
            <div className="stat">12 utility seats remaining</div>
          </div>
          <div className="collab-card">
            <div className="label">Review panel · Rolling</div>
            <h4>DELTa methodology: Quarterly peer review</h4>
            <p>
              The Database of Emerging Large-Load Tariffs is reviewed every quarter by a panel of
              utility analysts and regulator staff. Q2 panel slots are open through May 30.
            </p>
            <div className="stat">5 panelists per quarter · ~6 hours</div>
          </div>
        </div>
      </section>

      {/* PAST IMPACT - Storytelling */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="section-head">
          <div className="eyebrow">What collaboration produces</div>
          <h2>
            Stories from the room.
            <Annotation
              number={22}
              note="Past events are framed as stories with named outcomes, not nostalgia. Each story closes with the metric that proves collaboration changed something concrete in the sector."
            />
          </h2>
          <p className="section-sub">
            Three from the last twelve months. The pattern: SEPA convenes the people, the people
            do the work, the work moves a decision somewhere it wouldn&apos;t have moved alone.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-img">Photo · 2025 RE+ Anaheim</div>
          <div className="story-content">
            <div className="story-cat">2025 RE+ Anaheim · 1,400 attendees</div>
            <h3>Six utilities walked in with separate large-load problems. They walked out with one principle.</h3>
            <p>
              In a closed-door session at the 2025 convening, six investor-owned utilities compared
              data center interconnection requests they were each handling individually. Within
              two days they identified that they were collectively negotiating against the same
              three hyperscalers — without realizing it.
            </p>
            <p>
              The session produced the first draft of what became the Large Load Cost Allocation
              Principles, now cited in 14 state rate case filings.
            </p>
            <div className="story-outcomes">
              <div className="story-outcome">
                <div className="num">14</div>
                <div className="label">state rate cases citing the principles</div>
              </div>
              <div className="story-outcome">
                <div className="num">$2.1B</div>
                <div className="label">in cost-allocation decisions affected</div>
              </div>
              <div className="story-outcome">
                <div className="num">9 mo</div>
                <div className="label">from session to first regulatory adoption</div>
              </div>
            </div>
          </div>
        </div>

        <div className="story-grid" style={{ marginTop: 80 }}>
          <div className="story-content">
            <div className="story-cat">Resilience Working Group · 18-month arc</div>
            <h3>What 2024&apos;s storm season cost. What 2025&apos;s spent preparing.</h3>
            <p>
              After Hurricane Beryl in 2024, five utilities in the Resilience Working Group
              committed to publish their post-event recovery playbooks together. Eighteen months
              later, the synthesis report was downloaded by 67 utilities and cited in three
              federal proceedings.
            </p>
            <p>
              The follow-on impact: four utilities adopted shared procurement standards for storm
              response equipment, dropping unit costs by an average of 11%.
            </p>
            <div className="story-outcomes">
              <div className="story-outcome">
                <div className="num">67</div>
                <div className="label">utilities downloaded the playbook</div>
              </div>
              <div className="story-outcome">
                <div className="num">11%</div>
                <div className="label">avg. procurement cost reduction</div>
              </div>
              <div className="story-outcome">
                <div className="num">3</div>
                <div className="label">federal proceedings cited it</div>
              </div>
            </div>
          </div>
          <div className="story-img">Photo · After-storm deployment</div>
        </div>

        <div className="story-grid" style={{ marginTop: 80 }}>
          <div className="story-img">Photo · Power Player Awards 2025</div>
          <div className="story-content">
            <div className="story-cat">2025 Power Player Awards</div>
            <h3>Recognition that changes what happens next.</h3>
            <p>
              The 2025 Power Player Awards recognized seven utility projects across DER deployment,
              workforce equity, and customer programs. What we didn&apos;t plan: every awarded
              project saw their methodology adopted by at least one peer utility within twelve
              months of the recognition.
            </p>
            <p>
              The Awards aren&apos;t about prestige. They&apos;re about turning isolated wins into
              transferable practice.
            </p>
            <div className="story-outcomes">
              <div className="story-outcome">
                <div className="num">7</div>
                <div className="label">projects recognized</div>
              </div>
              <div className="story-outcome">
                <div className="num">100%</div>
                <div className="label">methodology replicated by peers</div>
              </div>
              <div className="story-outcome">
                <div className="num">23</div>
                <div className="label">total utilities adopting practices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pov" style={{ background: 'var(--bg)' }}>
        <div className="pov-inner" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <div className="eyebrow">Get involved</div>
            <h2>The next thing in this calendar happens with you in it, or without.</h2>
            <p>
              Members get priority access to working groups, free attendance at convenings,
              and full participation in research review panels. Non-members can attend open
              webinars, the annual RE+ event, and selected site visits.
            </p>
            <div className="hero-actions">
              <a href="/join" className="btn">See membership options</a>
              <a className="link-arrow">Browse all upcoming events →</a>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
