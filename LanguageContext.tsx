
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Locale } from './types';

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
  t: (key: any) => string;
  scrollToSection: (id: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Set default to Nepali as requested
  const [locale, setLocale] = useState<Locale>('ne');

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'ne' ? 'en' : 'ne'));
  };

  const t = (obj: any): string => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[locale] || obj['en'] || '';
  };

  const scrollToSection = (id: string) => {
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Ensure the ID has the # prefix removed for querySelector if it was passed with it
    const targetId = id.startsWith('#') ? id : `#${id}`;
    const element = document.querySelector(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, setLocale, t, scrollToSection }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
