import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  MapPin, 
  Award, 
  Users, 
  CheckCircle2,
  Heart,
  Droplet,
  Sun,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

interface AboutSectionProps {
  onOpenCertificate: () => void;
  onOpenDonate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCertificate, onOpenDonate }) => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage with ISO badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="Sumi Care Foundation Rural Bengal Empowerment"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Floating Address Tag */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="flex items-center space-x-1.5 text-emerald-400 font-bold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Headquarters & Operational Hub</span>
                </div>
                <p className="text-slate-200 text-[11px] leading-snug">
                  {ISO_DETAILS.registeredAddress}
                </p>
              </div>
            </div>

            {/* Floating ISO Badge Card */}
            <div 
              onClick={onOpenCertificate}
              className="absolute -top-6 -right-6 z-20 bg-emerald-800 text-white p-4 rounded-2xl shadow-xl border-2 border-amber-400 flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Accredited Standard</div>
                <div className="font-heading font-black text-sm">ISO 9001:2015</div>
                <div className="text-[10px] text-emerald-200">{ISO_DETAILS.certificateNumber}</div>
              </div>
            </div>

            {/* Back Pattern */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-100 rounded-3xl -z-10" />
          </div>

          {/* Right Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <span>About Sumi Care Foundation</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Rooted in South Dinajpur, Dedicated to Human Dignity
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              <strong>Sumi Care Foundation</strong> is an officially registered, ISO 9001:2015 certified non-profit organization headquartered in Daralhat, Tapan (South Dinajpur, West Bengal). We exist to bridge critical humanitarian gaps across healthcare, clean drinking water, renewable green energy, women empowerment, education, and senior citizen welfare.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-base">Our Mission</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  To provide accessible healthcare camps, subsidized health discount cards, clean drinking water, solar lighting, and dignified old-age care to underprivileged communities.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-base">Our Vision</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  A self-sustaining, healthy, and educated society where every rural family has access to modern healthcare, clean water, green power, and economic dignity.
                </p>
              </div>
            </div>

            {/* Key Pillars Checklist */}
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Multi-Sectoral Mandate:</strong> Licensed for health camps, sanitary napkin distribution, clean water, solar, and job skill labs.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Government & NGO Collaboration:</strong> Working synergistically with Block Development Offices, Panchayats, and CSR foundations.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Audited & Accredited:</strong> Quality systems monitored internationally by EU Certification Limited, London, UK.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenDonate}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition cursor-pointer flex items-center space-x-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Our Cause</span>
              </button>

              <button
                onClick={onOpenCertificate}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-5 py-3 rounded-xl border border-slate-200 transition cursor-pointer flex items-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>View ISO 9001:2015 Audit</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
