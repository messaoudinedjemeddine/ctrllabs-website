import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-20 opacity-0">
          <h2 className="section-title mb-6">
            <span className="section-title-bold">Get In</span>{' '}
            <span className="section-title-thin">Touch</span>
          </h2>
          <p className="text-xl text-light font-outfit font-light max-w-3xl mx-auto">
            Ready to take control of your digital presence? Contact us today to discuss how we can build a powerful solution for your business in Algeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-outfit font-semibold mb-2">Phone</h3>
                  <p className="text-light font-outfit">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-outfit font-semibold mb-2">Email</h3>
                  <p className="text-light font-outfit">hello@ctrllabs.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-outfit font-semibold mb-2">Location</h3>
                  <p className="text-light font-outfit">
                    123 Creative Street<br />
                    Design District, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-outfit font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-outfit focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-outfit font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-outfit focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-outfit font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl font-outfit focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-outfit font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl font-outfit focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-xl font-outfit font-medium hover:shadow-[var(--shadow-glow)] transition-smooth hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};