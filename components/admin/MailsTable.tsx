"use client";
import React, { useState } from "react";
import { Search, Eye, Download } from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export interface Mail {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

const mailsFetcher = (url: string) =>
  fetcher(url).then((data) => (data as { data: Mail[] }).data || []);

export default function MailsTable() {
  const { data, error, isLoading } = useSWR("/all-mails", mailsFetcher);
  const mails: Mail[] = data || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMail, setSelectedMail] = useState<Mail | null>(null);

  const filteredMails = mails.filter(
    (mail) =>
      mail.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = () => {
    const headers = ["First Name", "Last Name", "Email", "Phone", "Subject", "Message", "Date"];
    const csvContent = [
      headers.join(","),
      ...filteredMails.map((m) =>
        [m.firstName, m.lastName, m.email, m.phone, m.subject, m.message, m.createdAt]
          .map((field) => `"${field}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "mails_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) return <div className="p-6 text-center">Loading mails...</div>;
  if (error) return <div className="p-6 text-center text-red-500">Failed to load mails.</div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-bold text-gray-900">
          Contact Messages <span className="ml-2 text-sm font-normal text-gray-500">({filteredMails.length})</span>
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative grow sm:grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search mails..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
          <button onClick={handleDownload} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-200" title="Download CSV">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-900 font-bold uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredMails.length > 0 ? (
              filteredMails.map((mail) => (
                <tr key={mail._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{mail.firstName} {mail.lastName}</td>
                  <td className="px-6 py-4">{mail.email}</td>
                  <td className="px-6 py-4">{mail.subject}</td>
                  <td className="px-6 py-4">{new Date(mail.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => setSelectedMail(mail)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">No messages found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedMail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMail(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Message Details</h3>
            <div className="space-y-2">
              <p><strong>From:</strong> {selectedMail.firstName} {selectedMail.lastName}</p>
              <p><strong>Email:</strong> {selectedMail.email}</p>
              <p><strong>Phone:</strong> {selectedMail.phone}</p>
              <p><strong>Subject:</strong> {selectedMail.subject}</p>
              <p><strong>Date:</strong> {new Date(selectedMail.createdAt).toLocaleString()}</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="whitespace-pre-wrap">{selectedMail.message}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setSelectedMail(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
