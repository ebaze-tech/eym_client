import React from 'react';
import Image from 'next/image';

export default function EducationHero() {
  const images = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", // Classroom
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", // Students
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", // Books
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop", // Graduation
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", // Learning
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", // School
  ];

  return (
    <section className="relative bg-white pb-32">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 h-[50vh] md:h-[70vh] w-full">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Education ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Overlay Box */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/4 flex items-center justify-center px-4 z-20">
        <div className="bg-[#2B59C3] p-8 md:p-12 max-w-4xl w-full text-center text-white rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            EDUCATION PROGRAM
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-light text-blue-50">
            Our Youth Development Program shapes tomorrow&apos;s leaders today through education, skills, mentorship, and civic engagement—empowering young people to drive Eruwa&apos;s progress with confidence, creativity, and community pride.
          </p>
        </div>
      </div>
    </section>
  );
}
