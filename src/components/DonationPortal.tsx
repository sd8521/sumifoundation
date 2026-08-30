import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle, 
  Download, 
  Printer, 
  Sparkles, 
  Lock, 
  CreditCard, 
  QrCode, 
  Award, 
  User, 
  Mail, 
  Phone,
  FileCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ISO_DETAILS } from '../data/ngoData';
import { DonationRecord } from '../types';

interface DonationPortalProps {
  initialCause?: string;
}

const CAUSES = [
  { id: 'napkin', name: 'Free Sanitary Napkins & Menstrual Hygiene', preset: 500, desc: 'Supplies 10 adolescent girls with monthly hygiene packs' },
  { id: 'education', name: 'Child Education & Sports Gear', preset: 1500, desc: 'Provides books, school uniform, bag & sports coaching' },
  { id: 'health-camp', name: 'Free Medical Camps & Vital Medicines', preset: 3500, desc: 'Funds doctor diagnostic kits & medicines for 25 rural patients' },
  { id: 'solar', name: 'Solar Lamp & Green Rural Lighting', preset: 7500, desc: 'Installs solar street lamp or student study lighting' },
  { id: 'water', name: 'Clean Drinking Water Filtration Station', preset: 15000, desc: 'Installs community deep tube-well & arsenic filter' },
  { id: 'elderly', name: 'Old-Age Home Geriatric Care', preset: 25000, desc: 'Full month nutritional food, nursing & shelter for 2 destitute elders' },
];

