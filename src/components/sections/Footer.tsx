import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="text-3xl font-bold font-outfit">
              <span className="font-extralight">Ctrl</span>
              <span className="font-bold">Labs</span>
            </div>
            <p className="text-primary-foreground/70 font-outfit font-light leading-relaxed">
              Mastering digital control through innovative solutions. 
              We empower businesses in Algeria with complete oversight of their digital presence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-outfit font-semibold">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-primary-foreground/70 hover:text-primary-foreground font-outfit transition-smooth"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-outfit font-semibold">Connect</h3>
            <div className="space-y-3 text-primary-foreground/70 font-outfit">
              <p>hello@ctrllabs.com</p>
              <p>+213 (0) XXX XXX XXX</p>
              <p>Algiers, Algeria<br />Digital Innovation Hub</p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/70 font-outfit font-light">
            © 2024 <span className="font-bold">CtrlLabs</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};