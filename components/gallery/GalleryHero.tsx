import React from 'react';

export default function GalleryHero() {
  return (
    <section className="relative py-24 bg-[#0e4b68] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-4 block">Our Memories</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Media Gallery</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Capturing the moments that define our journey, celebrate our heritage, and showcase our impact in Eruwa.
        </p>
      </div>
    </section>
  );
}
