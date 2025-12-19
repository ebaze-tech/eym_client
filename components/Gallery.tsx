import React from 'react';
import { LayoutGrid, ArrowUpRight, Camera } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#2B59C3]">
              <Camera className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-widest">Our Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
              Explore The Visual Narrative Of Our Journey
            </h2>
          </div>
          
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-medium">
            View All Photos <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden h-100 group shadow-lg">
            <Image 
              src="/assets/images/visual_narrative.jpg" 
              alt="Gallery 1" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="bg-[#2B59C3] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Events</span>
              <h3 className="text-white font-bold text-xl">EYM 2025</h3>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden h-100 group shadow-lg">
            <Image 
              src="/assets/images/visual_narrative.jpg" 
              alt="Gallery 2" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="bg-[#2B59C3] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Events</span>
              <h3 className="text-white font-bold text-xl">EYM 2025</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
