export function CodePanel() {
  return (
    <div className="code-window">
      <div className="window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>send-email.ts</span>
        <span className="window-lock">⌘ K</span>
      </div>
      <div className="code-body">
        <div className="line-numbers">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11</div>
        <pre><span className="muted">import</span> {`{ Resend }`} <span className="muted">from</span> <span className="string">'resend'</span>{'\n\n'}<span className="muted">const</span> resend = <span className="blue">new</span> <span className="yellow">Resend</span>(<span className="string">'re_123456789'</span>){'\n\n'}<span className="muted">await</span> resend.emails.send({'{'}{'\n'}  <span className="key">from:</span> <span className="string">'onboarding@resend.dev'</span>,{'\n'}  <span className="key">to:</span> <span className="string">'delivered@resend.dev'</span>,{'\n'}  <span className="key">subject:</span> <span className="string">'Hello from Resend!'</span>,{'\n'}  <span className="key">html:</span> <span className="string">'&lt;h1&gt;It works!&lt;/h1&gt;'</span>,{'\n'}{'}'})</pre>
      </div>
      <div className="code-footer"><span className="status-dot" /> 200 OK <span className="response-time">34ms</span></div>
    </div>
  )
}
