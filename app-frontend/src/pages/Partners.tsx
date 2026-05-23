export function Partners() {
  const partners = [
    { id: 1, name: 'CloudWave', logo: '☁️' },
    { id: 2, name: 'SecureGrid', logo: '🔒' },
    { id: 3, name: 'DataFlow Labs', logo: '📊' },
    { id: 4, name: 'LaunchDeck', logo: '🚀' },
    { id: 5, name: 'CodeForge', logo: '💻' },
    { id: 6, name: 'GrowthPulse', logo: '📈' },
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
