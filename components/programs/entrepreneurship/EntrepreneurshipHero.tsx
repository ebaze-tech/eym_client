import React from 'react';
import Image from 'next/image';

export default function EntrepreneurshipHero() {
  const images = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", // Meeting
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop", // Business
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", // Startup
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop", // Planning
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Teamwork
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", // Innovation
  ];

  return (
    <section className="relative bg-white pb-32">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 h-[50vh] md:h-[70vh] w-full">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Entrepreneurship ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Overlay Box */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/4 flex items-center justify-center px-4 z-20">
        <div className="bg-[#0e4b68] p-8 md:p-12 max-w-4xl w-full text-center text-white rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            ENTREPRENEURSHIP PROGRAM
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-light text-blue-50">
            Our Economic Empowerment Program provides skills, resources, and opportunities to help Eruwa&apos;s residents build sustainable businesses, gain financial independence, and contribute to a thriving local economy—rooted in community, driven by innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
