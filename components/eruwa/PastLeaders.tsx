import React from 'react';
import { Crown } from 'lucide-react';

const leaders = [
  "OBASEEKU (ODODO BABA EWU)",
  "OLARIBIKUSI I",
  "Olasubu-Akangbe Osin",
  "GBAJUMOLA I-AFASAN",
  "SABI - AYINLA EDU",
  "OLURIN-IYANDA AGAN",
  "OMONI-ALADE EFON",
  "SANGOTOLA I",
  "BANKOLE- AKANGBE AGAN",
  "AJAO OTI",
  "BAMBEKE ALABI AGAN",
  "FASINA AKINDELE",
  "ADEGBOYE 1947 - 1959",
  "SOLOMON OLANREWAJU OLARIBIKUSI II",
  "BOLANLE OLANIYAN GBAJUMOLA II",
  "SAMUEL ADEBAYO ADEGBOLA- AKINDELE I (JULY 16, 1998 - TILL DATE)"
];

export default function PastLeaders() {
  return (
    <section className="py-24 bg-[#0e4b68] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-size-[40px_40px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Crown className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Names of Past Eleruwa</h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Honoring the lineage of leadership that has guided Eruwa through generations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
          <ol className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6">
            {leaders.map((leader, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-300 font-bold text-sm border border-blue-400/30 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {index + 1}
                </span>
                <span className="text-lg font-medium text-gray-100 group-hover:text-white transition-colors py-0.5">
                  {leader}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
