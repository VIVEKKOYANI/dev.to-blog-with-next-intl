import Image from "next/image";

// app/[locale]/articles/page.tsx
import { getArticles } from '@/lib/api/devto';
import { getTranslations } from 'next-intl/server';

export default async function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  
  // Fetch articles in parallel with translations
  const [articles, t] = await Promise.all([
    getArticles('ben').catch(() => []),
    getTranslations('ArticlesPage')
  ]);

  // Format dates based on locale
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (articles.length === 0) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('pageTitle')}</h1>
        <p className="text-gray-500">{t('noArticles')}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('pageTitle')}</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {articles.map((article) => (
          <article
            key={article.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">
                  {t('minutesRead', { minutes: article.reading_time_minutes })}
                </span>
                <span className="text-sm text-gray-500">
                  {t('reactions', { count: article.positive_reactions_count })}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-2">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {/* {t('articleTitleWrapper', { title: article.title })} */}
                  {article.title}
                </a>
              </h2>

              <p className="text-gray-600 mb-4 line-clamp-3">
              {/* {t('articleDescriptionWrapper', { description: article.description })} */}
                {article.description || t('noDescription')}
              </p>

              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500">
                  {t('publishedOn', { date: formatDate(article.published_at) })}
                </time>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {t('readArticle')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}