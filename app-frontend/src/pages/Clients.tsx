export function Clients() {
  const clients = [
    {
      id: 1,
      name: 'LaunchEdge',
      industry: 'SaaS',
      testimonial: 'HiPioneer helped us launch our MVP in weeks instead of months and stay lean through every iteration.',
      logo: '🚀'
    },
    {
      id: 2,
      name: 'MarketHive',
      industry: 'Retail Tech',
      testimonial: 'Their app development and integration expertise gave us a reliable platform for rapid growth.',
      logo: '🛍️'
    },
    {
      id: 3,
      name: 'WellNest Health',
      industry: 'Health Tech',
      testimonial: 'The team delivered a secure, user-friendly telehealth experience tailored to our roadmap.',
      logo: '⚕️'
    },
    {
      id: 4,
      name: 'Learnly',
      industry: 'EdTech',
      testimonial: 'Their startup-friendly training helped our team adopt modern practices and ship faster.',
      logo: '🎓'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Our Clients</h1>
        <p>We partner with growing businesses and startups to build scalable digital products.</p>

        <div className="clients-grid">
          {clients.map(client => (
            <div key={client.id} className="client-card">
              <div className="client-logo">{client.logo}</div>
              <h3>{client.name}</h3>
              <p className="client-industry">{client.industry}</p>
              <blockquote className="client-testimonial">"{client.testimonial}"</blockquote>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
