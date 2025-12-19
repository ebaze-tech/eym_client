import React from 'react';
import type { Metadata } from "next";
import DonateHero from '@/components/donate/DonateHero';
import DonateContent from '@/components/donate/DonateContent';

export const metadata: Metadata = {
  title: "Donate - EYM",
  description: "Support Eruwa Youth Movement with your financial contribution.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <DonateHero />
      <DonateContent />
    </main>
  );
}
