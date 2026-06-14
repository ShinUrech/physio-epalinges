import type { Metadata } from "next";
import { Prata, Lato } from "next/font/google";
import { SITE_URL } from "@/lib/content";
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

const description =
  "Physiothérapie du sport et thérapie manuelle à Épalinges. Giuseppe Costa, expert en rééducation sportive et thérapie manuelle orthopédique (OMPT).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Physio-Epalinges – Giuseppe Costa",
    template: "%s · Physio-Epalinges",
  },
  description,
  keywords: [
    "physiothérapeute Épalinges",
    "physiothérapie du sport",
    "thérapie manuelle",
    "OMPT",
    "dry needling",
    "ondes de choc",
    "Giuseppe Costa",
    "rééducation sportive",
  ],
  applicationName: "Physio-Epalinges",
  authors: [{ name: "Giuseppe Costa" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "/",
    siteName: "Physio-Epalinges",
    title: "Physio-Epalinges – Giuseppe Costa",
    description,
    images: [
      { url: "/hero-bg.jpg", width: 1920, height: 1438, alt: "Physio-Epalinges – Giuseppe Costa" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physio-Epalinges – Giuseppe Costa",
    description,
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${prata.variable} ${lato.variable} h-full antialiased bg-charcoal`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
