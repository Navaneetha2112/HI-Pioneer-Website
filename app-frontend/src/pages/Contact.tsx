import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneNumber: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const submitUrl = isLocal
      ? 'http://localhost:8080/api/contact/submit'
      : 'https://formsubmit.co/ajax/navaneetha211201@gmail.com';

    const payload = isLocal
      ? {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          phoneNumber: formData.phoneNumber,
          company: formData.company,
          subject: formData.subject,
          message: formData.message
        }
      : {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          phoneNumber: formData.phoneNumber,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _subject: `New contact from ${formData.name}`,
          _replyto: formData.email,
          _captcha: 'false'
        };

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(isLocal ? {} : { Accept: 'application/json' })
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      const data = await response.json();
      setSuccess(true);
      alert(data.message || 'Thank you! Your message has been sent by email. We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', phoneNumber: '', company: '', subject: '', message: '' });
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while submitting the form';
      setError(errorMessage);
      alert('Error: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <section className="content-section">
        <h1>Contact Us</h1>
        <p>Get in touch with HPT Solutions. We'd love to hear from you.</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-block">
              <h3>📍 Office Address</h3>
              <p>123 Tech Street<br />Innovation City, IC 12345<br />Bangalore</p>
            </div>

            <div className="info-block">
              <h3>📞 Phone</h3>
              <p>+91 (955) 123-4378</p>
            </div>

            <div className="info-block">
              <h3>📧 Email</h3>
              <p>info@hptsolutions.com<br />support@hptsolutions.com</p>
            </div>

            <div className="info-block">
              <h3>🕐 Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday - Sunday: Closed</p>
            </div>

            <div className="info-block" style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '4px', marginTop: '2rem' }}>
              <h3>💬 WhatsApp Integration</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                Enter your WhatsApp phone number (with country code, e.g., +1234567890) to receive an optional WhatsApp confirmation when we receive your message. Email delivery is always sent.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {error && <div className="form-error" style={{ color: '#d32f2f', marginBottom: '1rem', padding: '0.8rem', backgroundColor: '#ffebee', borderRadius: '4px' }}>❌ {error}</div>}
            {success && <div className="form-success" style={{ color: '#388e3c', marginBottom: '1rem', padding: '0.8rem', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>✅ Message sent successfully! We have emailed your submission and will respond soon.</div>}
            
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">WhatsApp Phone Number (optional, e.g., +12345678900)</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1234567890"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={loading}
              >
                <option value="">Select a subject</option>
                <option value="consulting">Consulting Services</option>
                <option value="training">Training Programs</option>
                <option value="development">App Development</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
