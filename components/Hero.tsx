import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gray-900">
        <Image 
          src="/assets/images/homepageHero.jpg" 
          alt="Community Action" 
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            Since 1981
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight tracking-tight">
            Planting Seeds <br />
            <span className="text-blue-400">Of Progress.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl leading-relaxed font-light">
           We build, protect and project the future of Eruwa together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/membership"
              className="bg-[#2B59C3] hover:bg-[#1e4499] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 group"
            >
              Become a Member
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
