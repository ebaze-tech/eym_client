"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import API from "@/api_handler/api";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
      const payload: ContactPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await API.post("/contact", payload);

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gray-50 rounded-3xl shadow-xl p-12 text-center border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for reaching out. We have received your message and will
              get back to you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-[#2B59C3] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a45a3] transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute top-[20%] right-[0%] w-[30%] h-[30%] rounded-full bg-green-50/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information Side */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Let&apos;s Start a <br />
                <span className="text-[#2B59C3]">Conversation</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Whether you have questions about our programs, want to volunteer,
                or just want to say hello, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="bg-blue-50 p-4 rounded-xl text-[#2B59C3] shrink-0 group-hover:bg-[#2B59C3] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">Email Us</h3>
                  <p className="text-gray-600">info@eym.org.ng</p>
                  <p className="text-gray-600">eymsince1961@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="bg-blue-50 p-4 rounded-xl text-[#2B59C3] shrink-0 group-hover:bg-[#2B59C3] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">Call Us</h3>
                  <p className="text-gray-600">+234 703 268 8666</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="bg-blue-50 p-4 rounded-xl text-[#2B59C3] shrink-0 group-hover:bg-[#2B59C3] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Eruwa Town Hall,
                    <br />
                    Eruwa, Oyo State,
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 ml-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-gray-700 ml-1"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2B59C3] focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#2B59C3] hover:bg-[#1a45a3] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-600 text-sm font-medium text-center mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
