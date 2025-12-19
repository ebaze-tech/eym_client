import React from 'react';
import Image from 'next/image';

export default function MembershipHero() {
  return (
    <section className="relative h-[50vh] min-h-100 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <Image 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop" 
          alt="Membership Hero" 
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-20">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 block">Join Us</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Become a Member
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
            Join the Eruwa Youth Movement and be part of the force driving positive change in our community.
          </p>
        </div>
      </div>
    </section>
  );
}