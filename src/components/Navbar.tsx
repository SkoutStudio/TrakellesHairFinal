import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onSelectLang, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <a className="logo" href="#top" onClick={closeMenu}>
        Trakelles Hair
      </a>

      <div className={`links ${isMobileOpen ? 'open' : ''}`}>
        <a href="#services" onClick={closeMenu}>{t.navServices}</a>
        <a href="#about" onClick={closeMenu}>{t.navTeam}</a>
        <a href="#gallery" onClick={closeMenu}>{t.navGallery}</a>
        <a href="#locations" onClick={closeMenu}>{t.navLocations}</a>
        <a href="#social" onClick={closeMenu}>{t.navSocial}</a>
        <a href="#contact" onClick={closeMenu}>{t.navContact}</a>
        
        <div className="lang-switch mobile-lang">
          <button 
            className={`lang-btn ${lang === 'el' ? 'active' : ''}`}
            onClick={() => { onSelectLang('el'); closeMenu(); }}
          >
            GR
          </button>
          <button 
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => { onSelectLang('en'); closeMenu(); }}
          >
            EN
          </button>
        </div>
      </div>

      <div className="lang-switch desktop-lang">
        <button 
          className={`lang-btn ${lang === 'el' ? 'active' : ''}`}
          onClick={() => onSelectLang('el')}
        >
          GR
        </button>
        <button 
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => onSelectLang('en')}
        >
          EN
        </button>
      </div>

      <button 
        className="hamb" 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
};
