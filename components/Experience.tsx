
import React from 'react';
import { EXPERIENCE, EDUCATION, UI_TEXT } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">{t(UI_TEXT.historyTitle)}</h2>
            <div className="w-12 h-0.5 bg-stone-900 mb-8"></div>
            <p className="text-stone-600 font-light leading-relaxed max-w-sm">
              {t(UI_TEXT.historySub)}
            </p>
          </div>
          
          <div className="lg:w-2/3">
            {/* Professional Experience Sub-section */}
            <div className="mb-20">
              <h4 className="text-xs uppercase tracking-[0.3em] text-stone-400 font-bold mb-10">{t(UI_TEXT.legalExp)}</h4>
              <div className="space-y-16">
                {EXPERIENCE.map((item, index) => (
                  <div key={index} className="group relative pl-0 md:pl-8 border-l-0 md:border-l border-stone-200">
                    <div className="hidden md:block absolute left-[-5px] top-1.5 w-[9px] h-[9px] bg-stone-900 rounded-full transition-transform group-hover:scale-150"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                      <span className="text-sm font-semibold tracking-widest text-stone-400 uppercase serif min-w-[120px]">
                        {t(item.year)}
                      </span>
                      <h3 className="text-2xl font-bold text-stone-900 serif">
                        {t(item.role)}
                      </h3>
                    </div>
                    
                    <div className="md:ml-[152px]">
                      <p className="text-lg font-medium text-stone-800 mb-3 serif italic">
                        {t(item.organization)}
                      </p>
                      <p className="text-stone-600 font-light leading-relaxed max-w-2xl">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Sub-section */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-stone-400 font-bold mb-10 border-t border-stone-200 pt-10">{t(UI_TEXT.academicBack)}</h4>
              <div className="space-y-12">
                {EDUCATION.map((item, index) => (
                  <div key={index} className="group relative pl-0 md:pl-8 border-l-0 md:border-l border-stone-100">
                    <div className="hidden md:block absolute left-[-4px] top-1.5 w-[7px] h-[7px] bg-stone-300 rounded-full group-hover:bg-stone-900 transition-colors"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                      <span className="text-sm font-semibold tracking-widest text-stone-400 uppercase serif min-w-[120px]">
                        {t(item.year)}
                      </span>
                      <h3 className="text-xl font-bold text-stone-900 serif">
                        {t(item.degree)}
                      </h3>
                    </div>
                    
                    <div className="md:ml-[152px]">
                      <p className="text-md font-medium text-stone-700 serif italic">
                        {t(item.institution)}
                      </p>
                      {item.honors && (
                        <p className="text-stone-500 text-sm font-light mt-1 uppercase tracking-wide">
                          {t(item.honors)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
