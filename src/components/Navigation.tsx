import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

const navItems = [
  { nameKey: 'nav.home', href: '#hero' },
  { nameKey: 'nav.about', href: '#about' },
  { nameKey: 'nav.services', href: '#services' },
  { nameKey: 'nav.portfolio', href: '#portfolio' },
  { nameKey: 'nav.team', href: '#team' },
  { nameKey: 'nav.contact', href: '#contact' },
];

export const Navigation = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-moonwalk">
            <span className="font-extralight">Ctrl</span>
            <span className="font-bold">Labs</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-accent/10 transition-smooth"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8">
            {navItems.map((item, index) => (
              <button
                key={item.nameKey}
                onClick={() => handleNavClick(item.href)}
                className={`block text-4xl md:text-6xl font-outfit font-extralight hover:text-accent transition-smooth animate-slide-down`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {t(item.nameKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-4 bg-accent text-accent-foreground rounded-full shadow-[var(--shadow-glow)] transition-smooth hover:scale-110 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};