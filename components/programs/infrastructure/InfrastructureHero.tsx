import React from 'react';
import Image from 'next/image';

export default function InfrastructureHero() {
  const images = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop", // Construction
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop", // Construction
    "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=800&auto=format&fit=crop", // Digging
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop", // People working
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop", // Scenic
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop", // Group
  ];

  return (
    <section className="relative bg-white pb-32">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 h-[50vh] md:h-[70vh] w-full">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Infrastructure ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Overlay Box */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/4 flex items-center justify-center px-4 z-20">
        <div className="bg-[#2B59C3] p-8 md:p-12 max-w-4xl w-full text-center text-white rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            Community Program
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-light text-blue-50">
            Eruwa is more than a town—it is a living legacy. Rooted in royal history and strengthened by community spirit, our development journey honors the past while building a sustainable future. This page showcases our ongoing and completed initiatives in infrastructure, education, healthcare, and economic empowerment—each project designed to uplift, connect, and empower every resident of Eruwa.
          </p>
        </div>
      </div>
    </section>
  );
}
