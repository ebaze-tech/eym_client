"use client";
import React, { useEffect, useState } from "react";
import {
  Copy,
  CheckCircle,
  CreditCard,
  Building,
  User,
  Mail,
  Send,
  Loader2,
} from "lucide-react";
import API from "@/api_handler/api";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
interface DonationPayload {
  fullName: string;
  email: string;
  amount: string;
  reference: string;
  message: string;
}

const formatAmount = (value: string) => {
  const number = value.replace(/\D/g, "");
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const parseAmount = (value: string) => {
  return value.replace(/,/g, "");
};

export default function DonateContent() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    amount: "",
    reference: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const bankAccounts = [
    {
      bankName: "Polaris Bank",
      accountName: "Eruwa Youth Movement",
      accountNumber: "11400024948",
    },
    {
      bankName: "Excel Micro-Finance Bank",
      accountName: "Eruwa Youth Movement",
      accountNumber: "1100098924",
    },
  ];

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call

    try {
      const payload: DonationPayload = {
        fullName: formData.fullName,
        email: formData.email,
        amount: formData.amount,
        reference: formData.reference,
        message: formData.message,
      };

      await API.post(`${NEXT_PUBLIC_API_URL}/donation`, payload);

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        amount: "",
        reference: "",
        message: "",
      });
    } catch (error) {
      console.error("Donation form submission failed:", error);
      setStatus("error");
    }
    // setTimeout(() => {
    //   setStatus("success");
    //   setFormData({
    //     fullName: "",
    //     email: "",
    //     amount: "",
    //     reference: "",
    //     message: "",
    //   });
    // }, 1500);
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
              We have received your donation notification. Thank you for your
              generosity and support for Eruwa&apos;s development.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-[#2B59C3] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a45a3] transition-colors"
            >
              Return
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bank Details Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bank Transfer
              </h2>
              <p className="text-gray-600 text-lg">
                You can make a direct transfer to our official bank accounts.
                Please use the details below:
              </p>
            </div>

            <div className="space-y-6">
              {bankAccounts.map((account, index) => (
                <div
                  key={index}
                  className="bg-[#0e4b68] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm font-medium">
                          Bank Name
                        </p>
                        <p className="text-xl font-bold">{account.bankName}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm font-medium">
                          Account Name
                        </p>
                        <p className="text-xl font-bold">
                          {account.accountName}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                      <p className="text-blue-200 text-sm font-medium mb-2">
                        Account Number
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-2xl md:text-3xl font-mono font-bold tracking-wider break-all">
                          {account.accountNumber}
                        </p>
                        <button
                          onClick={() =>
                            handleCopy(account.accountNumber, index)
                          }
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                          title="Copy Account Number"
                        >
                          {copiedIndex === index ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : (
                            <Copy className="w-6 h-6 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-[#2B59C3] mb-2">Note</h3>
              <p className="text-gray-600 text-sm">
                After making a transfer, please fill out the form on this page
                so we can acknowledge your donation and send you a receipt.
              </p>
            </div>
          </div>

          {/* Notification Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Notify Us of Donation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Your name"
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
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="amount"
                    className="text-sm font-bold text-gray-700 ml-1"
                  >
                    Amount Sent (₦)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">
                      ₦
                    </span>
                    <input
                      type="text"
                      id="amount"
                      inputMode="numeric"
                      required
                      value={formData.amount}
                      onChange={(e) => {
                        const formatted = formatAmount(e.target.value);
                        setFormData((prev) => ({ ...prev, amount: formatted }));
                      }}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200
             focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100
             outline-none transition-all"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="reference"
                    className="text-sm font-bold text-gray-700 ml-1"
                  >
                    Reference/Date
                  </label>
                  <input
                    type="text"
                    id="reference"
                    value={formData.reference}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="e.g. Today, Ref#123"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-700 ml-1"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Any specific project you'd like to support?"
                />
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
                    Confirm Donation
                  </>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
