import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const languageOptions = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇩🇿' }
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
    
    // Update document direction for Arabic
    if (langCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = langCode;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all duration-200 font-outfit text-sm"
        aria-label="Language switcher"
      >
        <Globe size={16} className="text-accent" />
        <span className="text-foreground">{currentLanguage?.flag}</span>
        <span className="text-foreground hidden sm:inline">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown 
          size={14} 
          className={`text-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => handleLanguageChange(option.code as Language)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-accent/10 transition-colors duration-200 ${
                language === option.code ? 'bg-accent/20 text-accent' : 'text-foreground'
              }`}
            >
              <span className="text-lg">{option.flag}</span>
              <span className="font-outfit font-medium">{option.name}</span>
              {language === option.code && (
                <div className="ml-auto w-2 h-2 bg-accent rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
