export function Partners() {
  const partners = [
    { id: 1, name: 'TechCorp International', logo: '🏢' },
    { id: 2, name: 'Cloud Solutions Inc', logo: '☁️' },
    { id: 3, name: 'DataHub Systems', logo: '📊' },
    { id: 4, name: 'SecureNet Technologies', logo: '🔒' },
    { id: 5, name: 'InnovateLabs', logo: '🚀' },
    { id: 6, name: 'Digital Ventures', logo: '💼' },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Our Partners</h1>
        <p>Strategic partnerships with industry-leading organizations</p>

        <div className="partners-grid">
          {partners.map(partner => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">{partner.logo}</div>
              <h3>{partner.name}</h3>
              <p>Strategic technology partner</p>
            </div>
          ))}
        </div>

        <section className="partnership-benefits">
          <h2>Partnership Benefits</h2>
          <ul>
            <li>✓ Access to cutting-edge technologies</li>
            <li>✓ Joint go-to-market initiatives</li>
            <li>✓ Collaborative innovation projects</li>
            <li>✓ Enhanced service offerings</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
