import React from 'react';
import { X, MapPin, Briefcase, Calendar, Phone, User, Globe, Loader2 } from 'lucide-react';
import useSWR from 'swr';

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

interface MemberDetailModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json()).then(data => {
  if (!data.success) throw new Error(data.message);
  const user = data.data;
  return {
    ...user,
    id: user._id,
    status: user.status === 'approved' ? 'Active' : (user.status === 'unapproved' ? 'Pending' : user.status),
    joinedDate: user.joinedDate || new Date().toISOString().split('T')[0]
  };
});

export default function MemberDetailModal({ member: initialMember, isOpen, onClose, onEdit }: MemberDetailModalProps) {
  const { data: fetchedMember, error, isLoading } = useSWR(
    isOpen && initialMember?.id ? `${process.env.NEXT_PUBLIC_API_URL}/all-registrations/${initialMember.id}` : null,
    fetcher
  );

  const member = fetchedMember || initialMember;

  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">Member Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close modal">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {isLoading ? (
          <div className="p-12 flex flex-col items-center justify-center text-gray-500">
            <Loader2 className="w-8 h-8 animate-spin mb-2 text-[#2B59C3]" />
            <p>Loading member details...</p>
          </div>
        ) : error ? (
          <div className="p-12 text-center text-red-500">
            <p>Failed to load member details.</p>
            <p className="text-sm mt-2 text-gray-400">{error.message}</p>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-[#2B59C3] text-3xl font-bold">
                {member.fullName?.charAt(0)}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{member.fullName}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {member.status}
                  </span>
                  <span className="text-gray-500 text-sm">Joined {member.joinedDate}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Personal Info</h4>
                
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium text-gray-900">{member.gender}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium text-gray-900">{member.dateOfBirth}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Religion</p>
                    <p className="font-medium text-gray-900">{member.religion}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Contact & Work</h4>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-medium text-gray-900">{member.phoneNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Occupation</p>
                  <p className="font-medium text-gray-900">{member.occupation}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:col-span-2">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Address Details</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Residential Address</p>
                    <p className="font-medium text-gray-900">{member.residentialAddress}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Town / City</p>
                  <p className="font-medium text-gray-900">{member.town}, {member.city}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Compound / Quarter</p>
                  <p className="font-medium text-gray-900">{member.compound}, {member.quarter}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="font-medium text-gray-900">{member.country}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 p-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Close
          </button>
          <button 
            onClick={onEdit}
            className="px-6 py-2 bg-[#2B59C3] text-white rounded-lg font-medium hover:bg-[#1a45a3] transition-colors"
          >
            Edit Member
          </button>
        </div>
      </div>
    </div>
  );
}