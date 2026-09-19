export function EditorShowcase() {
  return (
    <div className="editor-window" aria-label="Email editor preview">
      <div className="editor-toolbar">
        <div className="editor-toolbar-left">
          <div className="window-dots">
            <span className="dot dot-close" />
            <span className="dot dot-min" />
            <span className="dot dot-max" />
          </div>
          <button className="toolbar-btn" type="button">
            <span>⌘</span> Styles
          </button>
        </div>
        <strong className="editor-doc-title">Weekly Acme Newsletter</strong>
        <div className="editor-toolbar-right">
          <span className="editor-timestamp">◷ a day ago</span>
          <button className="toolbar-btn" type="button">Test</button>
          <button className="toolbar-btn send-button" type="button">Send</button>
        </div>
      </div>

      <div className="editor-body">
        <div className="editor-form">
          <div className="editor-field">
            <span className="field-label">From</span>
            <span className="field-value">your.name@acme.com</span>
          </div>
          <div className="editor-field">
            <span className="field-label">To</span>
            <span className="field-value recipient-chip">
              <span className="chip-icon">♧</span> Newsletter Subscribers
            </span>
          </div>
          <div className="editor-field">
            <span className="field-label">Subject</span>
            <span className="field-value font-medium">Weekly Newsletter</span>
          </div>
          <div className="editor-art-preview">

            <img src="/broadcast-email-header.jpg" className="editor-img"/>
          </div>
          <div className="editor-canvas">
            <p className="editor-placeholder">Press <kbd>/</kbd> for commands...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
