'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { newsData } from '@/lib/newsData';

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ["All Posts", "Events", "Projects", "Governance", "Announcements"];

  const filteredNews = activeCategory === "All Posts" 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Latest <span className="text-[#2B59C3]">News</span>
            </h2>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button 
                key={index}
                onClick={() => handleCategoryChange(cat)}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentNews.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2B59C3] uppercase tracking-wider shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-4 leading-tight text-gray-900 group-hover:text-[#2B59C3] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-8 leading-relaxed grow line-clamp-3">
                  {item.description}
                </p>
                
                <div className="mt-auto">
                  <Link href={`/news/${item.slug}`} className="text-[#2B59C3] font-bold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all">
                    Read Full Story 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6">
            <button 
              type="button"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#2B59C3] hover:text-white hover:border-[#2B59C3] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button 
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Page ${page}`} 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === page ? 'bg-[#2B59C3] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              type="button"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#2B59C3] hover:text-white hover:border-[#2B59C3] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
