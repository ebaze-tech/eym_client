import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import EntrepreneurshipHero from '@/components/programs/entrepreneurship/EntrepreneurshipHero';
import EntrepreneurshipContent from '@/components/programs/entrepreneurship/EntrepreneurshipContent';

export default function EntrepreneurshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EntrepreneurshipHero />
      <EntrepreneurshipContent />
      <CTA />
      <Footer />
    </main>
  );
}
