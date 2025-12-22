'use client';

import React from 'react';
import Image from 'next/image';
import { historySections } from '@/lib/historyData';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FullHistory() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/assets/images/Eleruwa_Palace.jpeg"
          alt="Eruwa History Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-blue-400 font-bold tracking-widest uppercase mb-4">The Royal Heritage</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            ERUWA: A LAND OF ROYAL ROOTS, UNBROKEN HONOUR, AND HISTORIC RESILIENCE
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
            A journey through time, lineage, and the destiny of a people.
          </p>
        </div>
      </div>

      {/* Navigation Back */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/eruwa-at-a-glance" 
            className="inline-flex items-center text-gray-600 hover:text-[#0e4b68] transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Overview
          </Link>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-24">
          {historySections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-bold text-gray-100 select-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl font-bold text-[#0e4b68]">{section.title}</h2>
                </div>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full">
                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credits */}
        <div className="mt-24 pt-12 border-t border-gray-200 text-center">
          <p className="text-gray-500 italic">
            By: Comrade Oluwafemi Ogunshola<br />
            For Program and Publicity Committee
          </p>
        </div>
      </div>
    </div>
  );
}
