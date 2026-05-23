import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navigation.css';

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const handleLinkClick = () => {
    if (mobileOpen) setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          HPT Solutions
        </Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={toggleMobile}>
          <span className={`hamburger ${mobileOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`navbar-menu ${mobileOpen ? 'mobile-open' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li className="navbar-item dropdown">
            <button
              className="navbar-link dropdown-toggle"
              onClick={() => toggleDropdown('about')}
            >
              About us ▼
            </button>
            {activeDropdown === 'about' && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about-company" className="dropdown-link" onClick={handleLinkClick}>
                    About Company
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className="dropdown-link" onClick={handleLinkClick}>
                    Leadership
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item dropdown">
            <button
              className="navbar-link dropdown-toggle"
              onClick={() => toggleDropdown('services')}
            >
              Services ▼
            </button>
            {activeDropdown === 'services' && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/consulting" className="dropdown-link" onClick={handleLinkClick}>
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="dropdown-link" onClick={handleLinkClick}>
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/app-development" className="dropdown-link" onClick={handleLinkClick}>
                    App Development
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item dropdown">
            <button
              className="navbar-link dropdown-toggle"
              onClick={() => toggleDropdown('expertise')}
            >
              Our Expertise ▼
            </button>
            {activeDropdown === 'expertise' && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/developers" className="dropdown-link" onClick={handleLinkClick}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/tech-stacks" className="dropdown-link" onClick={handleLinkClick}>
                    Tech Stacks
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item dropdown">
            <button
              className="navbar-link dropdown-toggle"
              onClick={() => toggleDropdown('blogs')}
            >
              HPT Blogs ▼
            </button>
            {activeDropdown === 'blogs' && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/hpt-insights" className="dropdown-link" onClick={handleLinkClick}>
                    HPT Insights
                  </Link>
                </li>
                <li>
                  <Link to="/white-papers" className="dropdown-link" onClick={handleLinkClick}>
                    White Papers
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item dropdown">
            <button
              className="navbar-link dropdown-toggle"
              onClick={() => toggleDropdown('collaborations')}
            >
              Collaborations ▼
            </button>
            {activeDropdown === 'collaborations' && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/partners" className="dropdown-link" onClick={handleLinkClick}>
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="dropdown-link" onClick={handleLinkClick}>
                    Clients
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <Link to="/awards" className="navbar-link" onClick={handleLinkClick}>
              Awards & Recognition
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-link contact-button" onClick={handleLinkClick}>
              ContactUs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
