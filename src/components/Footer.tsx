import React, { useState } from 'react';
import { 
  HeartHandshake, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Heart, 
  CreditCard, 
  Send,
  ExternalLink,
  ChevronRight,
  Globe,
  Clock
} from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

interface FooterProps {
  onOpenCertificate: () => void;
  onOpenDonate: () => void;
  onOpenHealthCard: () => void;
  onOpenVolunteer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCertificate,
  onOpenDonate,
  onOpenHealthCard,
  onOpenVolunteer
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & ISO Credential (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  SUMI CARE FOUNDATION
                </span>
                <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                  ISO 9001:2015 CERTIFIED NGO
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering grassroots communities across South Dinajpur & West Bengal through free health checkup camps, health discount cards, clean drinking water, solar power, women hygiene drives, and old-age shelter.
            </p>

            {/* Official ISO Box in Footer */}
            <div 
              onClick={onOpenCertificate}
              className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-3.5 space-y-1.5 cursor-pointer hover:border-emerald-400 transition"
            >
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Certificate No: {ISO_DETAILS.certificateNumber}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Accredited by <strong>EU Certification Limited</strong> (London, UK • Co. No. 15665772)
              </p>
              <div className="text-[10px] text-amber-300 font-semibold underline underline-offset-2">
                Click to verify certificate document & audits →
              </div>
            </div>
          </div>

          {/* Col 2: Core Programs Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Mandated Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Free Health Checkup Camps</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenHealthCard} className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Health Discount Card Program</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Clean Drinking Water Plants</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Solar Panel Electrification</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Sanitary Napkin Hygiene</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Old-Age Home & Elderly Care</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenVolunteer} className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Job Placements & Vocational Labs</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Registered Address (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Registered Office
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>SUMI CARE FOUNDATION</strong>
                  <br />
                  Vill: Jaminishinta Hathko, PO: Daralhat,
                  <br />
                  PS: Tapan, Dist: South Dinajpur,
                  <br />
                  West Bengal - 733127, India
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98321 04511 / +91 94740 12389</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@sumicarefoundation.org</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Office: Mon - Sat (09:00 AM - 06:00 PM)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Action Buttons (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Get Involved
            </h4>

            <div className="space-y-2">
              <button
                onClick={onOpenDonate}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate (80G)</span>
              </button>

              <button
                onClick={onOpenHealthCard}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                <span>Health Card</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Volunteer / Jobs</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright & Accreditation Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} <strong>Sumi Care Foundation</strong>. All Rights Reserved. ISO 9001:2015 Registration No. {ISO_DETAILS.certificateNumber}.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span>London Accreditation: EU Certification Ltd (SW81AD)</span>
            <span>•</span>
            <button onClick={onOpenCertificate} className="hover:text-emerald-400 underline">
              View ISO Certificate
            </button>
            <span>•</span>
            <button onClick={onOpenHealthCard} className="hover:text-emerald-400 underline">
              Health Card Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
