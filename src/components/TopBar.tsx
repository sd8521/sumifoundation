import React from 'react';
import { Phone, Mail, MapPin, Award, Heart, ShieldCheck } from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

interface TopBarProps {
  onOpenCertificate: () => void;
  onOpenDonate: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCertificate, onOpenDonate }) => {
  return (
    <aside aria-label="Organization contact and certification bar" className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        {/* Left Side: Contact & Address */}
        <div className="flex items-center space-x-5 text-slate-300">
          <div className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate max-w-[280px]">Daralhat, Tapan, South Dinajpur - 733127 (WB)</span>
          </div>
          <div className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>+91 98321 04511 / 1800-202-CARE</span>
          </div>
          <div className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>contact@sumicarefoundation.org</span>
          </div>
        </div>

        {/* Right Side: ISO Badge & Quick CTAs */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenCertificate}
            className="flex items-center space-x-1.5 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 px-2.5 py-1 rounded border border-emerald-700/50 transition cursor-pointer"
            title="Click to view ISO 9001:2015 Certificate EU-02-D-4511"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">ISO 9001:2015</span>
            <span className="text-emerald-400/80">({ISO_DETAILS.certificateNumber})</span>
            <Award className="w-3 h-3 text-amber-400 ml-0.5" />
          </button>

          <button
            onClick={onOpenDonate}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-1 rounded shadow-sm flex items-center space-x-1.5 transition cursor-pointer"
          >
            <Heart className="w-3 h-3 fill-white" />
            <span>Donate Now</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
