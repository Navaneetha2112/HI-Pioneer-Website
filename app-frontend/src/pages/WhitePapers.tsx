export function WhitePapers() {
  const papers = [
    {
      id: 1,
      title: 'Startup Guide to Building Your First SaaS Product',
      description: 'A step-by-step framework for validating ideas, building MVPs, and launching quickly.',
      pages: 24
    },
    {
      id: 2,
      title: 'Cloud Strategy for Growing Tech Teams',
      description: 'How startups can adopt cloud platforms safely while minimizing cost and complexity.',
      pages: 18
    },
    {
      id: 3,
      title: 'Creating Secure APIs for Product Growth',
      description: 'Practical security patterns for API-driven products and integrations.',
      pages: 20
    },
    {
      id: 4,
      title: 'Modern DevOps for Fast-Moving Teams',
      description: 'Automation, deployment, and observability playbooks for startup engineering teams.',
      pages: 28
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>White Papers</h1>
        <p>Download our in-depth technical guides and research documents</p>

        <div className="papers-grid">
          {papers.map(paper => (
            <div key={paper.id} className="paper-card">
              <div className="paper-icon">📄</div>
              <h3>{paper.title}</h3>
              <p>{paper.description}</p>
              <p className="paper-pages">{paper.pages} pages</p>
              <button className="download-button">Download PDF</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
