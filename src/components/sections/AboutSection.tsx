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
                At CtrlLabs, we're passionate about pushing the boundaries of digital creativity. 
                Our team of visionary designers and developers craft experiences that don't just 
                look beautiful—they inspire action and drive results.
              </p>
              
              <p>
                Founded on the principles of innovation and technical excellence, we partner with 
                forward-thinking brands to bring their boldest ideas to life. From concept to 
                launch, we're dedicated to delivering solutions that exceed expectations.
              </p>
              
              <p>
                Our mission is simple: to pioneer creative excellence in everything we do, 
                setting new standards for what's possible in the digital realm.
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