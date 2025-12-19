import React from 'react';
import type { Metadata } from "next";
import EruwaHero from '@/components/eruwa/EruwaHero';
import EruwaIntro from '@/components/eruwa/EruwaIntro';
import SignificantPlaces from '@/components/eruwa/SignificantPlaces';
import CulturalHeritage from '@/components/eruwa/CulturalHeritage';
import PastLeaders from '@/components/eruwa/PastLeaders';
import EruwaGallery from '@/components/eruwa/EruwaGallery';

export const metadata: Metadata = {
  title: "Eruwa at a Glance - EYM",
  description: "Discover the rich history, culture, and heritage of Eruwa.",
};

export default function EruwaAtAGlancePage() {
  return (
    <main>
      <EruwaHero />
      <EruwaIntro />
      <SignificantPlaces />
      <CulturalHeritage />
      <PastLeaders />
      <EruwaGallery />
    </main>
  );
}
