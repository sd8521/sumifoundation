import React, { useState } from 'react';
import { 
  X, 
  Users, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { ISO_DETAILS } from '../data/ngoData';

interface VolunteerCareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerCareerModal: React.FC<VolunteerCareerModalProps> = ({ isOpen, onClose }) => {
  const [roleType, setRoleType] = useState<'volunteer' | 'job_seeker' | 'doctor'>('volunteer');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('South Dinajpur');
  const [skills, setSkills] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Join Sumi Care Foundation
              </h3>
              <p className="text-xs text-slate-400">Volunteer Opportunities & Job Placements (Mandated Scope)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <div className="space-y-5">
              
              {/* Type Switcher */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRoleType('volunteer')}
                  className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                    roleType === 'volunteer'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <HeartHandshake className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                  <span className="text-xs block">Youth Volunteer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRoleType('job_seeker')}
                  className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                    roleType === 'job_seeker'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Briefcase className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                  <span className="text-xs block">Job Candidate</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRoleType('doctor')}
                  className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                    roleType === 'doctor'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <GraduationCap className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                  <span className="text-xs block">Doctor / Educator</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Subhajit Das"
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9832104511"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. subhajit@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      District & Block
                    </label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="e.g. Tapan, South Dinajpur"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Skills / Area of Interest / Background
                  </label>
                  <textarea
                    rows={3}
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder={
                      roleType === 'volunteer'
                        ? 'e.g. Health camp management, distribution drives, youth sports coaching'
                        : roleType === 'job_seeker'
                        ? 'e.g. Tailoring, Computer data entry, Electrician, Field assistant'
                        : 'e.g. MBBS General Physician, Nursing, High School Teacher (Math/Science)'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application to Head Office</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-150">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-heading font-extrabold text-2xl text-slate-900">
                Application Received!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Your details have been logged in our HR & Volunteer registry. Our Tapan office coordinator will reach out to you via WhatsApp at <strong>{phone}</strong>.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-700 max-w-sm mx-auto border border-slate-200 text-left space-y-1">
                <div><strong>Reg ID:</strong> SCF-HR-2026-{Math.floor(1000 + Math.random() * 9000)}</div>
                <div><strong>Category:</strong> {roleType.toUpperCase()}</div>
                <div><strong>Status:</strong> Under Review by Trustee Committee</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
