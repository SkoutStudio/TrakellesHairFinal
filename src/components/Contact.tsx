import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { MapPin, Phone } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="contact" id="contact">
      <div className="section-head reveal active">
        <div className="tag">Book your appointment</div>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card reveal active">
          <h3>Trakelles Hair</h3>
          <div className="info">
            <p><MapPin size={18} style={{ marginRight: 8, color: '#f3d77b', verticalAlign: 'middle' }} />{t.mytileneAddress}</p>
            <p><MapPin size={18} style={{ marginRight: 8, color: '#f3d77b', verticalAlign: 'middle' }} />{t.moriaAddress}</p>
            <p><MapPin size={18} style={{ marginRight: 8, color: '#f3d77b', verticalAlign: 'middle' }} />{t.polichnitosAddress}</p>
            <p><Phone size={18} style={{ marginRight: 8, color: '#f3d77b', verticalAlign: 'middle' }} /><a href="tel:6944020119">694 402 0119</a></p>
            <p><Phone size={18} style={{ marginRight: 8, color: '#f3d77b', verticalAlign: 'middle' }} /><a href="tel:6971832034">697 1832 034</a></p>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.instagram.com/trakelles_extreme_hair_styling/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
              title="Instagram"
              aria-label="Instagram"
            >
              <div className="social-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <span className="social-card-label">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100009493850088"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
              title="Facebook"
              aria-label="Facebook"
            >
              <div className="social-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
              <span className="social-card-label">Facebook</span>
            </a>

            <a
              href="https://www.tiktok.com/@nick_trakelles"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
              title="TikTok"
              aria-label="TikTok"
            >
              <div className="social-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.58a6.34 6.34 0 0 0-3.55 1.01 6.34 6.34 0 1 0 10.89 4.39V9.22a8.16 8.16 0 0 0 4.77 1.52V7.29a4.85 4.85 0 0 1-2-0.6z"/>
                </svg>
              </div>
              <span className="social-card-label">TikTok</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Trakelles+Hair+Ζωοδόχου+Πηγής+164Β+Μυτιλήνη"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
              title="Google Maps"
              aria-label="Google Maps"
            >
              <div className="social-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="social-card-label">Google Maps</span>
            </a>
          </div>
        </div>

        <div className="map reveal active">
          <iframe
            loading="lazy"
            title="Google Maps Location"
            src="https://www.google.com/maps?q=Ζωοδόχου%20Πηγής%20164Β%20Μυτιλήνη&output=embed"
          />
        </div>
      </div>
    </section>
  );
};
