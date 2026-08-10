export type Language = 'el' | 'en';

export interface ServiceItem {
  id: string;
  icon: string;
  i18nKey: string;
}

export interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  posterUrl?: string;
  tag: string;
}

export interface LocationItem {
  id: string;
  nameKey: string;
  addressKey: string;
  phone: string;
  mapsUrl: string;
}

export interface ReviewItem {
  id: string;
  stars: number;
  i18nKey: string;
  author: string;
}
