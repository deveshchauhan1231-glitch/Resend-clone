const codeLines: { num: number; tokens: { t: string; v: string }[] }[] = [
  { num: 1,  tokens: [{ t: 'kw', v: 'import' }, { t: 'plain', v: ' { Body, Button, Column, Container, Head, Heading, Hr, Html }' }] },
  { num: 2,  tokens: [{ t: 'kw', v: 'import' }, { t: 'plain', v: ' * ' }, { t: 'kw', v: 'as' }, { t: 'plain', v: ' React ' }, { t: 'kw', v: 'from' }, { t: 'str', v: " 'react'" }, { t: 'plain', v: ';' }] },
  { num: 3,  tokens: [] },
  { num: 4,  tokens: [{ t: 'kw', v: 'const' }, { t: 'plain', v: ' ' }, { t: 'fn', v: 'WelcomeEmail' }, { t: 'plain', v: ' = ({' }] },
  { num: 5,  tokens: [{ t: 'plain', v: '  ' }, { t: 'prop', v: 'username' }, { t: 'plain', v: " = '" }, { t: 'str', v: 'Steve' }, { t: 'plain', v: "'," }] },
  { num: 6,  tokens: [{ t: 'plain', v: '  ' }, { t: 'prop', v: 'company' }, { t: 'plain', v: " = '" }, { t: 'str', v: 'ACME' }, { t: 'plain', v: "'," }] },
  { num: 7,  tokens: [{ t: 'plain', v: '}: ' }, { t: 'fn', v: 'WelcomeEmailProps' }, { t: 'plain', v: ') => {' }] },
  { num: 8,  tokens: [{ t: 'kw', v: '  const' }, { t: 'plain', v: ' previewText = ' }, { t: 'str', v: '`Welcome to ${company}, ${username}!`' }, { t: 'plain', v: ';' }] },
  { num: 9,  tokens: [] },
  { num: 10, tokens: [{ t: 'kw', v: '  return' }, { t: 'plain', v: ' (' }] },
  { num: 11, tokens: [{ t: 'plain', v: '    ' }, { t: 'tag', v: '<Html>' }] },
  { num: 12, tokens: [{ t: 'plain', v: '      ' }, { t: 'tag', v: '<Head />' }] },
  { num: 13, tokens: [{ t: 'plain', v: '      ' }, { t: 'tag', v: '<Preview>' }, { t: 'plain', v: '{previewText}' }, { t: 'tag', v: '</Preview>' }] },
  { num: 14, tokens: [{ t: 'plain', v: '      ' }, { t: 'tag', v: '<Tailwind>' }] },
  { num: 15, tokens: [{ t: 'plain', v: '        ' }, { t: 'tag', v: '<Body' }, { t: 'prop', v: ' className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"bg-white my-auto mx-auto font-sans"' }, { t: 'tag', v: '>' }] },
  { num: 16, tokens: [{ t: 'plain', v: '          ' }, { t: 'tag', v: '<Container' }, { t: 'prop', v: ' className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"my-10 mx-auto p-5 m-{465px}"' }, { t: 'tag', v: '>' }] },
  { num: 17, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '<Section' }, { t: 'prop', v: ' className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"mt-8"' }, { t: 'tag', v: '>' }] },
  { num: 18, tokens: [{ t: 'plain', v: '              ' }, { t: 'tag', v: '<Img' }] },
  { num: 19, tokens: [{ t: 'plain', v: '                ' }, { t: 'prop', v: 'src' }, { t: 'plain', v: '=' }, { t: 'str', v: '`${baseUrl}/static/example-logo.png`' }] },
  { num: 20, tokens: [{ t: 'plain', v: '                ' }, { t: 'prop', v: 'width' }, { t: 'plain', v: '=' }, { t: 'str', v: '"80"' }] },
  { num: 21, tokens: [{ t: 'plain', v: '                ' }, { t: 'prop', v: 'height' }, { t: 'plain', v: '=' }, { t: 'str', v: '"80"' }] },
  { num: 22, tokens: [{ t: 'plain', v: '                ' }, { t: 'prop', v: 'alt' }, { t: 'plain', v: '=' }, { t: 'str', v: '"Logo Example"' }] },
  { num: 23, tokens: [{ t: 'plain', v: '                ' }, { t: 'prop', v: 'className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"my-0 mx-auto"' }] },
  { num: 24, tokens: [{ t: 'plain', v: '              ' }, { t: 'tag', v: '/>' }] },
  { num: 25, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '</Section>' }] },
  { num: 26, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '<Heading' }, { t: 'prop', v: ' className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"text-2xl font-normal text-center"' }, { t: 'tag', v: '>' }] },
  { num: 27, tokens: [{ t: 'plain', v: '              Welcome to ' }, { t: 'tag', v: '<strong>' }, { t: 'plain', v: '{company}' }, { t: 'tag', v: '</strong>' }, { t: 'plain', v: ', {username}!' }] },
  { num: 28, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '</Heading>' }] },
  { num: 29, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '<Text' }, { t: 'prop', v: ' className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"text-sm"' }, { t: 'tag', v: '>' }] },
  { num: 30, tokens: [{ t: 'plain', v: '              Hello {username},' }] },
  { num: 31, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '</Text>' }] },
  { num: 32, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '<Text' }, { t: 'prop', v: ' className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"text-sm"' }, { t: 'tag', v: '>' }] },
  { num: 33, tokens: [{ t: 'plain', v: "              We're excited to have you onboard at " }, { t: 'tag', v: '<strong>{compa' }] },
  { num: 34, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '</Text>' }] },
  { num: 35, tokens: [{ t: 'plain', v: '            ' }, { t: 'tag', v: '<Section' }, { t: 'prop', v: ' className' }, { t: 'plain', v: '=' }, { t: 'str', v: '"text-center mt-[32px] mb-[32px]"' }, { t: 'tag', v: '>' }] },
  { num: 36, tokens: [{ t: 'plain', v: '              ' }, { t: 'tag', v: '<Button' }] },
  { num: 37, tokens: [{ t: 'plain', v: '                ' }, { t: 'prop', v: 'pX' }, { t: 'plain', v: '={20}' }] },
  { num: 38, tokens: [{ t: 'plain', v: '                ' }, { t: 'prop', v: 'pY' }, { t: 'plain', v: '={12}' }] },
]

