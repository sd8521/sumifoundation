import React, { useState } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  Download, 
  Printer, 
  CheckCircle, 
  QrCode, 
  Heart, 
  MapPin, 
  Phone, 
  UserCheck, 
  Sparkles,
  Building2,
  Percent,
  Calendar,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ISO_DETAILS, NETWORK_HOSPITALS } from '../data/ngoData';
import { HealthCardApplication } from '../types';

interface HealthDiscountCardPortalProps {
  onOpenDonate: () => void;
}

export const HealthDiscountCardPortal: React.FC<HealthDiscountCardPortalProps> = ({ onOpenDonate }) => {
  const [formData, setFormData] = useState<HealthCardApplication>({
    fullName: '',
    gender: 'Female',
    age: 32,
    phone: '',
    village: 'Daralhat, Tapan',
    district: 'South Dinajpur',
    pinCode: '733127',
    familyMembersCount: 4,
    category: 'BPL'
  });

  const [generatedCard, setGeneratedCard] = useState<HealthCardApplication | null>(null);
  const [activeCardTab, setActiveCardTab] = useState<'apply' | 'card' | 'hospitals'>('apply');
  const [hospitalSearch, setHospitalSearch] = useState('');
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');

  const handleGenerateCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const cardId = `SCF-WB-2026-${randomNum}`;
    const issued = "05-FEB-2026";
    const expiry = "04-FEB-2029";

    const newCard: HealthCardApplication = {
      ...formData,
      cardNumber: cardId,
      issuedDate: issued,
      expiryDate: expiry,
      photoUrl: formData.gender === 'Female' 
        ? "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
        : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    };

    setGeneratedCard(newCard);
    setActiveCardTab('card');

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handlePrintCard = () => {
    window.print();
  };

  const filteredHospitals = NETWORK_HOSPITALS.filter(h => 
    h.name.toLowerCase().includes(hospitalSearch.toLowerCase()) ||
    h.location.toLowerCase().includes(hospitalSearch.toLowerCase())
  );

  return (
    <section id="health-card-portal" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>Subsidized Medical Access for Every Family</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Sumi Care Health Discount Card
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Get up to 50% discount on diagnostic scans, pathological blood tests, prescription medicines, and partner hospital consultations across Bengal.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center space-x-2 mb-10 no-print">
          <button
            onClick={() => setActiveCardTab('apply')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
              activeCardTab === 'apply'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            1. Apply Online / Instant Generate
          </button>

          {generatedCard && (
            <button
              onClick={() => setActiveCardTab('card')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer flex items-center space-x-1.5 ${
                activeCardTab === 'card'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>2. View Digital Card</span>
            </button>
          )}

          <button
            onClick={() => setActiveCardTab('hospitals')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
              activeCardTab === 'hospitals'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Network Hospitals & Discounts
          </button>
        </div>

        {/* Content Tabs */}
        {activeCardTab === 'apply' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-xl space-y-4">
                <h3 className="font-heading font-bold text-xl text-emerald-400 flex items-center space-x-2">
                  <Percent className="w-5 h-5 text-emerald-400" />
                  <span>Cardholder Benefits</span>
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>40% OFF</strong> on MRI, CT Scan, X-Ray & Ultrasound.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>30% to 50% OFF</strong> on all Pathology & Blood testing.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>15% to 25% OFF</strong> on Pharmacy prescription medicines.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Full Family Coverage:</strong> Covers head of family, spouse, children & elderly parents.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>ISO 9001:2015 Assured:</strong> Standardized quality checks across network providers.</span>
                  </li>
                </ul>
              </div>

              {/* Sample Card Mini Preview */}
              <div className="bg-gradient-to-r from-emerald-950 to-teal-900 rounded-2xl p-4 border border-emerald-500/30 text-xs text-emerald-200">
                <div className="flex items-center space-x-2 text-emerald-300 font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Free for BPL & Low-Income Families</span>
                </div>
                <p>
                  Funded through charitable donations and CSR grants so no deserving family in South Dinajpur is left behind.
                </p>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Beneficiary Enrollment Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill details to instantly generate your official Sumi Care Health Discount ID.
                </p>
              </div>

              <form onSubmit={handleGenerateCard} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name of Applicant *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Smt. Sumitra Roy"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98321 04511"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="110"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                    >
                      <option value="BPL">BPL / Ration</option>
                      <option value="Senior Citizen">Senior Citizen</option>
                      <option value="General Rural">General Rural</option>
                      <option value="Differently Abled">Differently Abled</option>
                      <option value="Student">Student / Youth</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Village / Post Office / Landmark *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.village}
                      onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                      placeholder="e.g. Hathko, Daralhat"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      District & PIN *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="e.g. South Dinajpur - 733127"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Number of Dependent Family Members to Cover: {formData.familyMembersCount}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={formData.familyMembersCount}
                    onChange={(e) => setFormData({ ...formData, familyMembersCount: Number(e.target.value) })}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold mt-1">
                    <span>1 (Self)</span>
                    <span>4 (Spouse + 2 Kids)</span>
                    <span>8 (Joint Family)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-700/30 transition duration-150 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Generate & Activate My Health Discount Card</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        )}

        {/* Digital Card Preview & Print Modal */}
        {activeCardTab === 'card' && generatedCard && (
          <div className="max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between no-print bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCardSide('front')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    cardSide === 'front' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Front Side
                </button>
                <button
                  onClick={() => setCardSide('back')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    cardSide === 'back' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Back Side
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintCard}
                  className="px-4 py-1.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-lg shadow transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Card</span>
                </button>
              </div>
            </div>

            {/* FRONT CARD */}
            {cardSide === 'front' && (
              <div className="bg-gradient-to-tr from-slate-950 via-emerald-950 to-teal-900 border-2 border-amber-400 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white overflow-hidden aspect-[1.6/1] flex flex-col justify-between">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-radial-at-tr from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-6 w-16 h-16 rounded-full border border-amber-400/30 flex items-center justify-center opacity-60">
                  <div className="w-10 h-10 rounded-full border border-amber-400/40" />
                </div>

                {/* Card Header */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-heading font-black text-lg sm:text-xl text-white tracking-wider">
                        SUMI CARE FOUNDATION
                      </span>
                    </div>
                    <div className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider flex items-center space-x-1 mt-0.5">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>ISO 9001:2015 CERTIFIED NGO (EU-02-D-4511)</span>
                    </div>
                  </div>

                  <div className="bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-2.5 py-1 rounded-md shadow">
                    HEALTH DISCOUNT CARD
                  </div>
                </div>

                {/* Card Center: Photo & Info */}
                <div className="relative z-10 flex items-center space-x-4 my-2">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl border-2 border-amber-400 overflow-hidden bg-slate-800 shrink-0 shadow-md">
                    <img
                      src={generatedCard.photoUrl}
                      alt={generatedCard.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Beneficiary Name</div>
                    <div className="font-heading font-extrabold text-base sm:text-xl text-white tracking-tight leading-tight">
                      {generatedCard.fullName}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                      <span>Age: <strong>{generatedCard.age}</strong></span>
                      <span>•</span>
                      <span>Gender: <strong>{generatedCard.gender}</strong></span>
                      <span>•</span>
                      <span className="bg-emerald-900/80 px-2 py-0.5 rounded text-[10px] text-emerald-200 border border-emerald-600/40">
                        {generatedCard.category}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Family Coverage: <strong>{generatedCard.familyMembersCount} Members</strong>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Number & Expiry */}
                <div className="relative z-10 flex justify-between items-end border-t border-emerald-800/80 pt-2">
                  <div>
                    <div className="text-[9px] text-slate-400 uppercase font-mono">Card Identification Number</div>
                    <div className="font-mono font-black text-sm sm:text-base text-amber-300 tracking-wider">
                      {generatedCard.cardNumber}
                    </div>
                    <div className="text-[9px] text-slate-400">
                      {generatedCard.village}, {generatedCard.district}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[9px] text-slate-400 uppercase">Valid Thru</div>
                    <div className="font-mono font-bold text-xs text-emerald-300">
                      {generatedCard.expiryDate}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BACK CARD */}
            {cardSide === 'back' && (
              <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white overflow-hidden aspect-[1.6/1] flex flex-col justify-between">
                <div>
                  <div className="bg-slate-950 h-8 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-4 border-b border-slate-800" />
                  <div className="space-y-2 text-[11px] text-slate-300">
                    <div className="font-bold text-emerald-400 uppercase text-xs">Terms & Hospital Authorization:</div>
                    <ul className="list-disc pl-4 space-y-0.5 text-[10px]">
                      <li>Present this card at network hospital OPD / billing counters before billing.</li>
                      <li>Applicable across 60+ partner hospitals, pathology labs, and pharmacy stores in West Bengal.</li>
                      <li>Non-transferable. Valid only with government photo ID proof.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-end border-t border-slate-800 pt-3">
                  <div className="text-[9px] text-slate-400">
                    <div className="font-bold text-white">Sumi Care Foundation Helpline:</div>
                    <div>+91 98321 04511 / 1800-202-CARE</div>
                    <div>Daralhat, Tapan, South Dinajpur - 733127</div>
                  </div>

                  <div className="text-center">
                    <QrCode className="w-12 h-12 text-white mx-auto" />
                    <span className="text-[8px] font-mono text-emerald-400">SCAN AT COUNTER</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="text-center pt-4 no-print">
              <button
                onClick={() => setActiveCardTab('hospitals')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4"
              >
                View list of 60+ Partner Hospitals & Diagnostic Centers →
              </button>
            </div>

          </div>
        )}

        {/* Network Hospitals Directory */}
        {activeCardTab === 'hospitals' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Empanelled Hospitals & Diagnostic Centers
                </h4>
                <p className="text-xs text-slate-400">
                  Present your Sumi Care Health Discount Card at any of these centers for instant tariff deductions.
                </p>
              </div>

              <input
                type="text"
                value={hospitalSearch}
                onChange={(e) => setHospitalSearch(e.target.value)}
                placeholder="Search hospital or city..."
                className="px-3.5 py-2 bg-slate-900 text-white rounded-xl border border-slate-700 text-xs w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHospitals.map((hosp, i) => (
                <div key={i} className="bg-slate-800/90 rounded-xl p-5 border border-slate-700/80 hover:border-emerald-500/50 transition">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h5 className="font-heading font-bold text-base text-white">{hosp.name}</h5>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{hosp.location}</span>
                      </div>
                    </div>
                    <span className="bg-emerald-950 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-600/40 shrink-0">
                      {hosp.discount}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setActiveCardTab('apply')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition"
              >
                Apply for Health Discount Card Now
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
