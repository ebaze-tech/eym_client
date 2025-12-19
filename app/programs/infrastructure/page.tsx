import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import InfrastructureHero from '@/components/programs/infrastructure/InfrastructureHero';
import InfrastructureContent from '@/components/programs/infrastructure/InfrastructureContent';

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InfrastructureHero />
      <InfrastructureContent />
      <CTA />
      <Footer />
    </main>
  );
}
