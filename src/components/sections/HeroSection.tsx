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
      {/* White Abstract Particles Background */}
      <div className="abstract-bg-container">
        {/* White floating particles */}
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`particle ${i % 3 === 0 ? 'particle-large' : i % 2 === 0 ? 'particle-medium' : 'particle-small'}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-20 text-center px-6 max-w-6xl mx-auto opacity-0">
        <h1 className="hero-title mb-8">
          <div className="hero-word-container">
            <span className="hero-title-bold animate-hero-word-1 font-outfit flex items-center justify-center">
              <span className="text-accent/60 mr-3 text-2xl md:text-4xl lg:text-5xl">{"<"}</span>
              <span className="flex">
                {"Digital Control Unlocked".split(' ').map((word, wordIndex) => (
                  <span key={wordIndex} className="mr-4">
                    {word.split('').map((letter, letterIndex) => (
                      <span 
                        key={letterIndex} 
                        className="hero-letter typewriter-char inline-block"
                        style={{ animationDelay: `${(wordIndex * 5 + letterIndex) * 0.1}s` }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
              <span className="text-accent/60 ml-3 text-2xl md:text-4xl lg:text-5xl">{"/>"}</span>
            </span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-light mb-12 font-outfit font-light max-w-3xl mx-auto">
          At <span className="font-bold">CtrlLabs</span>, we don't just build digital solutions, we master them. We are your partner in the Algerian market, crafting exceptional websites, web apps, and e-commerce platforms that put you in complete control of your digital presence.
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