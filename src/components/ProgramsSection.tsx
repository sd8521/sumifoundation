import React, { useState } from 'react';
import { 
  Activity, 
  CreditCard, 
  Droplet, 
  Sun, 
  Sparkles, 
  GraduationCap, 
  Users, 
  Heart, 
  Plane, 
  Handshake, 
  Check, 
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { NGO_PROGRAMS } from '../data/ngoData';
import { ProgramItem } from '../types';

interface ProgramsSectionProps {
  onSelectProgramAction: (programId: string) => void;
  onOpenDonate: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramAction,
  onOpenDonate
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const categories = [
    { id: 'all', label: 'All 10 Scope Areas' },
    { id: 'healthcare', label: 'Healthcare & Medical Camps' },
    { id: 'environment', label: 'Clean Water & Solar Power' },
    { id: 'empowerment', label: 'Women, Men & Job Livelihood' },
    { id: 'education', label: 'Education & Sports' },
    { id: 'elderly', label: 'Old-Age Home' },
    { id: 'special', label: 'Medical Tourism & Govt Desk' },
  ];

  const filteredPrograms = activeCategory === 'all'
    ? NGO_PROGRAMS
    : NGO_PROGRAMS.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'healthcare': return <Activity className="w-4 h-4 text-emerald-600" />;
      case 'environment': return <Sun className="w-4 h-4 text-amber-600" />;
      case 'empowerment': return <Sparkles className="w-4 h-4 text-pink-600" />;
      case 'education': return <GraduationCap className="w-4 h-4 text-indigo-600" />;
      case 'elderly': return <Heart className="w-4 h-4 text-rose-600" />;
      default: return <Handshake className="w-4 h-4 text-teal-600" />;
    }
  };

  return (
    <section id="programs" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Elementor Title Style) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <span>Official Certified Services & Mandates</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Our Core Initiatives & Scope
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            As authorized under our ISO 9001:2015 registration, Sumi Care Foundation operates comprehensive humanitarian programs to empower all sections of society.
          </p>
        </div>

        {/* Filter Tabs (Elementor Filter Widget Style) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid (Elementor 3-Column Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center space-x-1.5 shadow-sm">
                  {getCategoryIcon(prog.category)}
                  <span>{prog.badge}</span>
                </div>

                {/* Metrics pill at bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold bg-slate-900/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/20">
                  {prog.metrics}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                    {prog.summary}
                  </p>
                </div>

                {/* Key Bullet points */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {prog.keyHighlights.slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex items-center justify-between gap-2 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center space-x-1 cursor-pointer py-1.5"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectProgramAction(prog.id)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs transition flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>{prog.callToAction}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for All Services */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 to-teal-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Spectrum Humanitarian Mandate</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Need Assistance or Want to Sponsor a Village Initiative?
            </h3>
            <p className="text-emerald-100 text-sm max-w-xl">
              From distributing sanitary napkins to funding a deep clean water tube well, every donation directly impacts families in South Dinajpur.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDonate}
              className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition cursor-pointer"
            >
              Donate for a Cause
            </button>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3 rounded-xl border border-white/20 transition text-center"
            >
              Contact Head Office
            </a>
          </div>
        </div>

      </div>

      {/* Program Detailed View Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200">
            <div className="relative h-60">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold bg-emerald-600 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedProgram.badge}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">
                  Detailed Scope & Impact
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed mt-2">
                  {selectedProgram.description}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                  Key Deliverables & Specifications:
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedProgram.keyHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <div className="text-xs text-slate-500 font-semibold">
                  {selectedProgram.metrics}
                </div>
                <button
                  onClick={() => {
                    const id = selectedProgram.id;
                    setSelectedProgram(null);
                    onSelectProgramAction(id);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition"
                >
                  {selectedProgram.callToAction}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
