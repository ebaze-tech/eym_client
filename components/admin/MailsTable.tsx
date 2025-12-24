"use client";
import React, { useState } from "react";
import { Search, Eye, Download, X, User, Mail as MailIcon, Phone, Calendar, MessageSquare } from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { escapeCsvField } from "@/lib/csv";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

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

const mailsFetcher = async (url: string): Promise<Mail[]> => {
  const data = await fetcher(url);
  return (data as { data: Mail[] }).data || [];
};

export default function MailsTable() {
  const { data, error, isLoading } = useSWR<Mail[]>("/all-mails", mailsFetcher);
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
          .map(escapeCsvField)
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

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="p-6 text-center text-red-500">Failed to load mails.</div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-bold text-gray-900">
          Inbox <span className="ml-2 text-sm font-normal text-gray-500">({filteredMails.length})</span>
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative grow sm:grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search messages..."
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
              <th className="px-6 py-4">From</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredMails.length > 0 ? (
              filteredMails.map((mail) => (
                <tr key={mail._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{mail.firstName} {mail.lastName}</div>
                    <div className="text-xs text-gray-500">{mail.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 truncate max-w-xs">{mail.subject}</div>
                    <div className="text-xs text-gray-500 truncate max-w-xs">{mail.message}</div>
                  </td>
                  <td className="px-6 py-4">{new Date(mail.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => setSelectedMail(mail)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" aria-label="View Details">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">No messages found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedMail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setSelectedMail(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">Message Details</h3>
              <button onClick={() => setSelectedMail(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors" aria-label="Close">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Sender</p>
                      <p className="font-medium text-gray-900">{selectedMail.firstName} {selectedMail.lastName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${selectedMail.email}`} className="font-medium text-blue-600 hover:underline">{selectedMail.email}</a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-gray-900">{selectedMail.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date Received</p>
                      <p className="font-medium text-gray-900">{new Date(selectedMail.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  {selectedMail.subject}
                </div>
                <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
                  {selectedMail.message}
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedMail(null)} 
                className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <a 
                href={`mailto:${selectedMail.email}`}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
