import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e4b68] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Image
                  src="/assets/images/logo.png"
                  alt="Community Action"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-lg tracking-wide">
                Eruwa Youth
                <br />
                Movement
              </span>
            </div>
            <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs">
              Empowering the youth, building the future. Officially registered
              non-profit organization dedicated to community development.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B59C3] hover:scale-110 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-blue-100 group-hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B59C3] hover:scale-110 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-blue-100 group-hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B59C3] hover:scale-110 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-blue-100 group-hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B59C3] hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-blue-100 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-sm tracking-widest text-blue-200">
              Head Office
            </h4>
            <div className="flex gap-3 text-blue-100/80 text-sm leading-relaxed group">
              <MapPin className="w-5 h-5 shrink-0 mt-1 group-hover:text-[#2B59C3] transition-colors" />
              <p>
                Plot 3B, EYM Secretariat,
                <br />
                Opposite Odo Eran,
                <br />
                Hospital Road,
                <br />
                Eruwa, Oyo State,
                <br />
                Nigeria
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-sm tracking-widest text-blue-200">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-100/80 text-sm group">
                <Phone className="w-4 h-4 group-hover:text-[#2B59C3] transition-colors" />
                <span>0703 268 8266</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100/80 text-sm group">
                <Mail className="w-4 h-4 group-hover:text-[#2B59C3] transition-colors" />
                <a
                  href="mailto:info@eym.org.ng"
                  className="hover:text-white transition-colors"
                >
                  info@eym.org.ng
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-sm tracking-widest text-blue-200">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/eruwa-at-a-glance"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Eruwa
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200/60">
          <p>&copy; {currentYear} Eruwa Youth Movement. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
