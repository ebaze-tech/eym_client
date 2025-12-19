import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";

export default function Team() {
  const leaders = [
    {
      name: "HRM Oba Samuel Adebayo",
      title: "Eleruwa of Eruwa",
      image: "/assets/images/oba.png",
      large: true,
    },
    {
      name: "Olorunniyi Bukunmi",
      title: "National President",
      image: "/assets/images/national_president.png",
      large: true,
    },
  ];

  const members = [
    {
      name: "Com. Adegoke Adewole",
      title: "Vice President",
      image: "/assets/images/vice_president.png",
    },
    {
      name: "Ridwanlahi Adedeji",
      title: "Secretary General",
      image: "/assets/images/secgen.png",
    },
    {
      name: "Amuda Yusuf",
      title: "Assistant General Secretary",
      image: "/assets/images/asst_secgen.png",
    },
    {
      name: "Idowu Olalere",
      title: "Director of Treasury",
      image: "/assets/images/director_of_treasury.png",
    },
    {
      name: "Com. Ojerinde Yusuf",
      title: "Financial Secretary",
      image: "/assets/images/finsec.png",
    },
    {
      name: "Adebowale Toheeb",
      title: "PRO II",
      image: "/assets/images/pro2.png",
    },
    {
      name: "Oluwafemi Oladimeji",
      title: "Publicity Secretary I",
      image:
        "/assets/images/tochukwu.png",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-[#2B59C3]" />
            </div>
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest">
              Our People
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet The Leadership
          </h2>
          <p className="text-gray-500 text-lg">
            Dedicated individuals committed to serving the Eruwa community with
            integrity and vision.
          </p>
        </div>

        {/* Top Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center group">
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 bg-gray-100 shadow-lg relative">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-[#2B59C3] font-bold text-sm uppercase tracking-wider mb-2">
                {leader.title}
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {leader.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Other Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="text-center group bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="aspect-square rounded-full overflow-hidden mb-6 bg-gray-200 mx-auto w-32 h-32 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#2B59C3] transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
