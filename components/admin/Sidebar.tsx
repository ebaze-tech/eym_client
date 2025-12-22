"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  LogOut,
  FileText,
  ChevronRight,
  Mail,
  Handshake,
  CreditCard,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [adminName, setAdminName] = useState("Admin User");

  useEffect(() => {
    const adminData = sessionStorage.getItem('admin');
    if (adminData) {
      try {
        const admin = JSON.parse(adminData);
        if (admin.username) {
          setTimeout(() => setAdminName(admin.username), 0);
        }
      } catch (e) {
        console.error("Failed to parse admin data", e);
      }
    }
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('admin');
    router.push('/admin/login');
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "Members",
      href: "/admin/dashboard/members",
      icon: Users,
      exact: false,
    },
    {
      name: "Requests",
      href: "/admin/dashboard/requests",
      icon: FileText,
      exact: false,
    },
    {
      name: "Mails",
      href: "/admin/dashboard/mails",
      icon: Mail,
      exact: false,
    },
    {
      name: "Partners",
      href: "/admin/dashboard/partners",
      icon: Handshake,
      exact: false,
    },
    {
      name: "Donors",
      href: "/admin/dashboard/donors",
      icon: CreditCard,
      exact: false,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`
        w-72 bg-slate-900 text-slate-300 min-h-screen fixed left-0 top-0 z-50 border-r border-slate-800
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo Area */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/20">
              E
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                EYM Admin
              </h1>
              <p className="text-slate-500 text-xs font-medium">
                Management Portal
              </p>
            </div>
          </div>
          {/* Close button for mobile */}
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={onClose}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-4 mt-4">
            Main Menu
          </p>

          {navItems.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group ${
                  active
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                    : "hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    className={`w-5 h-5 ${
                      active
                        ? "text-white"
                        : "text-slate-400 group-hover:text-white"
                    }`}
                  />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                {active && <ChevronRight className="w-4 h-4 text-white/80" />}
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-sm">
              {adminName.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">
                {adminName}
              </p>
              <p className="text-xs text-slate-500 truncate">
                Administrator
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-800 text-slate-300 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-300 font-medium text-sm group"
          >
            <LogOut className="w-4 h-4 group-hover:animate-pulse" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
