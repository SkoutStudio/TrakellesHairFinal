import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ExternalLink } from 'lucide-react';

interface SocialProps {
  lang: Language;
}

export const Social: React.FC<SocialProps> = ({ lang }) => {
  const t = translations[lang];

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@trakelles_extreme_hair_styling',
      url: 'https://www.instagram.com/trakelles_extreme_hair_styling/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      handle: '@nick_trakelles',
      url: 'https://www.tiktok.com/@nick_trakelles',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.58a6.34 6.34 0 0 0-3.55 1.01 6.34 6.34 0 1 0 10.89 4.39V9.22a8.16 8.16 0 0 0 4.77 1.52V7.29a4.85 4.85 0 0 1-2-0.6z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      handle: 'Trakelles Hair',
      url: 'https://www.facebook.com/profile.php?id=100009493850088',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="social" className="social-section">
      <div className="section-head reveal active">
        <div className="tag">Social Community</div>
        <h2>{t.socialTitle}</h2>
        <p>{t.socialText}</p>
      </div>

      <div className="social-icons-grid reveal active">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            className="social-icon-card"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-card-icon">{item.icon}</div>
            <div className="social-card-meta">
              <span className="platform-name">{item.name}</span>
              <span className="platform-handle">{item.handle}</span>
            </div>
            <ExternalLink size={16} className="external-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
};
