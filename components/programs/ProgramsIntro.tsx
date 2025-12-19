import React from 'react';
import { Layers } from 'lucide-react';

export default function ProgramsIntro() {
  return (
    <section className="py-24 bg-white text-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-50 rounded-2xl">
            <Layers className="w-8 h-8 text-[#2B59C3]" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
          Four Pillars of <span className="text-[#2B59C3]">Progress</span>
        </h2>
        
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
          EYM addresses Eruwa&apos;s needs through four interconnected pillars. Each program represents a strategic focus area where we channel resources, expertise, and community energy to create sustainable, measurable impact.
        </p>
      </div>
    </section>
  );
}
