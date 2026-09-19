export function BeyondEditing() {
  return (
    <section className="beyond-section" id="analytics">
      <div className="beyond-heading">
        <h2>
          Go beyond<br />
          <em>editing</em>
        </h2>
        <p>
          Group and control your contacts in a simple and intuitive way.
          <br />
          Straightforward analytics and reporting tools that will help you send better emails.
        </p>
      </div>

      <div className="beyond-cards">
        {/* Contact Management Card */}
        <article className="beyond-card">
          <div className="dashboard-preview contacts">
            <div className="audience-header-row">
              <img className="audience-img" src="/screenshot-zoom-audience.webp"/>
            </div>

            
            
          </div>

          <div className="beyond-card-footer">
            <div className="feature-icon">♧</div>
            <h3>Contact management</h3>
            <p>
              Import your list in minutes, regardless the size of your audience. Get full visibility of each contact and their personal attributes.
            </p>
          </div>
        </article>

        {/* Broadcast Analytics Card */}
        <article className="beyond-card">
          <div className="dashboard-preview analytics">
            <div className="audience-header-row">
              <img className="audience-img" src="/screenshot-zoom-analytics.webp"/>
            </div>
          </div>

          <div className="beyond-card-footer">
            <div className="feature-icon">⌁</div>
            <h3>Broadcast analytics</h3>
            <p>
              Unlock powerful insights and understand exactly how your audience is interacting with your broadcast emails.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
