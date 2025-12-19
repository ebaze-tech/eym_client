import React from 'react';
import type { Metadata } from "next";
import VolunteerHero from '@/components/volunteer/VolunteerHero';
import VolunteerForm from '@/components/volunteer/VolunteerForm';

export const metadata: Metadata = {
  title: "Volunteer - EYM",
  description: "Volunteer with Eruwa Youth Movement and contribute your skills to our community.",
};

export default function VolunteerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <VolunteerHero />
      <VolunteerForm />
    </main>
  );
}
