import React from 'react';
import PartnersTable from '@/components/admin/PartnersTable';

export default function PartnersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Partnership Requests</h1>
        <p className="text-gray-600">Review partnership and sponsorship proposals.</p>
      </div>
      <PartnersTable />
    </div>
  );
}
