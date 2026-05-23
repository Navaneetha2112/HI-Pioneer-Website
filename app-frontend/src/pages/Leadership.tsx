export function Leadership() {
  const leaders = [
    {
      id: 1,
      name: 'John Smith',
      title: 'CEO & Founder',
      bio: 'Visionary leader with 20+ years of technology industry experience',
      image: '👔'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'CTO',
      bio: 'Tech innovator and architect of enterprise solutions',
      image: '💻'
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'VP of Consulting',
      bio: 'Strategic business consultant with proven track record',
      image: '📊'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Leadership Team</h1>
        <p>Meet the talented leaders guiding HPT Solutions</p>

        <div className="team-grid">
          {leaders.map(leader => (
            <div key={leader.id} className="team-card">
              <div className="team-avatar">{leader.image}</div>
              <h3>{leader.name}</h3>
              <p className="team-title">{leader.title}</p>
              <p>{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
