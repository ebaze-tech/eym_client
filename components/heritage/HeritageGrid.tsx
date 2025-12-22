'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heritageData } from '@/lib/heritageData';
import { MapPin, ArrowRight } from 'lucide-react';

export default function HeritageGrid() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {heritageData.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 3 === 0 ? 'lg:col-span-2 flex flex-col lg:flex-row' : 'flex flex-col'
              }`}
            >
              <div className={`relative overflow-hidden ${index % 3 === 0 ? 'lg:w-1/2 h-80 lg:h-auto' : 'h-80'}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 3 === 0 ? 'lg:w-1/2' : ''}`}>
                <div className="flex items-center gap-2 text-[#2B59C3] text-sm font-bold uppercase tracking-wider mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 font-medium mb-6">{item.subtitle}</p>
                
                <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                  {item.description}
                </p>
                
                <Link 
                  href={`/heritage/${item.slug}`}
                  className="inline-flex items-center gap-2 text-[#2B59C3] font-bold group/btn hover:gap-4 transition-all"
                >
                  Explore History <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
