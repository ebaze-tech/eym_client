import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Clock, ArrowLeft } from 'lucide-react';
import { heritageData } from '@/lib/heritageData';
import HeritageShareButton from '@/components/heritage/HeritageShareButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function HeritageDetail({ params }: PageProps) {
  const { slug } = await params;
  const item = heritageData.find((h) => h.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-125 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="absolute top-0 left-0 w-full p-6">
          <div className="container mx-auto">
            <Link 
              href="/heritage" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors gap-2 text-sm font-bold uppercase tracking-wider bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/40"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Heritage
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <span className="bg-[#2B59C3] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  {item.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h1>
                <p className="text-xl text-gray-200 font-medium">{item.subtitle}</p>
              </div>
              
              <div className="flex flex-col gap-4 text-white/90 min-w-50">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <MapPin className="w-5 h-5 text-[#2B59C3]" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Location</p>
                    <p className="font-medium">{item.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <Clock className="w-5 h-5 text-[#2B59C3]" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Established</p>
                    <p className="font-medium">{item.yearEstablished}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:leading-relaxed prose-img:rounded-3xl first-letter:text-5xl first-letter:font-bold first-letter:text-[#2B59C3] first-letter:mr-3 first-letter:float-left">
              <div dangerouslySetInnerHTML={{ __html: item.fullContent }} />
            </div>
          </div>

          <div className="lg:w-1/3 space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">About This Site</h3>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Share Heritage</h4>
                <div className="flex gap-2">
                  <HeritageShareButton title={item.title} text={item.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
