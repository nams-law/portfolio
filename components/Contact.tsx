
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { UI_TEXT } from '../constants';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-stone-900 text-white p-8 md:p-16 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">{t(UI_TEXT.contactTitle)}</h2>
            <p className="text-stone-400 mb-12 font-light leading-relaxed">
              {t(UI_TEXT.contactSub)}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-stone-300">
                <Mail className="w-5 h-5 text-stone-500" />
                <span className="font-light">office@namratakhadka.com</span>
              </div>
              <div className="flex items-center gap-4 text-stone-300">
                <Phone className="w-5 h-5 text-stone-500" />
                <span className="font-light">+977 (01) 455-6789</span>
              </div>
              <div className="flex items-center gap-4 text-stone-300">
                <MapPin className="w-5 h-5 text-stone-500" />
                <span className="font-light">{t(UI_TEXT.address)}</span>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white text-stone-900 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">{t(UI_TEXT.formName)}</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  required
                  className="w-full border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors font-light"
                  placeholder={t({ en: "e.g., Namrata Khadka", ne: "उदा. नाम्रता खड्का" })}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">{t(UI_TEXT.formEmail)}</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  required
                  className="w-full border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors font-light"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">{t(UI_TEXT.formMessage)}</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  required
                  className="w-full border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors font-light resize-none"
                  placeholder={t({ en: "Describe your requirements...", ne: "आफ्नो जिज्ञासा यहाँ लेख्नुहोस्..." })}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-stone-900 text-white py-4 font-medium flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors group"
              >
                {isSent ? t(UI_TEXT.formSent) : t(UI_TEXT.formSubmit)}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
