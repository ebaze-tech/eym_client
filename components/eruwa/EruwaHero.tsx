import React from 'react';
import Image from 'next/image';

export default function EruwaHero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gray-900">
        <Image 
          src="/assets/images/visual_narrative.jpg"
          alt="Eruwa Landscape" 
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#0e4b68]/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
          Eruwa at a Glance
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light animate-fade-in-up delay-100">
          A living legacy of royal heritage, resilience, and cultural pride.
        </p>
      </div>
    </section>
  );
}
