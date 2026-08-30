import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  CreditCard, 
  ArrowRight, 
  Droplet, 
  Sun, 
  Sparkles, 
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Users
} from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

interface HeroSliderProps {
  onOpenCertificate: () => void;
  onOpenDonate: () => void;
  onOpenHealthCard: () => void;
  onOpenCampSchedule: () => void;
}

const SLIDES = [
  {
    tag: "ISO 9001:2015 QUALITY CERTIFIED NGO",
    headline: "Transforming Rural Lives Through Quality Healthcare, Clean Water & Energy",
    subheadline: "Dedicated to upliftment across West Bengal with free medical camps, health discount cards, solar power, safe drinking water, and women empowerment.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1920&q=85",
    primaryCta: "Apply for Health Card",
    primaryAction: "health-card",
    secondaryCta: "Support Our Mission",
    secondaryAction: "donate"
  },
  {
    tag: "WOMEN & YOUTH EMPOWERMENT",
    headline: "Dignity, Menstrual Hygiene & Vocational Livelihood",
    subheadline: "Distributing free sanitary napkins, providing tailoring training, computer literacy labs, and direct job opportunities for rural youth.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=85",
    primaryCta: "Explore Programs",
    primaryAction: "programs",
    secondaryCta: "Sponsor Hygiene Kits",
    secondaryAction: "donate"
  },
  {
    tag: "SUSTAINABLE COMMUNITY INFRASTRUCTURE",
    headline: "Clean Drinking Water & Solar Electrification in Tapan",
    subheadline: "Deep tube wells and solar power systems bringing health, safety, and sustainable illumination to off-grid villages.",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=85",
    primaryCta: "View Impact Gallery",
    primaryAction: "gallery",
    secondaryCta: "Donate for Clean Water",
    secondaryAction: "donate"
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenCertificate,
  onOpenDonate,
  onOpenHealthCard,
  onOpenCampSchedule
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  const handleAction = (action: string) => {
    if (action === 'health-card') onOpenHealthCard();
    else if (action === 'donate') onOpenDonate();
    else if (action === 'programs') {
      document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'gallery') {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
        <img
          src={slide.image}
          alt={slide.headline}
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/60" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex-1 flex items-center">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          
          {/* Certificate Credential Pill */}
          <div className="inline-flex flex-wrap items-center gap-2">
            <button
              onClick={onOpenCertificate}
              className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-md text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-400/40 text-xs sm:text-sm font-bold tracking-wide hover:bg-emerald-500/30 transition cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{slide.tag}</span>
              <span className="text-emerald-200">| No. {ISO_DETAILS.certificateNumber}</span>
              <Award className="w-3.5 h-3.5 text-amber-300 ml-1" />
            </button>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
            {slide.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl text-slate-300">
            {slide.subheadline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => handleAction(slide.primaryAction)}
              className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] transition cursor-pointer"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleAction(slide.secondaryAction)}
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/25 hover:border-white/40 transition cursor-pointer"
            >
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              <span>{slide.secondaryCta}</span>
            </button>

            <button
              onClick={onOpenCertificate}
              className="inline-flex items-center space-x-1.5 text-emerald-300 hover:text-white text-xs sm:text-sm font-semibold underline underline-offset-4 decoration-emerald-400/60 p-2 cursor-pointer"
            >
              <span>Verify ISO Certificate</span>
            </button>
          </div>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free Health Camps</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Drinking Water Plants</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Solar & Youth Jobs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats Ribbon Strip (Elementor Counter Widget style) */}
      <div className="relative z-20 bg-emerald-900/90 backdrop-blur-md border-t border-emerald-700/50 py-4 px-4 sm:px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800">
          <div className="p-2">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-300">38,000+</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium mt-0.5">Lives Impacted</div>
          </div>
          <div className="p-2">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-teal-300">120+</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium mt-0.5">Free Health Camps</div>
          </div>
          <div className="p-2">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-amber-300">15,400+</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium mt-0.5">Health Discount Cards</div>
          </div>
          <div className="p-2">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-cyan-300">85+</div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium mt-0.5">Water & Solar Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
