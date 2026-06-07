'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { COLORS } from '@/lib/theme';
import { practice, exerciceCategories, type VideoItem, type ExerciceCategory } from '@/lib/content';

type ModalVideo = VideoItem | null;

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
        role="dialog"
        aria-modal="true"
        aria-label={video.title ?? video.label}
        className="rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden" style={{ backgroundColor: COLORS.cream }}
        onClick={e => e.stopPropagation()}
      >
        {video.src ? (
          <video
            key={video.src}
            className="w-full aspect-video bg-black"
            poster={video.poster}
            controls
            autoPlay
            playsInline
          >
            <source src={video.src} />
          </video>
        ) : (
          <div className="aspect-video flex items-center justify-center text-sm font-medium" style={{ backgroundColor: COLORS.placeholder, color: '#999' }}>
            {video.label}
          </div>
        )}
        <div className="px-8 py-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl font-extrabold font-serif tracking-tight" style={{ color: COLORS.ink }}>{video.title ?? video.label}</h3>
            <button onClick={onClose} className="transition-colors mt-1 shrink-0" style={{ color: COLORS.accent }}>
              <X className="w-5 h-5" />
            </button>
          </div>
          {video.desc && <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{video.desc}</p>}
        </div>
      </div>
    </div>
  );
}

function VideoGrid({ videos, onVideoClick }: { videos: VideoItem[]; onVideoClick: (v: VideoItem) => void }) {
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
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [videos]);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  // Shared card renderer — shows a lightweight poster image; the full video
  // loads only when the card is clicked (opens the modal).
  const renderCard = (vid: VideoItem, vi: number, extraClass = '') => (
    <button
      key={vi}
      onClick={() => onVideoClick(vid)}
      aria-label={`Lire la vidéo : ${vid.title ?? vid.label}`}
      className={`group rounded-xl aspect-video overflow-hidden relative flex items-center justify-center text-sm font-medium transition-colors cursor-pointer ${extraClass}`}
      style={{ backgroundColor: COLORS.sand, border: `1px solid ${COLORS.line}`, color: '#888' }}
    >
      {vid.poster ? (
        <Image src={vid.poster} alt="" fill sizes="(max-width: 768px) 100vw, 256px" className="object-cover" />
      ) : (
        vid.label
      )}
      {vid.src && (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="rounded-full p-3 bg-black/45 group-hover:bg-black/65 transition-colors">
            <Play className="w-6 h-6 text-white" fill="currentColor" />
          </span>
        </span>
      )}
      <span className="absolute bottom-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: COLORS.accent, color: '#fff' }}>{vi + 1}</span>
    </button>
  );

  // Mobile: always a vertical 1-col grid (stacks downward)
  // Desktop (md+): grid for ≤4 items, horizontal carousel for >4 items
  return (
    <>
      {/* Mobile stacked list — hidden on md+ */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {videos.map((vid, vi) => renderCard(vid, vi))}
      </div>

      {/* Desktop layout — hidden below md */}
      <div className="hidden md:block">
        {videos.length <= 4 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((vid, vi) => renderCard(vid, vi))}
          </div>
        ) : (
          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full p-2 shadow transition-colors" style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.line}` }}
                aria-label="Défiler à gauche"
              >
                <ChevronLeft className="w-5 h-5" style={{ color: COLORS.accent }} />
              </button>
            )}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none' }}
            >
              {videos.map((vid, vi) => renderCard(vid, vi, 'flex-none w-64 snap-start'))}
            </div>
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full p-2 shadow transition-colors" style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.line}` }}
                aria-label="Défiler à droite"
              >
                <ChevronRight className="w-5 h-5" style={{ color: COLORS.accent }} />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function AccordionSection({ cat, onVideoClick }: { cat: ExerciceCategory; onVideoClick: (v: VideoItem) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: `1px solid ${COLORS.line}`, backgroundColor: COLORS.cream }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-7 py-5 text-left transition-colors"
        aria-expanded={open}
      >
        <div>
          <h2 className="text-xl font-extrabold tracking-tight" style={{ color: COLORS.ink }}>{cat.title}</h2>
          <p className="text-sm mt-0.5" style={{ color: '#888' }}>{cat.description}</p>
        </div>
        <ChevronDown className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} style={{ color: COLORS.accent }} />
      </button>
      {open && (
        <div className="px-7 py-6" style={{ borderTop: `1px solid ${COLORS.line}` }}>
          <VideoGrid videos={cat.videos} onVideoClick={onVideoClick} />
        </div>
      )}
    </div>
  );
}

