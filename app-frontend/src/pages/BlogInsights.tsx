export function BlogInsights() {
  const articles = [
    {
      id: 1,
      title: 'How Startups Can Launch Digital Products Faster',
      date: 'May 10, 2026',
      excerpt: 'Practical advice on building minimum viable products, testing ideas, and scaling quickly.',
      category: 'Product'
    },
    {
      id: 2,
      title: 'Choosing the Right Cloud Strategy for Growth',
      date: 'May 5, 2026',
      excerpt: 'The cloud architecture decisions every growing business should make early on.',
      category: 'Cloud'
    },
    {
      id: 3,
      title: 'From Prototype to Production: Engineering Best Practices',
      date: 'April 28, 2026',
      excerpt: 'A practical approach to building resilient applications and launching them with confidence.',
      category: 'Development'
    },
    {
      id: 4,
      title: 'Why Security Must Be Built Into Your Startup Product',
      date: 'April 20, 2026',
      excerpt: 'How to protect user data and stay aligned with regulatory best practices.',
      category: 'Security'
    },
  ];

  return (
    <div className="page">
      <section className="content-section">
        <h1>HiPioneer Insights</h1>
        <p>Read our startup-ready articles on product strategy, cloud engineering, and modern development.</p>

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
