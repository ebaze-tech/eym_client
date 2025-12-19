"use client";
import React, { useState } from "react";
import {
  Send,
  User,
  MapPin,
  Briefcase,
  Phone,
  Calendar,
  Home,
  Loader2,
  CheckCircle,
} from "lucide-react";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    religion: "",
    phoneNumber: "",
    residentialAddress: "",
    town: "",
    city: "",
    country: "",
    compound: "",
    quarter: "",
    occupation: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/member-registration`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Registration successful! We will review your application.");
        setFormData({
          fullName: "",
          gender: "",
          dateOfBirth: "",
          religion: "",
          phoneNumber: "",
          residentialAddress: "",
          town: "",
          city: "",
          country: "",
          compound: "",
          quarter: "",
          occupation: "",
        });
      } else {
        setStatus("error");
        setMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "An error occurred. Please check your connection and try again."
      );
    }
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
              Application Submitted!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for registering with Eruwa Youth Movement. Your
              application has been received successfully.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-[#2B59C3] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a45a3] transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#0e4b68] p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Membership Registration</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Join the movement. Fill out the form below to become an official
              member of EYM.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            {status === "error" && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center font-medium">
                {message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Membership Application
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Please fill out the form below accurately to process your
                membership request. All fields are required.
              </p>
            </div>

            {/* Personal Information */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0e4b68]">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Person 4"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="religion"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Religion
                  </label>
                  <select
                    id="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="">Select Religion</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Islam">Islam</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact & Location */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0e4b68]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Contact & Location
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 234567"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                    />
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="residentialAddress"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Residential Address
                  </label>
                  <input
                    type="text"
                    id="residentialAddress"
                    value={formData.residentialAddress}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Test data"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="town"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Town
                  </label>
                  <input
                    type="text"
                    id="town"
                    value={formData.town}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Test town"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Test City"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Test Country"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Origin & Occupation */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0e4b68]">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Origin & Occupation
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="compound"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Compound
                  </label>
                  <input
                    type="text"
                    id="compound"
                    value={formData.compound}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Test Compound"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="quarter"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Quarter
                  </label>
                  <input
                    type="text"
                    id="quarter"
                    value={formData.quarter}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Test Quarter"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Occupation
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Test Occupation"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                    />
                    <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#2B59C3] hover:bg-[#1a45a3] text-white font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
