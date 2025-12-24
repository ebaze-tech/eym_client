import React from 'react';
import Image from 'next/image';

export default function LeadershipHero() {
  return (
    <section className="relative bg-white pb-32">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" // Placeholder for the leadership image
          alt="Leadership Program"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Overlay Box */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/4 flex items-center justify-center px-4 z-20">
        <div className="bg-[#2B59C3] p-8 md:p-12 max-w-4xl w-full text-center text-white rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            LEADERSHIP PROGRAM
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-light text-blue-50">
            From the ancestral crown of Olaribikusi to today&apos;s community champions, leadership in Eruwa has always been about service, unity, and foresight. Here, you&apos;ll meet the modern-day torchbearers—traditional rulers, youth leaders, and development pioneers—who honor our past while building our future.
          </p>
        </div>
      </div>
    </section>
  );
}
