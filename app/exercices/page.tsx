'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

type ModalVideo = { label: string } | null;

function VideoModal({ video, onClose }: { video: ModalVideo; onClose: () => void }) {
  React.useEffect(() => {
    if (!video) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [video, onClose]);

  if (!video) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="bg-neutral-100 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Placeholder video area */}
        <div className="bg-neutral-300 aspect-video flex items-center justify-center text-neutral-500 text-sm font-medium">
          {video.label}
        </div>
        <div className="px-8 py-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl font-extrabold font-serif text-neutral-950 tracking-tight">Title</h3>
            <button onClick={onClose} className="text-neutral-400 hover:text-neutral-700 transition-colors mt-1 shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{LOREM}</p>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    title: 'Catégorie 1',
    description: 'Exercices de renforcement pour stabiliser et protéger les articulations.',
    videos: [
      { label: 'Exercice 1 — À venir' },
      { label: 'Exercice 2 — À venir' },
      { label: 'Exercice 3 — À venir' },
      { label: 'Exercice 4 — À venir' },
      { label: 'Exercice 5 — À venir' },
      { label: 'Exercice 6 — À venir' },
      { label: 'Exercice 7 — À venir' },
    ],
  },
  {
    title: 'Catégorie 2',
    description: 'Exercices pour améliorer l\'amplitude articulaire et relâcher les tensions.',
    videos: [
      { label: 'Exercice 1 — À venir' },
      { label: 'Exercice 2 — À venir' },
      { label: 'Exercice 3 — À venir' },
      { label: 'Exercice 4 — À venir' },
    ],
  },
  {
    title: 'Catégorie 3',
    description: 'Exercices pour rééduquer les réflexes d\'équilibre et prévenir les récidives.',
    videos: [
      { label: 'Exercice 1 — À venir' },
      { label: 'Exercice 2 — À venir' },
      { label: 'Exercice 3 — À venir' },
    ],
  },
  {
    title: 'Catégorie 4',
    description: 'Rééducation ciblée de l\'épaule, du coude et du poignet.',
    videos: [
      { label: 'Exercice 1 — À venir' },
      { label: 'Exercice 2 — À venir' },
      { label: 'Exercice 3 — À venir' },
    ],
  },
  {
    title: 'Catégorie 5',
    description: 'Exercices de stabilisation lombaire et de rééducation cervicale.',
    videos: [
      { label: 'Exercice 1 — À venir' },
      { label: 'Exercice 2 — À venir' },
      { label: 'Exercice 3 — À venir' },
    ],
  },
];

function VideoGrid({ videos, onVideoClick }: { videos: typeof categories[number]['videos']; onVideoClick: (v: { label: string }) => void }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows);
    return () => el.removeEventListener('scroll', updateArrows);
  });

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  if (videos.length <= 4) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((vid, vi) => (
          <button
            key={vi}
            onClick={() => onVideoClick(vid)}
            className="bg-neutral-200 rounded-xl border border-neutral-300 aspect-video flex items-center justify-center text-neutral-500 text-sm font-medium hover:bg-neutral-300 transition-colors cursor-pointer"
          >
            {vid.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-neutral-100 border border-neutral-300 rounded-full p-2 shadow hover:bg-neutral-200 transition-colors"
          aria-label="Défiler à gauche"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-700" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {videos.map((vid, vi) => (
          <button
            key={vi}
            onClick={() => onVideoClick(vid)}
            className="bg-neutral-200 rounded-xl border border-neutral-300 flex-none w-64 aspect-video flex items-center justify-center text-neutral-500 text-sm font-medium hover:bg-neutral-300 transition-colors cursor-pointer snap-start"
          >
            {vid.label}
          </button>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-neutral-100 border border-neutral-300 rounded-full p-2 shadow hover:bg-neutral-200 transition-colors"
          aria-label="Défiler à droite"
        >
          <ChevronRight className="w-5 h-5 text-neutral-700" />
        </button>
      )}
    </div>
  );
}

function AccordionSection({ cat, onVideoClick }: { cat: typeof categories[number]; onVideoClick: (v: { label: string }) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-neutral-300 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-neutral-200 transition-colors"
        aria-expanded={open}
      >
        <div>
          <h2 className="text-xl font-extrabold text-neutral-950 tracking-tight">{cat.title}</h2>
          <p className="text-sm text-slate-500 mt-0.5">{cat.description}</p>
        </div>
        <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 ml-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="border-t border-neutral-200 px-7 py-6">
          <VideoGrid videos={cat.videos} onVideoClick={onVideoClick} />
        </div>
      )}
    </div>
  );
}

export default function ExercicesPage() {
  const [modalVideo, setModalVideo] = React.useState<{ label: string } | null>(null);

  return (
    <div className="min-h-screen bg-neutral-200 font-sans text-slate-800">
      <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />

      {/* NAV */}
      <nav className="bg-neutral-950 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">
            Physio<span className="text-neutral-400">-Epalinges</span>
          </div>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au site
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="bg-neutral-950 text-white py-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Exercices de rééducation</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Retrouvez ici tous les exercices prescrits par Giuseppe Costa, organisés par catégorie.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* ELASTIC BANDS PROMO BOX */}
        <div className="rounded-2xl overflow-hidden border border-neutral-300 shadow-md bg-neutral-100 flex flex-col sm:flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/office_3.jpg"
            alt="Élastiques de résistance – Cabinet Physio-Epalinges"
            className="w-full sm:w-48 h-40 sm:h-auto object-cover shrink-0"
          />
          <div className="px-7 py-5 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-neutral-700 shrink-0" />
              <h2 className="text-xl font-extrabold text-neutral-950 tracking-tight">Élastiques de résistance</h2>
              <span className="ml-auto text-2xl font-extrabold text-neutral-950 shrink-0 font-serif">CHF 25.–</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kit de <strong className="text-neutral-900">5 élastiques à résistance croissante</strong> — disponibles au cabinet.
              Idéaux pour réaliser vos exercices à domicile, du niveau débutant au niveau avancé.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-800">Extra-léger</span>
              <span className="px-3 py-1 rounded-full bg-red-200 text-red-800">Léger</span>
              <span className="px-3 py-1 rounded-full bg-green-200 text-green-800">Moyen</span>
              <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-800">Fort</span>
              <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-200">Très fort</span>
              <a href="tel:+41217842666" className="ml-auto px-4 py-1 rounded-full bg-neutral-950 text-neutral-200 hover:bg-neutral-700 transition-colors">
                Commander au cabinet
              </a>
            </div>
          </div>
        </div>

        {/* ACCORDION CATEGORIES */}
        <div className="space-y-4">
          {categories.map((cat, ci) => (
            <AccordionSection key={ci} cat={cat} onVideoClick={setModalVideo} />
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-500 text-center py-8 text-sm mt-16">
        © {new Date().getFullYear()} Physio-Epalinges – Giuseppe Costa. Tous droits réservés.
      </footer>

    </div>
  );
}


