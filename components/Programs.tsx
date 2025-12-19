import React from 'react';
import { ArrowRight, Users, Lightbulb, GraduationCap, Building2 } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Equipping Eruwa's youth with the skills, platforms, and values to become effective community leaders and responsible stakeholders in local governance."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Entrepreneurship",
      description: "Fostering innovation, supporting small businesses, and creating sustainable livelihoods to build a resilient local economy for Eruwa."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education & Youth",
      description: "Advocating for democratic governance and human rights as critical components of sustainable development and lasting peace."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Building and enhancing the physical and social foundations of Eruwa through tangible projects, from roads and halls to social outreach programs."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-500 text-lg">
            Our areas of concern and responsibility, dedicated to the holistic development of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-900 text-white p-10 rounded-3xl group hover:bg-[#2B59C3] transition-all duration-500 flex flex-col justify-between min-h-75 relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 capitalize tracking-tight">{program.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8 group-hover:text-blue-100 transition-colors">
                  {program.description}
                </p>
              </div>
              
              <div className="relative z-10">
                <button aria-label={`Learn more about ${program.title}`} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
