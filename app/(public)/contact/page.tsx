import React from 'react';
import type { Metadata } from "next";
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us - EYM",
  description: "Get in touch with Eruwa Youth Movement.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
