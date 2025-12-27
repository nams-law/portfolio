
import React from 'react';
import { UI_TEXT } from '../constants';
import { useLanguage } from '../LanguageContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, scrollToSection } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Background Image: Professional Office with hint of Scales of Justice */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
          alt="Nepal Legal Advocacy"
          className="object-cover w-full h-full opacity-90 grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-stone-50/10 to-stone-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-stone-100 text-[11px] uppercase tracking-[0.2em] font-bold mb-8 rounded-full shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
            {t(UI_TEXT.freelanceStatus)}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1] mb-8 serif">
            {t(UI_TEXT.heroTitle)}
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-light border-l-4 border-stone-200 pl-6 py-1">
            {t(UI_TEXT.heroSub)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="group px-10 py-4 bg-stone-900 text-white text-center font-semibold hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-stone-300"
            >
              {t(UI_TEXT.practiceTitle)}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-10 py-4 border-2 border-stone-300 text-stone-900 text-center font-semibold hover:bg-white hover:border-stone-900 transition-all"
            >
              {t(UI_TEXT.consultation)}
            </a>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex -space-x-3">
              {[15, 22, 35, 42].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-stone-200 shadow-sm overflow-hidden transform hover:scale-110 transition-transform cursor-pointer">
                  <img src={`https://i.pravatar.cc/150?img=${i}`} alt="Client Avatar" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs text-stone-400 font-bold tracking-widest uppercase">
                {t({ en: 'Direct Freelance Counsel', ne: 'प्रत्यक्ष स्वतन्त्र कानुनी परामर्श' })}
              </p>
              <p className="text-stone-600 text-sm font-light mt-0.5">
                {t({ en: 'Trusted by businesses across Kathmandu.', ne: 'काठमाडौँका विभिन्न व्यवसायहरूद्वारा विश्वास गरिएको।' })}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12 animate-bounce hidden md:block opacity-50">
        <div className="w-px h-16 bg-stone-400 mx-auto"></div>
        <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold rotate-90 block mt-10 origin-left translate-x-1">Scroll</span>
      </div>
    </section>
  );
};
