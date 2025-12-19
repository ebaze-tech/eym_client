import NewsHero from '@/components/news/NewsHero';
import LatestNews from '@/components/news/LatestNews';
import UpcomingEvents from '@/components/news/UpcomingEvents';

export default function NewsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NewsHero />
      <LatestNews />
      <UpcomingEvents />
    </main>
  );
}
