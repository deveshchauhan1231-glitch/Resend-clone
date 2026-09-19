import { Code2, Globe2, PlaySquare } from 'lucide-react'

const columns = [
  {
    title: 'Features',
    links: ['Automations', 'Audiences', 'Broadcasts', 'Inbound', 'Templates', 'Webhooks', 'Dedicated IPs'],
  },
  {
    title: 'Resources',
    links: ['Changelog', 'Pricing', 'Enterprise', 'Security', 'SOC 2', 'GDPR', 'Brand'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Clubs', 'Customers', 'Humans', 'Philosophy'],
  },
  {
    title: 'Help',
    links: ['Support', 'Status', 'Migrate', 'Knowledge base', 'Legal policies'],
  },
  {
    title: 'Community',
    links: ['Events', 'Insiders', 'Open source', 'Wallpapers'],
  },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-column">
        
        <p className="footer-address">
          2261 Market Street #5039<br />
          San Francisco, CA 94114
        </p>

        <div className="social-row">
          <a href="https://twitter.com/resend" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
            <span>𝕏</span>
          </a>
          <a href="https://github.com/resend" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
            <Code2 size={16} />
          </a>
          <a href="https://resend.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Website">
            <Globe2 size={16} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
            <PlaySquare size={16} />
          </a>
        </div>

        <div className="systems-status">
          <span className="status-pulsing-dot" />
          <span>All systems operational</span>
        </div>
      </div>

      <div className="footer-links-grid">
        {columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4 className="footer-col-title">{col.title}</h4>
            <ul className="footer-link-list">
              {col.links.map((link) => (
                <li key={link}>
                  <a className="footer-link" href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
