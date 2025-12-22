"use client";
import React, { useState, useEffect } from "react";
import {
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Download,
} from "lucide-react";
import useSWR from "swr";
import MemberDetailModal from "./MemberDetailModal";
import EditMemberModal from "./EditMemberModal";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
interface Member {
  id: string | number;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  religion: string;
  phoneNumber: string;
  residentialAddress: string;
  town: string;
  city: string;
  country: string;
  compound: string;
  quarter: string;
  occupation: string;
  status: string;
  joinedDate: string;
}

interface ApiUser {
  _id: string;
  fullName: string;
  // firstName: string;
  // lastName: string;
  phoneNumber: string;
  status: string;
  joinedDate?: string;
  gender: string;
  dateOfBirth: string;
  religion: string;
  residentialAddress: string;
  town: string;
  city: string;
  country: string;
  compound: string;
  quarter: string;
  occupation: string;
  createdAt: string;
}

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch members");
      }
      return res.json();
    })
    .then((data) => {
      const users = data.data || [];

      return users.map((user: ApiUser) => ({
        id: user._id,
        fullName: user.fullName,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        religion: user.religion,
        phoneNumber: user.phoneNumber,
        residentialAddress: user.residentialAddress,
        town: user.town,
        city: user.city,
        country: user.country,
        compound: user.compound,
        quarter: user.quarter,
        occupation: user.occupation,
        status:
          user.status === "approved"
            ? "Active"
            : user.status === "rejected"
            ? "Rejected"
            : user.status,
        joinedDate: user.createdAt
          ? user.createdAt.split("T")[0]
          : new Date().toISOString().split("T")[0],
      }));
    });

export default function MembersTable({
  statusFilter,
}: {
  statusFilter?: string;
}) {
  const { data, error, isLoading, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/all-registrations`,
    fetcher
  );
  const members: Member[] = data || [];
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleView = (member: Member) => {
    setSelectedMember(member);
    setIsDetailOpen(true);
  };

  const handleEdit = (member: Member) => {
    setSelectedMember(member);
    setIsEditOpen(true);
  };

  const handleAdd = () => {
    setSelectedMember(null);
    setIsEditOpen(true);
  };

  const handleDetailEdit = () => {
    setIsDetailOpen(false);
    setIsEditOpen(true);
  };

  const handleDelete = async (id: string | number) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this member? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const res = await fetch(
        `${NEXT_PUBLIC_API_URL}/delete-registration/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete member");
      }

      mutate();
    } catch (error) {
      console.error(error);
      alert("Failed to delete member. Please try again.");
    }
  };

  const handleSave = async (updatedMember: Member) => {
    const isNew = typeof updatedMember.id === "number";

    if (isNew) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/member-registration`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedMember),
          }
        );
        const data = await res.json();
        if (data.success) {
          mutate(); // Refresh data
          setIsEditOpen(false);
        } else {
          alert(data.message || "Failed to create member");
        }
      } catch (e) {
        console.error(e);
        alert("An error occurred while creating the member");
      }
    } else {
      // Existing logic for local update (since we don't have edit endpoint yet)
      const exists = members.some((m) => m.id === updatedMember.id);
      let newMembers;
      if (exists) {
        newMembers = members.map((m) =>
          m.id === updatedMember.id ? updatedMember : m
        );
      } else {
        newMembers = [updatedMember, ...members];
      }
      mutate(newMembers, false);
      setIsEditOpen(false);
    }
  };

  // Add this function inside MembersTable
  const handleReject = async (id: string | number) => {
    if (
      !window.confirm(
        "Are you sure you want to reject this member? This action cannot be undone."
      )
    )
      return;

    try {
      const res = await fetch(
        `${NEXT_PUBLIC_API_URL}/membership-application/${id}/reject`,
        {
          method: "POST", // or PUT depending on your backend
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to reject member");
      }

      // Optimistically update the status in the table
      const newMembers = members.map((m) =>
        m.id === id ? { ...m, status: "rejected" } : m
      );
      mutate(newMembers, false); // false = don't re-fetch immediately
    } catch (error) {
      console.error(error);
      alert("Failed to reject member. Please try again.");
    }
  };

  const handleDownload = () => {
    const headers = [
      "Full Name",
      "Gender",
      "Phone",
      "Occupation",
      "Status",
      "Joined Date",
    ];
    const csvContent = [
      headers.join(","),
      ...filteredMembers.map((m) =>
        [
          m.fullName,
          m.gender,
          m.phoneNumber,
          m.occupation,
          m.status,
          m.joinedDate,
        ]
          .map((field) => `"${field}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "members_export.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phoneNumber.includes(searchTerm) ||
      member.occupation.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter ? member.status === statusFilter : true;

    return matchesSearch && matchesStatus;
  });

  if (error)
    return (
      <div className="p-6 text-center text-red-500">
        Failed to load members.
      </div>
    );
  if (isLoading)
    return (
      <div className="p-6 text-center text-gray-500">Loading members...</div>
    );

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-lg font-bold text-gray-900">
            {statusFilter ? `${statusFilter} Members` : "All Members"}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({filteredMembers.length})
            </span>
          </h2>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative grow sm:grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
              />
            </div>
            <button
              onClick={handleDownload}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-200"
              title="Download CSV"
            >
              <Download className="w-4 h-4" />
            </button>
            {statusFilter !== "Pending" && (
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 bg-[#2B59C3] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#1a45a3] transition-colors shadow-lg shadow-blue-900/20 text-sm"
              >
                + Add Member
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-900 font-bold uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Occupation</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2B59C3] font-bold text-xs">
                          {member.fullName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">
                            {member.fullName}
                          </p>
                          <p className="text-xs text-gray-500">
                            {member.gender}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p>{member.phoneNumber}</p>
                      <p className="text-xs text-gray-500">
                        {member.joinedDate}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{member.town}</p>
                      <p className="text-xs text-gray-500">{member.compound}</p>
                    </td>
                    <td className="px-6 py-4">{member.occupation}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          member.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleView(member)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(member)}
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(member.id)}
                          className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(member.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No members found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <MemberDetailModal
        member={selectedMember}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onEdit={handleDetailEdit}
      />

      <EditMemberModal
        member={selectedMember}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
