import React from 'react';
import type { Metadata } from "next";
import MemberStats from '@/components/admin/MemberStats';
import MembersTable from '@/components/admin/MembersTable';

export const metadata: Metadata = {
  title: "Admin Dashboard - EYM",
  description: "Overview of Eruwa Youth Movement activities and members.",
};

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
      </div>
      
      <MemberStats />
      <MembersTable limit={5} />
    </div>
  );
}