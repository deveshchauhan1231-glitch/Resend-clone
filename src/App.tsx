import { CompanyLogos } from './components/CompanyLogos'
import { BeyondEditing } from './components/BeyondEditing'
import { ControlCenter } from './components/ControlCenter'
import { Deliverability } from './components/Deliverability'
import { EditorShowcase } from './components/EditorShowcase'
import { Header } from './components/Header'
import { Integrations } from './components/Integrations'
import { ProductShowcase } from './components/ProductShowcase'
import { SiteFooter } from './components/SiteFooter'
import { Testimonials } from './components/Testimonials'
import { ReactEmailShowcase } from './components/ReactEmailShowcase.tsx'
import Svg from "./components/svg.tsx"
import './App.css'

function App() {
  return (
    <div className="app-shell" id="top">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
  <div className="hero-inner">
    <div className="hero-copy-block">
      <a className="event-pill" href="#forward">
        
        <span>Join us at Resend Forward</span>
        <span className="pill-arrow">›</span>
      </a>

      <h1>
        Email for<br />
        <em>developers</em>
      </h1>

      <p>
        The best way to reach humans instead of spam folders.
        <br />
        Deliver transactional and marketing emails at scale.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="#start">
          Get started
          <span className="btn-arrow">›</span>
        </a>

        <a className="muted-link" href="#docs">
          Documentation
        </a>
      </div>
    </div>

    <div className="hero-media-wrapper">
      <div className="hero-video-glow" />

      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/cube.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</section>
        {/* LOGOS */}
        <CompanyLogos />

        {/* INTEGRATIONS */}
        <Integrations />

        {/* CODE SECTION */}
        <section className="code-section">
          <div className="code-card">
            <div className="code-tabs">
              <div className="code-tab active">
                <span className="tab-icon">◈</span>
                <span>Ruby</span>
              </div>
              <div className="code-tab">
                <span className="tab-icon">▣</span>
                <span>Rails</span>
              </div>
              <div className="code-tab">
                <span className="tab-icon">▣</span>
                <span>Sinatra</span>
              </div>
              <button className="code-copy-btn" type="button" title="Copy code">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <pre className="code-content">
              <code>
                <span className="line-num">1</span>  <span className="kw">require</span> <span className="str">"resend"</span>{'\n'}
                <span className="line-num">2</span>{'\n'}
                <span className="line-num">3</span>  <span className="const">Resend</span>.api_key = <span className="str">"re_xxxxxxxxx"</span>{'\n'}
                <span className="line-num">4</span>{'\n'}
                <span className="line-num">5</span>  params = {'{'}{'\n'}
                <span className="line-num">6</span>    <span className="prop">"from"</span>: <span className="str">"onboarding@resend.dev"</span>,{'\n'}
                <span className="line-num">7</span>    <span className="prop">"to"</span>: <span className="str">"delivered@resend.dev"</span>,{'\n'}
                <span className="line-num">8</span>    <span className="prop">"subject"</span>: <span className="str">"Hello World"</span>,{'\n'}
                <span className="line-num">9</span>    <span className="prop">"html"</span>: <span className="str">"&lt;strong&gt;it works&lt;/strong&gt;"</span>{'\n'}
                <span className="line-num">10</span>  {'}'}{'\n'}
                <span className="line-num">11</span>{'\n'}
                <span className="line-num">12</span>  sent = <span className="const">Resend</span>::<span className="const">Emails</span>.send(params){'\n'}
                <span className="line-num">13</span>  puts sent
              </code>
            </pre>
            <div className="code-actions">
              <a href="https://github.com/resend/resend-ruby" target="_blank" rel="noreferrer">
                <span>⌘</span> View on GitHub
              </a>
              <span className="action-sep">•</span>
              <a href="#download">
                <span>↓</span> Download ZIP
              </a>
            </div>
          </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        <ProductShowcase />

        {/* EDITOR SECTION */}
        <section className="closing-section">
          <div className="section-orb-container">
            <video
              className="section-orb-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/3d-broadcast.mp4" type="video/mp4" />
            </video>
          </div>
          <h2>Write using a delightful editor</h2>
          <p>
            A modern editor that makes it easy for anyone to write, format, and send emails.
            <br />
            Visually build your email and change the design by adding custom styles.
          </p>
          <EditorShowcase />
        </section>
        <ReactEmailShowcase />
        {/* BEYOND EDITING */}
        <BeyondEditing />

        {/* DELIVERABILITY */}
        <Deliverability />

        {/* TESTIMONIAL HIGHLIGHT */}
        <section className="testimonial-section">
          <div className="testimonial-mark">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </div>
          <blockquote>
            “Resend is transforming email for developers.
            <br />
            Simple interface, easy integrations, handy
            <br />
            templates. What else could we ask for.”
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">GR</div>
            <div className="author-info">
              <b>Guillermo Rauch</b>
              <small>CEO, Vercel</small>
            </div>
          </div>
        </section>

        {/* CONTROL CENTER */}
        <ControlCenter />

        {/* TESTIMONIALS RAIL */}
        <Testimonials />

        {/* FINAL CTA */}
<section className="final-cta">
  <div className="final-cta-content">
    <h2>
      Email reimagined.<br />
      <em>Available today.</em>
    </h2>
    <a className="button button-primary" href="#start">
      Get started 
    </a>
  </div>
  <div className="cta-wordmark">
    <Svg />
  </div>
</section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
