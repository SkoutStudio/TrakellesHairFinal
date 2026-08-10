import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Calendar, Play } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang];

  return (
    <header className="hero" id="top">
      <div className="hero-bg" />

      <div className="hero-content reveal active">
        <div className="eyebrow">{t.heroEyebrow}</div>
        <h1>
          Trakelles <span>Hair</span>
        </h1>
        <p>{t.heroText}</p>

        <div className="actions">
          <button className="btn primary" onClick={onOpenBooking}>
            <Calendar size={18} style={{ marginRight: 8 }} />
            {t.bookBtn}
          </button>
          <a className="btn ghost" href="#gallery">
            <Play size={18} style={{ marginRight: 8 }} />
            {t.galleryBtn}
          </a>
        </div>
      </div>
    </header>
  );
};


