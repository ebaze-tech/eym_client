import React from 'react';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const categories = ["All Posts", "Events", "Projects", "Governance", "Announcements"];
  
  const news = [
    {
      title: "EYM Beautifies Eruwa Roundabout",
      date: "Dec 12, 2024",
      category: "Projects",
      description: "Two weeks ago, our major garages received a refreshing new look, bringing a warm transformation to the heart of our town...",
      image: "/assets/images/roundabout.jpg"
    },
    {
      title: "Annual General Meeting 2025",
      date: "Dec 23, 2024",
      category: "Events",
      description: "EYM Annual General Meeting 2025 arrives with inspiring activities for everyone. The event opens on Tuesday 23 December with a Tourism...",
      image: "/assets/images/general_meeting.jpg"
    },
    {
      title: "Community Development Report",
      date: "Nov 30, 2024",
      category: "Governance",
      description: "In a remarkable display of selfless service and unity, New Eruwa Youth Forum took it upon themselves to contribute collectively to the...",
      image: "/assets/images/cdr.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">News & Events</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-[#2B59C3] text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="h-56 overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2B59C3] uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#2B59C3] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed grow">
                  {item.description}
                </p>
                
                <button className="text-[#2B59C3] font-bold text-sm flex items-center gap-2 group/btn mt-auto">
                  Read Full Story 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
