const languages = [
  { name: 'Node.js', icon: 'JS' },
  { name: 'Serverless', icon: '⚡' },
  { name: 'Ruby', icon: '◈' },
  { name: 'Python', icon: 'py' },
  { name: 'PHP', icon: 'php' },
  { name: 'CLI', icon: '>_' },
  { name: 'Go', icon: 'go' },
  { name: 'Rust', icon: 'rs' },
  { name: 'Java', icon: '☕' },
  { name: 'Elixir', icon: 'ex' },
  { name: '.NET', icon: '.NET' },
  { name: 'REST', icon: '{ }' },
  { name: 'SMTP', icon: 'SMTP' },
]

export function Integrations() {
  return (
    <section className="integrations-section" id="docs">
      <div className="section-orb-container">
        <video
          className="section-orb-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/3d-integrate-morning.mp4" type="video/mp4" />  
        </video>
      </div>

      <h2>
        Integrate <span className="text-gradient-amber">this morning</span>
      </h2>
      <p>
        A simple, elegant interface so you can start sending emails in minutes. It fits
        <br />
        right into your code with SDKs for your favorite programming languages.
      </p>

      <div className="languages-scroll-container">
        <div className="language-row">
          {languages.map((lang) => (
            <div
              className={`language-item ${lang.name === 'Ruby' ? 'selected' : ''}`}
              key={lang.name}
            >
              <div className="language-icon">
                {lang.icon}
              </div>
              <span className="language-name">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
