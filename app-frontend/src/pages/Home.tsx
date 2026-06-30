import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate('/about-company');

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to HPT Solutions</h1>
          <p>Hi-Pioneer Technologies is building a modern startup services platform for consulting, app development, and training.</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>
      
      <section className="features">
        <h2>Startup-Focused Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Strategic Consulting</h3>
            <p>Understand market fit, digital product strategy, and growth-ready technology roadmaps.</p>
          </div>
          <div className="feature-card">
            <h3>App Development</h3>
            <p>Build modern mobile, web and backend systems that scale with your business.</p>
          </div>
          <div className="feature-card">
            <h3>Training & Enablement</h3>
            <p>Equip your team with the skills, frameworks, and processes needed for long-term success.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
