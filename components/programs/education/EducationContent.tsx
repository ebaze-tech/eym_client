import React from 'react';

export default function EducationContent() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg prose-blue mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
            Rooted in Royalty, Rising Through Unity
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
            Introduction:
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            The future of Eruwa rests in the hands of its youth. Inspired by the courageous legacy of young Olaribikusi, who carried a crown and founded a dynasty, today's young people are called to build, innovate, and lead. Our Youth Development Program provides the platform, training, and opportunities for Eruwa's youth to grow into capable, ethical, and engaged citizens—ready to honor the past while forging a new path forward.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">
            Program Pillars
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">1. Education & Scholarship Support</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
                <li>Tutoring and exam preparation for secondary school students</li>
                <li>Scholarship linkages for tertiary education</li>
                <li>Digital literacy and e-learning access</li>
                <li>Career guidance and counseling</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">2. Skills & Talent Development</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
                <li>Vocational training aligned with market needs</li>
                <li>Creative arts, sports, and cultural talent promotion</li>
                <li>Tech and innovation hubs (coding, digital design, media)</li>
                <li>Public speaking and leadership workshops</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">3. Civic Engagement & Volunteerism</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
                <li>Quarterly community service projects (e.g., road repairs, sanitation)</li>
                <li>Youth parliaments and debate clubs</li>
                <li>Environmental stewardship initiatives</li>
                <li>Heritage and cultural awareness programs</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">4. Mental Health & Wellbeing</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
                <li>Safe spaces for dialogue and expression</li>
                <li>Mentorship programs with positive role models</li>
                <li>Life skills and resilience building</li>
                <li>Anti-drug and healthy lifestyle campaigns</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">
            Who This Program Serves
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
            <li>Secondary school students</li>
            <li>Tertiary students and graduates</li>
            <li>Out-of-school youth seeking skills</li>
            <li>Young artists, athletes, and creatives</li>
            <li>Youth leaders and volunteers</li>
          </ul>

        </div>
      </div>
    </section>
  );
}
