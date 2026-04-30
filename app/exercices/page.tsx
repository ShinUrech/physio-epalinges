'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';

type VideoItem = { label: string; src?: string; title?: string; desc?: string };
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
        className="rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden" style={{ backgroundColor: '#FAF9F6' }}
        onClick={e => e.stopPropagation()}
      >
        {video.src ? (
          <video
            key={video.src}
            className="w-full aspect-video bg-black"
            controls
            autoPlay
            playsInline
          >
            <source src={video.src} />
          </video>
        ) : (
          <div className="aspect-video flex items-center justify-center text-sm font-medium" style={{ backgroundColor: '#EAE6E0', color: '#999' }}>
            {video.label}
          </div>
        )}
        <div className="px-8 py-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl font-extrabold font-serif tracking-tight" style={{ color: '#2C2C2C' }}>{video.title ?? video.label}</h3>
            <button onClick={onClose} className="transition-colors mt-1 shrink-0" style={{ color: '#B8977E' }}>
              <X className="w-5 h-5" />
            </button>
          </div>
          {video.desc && <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{video.desc}</p>}
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    title: 'Épaule — Élastiques de résistance',
    description: 'Exercices de renforcement de l\'épaule avec élastiques. Améliore la stabilité de la coiffe des rotateurs et prévient les blessures à l\'épaule.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/Shoulder elastic_/drive-download-20260427T095302Z-3-001/IMG_4716.MOV', title: 'Rotation interne de l\'épaule', desc: 'Assis, coude fléchi à 90°, effectuez une rotation interne contre la résistance de l\'élastique. Renforce le subscapulaire et améliore la stabilité de la coiffe des rotateurs.' },
      { label: 'Exercice 2', src: '/gallery/Shoulder elastic_/drive-download-20260427T095302Z-3-001/IMG_4717.MOV', title: 'Rotation externe de l\'épaule', desc: 'Assis, coude fléchi à 90°, effectuez une rotation externe contre la résistance de l\'élastique. Renforce l\'infra-épineux et le petit rond, essentiels pour la stabilité postérieure de l\'épaule.' },
      { label: 'Exercice 3', src: '/gallery/Shoulder elastic_/drive-download-20260427T095302Z-3-001/IMG_4721.MOV', title: 'Abduction horizontale', desc: 'Debout, bras tendus à hauteur des épaules, écartez les bras en tirant l\'élastique horizontalement. Renforce les muscles postérieurs de l\'épaule et améliore la posture.' },
      { label: 'Exercice 4', src: '/gallery/Shoulder elastic_/drive-download-20260427T095302Z-3-001/IMG_4723.MOV', title: 'Rétraction scapulaire', desc: 'Assis, élastique fixé devant vous, tirez les deux bras en arrière en serrant les omoplates. Renforce les rhomboïdes et les trapèzes moyens pour une meilleure stabilité scapulaire.' },
    ],
  },
  {
    title: 'Genou — Élastiques de résistance',
    description: 'Exercices de rééducation du genou avec élastiques. Renforce les muscles stabilisateurs (quadriceps, ischio-jambiers) et améliore la stabilité articulaire.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/Knee elastic_/IMG_4771.MOV', title: 'Abduction de hanche en décubitus latéral', desc: 'Allongé sur le côté, élastique autour des cuisses, soulevez la jambe vers le haut. Renforce les abducteurs de hanche (moyen fessier) pour stabiliser le genou lors de la marche et de la course.' },
      { label: 'Exercice 2', src: '/gallery/Knee elastic_/IMG_4772.MOV', title: 'Extension de genou en décubitus dorsal', desc: 'Allongé sur le dos, élastique autour des jambes, étendez le genou contre la résistance. Renforce le quadriceps et améliore la stabilité active du genou.' },
      { label: 'Exercice 3', src: '/gallery/Knee elastic_/IMG_4773.MOV', title: 'Flexion de genou en position couchée', desc: 'En position couchée, élastique autour des chevilles, fléchissez le genou vers les fesses. Renforce les ischio-jambiers, stabilisateurs postérieurs du genou.' },
      { label: 'Exercice 4', src: '/gallery/Knee elastic_/IMG_4774.MOV', title: 'Squat latéral avec élastique', desc: 'Debout, élastique autour des genoux et des chevilles, effectuez un pas latéral en gardant les genoux alignés. Renforce les abducteurs et améliore le contrôle neuromusculaire.' },
      { label: 'Exercice 5', src: '/gallery/Knee elastic_/IMG_4775.MOV', title: 'Équilibre unipodal avec résistance', desc: 'Sur un pied, élastique autour des jambes, maintenez l\'équilibre tout en résistant à la traction latérale. Améliore la proprioception et la stabilité dynamique du genou.' },
      { label: 'Exercice 6', src: '/gallery/Knee elastic_/IMG_4776.MOV', title: 'Fente avec contrôle du genou', desc: 'En fente avant, élastique autour des genoux, maintenez l\'alignement genou-cheville tout en descendant. Renforce le quadriceps et entraîne le contrôle valgus du genou.' },
    ],
  },
  {
    title: 'Cheville — Élastiques de résistance',
    description: 'Exercices de renforcement de la cheville avec élastiques. Améliore la proprioception, renforce les muscles péroniers et prévient les entorses.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/Ankle elastic/ankle_1.mp4', title: 'Éversion de la cheville', desc: 'Assis, élastique autour de l\'avant-pied, tournez le pied vers l\'extérieur contre la résistance de l\'élastique. Renforce les muscles péroniers (court et long fibulaire), stabilisateurs latéraux de la cheville, essentiels dans la prévention et la rééducation des entorses.' },
    ],
  },
  {
    title: 'Coude — Élastiques de résistance',
    description: 'Exercices de rééducation du coude et de l\'avant-bras avec élastiques. Indiqués pour les tendinopathies (tennis elbow, golf elbow) et le renforcement des muscles de la préhension.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/Elbow elastic/IMG_4718.MOV', title: 'Flexion du coude', desc: 'Assis, élastique fixé sous le pied, fléchissez l\'avant-bras vers l\'épaule. Renforce le biceps brachial et le brachioradialis. Indiqué en phase de rééducation du coude.' },
      { label: 'Exercice 2', src: '/gallery/Elbow elastic/IMG_4719.MOV', title: 'Extension du coude', desc: 'Assis, élastique en appui sur la cuisse, étendez l\'avant-bras vers le bas contre résistance. Renforce le triceps et rééduque la chaîne extensrice du coude.' },
      { label: 'Exercice 3', src: '/gallery/Elbow elastic/IMG_4720.MOV', title: 'Extension du poignet (tennis elbow)', desc: 'Avant-bras posé sur la cuisse, paume vers le bas, étendez le poignet contre l\'élastique. Renforce les extenseurs de poignet, exercice clé dans le traitement de l\'épicondylite latérale.' },
      { label: 'Exercice 4', src: '/gallery/Elbow elastic/IMG_4722.MOV', title: 'Flexion du poignet (golf elbow)', desc: 'Avant-bras posé sur la cuisse, paume vers le haut, fléchissez le poignet contre l\'élastique. Renforce les fléchisseurs de poignet, indiqué dans la rééducation de l\'épicondylite médiale.' },
    ],
  },
  {
    title: 'Poignet — Élastiques de résistance',
    description: 'Exercices de renforcement et mobilisation du poignet avec élastiques. Rééduque la pronation/supination, la flexion et la déviation radiale/ulnaire pour une récupération fonctionnelle complète.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/Wrist elastic/wrist_1.mp4', title: 'Pronation de l\'avant-bras', desc: 'Assis, élastique tenu à deux mains, effectuez une rotation de l\'avant-bras vers l\'intérieur (pronation) contre la résistance de l\'élastique. Renforce le rond pronateur et carré pronateur, essentiels à la stabilité et aux gestes du quotidien.' },
    ],
  },
];

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
    return () => el.removeEventListener('scroll', updateArrows);
  });

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  // Shared card renderer
  const renderCard = (vid: VideoItem, vi: number, extraClass = '') => (
    <button
      key={vi}
      onClick={() => onVideoClick(vid)}
      className={`rounded-xl aspect-video overflow-hidden relative flex items-center justify-center text-sm font-medium transition-colors cursor-pointer ${extraClass}`}
      style={{ backgroundColor: '#F3F0EB', border: '1px solid #E5E0DB', color: '#888' }}
    >
      {vid.src ? (
        <video src={vid.src} className="w-full h-full object-cover pointer-events-none" muted playsInline preload="metadata" />
      ) : (
        vid.label
      )}
      <span className="absolute bottom-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#B8977E', color: '#fff' }}>{vi + 1}</span>
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
              {videos.map((vid, vi) => renderCard(vid, vi, 'flex-none w-64 snap-start'))}
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
        )}
      </div>
    </>
  );
}

