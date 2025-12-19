import React from 'react';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';

export default function Impact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden h-125 shadow-2xl group">
              <Image 
                src="/assets/images/impact.jpg" 
                alt="Community Impact" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block animate-fade-in-up">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-full">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-bold text-gray-900">Growth Metric</span>
                </div>
                <p className="text-sm text-gray-600">Consistent 20% annual increase in community participation since 2020.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Our Reach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Making A Tangible <br />
              <span className="text-[#2B59C3]">Impact</span>
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our initiatives go beyond mere numbers; they represent changed lives, empowered families, and a stronger community fabric. From educational scholarships to infrastructure development, our footprint is visible across Eruwa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Users className="w-6 h-6 text-[#2B59C3]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">5,000+</h4>
                  <p className="text-sm text-gray-500">Lives Touched</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Globe className="w-6 h-6 text-[#2B59C3]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">15+</h4>
                  <p className="text-sm text-gray-500">Communities Served</p>
                </div>
              </div>
            </div>

            <button className="border-2 border-[#2B59C3] text-[#2B59C3] px-8 py-3 rounded-full text-sm font-bold hover:bg-[#2B59C3] hover:text-white transition-all duration-300 flex items-center gap-2 group">
              View Impact Report 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
