export function WhitePapers() {
  const papers = [
    {
      id: 1,
      title: 'Digital Transformation Roadmap for Enterprises',
      description: 'A comprehensive guide for planning and executing successful digital transformation',
      pages: 24
    },
    {
      id: 2,
      title: 'Cloud Migration Strategy & Best Practices',
      description: 'Detailed strategies for successfully migrating legacy systems to cloud environments',
      pages: 18
    },
    {
      id: 3,
      title: 'Building Secure APIs in Modern Applications',
      description: 'Security considerations and implementation patterns for REST and GraphQL APIs',
      pages: 20
    },
    {
      id: 4,
      title: 'DevOps Excellence: A Complete Guide',
      description: 'From CI/CD to infrastructure automation and monitoring best practices',
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
