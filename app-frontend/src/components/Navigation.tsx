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
            <Link to="/" className="navbar-link">
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
                  <Link to="/about-company" className="dropdown-link">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className="dropdown-link">
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
                  <Link to="/consulting" className="dropdown-link">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="dropdown-link">
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/app-development" className="dropdown-link">
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
                  <Link to="/developers" className="dropdown-link">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/tech-stacks" className="dropdown-link">
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
                  <Link to="/hpt-insights" className="dropdown-link">
                    HPT Insights
                  </Link>
                </li>
                <li>
                  <Link to="/white-papers" className="dropdown-link">
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
                  <Link to="/partners" className="dropdown-link">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="dropdown-link">
                    Clients
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <Link to="/awards" className="navbar-link">
              Awards & Recognition
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-link contact-button">
              ContactUs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
