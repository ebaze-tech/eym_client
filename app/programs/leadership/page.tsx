import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import LeadershipHero from '@/components/programs/leadership/LeadershipHero';
import LeadershipContent from '@/components/programs/leadership/LeadershipContent';

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <LeadershipHero />
      <LeadershipContent />
      <CTA />
      <Footer />
    </main>
  );
}
