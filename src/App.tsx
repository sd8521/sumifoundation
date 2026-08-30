import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { AboutSection } from './components/AboutSection';
import { IsoCertificateSection } from './components/IsoCertificateSection';
import { IsoCertificateModal } from './components/IsoCertificateModal';
import { ProgramsSection } from './components/ProgramsSection';
import { HealthDiscountCardPortal } from './components/HealthDiscountCardPortal';
import { FreeHealthCampScheduler } from './components/FreeHealthCampScheduler';
import { DonationPortal } from './components/DonationPortal';
import { ImpactAndGallery } from './components/ImpactAndGallery';
import { GovtPartnershipSection } from './components/GovtPartnershipSection';
import { TestimonialsAndStories } from './components/TestimonialsAndStories';
import { VolunteerCareerModal } from './components/VolunteerCareerModal';
import { Footer } from './components/Footer';
import { ElementorCustomizerBar } from './components/ElementorCustomizerBar';
import { ISO_DETAILS } from './data/ngoData';

export default function App() {
  const [isIsoModalOpen, setIsIsoModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [themePreset, setThemePreset] = useState<'emerald' | 'indigo' | 'warm'>('emerald');
  const [showElementorInspect, setShowElementorInspect] = useState(false);
  const [language, setLanguage] = useState<'en' | 'bn' | 'hi'>('en');

  // Track active section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'programs', 'iso-certificate', 'health-camps', 'health-card-portal', 'donate-portal', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenCertificate = () => {
    setIsIsoModalOpen(true);
  };

  const handleOpenDonate = () => {
    const el = document.getElementById('donate-portal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenHealthCard = () => {
    const el = document.getElementById('health-card-portal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenCampSchedule = () => {
    const el = document.getElementById('health-camps');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProgramAction = (programId: string) => {
    if (programId === 'free-health-camps') {
      handleOpenCampSchedule();
    } else if (programId === 'health-discount-card') {
      handleOpenHealthCard();
    } else if (programId === 'man-women-empowerment-jobs') {
      setIsVolunteerModalOpen(true);
    } else {
      handleOpenDonate();
    }
  };

  // Theme-based class adjustments
  const getThemeClass = () => {
    switch (themePreset) {
      case 'indigo':
        return 'theme-indigo selection:bg-indigo-600';
      case 'warm':
        return 'theme-warm selection:bg-amber-600';
      default:
        return 'theme-emerald selection:bg-emerald-600';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-800 ${getThemeClass()} ${showElementorInspect ? 'elementor-inspect-mode' : ''}`}>
      
      {/* Elementor Inspect Mode Banner if active */}
      {showElementorInspect && (
        <div className="bg-purple-900 text-purple-200 text-xs py-1 px-4 text-center font-mono font-bold flex items-center justify-center space-x-2 border-b border-purple-700 sticky top-0 z-50">
          <span>⚙ ELEMENTOR PRO WIREFRAME MODE ACTIVE (All Section Widgets Outlined)</span>
          <button 
            onClick={() => setShowElementorInspect(false)}
            className="ml-2 text-white bg-purple-800 px-2 py-0.5 rounded text-[10px]"
          >
            Turn Off
          </button>
        </div>
      )}

      {/* Language Notification Banner if Bengali or Hindi selected */}
      {language === 'bn' && (
        <div className="bg-emerald-800 text-emerald-100 text-xs py-1.5 px-4 text-center font-medium">
          সুমি কেয়ার ফাউন্ডেশন (ISO 9001:2015 রেজিস্টার্ড এনজিও) - তপন, দক্ষিণ দিনাজপুর, পশ্চিমবঙ্গ। বিনামূল্যে স্বাস্থ্য শিবির ও হেলথ কার্ড।
        </div>
      )}

      {language === 'hi' && (
        <div className="bg-emerald-800 text-emerald-100 text-xs py-1.5 px-4 text-center font-medium">
          सुमी केयर फाउंडेशन (ISO 9001:2015 प्रमाणित एनजीओ) - तपन, दक्षिण दिनाजपुर, पश्चिम बंगाल। नि:शुल्क स्वास्थ्य शिविर व हेल्थ डिस्काउंट कार्ड।
        </div>
      )}

      {/* Top Bar with Registration & Contact */}
      <TopBar 
        onOpenCertificate={handleOpenCertificate}
        onOpenDonate={handleOpenDonate}
      />

      {/* Main Elementor Header Navigation */}
      <Navbar
        onOpenCertificate={handleOpenCertificate}
        onOpenDonate={handleOpenDonate}
        onOpenHealthCard={handleOpenHealthCard}
        onOpenCampRegister={handleOpenCampSchedule}
        onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Elementor Hero Banner Slider */}
        <HeroSlider
          onOpenCertificate={handleOpenCertificate}
          onOpenDonate={handleOpenDonate}
          onOpenHealthCard={handleOpenHealthCard}
          onOpenCampSchedule={handleOpenCampSchedule}
        />

        {/* 2. ISO 9001:2015 Certificate Highlight & Verification */}
        <IsoCertificateSection
          onOpenFullModal={handleOpenCertificate}
        />

        {/* 3. About Sumi Care Foundation */}
        <AboutSection
          onOpenCertificate={handleOpenCertificate}
          onOpenDonate={handleOpenDonate}
        />

        {/* 4. Full Scope of Certified Programs & Services */}
        <ProgramsSection
          onSelectProgramAction={handleSelectProgramAction}
          onOpenDonate={handleOpenDonate}
        />

        {/* 5. Flagship: Health Discount Card Application & Digital Card Generator */}
        <HealthDiscountCardPortal
          onOpenDonate={handleOpenDonate}
        />

        {/* 6. Free Health Checkup Camps Schedule & Appointment Booking */}
        <FreeHealthCampScheduler />

        {/* 7. Transparent 80G Tax-Exempt Donation & Receipt Portal */}
        <DonationPortal />

        {/* 8. Impact & Field Gallery */}
        <ImpactAndGallery />

        {/* 9. Government & NGO Collaboration Desk */}
        <GovtPartnershipSection />

        {/* 10. Beneficiary Testimonials & Grassroots Stories */}
        <TestimonialsAndStories />
      </main>

      {/* Comprehensive WordPress / Elementor Footer */}
      <Footer
        onOpenCertificate={handleOpenCertificate}
        onOpenDonate={handleOpenDonate}
        onOpenHealthCard={handleOpenHealthCard}
        onOpenVolunteer={() => setIsVolunteerModalOpen(true)}
      />

      {/* Modals */}
      <IsoCertificateModal
        isOpen={isIsoModalOpen}
        onClose={() => setIsIsoModalOpen(false)}
      />

      <VolunteerCareerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />

      {/* Floating Elementor Theme Customizer */}
      <ElementorCustomizerBar
        themePreset={themePreset}
        onChangeTheme={setThemePreset}
        showElementorInspect={showElementorInspect}
        onToggleElementorInspect={() => setShowElementorInspect(!showElementorInspect)}
        language={language}
        onChangeLanguage={setLanguage}
        onOpenCertificate={handleOpenCertificate}
        onOpenHealthCard={handleOpenHealthCard}
        onOpenDonate={handleOpenDonate}
      />
    </div>
  );
}
