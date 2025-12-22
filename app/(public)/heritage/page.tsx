import React from 'react';
import HeritageHero from '@/components/heritage/HeritageHero';
import HeritageGrid from '@/components/heritage/HeritageGrid';

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeritageHero />
      <HeritageGrid />
    </main>
  );
}
