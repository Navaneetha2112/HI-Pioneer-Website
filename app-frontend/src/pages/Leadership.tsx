export function Leadership() {
  const leaders = [
    {
      id: 1,
      name: 'Priya Nair',
      title: 'CEO & Founder',
      bio: 'Product-led founder with startup experience and a focus on rapid, user-centered delivery.',
      image: '👔'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      title: 'Chief Technology Officer',
      bio: 'Technology leader who builds scalable platforms and modern engineering teams.',
      image: '💻'
    },
    {
      id: 3,
      name: 'Nithya Rao',
      title: 'Head of Consulting',
      bio: 'Business strategist who turns product strategy into operational execution.',
      image: '📊'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Leadership Team</h1>
        <p>Our founders and leaders combine startup experience with hands-on technology execution.</p>

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
