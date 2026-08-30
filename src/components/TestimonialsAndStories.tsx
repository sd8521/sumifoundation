import React from 'react';
import { Quote, Star, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/ngoData';

export const TestimonialsAndStories: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span>Real Grassroots Change</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Voices from South Dinajpur
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Direct feedback from mothers, elderly residents, village leaders, and students whose lives have been transformed through Sumi Care Foundation programs.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800/90 rounded-3xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between relative group hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-emerald-950 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-600/40">
                    {t.impactArea}
                  </span>
                  <Quote className="w-8 h-8 text-emerald-500/30 group-hover:text-emerald-400 transition" />
                </div>

                <p className="text-slate-200 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-6 border-t border-slate-700/80 mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-white text-base leading-tight">
                    {t.name}
                  </h4>
                  <div className="text-xs text-emerald-400 font-medium">{t.role}</div>
                  <div className="flex items-center space-x-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
