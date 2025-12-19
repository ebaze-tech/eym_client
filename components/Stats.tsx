import React from 'react';
import { Clock, Banknote, Shield, Star, Users, Briefcase } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-[#2B59C3]" />,
      title: "60+ Years",
      description: "Of dedicated service to the Eruwa community, fostering growth and unity across generations."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#2B59C3]" />,
      title: "20+ Projects",
      description: "Successfully completed infrastructure, educational, and social development projects."
    },
    {
      icon: <Users className="w-8 h-8 text-[#2B59C3]" />,
      title: "5,000+ Lives Impacted",
      description: "Directly improving the quality of life for thousands of residents through our initiatives."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
             <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
             <span className="text-[#2B59C3] font-bold text-xs uppercase tracking-widest">Why Join Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why We Are The Best At <br className="hidden md:block" /> What We Do
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            Our track record speaks for itself. We are committed to sustainable development through transparent, community-driven initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left group">
              <div className="mb-6 p-4 bg-blue-50 rounded-xl inline-block group-hover:bg-[#2B59C3] transition-colors duration-300">
                {React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-[#2B59C3] group-hover:text-white transition-colors duration-300" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2B59C3] transition-colors">{stat.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
