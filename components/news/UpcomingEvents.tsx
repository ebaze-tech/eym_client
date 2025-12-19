import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function UpcomingEvents() {
  const events = [
    {
      title: "Youth Leadership Summit",
      date: "15",
      month: "JAN",
      time: "10:00 AM",
      location: "Town Hall, Eruwa",
      description: "A gathering of young minds to discuss the future of leadership in our community.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Community Clean-up Day",
      date: "22",
      month: "JAN",
      time: "07:00 AM",
      location: "Eruwa Roundabout",
      description: "Join us as we work together to keep our environment clean and sustainable.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cultural Heritage Festival",
      date: "05",
      month: "FEB",
      time: "12:00 PM",
      location: "Obaseeku Hill",
      description: "Celebrating our rich history and traditions with music, dance, and art.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Tech Skills Workshop",
      date: "18",
      month: "FEB",
      time: "09:00 AM",
      location: "EYM Secretariat",
      description: "Free workshop on digital skills and programming for interested youths.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Calendar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Upcoming <span className="text-[#2B59C3]">Events</span>
            </h2>
          </div>
          
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-medium">
            View All Events <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-2 text-center min-w-15 shadow-lg">
                  <span className="block text-xl font-bold text-[#2B59C3]">{event.date}</span>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">{event.month}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="font-bold text-lg text-gray-900 mb-4 line-clamp-2 group-hover:text-[#2B59C3] transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Clock className="w-3.5 h-3.5 text-[#2B59C3]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#2B59C3]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                  {event.description}
                </p>
                
                <button className="w-full bg-gray-50 hover:bg-[#2B59C3] text-gray-700 hover:text-white py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
