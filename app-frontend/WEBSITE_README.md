# HPT Solutions - Startup Website

A modern, professional startup website built with React, TypeScript, and Vite. Features a complete navigation structure with dropdown menus and responsive design.

## 🎯 Website Structure

### Navigation Menu
- **Home** - Landing page with hero section and key features
- **About Us** (Dropdown)
  - About Company - Company mission, vision, and values
  - Leadership - Leadership team profiles
- **Services** (Dropdown)
  - Consulting - Enterprise consulting solutions
  - Training - Professional development programs
  - App Development - Custom application development
- **Our Expertise** (Dropdown)
  - Our Team - Developer profiles and expertise
  - Tech Stacks - Available technologies and tools
- **HPT Blogs** (Dropdown)
  - HPT Insights - Latest industry articles
  - White Papers - Technical resources and guides
- **Collaborations** (Dropdown)
  - Partners - Strategic partnership information
  - Clients - Client testimonials and case studies
- **Awards & Recognition** - Company achievements and awards
- **Contact Us** - Contact form and business information

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Java 21 (for backend)

### Installation

1. **Install dependencies**:
```bash
npm install
cd app-frontend && npm install
```

2. **Build the project**:
```bash
npm run build
```

3. **Start the development server**:
```bash
cd app-frontend
npm start
```

The frontend will open at `http://localhost:5173`

## 📁 Project Structure

```
app-frontend/
├── src/
│   ├── components/
│   │   └── Navigation.tsx        # Main navigation with dropdown menus
│   ├── pages/
│   │   ├── Home.tsx              # Landing page
│   │   ├── AboutCompany.tsx       # Company information
│   │   ├── Leadership.tsx         # Leadership team
│   │   ├── Consulting.tsx         # Consulting services
│   │   ├── Training.tsx           # Training programs
│   │   ├── AppDevelopment.tsx     # App development services
│   │   ├── Developers.tsx         # Development team
│   │   ├── TechStacks.tsx         # Technology stack
│   │   ├── BlogInsights.tsx       # Blog articles
│   │   ├── WhitePapers.tsx        # White papers
│   │   ├── Partners.tsx           # Partner information
│   │   ├── Clients.tsx            # Client testimonials
│   │   ├── Awards.tsx             # Awards and recognition
│   │   └── Contact.tsx            # Contact form
│   ├── styles/
│   │   ├── Navigation.css         # Navigation styling
│   │   └── App.css                # Global and page styles
│   └── App.tsx                    # Main app with routing
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #1a1a2e (Dark Navy)
- **Accent**: #00d4ff (Cyan Blue)
- **Secondary**: #16213e (Light Navy)
- **Text**: #333 (Dark Gray)

### Components
- Sticky navigation bar with dropdown menus
- Responsive grid layouts
- Hover animations and transitions
- Card-based content organization
- Hero section with call-to-action
- Contact form with validation

## 🔧 Customization

### Update Company Information

1. **Navigation Logo** - Edit in `Navigation.tsx`:
```typescript
<Link to="/" className="navbar-logo">
  HPT Solutions  // Change this
</Link>
```

2. **Team Members** - Edit the arrays in page components:
```typescript
const developers = [
  { id: 1, name: 'Alice Rodriguez', role: 'Senior Full Stack Developer', ... },
  // Add more team members
];
```

3. **Services** - Update service lists in respective pages (`Consulting.tsx`, `Training.tsx`, etc.)

4. **Colors** - Modify color values in CSS files:
- `Navigation.css` - Navigation styling
- `App.css` - Global and page styles

### Add New Pages

1. Create a new file in `src/pages/` (e.g., `NewPage.tsx`):
```typescript
export function NewPage() {
  return (
    <div className="page">
      <section className="content-section">
        <h1>Your Page Title</h1>
        {/* Content here */}
      </section>
    </div>
  );
}
```

2. Import and add route in `App.tsx`:
```typescript
import { NewPage } from './pages/NewPage';

// In the Routes section:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `Navigation.tsx` if needed

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔌 Backend Integration

To connect with the Spring Boot backend:

1. **Update API endpoints** in component files as needed
2. **Backend URL**: The Spring Boot server runs on `http://localhost:8080`
3. **Example API call**:
```typescript
const response = await fetch('http://localhost:8080/api/endpoint');
```

## 📝 Contact Form

The contact form currently logs data to console and shows a confirmation alert. To integrate with backend:

1. Update the `handleSubmit` function in `Contact.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch('http://localhost:8080/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

## 🚀 Deployment

### Build for production:
```bash
cd app-frontend
npm run build
```

The production-ready files will be in `build/` directory.

### Deploy options:
- Vercel
- Netlify
- GitHub Pages
- Azure Static Web Apps
- AWS S3 + CloudFront

## 📚 Technologies Used

- **React 18.3** - UI library
- **TypeScript 5.9** - Type safety
- **React Router 6** - Client-side routing
- **Vite 6.3** - Build tool
- **CSS3** - Styling with animations

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📄 License

This project is part of the HPT Solutions startup boilerplate.

## 💡 Tips

- Customize the color scheme by modifying CSS variables or color values
- Add more team members by extending the arrays in page components
- Use placeholder text and emojis initially - replace with real content
- Consider adding a CMS integration for dynamic content
- Implement analytics to track user behavior

## 🤝 Support

For questions or modifications, refer to the React and React Router documentation.

---

**Happy building! 🚀**
