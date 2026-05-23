export function BlogInsights() {
  const articles = [
    {
      id: 1,
      title: 'The Future of Cloud Computing',
      date: 'May 10, 2024',
      excerpt: 'Exploring emerging trends in cloud technology and their business implications',
      category: 'Cloud'
    },
    {
      id: 2,
      title: 'AI-Powered Development: What You Need to Know',
      date: 'May 5, 2024',
      excerpt: 'How artificial intelligence is transforming the software development landscape',
      category: 'AI/ML'
    },
    {
      id: 3,
      title: 'Microservices Architecture Best Practices',
      date: 'April 28, 2024',
      excerpt: 'Building scalable applications with microservices design patterns',
      category: 'Architecture'
    },
    {
      id: 4,
      title: 'Cybersecurity in 2024: New Threats and Solutions',
      date: 'April 20, 2024',
      excerpt: 'Understanding modern security challenges and protection strategies',
      category: 'Security'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>HPT Insights</h1>
        <p>Stay updated with the latest technology trends and best practices</p>

        <div className="blog-list">
          {articles.map(article => (
            <article key={article.id} className="blog-card">
              <div className="blog-category">{article.category}</div>
              <h3>{article.title}</h3>
              <p className="blog-date">{article.date}</p>
              <p>{article.excerpt}</p>
              <a href="#" className="read-more">Read More →</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
