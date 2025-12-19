import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 -translate-y-1/3 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2B59C3] transition-colors duration-300">
                <Target className="w-7 h-7 text-[#2B59C3] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide group-hover:text-[#2B59C3] transition-colors">Our Mission</h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                To mobilize Eruwa&apos;s human and cultural resources for targeted community development, creating tangible infrastructure, economic opportunities, and social cohesion through indigenous-led initiatives.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#2B59C3] p-10 rounded-3xl shadow-xl text-white hover:bg-[#1e4499] transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                <Eye className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">Our Vision</h3>
              
              <p className="text-blue-100 leading-relaxed text-lg">
                Eruwa as a benchmark for community-led development, where tradition and progress coexist, youth are engaged change-makers, and collective action creates prosperity that is both visible and sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
