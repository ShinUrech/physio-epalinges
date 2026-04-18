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
        className="rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden" style={{ backgroundColor: '#FAF9F6' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Placeholder video area */}
        <div className="aspect-video flex items-center justify-center text-sm font-medium" style={{ backgroundColor: '#EAE6E0', color: '#999' }}>
          {video.label}
        </div>
        <div className="px-8 py-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl font-extrabold font-serif tracking-tight" style={{ color: '#2C2C2C' }}>Title</h3>
            <button onClick={onClose} className="transition-colors mt-1 shrink-0" style={{ color: '#B8977E' }}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{LOREM}</p>
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
            className="rounded-xl aspect-video flex items-center justify-center text-sm font-medium transition-colors cursor-pointer" style={{ backgroundColor: '#F3F0EB', border: '1px solid #E5E0DB', color: '#888' }}
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full p-2 shadow transition-colors" style={{ backgroundColor: '#FAF9F6', border: '1px solid #E5E0DB' }}
          aria-label="Défiler à gauche"
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#B8977E' }} />
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
            className="rounded-xl flex-none w-64 aspect-video flex items-center justify-center text-sm font-medium transition-colors cursor-pointer snap-start" style={{ backgroundColor: '#F3F0EB', border: '1px solid #E5E0DB', color: '#888' }}
          >
            {vid.label}
          </button>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full p-2 shadow transition-colors" style={{ backgroundColor: '#FAF9F6', border: '1px solid #E5E0DB' }}
          aria-label="Défiler à droite"
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#B8977E' }} />
        </button>
      )}
    </div>
  );
}

function AccordionSection({ cat, onVideoClick }: { cat: typeof categories[number]; onVideoClick: (v: { label: string }) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid #E5E0DB', backgroundColor: '#FAF9F6' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-7 py-5 text-left transition-colors"
        aria-expanded={open}
      >
        <div>
          <h2 className="text-xl font-extrabold tracking-tight" style={{ color: '#2C2C2C' }}>{cat.title}</h2>
          <p className="text-sm mt-0.5" style={{ color: '#888' }}>{cat.description}</p>
        </div>
        <ChevronDown className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: '#B8977E' }} />
      </button>
      {open && (
        <div className="px-7 py-6" style={{ borderTop: '1px solid #E5E0DB' }}>
          <VideoGrid videos={cat.videos} onVideoClick={onVideoClick} />
        </div>
      )}
    </div>
  );
}

export default function ExercicesPage() {
  const [modalVideo, setModalVideo] = React.useState<{ label: string } | null>(null);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAF9F6', color: '#444' }}>
      <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />

      {/* NAV */}
      <nav className="shadow-sm sticky top-0 z-50" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">
            Physio<span style={{ color: '#B8977E' }}>-Epalinges</span>
          </div>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors" style={{ color: '#C0B8AD' }}>
            <ArrowLeft className="w-4 h-4" /> Retour au site
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="text-white py-16 px-6 text-center" style={{ backgroundColor: '#1E1E1E' }}>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 font-serif">Exercices de rééducation</h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: '#C0B8AD' }}>
          Retrouvez ici tous les exercices prescrits par Giuseppe Costa, organisés par catégorie.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* ELASTIC BANDS PROMO BOX */}
        <div className="rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row" style={{ border: '1px solid #E5E0DB', backgroundColor: '#F3F0EB' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/office_3.jpg"
            alt="Élastiques de résistance – Cabinet Physio-Epalinges"
            className="w-full sm:w-48 h-40 sm:h-auto object-cover shrink-0"
          />
          <div className="px-7 py-5 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 shrink-0" style={{ color: '#555' }} />
              <h2 className="text-xl font-extrabold tracking-tight" style={{ color: '#2C2C2C' }}>Élastiques de résistance</h2>
              <span className="ml-auto text-2xl font-extrabold shrink-0 font-serif" style={{ color: '#2C2C2C' }}>CHF 25.–</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
              Kit de <strong style={{ color: '#2C2C2C' }}>5 élastiques à résistance croissante</strong> — disponibles au cabinet.
              Idéaux pour réaliser vos exercices à domicile, du niveau débutant au niveau avancé.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-800">Extra-léger</span>
              <span className="px-3 py-1 rounded-full bg-red-200 text-red-800">Léger</span>
              <span className="px-3 py-1 rounded-full bg-green-200 text-green-800">Moyen</span>
              <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-800">Fort</span>
              <span className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#2C2C2C' }}>Très fort</span>
              <a href="tel:+41217842666" className="ml-auto px-4 py-1 rounded-full text-white transition-colors" style={{ backgroundColor: '#B8977E' }}>
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
      <footer className="text-center py-8 text-sm mt-16" style={{ backgroundColor: '#1E1E1E', color: '#888' }}>
        © {new Date().getFullYear()} Physio-Epalinges – Giuseppe Costa. Tous droits réservés.
      </footer>

    </div>
  );
}


