import { useEffect, useRef } from 'react';
import { 
  Globe, 
  Code, 
  Palette, 
  TrendingUp, 
  Figma, 
  MessageCircle 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Websites & Web Apps',
    description: 'Custom-built websites and powerful web applications designed for performance, security, and a flawless user experience.'
  },
  {
    icon: Code,
    title: 'E-commerce Solutions',
    description: 'Launch a thriving online store with our bespoke e-commerce platforms, featuring essential local integrations like Yalidine for shipping and Chargily for secure payments.'
  },
  {
    icon: Figma,
    title: 'UI/UX Design',
    description: 'Human-centered design that ensures your digital products are intuitive, engaging, and convert visitors into loyal customers.'
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'We craft powerful brand identities that tell your story and create a lasting connection with your audience in the Algerian market.'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic online campaigns to boost your visibility, drive traffic, and achieve measurable growth for your business.'
  },
  {
    icon: MessageCircle,
    title: 'Technical Consulting',
    description: 'Expert guidance to navigate your digital challenges, helping you find the right technologies and strategies to solve any problem.'
  }
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-fade-up');
        }, index * 150);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-20 opacity-0">
          <h2 className="section-title mb-6">
            <span className="section-title-bold">Our</span>{' '}
            <span className="section-title-thin">Services</span>
          </h2>
          <p className="text-xl text-light font-outfit font-light max-w-3xl mx-auto">
            Empowering your business with comprehensive, market-leading digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group p-8 bg-card border border-border rounded-3xl hover:shadow-[var(--shadow-soft)] transition-smooth opacity-0"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <h3 className="text-2xl font-outfit font-semibold mb-4">
                {service.title}
              </h3>
              
              <p className="text-light font-outfit font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};