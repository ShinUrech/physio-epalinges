import type { Metadata } from "next";

const description =
  "Vidéos d'exercices de rééducation prescrits par Giuseppe Costa, classés par zone (épaule, genou, cheville, coude, poignet), et élastiques de résistance à commander au cabinet.";

export const metadata: Metadata = {
  title: "Exercices de rééducation",
  description,
  alternates: { canonical: "/exercices" },
  openGraph: {
    title: "Exercices de rééducation · Physio-Epalinges",
    description,
    url: "/exercices",
  },
};

export default function ExercicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
