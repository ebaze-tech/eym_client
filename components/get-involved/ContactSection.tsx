import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#0e4b68] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2B59C3]/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Where You Fit?
            </h2>
            
            <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Every contribution matters, regardless of size or type. If you&apos;re uncertain which pathway is right for you, or if you have a unique way to contribute that doesn&apos;t fit these categories, we&apos;d love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact"
                className="bg-white text-[#0e4b68] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-3 text-white/90 font-medium">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <span>Or call +234 800 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
