import { ArenaPage } from '@/components/ArenaPage';

export default function ShapeGrowthPage() {
  return (
    <ArenaPage
      slug="growth"
      label="Growth"
      number="02"
      heroHeadline={<>Demand planning for the <em>defining</em> utility challenge of the decade.</>}
      heroLead="AI data centers, fleet electrification, and reshored industrial load are remaking the demand picture. The work covers large-load tariffs, planning, transportation electrification, and the buyer-utility conversations that compound them."
      impact={[
        { num: '147', label: 'large-load tariff filings tracked in DELTa, drawn from working group contributions' },
        { num: '60+', label: 'utility, regulatory, and consumer-advocate leads in the Large Load working group' },
        { num: 'Q1 2026', label: 'NASUCA endorsement of the Large Load Tariff Principles drafted in this arena' },
        { num: '$340M', label: 'in member-reported pilot savings attributed to Growth-arena peer benchmarks' },
      ]}
      topics={[
        { title: 'Large-load tariffs', blurb: 'Cost causation, allocation, and the principles that survive intervenor scrutiny.', meta: '14 active members · NASUCA endorsement, Apr 2026' },
        { title: 'Transportation electrification', blurb: 'MHD fleet pilots, depot infrastructure, and the rate designs that make them work.', meta: '11 active members · 12-utility benchmark study' },
        { title: 'Buyer-utility dialogue', blurb: 'Where Fortune 500 procurement targets meet utility delivery capability.', meta: '9 active members · Quarterly series' },
        { title: 'Demand-side flexibility', blurb: 'VPPs, DERMS, and the residential and commercial programs feeding them.', meta: '13 active members · Policy map updated quarterly' },
      ]}
      spotlights={[
        {
          quote: 'The roadmap clarity from membership shaped a $400M procurement decision. We aligned procurement timelines with utility resource plans across twelve service territories.',
          name: '[Sustainability Lead]',
          role: 'Head of Sustainability',
          org: '[Fortune 100 industrial]',
          tag: 'Buyer',
          tagColor: 'buyer',
        },
        {
          quote: 'We brought a 90-day rate-design timeline back from a conversation that started in a working group. The model survived intervenor scrutiny in the first round.',
          name: '[VP Regulatory Strategy]',
          role: 'VP, Regulatory Strategy',
          org: '[Mid-Atlantic IOU]',
          tag: 'Utility',
          tagColor: 'utility',
        },
        {
          quote: 'Three months in the working group taught us what we would have spent a year learning at conferences. Closed our first IOU pilot inside six months.',
          name: '[Founder Name]',
          role: 'CEO',
          org: '[Series B grid software]',
          tag: 'Provider',
          tagColor: 'provider',
        },
      ]}
      workingGroups={[
        { count: '01', name: 'Large Load Tariff Principles', desc: 'The cross-jurisdictional cost-causation framework NASUCA endorsed in early 2026.' },
        { count: '02', name: 'Transportation Electrification', desc: 'MHD fleet electrification pilots across twelve utilities. Load profiles, rates, and customer acquisition.' },
        { count: '03', name: 'Buyer-Utility Dialogue', desc: 'Quarterly sessions where Fortune 500 procurement leads and utility resource planners reconcile timelines.' },
        { count: '04', name: 'DERMS Integration', desc: 'How utilities are wiring distributed energy resources into their grid management software stack.' },
      ]}
      research={[
        {
          label: 'Flagship · Apr 2026',
          title: 'Principles for rate design in a data center decade',
          blurb: 'A cross-jurisdictional framework for utilities and regulators managing 100+ MW customer requests. Draws on 147 tariff filings.',
          meta: ['42 pages', 'Utility, Regulator', 'Apr 2026'],
          feature: true,
        },
        {
          label: 'Research · Jan 2026',
          title: 'Transportation electrification: Charging the heavy-duty decade',
          blurb: 'MHD fleet pilots across 12 utilities. Load profiles, costs, and customer acquisition.',
          meta: ['Jan 2026'],
        },
        {
          label: 'Snapshot · Mar 2026',
          title: 'VPP and DER policy developments, Q1 2026',
          blurb: 'Quarterly map of VPP and DER policy across 50 states. Enrollment and compensation.',
          meta: ['Mar 2026'],
        },
      ]}
      membersLeading={{
        headline: 'Sixteen utilities and twenty-two providers shaping how growth gets met.',
        logos: ['[Hyperscaler buyer]', '[Industrial buyer]', '[Western IOU]', '[Texas IOU]', '[Storage provider]', '[DERMS vendor]', '[EV charging co.]', '+ many more'],
      }}
    />
  );
}
