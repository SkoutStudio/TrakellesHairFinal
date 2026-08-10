import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Award, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';

interface EducationProps {
  lang: Language;
}

export const Education: React.FC<EducationProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="education-section" id="education">
      <div className="section-head reveal active">
        <div className="tag">
          <GraduationCap size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
          {t.educationTag}
        </div>
        <h2>{t.educationTitle}</h2>
        {t.educationText && <p>{t.educationText}</p>}
      </div>

      <div className="education-card reveal active">
        <div className="education-image-container">
          <img
            src="/Images/NikAnnCert.png"
            alt="Νίκος & Άννα - Πιστοποιήσεις & Σεμινάρια"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = '/Images/NikAnnBride.JPG';
              }
            }}
          />
          <div className="education-badge">
            <Award size={16} />
            <span>Essential Looks Masterclass</span>
          </div>
        </div>

        <div className="education-content">
          <div className="education-header">
            <h3>
              <Sparkles size={20} className="gold-icon" />
              {lang === 'el' ? 'Διεθνής Εκπαίδευση Νίκου & Άννας' : 'International Education of Nikos & Anna'}
            </h3>
            <p>
              {lang === 'el'
                ? 'Στο Trakelles Hair, η εξειδίκευση δεν σταματά ποτέ. Παρακολουθώντας τακτικά διεθνή σεμινάρια κομμωτικής, hands-on masterclasses και παρουσιάσεις τάσεων από οίκους όπως η Schwarzkopf Professional, εξασφαλίζουμε ότι κάθε κούρεμα, χτένισμα και τεχνική χρώματος ανταποκρίνεται στις υψηλότερες προδιαγραφές.'
                : 'At Trakelles Hair, mastery never stops. By regularly attending international hairdressing seminars, hands-on masterclasses, and trend showcases by leaders like Schwarzkopf Professional, we ensure every cut, style, and color service meets international excellence.'}
            </p>
          </div>

          <div className="cert-list">
            <div className="cert-item">
              <CheckCircle2 size={18} className="gold-icon" />
              <span>{t.cert1}</span>
            </div>
            <div className="cert-item">
              <CheckCircle2 size={18} className="gold-icon" />
              <span>{t.cert2}</span>
            </div>
            <div className="cert-item">
              <CheckCircle2 size={18} className="gold-icon" />
              <span>{t.cert3}</span>
            </div>
          </div>

          <div className="education-quote">
            «{lang === 'el'
              ? 'Η συνεχής γνώση και η ενημέρωση στις νέες τεχνικές είναι η δέσμευσή μας για το δικό σας ξεχωριστό στυλ.'
              : 'Continuous learning and mastering new techniques is our commitment to your unique style.'}»
          </div>
        </div>
      </div>
    </section>
  );
};
