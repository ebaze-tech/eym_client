"use client";
import React, { useState } from "react";
import { Search, Eye, Download } from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { escapeCsvField } from "@/lib/csv";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export interface Partner {
  _id: string;
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  partnershipType: string;
  message: string;
  createdAt: string;
}

const partnersFetcher = async (url: string): Promise<Partner[]> => {
  const data = await fetcher(url);
  return (data as { data: Partner[] }).data || [];
};

export default function PartnersTable() {
  const { data, error, isLoading } = useSWR<Partner[]>("/all-partners", partnersFetcher);
  const partners: Partner[] = Array.isArray(data) ? data : [];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const filteredPartners = partners.filter(
    (partner) =>
      partner.organizationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = () => {
    const headers = ["Organization", "Contact Person", "Email", "Phone", "Type", "Message", "Date"];
    const csvContent = [
      headers.join(","),
      ...filteredPartners.map((p) =>
        [p.organizationName, p.contactPerson, p.email, p.phoneNumber, p.partnershipType, p.message, p.createdAt]
          .map(escapeCsvField)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "partners_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="p-6 text-center text-red-500">Failed to load partners.</div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-bold text-gray-900">
          Partnership Requests <span className="ml-2 text-sm font-normal text-gray-500">({filteredPartners.length})</span>
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative grow sm:grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search partners..."
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
              <th className="px-6 py-4">Organization</th>
              <th className="px-6 py-4">Contact Person</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredPartners.length > 0 ? (
              filteredPartners.map((partner) => (
                <tr key={partner._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{partner.organizationName}</td>
                  <td className="px-6 py-4">
                    <p>{partner.contactPerson}</p>
                    <p className="text-xs text-gray-500">{partner.email}</p>
                  </td>
                  <td className="px-6 py-4">{partner.partnershipType}</td>
                  <td className="px-6 py-4">{new Date(partner.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => setSelectedPartner(partner)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" aria-label="View Details">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">No partnership requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedPartner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPartner(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Partnership Details</h3>
            <div className="space-y-2">
              <p><strong>Organization:</strong> {selectedPartner.organizationName}</p>
              <p><strong>Contact Person:</strong> {selectedPartner.contactPerson}</p>
              <p><strong>Email:</strong> {selectedPartner.email}</p>
              <p><strong>Phone:</strong> {selectedPartner.phoneNumber}</p>
              <p><strong>Type:</strong> {selectedPartner.partnershipType}</p>
              <p><strong>Date:</strong> {new Date(selectedPartner.createdAt).toLocaleString()}</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="whitespace-pre-wrap">{selectedPartner.message}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setSelectedPartner(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
