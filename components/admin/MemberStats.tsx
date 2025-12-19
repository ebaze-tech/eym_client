import React from 'react';
import { Users, UserPlus, UserCheck, TrendingUp } from 'lucide-react';

export default function MemberStats() {
  const stats = [
    {
      title: "Total Members",
      value: "2,543",
      change: "+12%",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "New Requests",
      value: "45",
      change: "+5%",
      icon: UserPlus,
      color: "bg-green-500"
    },
    {
      title: "Active Members",
      value: "2,100",
      change: "+8%",
      icon: UserCheck,
      color: "bg-purple-500"
    },
    {
      title: "Growth Rate",
      value: "15%",
      change: "+2%",
      icon: TrendingUp,
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
            <span className="text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
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