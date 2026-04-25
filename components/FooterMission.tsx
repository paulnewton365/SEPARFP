import { Annotation } from './Annotation';

export function FooterMission() {
  return (
    <section className="footer-mission">
      <div className="footer-mission-inner">
        <div>
          <div className="eyebrow">The mission, always present</div>
          <h3>
            Accelerate the electric power sector&apos;s transformation to a modern energy future.
            <Annotation
              number={8}
              note="The mission lives at the foot of every page so that brand and proof become the closing frame of every user journey. Not buried in About, not assumed — declared."
            />
          </h3>
          <p>
            Through convening, education, research, collaboration, and insights. SEPA is
            independent, unbiased, and funded by members. That&apos;s what makes the work
            trustworthy.
          </p>
          <div className="footer-mini-proof">
            <div className="stat">
              <strong>1,000+</strong>Members
            </div>
            <div className="stat">
              <strong>74%</strong>of US MWh
            </div>
            <div className="stat">
              <strong>482</strong>Research assets
            </div>
            <div className="stat">
              <strong>0</strong>Dollars lobbied
            </div>
          </div>
        </div>
        <div className="footer-mission-actions">
          <a className="btn">Participate</a>
          <a className="btn ghost">Subscribe to the brief</a>
          <a className="link-arrow" style={{ marginTop: 8 }}>
            Read our neutrality principle →
          </a>
        </div>
      </div>
    </section>
  );
}
