import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';

export default function History() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden h-125 shadow-2xl group">
              <Image 
                src="/assets/images/atAGlance.png" 
                alt="Eruwa History" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2 text-blue-300">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold tracking-wider text-sm">EST. 1960</span>
                </div>
                <p className="font-medium text-lg">A legacy of community strength.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our History And <br />
              <span className="text-[#2B59C3]">Evolution</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-10">
              <p className="mb-6">
                Founded on the principles of unity and progress, the Eruwa Youth Movement has been at the forefront of community development for over six decades. What started as a small gathering of concerned youths has blossomed into a formidable force for positive change.
              </p>
              <p>
                Through the years, we have adapted to the changing times while remaining rooted in our core values. From early infrastructure projects to modern digital empowerment initiatives, our history is a testament to the resilience and adaptability of the Eruwa people.
              </p>
            </div>

            <button className="bg-[#2B59C3] hover:bg-[#1e4499] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 group">
              Explore Full Timeline 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
