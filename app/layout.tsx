import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SessionGuard from "@/components/SessionGuard";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EYM - Eruwa Youth Movement",
  description:
    "Community Action, Tangible Results. Transforming vision into community reality.",
  verification: {
    google: "gU6SOjJX7YpzcqtZhc5pDbYqK4BHhlgXWrh4MqAIwUE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <SessionGuard />
        {children}
      </body>
    </html>
  );
}
