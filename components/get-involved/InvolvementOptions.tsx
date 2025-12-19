import React from 'react';
import Link from 'next/link';
import { Shield, Users, ArrowRight, Heart, Handshake } from 'lucide-react';

const options = [
  {
    icon: Shield,
    title: 'Membership',
    description: "As an EYM member, you become part of Eruwa's official development engine. Receive voting rights, participate in project planning, access exclusive updates, and directly influence our community's direction.",
    linkText: 'Become a Member',
    href: '/membership'
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: "Your skills can build Eruwa's future. Whether you're a professional, student, or community enthusiast, we have opportunities matching various expertise levels and time commitments.",
    linkText: 'Volunteer Now',
    href: '/volunteer'
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: "Join forces with EYM for sustainable community development. We seek strategic partnerships with organizations, businesses, and institutions sharing our vision for Eruwa's progress.",
    linkText: 'Become a Partner',
    href: '/partner'
  },
  {
    icon: Heart,
    title: 'Donate',
    description: "Your financial contribution directly builds roads, supports scholarships, renovates community halls, and funds youth empowerment programs. Every Naira makes a measurable impact in Eruwa.",
    linkText: 'Donate Today',
    href: '/donate'
  }
];

export default function InvolvementOptions() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Opportunities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ways to <span className="text-[#2B59C3]">Contribute</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-[#2B59C3] group-hover:bg-[#2B59C3] group-hover:text-white transition-colors duration-300">
                <option.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {option.description}
              </p>
              
              <Link 
                href={option.href}
                className="inline-flex items-center text-[#2B59C3] font-bold hover:text-[#1a45a3] transition-colors group/link"
              >
                {option.linkText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
