import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Scissors, Sparkles } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang];

  const menServices = [
    t.men1, t.men2, t.men3, t.men4, t.men5, t.men6
  ];

  const womenServices = [
    t.women1, t.women2, t.women3, t.women4, t.women5,
    t.women11, t.women12, t.women13, t.women6, t.women7,
    t.women8, t.women9, t.women14, t.women10
  ];

  return (
    <section id="services">
      <div className="section-head reveal active">
        <div className="tag">Services</div>
        <h2>{t.servicesTitle}</h2>
        <p>{t.servicesText}</p>
      </div>

      <div className="service-categories">
        {/* Men's Care Section with Barbering Spotlight */}
        <div className="category-card men-category reveal active">
          <div className="category-header">
            <h3>{t.menCare}</h3>
          </div>

          <div className="service-list">
            {menServices.map((service, index) => (
              <div key={index} className="service-item">
                {service}
              </div>
            ))}
          </div>

          {/* Barber Spotlight with Nikos Image - Positioned under the services list */}
          <div className="barber-spotlight-card">
            <div className="spotlight-image-wrapper">
              <img
                src="/images/nik.jpg"
                alt="Νίκος - Barbering &amp; Styling"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/images/nikannbride.jpg';
                  }
                }}
              />
            </div>
            <div className="spotlight-text">
              <h4>{t.barberSpotlightTitle}</h4>
              <p>{t.barberSpotlightText}</p>
            </div>
          </div>
        </div>

        {/* Women's Care Section */}
        <div className="category-card women-category reveal active">
          <div className="category-header">
            <h3>{t.womenCare}</h3>
          </div>
          <div className="service-list">
            {womenServices.map((service, index) => (
              <div key={index} className="service-item">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
