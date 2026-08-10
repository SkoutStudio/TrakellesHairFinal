import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Star } from 'lucide-react';

interface ReviewsProps {
  lang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="reviews">
      <div className="section-head reveal active">
        <div className="tag">Reviews</div>
        <h2>{t.reviewsTitle}</h2>
      </div>

      <div className="reviews">
        <div className="review reveal active">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#f3d77b" color="#f3d77b" style={{ display: 'inline-block', marginRight: 2 }} />
            ))}
          </div>
          <p>{t.review1}</p>
          <b>Google Review</b>
        </div>

        <div className="review reveal active">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#f3d77b" color="#f3d77b" style={{ display: 'inline-block', marginRight: 2 }} />
            ))}
          </div>
          <p>{t.review2}</p>
          <b>Google Review</b>
        </div>

        <div className="review reveal active">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#f3d77b" color="#f3d77b" style={{ display: 'inline-block', marginRight: 2 }} />
            ))}
          </div>
          <p>{t.review3}</p>
          <b>Google Review</b>
        </div>
      </div>
    </section>
  );
};
