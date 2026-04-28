import { SocialLinks } from './SocialIcons';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="logo" style={{ marginBottom: 12 }}>
            <div className="logo-mark" />
            <div className="logo-text">
              SEPA<span>Smart Electric Power Alliance</span>
            </div>
          </div>
          <p className="footer-brand-copy">
            Let&apos;s shape energy&apos;s transition.
            <br />
            1401 Wilson Blvd, Arlington, VA 22209
          </p>
          <div style={{ marginTop: 20 }}>
            <SocialLinks variant="light" />
          </div>
        </div>
        <div className="footer-col">
          <h5>Shape</h5>
          <ul>
            <li><a>Grid</a></li>
            <li><a>Growth</a></li>
            <li><a>Globe</a></li>
            <li><a>Current campaign</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Research</h5>
          <ul>
            <li><a>All research</a></li>
            <li><a>DELTa database</a></li>
            <li><a>Carbon-Reduction Tracker</a></li>
            <li><a>Snapshots</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Membership</h5>
          <ul>
            <li><a>Events</a></li>
            <li><a>Working groups</a></li>
            <li><a>SEPA Academy</a></li>
            <li><a>Power Player Awards</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>About</h5>
          <ul>
            <li><a>Leadership</a></li>
            <li><a>Team</a></li>
            <li><a>Neutrality</a></li>
            <li><a>Careers</a></li>
            <li><a>Fortnightly</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <div>© 2026 Smart Electric Power Alliance. A 501(c)(3) nonprofit.</div>
        <div>Privacy · Terms · Accessibility</div>
      </div>
    </footer>
  );
}
