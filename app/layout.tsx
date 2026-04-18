import type { Metadata } from "next";
import { Prata, Lato } from "next/font/google";
import "./globals.css";

const prata = Prata({
  weight: "400",
  variable: "--font-prata",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
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
      lang="fr"
      className={`${prata.variable} ${lato.variable} h-full antialiased bg-[#1E1E1E]`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
