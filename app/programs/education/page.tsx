import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import EducationHero from '@/components/programs/education/EducationHero';
import EducationContent from '@/components/programs/education/EducationContent';

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EducationHero />
      <EducationContent />
      <CTA />
      <Footer />
    </main>
  );
}
