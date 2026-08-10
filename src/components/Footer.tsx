import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import {
  Scissors,
  MapPin,
  Phone,
  Clock,
  ArrowUp,
  Award,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="main-footer">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Scissors size={24} className="gold-icon" />
              <h2>Trakelles <span>Hair</span></h2>
            </div>
            <p className="brand-desc">{t.footerDesc}</p>
            
            <div className="award-pill">
              <Award size={16} className="gold-icon" />
              <span>Schwarzkopf Professional Certified</span>
            </div>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/trakelles_extreme_hair_styling/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon-btn"
                title="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009493850088"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon-btn"
                title="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@nick_trakelles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="social-icon-btn"
                title="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.58a6.34 6.34 0 0 0-3.55 1.01 6.34 6.34 0 1 0 10.89 4.39V9.22a8.16 8.16 0 0 0 4.77 1.52V7.29a4.85 4.85 0 0 1-2-0.6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-title">{t.footerQuickLinks}</h4>
            <ul className="footer-links">
              <li><a href="#services">{t.navServices}</a></li>
              <li><a href="#team">{t.navTeam}</a></li>
              <li><a href="#education">{t.educationTag}</a></li>
              <li><a href="#gallery">{t.navGallery}</a></li>
              <li><a href="#locations">{t.navLocations}</a></li>
              <li><a href="#reviews">{lang === 'el' ? 'Αξιολογήσεις' : 'Reviews'}</a></li>
            </ul>
          </div>

          {/* Shops & Contact Column */}
          <div className="footer-col">
            <h4 className="footer-title">{t.footerShops}</h4>
            <div className="footer-info-list">
              <div className="info-item">
                <MapPin size={16} className="gold-icon" />
                <div>
                  <strong>{lang === 'el' ? 'Μυτιλήνη:' : 'Mytilene:'}</strong> {t.mytileneAddress}
                </div>
              </div>
              <div className="info-item">
                <MapPin size={16} className="gold-icon" />
                <div>
                  <strong>{lang === 'el' ? 'Μόρια:' : 'Moria:'}</strong> {t.moriaAddress}
                </div>
              </div>
              <div className="info-item">
                <MapPin size={16} className="gold-icon" />
                <div>
                  <strong>{lang === 'el' ? 'Πολίχνιτος:' : 'Polichnitos:'}</strong> {t.polichnitosAddress}
                </div>
              </div>
              <div className="info-item highlight-phone">
                <Phone size={16} className="gold-icon" />
                <div className="phones">
                  <a href="tel:6944020119">694 402 0119</a> · <a href="tel:6971832034">697 1832 034</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Appointments Column */}
          <div className="footer-col">
            <h4 className="footer-title">{t.footerHoursTitle}</h4>
            <div className="hours-card">
              <Clock size={20} className="gold-icon" />
              <div>
                <p className="hours-line"><strong>{lang === 'el' ? 'Τρίτη - Σάββατο:' : 'Tuesday - Saturday:'}</strong></p>
                <p className="hours-time">09:00 - 20:00</p>
                <p className="hours-line closed"><strong>{lang === 'el' ? 'Κυριακή & Δευτέρα:' : 'Sunday & Monday:'}</strong> {lang === 'el' ? 'Κλειστά' : 'Closed'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} <strong>Trakelles Hair Studio</strong>. {t.footerRights}
          </div>

          <div className="credits">
            {t.footerDesignedBy}{' '}
            <a
              href="https://skoutstudio.gr/"
              target="_blank"
              rel="noopener noreferrer"
              className="skout-brand"
            >
              Skout Studio
            </a>
          </div>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </footer>
    </>
  );
};

