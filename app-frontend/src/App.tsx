import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { AboutCompany } from './pages/AboutCompany';
import { Leadership } from './pages/Leadership';
import { Consulting } from './pages/Consulting';
import { Training } from './pages/Training';
import { AppDevelopment } from './pages/AppDevelopment';
import { Developers } from './pages/Developers';
import { TechStacks } from './pages/TechStacks';
import { BlogInsights } from './pages/BlogInsights';
import { WhitePapers } from './pages/WhitePapers';
import { Partners } from './pages/Partners';
import { Clients } from './pages/Clients';
import { Awards } from './pages/Awards';
import { Contact } from './pages/Contact';
import './styles/App.css';
import './styles/Navigation.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/training" element={<Training />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/tech-stacks" element={<TechStacks />} />
        <Route path="/hpt-insights" element={<BlogInsights />} />
        <Route path="/white-papers" element={<WhitePapers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
