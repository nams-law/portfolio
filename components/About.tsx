
import React from 'react';
import { UI_TEXT } from '../constants';
import { useLanguage } from '../LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-900 text-stone-100 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://cdn-ilcngpj.nitrocdn.com/GTflQlTPhZEyKODaeAgsvlWxWklvaqpj/assets/images/optimized/rev-f646f60/ssjurists.com.np/wp-content/uploads/2024/07/Namrata-Khadka-SS-Jurists-scaled.webp" 
                alt="Namrata Khadka"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-stone-800 -z-10"></div>
            </div>
            <div className="absolute -top-10 -left-10 text-stone-800 text-9xl font-bold serif opacity-50 hidden lg:block">
              NK
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">{t(UI_TEXT.name)}</h2>
            <p className="text-lg text-stone-400 mb-8 font-light italic serif leading-relaxed">
              {t(UI_TEXT.aboutQuote)}
            </p>
            <div className="space-y-6 text-stone-300 font-light leading-relaxed">
              <p>{t(UI_TEXT.aboutP1)}</p>
              <p>{t(UI_TEXT.aboutP2)}</p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-stone-800">
              <div>
                <span className="block text-2xl font-bold serif mb-1">{t({ en: 'National Law College', ne: 'नेसनल ल कलेज' })}</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">Academic Foundation</span>
              </div>
              <div>
                <span className="block text-2xl font-bold serif mb-1">{t({ en: 'Elite Counsel', ne: 'विशिष्ट सल्लाहकार' })}</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">Service Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
