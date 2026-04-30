'use client';

import React from 'react';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Model, { IExerciseData } from 'react-body-highlighter';

// THEME: Ivory & Charcoal — classy, refined, editorial
// Warm ivory backgrounds, deep charcoal text, subtle gold accents, generous whitespace

export default function Theme4Page() {
  const [lightbox, setLightbox] = React.useState<string | null>(null);
  const officeCarouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAF9F6', color: '#2C2C2C' }}>
      {/* Theme label */}
      <div className="fixed top-20 right-4 z-[200] px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
        Theme: Ivory &amp; Charcoal
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/80 transition-colors"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Agrandissement"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* NAV — Dark charcoal, thin, understated */}
      <nav className="shadow-sm sticky top-0 z-50" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight font-serif">
            Physio<span style={{ color: '#B8977E' }}>-Epalinges</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium" style={{ color: '#A0A0A0' }}>
            <a href="#specialites" className="hover:text-white transition-colors">Traitements</a>
            <a href="#cabinet" className="hover:text-white transition-colors">Le Cabinet</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="px-7 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
              Prendre RDV
            </a>
            <a href="#" className="px-8 py-3 rounded-full text-base font-bold transition-colors shadow-sm border" style={{ backgroundColor: 'transparent', color: '#fff', borderColor: '#555' }}>
              Vidéos
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — Deep charcoal with warm subtle tones */}
      <header className="relative text-white" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-36 md:py-52 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl tracking-tight font-serif">
            Giuseppe Costa
          </h1>
          <p className="text-2xl md:text-3xl mb-14 max-w-3xl font-medium leading-snug" style={{ color: '#C0B8AD' }}>
            Physiothérapeute du sport et thérapie manuelle
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#" className="px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-colors shadow-xl" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
              Prendre rendez-vous <ArrowRight className="ml-2.5 w-5 h-5" />
            </a>
            <a href="#" className="border-2 text-white px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-colors" style={{ borderColor: '#666' }}>
              <Phone className="mr-2.5 w-5 h-5" /> 021 784 26 66
            </a>
          </div>
        </div>
      </header>

      {/* INTRODUCTION SECTION */}
      <section id="cabinet" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-16 items-center">
          <div>
            <h2 className="text-5xl font-extrabold mb-8 tracking-tight font-serif" style={{ color: '#1E1E1E' }}>Expertise au plus haut niveau</h2>
            <div className="w-24 h-1 mb-10 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
            <p className="text-xl leading-relaxed mb-8 font-medium" style={{ color: '#555' }}>
              Physiothérapeute OMPT et SPT avec plus de 11 ans d&apos;expérience, Giuseppe Costa allie thérapie manuelle orthopédique, rééducation sportive et exercice thérapeutique. Formé à l&apos;Université de Bologne et de Pise, il a exercé auprès d&apos;athlètes professionnels au Calcio Catania, au Lausanne Sport M21, au Neuchâtel Xamax et avec l&apos;équipe suisse de football espoirs. Sa pratique intègre les techniques Maitland, Mulligan et McKenzie, le dry needling, la manipulation myofasciale Stecco, ainsi que les ondes de choc — pour un retour au sport optimal et une prise en charge complète des pathologies musculosquelettiques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 font-semibold text-lg" style={{ color: '#2C2C2C' }}>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Thérapie manuelle OMPT</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Rééducation sportive d&apos;élite</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Dry needling &amp; ondes de choc</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Reconnu Croix-Rouge &amp; NAREG</p>
            </div>
          </div>
          {/* Office carousel */}
          <div className="relative h-[450px]">
            <button
              onClick={() => officeCarouselRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 shadow-md rounded-full p-2 transition-colors" style={{ backgroundColor: 'rgba(250,249,246,0.9)', border: '1px solid #ddd' }}
              aria-label="Précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{ color: '#555' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div ref={officeCarouselRef} className="flex gap-3 h-full overflow-x-auto rounded-3xl" style={{ scrollbarWidth: 'none' } as React.CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/office_2.jpg" alt="Cabinet – vue générale" onClick={() => setLightbox('/gallery/office_2.jpg')} className="flex-shrink-0 w-[300px] h-full object-cover rounded-3xl shadow-md cursor-zoom-in hover:opacity-90 transition-opacity" style={{ border: '1px solid #e5e0db' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/office_3.jpg" alt="Cabinet – équipements" onClick={() => setLightbox('/gallery/office_3.jpg')} className="flex-shrink-0 w-[300px] h-full object-cover rounded-3xl shadow-md cursor-zoom-in hover:opacity-90 transition-opacity" style={{ border: '1px solid #e5e0db' }} />
              <div className="flex-shrink-0 w-[340px] h-full rounded-3xl overflow-hidden shadow-md" style={{ border: '1px solid #e5e0db' }}>
                <video src="/gallery/office_1.mp4" preload="metadata" muted playsInline className="w-full h-full object-cover" aria-label="Visite du cabinet" onMouseEnter={e => (e.currentTarget as HTMLVideoElement).setAttribute('controls', '')} onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; if (v.paused) v.removeAttribute('controls'); }} onPause={e => (e.currentTarget as HTMLVideoElement).removeAttribute('controls')} />
              </div>
            </div>
            <button
              onClick={() => officeCarouselRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 shadow-md rounded-full p-2 transition-colors" style={{ backgroundColor: 'rgba(250,249,246,0.9)', border: '1px solid #ddd' }}
              aria-label="Suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{ color: '#555' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* TRAITEMENTS SECTION */}
      <section id="specialites" className="py-28 px-6" style={{ backgroundColor: '#F3F0EB', borderTop: '1px solid #E5E0DB', borderBottom: '1px solid #E5E0DB' }}>
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#1E1E1E' }}>Traitements</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: "Manipulations Vertébrales", desc: "Techniques manuelles pour le rétablissement de la mobilité articulaire." },
            { title: "Dry Needling", desc: "Traitement ciblé des points trigger pour relâcher les tensions musculaires." },
            { title: "Ondes de Choc", desc: "Technologie de pointe pour les tendinopathies, les calcifications et les inflammations." },
            { title: "Massage Thérapeutique", desc: "Massage sportif, déconstructif et fonctionnel." },
            { title: "Traitement de Cervicalgie / Cervicobrachigie", desc: "" },
            { title: "Traitement de l'ATM", desc: "L'ATM (articulation temporo-mandibulaire) peut souffrir d'un déséquilibre musculaire, provoquant des douleurs au niveau de la mâchoire, des tempes, des sinus ou de la nuque. Giuseppe Costa prend en charge ces dysfonctions avec des techniques manuelles ciblées." },
            { title: "Traitement de Maux de Tête", desc: "" },
            { title: "Massage Thérapeutique Remboursé (ASCA)", desc: "" },
          ].map((item, index) => (
            <div key={index} className="rounded-2xl shadow-sm flex flex-col overflow-hidden transition-shadow hover:shadow-lg" style={{ backgroundColor: '#fff', border: '1px solid #E5E0DB' }}>
              <div className="w-full h-48 flex items-center justify-center text-sm" style={{ backgroundColor: '#EAE6E0', color: '#A09890' }}>Photo</div>
              <div className="p-8 flex flex-col items-start">
                <h3 className="text-xl font-bold mb-4 tracking-tight leading-tight" style={{ color: '#1E1E1E' }}>{item.title}</h3>
                <p className="leading-relaxed text-base" style={{ color: '#666' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL SPECIALISATIONS SECTION */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#1E1E1E' }}>Domaines d&apos;expertise</h2>
          <p className="text-xl max-w-2xl mx-auto font-medium" style={{ color: '#777' }}>Expert dans la prise en charge des pathologies orthopédiques et des traumatismes sportifs complexes</p>
          <div className="w-20 h-1 mx-auto rounded-full mt-8" style={{ backgroundColor: '#B8977E' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Genou",
              desc: "Rééducation post-chirurgicale (ligaments, ménisques) et syndromes de surmenage.",
              muscles: ['knees', 'quadriceps'],
              crop: { marginTop: -126 },
            },
            {
              title: "Épaule",
              desc: "Prise en charge de l'instabilité, des lésions de la coiffe des rotateurs et de la douleur chronique.",
              muscles: ['front-deltoids', 'trapezius'],
              crop: { marginTop: -15 },
            },
            {
              title: "Cheville",
              desc: "Récupération post-entorse, instabilités chroniques et rééducation tendineuse.",
              muscles: ['calves', 'left-soleus', 'right-soleus'],
              crop: { marginTop: -155 },
            },
          ].map((item, index) => (
            <div key={index} className="pt-6 pb-10 px-6 rounded-2xl flex flex-col items-center shadow-sm transition-colors" style={{ backgroundColor: '#fff', border: '1px solid #E5E0DB' }}>
              <div style={{ width: 128, height: 128, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, marginBottom: '1.5rem', background: '#F3F0EB' }}>
                <div style={{ marginTop: item.crop.marginTop }}>
                  <Model
                    data={[{ name: item.title, muscles: item.muscles } as IExerciseData]}
                    highlightedColors={['#B8977E']}
                    bodyColor="#D5CFC7"
                    svgStyle={{ width: '128px', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight font-serif" style={{ color: '#1E1E1E' }}>{item.title}</h3>
              <p className="leading-relaxed text-base" style={{ color: '#666' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F3F0EB', borderTop: '1px solid #E5E0DB', borderBottom: '1px solid #E5E0DB' }}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#1E1E1E' }}>Galerie</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
        </div>

        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {([
            { type: 'image', src: '/gallery/physio_1.jpg',  alt: 'Séance de physiothérapie' },
            { type: 'video', src: '/gallery/physio_2.mp4',  alt: 'Exercice de rééducation' },
            { type: 'image', src: '/gallery/physio_4.jpg',  alt: 'Traitement – genou' },
            { type: 'video', src: '/gallery/physio_3.mp4',  alt: 'Entraînement fonctionnel' },
            { type: 'image', src: '/gallery/physio_5.jpg',  alt: 'Traitement – épaule' },
            { type: 'video', src: '/gallery/physio_8.mp4',  alt: 'Physiothérapie sportive' },
            { type: 'image', src: '/gallery/physio_6.jpg',  alt: 'Rééducation sportive' },
            { type: 'video', src: '/gallery/physio_9.mp4',  alt: 'Récupération musculaire' },
            { type: 'image', src: '/gallery/physio_7.jpg',  alt: 'Thérapie manuelle' },
            { type: 'video', src: '/gallery/physio_10.mp4', alt: 'Mobilisation articulaire' },
            { type: 'video', src: '/gallery/physio_11.mp4', alt: 'Renforcement spécifique' },
            { type: 'video', src: '/gallery/physio_12.mp4', alt: 'Techniques manuelles' },
            { type: 'video', src: '/gallery/physio_16.mp4', alt: 'Rééducation en profondeur' },
            { type: 'video', src: '/gallery/physio_17.mp4', alt: 'Physiothérapie du sport' },
          ] as { type: string; src: string; alt: string }[]).map((item, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid #E5E0DB' }}>
              {item.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.alt}
                  onClick={() => setLightbox(item.src)}
                  className="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                />
              ) : (
                <video
                  src={item.src}
                  preload="metadata"
                  playsInline
                  aria-label={item.alt}
                  className="w-full h-auto"
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).setAttribute('controls', '')}
                  onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; if (v.paused) v.removeAttribute('controls'); }}
                  onPause={e => (e.currentTarget as HTMLVideoElement).removeAttribute('controls')}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMIC EXCELLENCE SECTION */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8 tracking-tight font-serif" style={{ color: '#1E1E1E' }}>Excellence Académique et Professionnelle</h2>
          <div className="w-24 h-1 mb-12 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 font-semibold leading-relaxed text-xl" style={{ color: '#3A3A3A' }}>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Diplôme de Physiothérapie — Università di Catania (110/110)</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Master en Physiothérapie du Sport — Università di Pisa</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Master en Thérapie manuelle &amp; Exercice thérapeutique — Université de Bologne</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Titre OMPT (Orthopaedic Manipulative Physical Therapist) — IFOMPT</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Professeur de pathokinésiologie — Université Ludes (Lugano)</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Physiothérapeute — Équipe suisse de football espoirs</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Chef physiothérapie — Neuchâtel Xamax</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Physiothérapeute sportif — Lausanne Sport M21</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Physiothérapeute — Calcio Catania S.p.A.</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Erasmus Plus — Hôpital d&apos;orthopédie et réhabilitation, Poznan (Pologne)</span>
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN PROFILE CARD SECTION */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F3F0EB', borderTop: '1px solid #E5E0DB', borderBottom: '1px solid #E5E0DB' }}>
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 font-serif" style={{ color: '#1E1E1E' }}>Retrouvez-moi sur LinkedIn</h2>
          <p className="text-lg" style={{ color: '#888' }}>Suivez l&apos;actualité du cabinet et les conseils en physiothérapie.</p>
        </div>
        <div className="max-w-xs mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center py-10 px-8" style={{ backgroundColor: '#1E1E1E' }}>
          <div className="w-48 overflow-hidden rounded-2xl mb-6" style={{ backgroundColor: '#2A2A2A' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/gallery/giuseppe_portrait.jpeg" alt="Giuseppe Costa" className="w-full h-auto object-cover object-top" />
          </div>
          <h3 className="text-white text-2xl font-extrabold font-serif tracking-tight mb-1">Giuseppe Costa</h3>
          <p className="text-sm font-medium mb-6" style={{ color: '#999' }}>Physiothérapeute</p>
          <a
            href="#"
            className="flex items-center gap-2 transition-colors text-white font-bold px-6 py-2.5 rounded-full text-sm" style={{ backgroundColor: '#B8977E' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Voir le profil
          </a>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer id="contact" className="text-white py-24 px-6 mt-24" style={{ backgroundColor: '#1E1E1E', borderTop: '3px solid #B8977E' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-16 items-start">
          
          <div className="h-full flex flex-col justify-between items-start">
            <div>
              <h3 className="text-white text-3xl font-extrabold mb-10 tracking-tight font-serif">Nous trouver</h3>
              <ul className="space-y-7 text-lg" style={{ color: '#999' }}>
                <li className="flex items-start">
                  <MapPin className="w-7 h-7 mr-5 shrink-0 mt-1" style={{ color: '#B8977E' }} />
                  <div>
                    <p className="font-bold text-white text-xl">Physio-Epalinges - Giuseppe Costa</p>
                    <p>Place Croix-Blanche 3</p>
                    <p>1066 Épalinges</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="w-7 h-7 mr-5 shrink-0" style={{ color: '#B8977E' }} />
                  <span className="font-bold text-white text-xl">021 784 26 66</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-7 h-7 mr-5 shrink-0" style={{ color: '#B8977E' }} />
                  <span className="text-xl">Horaires sur demande</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 w-full sm:w-auto">
              <a href="#" className="inline-block px-10 py-4 rounded-full text-lg font-bold transition-colors shadow-lg w-full text-center text-white" style={{ backgroundColor: '#B8977E' }}>
                Prise de RDV en ligne
              </a>
            </div>
          </div>

          <div className="h-full rounded-3xl overflow-hidden p-4 shadow-xl" style={{ border: '1px solid #333', backgroundColor: '#FAF9F6' }}>
            <h4 className="text-sm font-semibold mb-3 ml-1" style={{ color: '#666' }}>Localisation du cabinet à Epalinges</h4>
            <div className="h-[380px] rounded-2xl overflow-hidden shadow-inner" style={{ border: '1px solid #E5E0DB' }}>
              <iframe
                src="https://maps.google.com/maps?q=Place+Croix-Blanche+3,+1066+Epalinges,+Suisse&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du cabinet"
              />
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 text-base text-center font-medium" style={{ borderTop: '1px solid #333', color: '#666' }}>
          © {new Date().getFullYear()} Physio-Epalinges - Giuseppe Costa. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
