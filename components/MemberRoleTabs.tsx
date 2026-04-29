'use client';

import { useState } from 'react';

type RoleKey = 'utility' | 'regulator' | 'provider' | 'buyer';

interface RoleContent {
  key: RoleKey;
  label: string;
  headline: string;
  who: string;
  bring: string;
  get: string[];
  participation: { count: string; detail: string }[];
  example: string;
}

const roles: RoleContent[] = [
  {
    key: 'utility',
    label: 'Utility leader',
    headline: 'You set strategy. We sharpen it with peer evidence.',
    who: 'Strategy, innovation, and resource officers at IOUs, munis, and co-ops navigating decarbonization, grid modernization, and rate cases.',
    bring: 'Operational reality. The specific decisions you are trying to defend in front of your board, your commission, and your customers.',
    get: [
      'Peer-tested benchmarks before you file',
      'Working group access on decisions you are actively making',
      'Credible cover for bold moves with boards and regulators',
      'Discounts on Grid Evolution Summit, SEPA Utility Conference, and SPI',
    ],
    participation: [
      { count: '1,200+', detail: 'utility leaders in active membership' },
      { count: '13', detail: 'active working groups led by utility members' },
    ],
    example: 'A Mid-Atlantic IOU used the Large Load Tariff working group to pressure-test a cost-allocation model with peers from four other utilities before filing. The model survived intervenor scrutiny in the first round.',
  },
  {
    key: 'regulator',
    label: 'Regulator and policymaker',
    headline: 'You weigh the evidence. We make sure it is defensible.',
    who: 'State PUCs, legislators, and federal agencies shaping the rules of the transition. Consumer advocates participating in rate proceedings.',
    bring: 'The questions a commission is being asked to answer, and the standard of evidence those answers have to meet.',
    get: [
      'Cross-jurisdictional evidence through the DELTa platform',
      'Neutral ground to engage industry without appearing captured',
      'Peer network across forty-one state commissions',
      'Public-interest pricing tier for state offices',
    ],
    participation: [
      { count: '180+', detail: 'regulator and consumer advocate participants' },
      { count: '42', detail: 'state commissions cited SEPA research in 2025 dockets' },
    ],
    example: 'A Western state commissioner used SEPA research as the source for cross-jurisdictional comparisons in dockets covering rate design, interconnection queues, and IRP review. Cited eleven times in 2025.',
  },
  {
    key: 'provider',
    label: 'Solution provider',
    headline: 'You build for the grid. We connect you to the buyers.',
    who: 'Tech, software, storage, DER, EV, and emerging clean-energy companies selling into utilities. From Series A to Fortune 500.',
    bring: 'Technical capability and a learning curve to compress on how utility procurement actually works.',
    get: [
      'Direct access to utility decision-makers and working groups',
      'Credibility by association with a trusted convener',
      'Early read on where the market is heading',
      'Tiered membership fees scaled by company stage',
    ],
    participation: [
      { count: '440+', detail: 'provider members across 7 technology categories' },
      { count: '6 months', detail: 'median time to first utility pilot for new provider members' },
    ],
    example: 'A Series B grid software company joined SEPA specifically to compress the learning curve on utility procurement timelines. Closed first IOU pilot inside six months of joining.',
  },
  {
    key: 'buyer',
    label: 'Large energy user',
    headline: 'You set the demand signal. We help utilities answer it.',
    who: 'Fortune 500 sustainability leads, industrials, and data center operators with ambitious clean-energy targets.',
    bring: 'Procurement ambition and the timelines you need utilities to meet. The signals the supply side cannot afford to misread.',
    get: [
      'Utility roadmaps to plan your own decarbonization',
      'Collective voice into the supply side through Buyer-Utility Dialogue',
      'Translation between procurement targets and utility delivery capability',
      'New tier for 2026 — early-access pricing available',
    ],
    participation: [
      { count: 'Launching 2026', detail: 'as a dedicated membership tier' },
      { count: '24', detail: 'Fortune 500 buyers in pilot Buyer-Utility Dialogue series' },
    ],
    example: 'A Fortune 100 industrial used the Buyer-Utility Dialogue series to align internal procurement timelines with utility resource plans across twelve service territories. Shaped a $400M procurement decision.',
  },
];

export function MemberRoleTabs() {
  const [active, setActive] = useState<RoleKey>('utility');
  const current = roles.find((r) => r.key === active)!;

  return (
    <div className="role-tabs">
      <div className="role-tabs-nav" role="tablist">
        {roles.map((r) => (
          <button
            key={r.key}
            role="tab"
            aria-selected={active === r.key}
            className={`role-tab ${active === r.key ? 'active' : ''} role-tab-${r.key}`}
            onClick={() => setActive(r.key)}
          >
            <span className="role-tab-label">{r.label}</span>
          </button>
        ))}
      </div>

      <div className="role-tabs-panel" role="tabpanel">
        <div className="role-panel-grid">
          <div className="role-panel-main">
            <h3>{current.headline}</h3>
            <div className="role-panel-block">
              <div className="role-panel-label">Who you are</div>
              <p>{current.who}</p>
            </div>
            <div className="role-panel-block">
              <div className="role-panel-label">What you bring to the room</div>
              <p>{current.bring}</p>
            </div>
            <div className="role-panel-block">
              <div className="role-panel-label">What membership opens</div>
              <ul className="role-panel-list">
                {current.get.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="role-panel-side">
            <div className="role-panel-stats">
              {current.participation.map((p) => (
                <div key={p.count} className="role-panel-stat">
                  <div className="num">{p.count}</div>
                  <div className="label">{p.detail}</div>
                </div>
              ))}
            </div>
            <div className="role-panel-example">
              <div className="role-panel-label">In practice</div>
              <p>{current.example}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