const sidebarFiles = [
  { name: 'user-welcome.tsx', active: true },
  { name: 'reset-password.tsx', active: false },
  { name: 'user-invite.tsx', active: false },
  { name: 'weekly-digest.tsx', active: false },
]

function CodeToken({ t, v }: { t: string; v: string }) {
  const cls =
    t === 'kw'   ? 're-kw'   :
    t === 'str'  ? 're-str'  :
    t === 'fn'   ? 're-fn'   :
    t === 'prop' ? 're-prop' :
    t === 'tag'  ? 're-tag'  :
    're-plain'
  return <span className={cls}>{v}</span>
}

export function ReactEmailShowcase() {
  return (
    <section className="re-section" id="react-email">
      <div className="re-heading-block">
        <div className="section-orb-container">
        <video
          className="section-orb-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/3d-react.mp4" type="video/mp4" />  
        </video>
      </div>
        <h2>Develop emails using React</h2>
        <p>
          Create beautiful templates without having to deal with &lt;table&gt; layouts and HTML.
          <br />
          Powered by react-email, our open source component library.
        </p>
        <div className="re-cta-row">
          <a className="re-btn-primary" href="#start">
            Get started <span className="re-btn-chevron">›</span>
          </a>
          <a className="re-btn-ghost" href="#docs">
            Check the docs <span className="re-btn-chevron">›</span>
          </a>
        </div>
      </div>

      <div className="re-window" aria-label="React Email editor preview">
        <div className="re-window-chrome">
          <div className="re-traffic-lights">
            <span className="re-dot re-dot-close" />
            <span className="re-dot re-dot-min"   />
            <span className="re-dot re-dot-max"   />
          </div>
          <div className="re-chrome-actions">
            <button className="re-chrome-btn" type="button" aria-label="Comment">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
            <button className="re-chrome-btn" type="button" aria-label="Mobile preview">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </button>
            <button className="re-chrome-btn" type="button" aria-label="Dark mode">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
            <button className="re-chrome-btn" type="button" aria-label="Settings">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="re-split-body">
          <div className="re-editor-pane">
            <aside className="re-file-sidebar">
              {sidebarFiles.map((f) => (
                <div
                  key={f.name}
                  className={`re-file-item${f.active ? ' re-file-active' : ''}`}
                >
                  <span className="re-file-badge">ts</span>
                  <span className="re-file-name">{f.name}</span>
                </div>
              ))}
            </aside>

            <div className="re-code-pane" aria-label="JSX code">
              <pre className="re-code-pre">
                {codeLines.map((line) => (
                  <div className="re-code-line" key={line.num}>
                    <span className="re-line-num">{line.num}</span>
                    <span className="re-line-content">
                      {line.tokens.map((tok, i) => (
                        <CodeToken key={i} t={tok.t} v={tok.v} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          </div>

          <div className="re-preview-pane" aria-label="Email preview">
            <div className="re-email-card">
              <div className="re-email-logo-wrap">
                <div className="re-email-orb">
                  <div className="re-orb-inner" />
                  <div className="re-orb-dot" />
                </div>
              </div>

              <h3 className="re-email-heading">
                Welcome to <strong>ACME</strong>, user!
              </h3>

              <div className="re-email-body-text">
                <p className="re-email-line re-email-salutation">Hello Steve,</p>
                <p className="re-email-line">
                  We're excited to have you onboard at <strong>ACME</strong>. We hope you
                  enjoy your journey with us. If you have any questions or need
                  assistance, feel free to reach out.
                </p>
                <a className="re-email-cta-btn" href="#start">Get Started</a>
                <p className="re-email-line re-email-sign">
                  Cheers,<br />The ACME Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
