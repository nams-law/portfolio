
import React from 'react';
import { SERVICES, UI_TEXT } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">{t(UI_TEXT.practiceTitle)}</h2>
          <div className="w-16 h-1 bg-stone-900 mx-auto mb-8"></div>
          <p className="text-stone-600 leading-relaxed font-light">
            {t(UI_TEXT.practiceSub)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={t(service.title)} 
              className="group p-8 border border-stone-100 hover:border-stone-900 transition-all duration-500 bg-stone-50/50"
            >
              <div className="mb-6 inline-block p-3 bg-white shadow-sm border border-stone-100 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 serif text-stone-900 group-hover:translate-x-1 transition-transform">
                {t(service.title)}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {t(service.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
