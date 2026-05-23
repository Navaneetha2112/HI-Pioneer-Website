# WhatsApp Integration Setup Guide

## Overview
The contact form now sends WhatsApp notifications to users when they submit their inquiry. This uses Twilio's WhatsApp API.

## Prerequisites
- Twilio Account (https://www.twilio.com/)
- Active WhatsApp sandbox (free) or production number
- Java 21
- Spring Boot 3.5.7

## Step-by-Step Setup

### 1. Create a Twilio Account
1. Go to https://www.twilio.com/
2. Sign up for a free account
3. Verify your email and phone number

### 2. Set Up Twilio WhatsApp Sandbox
1. In Twilio Console, navigate to **Messaging → WhatsApp → Learn**
2. Click on **Sandbox**
3. Note your sandbox number (e.g., +1 415 523 8886)
4. You'll see a Join Code (e.g., `join peace-reward`)

### 3. Join the WhatsApp Sandbox
1. Save the sandbox number from step 2
2. Send a message to the sandbox number: `join peace-reward` (use your actual join code)
3. You'll receive a confirmation WhatsApp message

### 4. Get Your Twilio Credentials
1. Go to **Account → API Keys & tokens**
2. Copy your **Account SID**
3. Copy your **Auth Token**

### 5. Configure Environment Variables

Create a `.env` file in the backend directory or set system environment variables:

**Windows (PowerShell - Permanent):**
```powershell
[Environment]::SetEnvironmentVariable("TWILIO_ACCOUNT_SID", "your_account_sid_here", "User")
[Environment]::SetEnvironmentVariable("TWILIO_AUTH_TOKEN", "your_auth_token_here", "User")
[Environment]::SetEnvironmentVariable("TWILIO_WHATSAPP_NUMBER", "+1415523xxxx", "User")
```

**Windows (Command Prompt - Permanent):**
```cmd
setx TWILIO_ACCOUNT_SID "your_account_sid_here"
setx TWILIO_AUTH_TOKEN "your_auth_token_here"
setx TWILIO_WHATSAPP_NUMBER "+1415523xxxx"
```

**Windows (PowerShell - Session Only):**
```powershell
$env:TWILIO_ACCOUNT_SID="your_account_sid_here"
$env:TWILIO_AUTH_TOKEN="your_auth_token_here"
$env:TWILIO_WHATSAPP_NUMBER="+1415523xxxx"
```

### 6. Update application.properties

Edit `app-backend/src/main/resources/application.properties`:

```properties
# Twilio Configuration for WhatsApp
twilio.account-sid=your_account_sid_here
twilio.auth-token=your_auth_token_here
twilio.whatsapp-phone-number=+1415523xxxx
```

Replace with your actual Twilio credentials and sandbox number.

### 7. Build and Run the Backend

```bash
cd app-backend
./gradlew.bat build
npm run start:backend
```

### 8. Test the Integration

1. Open the frontend at `http://localhost:3000`
2. Navigate to **Contact Us** page
3. Fill in the form with:
   - Name
   - Email
   - Phone (optional)
   - **WhatsApp Phone Number** (the one you joined the sandbox with, e.g., +1 234 567 8900)
   - Subject
   - Message

4. Click "Send Message"
5. You should receive a WhatsApp message within seconds

## API Endpoint

**Endpoint:** `POST /api/contact/submit`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "phoneNumber": "+1234567890",
  "company": "ACME Corp",
  "subject": "consulting",
  "message": "I'm interested in your consulting services"
}
```

**Response (Success):**
```json
{
  "id": 1,
  "message": "Thank you for contacting HPT Solutions! We'll get back to you soon via WhatsApp.",
  "success": true,
  "status": "SUCCESS"
}
```

**Response (Error):**
```json
{
  "id": null,
  "message": "Missing required fields",
  "success": false,
  "status": "VALIDATION_ERROR"
}
```

## Important Notes

### Sandbox Limitations
- The sandbox is for testing only
- You can only send messages to numbers that have joined your sandbox
- There's a message limit for free accounts
- Expires every 72 hours if no messages are sent

### Production Setup
To use in production:
1. Request WhatsApp Business Account from Twilio
2. Get approval from Meta (Facebook)
3. Update to your business WhatsApp number
4. Update credentials in application.properties

### Database
- Contact submissions are stored in SQLite database
- Database file: `app-backend/sqlitestorage.db`
- Check `whatsapp_sent` flag to verify if notification was sent

## Troubleshooting

### WhatsApp Message Not Received
1. Verify phone number is in E.164 format: `+1234567890`
2. Ensure the number has joined the sandbox with the correct join code
3. Check the backend logs for errors
4. Verify Twilio credentials are correct

### CORS Error
The backend is configured with CORS enabled for all origins. If you get a CORS error:
1. Ensure the frontend is running on `http://localhost:3000` or `http://localhost:5173`
2. Check backend is running on `http://localhost:8080`

### Database Errors
If you see database errors:
1. Ensure SQLite JDBC driver is installed (in build.gradle)
2. Check write permissions in app-backend directory
3. Delete `sqlitestorage.db` to reset

## Security Considerations

⚠️ **IMPORTANT FOR PRODUCTION:**
1. Never commit credentials to version control
2. Use environment variables (not in application.properties)
3. Use secrets management (Azure Key Vault, AWS Secrets Manager)
4. Implement rate limiting on the contact endpoint
5. Add CSRF protection
6. Validate and sanitize all inputs
7. Use HTTPS only
8. Implement authentication if needed

## Cost Considerations

- Twilio sandbox: FREE
- Production WhatsApp messages: ~$0.005 per message (varies by region)
- Twilio offers free trial credits for testing

## Resources

- Twilio Docs: https://www.twilio.com/docs/whatsapp
- WhatsApp API: https://www.twilio.com/docs/whatsapp/api
- Spring Boot Docs: https://spring.io/projects/spring-boot
- React Router: https://reactrouter.com/

---

For more help, visit: https://www.twilio.com/console/support
