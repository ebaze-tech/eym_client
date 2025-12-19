import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Users, Lightbulb, GraduationCap } from 'lucide-react';

const pillars = [
  {
    title: 'Community & Infrastructure',
    description: 'We focus on building and enhancing the physical and social foundations of Eruwa. From road repairs and community hall renovations to establishing social outreach centers, our infrastructure projects are designed to improve the quality of life for all residents.',
    icon: <Building2 className="w-32 h-32 text-blue-100/20" />,
    link: '/programs/infrastructure',
    color: 'bg-[#0e4b68]'
  },
  {
    title: 'Leadership Development',
    description: 'Empowering the next generation of leaders. We provide platforms, mentorship, and training to equip Eruwa\'s youth with the skills and values needed to become effective stakeholders in local governance and community building.',
    icon: <Users className="w-32 h-32 text-blue-100/20" />,
    link: '/programs/leadership',
    color: 'bg-[#2B59C3]'
  },
  {
    title: 'Entrepreneurship & Economy',
    description: 'Fostering innovation and economic self-reliance. We support small businesses, provide vocational training, and create sustainable livelihood opportunities to build a resilient local economy that thrives on indigenous talent.',
    icon: <Lightbulb className="w-32 h-32 text-blue-100/20" />,
    link: '/programs/entrepreneurship',
    color: 'bg-[#0e4b68]'
  },
  {
    title: 'Education & Youth',
    description: 'Investing in minds and futures. We advocate for democratic governance, human rights, and quality education. Our programs include scholarships, career guidance, and workshops that prepare our youth for global opportunities.',
    icon: <GraduationCap className="w-32 h-32 text-blue-100/20" />,
    link: '/programs/education',
    color: 'bg-[#2B59C3]'
  }
];

export default function ProgramPillars() {
  return (
    <section className="pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <div key={index} className={`flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-100 group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Visual Side */}
              <div className="w-full md:w-5/12 bg-gray-100 relative overflow-hidden flex items-center justify-center p-10">
                 <div className="absolute inset-0 bg-gray-200/50" />
                 {/* Abstract Icon Background */}
                 <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(pillar.icon as React.ReactElement<{ className?: string }>, { className: "w-40 h-40 text-gray-400/30" })}
                 </div>
                 {/* Overlay Image (Optional - using icon for now for cleaner look) */}
                 <div className="absolute inset-0 bg-linear-to-br from-transparent to-black/5" />
              </div>

              {/* Content Side */}
              <div className={`w-full md:w-7/12 ${pillar.color} p-10 md:p-16 flex flex-col justify-center text-white relative overflow-hidden`}>
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 capitalize tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-blue-100 mb-10 text-lg leading-relaxed font-light">
                    {pillar.description}
                  </p>
                  <div>
                    <Link 
                      href={pillar.link}
                      className="inline-flex items-center gap-2 bg-white text-[#0e4b68] hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-white/20 hover:-translate-y-1"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
