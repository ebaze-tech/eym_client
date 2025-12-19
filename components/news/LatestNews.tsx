import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

export default function LatestNews() {
  const news = [
    {
      title: "EYM Beautifies Eruwa Roundabout",
      date: "Dec 12, 2024",
      category: "Projects",
      description: "Two weeks ago, our major garages received a refreshing new look, bringing a warm transformation to the heart of our town. This initiative is part of our broader beautification project.",
      image: "/assets/images/roundabout.jpg"
    },
    {
      title: "Annual General Meeting 2025",
      date: "Dec 23, 2024",
      category: "Events",
      description: "EYM Annual General Meeting 2025 arrives with inspiring activities for everyone. The event opens on Tuesday 23 December with a Tourism tour and culminates in a grand celebration.",
      image: "/assets/images/general_meeting.jpg"
    },
    {
      title: "Community Development Report",
      date: "Nov 30, 2024",
      category: "Governance",
      description: "In a remarkable display of selfless service and unity, New Eruwa Youth Forum took it upon themselves to contribute collectively to the renovation of the town hall.",
      image: "/assets/images/cdr.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Latest <span className="text-[#2B59C3]">News</span>
            </h2>
          </div>
          
          {/* Filter Buttons (Optional - can be added later) */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2B59C3] uppercase tracking-wider shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-4 leading-tight text-gray-900 group-hover:text-[#2B59C3] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-8 leading-relaxed grow line-clamp-3">
                  {item.description}
                </p>
                
                <div className="mt-auto">
                  <button className="text-[#2B59C3] font-bold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all">
                    Read Full Story 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6">
          <button 
            type="button"
            aria-label="Previous page"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#2B59C3] hover:text-white hover:border-[#2B59C3] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-3">
            <button aria-label="Page 1" className="w-3 h-3 rounded-full bg-[#2B59C3] transition-all duration-300 scale-125"></button>
            <button aria-label="Page 2" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></button>
            <button aria-label="Page 3" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></button>
          </div>
          
          <button 
            type="button"
            aria-label="Next page"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#2B59C3] hover:text-white hover:border-[#2B59C3] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
