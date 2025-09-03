import { useEffect, useRef } from 'react';

// Company logos - using placeholder logos for now
const companies = [
  { name: 'Apple', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png' },
  { name: 'Google', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
  { name: 'Microsoft', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png' },
  { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
  { name: 'Meta', logo: 'https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png' },
  { name: 'Netflix', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' },
  { name: 'Spotify', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png' },
  { name: 'Adobe', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Adobe-Logo.png' },
];

export const TrustedCompaniesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="trusted-companies" className="py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-20 opacity-0">
          <h2 className="section-title mb-6">
            <span className="section-title-bold">Trusted</span>{' '}
            <span className="section-title-thin">By</span>
          </h2>
          <p className="text-xl text-light font-outfit font-light max-w-3xl mx-auto">
            We are proud partners to a growing number of businesses in Algeria, helping them achieve their digital goals.
          </p>
        </div>

        {/* Sliding Logos */}
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex gap-16 items-center animate-logo-slide"
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-background/50 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-background/50 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="max-w-32 max-h-16 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};