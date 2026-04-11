'use client';

import React from 'react';
import { Phone, MapPin, Clock, ArrowRight, Hand, Syringe, Zap } from 'lucide-react';
import Model, { IExerciseData } from 'react-body-highlighter';

export default function GiuseppeCostaAereSite() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* HEADER / NAVIGATION (Aéré) */}
      <nav className="bg-sky-950 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">
            Physio<span className="text-sky-400">-epalinges</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-200">
            <a href="#specialites" className="hover:text-sky-200 transition-colors">Spécialités</a>
            <a href="#cabinet" className="hover:text-sky-200 transition-colors">Le Cabinet</a>
            <a href="#contact" className="hover:text-sky-200 transition-colors">Contact</a>
          </div>
          <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-sky-600 transition-colors shadow-sm">
            Prendre RDV
          </a>
        </div>
      </nav>

      {/* HERO SECTION (Très aérée) */}
      <header className="relative bg-sky-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058917765-a780ede07a3e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl tracking-tight">
            Giuseppe Costa
          </h1>
          <p className="text-2xl md:text-3xl text-sky-200 mb-12 max-w-3xl font-semibold leading-snug">
            Physiothérapeute du sport et thérapie manuelle
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center hover:bg-sky-600 transition-colors shadow-xl">
              Prendre rendez-vous <ArrowRight className="ml-2.5 w-5 h-5" />
            </a>
            <a href="tel:+41217842666" className="border-2 border-sky-400 text-white px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center hover:bg-sky-800 transition-colors">
              <Phone className="mr-2.5 w-5 h-5" /> 021 784 26 66
            </a>
          </div>
        </div>
      </header>

      {/* INTRODUCTION SECTION (Aérée par padding py-24) */}
      <section id="cabinet" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-16 items-center">
          <div>
            <h2 className="text-5xl font-extrabold text-slate-950 mb-8 tracking-tight">Expertise au plus haut niveau</h2>
            <div className="w-24 h-2 bg-sky-500 mb-10 rounded-full"></div>
            <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
              Fort de 10 ans d&apos;expérience au plus haut niveau professionnel, Giuseppe Costa propose une approche thérapeutique d&apos;élite pour le traitement des troubles musculaires, ainsi qu&apos;une thérapie manuelle et une approche thérapeutique.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 text-slate-950 font-semibold text-lg">
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5 text-sky-500" />Rééducation active</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5 text-sky-500" />Renforcement spécifique</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5 text-sky-500" />Récupération gestes athlétiques</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5 text-sky-500" />Prévention des rechutes</p>
            </div>
          </div>
          <div className="h-[450px] bg-slate-100 rounded-3xl overflow-hidden shadow-inner relative border border-slate-200">
             <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
               [Photo Cabinet Giuseppe Costa]
             </div>
          </div>
        </div>
      </section>

      {/* TRAITEMENTS SECTION (Sur fond gris très clair, aérée py-24 et gap-10) */}
      <section id="specialites" className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">Services et Traitements Spécialisés</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: Hand, title: "Manipulations Vertébrales", desc: "techniques manuelles pour le rétablissement de la mobilité articulaire." },
            { icon: Syringe, title: "Dry Needling", desc: "traitement ciblé des points trigger pour relâcher les tensions musculaires." },
            { icon: Zap, title: "Ondes de Choc", desc: "technologie de pointe pour les tendinopathies, les calcifications et les inflammations." },
            { icon: Hand, title: "Massage Thérapeutique", desc: "massage sportif, déconstructif et fonctionnel." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col items-start">
              <div className="w-16 h-16 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center mb-8 border border-sky-200">
                <item.icon className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-sky-950 tracking-tight leading-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL SPECIALISATIONS SECTION (Aérée par padding py-24) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">Spécialisations cliniques</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Expert dans la prise en charge des pathologies orthopédiques et des traumatismes sportifs complexes</p>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Genou",
              desc: "rééducation post-chirurgicale (ligaments, ménisques) et syndromes de surmenage.",
              muscles: ['knees', 'quadriceps'],
              // SVG 0-0-100-200 @ 128px wide = 256px tall (scale 1.28). Knee Y≈140-157 → pixel 179-201. Center@190, offset=190-64=-126
              crop: { marginTop: -126 },
            },
            {
              title: "Épaule",
              desc: "prise en charge de l'instabilité, des lésions de la coiffe des rotateurs et de la douleur chronique.",
              muscles: ['front-deltoids', 'trapezius'],
              // Shoulder/trap Y≈25-60 → pixel 32-77. Start at pixel 15 so shoulder sits nicely in upper-center of circle
              crop: { marginTop: -15 },
            },
            {
              title: "Cheville",
              desc: "récupération post-entorse, instabilités chroniques et rééducation tendineuse.",
              muscles: ['calves', 'left-soleus', 'right-soleus'],
              // Calves+foot Y≈153-200 → pixel 196-256. Shift up to show full foot: center@224, offset=224-64=-160
              crop: { marginTop: -155 },
            },
          ].map((item, index) => (
            <div key={index} className="bg-white pt-6 pb-10 px-6 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors flex flex-col items-center shadow-sm">
              <div style={{ width: 128, height: 128, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, marginBottom: '1.5rem', background: 'white' }}>
                <div style={{ marginTop: item.crop.marginTop }}>
                  <Model
                    data={[{ name: item.title, muscles: item.muscles } as IExerciseData]}
                    highlightedColors={['#0ea5e9']}
                    bodyColor="#cbd5e1"
                    svgStyle={{ width: '128px', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">Galerie</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            { type: 'image', src: "/gallery/dwh-0025.jpg", alt: "Cabinet de physiothérapie" },
            { type: 'image', src: "/gallery/dwh-0043.jpg", alt: "Séance de physiothérapie" },
            { type: 'image', src: "/gallery/physiotherapy-01.jpg", alt: "Traitement physiothérapeutique" },
            { type: 'image', src: "/gallery/equipe-suisse-football-m18.jpg", alt: "Équipe suisse de football M18" },
            { type: 'image', src: "/gallery/cabinet-01.jpg", alt: "Giuseppe Costa physiothérapeute" },
            { type: 'video', src: "/gallery/professeur-ludes-lugano.mp4", alt: "Professeur – Université Ludes Lugano" },
            { type: 'video', src: "/gallery/physio-lausanne-sport.mp4", alt: "Physio – Lausanne Sport M21" },
            { type: 'video', src: "/gallery/video-01.mp4", alt: "Séance de physiothérapie" },
            { type: 'video', src: "/gallery/video-02.mp4", alt: "Traitement" },
          ].map((item, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
              {item.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.src} alt={item.alt} className="w-full h-auto object-cover" />
              ) : (
                <video src={item.src} controls preload="metadata" muted playsInline className="w-full h-auto" aria-label={item.alt} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMIC EXCELLENCE SECTION (Aérée par padding py-20) */}
      <section className="bg-slate-100 py-20 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-950 mb-8 tracking-tight">Excellence Académique et Professionnelle</h2>
          <div className="w-24 h-2 bg-sky-500 mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-16 font-semibold text-slate-900 leading-relaxed text-xl">
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 text-sky-600 shrink-0 mt-1.5" />
              <span>Master en thérapie manuelle (Université de Bologne) &amp; Master en kinésithérapie du sport (Université de Pise).</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 text-sky-600 shrink-0 mt-1.5" />
              <span>Professeur Université Ludes (Lugano)</span>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER (Aéré par padding py-24 et gap-16) */}
      <footer id="contact" className="bg-sky-950 text-slate-300 py-24 px-6 border-t-4 border-sky-500 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-16 items-start">
          
          <div className="h-full flex flex-col justify-between items-start">
            <div>
              <h3 className="text-white text-3xl font-extrabold mb-10 tracking-tight">Nous trouver</h3>
              <ul className="space-y-7 text-lg">
                <li className="flex items-start">
                  <MapPin className="w-7 h-7 mr-5 text-sky-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white text-xl">Physio-epalinges - Giuseppe Costa</p>
                    <p>Place Croix-Blanche 3</p>
                    <p>1066 Épalinges</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="w-7 h-7 mr-5 text-sky-400 shrink-0" />
                  <span className="font-bold text-white text-xl">021 784 26 66</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-7 h-7 mr-5 text-sky-400 shrink-0" />
                  <span className="text-xl">Horaires sur demande</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 w-full sm:w-auto">
              <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="inline-block bg-sky-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-sky-600 transition-colors shadow-lg w-full text-center">
                Prise de RDV en ligne
              </a>
            </div>
          </div>

          <div className="h-full border border-sky-800 rounded-3xl overflow-hidden p-4 bg-white shadow-xl">
            <h4 className="text-sm font-semibold text-slate-600 mb-3 ml-1">Localisation du cabinet à Epalinges</h4>
            <div className="h-[380px] rounded-2xl overflow-hidden shadow-inner border border-slate-200">
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
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-sky-900 text-base text-center text-slate-500 font-medium">
          © {new Date().getFullYear()} Physio-epalinges - Giuseppe Costa. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
