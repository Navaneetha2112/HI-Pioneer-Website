package co.devskills.springbootboilerplate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactRequest {
    private String name;
    private String email;
    private String phone;
    private String company;
    private String subject;
    private String message;
    private String phoneNumber;
}
