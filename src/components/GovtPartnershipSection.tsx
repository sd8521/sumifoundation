import React, { useState } from 'react';
import { 
  Building2, 
  Handshake, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Send,
  Sparkles,
  Award,
  Globe
} from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

export const GovtPartnershipSection: React.FC = () => {
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [partnershipType, setPartnershipType] = useState('CSR Project Implementation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim() || !contactName.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="partnerships" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Handshake className="w-4 h-4 text-emerald-600" />
            <span>Public-Private Humanitarian Synergy</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Government & NGO Collaborations
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            As authorized in our certified scope of work, Sumi Care Foundation executes grassroots missions in partnership with Government bodies, Panchayats, and Corporate CSR wings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Collaboration Framework (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5">
              <h3 className="font-heading font-bold text-2xl text-slate-900">
                Institutional Partnership Pillars
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">District Administration & Panchayats</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Assisting Gram Panchayats with village water quality mapping, solar lighting, and public health campaigns.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Corporate CSR Turnkey Execution</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Complete ISO 9001:2015 audited CSR lifecycle: baseline surveys, deployment of solar/water plants, documentation, and impact reporting.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Inter-NGO & International Foundations</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Partnering with national and global NGOs on menstrual health drives, mobile clinics, and elderly palliative care.</p>
                  </div>
                </div>
              </div>

              {/* ISO Stamp */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-center space-x-3">
                <Award className="w-8 h-8 text-emerald-700 shrink-0" />
                <div className="text-xs text-emerald-900">
                  <span className="font-bold">ISO 9001:2015 Standard Quality Assurance:</span> All collaboration MoUs follow standardized procedural guidelines and auditable fund metrics.
                </div>
              </div>
            </div>
          </div>

          {/* Right: CSR & Partner MoU Request Form (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800">
            {!submitted ? (
              <div className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    Institutional Desk
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                    Request Collaboration / CSR Proposal
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Connect with our Trustee & Executive Board for joint developmental projects.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Organization / Department *
                      </label>
                      <input
                        type="text"
                        required
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="e.g. Tata Trusts / Panchayat Samiti"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Contact Person & Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Anita Roy (CSR Lead)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. csr@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9832104511"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Collaboration Type
                    </label>
                    <select
                      value={partnershipType}
                      onChange={(e) => setPartnershipType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="CSR Project Implementation">CSR Project Implementation (Solar/Water/Health)</option>
                      <option value="Government Scheme Execution">Government Scheme Execution</option>
                      <option value="Health Discount Card Network Hospital Tie-up">Hospital Network Tie-up</option>
                      <option value="School Napkin & Hygiene Program">School Napkin & Hygiene Program</option>
                      <option value="Youth Job Placement Collaboration">Youth Job Placement Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Scope / Location / Project Brief
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Brief details about proposed village or project scale..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Collaboration Request</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-150">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-extrabold text-2xl text-white">
                  MoU Request Received!
                </h4>
                <p className="text-slate-300 text-xs max-w-sm mx-auto">
                  Thank you, <strong>{contactName}</strong> from <strong>{orgName}</strong>. Our institutional partnership committee will review your proposal and share our formal NGO profile & audit reports.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
