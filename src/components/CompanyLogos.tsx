const companies = ['WARNER BROS.', 'max', 'Raycast', 'MISTRAL AI', 'replit', 'anghami', 'GUMROAD', 'DECATHLON', 'supabase', 'Leap', 'Payload', 'Paper']

export function CompanyLogos() {
  return (
    <section className="company-section">
      <p>
        Companies of all sizes trust Resend
        <br />
        to deliver their most important emails.
      </p>
      <div className="company-grid">
        {companies.map((company) => (
          <span
            key={company}
            className={`company-logo logo-${company.toLowerCase().replaceAll(' ', '-')}`}
          >
            {company}
          </span>
        ))}
      </div>
      <a href="#enterprise" className="muted-link">
        Explore Enterprise <span className="btn-arrow">›</span>
      </a>
    </section>
  )
}
