import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Stethoscope, 
  CheckCircle2, 
  FileText, 
  Printer, 
  AlertCircle,
  Activity,
  Heart
} from 'lucide-react';
import { UPCOMING_HEALTH_CAMPS } from '../data/ngoData';
import { HealthCamp } from '../types';

export const FreeHealthCampScheduler: React.FC = () => {
  const [selectedCamp, setSelectedCamp] = useState<HealthCamp>(UPCOMING_HEALTH_CAMPS[0]);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientAge, setPatientAge] = useState('45');
  const [symptoms, setSymptoms] = useState('');
  const [bookedPass, setBookedPass] = useState<{
    token: string;
    camp: HealthCamp;
    name: string;
    phone: string;
    age: string;
  } | null>(null);

  const handleBookPass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) return;

    const tokenNum = `CAMP-${Math.floor(100 + Math.random() * 900)}`;
    setBookedPass({
      token: tokenNum,
      camp: selectedCamp,
      name: patientName,
      phone: patientPhone,
      age: patientAge
    });
  };

  return (
    <section id="health-camps" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span>Doorstep Rural Healthcare</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Free Health Checkup Camps Schedule
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Free doctor consultations, blood sugar & pressure diagnostics, eye screening, and free distribution of doctor-prescribed vital medications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Camp Schedule Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span>Upcoming Camp Locations in South Dinajpur</span>
            </h3>

            {UPCOMING_HEALTH_CAMPS.map((camp) => (
              <div
                key={camp.id}
                onClick={() => setSelectedCamp(camp)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedCamp.id === camp.id
                    ? 'border-emerald-600 bg-emerald-50/40 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      {camp.village}
                    </span>
                    <h4 className="font-heading font-bold text-xl text-slate-900 mt-2">
                      {camp.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {camp.slotsAvailable} Free Slots
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{camp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{camp.date} ({camp.time})</span>
                  </div>
                </div>

                {/* Specialists */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1">
                    <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Attending Specialists:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {camp.specialists.map((spec, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-800 font-medium px-2 py-0.5 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Free Services */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {camp.services.map((srv, i) => (
                    <span key={i} className="text-[10px] text-emerald-800 bg-emerald-100/60 font-semibold px-2 py-0.5 rounded flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{srv}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Registration & Instant Token (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800">
            {!bookedPass ? (
              <div className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    Free Online Slot Registration
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                    Book Free Camp Appointment
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Pre-register to skip the queue and secure doctor appointment pass.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs space-y-1">
                  <div className="text-slate-400">Selected Camp:</div>
                  <div className="font-bold text-white text-sm">{selectedCamp.title}</div>
                  <div className="text-emerald-400 font-medium">{selectedCamp.date} • {selectedCamp.location}</div>
                </div>

                <form onSubmit={handleBookPass} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Ramesh Chandra Roy"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="e.g. 9832104511"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Patient Age
                      </label>
                      <input
                        type="number"
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Primary Health Complaint / Reason for Visit
                    </label>
                    <input
                      type="text"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="e.g. High BP check, Eye blurriness, Joint pain"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Confirm Free Slot & Generate Token</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="space-y-4 animate-in zoom-in-95 duration-150">
                <div className="text-center pb-2 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-white">
                    Free Camp Pass Confirmed!
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Show this digital token at the registration counter on camp day.
                  </p>
                </div>

                <div className="bg-white text-slate-900 p-5 rounded-2xl border-2 border-amber-400 shadow-md space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Token Pass Number</div>
                      <div className="font-mono font-black text-xl text-emerald-800">{bookedPass.token}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 uppercase">Camp Date</div>
                      <div className="font-bold text-xs text-slate-900">{bookedPass.camp.date}</div>
                    </div>
                  </div>

                  <div className="text-xs space-y-1">
                    <div><strong>Patient:</strong> {bookedPass.name} ({bookedPass.age} Yrs)</div>
                    <div><strong>Phone:</strong> {bookedPass.phone}</div>
                    <div><strong>Venue:</strong> {bookedPass.camp.location}</div>
                    <div><strong>Timing:</strong> {bookedPass.camp.time}</div>
                  </div>

                  <div className="bg-emerald-50 p-2 rounded text-[10px] text-emerald-800 font-medium">
                    ✓ Includes Free Doctor Consultation & Basic Medications
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center space-x-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Token</span>
                  </button>
                  <button
                    onClick={() => setBookedPass(null)}
                    className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition"
                  >
                    Book Another
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
