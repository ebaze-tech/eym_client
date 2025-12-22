"use client";
import React from 'react';
import { Users, UserCheck, Handshake, CreditCard } from 'lucide-react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Member } from './MembersTable';

export default function MemberStats() {
  const { data: membersData } = useSWR('/all-registrations', fetcher);
  const { data: partnersData } = useSWR('/all-partners', fetcher);
  const { data: donorsData } = useSWR('/all-donors', fetcher);

  const members = membersData?.data || [];
  const partners = partnersData?.data || [];
  const donors = donorsData?.data || [];

  const totalMembers = members.length;
  const activeMembers = members.filter((m: Member) => m.status === 'approved' || m.status === 'Active').length;
  
  const stats = [
    {
      title: "Total Members",
      value: totalMembers.toLocaleString(),
      change: "Registered",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Active Members",
      value: activeMembers.toLocaleString(),
      change: "Approved",
      icon: UserCheck,
      color: "bg-green-500"
    },
    {
      title: "Partnerships",
      value: partners.length.toLocaleString(),
      change: "Requests",
      icon: Handshake,
      color: "bg-purple-500"
    },
    {
      title: "Donations",
      value: donors.length.toLocaleString(),
      change: "Records",
      icon: CreditCard,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className={`${stat.color} p-3 rounded-xl text-white`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <span className="text-gray-500 text-xs font-bold bg-gray-50 px-2 py-1 rounded-lg">
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}