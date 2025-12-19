import React from 'react';
import type { Metadata } from "next";
import PartnerHero from '@/components/partner/PartnerHero';
import PartnerContent from '@/components/partner/PartnerContent';

export const metadata: Metadata = {
  title: "Partner With Us - EYM",
  description: "Collaborate with Eruwa Youth Movement to drive sustainable development in our community.",
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <PartnerHero />
      <PartnerContent />
    </main>
  );
}
