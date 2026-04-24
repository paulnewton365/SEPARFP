import { Annotation } from '@/components/Annotation';

export default function ResearchPage() {
  return (
    <>
      {/* HERO */}
      <section className="research-hero">
        <div className="research-hero-inner">
          <div className="eyebrow">The evidence engine</div>
          <h1>
            Research that helps you decide, not just describe.
            <Annotation
              number={6}
              note="Research as a noun, not Knowledge Center. Every listing leads with abstract, audience, and decision relevance, directly addressing the assessment's critique."
            />
          </h1>
          <p>
            Every report we publish starts with the question it answers. Every dataset leads with
            how it&apos;s used. Every abstract tells you whether it&apos;s for you before you click.
          </p>
        </div>

        {/* TOOLS */}
        <div className="tools-row">
          <div className="tool-card featured">
            <div className="label">DELTa · Flagship database</div>
            <h3>Emerging large-load tariffs, mapped.</h3>
            <p>
              The definitive tracker of how utilities are pricing the next decade of demand. 147
              tariffs, 42 states, updated weekly. Cited by FERC, the DOE, and 60+ utilities.
            </p>
            <div className="data-mini">
              <div>
                <div className="num">147</div>
                <div className="desc">Tariffs tracked</div>
              </div>
              <div>
                <div className="num">42</div>
                <div className="desc">States covered</div>
              </div>
              <div>
                <div className="num">Weekly</div>
                <div className="desc">Update cadence</div>
              </div>
            </div>
          </div>
          <div className="tool-card">
            <div className="label">Carbon-Reduction Tracker · Public tool</div>
            <h3>Where the utility sector actually is on decarbonization.</h3>
            <p>
              Utility-level carbon goals, emissions data, and the gap between commitment and
              delivery. Updated quarterly. Free to the public.
            </p>
            <div className="data-mini">
              <div>
                <div className="num">312</div>
                <div className="desc">Utilities tracked</div>
              </div>
              <div>
                <div className="num">81%</div>
                <div className="desc">Of US generation</div>
              </div>
              <div>
                <div className="num">Quarterly</div>
                <div className="desc">Refresh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + LIST */}
      <section className="section" style={{ background: 'var(--paper)', paddingTop: 48 }}>
        <div className="filter-bar">
          <span className="filter-label">Arena</span>
          <span className="filter-chip active">All</span>
          <span className="filter-chip">Grid</span>
          <span className="filter-chip">Growth</span>
          <span className="filter-chip">Globe</span>
          <span className="filter-label" style={{ marginLeft: 16 }}>Audience</span>
          <span className="filter-chip">Utility</span>
          <span className="filter-chip">Regulator</span>
          <span className="filter-chip">Provider</span>
          <span className="filter-chip">Buyer</span>
          <span className="filter-label" style={{ marginLeft: 16 }}>Type</span>
          <span className="filter-chip">Report</span>
          <span className="filter-chip">Brief</span>
          <span className="filter-chip">Data</span>
          <span className="filter-chip">Blog</span>
        </div>

        <div className="report-list">
          <div className="report-row">
            <div className="report-date">Apr 2026</div>
            <div className="report-main">
              <h4>The Large Load Playbook: Principles for rate design in a data center decade</h4>
              <div className="abstract">
                A cross-jurisdictional framework for utilities and regulators managing 100+ MW
                customer requests. Draws on 147 tariff filings across 42 states and benchmarks
                from six leading utilities.
              </div>
            </div>
            <div className="report-audience">
              <span>Utility</span>
              <span>Regulator</span>
            </div>
            <div className="report-type">Flagship Report</div>
            <div className="report-arrow">→</div>
          </div>

          <div className="report-row">
            <div className="report-date">Mar 2026</div>
            <div className="report-main">
              <h4>After the storm: Five utilities, five playbooks for post-event recovery</h4>
              <div className="abstract">
                Cross-utility synthesis of the 2025 storm season. Cost data, restoration timelines,
                and communications frameworks that worked.
              </div>
            </div>
            <div className="report-audience">
              <span>Utility</span>
            </div>
            <div className="report-type">Resilient by Design</div>
            <div className="report-arrow">→</div>
          </div>

          <div className="report-row">
            <div className="report-date">Mar 2026</div>
            <div className="report-main">
              <h4>VPP &amp; DER Policy Developments: Q1 2026 update</h4>
              <div className="abstract">
                Quarterly snapshot of virtual power plant and distributed energy resource policy
                across 50 states. Enrollment data, compensation models, and open dockets.
              </div>
            </div>
            <div className="report-audience">
              <span>Regulator</span>
              <span>Provider</span>
            </div>
            <div className="report-type">Quarterly</div>
            <div className="report-arrow">→</div>
          </div>

          <div className="report-row">
            <div className="report-date">Feb 2026</div>
            <div className="report-main">
              <h4>Grid-enhancing technologies: Deployment status across 30 utilities</h4>
              <div className="abstract">
                Where dynamic line rating, topology optimization, and power flow control are
                actually running. Interconnection impact and cost data included.
              </div>
            </div>
            <div className="report-audience">
              <span>Utility</span>
              <span>Regulator</span>
            </div>
            <div className="report-type">Brief</div>
            <div className="report-arrow">→</div>
          </div>

          <div className="report-row">
            <div className="report-date">Feb 2026</div>
            <div className="report-main">
              <h4>What the buyers want: Fortune 500 energy procurement signals</h4>
              <div className="abstract">
                Synthesized interviews with 28 corporate sustainability leads on what they need
                from utilities in the next three years. Procurement trends and unmet demand.
              </div>
            </div>
            <div className="report-audience">
              <span>Buyer</span>
              <span>Utility</span>
            </div>
            <div className="report-type">Research</div>
            <div className="report-arrow">→</div>
          </div>

          <div className="report-row">
            <div className="report-date">Jan 2026</div>
            <div className="report-main">
              <h4>Energy equity metrics: What the sector is actually measuring</h4>
              <div className="abstract">
                A scan of 45 utilities&apos; equity reporting. Common frameworks, gaps, and a
                proposed minimum viable metric set.
              </div>
            </div>
            <div className="report-audience">
              <span>Utility</span>
              <span>Regulator</span>
            </div>
            <div className="report-type">Snapshot</div>
            <div className="report-arrow">→</div>
          </div>

          <div className="report-row">
            <div className="report-date">Jan 2026</div>
            <div className="report-main">
              <h4>Transportation electrification: Charging the heavy-duty decade</h4>
              <div className="abstract">
                Medium- and heavy-duty fleet electrification pilots across 12 utilities. Load
                profiles, infrastructure costs, and customer acquisition data.
              </div>
            </div>
            <div className="report-audience">
              <span>Utility</span>
              <span>Provider</span>
            </div>
            <div className="report-type">Flagship Report</div>
            <div className="report-arrow">→</div>
          </div>
        </div>
      </section>
    </>
  );
}
