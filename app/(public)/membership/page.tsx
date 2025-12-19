import React from 'react';
import type { Metadata } from "next";
import MembershipHero from '@/components/membership/MembershipHero';
import MembershipForm from '@/components/membership/MembershipForm';

export const metadata: Metadata = {
  title: "Become a Member - EYM",
  description: "Join the Eruwa Youth Movement and contribute to our community's development.",
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <MembershipHero />
      <MembershipForm />
    </main>
  );
}