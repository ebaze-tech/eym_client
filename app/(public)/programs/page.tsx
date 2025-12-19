import React from 'react';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsIntro from '@/components/programs/ProgramsIntro';
import ProgramPillars from '@/components/programs/ProgramPillars';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgramsHero />
      <ProgramsIntro />
      <ProgramPillars />
    </main>
  );
}
