import React from 'react';
import Image from 'next/image';

export default function GetInvolvedHero() {
  return (
    <section className="relative h-[50vh] min-h-100 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <Image 
          src="/assets/images/aboutHero.jpg" 
          alt="Get Involved Hero" 
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-20">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 block">Join the Movement</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Get Involved
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
            Be a part of the change. Discover how you can contribute to the growth and development of Eruwa.
          </p>
        </div>
      </div>
    </section>
  );
}
