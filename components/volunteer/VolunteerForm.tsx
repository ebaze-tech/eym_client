"use client";
import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  Clock,
  Heart,
  CheckCircle,
  Loader2,
} from "lucide-react";
import API from "@/api_handler/api";

interface VolunteerPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  skills: string;
  interests: string;
  availability: string;
}

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    occupation: "",
    skills: "",
    interests: "",
    availability: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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
      const payload: VolunteerPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        occupation: formData.occupation,
        skills: formData.skills,
        interests: formData.interests,
        availability: formData.availability,
      };

      await API.post("/volunteer", payload);

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        occupation: "",
        skills: "",
        interests: "",
        availability: "",
      });

      setStatus("success");
    } catch (error) {
      console.error("Volunteer registration error", error);
      setStatus("error");
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
              Thank You!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We appreciate your interest in volunteering with Eruwa Youth
              Movement. Your details have been received.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-[#2B59C3] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a45a3] transition-colors"
            >
              Volunteer Again
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
            <h2 className="text-3xl font-bold mb-4">Volunteer Application</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Fill out the form below to let us know how you&apos;d like to
              contribute your time and skills.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="occupation"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Occupation
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="What do you do?"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="skills"
                className="text-sm font-bold text-gray-700 ml-1"
              >
                Skills & Expertise
              </label>
              <textarea
                id="skills"
                rows={3}
                value={formData.skills}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                placeholder="List any skills you can contribute (e.g., Teaching, Medical, Construction, IT, etc.)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="interests"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Area of Interest
                </label>
                <div className="relative">
                  <Heart className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Select an area</option>
                    <option value="Education">Education</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Health">Health</option>
                    <option value="Youth Empowerment">Youth Empowerment</option>
                    <option value="Community Service">Community Service</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="availability"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Availability
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Select availability</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Flexible">Flexible</option>
                    <option value="Project-based">Project-based</option>
                  </select>
                </div>
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
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
