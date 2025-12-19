import React from 'react';
import MembersTable from '@/components/admin/MembersTable';

export default function RequestsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Membership Requests</h1>
        <p className="text-gray-600">Manage pending applications and new sign-ups.</p>
      </div>
      
      {/* Reusing MembersTable for now, but in a real app this would filter for 'Pending' status */}
      <MembersTable statusFilter="Pending" />
    </div>
  );
}