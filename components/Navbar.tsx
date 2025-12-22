"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Newspaper,
  Heart,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home", icon: Home, children: undefined },
    {
      href: "/about",
      label: "About Us",
      icon: Info,
      children: [
        { href: "/about", label: "About Us" },
        { href: "/eruwa-at-a-glance", label: "Eruwa" },
        { href: "/heritage", label: "Heritage" },
      ],
    },
    { href: "/programs", label: "Our Programs", icon: Briefcase },
    { 
      href: "/news", 
      label: "News & Events", 
      icon: Newspaper,
      children: [
        { href: "/news", label: "News & Events" },
        { href: "/gallery", label: "Gallery" }
      ]
    },
    { href: "/get-involved", label: "Get Involved", icon: Heart },
  ];

  return (
    <nav className="bg-[#0e4b68] text-white py-3 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 ring-2 ring-transparent group-hover:ring-white/20">
            <Image
              src="/assets/images/logo.png"
              alt="Community Action"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-semibold text-lg hidden xl:block tracking-wide">
            Eruwa Youth Movement
          </span>
        </Link>

        {/* Desktop Navigation (Laptop & up) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <button
                  className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 py-2 px-3 rounded-full ${
                    isActive(link.href) ||
                    link.children.some((c) => isActive(c.href))
                      ? "bg-white/10 text-blue-200 shadow-inner"
                      : "hover:bg-white/5 hover:text-blue-200"
                  }`}
                >
                  <link.icon
                    className={`w-3.5 h-3.5 ${
                      isActive(link.href) ||
                      link.children.some((c) => isActive(c.href))
                        ? "text-blue-200"
                        : "text-blue-300/70 group-hover:text-blue-200"
                    }`}
                  />
                  <span>{link.label}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0e4b68] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left overflow-hidden">
                  <div className="py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors ${
                          isActive(child.href)
                            ? "text-blue-200 bg-white/5"
                            : "text-white/80"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 py-2 px-3 rounded-full ${
                  isActive(link.href)
                    ? "bg-white/10 text-blue-200 shadow-inner"
                    : "hover:bg-white/5 hover:text-blue-200"
                }`}
              >
                <link.icon
                  className={`w-3.5 h-3.5 ${
                    isActive(link.href)
                      ? "text-blue-200"
                      : "text-blue-300/70 group-hover:text-blue-200"
                  }`}
                />
                <span>{link.label}</span>
              </Link>
            )
          )}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={`hidden lg:flex bg-[#2B59C3] hover:bg-[#1e4499] text-white px-5 py-2 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg items-center gap-2 text-[11px] uppercase tracking-widest transform hover:-translate-y-0.5 ${
              isActive("/contact") ? "ring-2 ring-white/30" : ""
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Us
          </Link>

          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0e4b68] border-t border-white/10 shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="space-y-1">
                  <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider py-3 px-4 text-blue-200/70">
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </div>
                  <div className="pl-11 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-lg transition-colors ${
                          isActive(child.href)
                            ? "bg-white/10 text-blue-200"
                            : "text-white/70 hover:bg-white/5 hover:text-blue-200"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 text-sm font-medium uppercase tracking-wider py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 text-blue-200"
                      : "hover:bg-white/5 hover:text-blue-200"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className={`flex items-center justify-center gap-2 bg-[#2B59C3] text-white py-3 rounded-lg font-bold uppercase text-xs tracking-widest mt-4 shadow-md ${
                isActive("/contact") ? "bg-[#1e4499]" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
