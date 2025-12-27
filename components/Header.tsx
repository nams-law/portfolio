
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS, UI_TEXT } from '../constants';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { locale, setLocale, t, scrollToSection } = useLanguage();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    NAV_ITEMS.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    scrollToSection(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="serif text-xl md:text-2xl font-bold tracking-tight text-stone-900 z-50"
        >
          {t(UI_TEXT.name)}
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a 
                key={t(item.label)}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                  isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {t(item.label)}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-stone-900 transition-transform duration-300 origin-left ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          {/* Enhanced Language Toggle */}
          <div className="hidden sm:flex bg-stone-100 p-1 rounded-full border border-stone-200 shadow-inner">
            <button 
              onClick={() => setLocale('ne')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider transition-all duration-300 ${
                locale === 'ne' ? 'bg-white text-stone-900 shadow-md transform scale-105' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              नेपाली
            </button>
            <button 
              onClick={() => setLocale('en')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider transition-all duration-300 ${
                locale === 'en' ? 'bg-white text-stone-900 shadow-md transform scale-105' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              EN
            </button>
          </div>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden lg:block bg-stone-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            {t(UI_TEXT.consultation)}
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-stone-900 z-50 focus:outline-none bg-stone-100 rounded-full"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-white transition-transform duration-500 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`} style={{ top: '0', height: '100vh', zIndex: 40 }}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={t(item.label)}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`serif text-3xl font-bold transition-colors ${
                activeSection === item.href.slice(1) ? 'text-stone-900' : 'text-stone-400'
              }`}
            >
              {t(item.label)}
            </a>
          ))}
          
          <div className="flex bg-stone-100 p-1 rounded-full border border-stone-200 mt-6">
            <button 
              onClick={() => setLocale('ne')}
              className={`px-8 py-3 rounded-full text-xs font-bold transition-all ${
                locale === 'ne' ? 'bg-white text-stone-900 shadow-md' : 'text-stone-400'
              }`}
            >
              नेपाली
            </button>
            <button 
              onClick={() => setLocale('en')}
              className={`px-8 py-3 rounded-full text-xs font-bold transition-all ${
                locale === 'en' ? 'bg-white text-stone-900 shadow-md' : 'text-stone-400'
              }`}
            >
              ENGLISH
            </button>
          </div>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full max-w-xs text-center bg-stone-900 text-white py-5 font-medium text-lg mt-6 shadow-xl active:scale-95 transition-transform"
          >
            {t(UI_TEXT.consultation)}
          </a>
        </nav>
      </div>
    </header>
  );
};
