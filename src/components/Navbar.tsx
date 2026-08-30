import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Menu, 
  X, 
  ShieldCheck, 
  CreditCard, 
  Calendar, 
  Heart, 
  ChevronDown,
  Activity,
  Users,
  Sun,
  Droplet,
  GraduationCap,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  onOpenCertificate: () => void;
  onOpenDonate: () => void;
  onOpenHealthCard: () => void;
  onOpenCampRegister: () => void;
  onOpenVolunteer: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCertificate,
  onOpenDonate,
  onOpenHealthCard,
  onOpenCampRegister,
  onOpenVolunteer,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                  SUMI CARE
                </span>
                <span className="font-heading font-semibold text-xl sm:text-2xl text-emerald-600 tracking-tight leading-none">
                  FOUNDATION
                </span>
              </div>
              <div className="flex items-center space-x-1.5 mt-1">
                <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                  ISO 9001:2015 CERTIFIED NGO
                </span>
                <span className="text-[11px] text-slate-500 hidden lg:inline">Reg: West Bengal</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('hero')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeSection === 'hero' ? 'text-emerald-700 bg-emerald-50' : 'hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeSection === 'about' ? 'text-emerald-700 bg-emerald-50' : 'hover:text-emerald-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>Initiatives</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {programsDropdownOpen && (
                <div 
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <button
                    onClick={() => scrollToSection('programs')}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 text-left transition group cursor-pointer"
                  >
                    <div className="p-2 bg-emerald-100 rounded-md text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs">Free Health Camps</div>
                      <div className="text-[11px] text-slate-500">Medical checkups & mobile units</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { setProgramsDropdownOpen(false); onOpenHealthCard(); }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 text-left transition group cursor-pointer"
                  >
                    <div className="p-2 bg-teal-100 rounded-md text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs">Health Discount Card</div>
                      <div className="text-[11px] text-slate-500">20-50% savings on diagnostics</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('programs')}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 text-left transition group cursor-pointer"
                  >
                    <div className="p-2 bg-cyan-100 rounded-md text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition">
                      <Droplet className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs">Clean Drinking Water</div>
                      <div className="text-[11px] text-slate-500">Tube wells & filtration units</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('programs')}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 text-left transition group cursor-pointer"
                  >
                    <div className="p-2 bg-amber-100 rounded-md text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs">Solar Panel & Green Energy</div>
                      <div className="text-[11px] text-slate-500">Rural lighting & school power</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('programs')}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 text-left transition group cursor-pointer"
                  >
                    <div className="p-2 bg-pink-100 rounded-md text-pink-700 group-hover:bg-pink-600 group-hover:text-white transition">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs">Sanitary Napkin Pads</div>
                      <div className="text-[11px] text-slate-500">Menstrual hygiene & awareness</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('programs')}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 text-left transition group cursor-pointer"
                  >
                    <div className="p-2 bg-indigo-100 rounded-md text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs">Education & Sports</div>
                      <div className="text-[11px] text-slate-500">Coaching, books & tournaments</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('programs')}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 text-left transition group cursor-pointer"
                  >
                    <div className="p-2 bg-purple-100 rounded-md text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs">Empowerment & Jobs</div>
                      <div className="text-[11px] text-slate-500">Vocational training & placement</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onOpenCertificate}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-bold transition cursor-pointer border border-emerald-200"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ISO 9001:2015</span>
            </button>

            <button
              onClick={() => scrollToSection('health-camps')}
              className="px-3 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Health Camps
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className="px-3 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Gallery
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenHealthCard}
              className="hidden xl:inline-flex items-center space-x-1.5 text-slate-700 hover:text-emerald-700 font-bold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>Apply Health Card</span>
            </button>

            <button
              onClick={onOpenDonate}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition duration-150 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenDonate}
              className="bg-emerald-600 text-white p-2 rounded-lg text-xs font-bold flex items-center space-x-1"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">Donate</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenHealthCard(); }}
              className="flex items-center justify-center space-x-2 p-2.5 bg-emerald-50 rounded-xl text-emerald-800 font-bold text-xs border border-emerald-200 text-center"
            >
              <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Apply Health Card</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCertificate(); }}
              className="flex items-center justify-center space-x-2 p-2.5 bg-slate-900 rounded-xl text-white font-bold text-xs text-center"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO 9001 Cert</span>
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
            >
              About Sumi Care
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
            >
              All 10 Core Initiatives
            </button>
            <button
              onClick={() => scrollToSection('health-camps')}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
            >
              Health Checkup Camps
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
            >
              Field Impact Gallery
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenVolunteer(); }}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
            >
              Join as Volunteer / Job Careers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-left px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact & Head Office
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl shadow-md flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Donate to Foundation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
