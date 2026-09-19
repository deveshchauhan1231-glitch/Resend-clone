import { useState } from 'react'
import { BarChart3,  ShieldCheck, Eye } from 'lucide-react'

const controls = [
  { id: 'analytics', icon: BarChart3, label: 'Intuitive analytics' },
  { id: 'visibility', icon: Eye, label: 'Full visibility' },
  { id: 'auth', icon: ShieldCheck, label: 'Domain authentication' },
]

export function ControlCenter() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="control-section" id="control">
      <div className="section-orb-container">
        <video
          className="section-orb-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/3d-control.mp4" type="video/mp4" />  
        </video>
      </div>

      <h2>
        Everything in your<br />
        <em>control</em>
      </h2>
      <p>
        All the features you need to manage your email sending, troubleshoot with
        <br />
        detailed logs, and protect your domain reputation — without the friction.
      </p>

      <div className="control-tabs">
        {controls.map((tab, index) => {
          const IconComponent = tab.icon
          return (
            <button
              className={`control-tab ${activeTab === index ? 'active' : ''}`}
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-icon-wrap">
                <IconComponent size={20} />
              </span>
              <span className="tab-label">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <div className="metrics-dashboard">
        {/* Sidebar */}
        <img className="metrics-screenshot" src="/screenshot-metrics.webp" />

        {/* Dashboard Main Area */}
        

          

            
      </div>
    </section>
  )
}
