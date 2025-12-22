import React from 'react';
import type { Metadata } from "next";
import FullHistory from '@/components/eruwa/FullHistory';

export const metadata: Metadata = {
  title: "History of Eruwa - EYM",
  description: "A deep dive into the royal roots, unbroken honour, and historic resilience of Eruwa.",
};

export default function HistoryPage() {
  return <FullHistory />;
}
