import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300" />
              <div className="relative aspect-3/4 rounded-xl overflow-hidden shadow-2xl">
                 <Image 
                  src="/assets/images/tochukwu.png" 
                  alt="Tochukwu Ogunaka" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-white">
                  <h4 className="font-bold text-xl">Tochukwu Ogunaka</h4>
                  <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Communications Associate</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-7/12">
            <div className="mb-8">
              <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bridging Tradition & <br />
                <span className="text-[#2B59C3]">Modern Progress</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                <span className="font-bold text-gray-900">EYM</span> represents the organized, sustained effort of Eruwa&apos;s people to take ownership of their development journey. We are the bridge between traditional values and modern progress, between individual aspiration and collective advancement, between local challenges and sustainable solutions.
              </p>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#2B59C3] shadow-sm my-8">
                <Quote className="w-8 h-8 text-blue-200 mb-2" />
                <p className="text-gray-800 italic font-medium">
                  &quot;We are not just implementing projects; we are curating our community&apos;s legacy for generations yet unborn.&quot;
                </p>
              </div>

              <p>
                From restoring community infrastructure to empowering youth entrepreneurs, from preserving cultural heritage to fostering inclusive governance—every EYM initiative is a thread in the larger tapestry of Eruwa&apos;s story.
              </p>
            </div>
            
            <div className="mt-10">
              <Link 
                href="/about"
                className="text-[#2B59C3] font-bold hover:text-[#1e4499] transition-colors flex items-center gap-2 group"
              >
                Read Our Full Story 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
