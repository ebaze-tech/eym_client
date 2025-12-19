import React from 'react';
import Link from 'next/link';
import { Shield, Users, Heart, ArrowRight, Handshake, Coins } from 'lucide-react';

export default function CTA() {
  const cards = [
    {
      icon: <Shield className="w-6 h-6 text-[#2B59C3]" />,
      title: "Membership",
      description: "As an EYM member, you become part of Eruwa's official development engine. Receive voting rights, participate in project planning, and directly influence our community's direction.",
      link: "Join as a Member",
      href: "/membership"
    },
    {
      icon: <Users className="w-6 h-6 text-[#2B59C3]" />,
      title: "Volunteer",
      description: "Your skills can build Eruwa's future. Whether you're a professional, student, or community enthusiast, we have opportunities matching various expertise levels.",
      link: "Become a Volunteer",
      href: "/volunteer"
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#2B59C3]" />,
      title: "Partner With Us",
      description: "Join forces with EYM for sustainable community development. We seek strategic partnerships with organizations, businesses, and institutions sharing our vision.",
      link: "Become a Partner",
      href: "/partner"
    },
    {
      icon: <Coins className="w-6 h-6 text-[#2B59C3]" />,
      title: "Donate",
      description: "Your financial contribution directly builds roads, supports scholarships, renovates community halls, and funds youth empowerment programs. Every Naira counts.",
      link: "Make a Donation",
      href: "/donate"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-2 block">Get Involved</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Be Part Of The Change</h2>
          <p className="text-gray-600 text-lg">
            Be part of Eruwa&apos;s next chapter. Your energy, skills, and support fuel our community&apos;s progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm group-hover:bg-[#2B59C3] transition-colors duration-300 shrink-0">
                  {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-[#2B59C3] group-hover:text-white transition-colors duration-300" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 capitalize">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <Link href={card.href} className="text-[#2B59C3] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {card.link} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
