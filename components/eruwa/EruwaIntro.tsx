import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EruwaIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-125">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-br-3xl -z-10" />
            <Image 
              src="/assets/images/roundabout.jpg" 
              alt="Eruwa Entrance" 
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-[#0e4b68] font-bold text-lg">Founded on the hills</p>
              <p className="text-gray-600 text-sm mt-1">Ibarapa East, Oyo State</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Announcements</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Eruwa at a glance
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Eruwa is more than a town—it is a living legacy of royal heritage, resilience, and cultural pride. Founded on the hills of Ibarapa East in Oyo State, Eruwa traces its origins to the union of Princess Oyinlola, daughter of the Alaafin of Oyo, and Obaseeku, a visionary hunter.
              </p>
              <p>
                From this royal lineage emerged Olaribikusi, the first crowned Eleruwa, who carried the sacred crown from Oyo and established a dynasty that continues to this day.
              </p>
              <p>
                A land never conquered, Eruwa stands as a symbol of unbroken tradition, community strength, and enduring honor.
              </p>
            </div>

            <div className="mt-10">
              <Link 
                href="/eruwa-at-a-glance/history"
                className="bg-[#0e4b68] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0a3850] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit"
              >
                Read All
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
