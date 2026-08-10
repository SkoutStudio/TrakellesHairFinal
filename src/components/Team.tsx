import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface TeamProps {
  lang: Language;
}

export const Team: React.FC<TeamProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="team-section" id="about">
      <div className="section-head reveal active">
        <div className="tag">Meet the Team</div>
        <h2>{t.teamTitle}</h2>
        {t.teamText && <p>{t.teamText}</p>}
      </div>

      <div className="team-grid">
        <article className="team-card reveal active">
          <div className="portrait">
            <img src="/images/NikAnnBride.JPG" alt="Νίκος και Άννα - Trakelles Hair" />
          </div>

          <div className="team-text">
            <h3>{t.teamMembersTitle}</h3>
            <p>{t.teamMembersText}</p>
            <div className="signature">Nikos &amp; Anna</div>
            <div className="team-role">Trakelles Hair Team</div>
          </div>
        </article>
      </div>

      <div className="stats reveal active">
        <div className="stat">
          <b>4.9★</b>
          <small>{t.ratingSmall}</small>
        </div>
        <div className="stat">
          <b>82+</b>
          <small>{t.reviewsSmall}</small>
        </div>
        <div className="stat">
          <b>3</b>
          <small>{t.locationsSmall}</small>
        </div>
      </div>
    </section>
  );
};
