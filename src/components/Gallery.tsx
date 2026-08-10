import React from 'react';
import { Language, VideoItem } from '../types';
import { translations } from '../translations';
import { Play } from 'lucide-react';

interface GalleryProps {
  lang: Language;
  onOpenVideo: (videoUrl: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ lang, onOpenVideo }) => {
  const t = translations[lang];

  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'Balayage',
      videoUrl: '/videos/balayase_insta.mp4',
      tag: 'Balayage'
    },
    {
      id: '2',
      title: 'Black Hair',
      videoUrl: '/videos/black_slowmo_insta.mp4',
      tag: 'Black Hair'
    },
    {
      id: '3',
      title: 'Blonde Hair',
      videoUrl: '/videos/blonde_insta.mp4',
      tag: 'Blonde Hair'
    },
    {
      id: '4',
      title: 'Kids Hair Design',
      videoUrl: '/videos/drawing_hair_kids_insta.mp4',
      tag: 'Kids Hair Design'
    },
    {
      id: '5',
      title: 'Grey Look',
      videoUrl: '/videos/grey_hair_insta.mp4',
      tag: 'Grey Look'
    },
    {
      id: '6',
      title: 'Copper Look',
      videoUrl: '/videos/lightred_insta.mp4',
      tag: 'Copper Look'
    },
    {
      id: '7',
      title: 'Mullet',
      videoUrl: '/videos/mulet_men_insta.mp4',
      tag: 'Mullet'
    },
    {
      id: '8',
      title: 'Short Fade',
      videoUrl: '/videos/short_fade_men_insta.mp4',
      tag: 'Short Fade'
    }
  ];

  return (
    <section id="gallery">
      <div className="section-head reveal active">
        <div className="tag">Video Gallery</div>
        <h2>{t.galleryTitle}</h2>
        <p>{t.galleryText}</p>
      </div>

      <div className="video-gallery">
        {videos.map((item) => (
          <article
            key={item.id}
            className="video-card reveal active"
            onClick={() => onOpenVideo(item.videoUrl)}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={item.videoUrl} type="video/mp4" />
            </video>
            <div className="play-icon">
              <Play size={22} fill="currentColor" />
            </div>
            <div className="video-label">
              <span>{item.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
