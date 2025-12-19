import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function LeadershipContent() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg prose-blue mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
            Rooted in Royalty, Rising Through Unity
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Leadership is not merely a role—it is a responsibility, a skill, and a cornerstone of community progress. In Eruwa, where history was shaped by visionary rulers and communal unity, leadership is both our heritage and our horizon. Our Leadership Development Program is designed to identify, nurture, and empower the next generation of Eruwa’s stewards—equipping them with the values, tools, and vision to guide our community with integrity, innovation, and heart.
          </p>

          <div className="bg-blue-50 p-8 rounded-2xl my-12 border-l-4 border-[#2B59C3]">
            <h3 className="text-2xl font-bold text-[#0e4b68] mb-4 mt-0">Our Vision</h3>
            <p className="text-gray-700 text-lg m-0">
              To create a continuous pipeline of ethical, capable, and community-rooted leaders who will sustain Eruwa’s growth, honor its past, and fearlessly shape its future.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-8">
            Program Pillars
          </h3>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#2B59C3] font-bold">1</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Traditional Leadership & Governance</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Understanding Eruwa’s royal history and chieftaincy systems</li>
                  <li>Lessons in mediation, community representation, and cultural stewardship</li>
                  <li>Interface between traditional institutions and modern governance</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#2B59C3] font-bold">2</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Youth Leadership & Mobilization</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Training in project management, teamwork, and community mobilization</li>
                  <li>Real-world projects (e.g., road repairs, sanitation drives, youth forums)</li>
                  <li>Public speaking, advocacy, and digital leadership</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#2B59C3] font-bold">3</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Women in Leadership</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Empowering women as decision-makers and community caretakers</li>
                  <li>Skills in micro-governance, education advocacy, and health outreach</li>
                  <li>Creating platforms for women’s voices in quarter and town meetings</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#2B59C3] font-bold">4</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ethical & Servant Leadership</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Rooting leadership in service, not power</li>
                  <li>Modules on transparency, accountability, and community trust</li>
                  <li>Case studies from Eruwa’s own leaders—past and present</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">
            Who This Program Is For
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Emerging youth leaders from Eruwa’s quarters",
              "Aspiring Baales and community titleholders",
              "Women active in community welfare",
              "Students and professionals eager to give back",
              "Anyone committed to Eruwa’s progress"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
