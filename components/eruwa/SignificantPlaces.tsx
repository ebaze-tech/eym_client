import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const places = [
  {
    title: "Eleruwa Palace",
    description: "The seat of traditional power and heritage, housing centuries of royal history and cultural artifacts.",
    image: "/assets/images/Eleruwa_Palace.jpeg"
  },
  {
    title: "Town Hall",
    description: "A central gathering place for community decisions, celebrations, and unity among the people of Eruwa.",
    image: "/assets/images/atAGlance.png"
  },
  {
    title: "Community Centre",
    description: "The hub of youth activities, development programs, and social engagement for the future generation.",
    image: "/assets/images/atAGlance.png"
  },
  {
    title: "Ibarapa East LG Secretariat",
    description: "The administrative headquarters facilitating local governance and community development initiatives.",
    image: "/assets/images/Secretariat.jpeg"
  },
  {
    title: "Adeseun Ogundoyin Polytechnic",
    description: "A premier institution of higher learning fostering academic excellence and technological advancement.",
    image: "/assets/images/Adeseun_Ogundoyin_Polytechnic.jpeg"
  },
  {
    title: "Eleruwa Stadium",
    description: "The center for sports and recreational activities, nurturing local talent and hosting major events.",
    image: "/assets/images/Eleruwa_Stadium.jpeg"
  },
  {
    title: "Eruwa New Motor Park",
    description: "A key transportation hub connecting Eruwa to neighboring towns and cities, driving commerce and mobility.",
    image: "/assets/images/Eruwa New-Motor Park.jpeg"
  }
];

export default function SignificantPlaces() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Significant Places</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the landmarks that define our history and community spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={place.image} 
                  alt={place.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {place.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
