import React from 'react';
import MembersTable from '@/components/admin/MembersTable';

export default function MembersPage() {
  return (
    <div>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Members Directory</h1>
          <p className="text-gray-600">View and manage all registered members.</p>
        </div>
      </div>
      
      <MembersTable />
    </div>
  );
}