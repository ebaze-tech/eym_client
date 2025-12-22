"use client";
import React, { useState } from "react";
import {
  Send,
  Building2,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Loader2,
} from "lucide-react";
import API from "@/api_handler/api";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface PartnershipPayload {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  partnershipType: string;
  message: string;
}
export default function PartnerContent() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    partnershipType: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  // const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload: PartnershipPayload = {
        organizationName: formData.organizationName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        partnershipType: formData.partnershipType,
        message: formData.message,
      };

      await API.post(`${NEXT_PUBLIC_API_URL}/partnership`, payload);

      setStatus("success");
      setFormData({
        organizationName: "",
        contactPerson: "",
        email: "",
        phoneNumber: "",
        partnershipType: "",
        message: "",
      });
    } catch (error) {
      console.error("Donation form submission failed:", error);
      setStatus("error");
    }
    // Simulate API call
    //   setTimeout(() => {
    //     setStatus('success');
    //     setMessage('Thank you for your interest in partnering with us! We will be in touch shortly.');
    //     setFormData({
    //       organizationName: '',
    //       contactPerson: '',
    //       email: '',
    //       phoneNumber: '',
    //       partnershipType: '',
    //       message: ''
    //     });
    //   }, 1500);
  };

  if (status === "success") {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Request Sent!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for reaching out. We are excited about the possibility
              of partnering with your organization.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-[#2B59C3] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a45a3] transition-colors"
            >
              Send Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#0e4b68] p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Partnership Inquiry</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We are always looking for strategic partners. Tell us about your
              organization and how we can work together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="organizationName"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Organization Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="organizationName"
                    required
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Enter organization name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contactPerson"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Contact Person
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Name of contact person"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="partnershipType"
                className="text-sm font-bold text-gray-700 ml-1"
              >
                Type of Organization
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select type</option>
                  <option value="Corporate">Corporate / Business</option>
                  <option value="NGO">NGO / Non-Profit</option>
                  <option value="Government">Government Agency</option>
                  <option value="Educational">Educational Institution</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-bold text-gray-700 ml-1"
              >
                Partnership Proposal / Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Briefly describe how you would like to partner with us..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#2B59C3] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a45a3] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
