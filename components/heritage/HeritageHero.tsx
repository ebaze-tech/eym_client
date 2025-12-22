import React from 'react';
import Image from 'next/image';

export default function HeritageHero() {
  return (
    <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/images/okele-hill.jpg"
        alt="Eruwa Heritage"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <span className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-4 block animate-fade-in">
          Discover Our Roots
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Eruwa&apos;s Living <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-white">
            Heritage
          </span>
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Journey through the sacred sites, historical landmarks, and cultural treasures that define the soul of our community.
        </p>
      </div>
    </section>
  );
}
