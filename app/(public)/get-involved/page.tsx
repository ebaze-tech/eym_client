import React from 'react';
import GetInvolvedHero from '@/components/get-involved/GetInvolvedHero';
import BuildEruwa from '@/components/get-involved/BuildEruwa';
import InvolvementOptions from '@/components/get-involved/InvolvementOptions';
import ContactSection from '@/components/get-involved/ContactSection';

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-white">
      <GetInvolvedHero />
      <BuildEruwa />
      <InvolvementOptions />
      <ContactSection />
    </main>
  );
}
