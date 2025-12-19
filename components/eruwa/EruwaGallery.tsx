import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Camera } from 'lucide-react';

const images = [
  "/assets/images/gallery1.jpg",
  "/assets/images/gallery2.jpg",
  "/assets/images/gallery3.jpg",
  "/assets/images/gallery4.jpg" 
];

export default function EruwaGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#2B59C3]">
              <Camera className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-widest">Photo Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
              Explore Eruwa&apos;s Natural Beauty
            </h2>
          </div>
          
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-medium">
            View All Photos <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden h-64 group shadow-md hover:shadow-xl transition-all duration-300">
              <Image 
                src={src} 
                alt={`Eruwa Gallery ${index + 1}`} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
