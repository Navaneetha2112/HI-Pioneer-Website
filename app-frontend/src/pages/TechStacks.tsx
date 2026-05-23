export function TechStacks() {
  const stacks = [
    { category: 'Frontend', technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'] },
    { category: 'Backend', technologies: ['Node.js', 'Java', 'Spring Boot', 'Python', 'Express'] },
    { category: 'Databases', technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'] },
    { category: 'Cloud & DevOps', technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
    { category: 'Mobile', technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Tools & Platforms', technologies: ['Git', 'GitHub', 'Jenkins', 'Terraform', 'Figma'] },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>Our Technology Stack</h1>
        <p>We build solutions using the latest and most reliable technologies</p>

        <div className="tech-grid">
          {stacks.map((stack, index) => (
            <div key={index} className="tech-card">
              <h3>{stack.category}</h3>
              <ul>
                {stack.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
