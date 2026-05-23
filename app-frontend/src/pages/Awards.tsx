export function Awards() {
  const awards = [
    {
      id: 1,
      title: 'Best Technology Consulting Firm 2024',
      organization: 'Tech Innovation Awards',
      year: 2024,
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Excellence in Digital Transformation',
      organization: 'Business Excellence Council',
      year: 2024,
      icon: '⭐'
    },
    {
      id: 3,
      title: 'Top App Development Company',
      organization: 'Global Developer Report',
      year: 2023,
      icon: '🥇'
    },
    {
      id: 4,
      title: 'Customer Choice Award',
      organization: 'Industry Review Platform',
      year: 2023,
      icon: '👍'
    },
    {
      id: 5,
      title: 'Innovation Leadership Award',
      organization: 'Tech Leaders Association',
      year: 2023,
      icon: '🚀'
    },
    {
      id: 6,
      title: 'Best Place to Work in Tech',
      organization: 'Career Excellence Network',
      year: 2023,
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