export const DonationPortal: React.FC<DonationPortalProps> = ({ initialCause }) => {
  const [selectedCause, setSelectedCause] = useState(initialCause || CAUSES[0].id);
  const [customAmount, setCustomAmount] = useState<number>(1500);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [paymentMode, setPaymentMode] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [completedDonation, setCompletedDonation] = useState<DonationRecord | null>(null);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorEmail.trim()) return;

    const chosenCauseObj = CAUSES.find(c => c.id === selectedCause);
    const receiptId = `SCF-80G-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    const record: DonationRecord = {
      id: receiptId,
      donorName,
      donorEmail,
      donorPhone: donorPhone || '+91 9876543210',
      panNumber: panNumber.toUpperCase() || 'NOT_PROVIDED',
      amount: customAmount,
      cause: chosenCauseObj?.name || 'General Humanitarian Mission',
      paymentMethod: paymentMode.toUpperCase(),
      date: dateStr,
      receiptNumber: receiptId,
      is80GClaimed: !!panNumber
    };

    setCompletedDonation(record);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <section id="donate-portal" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span>Transparent 80G Tax-Exempt Giving</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Support Our Grassroots Mission
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Every rupee directly funds free medicine, sanitary pads, clean water units, solar power, and elderly food in South Dinajpur. 100% audited under ISO 9001:2015 standards.
          </p>
        </div>

        {!completedDonation ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            
            {/* Left: Select Cause & Amount (7 cols) */}
            <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl space-y-6">
              <div>
                <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                  1. Choose an Initiative to Support:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAUSES.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setSelectedCause(c.id);
                        setCustomAmount(c.preset);
                      }}
                      className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                        selectedCause === c.id
                          ? 'border-emerald-400 bg-emerald-950/60 ring-2 ring-emerald-500/30'
                          : 'border-slate-700 hover:border-slate-600 bg-slate-900/60'
                      }`}
                    >
                      <div className="font-bold text-xs text-white">{c.name}</div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{c.desc}</div>
                      <div className="mt-2 text-xs font-black text-emerald-400">₹{c.preset.toLocaleString('en-IN')}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  2. Select or Enter Contribution Amount (INR):
                </label>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[500, 1500, 5000, 15000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setCustomAmount(amt)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        customAmount === amt
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    min="100"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono font-bold text-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="Enter custom amount"
                  />
                </div>
              </div>

              {/* Donor Details Form */}
              <form onSubmit={handleDonateSubmit} className="space-y-4 pt-4 border-t border-slate-700">
                <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  3. Donor & 80G Tax Exemption Details:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Donor Name / Organization *</label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Email (for Instant Receipt) *</label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="e.g. rajesh@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="e.g. 9832104511"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">PAN Number (Optional for 80G Tax Benefit)</label>
                    <input
                      type="text"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                      placeholder="e.g. ABCDE1234F"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white uppercase focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Payment method selector */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Payment Method Simulation</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMode('upi')}
                      className={`py-2 rounded-lg text-xs font-bold transition ${
                        paymentMode === 'upi' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      UPI / QR Code
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMode('card')}
                      className={`py-2 rounded-lg text-xs font-bold transition ${
                        paymentMode === 'card' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      Debit / Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMode('netbanking')}
                      className={`py-2 rounded-lg text-xs font-bold transition ${
                        paymentMode === 'netbanking' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      Net Banking
                    </button>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base rounded-2xl shadow-xl shadow-emerald-500/20 transition cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5 fill-slate-950" />
                    <span>Complete Donation of ₹{customAmount.toLocaleString('en-IN')}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Bank Details & Trust (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Bank Transfer Box */}
              <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-xl space-y-4">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Direct Bank Account Details</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Account Name:</span>
                    <span className="text-white font-bold">SUMI CARE FOUNDATION</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Bank:</span>
                    <span className="text-emerald-300">State Bank of India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Branch:</span>
                    <span className="text-white">Tapan Branch, South Dinajpur</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Account No:</span>
                    <span className="text-amber-300 font-bold">41289056231</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">IFSC Code:</span>
                    <span className="text-amber-300 font-bold">SBIN0005481</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <p>✓ ISO 9001:2015 audited governance and accounting.</p>
                  <p>✓ All donations are eligible for 80G tax deductions.</p>
                  <p>✓ Annual financial statement publicly audited and published.</p>
                </div>
              </div>

              {/* Quick Trust Seals */}
              <div className="bg-emerald-950/60 rounded-3xl p-6 border border-emerald-600/40 text-xs text-emerald-200 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-300 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>100% Utilization Guarantee</span>
                </div>
                <p>
                  Sumi Care Foundation maintains a zero-waste policy. Direct contributions reach the ground in Daralhat, Tapan, and South Dinajpur for genuine medicines, sanitary pads, clean water kits, and senior food supplies.
                </p>
              </div>
            </div>

          </div>
        ) : (
          /* DIGITAL 80G RECEIPT GENERATOR */
          <div className="max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-200">
            <div className="text-center no-print">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-2xl text-white">
                Thank You for Your Generous Support!
              </h3>
              <p className="text-slate-300 text-xs mt-1">
                Your donation receipt has been generated. You can print or download this for tax purposes.
              </p>
            </div>

            {/* Printable Receipt Card */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border-4 border-emerald-600 relative overflow-hidden print:border-none print:shadow-none">
              
              {/* Receipt Watermark */}
              <div className="absolute right-4 bottom-4 text-slate-100 font-black text-7xl select-none pointer-events-none opacity-40">
                80G
              </div>

              {/* Receipt Header */}
              <div className="flex justify-between items-start border-b-2 border-slate-200 pb-4">
                <div>
                  <h4 className="font-heading font-black text-2xl text-emerald-900 tracking-tight">
                    SUMI CARE FOUNDATION
                  </h4>
                  <p className="text-[11px] text-slate-600 font-medium max-w-sm mt-0.5">
                    {ISO_DETAILS.registeredAddress}
                  </p>
                  <div className="text-[10px] text-emerald-700 font-bold uppercase mt-1">
                    ISO 9001:2015 Reg No: {ISO_DETAILS.certificateNumber}
                  </div>
                </div>

                <div className="text-right">
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-black px-3 py-1 rounded-full uppercase">
                    Donation Receipt
                  </span>
                  <div className="text-[11px] font-mono text-slate-500 mt-2">
                    No: <strong>{completedDonation.receiptNumber}</strong>
                  </div>
                  <div className="text-[11px] text-slate-500">Date: {completedDonation.date}</div>
                </div>
              </div>

              {/* Receipt Details Table */}
              <div className="py-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Received with thanks from:</span>
                    <strong className="text-base text-slate-900 block font-heading">{completedDonation.donorName}</strong>
                    <span className="text-slate-600">{completedDonation.donorEmail}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 block">PAN Number (for 80G Benefit):</span>
                    <strong className="text-sm font-mono text-slate-900 block">{completedDonation.panNumber}</strong>
                    <span className="text-slate-600">Payment: {completedDonation.paymentMethod}</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-500 block">Allocated Purpose / Cause:</span>
                      <strong className="text-sm text-slate-900">{completedDonation.cause}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Donation Amount:</span>
                      <strong className="text-2xl font-black text-emerald-800 font-heading">
                        ₹{completedDonation.amount.toLocaleString('en-IN')}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Receipt Footer */}
              <div className="flex justify-between items-end border-t border-slate-200 pt-4">
                <div className="text-[10px] text-slate-500 max-w-xs">
                  Donations are exempt under Section 80G of the Income Tax Act. Issued electronically under ISO 9001:2015 QMS protocols.
                </div>

                <div className="text-center">
                  <div className="font-serif-luxury italic text-lg font-bold text-slate-800">Daiwik</div>
                  <div className="text-[9px] text-slate-500 uppercase font-bold">Authorized Trustee / Signatory</div>
                  <div className="text-[8px] text-emerald-700 font-semibold">Sumi Care Foundation</div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 no-print">
              <button
                onClick={handlePrintReceipt}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs rounded-xl shadow transition flex items-center space-x-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Receipt</span>
              </button>

              <button
                onClick={() => setCompletedDonation(null)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition cursor-pointer"
              >
                Make Another Donation
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
