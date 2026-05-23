package co.devskills.springbootboilerplate;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class WhatsAppService {
    
    @Value("${twilio.account-sid}")
    private String twilioAccountSid;
    
    @Value("${twilio.auth-token}")
    private String twilioAuthToken;
    
    @Value("${twilio.whatsapp-phone-number}")
    private String twilioWhatsAppNumber;
    
    @Autowired
    private ContactRepository contactRepository;
    
    public void sendWhatsAppNotification(Contact contact) {
        try {
            // Initialize Twilio
            Twilio.init(twilioAccountSid, twilioAuthToken);
            
            // Format the phone number (ensure it includes country code)
            String formattedPhone = contact.getPhoneNumber();
            if (!formattedPhone.startsWith("+")) {
                // Default to +1 (US) if no country code provided
                formattedPhone = "+1" + formattedPhone.replaceAll("[^0-9]", "");
            }
            
            // Create the WhatsApp message
            String messageBody = String.format(
                "Hello %s,\n\n" +
                "Thank you for contacting HPT Solutions!\n\n" +
                "We have received your inquiry:\n" +
                "📧 Email: %s\n" +
                "📱 Phone: %s\n" +
                "🏢 Company: %s\n" +
                "📝 Subject: %s\n" +
                "💬 Message: %s\n\n" +
                "Our team will review your message and get back to you shortly.\n\n" +
                "Best regards,\n" +
                "HPT Solutions Team",
                contact.getName(),
                contact.getEmail(),
                contact.getPhone(),
                contact.getCompany() != null ? contact.getCompany() : "N/A",
                contact.getSubject(),
                contact.getMessage()
            );
            
            // Send the message via WhatsApp
            Message message = Message.creator(
                    new PhoneNumber("whatsapp:" + formattedPhone),  // To number (WhatsApp)
                    new PhoneNumber("whatsapp:" + twilioWhatsAppNumber),  // From number (WhatsApp Business)
                    messageBody
            ).create();
            
            log.info("WhatsApp message sent successfully. SID: {}", message.getSid());
            
            // Update contact record
            contact.setWhatsappSent(true);
            contactRepository.save(contact);
            
        } catch (Exception e) {
            log.error("Failed to send WhatsApp message to {}: {}", contact.getPhoneNumber(), e.getMessage(), e);
            // Save contact even if WhatsApp fails
            contactRepository.save(contact);
        }
    }
}
