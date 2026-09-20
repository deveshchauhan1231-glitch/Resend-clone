export function ProductShowcase() {
  return (
    <section className="showcase-section" id="features">
      <div className="showcase-copy">
        <h2>
          First-class<br />
          <em>developer experience</em>
        </h2>
        <p>
          We are a team of engineers who love building tools for other engineers.
          <br />
          Our goal is to create the email platform we've always wished we had — one that <i>just works.</i>
        </p>
      </div>

      <div className="showcase-grid">
        <article className="product-card">
          <div className="delivery-ui">
            <div className="delivery-header">
              <span className="badge badge-success">● Delivered</span>
              <span className="email-target">delivered@resend.dev <span className="dropdown-arrow">▾</span></span>
              <button className="mini-btn" type="button">
                <span>⚡</span> Send
              </button>
            </div>
            <div className="delivery-logs">
              <div className="log-line">
                <span className="log-status">HTTP 200:</span>
                <span className="log-json">{'{ "id": "b0e01730-a394-41ca-9870-7f4dffc2a75f" }'}</span>
              </div>
              <div className="log-line">
                <span className="log-status">HTTP 200:</span>
                <span className="log-json">{'{ "id": "0ca855ef-37ea-44c8-aa5ed76546e08" }'}</span>
              </div>
              <div className="log-line">
                <span className="log-status">HTTP 200:</span>
                <span className="log-json">{'{ "id": "0a5e482a-9edc-4b13-94ab-439cf14d36b5" }'}</span>
              </div>
            </div>
          </div>
          <div className="product-card-footer">
            <h3><span className="card-icon">⚗</span> Test mode</h3>
            <p>Send emails without any side effects.</p>
          </div>
        </article>

        <article className="product-card">
          <div className="webhook-ui">
            <div className="webhook-event">
              <div className="webhook-title-row">
                <span className="badge badge-warning">! Complained</span>
                <small className="webhook-time">◷ Sep 18 09:53:40</small>
              </div>
              <p className="webhook-desc">
                to <strong>charlotte@figma.com</strong> with feedback <strong>Spam</strong>
              </p>
              <p className="webhook-meta">
                on agent <strong>ProtonMail</strong> running on <strong>macOS</strong>
              </p>
            </div>
            <div className="webhook-divider" />
            <div className="webhook-event dim">
              <div className="webhook-title-row">
                <span className="badge badge-danger">△ Bounced</span>
                <small className="webhook-time">◷ Sep 18 09:50:12</small>
              </div>
            </div>
          </div>
          <div className="product-card-footer">
            <h3><span className="card-icon">♧</span> Modular webhooks</h3>
            <p>Build workflows around every email event.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
