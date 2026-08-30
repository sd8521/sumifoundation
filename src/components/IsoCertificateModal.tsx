import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  QrCode, 
  Calendar, 
  Building2, 
  Mail, 
  ExternalLink,
  Search,
  Sparkles
} from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

interface IsoCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IsoCertificateModal: React.FC<IsoCertificateModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'verify' | 'surveillance'>('certificate');
  const [verifySearch, setVerifySearch] = useState(ISO_DETAILS.certificateNumber);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<boolean | null>(true);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCheckValidity = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (verifySearch.trim().toUpperCase() === ISO_DETAILS.certificateNumber.toUpperCase()) {
        setVerificationResult(true);
      } else {
        setVerificationResult(false);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between no-print">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Official ISO 9001:2015 Certificate
              </h3>
              <p className="text-xs text-slate-400">Certificate No: {ISO_DETAILS.certificateNumber}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
              title="Print Certificate"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex items-center space-x-4 text-xs font-bold no-print">
          <button
            onClick={() => setActiveTab('certificate')}
            className={`py-2 px-3 rounded-lg transition ${
              activeTab === 'certificate' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Certificate Document
          </button>
          <button
            onClick={() => setActiveTab('surveillance')}
            className={`py-2 px-3 rounded-lg transition ${
              activeTab === 'surveillance' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Surveillance Timeline
          </button>
          <button
            onClick={() => setActiveTab('verify')}
            className={`py-2 px-3 rounded-lg transition ${
              activeTab === 'verify' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Live Validity Checker
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-slate-50">
          
          {activeTab === 'certificate' && (
            <div className="bg-white border-8 border-double border-amber-300 rounded-2xl p-6 sm:p-10 shadow-lg relative max-w-3xl mx-auto print:border-none print:shadow-none">
              
              {/* Certificate Side Badge */}
              <div className="absolute top-0 left-0 bg-sky-900 text-white text-[11px] font-black tracking-widest py-10 px-2.5 writing-vertical hidden sm:flex items-center justify-center rounded-br-lg shadow">
                CERTIFICATE
              </div>

              <div className="sm:pl-8 space-y-5">
                {/* Top QR & Title */}
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
                      CERTIFICATE
                    </h1>
                    <div className="font-serif-luxury italic text-base text-slate-600">Of Registration</div>
                  </div>

                  <div className="border-2 border-slate-900 p-2 rounded bg-white text-center">
                    <QrCode className="w-12 h-12 text-slate-900" />
                    <span className="text-[9px] font-mono font-bold block text-slate-600 mt-0.5">EU-02-D-4511</span>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="text-center pt-2">
                  <p className="text-xs text-slate-500 font-serif-luxury italic">This is to Certify that the</p>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-emerald-900 tracking-tight uppercase mt-1">
                    {ISO_DETAILS.organizationName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-xl mx-auto mt-1 leading-snug">
                    {ISO_DETAILS.registeredAddress}
                  </p>
                </div>

                {/* ISO Standard Highlight */}
                <div className="text-center bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-xs text-slate-500">Has been independently assessed and is compliant with the requirements of</p>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-wide mt-1">
                    ISO 9001:2015
                  </div>
                  <div className="text-sm font-semibold text-emerald-700">(Quality Management Systems)</div>
                </div>

                {/* Scope */}
                <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/80 text-xs text-slate-800 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                    This certificate is applicable to the following product or service ranges:
                  </span>
                  &ldquo;{ISO_DETAILS.scopeText}&rdquo;
                </div>

                {/* Audit Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-500 block">Certificate No:</span>
                    <strong className="text-emerald-800 font-mono text-sm">{ISO_DETAILS.certificateNumber}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date of Initial Registration:</span>
                    <strong className="text-slate-900 font-mono">{ISO_DETAILS.initialRegistrationDate}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">1st Surveillance audit on/before:</span>
                    <strong className="text-slate-800 font-mono">{ISO_DETAILS.firstSurveillanceDate}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">2nd Surveillance audit on/before:</span>
                    <strong className="text-slate-800 font-mono">{ISO_DETAILS.secondSurveillanceDate}</strong>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-slate-200">
                    <span className="text-slate-500">Date of Recertification: </span>
                    <strong className="text-slate-900 font-mono">{ISO_DETAILS.recertificationDate}</strong>
                  </div>
                </div>

                {/* Seals & Signatory */}
                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-200 gap-4">
                  {/* Visual Seals */}
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-full border-2 border-emerald-600 bg-emerald-50 flex flex-col items-center justify-center text-emerald-800 text-[9px] font-black text-center leading-tight shadow-sm">
                      <span>★ EU ★</span>
                      <span className="text-[10px]">CERT</span>
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-rose-600 bg-rose-50 flex flex-col items-center justify-center text-rose-800 text-[8px] font-black text-center leading-tight shadow-sm">
                      <span>CERTIFIED</span>
                      <span className="text-[9px]">ISO 9001</span>
                    </div>
                  </div>

                  {/* Signatory */}
                  <div className="text-right">
                    <div className="font-serif-luxury italic text-xl font-bold text-slate-900">Daiwik</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Authorised Signatory</div>
                  </div>
                </div>

                {/* Accreditation Footer */}
                <div className="text-[10px] text-slate-500 text-center border-t border-slate-200 pt-3 space-y-1">
                  <p className="font-bold text-slate-800">
                    Accredited by EU Certification Limited
                  </p>
                  <p>{ISO_DETAILS.accreditationAddress}</p>
                  <p>To check validity: {ISO_DETAILS.verificationUrl} | Email: {ISO_DETAILS.verificationEmail} | Company No: {ISO_DETAILS.companyNumber}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'surveillance' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  ISO 9001:2015 Surveillance Audit Schedule
                </h4>
                <p className="text-xs text-slate-600 mb-6">
                  In compliance with EU Certification standards, Sumi Care Foundation undergoes strict periodic quality audits to ensure complete integrity across all healthcare, clean water, solar, and education initiatives.
                </p>

                <div className="relative pl-6 space-y-6 border-l-2 border-emerald-500">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                    <div className="text-xs font-bold text-emerald-700">05-02-2026</div>
                    <div className="font-bold text-slate-900 text-sm">Initial ISO 9001:2015 Registration</div>
                    <p className="text-xs text-slate-600 mt-1">Successfully cleared comprehensive quality management audit and accreditation under EU Certification Limited.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100" />
                    <div className="text-xs font-bold text-amber-700">04-02-2027 (Scheduled)</div>
                    <div className="font-bold text-slate-900 text-sm">1st Annual Surveillance Audit</div>
                    <p className="text-xs text-slate-600 mt-1">On-site verification of medical camp hygiene, drinking water filtration quality logs, and cardholder registries.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100" />
                    <div className="text-xs font-bold text-slate-600">04-02-2028 (Scheduled)</div>
                    <div className="font-bold text-slate-900 text-sm">2nd Annual Surveillance Audit</div>
                    <p className="text-xs text-slate-600 mt-1">Assessment of solar grid deployments, old age home facilities, and youth vocational training metrics.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100" />
                    <div className="text-xs font-bold text-slate-600">04-02-2029</div>
                    <div className="font-bold text-slate-900 text-sm">Recertification Cycle</div>
                    <p className="text-xs text-slate-600 mt-1">Comprehensive 3-year standard recertification audit.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'verify' && (
            <div className="max-w-xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900">
                  Verify Accreditation Online
                </h4>
                <p className="text-xs text-slate-600 mt-1 mb-4">
                  Enter certificate number to check official registration validity under EU Certification Limited.
                </p>

                <form onSubmit={handleCheckValidity} className="flex gap-2 max-w-md mx-auto">
                  <input
                    type="text"
                    value={verifySearch}
                    onChange={(e) => setVerifySearch(e.target.value)}
                    placeholder="Enter Certificate No. (e.g. EU-02-D-4511)"
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono font-bold"
                  />
                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition disabled:opacity-50"
                  >
                    {isVerifying ? 'Checking...' : 'Verify'}
                  </button>
                </form>

                {verificationResult === true && (
                  <div className="mt-6 p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-left animate-in fade-in duration-150">
                    <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>Valid & Active ISO 9001:2015 Certificate</span>
                    </div>
                    <div className="mt-2 text-xs text-slate-700 space-y-1">
                      <div><strong>Entity:</strong> SUMI CARE FOUNDATION</div>
                      <div><strong>Certificate No:</strong> {ISO_DETAILS.certificateNumber}</div>
                      <div><strong>Status:</strong> Active / In Good Standing</div>
                      <div><strong>Accreditor:</strong> EU Certification Limited, London, UK</div>
                      <div><strong>Location:</strong> South Dinajpur, West Bengal, India</div>
                    </div>
                  </div>
                )}

                {verificationResult === false && (
                  <div className="mt-6 p-4 bg-rose-50 border border-rose-300 rounded-xl text-left">
                    <div className="text-rose-800 font-bold text-sm">
                      Certificate Not Found or Invalid
                    </div>
                    <p className="text-xs text-rose-600 mt-1">
                      Please ensure you typed the exact certificate code &apos;{ISO_DETAILS.certificateNumber}&apos;.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="text-xs text-slate-500">
            For official inquiries: <span className="font-semibold text-slate-700">{ISO_DETAILS.verificationEmail}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 shadow-xs transition flex items-center space-x-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Certificate</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
