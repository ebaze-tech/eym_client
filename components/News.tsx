'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsData } from '@/lib/newsData';

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const categories = ["All Posts", "Events", "Projects", "Governance", "Announcements"];
  
  const filteredNews = activeCategory === "All Posts" 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">News & Events</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#2B59C3] text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="h-56 overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2B59C3] uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#2B59C3] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed grow">
                  {item.description}
                </p>
                
                <Link href={`/news/${item.slug}`} className="text-[#2B59C3] font-bold text-sm flex items-center gap-2 group/btn mt-auto">
                  Read Full Story 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 bg-[#2B59C3] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            See All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
