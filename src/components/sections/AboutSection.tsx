import { useEffect, useRef } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 bg-section">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center opacity-0">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="section-title">
              <span className="section-title-bold">About</span>{' '}
              <span className="section-title-thin">CtrlLabs</span>
            </h2>
            
            <div className="space-y-6 text-lg text-light font-outfit font-light leading-relaxed">
              <p>
                CtrlLabs is an Algerian digital agency founded on the principle of Control, inspired by the keyboard key that signifies command and mastery. We believe that true digital success comes from having complete oversight of your online presence. Our team of expert developers and designers is dedicated to providing innovative solutions that empower your business.
              </p>
              
              <p>
                We specialize in delivering robust websites, dynamic web applications, and seamless e-commerce solutions tailored specifically for the local Algerian market. Our deep understanding of the market allows us to create platforms that not only meet global standards but also resonate with local audiences.
              </p>
              
              <p>
                Our mission is to be the definitive force in Algeria's digital transformation. We achieve this by providing cutting-edge, reliable, and scalable solutions, from integrating local payment gateways like Chargily to optimizing shipping logistics with services such as Yalidine, ensuring your business operates without a hitch.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img 
                src={heroBackground} 
                alt="CtrlLabs creative studio" 
                className="w-full h-96 object-cover image-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};