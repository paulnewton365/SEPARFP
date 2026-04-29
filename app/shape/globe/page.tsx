import { ArenaPage } from '@/components/ArenaPage';

export default function ShapeGlobePage() {
  return (
    <ArenaPage
      slug="globe"
      label="Globe"
      number="03"
      heroHeadline={<>The lessons we bring back to the US sector <em>—</em> and make the case for.</>}
      heroLead="Innovation crosses borders. The work scans cross-border lessons, climate-equity outcomes, and the international evidence base that informs how the US sector can do better."
      impact={[
        { num: '12', label: 'cross-border collaborations with utilities and federal labs since 2023' },
        { num: '24', label: 'comparative case studies feeding US-side working groups' },
        { num: '8', label: 'federal labs and academic partners in the Globe arena' },
        { num: '3', label: 'state energy offices co-funding international scans' },
      ]}
      topics={[
        { title: 'Cross-border infrastructure', blurb: 'How transmission, gas, and grid services move across the US-Canada and US-Mexico interfaces.', meta: '6 active members · 5 cross-border projects' },
        { title: 'Equity and just transition', blurb: 'Lessons from international precedents on community-centered energy transition.', meta: '8 active members · Annual outcomes report' },
        { title: 'International market design', blurb: 'How European and APAC capacity markets, demand response, and tariff structures translate.', meta: '4 academic partners · Quarterly briefings' },
        { title: 'Climate and resilience', blurb: 'Heat domes, wildfires, and the international evidence on grid hardening that holds up.', meta: '6 active members · 3 reports in 2026' },
      ]}
      spotlights={[
        {
          quote: 'The international scans give us evidence we cannot generate domestically. When we tell our commission what Australia or Germany has tried, the conversation gets unstuck.',
          name: '[Director, Energy Office]',
          role: 'Director',
          org: '[State energy office]',
          tag: 'Regulator',
          tagColor: 'regulator',
        },
        {
          quote: 'Cross-border collaboration with the lab gave us a year of comparative data we would never have produced ourselves. It showed up in our IRP filing.',
          name: '[Resource Planning Lead]',
          role: 'Director, Resource Planning',
          org: '[Border IOU]',
          tag: 'Utility',
          tagColor: 'utility',
        },
        {
          quote: 'The just-transition working group is where the policy ideas we hear about in international forums get pressure-tested for the US context.',
          name: '[Equity Director]',
          role: 'Equity Director',
          org: '[National NGO]',
          tag: 'Regulator',
          tagColor: 'regulator',
        },
      ]}
      workingGroups={[
        { count: '01', name: 'Cross-border Transmission', desc: 'Five active US-Canada and US-Mexico projects. Regulatory status, build timelines, and what is at stake for each grid.' },
        { count: '02', name: 'International Market Design', desc: 'How European and APAC capacity markets, demand response, and tariff structures translate to US contexts.' },
        { count: '03', name: 'Just Transition Working Group', desc: 'International evidence on community-centered transition. Where policy ideas meet regulatory reality.' },
        { count: '04', name: 'Climate and Resilience Scan', desc: 'Heat, wildfire, and storm evidence from international peers. What the US sector should adopt and what it should not.' },
      ]}
      research={[
        {
          label: 'Flagship · Mar 2026',
          title: 'Cross-border transmission: Five projects, five regulatory geographies',
          blurb: 'A status check on the most consequential cross-border transmission projects in North America. What is at stake for both grids.',
          meta: ['28 pages', 'Utility, Regulator', 'Mar 2026'],
          feature: true,
        },
        {
          label: 'Research · Feb 2026',
          title: 'International capacity markets: What translates and what does not',
          blurb: 'How European, Australian, and East Asian capacity markets are designed, what they get right, and what does not survive translation.',
          meta: ['Feb 2026'],
        },
        {
          label: 'Snapshot · Dec 2025',
          title: 'Just transition outcomes: Five international precedents',
          blurb: 'A short brief on community-centered transition models from outside the US, with US-context assessment.',
          meta: ['Dec 2025'],
        },
      ]}
      membersLeading={{
        headline: 'Eight utilities and three federal labs in cross-border conversations.',
        logos: ['[Border IOU]', '[Federal lab]', '[Cross-border RTO]', '[State energy office]', '[Equity NGO]', '[Academic partner]', '+ many more'],
      }}
    />
  );
}
