import React from 'react';
import type { Metadata } from "next";
import LoginForm from '@/components/admin/LoginForm';

export const metadata: Metadata = {
  title: "Admin Login - EYM",
  description: "Restricted access for Eruwa Youth Movement administrators.",
};

export default function AdminLoginPage() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}