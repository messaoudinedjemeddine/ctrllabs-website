import { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Abstract Animated Gradient Background */}
      <div className="abstract-bg-container">
        {/* Primary animated gradient */}
        <div className="abstract-gradient-primary" />
        
        {/* Secondary animated gradient */}
        <div className="abstract-gradient-secondary" />
        
        {/* Tertiary animated gradient */}
        <div className="abstract-gradient-tertiary" />
        
        {/* Abstract geometric shapes */}
        <div className="abstract-shapes">
          <div className="abstract-shape-1" />
          <div className="abstract-shape-2" />
          <div className="abstract-shape-3" />
          <div className="abstract-shape-4" />
        </div>
        
        {/* Enhanced floating particles */}
        <div className="particles-container">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`particle ${i % 3 === 0 ? 'particle-large' : i % 2 === 0 ? 'particle-medium' : 'particle-small'}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${20 + Math.random() * 15}s`
              }}
            />
          ))}
        </div>
        
        {/* Overlay for depth */}
        <div className="abstract-overlay" />
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-20 text-center px-6 max-w-6xl mx-auto opacity-0">
        <h1 className="hero-title mb-8">
          <div className="hero-word-container">
            <span className="hero-title-bold animate-hero-word-1">
              {"Digital Control".split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="hero-letter"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>
          <div className="hero-word-container">
            <span className="hero-title-thin animate-hero-word-2">
              {"Unlocked".split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="hero-letter"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-light mb-12 font-outfit font-light max-w-3xl mx-auto">
          At CtrlLabs, we don't just build digital solutions, we master them. We are your partner in the Algerian market, crafting exceptional websites, web apps, and e-commerce platforms that put you in complete control of your digital presence.
        </p>
        
        <button 
          onClick={scrollToPortfolio}
          className="btn-hero font-outfit"
        >
          View Our Work
        </button>
      </div>
    </section>
  );
};