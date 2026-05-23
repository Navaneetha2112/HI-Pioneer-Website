# Quick Reference - Build & Run Commands

## Prerequisites
- Java 21 installed and JAVA_HOME set
- Node.js 16+ and npm installed
- Twilio Account (for WhatsApp feature)

## Full Stack Setup

### 1. Install All Dependencies
```bash
npm install
cd app-frontend && npm install
cd ../app-backend && ./gradlew.bat clean
```

### 2. Build Everything
```bash
npm run build
```

### 3. Start Backend
```bash
npm run start:backend
```

Backend runs on: `http://localhost:8080`

### 4. Start Frontend (New Terminal)
```bash
npm run start:frontend
# or directly:
cd app-frontend && npm start
```

Frontend runs on: `http://localhost:5173` (Vite) or `http://localhost:3000` (default)

## Individual Commands

### Frontend Only
```bash
# Install dependencies
cd app-frontend && npm install

# Development mode
npm start

# Build for production
npm run build

# Preview production build
npm run serve

# Run tests
npm test
```

### Backend Only
```bash
# Build
cd app-backend && ./gradlew.bat build

# Run
java -jar build/libs/spring-boot-boilerplate-0.0.1-SNAPSHOT.jar
# OR using npm:
npm run start:backend
```

## WhatsApp Configuration

### Set Environment Variables (Windows - PowerShell)
```powershell
# One-time for session:
$env:TWILIO_ACCOUNT_SID="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$env:TWILIO_AUTH_TOKEN="your_auth_token_here"
$env:TWILIO_WHATSAPP_NUMBER="+14155238886"

# Permanent (requires restart):
[Environment]::SetEnvironmentVariable("TWILIO_ACCOUNT_SID", "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "User")
[Environment]::SetEnvironmentVariable("TWILIO_AUTH_TOKEN", "your_auth_token_here", "User")
[Environment]::SetEnvironmentVariable("TWILIO_WHATSAPP_NUMBER", "+14155238886", "User")
```

### Or Update application.properties
File: `app-backend/src/main/resources/application.properties`
```properties
twilio.account-sid=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
twilio.auth-token=your_auth_token_here
twilio.whatsapp-phone-number=+14155238886
```

## Testing the Application

### 1. Start All Services
```bash
# Terminal 1 - Backend
npm run start:backend

# Terminal 2 - Frontend
npm run start:frontend
```

### 2. Access Website
- Open: `http://localhost:5173`
- Navigate: Contact Us page

### 3. Submit Contact Form
- Fill in all fields
- **WhatsApp Phone:** Must include country code (e.g., +12345678900)
- Submit

### 4. Check Response
- Should see success message
- Check your WhatsApp for notification (within seconds)
- Check database: `app-backend/sqlitestorage.db`

## API Endpoints

### Health Check
```bash
GET http://localhost:8080/ping
# Response: "pong"
```

### Contact Service Health
```bash
GET http://localhost:8080/api/contact/health
# Response: "Contact service is running"
```

### Submit Contact Form
```bash
POST http://localhost:8080/api/contact/submit
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "phoneNumber": "+12345678900",
  "company": "ACME Corp",
  "subject": "consulting",
  "message": "I'm interested in your consulting services"
}
```

## Troubleshooting

### JAVA_HOME Not Set
```powershell
# Check if set:
echo $env:JAVA_HOME

# Set temporarily:
$env:JAVA_HOME="C:\Program Files\Java\jdk-21.0.11"

# Add to PATH:
$env:Path += ";C:\Program Files\Java\jdk-21.0.11\bin"
```

### Port Already in Use
```powershell
# Find process using port 8080:
netstat -ano | findstr :8080

# Kill process (replace PID):
taskkill /PID <PID> /F

# Or use different port in application.properties:
server.port=8081
```

### Frontend Build Issues
```bash
# Clear cache and rebuild:
cd app-frontend
del -r node_modules
npm cache clean --force
npm install
npm run build
```

### Database Errors
```bash
# Reset database:
cd app-backend
del sqlitestorage.db

# Rebuild:
./gradlew.bat clean build
```

## Performance Commands

### Check Gradle Wrapper
```bash
cd app-backend
./gradlew.bat --version
```

### View Dependencies
```bash
cd app-backend
./gradlew.bat dependencies
```

### Clean All Builds
```bash
npm run clean:all  # if configured
# Or manually:
rm -r app-frontend/build app-frontend/node_modules
rm -r app-backend/build app-backend/.gradle
```

## Development Workflow

### 1. Development Mode
```bash
# Terminal 1: Backend (auto-reloads on changes)
npm run start:backend

# Terminal 2: Frontend (hot-reload enabled)
cd app-frontend && npm start

# Edit files and see changes instantly
```

### 2. Production Build
```bash
# Clean and build everything
npm run build

# Run backend JAR
npm run start:backend

# Serve frontend from build/
cd app-frontend && npm run serve
```

### 3. Deployment
```bash
# Build:
npm run build:backend
npm run build:frontend

# Use:
# - Backend: app-backend/build/libs/*.jar
# - Frontend: app-frontend/build/ (static files)
```

## Documentation Files

- **Setup Guide:** `app-frontend/WEBSITE_README.md`
- **WhatsApp Setup:** `app-backend/WHATSAPP_SETUP.md`
- **Full Summary:** `CLEANUP_AND_WHATSAPP_SUMMARY.md`
- **Configuration Template:** `app-backend/.env.example`

## Useful Links

- Twilio Dashboard: https://www.twilio.com/console
- Spring Boot Docs: https://spring.io/projects/spring-boot
- React Router: https://reactrouter.com/
- Vite: https://vitejs.dev/

---

**Status:** ✅ Ready for Development
**Last Updated:** May 11, 2026
