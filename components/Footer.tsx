
import React from 'react';
import { UI_TEXT } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-stone-50 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="serif text-2xl font-bold text-stone-900 mb-6">{t(UI_TEXT.name)}</div>
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-loose">
            {t(UI_TEXT.disclaimer)}
          </p>
        </div>
        <div className="flex justify-center space-x-6 text-sm text-stone-500 font-light mb-8">
          <a href="#" className="hover:text-stone-900 transition-colors">{t({ en: 'Privacy Policy', ne: 'गोपनीयता नीति' })}</a>
          <a href="#" className="hover:text-stone-900 transition-colors">{t({ en: 'Terms of Service', ne: 'सेवाका सर्तहरू' })}</a>
          <a href="#" className="hover:text-stone-900 transition-colors">{t({ en: 'Bar Council Nepal', ne: 'नेपाल बार काउन्सिल' })}</a>
        </div>
        <p className="text-stone-400 text-xs font-light">
          &copy; {new Date().getFullYear()} {t(UI_TEXT.name)} | {t({ en: 'Legal Advisory', ne: 'कानुनी सल्लाहकार' })}.
        </p>
      </div>
    </footer>
  );
};
