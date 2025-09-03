import { useEffect, useRef } from 'react';
import { 
  Globe, 
  Code, 
  Palette, 
  CreditCard, 
  Truck, 
  HeadphonesIcon 
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development & Maintenance',
    description: 'Our comprehensive service covers the entire website lifecycle, from robust development and secure deployment to ongoing maintenance, bug fixes, and continuous technical support to ensure your site is always running perfectly.'
  },
  {
    icon: Globe,
    title: 'E-commerce & Landing Pages',
    description: 'We build powerful e-commerce platforms and high-converting landing pages tailored to the Algerian market, driving sales and capturing leads to help your business grow.'
  },
  {
    icon: Palette,
    title: 'Web Design & Brand Identity',
    description: 'We craft modern and professional web designs while developing a strong brand identity that visually represents your business and resonates with your target audience.'
  },
  {
    icon: CreditCard,
    title: 'Online Payment Integration',
    description: 'We specialize in seamlessly integrating essential local online payment gateways like Chargily, providing a secure and efficient way for your business to accept payments.'
  },
  {
    icon: Truck,
    title: 'Delivery Solutions',
    description: 'We integrate with various delivery companies, including Yalidine, to streamline your logistics and ensure a smooth, reliable shipping process for your customers.'
  },
  {
    icon: HeadphonesIcon,
    title: 'IT Support',
    description: 'We offer expert IT support, both on-site and online, to troubleshoot and resolve any technical challenges your business may face, allowing you to focus on what you do best.'
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