export default function ExercicesPage() {
  const [modalVideo, setModalVideo] = React.useState<ModalVideo>(null);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.cream, color: '#444' }}>
      <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />

      {/* NAV */}
      <nav className="shadow-sm sticky top-0 z-50" style={{ backgroundColor: COLORS.charcoal }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">
            Physio<span style={{ color: COLORS.accent }}>-Epalinges</span>
          </div>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors" style={{ color: COLORS.taupe }}>
            <ArrowLeft className="w-4 h-4" /> Retour au site
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="text-white py-16 px-6 text-center" style={{ backgroundColor: COLORS.charcoal }}>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 font-serif">Exercices de rééducation</h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: COLORS.taupe }}>
          Retrouvez ici tous les exercices prescrits par Giuseppe Costa, organisés par catégorie.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* ELASTIC BANDS CATALOG */}
        <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: `1px solid ${COLORS.line}`, backgroundColor: COLORS.sand }}>
          {/* Header */}
          <div className="px-6 pt-6 pb-4 flex items-center gap-3" style={{ borderBottom: `1px solid ${COLORS.line}` }}>
            <ShoppingBag className="w-5 h-5 shrink-0" style={{ color: COLORS.accent }} />
            <h2 className="text-xl font-extrabold tracking-tight font-serif" style={{ color: COLORS.ink }}>Élastiques de résistance</h2>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ borderBottom: `1px solid ${COLORS.line}` }}>
            {/* Kit 5 */}
            <div className="flex flex-row" style={{ borderBottom: `1px solid ${COLORS.line}` }} >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/office_3.jpg" alt="Kit 5 élastiques" className="w-28 sm:w-32 object-cover shrink-0 self-stretch" style={{ borderRight: `1px solid ${COLORS.line}` }} />
              <div className="px-5 py-4 flex flex-col gap-2 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-extrabold text-base" style={{ color: COLORS.ink }}>Kit 5 élastiques</span>
                  <span className="text-xl font-extrabold font-serif shrink-0" style={{ color: COLORS.ink }}>CHF 25.–</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#777' }}>5 niveaux de résistance croissante, du débutant à l&apos;avancé.</p>
                <div className="flex flex-wrap gap-1.5 mt-1 text-xs font-semibold">
                  <span className="px-2 py-0.5 rounded-full bg-yellow-200 text-yellow-800">Extra-léger</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-200 text-red-800">Léger</span>
                  <span className="px-2 py-0.5 rounded-full bg-green-200 text-green-800">Moyen</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-800">Fort</span>
                  <span className="px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: COLORS.ink }}>Très fort</span>
                </div>
              </div>
            </div>

            {/* GC à la pièce */}
            <div className="flex flex-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/elastics_product.jpeg" alt="Élastiques GC" className="w-28 sm:w-32 object-cover shrink-0 self-stretch" style={{ borderRight: `1px solid ${COLORS.line}` }} />
              <div className="px-5 py-4 flex flex-col gap-2 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-extrabold text-base" style={{ color: COLORS.ink }}>Élastiques GC</span>
                  <div className="text-right shrink-0">
                    <div className="text-xl font-extrabold font-serif leading-none" style={{ color: COLORS.ink }}>CHF 5.–</div>
                    <div className="text-xs font-semibold" style={{ color: COLORS.accent }}>4 pour CHF 15.–</div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#777' }}>Vendus à la pièce ou par lot. 3 niveaux disponibles.</p>
                <div className="flex flex-wrap gap-1.5 mt-1 text-xs font-semibold">
                  <span className="px-2 py-0.5 rounded-full bg-yellow-200 text-yellow-800">Léger</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-200 text-red-800">Moyen</span>
                  <span className="px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: COLORS.ink }}>Fort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Single CTA */}
          <div className="px-6 py-5">
            <a
              href={practice.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-8 rounded-xl text-base font-bold transition-colors text-center"
              style={{ backgroundColor: COLORS.accent, color: '#fff' }}
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Commander au cabinet via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* ACCORDION CATEGORIES */}
        <div className="space-y-4">
          {exerciceCategories.map((cat, ci) => (
            <AccordionSection key={ci} cat={cat} onVideoClick={setModalVideo} />
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm mt-16" style={{ backgroundColor: COLORS.charcoal, color: '#888' }}>
        © {new Date().getFullYear()} Physio-Epalinges – Giuseppe Costa. Tous droits réservés.
      </footer>

    </div>
  );
}


