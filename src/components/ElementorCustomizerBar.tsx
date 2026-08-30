import React, { useState } from 'react';
import { 
  Palette, 
  Layers, 
  Globe, 
  Sliders, 
  X, 
  ChevronUp, 
  Check,
  ShieldCheck,
  CreditCard,
  Heart,
  Calendar
} from 'lucide-react';

interface ElementorCustomizerBarProps {
  themePreset: 'emerald' | 'indigo' | 'warm';
  onChangeTheme: (theme: 'emerald' | 'indigo' | 'warm') => void;
  showElementorInspect: boolean;
  onToggleElementorInspect: () => void;
  language: 'en' | 'bn' | 'hi';
  onChangeLanguage: (lang: 'en' | 'bn' | 'hi') => void;
  onOpenCertificate: () => void;
  onOpenHealthCard: () => void;
  onOpenDonate: () => void;
}

export const ElementorCustomizerBar: React.FC<ElementorCustomizerBarProps> = ({
  themePreset,
  onChangeTheme,
  showElementorInspect,
  onToggleElementorInspect,
  language,
  onChangeLanguage,
  onOpenCertificate,
  onOpenHealthCard,
  onOpenDonate
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="WordPress & Elementor quick toolbar" className="fixed bottom-6 right-6 z-50 no-print">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white p-3.5 rounded-full shadow-2xl border-2 border-emerald-500/50 flex items-center space-x-2 group cursor-pointer hover:scale-105 transition-all duration-200"
          title="WordPress & Elementor Site Controls"
        >
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <Sliders className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-bold font-heading pr-1 hidden sm:inline">Elementor Controls</span>
        </button>
      ) : (
        <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-3xl p-5 shadow-2xl border border-slate-700 w-80 space-y-4 animate-in slide-in-from-bottom-6 duration-200">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
                W
              </div>
              <span className="font-heading font-bold text-sm text-white">Elementor NGO Controls</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Palette Switcher */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>Theme Style Palette:</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onChangeTheme('emerald')}
                className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 border transition ${
                  themePreset === 'emerald'
                    ? 'bg-emerald-950 border-emerald-400 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span>Emerald</span>
              </button>

              <button
                onClick={() => onChangeTheme('indigo')}
                className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 border transition ${
                  themePreset === 'indigo'
                    ? 'bg-indigo-950 border-indigo-400 text-indigo-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span>Royal</span>
              </button>

              <button
                onClick={() => onChangeTheme('warm')}
                className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 border transition ${
                  themePreset === 'warm'
                    ? 'bg-amber-950 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Warm</span>
              </button>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="space-y-1.5">
            <div className="text-xs text-slate-400 font-semibold">Language Interface:</div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onChangeLanguage('en')}
                className={`py-1.5 rounded-xl text-xs font-bold transition ${
                  language === 'en' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onChangeLanguage('bn')}
                className={`py-1.5 rounded-xl text-xs font-bold transition ${
                  language === 'bn' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                বাংলা (Bengali)
              </button>
              <button
                onClick={() => onChangeLanguage('hi')}
                className={`py-1.5 rounded-xl text-xs font-bold transition ${
                  language === 'hi' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                हिन्दी (Hindi)
              </button>
            </div>
          </div>

          {/* Elementor Inspect Mode Toggle */}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={onToggleElementorInspect}
              className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-between border transition ${
                showElementorInspect
                  ? 'bg-purple-950/80 border-purple-400 text-purple-200'
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Elementor Wireframe Mode</span>
              </div>
              <span className="text-[10px] uppercase font-mono">{showElementorInspect ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* Quick Hub Shortcuts */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <button
              onClick={() => { setIsOpen(false); onOpenCertificate(); }}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 text-[10px] font-bold rounded-lg text-center"
            >
              <ShieldCheck className="w-4 h-4 mx-auto mb-0.5" />
              <span>ISO Cert</span>
            </button>
            <button
              onClick={() => { setIsOpen(false); onOpenHealthCard(); }}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-teal-400 text-[10px] font-bold rounded-lg text-center"
            >
              <CreditCard className="w-4 h-4 mx-auto mb-0.5" />
              <span>Health Card</span>
            </button>
            <button
              onClick={() => { setIsOpen(false); onOpenDonate(); }}
              className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold rounded-lg text-center"
            >
              <Heart className="w-4 h-4 mx-auto mb-0.5 fill-white" />
              <span>Donate</span>
            </button>
          </div>

        </div>
      )}
    </aside>
  );
};
