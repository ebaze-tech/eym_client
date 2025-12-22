import React from 'react';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}
