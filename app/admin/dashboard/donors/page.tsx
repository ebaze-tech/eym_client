import React from 'react';
import DonorsTable from '@/components/admin/DonorsTable';

export default function DonorsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Donation Records</h1>
        <p className="text-gray-600">Track donations and financial contributions.</p>
      </div>
      <DonorsTable />
    </div>
  );
}
