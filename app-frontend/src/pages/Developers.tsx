export function Developers() {
  const developers = [
    {
      id: 1,
      name: 'Alice Rodriguez',
      role: 'Senior Full Stack Developer',
      bio: 'Expert in React, Node.js, and cloud technologies',
      image: '👩‍💻'
    },
    {
      id: 2,
      name: 'Bob Thompson',
      role: 'DevOps Engineer',
      bio: 'Kubernetes and cloud infrastructure specialist',
      image: '⚙️'
    },
    {
      id: 3,
      name: 'Carol Martinez',
      role: 'Mobile Developer',
      bio: 'Native iOS and Android development expert',
      image: '📱'
    },
    {
      id: 4,
      name: 'David Lee',
      role: 'Backend Engineer',
      bio: 'Java, Python, and microservices architecture',
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
