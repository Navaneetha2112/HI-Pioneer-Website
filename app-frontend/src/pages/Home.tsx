export function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to HPT Solutions</h1>
          <p>Transforming Businesses Through Technology & Innovation</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Consulting</h3>
            <p>Strategic technology consulting for your business growth</p>
          </div>
          <div className="feature-card">
            <h3>Professional Training</h3>
            <p>Upskill your team with our comprehensive training programs</p>
          </div>
          <div className="feature-card">
            <h3>Custom Development</h3>
            <p>Tailored app development solutions for your unique needs</p>
          </div>
        </div>
      </section>
    </div>
  );
}
