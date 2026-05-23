package co.devskills.springbootboilerplate;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContactController {
    
    @Autowired
    private ContactRepository contactRepository;
    
    @Autowired
    private WhatsAppService whatsAppService;
    
    @PostMapping("/submit")
    public ResponseEntity<ContactResponse> submitContact(@RequestBody ContactRequest contactRequest) {
        try {
            log.info("Received contact form submission from: {}", contactRequest.getName());
            
            // Validate required fields
            if (contactRequest.getName() == null || contactRequest.getName().isEmpty() ||
                contactRequest.getEmail() == null || contactRequest.getEmail().isEmpty() ||
                contactRequest.getPhoneNumber() == null || contactRequest.getPhoneNumber().isEmpty() ||
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
            
            // Send WhatsApp notification
            whatsAppService.sendWhatsAppNotification(savedContact);
            
            return ResponseEntity.ok(
                new ContactResponse(
                    savedContact.getId(),
                    "Thank you for contacting HPT Solutions! We'll get back to you soon via WhatsApp.",
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
