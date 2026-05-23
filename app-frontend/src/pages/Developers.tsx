export function Developers() {
  const developers = [
    {
      id: 1,
      name: 'Ayesha Khan',
      role: 'Senior Full Stack Developer',
      bio: 'Builds web applications with React, TypeScript, and scalable cloud APIs.',
      image: '👩‍💻'
    },
    {
      id: 2,
      name: 'Rahul Menon',
      role: 'DevOps Engineer',
      bio: 'Automates releases, monitoring, and infrastructure for reliable product delivery.',
      image: '⚙️'
    },
    {
      id: 3,
      name: 'Maya Desai',
      role: 'Mobile Developer',
      bio: 'Creates polished mobile experiences for Android and iOS platforms.',
      image: '📱'
    },
    {
      id: 4,
      name: 'Karan Iyer',
      role: 'Backend Engineer',
      bio: 'Designs resilient APIs and backend systems for data-driven products.',
      image: '🖥️'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Our Development Team</h1>
        <p>Meet the talented developers behind HPT Solutions</p>

        <div className="team-grid">
          {developers.map(dev => (
            <div key={dev.id} className="team-card">
              <div className="team-avatar">{dev.image}</div>
              <h3>{dev.name}</h3>
              <p className="team-title">{dev.role}</p>
              <p>{dev.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
