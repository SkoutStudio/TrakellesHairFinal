import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { X, Phone } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, lang, onClose }) => {
  const t = translations[lang];

  if (!isOpen) return null;

  return (
    <div
      className="modal open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="booking-modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          style={{ top: '16px', right: '16px' }}
        >
          <X size={24} />
        </button>

        <h3>{t.appointmentModalTitle}</h3>
        <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '24px' }}>
          {t.appointmentModalSub}
        </p>

        <div className="phone-numbers-container">
          <a className="phone-call-card" href="tel:6944020119">
            <div className="phone-icon-box">
              <Phone size={22} />
            </div>
            <div className="phone-details">
              <span className="phone-number">694 402 0119</span>
              <span className="phone-action">{lang === 'el' ? 'Άμεση Τηλεφωνική Κλήση' : 'Call Now'}</span>
            </div>
          </a>

          <a className="phone-call-card" href="tel:6971832034">
            <div className="phone-icon-box">
              <Phone size={22} />
            </div>
            <div className="phone-details">
              <span className="phone-number">697 1832 034</span>
              <span className="phone-action">{lang === 'el' ? 'Άμεση Τηλεφωνική Κλήση' : 'Call Now'}</span>
            </div>
          </a>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button
            className="btn ghost"
            onClick={onClose}
            style={{ padding: '8px 24px', fontSize: '14px' }}
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
