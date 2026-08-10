import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { MapPin } from 'lucide-react';

interface LocationsProps {
  lang: Language;
}

export const Locations: React.FC<LocationsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="locations">
      <div className="section-head reveal active">
        <div className="tag">Locations</div>
        <h2>{t.locationsTitle}</h2>
        <p>{t.locationsText}</p>
      </div>

      <div className="locations">
        <div className="location-card reveal active">
          <h3>{lang === 'el' ? 'Μυτιλήνη' : 'Mytilene'}</h3>
          <p><MapPin size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} />{t.mytileneAddress}</p>
        </div>

        <div className="location-card reveal active">
          <h3>{lang === 'el' ? 'Μόρια Λέσβου' : 'Moria, Lesvos'}</h3>
          <p><MapPin size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} />{t.moriaAddress}</p>
        </div>

        <div className="location-card reveal active">
          <h3>{lang === 'el' ? 'Πολιχνίτος Λέσβου' : 'Polichnitos, Lesvos'}</h3>
          <p><MapPin size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} />{t.polichnitosAddress}</p>
        </div>
      </div>
    </section>
  );
};
