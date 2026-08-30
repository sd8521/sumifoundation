import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  QrCode, 
  FileText,
  Calendar,
  Building,
  MapPin,
  Lock
} from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

interface IsoCertificateSectionProps {
  onOpenFullModal: () => void;
}

export const IsoCertificateSection: React.FC<IsoCertificateSectionProps> = ({ onOpenFullModal }) => {
  return (
    <section id="iso-certificate" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Accreditation & Verification</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            ISO 9001:2015 Quality Certified
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Sumi Care Foundation complies with international Quality Management Systems standards, audited and accredited by EU Certification Limited, London, UK.
          </p>
        </div>

        {/* Certificate Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Certificate Interactive Preview Card (Left 7 cols) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-amber-400/80 relative overflow-hidden group">
            {/* Side Ribbon */}
            <div className="absolute top-0 left-0 bg-gradient-to-b from-sky-900 to-sky-700 text-white text-[10px] font-black uppercase tracking-widest py-8 px-2 writing-vertical flex items-center justify-center shadow-md hidden sm:flex">
              CERTIFICATE
            </div>

            <div className="sm:pl-8 space-y-4">
              {/* Header inside Certificate */}
              <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                <div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    CERTIFICATE
                  </h3>
                  <div className="text-sm font-serif-luxury italic text-slate-600">Of Registration</div>
                </div>
                {/* QR Code Mockup */}
                <div className="border-2 border-slate-900 p-1.5 rounded bg-white text-center">
                  <QrCode className="w-10 h-10 text-slate-900" />
                  <span className="text-[9px] font-mono font-bold block text-slate-700">SCAN VERIFY</span>
                </div>
              </div>

              {/* Certified To */}
              <div className="text-center pt-2">
                <p className="text-xs text-slate-500 uppercase tracking-widest">This is to Certify that the</p>
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-emerald-800 tracking-tight mt-1">
                  SUMI CARE FOUNDATION
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 max-w-lg mx-auto font-medium">
                  {ISO_DETAILS.registeredAddress}
                </p>
              </div>

              {/* Standard */}
              <div className="bg-emerald-50 rounded-xl p-3.5 border border-emerald-200 text-center">
                <p className="text-xs text-slate-600">Has been independently assessed and is compliant with:</p>
                <div className="font-heading font-black text-lg sm:text-xl text-emerald-950 mt-0.5">
                  ISO 9001:2015
                </div>
                <div className="text-xs font-semibold text-emerald-700">(Quality Management Systems)</div>
              </div>

              {/* Scope Snippet */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px] text-slate-700 leading-relaxed max-h-24 overflow-y-auto">
                <strong className="text-slate-900">Certified Scope of Services: </strong>
                &ldquo;TO PROMOTE HEALTHCARE, EDUCATION, EXTRA-CURRICULAR, SPORTS, SOCIAL, URBAN & RURAL EMPOWERMENT, JOB PROVIDED, DRINKING WATER RESOURCES, SOLAR PANEL, NAPKIN PAD, HEALTH DISCOUNT CARD, FREE HEALTH CHECKUP CAMP, OLD-AGE HOME, MEDICAL TOURISM.&rdquo;
              </div>

              {/* Numbers & Dates */}
              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-100 p-3 rounded-lg border border-slate-200">
                <div>
                  <span className="text-slate-500 font-medium">Certificate No:</span>
                  <div className="font-mono font-bold text-slate-900 text-sm text-emerald-700">{ISO_DETAILS.certificateNumber}</div>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Initial Registration:</span>
                  <div className="font-mono font-bold text-slate-900">{ISO_DETAILS.initialRegistrationDate}</div>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">1st Surveillance:</span>
                  <div className="font-mono text-slate-700">{ISO_DETAILS.firstSurveillanceDate}</div>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Recertification:</span>
                  <div className="font-mono text-slate-700">{ISO_DETAILS.recertificationDate}</div>
                </div>
              </div>

              {/* Footer inside Certificate */}
              <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-200 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px] font-black border border-amber-400">
                    EU
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight">
                    <span className="font-bold text-slate-800">EU Certification Limited</span>
                    <br />London, England SW81AD
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-serif-luxury italic text-base text-slate-800 font-bold">Daiwik</div>
                  <div className="text-[9px] text-slate-500 font-semibold uppercase">Authorised Signatory</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={onOpenFullModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View High-Res Full Certificate & Audits</span>
                </button>

                <span className="text-[11px] text-slate-500">
                  Company No: {ISO_DETAILS.companyNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Verification Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 shadow-xl space-y-4">
              <h3 className="font-heading font-bold text-xl text-emerald-400 flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Why Our ISO 9001:2015 Matters</span>
              </h3>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Transparent Governance:</strong> Rigorous standard operating procedures for fund utilization and program deployment.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Quality Medical Protocols:</strong> All free health checkups, medicine distributions, and diagnostic tie-ups follow verified standards.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>CSR & Govt Alignment:</strong> Eligible and certified for Corporate Social Responsibility (CSR) partnerships & government schemes.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Annual Surveillance Audits:</strong> Continual assessment to guarantee measurable humanitarian outcomes.</span>
                </li>
              </ul>
            </div>

            {/* Quick Accreditation Card */}
            <div className="bg-emerald-950/60 border border-emerald-600/40 rounded-2xl p-5 text-xs text-emerald-200 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-emerald-300 text-sm">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>Accrediting Body Details</span>
              </div>
              <p>
                <strong>Accredited by:</strong> EU Certification Limited
                <br />
                <strong>Address:</strong> 15 Broadstone House Dorset Road London England SW81AD
                <br />
                <strong>Check Validity:</strong> <a href={`https://${ISO_DETAILS.verificationUrl}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{ISO_DETAILS.verificationUrl}</a>
                <br />
                <strong>Official Email:</strong> {ISO_DETAILS.verificationEmail}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
