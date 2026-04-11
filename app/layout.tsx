import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Physio-Epalinges – Giuseppe Costa",
  description: "Physiothérapeute du sport et thérapie manuelle à Epalinges. Giuseppe Costa, expert en rééducation sportive et thérapie manuelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-sky-950`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
