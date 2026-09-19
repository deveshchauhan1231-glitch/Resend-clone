const quotes = [
  {
    quote: '"Our team loves Resend. It makes email sending so easy and reliable."',
    author: 'Vlad Matsiiako',
    role: 'Co-founder of Infisical',
    color: '#3b82f6',
  },
  {
    quote: '"As a developer I love the approach that the Resend team is taking."',
    author: 'Hahnbee Lee',
    role: 'Co-Founder at Mintlify',
    color: '#8b5cf6',
  },
  {
    quote: '"Resend meets those expectations."',
    author: 'Bradley Greenwood',
    role: 'VP of Engineering at MrBeast',
    color: '#00DF89',
  },
  {
    quote: '"Our partnership with Resend has been a great experience."',
    author: 'Sahil Lavingia',
    role: 'CEO of Gumroad',
    color: '#f59e0b',
  },
  {
    quote: '"Switching over to Resend from SendGrid marked a significant improvement."',
    author: 'Thomas Mann',
    role: 'Founder & CEO of Raycast',
    color: '#ef4444',
  },
  {
    quote: '"The simplicity and reliability of Resend allowed our engineers to focus on building features."',
    author: 'Amadeo Pellicce',
    role: 'Connectors, Agents and Automations Lead at Replit',
    color: '#06b6d4',
  },
  {
    quote: '"We\'re a small team with a lot on our plates. Email infrastructure is something we don\'t want to think about, and with Resend we don\'t have to."',
    author: 'Peter Suhm',
    role: 'Ops at Tailwind',
    color: '#a855f7',
  },
  {
    quote: '"The best part about taking Resend into production was that there was no friction at all."',
    author: 'Tara Nagar',
    role: 'Software Engineer at Braintrust',
    color: '#ec4899',
  },
  {
    quote: '"The flexibility of Resend is what we value most."',
    author: 'Glauber Costa',
    role: 'Founder and CEO at Turso',
    color: '#00DF89',
  },
  {
    quote: '"Resend is email with simpler APIs, better webhooks, and best-in-class debugging."',
    author: 'Dan Farrelly',
    role: 'CTO and Co-Founder of Inngest',
    color: '#f59e0b',
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>
        Beyond<br />
        <em>expectations</em>
      </h2>
      <p>
        Resend is driving remarkable developer experiences that enable success
        <br />
        stories, empower businesses, and fuel growth across industries and individuals.
      </p>

      <div
  className="quote-rail-wrapper"
  onMouseEnter={(e) => {
    e.currentTarget.classList.add('is-paused')
  }}
  onMouseLeave={(e) => {
    e.currentTarget.classList.remove('is-paused')
  }}
>
  <div className="quote-rail">
  {[...quotes, ...quotes].map((q, index) => {
      const initials = q.author
        .split(' ')
        .map((p) => p[0])
        .join('')

      return (
        <article className="quote-card" key={`${q.author}-${index}`}>
          <blockquote>{q.quote}</blockquote>

          <div className="quote-author">
            <span
              className="quote-avatar"
              style={{ backgroundColor: q.color }}
            >
              {initials}
            </span>

            <div className="quote-author-text">
              <b>{q.author}</b>
              <small>{q.role}</small>
            </div>
          </div>
        </article>
      )
    })}
  </div>
</div>
      
    </section>
  )
}
