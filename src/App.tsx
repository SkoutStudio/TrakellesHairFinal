import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Education } from './components/Education';
import { Gallery } from './components/Gallery';
import { Locations } from './components/Locations';
import { Reviews } from './components/Reviews';
import { Social } from './components/Social';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { AppointmentModal } from './components/AppointmentModal';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('trakellesLang');
    return (saved === 'en' || saved === 'el') ? saved : 'el';
  });

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('trakellesLang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="app-container">
      <Navbar
        lang={lang}
        onSelectLang={handleSelectLang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main>
        <Hero
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        <Services lang={lang} />

        <Team lang={lang} />

        <Education lang={lang} />

        <Gallery
          lang={lang}
          onOpenVideo={(url) => setActiveVideoUrl(url)}
        />

        <Locations lang={lang} />

        <Reviews lang={lang} />

        <Social lang={lang} />

        <Contact lang={lang} />
      </main>

      <Footer
        lang={lang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <VideoModal
        isOpen={Boolean(activeVideoUrl)}
        videoUrl={activeVideoUrl}
        onClose={() => setActiveVideoUrl(null)}
      />

      <AppointmentModal
        isOpen={isBookingOpen}
        lang={lang}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default App;
