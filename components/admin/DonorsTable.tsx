"use client";
import React, { useState } from "react";
import { Search, Eye, Download } from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export interface Donor {
  _id: string;
  fullName: string;
  email: string;
  amount: string;
  reference: string;
  message: string;
  createdAt: string;
}

const donorsFetcher = (url: string) =>
  fetcher(url).then((data) => (data as { data: Donor[] }).data || []);

export default function DonorsTable() {
  const { data, error, isLoading } = useSWR<Donor[]>("/all-donors", donorsFetcher);
  const donors: Donor[] = data || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);

  const filteredDonors = donors.filter(
    (donor) =>
      donor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = () => {
    const headers = ["Full Name", "Email", "Amount", "Reference", "Message", "Date"];
    const csvContent = [
      headers.join(","),
      ...filteredDonors.map((d) =>
        [d.fullName, d.email, d.amount, d.reference, d.message, d.createdAt]
          .map((field) => `"${field}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "donors_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) return <div className="p-6 text-center">Loading donors...</div>;
  if (error) return <div className="p-6 text-center text-red-500">Failed to load donors.</div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-bold text-gray-900">
          Donation Records <span className="ml-2 text-sm font-normal text-gray-500">({filteredDonors.length})</span>
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative grow sm:grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search donors..."
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
              <th className="px-6 py-4">Full Name</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Reference</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredDonors.length > 0 ? (
              filteredDonors.map((donor) => (
                <tr key={donor._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {donor.fullName}
                    <p className="text-xs text-gray-500 font-normal">{donor.email}</p>
                  </td>
                  <td className="px-6 py-4 font-bold text-green-600">₦{Number(donor.amount).toLocaleString()}</td>
                  <td className="px-6 py-4 font-mono text-xs">{donor.reference}</td>
                  <td className="px-6 py-4">{new Date(donor.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => setSelectedDonor(donor)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">No donation records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedDonor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDonor(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Donation Details</h3>
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedDonor.fullName}</p>
              <p><strong>Email:</strong> {selectedDonor.email}</p>
              <p><strong>Amount:</strong> ₦{Number(selectedDonor.amount).toLocaleString()}</p>
              <p><strong>Reference:</strong> {selectedDonor.reference}</p>
              <p><strong>Date:</strong> {new Date(selectedDonor.createdAt).toLocaleString()}</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="whitespace-pre-wrap">{selectedDonor.message}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setSelectedDonor(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
