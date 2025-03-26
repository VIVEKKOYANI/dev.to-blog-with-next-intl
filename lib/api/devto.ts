// lib/api/devto.ts
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
}

export async function getArticles(username: string): Promise<DevToArticle[]> {
  try {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch Dev.to articles:', error);
    throw error;
  }
}