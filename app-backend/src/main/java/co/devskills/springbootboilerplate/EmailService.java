package co.devskills.springbootboilerplate;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${contact.email.to:navaneetha211201@gmail.com}")
    private String contactEmailTo;

    @Value("${contact.email.from:${EMAIL_USERNAME:navaneetha211201@gmail.com}}")
    private String contactEmailFrom;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(Contact contact) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(contactEmailTo);
            message.setFrom(contactEmailFrom);
            message.setSubject("New contact form submission: " + contact.getSubject());
            message.setText(buildEmailBody(contact));
            mailSender.send(message);
            log.info("Contact email sent to {}", contactEmailTo);
        } catch (MailException e) {
            log.error("Failed to send contact email: {}", e.getMessage(), e);
            throw e;
        }
    }

    private String buildEmailBody(Contact contact) {
        return String.format(
                "A new contact form submission has been received:\n\n" +
                        "Name: %s\n" +
                        "Email: %s\n" +
                        "Phone: %s\n" +
                        "WhatsApp: %s\n" +
                        "Company: %s\n" +
                        "Subject: %s\n" +
                        "Message:\n%s\n\n" +
                        "Received at: %s\n",
                contact.getName(),
                contact.getEmail(),
                contact.getPhone() != null ? contact.getPhone() : "N/A",
                contact.getPhoneNumber() != null ? contact.getPhoneNumber() : "N/A",
                contact.getCompany() != null ? contact.getCompany() : "N/A",
                contact.getSubject(),
                contact.getMessage(),
                contact.getCreatedAt() != null ? contact.getCreatedAt().toString() : "N/A"
        );
    }
}
