package co.devskills.springbootboilerplate;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContactController {
    
    @Autowired
    private ContactRepository contactRepository;
    
    @Autowired
    private EmailService emailService;
    
    @Autowired
    private WhatsAppService whatsAppService;
    
    @PostMapping("/submit")
    public ResponseEntity<ContactResponse> submitContact(@RequestBody ContactRequest contactRequest) {
        try {
            log.info("Received contact form submission from: {}", contactRequest.getName());
            
            // Validate required fields
            if (contactRequest.getName() == null || contactRequest.getName().isEmpty() ||
                contactRequest.getEmail() == null || contactRequest.getEmail().isEmpty() ||
                contactRequest.getSubject() == null || contactRequest.getSubject().isEmpty() ||
                contactRequest.getMessage() == null || contactRequest.getMessage().isEmpty()) {
                
                return ResponseEntity.badRequest().body(
                    new ContactResponse(null, "Missing required fields", false, "VALIDATION_ERROR")
                );
            }
            
            // Create and save contact
            Contact contact = new Contact();
            contact.setName(contactRequest.getName());
            contact.setEmail(contactRequest.getEmail());
            contact.setPhone(contactRequest.getPhone());
            contact.setCompany(contactRequest.getCompany());
            contact.setSubject(contactRequest.getSubject());
            contact.setMessage(contactRequest.getMessage());
            contact.setPhoneNumber(contactRequest.getPhoneNumber());
            
            Contact savedContact = contactRepository.save(contact);
            log.info("Contact saved with ID: {}", savedContact.getId());
            
            // Send email notification
            try {
                emailService.sendContactEmail(savedContact);
            } catch (Exception emailException) {
                log.error("Email sending failed: {}", emailException.getMessage(), emailException);
            }

            // Send WhatsApp notification if a WhatsApp number is provided
            if (savedContact.getPhoneNumber() != null && !savedContact.getPhoneNumber().isEmpty()) {
                try {
                    whatsAppService.sendWhatsAppNotification(savedContact);
                } catch (Exception whatsappException) {
                    log.error("WhatsApp notification failed: {}", whatsappException.getMessage(), whatsappException);
                }
            }
            
            return ResponseEntity.ok(
                new ContactResponse(
                    savedContact.getId(),
                    "Thank you for contacting HPT Solutions! Your message has been received and we will respond soon.",
                    true,
                    "SUCCESS"
                )
            );
            
        } catch (Exception e) {
            log.error("Error processing contact submission: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                new ContactResponse(null, "Error processing your request", false, "ERROR")
            );
        }
    }
    
    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Contact service is running");
    }
}
