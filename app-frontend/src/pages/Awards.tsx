export function Awards() {
  const awards = [
    {
      id: 1,
      title: 'Fastest Growing Startup in Tech Services',
      organization: 'Emerging Tech Awards',
      year: 2026,
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Best App Development Partner',
      organization: 'Digital Product Awards',
      year: 2025,
      icon: '⭐'
    },
    {
      id: 3,
      title: 'Outstanding Startup Growth Support',
      organization: 'Innovation Excellence Forum',
      year: 2025,
      icon: '🥇'
    },
    {
      id: 4,
      title: 'Customer Satisfaction Leadership',
      organization: 'Client Choice Awards',
      year: 2024,
      icon: '👍'
    },
    {
      id: 5,
      title: 'Top Training & Enablement Provider',
      organization: 'Tech Learning Awards',
      year: 2024,
      icon: '🚀'
    },
    {
      id: 6,
      title: 'Best Startup Culture',
      organization: 'Startup Workplace Awards',
      year: 2024,
      icon: '❤️'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Awards & Recognition</h1>
        <p>Recognized for excellence, innovation, and customer satisfaction</p>

        <div className="awards-grid">
          {awards.map(award => (
            <div key={award.id} className="award-card">
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p className="award-org">{award.organization}</p>
              <p className="award-year">{award.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
