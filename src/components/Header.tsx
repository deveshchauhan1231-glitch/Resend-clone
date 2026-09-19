import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header-wrapper">
      <div className="site-header">
        <a className="brand-logo" href="#top" aria-label="Resend home">
          <img  src="/resend-logo.svg" alt="Resend" />
          
        </a>

        <nav className={`nav-menu ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {['Features', 'Company', 'Enterprise', 'Help', 'Docs', 'AI'].map((item) => (
            <a className="nav-item" href={`#${item.toLowerCase()}`} key={item}>
              {item}
              <ChevronDown size={13} className="chevron-icon" />
            </a>
          ))}
          <a className="nav-item" href="#pricing">Pricing</a>
        </nav>

        <div className="header-actions">
          <a className="login-link" href="#login">Log in</a>
          <a className="button button-header" href="#start">
  Get started
  <span className="btn-arrow">›</span>
</a>

        </div>

        <button 
          className="mobile-toggle-btn" 
          type="button" 
          aria-label="Toggle navigation" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}
