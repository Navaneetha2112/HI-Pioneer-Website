export function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Global Finance Corp',
      industry: 'Financial Services',
      testimonial: 'HPT Solutions delivered exceptional results on our digital transformation project',
      logo: '💳'
    },
    {
      id: 2,
      name: 'RetailMax Group',
      industry: 'Retail',
      testimonial: 'Outstanding support and expertise throughout our e-commerce platform development',
      logo: '🛍️'
    },
    {
      id: 3,
      name: 'HealthFirst Medical',
      industry: 'Healthcare',
      testimonial: 'Their team helped us build a HIPAA-compliant mobile application',
      logo: '⚕️'
    },
    {
      id: 4,
      name: 'EduTech Solutions',
      industry: 'Education',
      testimonial: 'Impressive execution and innovative approach to our learning management system',
      logo: '🎓'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Our Clients</h1>
        <p>Trusted by leading organizations across various industries</p>

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
