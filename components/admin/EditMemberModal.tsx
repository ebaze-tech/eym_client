"use client";
import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

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

interface EditMemberModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedMember: Member) => void;
}

export default function EditMemberModal({ member, isOpen, onClose, onSave }: EditMemberModalProps) {
  if (!isOpen) return null;

  return (
    <MemberForm
      key={member ? member.id : 'new'}
      member={member}
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    />
  );
}

function MemberForm({ member, onClose, onSave }: EditMemberModalProps) {
  const initialFormState: Member = {
    id: 0,
    fullName: '',
    gender: '',
    dateOfBirth: '',
    religion: '',
    phoneNumber: '',
    residentialAddress: '',
    town: '',
    city: '',
    country: '',
    compound: '',
    quarter: '',
    occupation: '',
    status: 'Active',
    joinedDate: new Date().toISOString().split('T')[0]
  };

  const [formData, setFormData] = useState<Member>(() => {
    if (member) {
      return member;
    } else {
      return {
        ...initialFormState,
        id: Date.now(), // Temporary ID generation
      };
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">{member ? 'Edit Member' : 'Add New Member'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close modal">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-bold text-gray-700">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-bold text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="dateOfBirth" className="block text-sm font-bold text-gray-700">Date of Birth</label>
              <input
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="religion" className="block text-sm font-bold text-gray-700">Religion</label>
              <select
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Religion</option>
                <option value="Christianity">Christianity</option>
                <option value="Islam">Islam</option>
                <option value="Traditional">Traditional</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700">Phone Number</label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="occupation" className="block text-sm font-bold text-gray-700">Occupation</label>
              <input
                id="occupation"
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="residentialAddress" className="block text-sm font-bold text-gray-700">Residential Address</label>
              <input
                id="residentialAddress"
                type="text"
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="town" className="block text-sm font-bold text-gray-700">Town</label>
              <input
                id="town"
                type="text"
                name="town"
                value={formData.town}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-bold text-gray-700">City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-bold text-gray-700">Country</label>
              <input
                id="country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="compound" className="block text-sm font-bold text-gray-700">Compound</label>
              <input
                id="compound"
                type="text"
                name="compound"
                value={formData.compound}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quarter" className="block text-sm font-bold text-gray-700">Quarter</label>
              <input
                id="quarter"
                type="text"
                name="quarter"
                value={formData.quarter}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="status" className="block text-sm font-bold text-gray-700">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-6 py-3 bg-[#2B59C3] text-white font-bold rounded-xl hover:bg-[#1a45a3] transition-colors flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}