import {
  SiNodedotjs,
  SiServerless,
  SiRuby,
  SiPython,
  SiPhp,
  SiGo,
  SiRust,
  SiElixir,
  SiDotnet,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { LuTerminal, LuBraces, LuMail } from 'react-icons/lu'

const languages = [
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Serverless', Icon: SiServerless },
  { name: 'Ruby', Icon: SiRuby },
  { name: 'Python', Icon: SiPython },
  { name: 'PHP', Icon: SiPhp },
  { name: 'CLI', Icon: LuTerminal },
  { name: 'Go', Icon: SiGo },
  { name: 'Rust', Icon: SiRust },
  { name: 'Java', Icon: FaJava },
  { name: 'Elixir', Icon: SiElixir },
  { name: '.NET', Icon: SiDotnet },
  { name: 'REST', Icon: LuBraces },
  { name: 'SMTP', Icon: LuMail },
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
          {languages.map(({ name, Icon }) => (
            <div
              className={`language-item ${name === 'Ruby' ? 'selected' : ''}`}
              key={name}
            >
              <div className="language-icon">
                <Icon size={28} />
              </div>
              <span className="language-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}