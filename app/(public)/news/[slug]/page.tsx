import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { newsData } from '@/lib/newsData';
import ShareButton from '@/components/news/ShareButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetail({ params }: PageProps) {
  const { slug } = await params;
  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const relatedNews = newsData
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link 
              href="/news" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors gap-2 text-sm font-medium uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Back to News
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#2B59C3] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {newsItem.category}
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{newsItem.date}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              {newsItem.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{newsItem.author}</p>
                    <p className="text-xs text-gray-500">Author</p>
                  </div>
                </div>
                <ShareButton title={newsItem.title} text={newsItem.description} />
              </div>

              <div 
                className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-[#2B59C3] hover:prose-a:text-blue-700"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Related News */}
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related News</h3>
              <div className="space-y-6">
                {relatedNews.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/news/${item.slug}`}
                    className="group block"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#2B59C3] uppercase tracking-wider mb-1 block">
                          {item.category}
                        </span>
                        <h4 className="font-bold text-gray-900 group-hover:text-[#2B59C3] transition-colors line-clamp-2 mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Link 
                  href="/news"
                  className="block w-full py-3 text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-colors"
                >
                  View All News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
