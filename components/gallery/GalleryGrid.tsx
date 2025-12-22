'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryData } from '@/lib/galleryData';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = ["All", ...new Set(galleryData.map(item => item.category))];

  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const currentImages = filteredImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#2B59C3] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentImages.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gray-100"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center p-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <span className="text-blue-200 text-sm font-medium">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mb-8">
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

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative w-full max-w-5xl max-h-[85vh] aspect-video rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="bg-[#2B59C3] px-3 py-1 rounded-full text-white font-bold text-xs uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <span>{selectedImage.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
