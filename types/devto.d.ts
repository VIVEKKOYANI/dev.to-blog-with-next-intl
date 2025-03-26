// types/devto.d.ts
export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  readable_publish_date: string;
  url: string;
  cover_image: string | null;
  reading_time_minutes: number;
  positive_reactions_count: number;
  // Add other fields you need
}

// For next-intl translations
type ArticlesMessages = typeof import('../public/locales/en/articles.json');
declare interface IntlMessages extends ArticlesMessages {}