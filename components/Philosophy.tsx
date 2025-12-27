
import React from 'react';
import { Target, Zap, Heart } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const values = [
    {
      title: "Precision",
      description: "In law, every comma matters. I provide meticulous attention to detail so you never have to worry about the fine print.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Agility",
      description: "Modern business moves fast. My practice is designed to respond at the speed of your innovation, without the layers of bureaucracy.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Integrity",
      description: "A lawyer is first and foremost a trusted confidant. Absolute discretion and ethical excellence are my non-negotiables.",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-stone-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">The Modern Counsel Philosophy</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Traditional legal services are often slow and disconnected from the realities of modern business. I’ve reimagined legal support to be a catalyst for growth, not a bottleneck.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-stone-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="text-stone-900 mb-6">{v.icon}</div>
                <h3 className="text-lg font-bold mb-4 serif">{v.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed font-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
