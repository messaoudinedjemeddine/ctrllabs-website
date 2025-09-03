import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Digital Control Unlocked',
    'hero.subtitle': 'At CtrlLabs, we don\'t just build digital solutions, we master them. We are your partner in the Algerian market, crafting exceptional websites, web apps, and e-commerce platforms that put you in complete control of your digital presence.',
    'hero.cta': 'View Our Work',
    
    // About Section
    'about.title': 'About CtrlLabs',
    'about.description': 'CtrlLabs is an Algerian digital agency founded on the principle of Control, inspired by the keyboard key that signifies command and mastery. We believe that true digital success comes from having complete oversight of your online presence. Our team of expert developers and designers is dedicated to providing innovative solutions that empower your business.',
    'about.specialization': 'We specialize in delivering robust websites, dynamic web applications, and seamless e-commerce solutions tailored specifically for the local Algerian market. Our deep understanding of the market allows us to create platforms that not only meet global standards but also resonate with local audiences.',
    'about.mission': 'Our mission is to be the definitive force in Algeria\'s digital transformation. We achieve this by providing cutting-edge, reliable, and scalable solutions, from integrating local payment gateways like Chargily to optimizing shipping logistics with services such as Yalidine, ensuring your business operates without a hitch.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Empowering your business with comprehensive, market-leading digital solutions.',
    
    // Portfolio Section
    'portfolio.title': 'Featured Projects',
    'portfolio.subtitle': 'A curated selection of our most impactful work in the Algerian digital landscape.',
    'portfolio.viewProject': 'View Project',
    
    // Trusted Companies Section
    'trusted.title': 'Trusted By',
    'trusted.subtitle': 'We are proud partners to a growing number of businesses in Algeria, helping them achieve their digital goals.',
    
    // Team Section
    'team.title': 'Meet Our Team',
    'team.subtitle': 'A team of dedicated professionals who control every detail of your digital journey with passion and precision.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to take control of your digital presence? Contact us today to discuss how we can build a powerful solution for your business in Algeria.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.namePlaceholder': 'Enter your full name',
    'contact.emailPlaceholder': 'Enter your email address',
    'contact.subjectPlaceholder': 'What is this about?',
    'contact.messagePlaceholder': 'Tell us about your project or inquiry...',
    
    // Footer
    'footer.description': 'Mastering digital control through innovative solutions. We empower businesses in Algeria with complete oversight of their digital presence.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2024 CtrlLabs. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Contrôle Numérique Débloqué',
    'hero.subtitle': 'Chez CtrlLabs, nous ne construisons pas seulement des solutions numériques, nous les maîtrisons. Nous sommes votre partenaire sur le marché algérien, créant des sites web exceptionnels, des applications web et des plateformes e-commerce qui vous donnent un contrôle total de votre présence numérique.',
    'hero.cta': 'Voir Nos Réalisations',
    
    // About Section
    'about.title': 'À Propos de CtrlLabs',
    'about.description': 'CtrlLabs est une agence numérique algérienne fondée sur le principe du Contrôle, inspirée par la touche de clavier qui signifie commande et maîtrise. Nous croyons que le véritable succès numérique vient d\'avoir une vision complète de votre présence en ligne.',
    'about.specialization': 'Notre équipe de développeurs et designers experts se consacre à fournir des solutions innovantes qui autonomisent votre entreprise. Nous nous spécialisons dans la livraison de sites web robustes, d\'applications web dynamiques et de solutions e-commerce transparentes adaptées spécifiquement au marché algérien local.',
    'about.mission': 'Notre mission est d\'être la force définitive dans la transformation numérique de l\'Algérie. Nous y parvenons en fournissant des solutions de pointe, fiables et évolutives, de l\'intégration de passerelles de paiement locales comme Chargily à l\'optimisation de la logistique d\'expédition avec des services comme Yalidine.',
    
    // Services Section
    'services.title': 'Nos Services',
    'services.subtitle': 'Autonomiser votre entreprise avec des solutions numériques complètes et de premier plan.',
    
    // Portfolio Section
    'portfolio.title': 'Projets Sélectionnés',
    'portfolio.subtitle': 'Une sélection de nos travaux les plus impactants dans le paysage numérique algérien.',
    'portfolio.viewProject': 'Voir le Projet',
    
    // Trusted Companies Section
    'trusted.title': 'Ils Nous Font Confiance',
    'trusted.subtitle': 'Nous sommes fiers d\'être partenaires d\'un nombre croissant d\'entreprises en Algérie, les aidant à atteindre leurs objectifs numériques.',
    
    // Team Section
    'team.title': 'Notre Équipe',
    'team.subtitle': 'Une équipe de professionnels dévoués qui contrôlent chaque détail de votre parcours numérique avec passion et précision.',
    
    // Contact Section
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prêt à prendre le contrôle de votre présence numérique ? Contactez-nous aujourd\'hui pour discuter de la façon dont nous pouvons construire une solution puissante pour votre entreprise en Algérie.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.namePlaceholder': 'Entrez votre nom complet',
    'contact.emailPlaceholder': 'Entrez votre adresse email',
    'contact.subjectPlaceholder': 'De quoi s\'agit-il ?',
    'contact.messagePlaceholder': 'Parlez-nous de votre projet ou de votre demande...',
    
    // Footer
    'footer.description': 'Maîtriser le contrôle numérique grâce à des solutions innovantes. Nous autonomisons les entreprises en Algérie avec une vision complète de leur présence numérique.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.connect': 'Se Connecter',
    'footer.copyright': '© 2024 CtrlLabs. Tous droits réservés.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
