import React from 'react';
import MailsTable from '@/components/admin/MailsTable';

export default function MailsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
        <p className="text-gray-600">View and manage inquiries from the contact form.</p>
      </div>
      <MailsTable />
    </div>
  );
}
