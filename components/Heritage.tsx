import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { heritageData } from '@/lib/heritageData';

export default function Heritage() {
  // Display only the first 2 items for the homepage preview
  const previewItems = heritageData.slice(0, 2);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Our Roots</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xs">
              Eruwa&apos;s Living Heritage
            </h2>
          </div>
          <Link 
            href="/heritage"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-medium"
          >
            See All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewItems.map((item) => (
            <Link href={`/heritage/${item.slug}`} key={item.id} className="relative h-112.5 rounded-3xl overflow-hidden group shadow-xl block">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-blue-300 mb-2 text-sm font-medium">
                    <MapPin className="w-4 h-4" />
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