function AccordionSection({ cat, onVideoClick }: { cat: typeof categories[number]; onVideoClick: (v: VideoItem) => void }) {
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

        {/* ELASTIC BANDS CATALOG */}
        <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: '1px solid #E5E0DB', backgroundColor: '#F3F0EB' }}>
          {/* Header */}
          <div className="px-6 pt-6 pb-4 flex items-center gap-3" style={{ borderBottom: '1px solid #E5E0DB' }}>
            <ShoppingBag className="w-5 h-5 shrink-0" style={{ color: '#B8977E' }} />
            <h2 className="text-xl font-extrabold tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Élastiques de résistance</h2>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ borderBottom: '1px solid #E5E0DB' }}>
            {/* Kit 5 */}
            <div className="flex flex-row" style={{ borderBottom: '1px solid #E5E0DB' }} >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/office_3.jpg" alt="Kit 5 élastiques" className="w-28 sm:w-32 object-cover shrink-0 self-stretch" style={{ borderRight: '1px solid #E5E0DB' }} />
              <div className="px-5 py-4 flex flex-col gap-2 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-extrabold text-base" style={{ color: '#2C2C2C' }}>Kit 5 élastiques</span>
                  <span className="text-xl font-extrabold font-serif shrink-0" style={{ color: '#2C2C2C' }}>CHF 25.–</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#777' }}>5 niveaux de résistance croissante, du débutant à l'avancé.</p>
                <div className="flex flex-wrap gap-1.5 mt-1 text-xs font-semibold">
                  <span className="px-2 py-0.5 rounded-full bg-yellow-200 text-yellow-800">Extra-léger</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-200 text-red-800">Léger</span>
                  <span className="px-2 py-0.5 rounded-full bg-green-200 text-green-800">Moyen</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-800">Fort</span>
                  <span className="px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: '#2C2C2C' }}>Très fort</span>
                </div>
              </div>
            </div>

            {/* GC à la pièce */}
            <div className="flex flex-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/elastics_product.jpeg" alt="Élastiques GC" className="w-28 sm:w-32 object-cover shrink-0 self-stretch" style={{ borderRight: '1px solid #E5E0DB' }} />
              <div className="px-5 py-4 flex flex-col gap-2 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-extrabold text-base" style={{ color: '#2C2C2C' }}>Élastiques GC</span>
                  <div className="text-right shrink-0">
                    <div className="text-xl font-extrabold font-serif leading-none" style={{ color: '#2C2C2C' }}>CHF 5.–</div>
                    <div className="text-xs font-semibold" style={{ color: '#B8977E' }}>4 pour CHF 15.–</div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#777' }}>Vendus à la pièce ou par lot. 3 niveaux disponibles.</p>
                <div className="flex flex-wrap gap-1.5 mt-1 text-xs font-semibold">
                  <span className="px-2 py-0.5 rounded-full bg-yellow-200 text-yellow-800">Léger</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-200 text-red-800">Moyen</span>
                  <span className="px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: '#2C2C2C' }}>Fort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Single CTA */}
          <div className="px-6 py-5">
            <a
              href="https://wa.me/41768240387"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-8 rounded-xl text-base font-bold transition-colors text-center"
              style={{ backgroundColor: '#B8977E', color: '#fff' }}
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Commander au cabinet via WhatsApp</span>
            </a>
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


