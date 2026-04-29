import { ArenaPage } from '@/components/ArenaPage';

export default function ShapeGridPage() {
  return (
    <ArenaPage
      slug="grid"
      label="Grid"
      number="01"
      heroHeadline={<>The physical and regulatory <em>foundation</em> of the transition.</>}
      heroLead="Keeping the lights on while rebuilding the system that delivers them. The work covers reliability, distribution, transmission, interconnection, and the regulatory frameworks that govern all of it."
      impact={[
        { num: '74%', label: 'of US megawatt-hours sold come from utilities in the Grid working groups' },
        { num: '23', label: 'state commissions cited Grid arena research in 2025' },
        { num: '147', label: 'tariff filings tracked in DELTa across distribution and transmission' },
        { num: '$2.1B', label: 'in member-reported avoided cost through peer-tested grid investments' },
      ]}
      topics={[
        { title: 'Storms and resilience', blurb: 'Hardening the grid against the weather events that already happen.', meta: '8 active members · 3 reports in 2026' },
        { title: 'Emerging tech', blurb: 'Grid-enhancing technologies, dynamic line ratings, advanced inverters.', meta: '12 active members · 2 reports in 2026' },
        { title: 'Rate design', blurb: 'How distribution capital gets recovered without breaking affordability.', meta: '14 active members · NASUCA endorsement, Apr 2026' },
        { title: 'Policy', blurb: 'FERC orders, state IRPs, and the federal-state divide on transmission.', meta: '9 active members · Quarterly briefing series' },
      ]}
      spotlights={[
        {
          quote: 'SEPA basically gets you to the information you need that much faster. It gives you that forum to discuss openly and freely with other program managers and utilities what they have learned.',
          name: 'Jake Wade',
          role: 'Renewable Energy Program Manager',
          org: 'Seattle City Light',
          tag: 'Utility',
          tagColor: 'utility',
        },
        {
          quote: 'SEPA provides us the depth of knowledge that I cannot get on my own. The research is an immeasurable benefit to utilities that do not have the staff.',
          name: 'Gerald Buydos',
          role: 'Solar Program Manager',
          org: 'City of Riverside, CA',
          tag: 'Utility',
          tagColor: 'utility',
        },
        {
          quote: 'The cross-jurisdictional evidence let me cite peer-state precedent in three different orders this year. That kind of comparison work used to take months.',
          name: '[Commissioner Name]',
          role: 'Commissioner',
          org: '[Western state PUC]',
          tag: 'Regulator',
          tagColor: 'regulator',
        },
      ]}
      workingGroups={[
        { count: '01', name: 'Distribution System Planning', desc: 'How distribution utilities are integrating DERs, EVs, and load growth into their planning cycles.' },
        { count: '02', name: 'Storm Resilience and Recovery', desc: 'Five utilities, five playbooks for post-event recovery — and the patterns that travel.' },
        { count: '03', name: 'Transmission and Interconnection', desc: 'The interconnection queue crisis, the new FERC orders, and what utilities are doing to clear bottlenecks.' },
        { count: '04', name: 'Rate Design for Reliability', desc: 'Cost-of-service studies, performance-based rates, and the language commissions actually accept.' },
      ]}
      research={[
        {
          label: 'Flagship · Apr 2026',
          title: 'After the storm: Five utilities, five playbooks for post-event recovery',
          blurb: 'A pattern study of utility response to 2024-25 storm events. What worked, what scaled, what only worked once.',
          meta: ['38 pages', 'Utility, Regulator', 'Apr 2026'],
          feature: true,
        },
        {
          label: 'Research · Mar 2026',
          title: 'Grid-enhancing technologies: Deployment status across 30 utilities',
          blurb: 'Dynamic line ratings, advanced power flow control, and topology optimization in the field.',
          meta: ['Mar 2026'],
        },
        {
          label: 'Snapshot · Feb 2026',
          title: 'Why distribution planning needs to catch up with the load forecast',
          blurb: 'A short brief on the gap between integrated resource plans and what distribution actually has to deliver.',
          meta: ['Feb 2026'],
        },
      ]}
      membersLeading={{
        headline: 'Twenty utilities, four state commissions, eleven providers shaping the grid.',
        logos: ['[Mid-Atlantic IOU]', '[Western coop]', '[Southeast IOU]', '[Texas muni]', '[NW utility]', '[State PUC]', '[Grid software co.]', '[Storage provider]', '+ many more'],
      }}
    />
  );
}
