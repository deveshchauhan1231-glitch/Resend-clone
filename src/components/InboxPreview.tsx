export function InboxPreview() {
  return <div className="inbox-preview" aria-label="Email inbox preview">
    <div className="inbox-top"><span className="inbox-title">Inbox</span><span className="inbox-count">12 new</span><span className="search-icon">⌕</span></div>
    <div className="inbox-row active"><span className="avatar orange">A</span><span className="email-copy"><b>Acme Inc.</b><small>Your weekly report is ready</small></span><time>9:42 AM</time></div>
    <div className="inbox-row"><span className="avatar violet">R</span><span className="email-copy"><b>Resend</b><small>Welcome to your new account</small></span><time>Yesterday</time></div>
    <div className="inbox-row"><span className="avatar green">S</span><span className="email-copy"><b>Stripe</b><small>Your payment was successful</small></span><time>Mon</time></div>
  </div>
}
