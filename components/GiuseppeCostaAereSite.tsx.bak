'use client';

import React from 'react';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Model, { IExerciseData } from 'react-body-highlighter';

export default function GiuseppeCostaAereSite() {
  const [lightbox, setLightbox] = React.useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [treatmentModal, setTreatmentModal] = React.useState<{ title: string; desc: string } | null>(null);
  const officeCarouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setLightbox(null); setTreatmentModal(null); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAF9F6', color: '#444' }}>
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
      <nav className="shadow-sm sticky top-0 z-50" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">
            Physio<span style={{ color: '#B8977E' }}>-Epalinges</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium" style={{ color: '#C0B8AD' }}>
            <a href="#specialites" className="hover:text-white transition-colors">Spécialités</a>
            <a href="#cabinet" className="hover:text-white transition-colors">Le Cabinet</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="px-7 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
              Prendre RDV
            </a>
            <a href="/exercices" className="text-white px-8 py-3 rounded-full text-base font-bold transition-colors shadow-sm" style={{ backgroundColor: '#2C2C2C' }}>
              Vidéos
            </a>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenu(o => !o)}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenu
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {/* Mobile dropdown */}
        {mobileMenu && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ borderTop: '1px solid #333' }}>
            <a href="#cabinet" onClick={() => setMobileMenu(false)} className="text-sm font-medium py-2 transition-colors" style={{ color: '#C0B8AD' }}>Le Cabinet</a>
            <a href="#specialites" onClick={() => setMobileMenu(false)} className="text-sm font-medium py-2 transition-colors" style={{ color: '#C0B8AD' }}>Spécialités</a>
            <a href="#contact" onClick={() => setMobileMenu(false)} className="text-sm font-medium py-2 transition-colors" style={{ color: '#C0B8AD' }}>Contact</a>
            <div className="flex flex-col gap-3 pt-2">
              <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="text-center px-7 py-2.5 rounded-full text-sm font-bold transition-colors" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                Prendre RDV
              </a>
              <a href="/exercices" className="text-center text-white px-7 py-2.5 rounded-full text-sm font-bold transition-colors" style={{ backgroundColor: '#2C2C2C' }}>
                Vidéos
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION (Très aérée) */}
      <header className="relative text-white" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-25 mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl tracking-tight font-serif">
            Giuseppe Costa
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl font-semibold leading-snug" style={{ color: '#C0B8AD' }}>
            Physiothérapeute du sport et thérapie manuelle
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-colors shadow-xl" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
              Prendre rendez-vous <ArrowRight className="ml-2.5 w-5 h-5" />
            </a>
            <a href="tel:+41217842666" className="border-2 text-white px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-colors" style={{ borderColor: '#B8977E' }}>
              <Phone className="mr-2.5 w-5 h-5" /> 021 784 26 66
            </a>
          </div>
        </div>
      </header>

      {/* INTRODUCTION SECTION */}
      <section id="cabinet" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Expertise au plus haut niveau</h2>
            <div className="w-24 h-2 mb-10 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
            <p className="text-xl leading-relaxed mb-8 font-medium" style={{ color: '#555' }}>
              Physiothérapeute OMPT et SPT avec plus de 11 ans d&apos;expérience, j&apos;allie thérapie manuelle orthopédique, rééducation sportive et exercice thérapeutique. Formé à l&apos;Université de Bologne et de Pise, j&apos;ai exercé auprès d&apos;athlètes professionnels au Calcio Catania, au Lausanne Sport M21, au Neuchâtel Xamax et avec l&apos;équipe suisse de football espoirs. Ma pratique intègre les techniques Maitland, Mulligan et McKenzie, le dry needling, la manipulation myofasciale Stecco, ainsi que les ondes de choc — pour un retour au sport optimal et une prise en charge complète des pathologies musculosquelettiques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 font-semibold text-lg" style={{ color: '#2C2C2C' }}>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Thérapie manuelle OMPT</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Rééducation sportive d&apos;élite</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Dry needling &amp; ondes de choc</p>
              <p className="flex items-center"><ArrowRight className="w-5 h-5 mr-3.5" style={{ color: '#B8977E' }} />Reconnu Croix-Rouge &amp; NAREG</p>
            </div>
          </div>
          {/* Office carousel */}
          <div className="relative h-[300px] md:h-[450px] min-w-0">
            <button
              onClick={() => officeCarouselRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 shadow-md border rounded-full p-2 transition-colors" style={{ backgroundColor: 'rgba(250,249,246,0.8)', borderColor: '#E5E0DB' }}
              aria-label="Précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div ref={officeCarouselRef} className="flex gap-3 h-full overflow-x-auto rounded-3xl" style={{ scrollbarWidth: 'none' } as React.CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/office_2.jpg" alt="Cabinet – vue générale" onClick={() => setLightbox('/gallery/office_2.jpg')} className="flex-shrink-0 w-[240px] md:w-[300px] h-full object-cover rounded-3xl shadow-md border border-slate-200 cursor-zoom-in hover:opacity-90 transition-opacity" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/office_3.jpg" alt="Cabinet – équipements" onClick={() => setLightbox('/gallery/office_3.jpg')} className="flex-shrink-0 w-[240px] md:w-[300px] h-full object-cover rounded-3xl shadow-md border border-slate-200 cursor-zoom-in hover:opacity-90 transition-opacity" />
              <div className="flex-shrink-0 w-[260px] md:w-[340px] h-full rounded-3xl overflow-hidden shadow-md border border-slate-200">
                <video src="/gallery/office_1.mp4" controls preload="metadata" muted playsInline className="w-full h-full object-cover" aria-label="Visite du cabinet" />
              </div>
            </div>
            <button
              onClick={() => officeCarouselRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 shadow-md border rounded-full p-2 transition-colors" style={{ backgroundColor: 'rgba(250,249,246,0.8)', borderColor: '#E5E0DB' }}
              aria-label="Suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* TRAITEMENTS SECTION */}
      <section id="specialites" className="py-24 px-6 border-y" style={{ backgroundColor: '#F3F0EB', borderColor: '#E5E0DB' }}>
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Services et Traitements Spécialisés</h2>
          <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: "Manipulations Vertébrales", desc: "Techniques manuelles pour le rétablissement de la mobilité articulaire." },
            { title: "Dry Needling", desc: "Traitement ciblé des points trigger pour relâcher les tensions musculaires." },
            { title: "Ondes de Choc", desc: "Technologie de pointe pour les tendinopathies, les calcifications et les inflammations." },
            { title: "Traitement de Cervicalgie / Cervicobrachigie", desc: "" },
            { title: "Traitement de l'ATM", desc: "L'ATM (articulation temporo-mandibulaire) peut souffrir d'un déséquilibre musculaire, provoquant des douleurs au niveau de la mâchoire, des tempes, des sinus ou de la nuque. Je prends en charge ces dysfonctions avec des techniques manuelles ciblées." },
            { title: "Traitement de Maux de Tête", desc: "" },
            { title: "Massage Thérapeutique Remboursé (ASCA)", desc: "" },
          ].map((item, index) => (
            <div key={index} className="rounded-3xl shadow-sm hover:shadow-xl transition-shadow flex flex-col overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-[#B8977E]" style={{ backgroundColor: '#FAF9F6', border: '1px solid #E5E0DB' }} onClick={() => setTreatmentModal(item)}>
              <div className="w-full h-48 flex items-center justify-center text-sm" style={{ backgroundColor: '#EAE6E0', color: '#999' }}>Photo</div>
              <div className="p-8 flex flex-col items-start">
                <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight" style={{ color: '#2C2C2C' }}>{item.title}</h3>
                <p className="leading-relaxed text-base" style={{ color: '#666' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL SPECIALISATIONS SECTION (Aérée par padding py-24) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Spécialisations cliniques</h2>
          <p className="text-xl max-w-2xl mx-auto font-medium" style={{ color: '#666' }}>Expert dans la prise en charge des pathologies orthopédiques et des traumatismes sportifs complexes</p>
          <div className="w-20 h-1.5 mx-auto rounded-full mt-8" style={{ backgroundColor: '#B8977E' }}></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            {
              title: "Dos",
              desc: "Prise en charge des lombalgies, hernies discales, scolioses, douleurs dorsales chroniques et cervicalgies.",
              muscles: ['trapezius', 'upper-back', 'lower-back'],
              crop: { marginTop: -15 },
              type: 'posterior' as const,
            },
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
            <div key={index} className="pt-6 pb-10 px-6 rounded-2xl transition-colors flex flex-col items-center shadow-sm" style={{ backgroundColor: '#FAF9F6', border: '1px solid #E5E0DB' }}>
              <div style={{ width: 128, height: 128, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, marginBottom: '1.5rem', background: '#EAE6E0' }}>
                <div style={{ marginTop: item.crop.marginTop }}>
                  <Model
                    data={[{ name: item.title, muscles: item.muscles } as IExerciseData]}
                    highlightedColors={['#B8977E']}
                    bodyColor="#D5CFC7"
                    svgStyle={{ width: '128px', height: 'auto', display: 'block' }}
                    {...('type' in item && item.type ? { type: item.type } : {})}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ color: '#2C2C2C' }}>{item.title}</h3>
              <p className="leading-relaxed text-base" style={{ color: '#555' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TREATMENT MODAL */}
      {treatmentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={() => setTreatmentModal(null)}>
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl" style={{ backgroundColor: '#FAF9F6' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setTreatmentModal(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/80 transition-colors"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-56 flex items-center justify-center text-sm rounded-t-3xl" style={{ backgroundColor: '#EAE6E0', color: '#999' }}>Photo</div>
            <div className="p-8 md:p-12">
              {treatmentModal.title === 'Massage Th\u00e9rapeutique Rembours\u00e9 (ASCA)' ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>MASSAGES PROFESSIONNELS POUR VOTRE BIEN-\u00caTRE</h2>
                  <div className="w-20 h-1.5 mb-8 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: '#555' }}>
                    Physioth\u00e9rapeute qualifi\u00e9 avec un master en th\u00e9rapie manuelle et un master en sport. J&apos;ai travaill\u00e9 avec plusieurs \u00e9quipes de football professionnel tels que Lausanne Sport, Servette FC, Vevey et l&apos;\u00e9quipe nationale suisse.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#555' }}>
                    Vous vous sentez tendu ? Vous avez des douleurs musculaires ou articulaires ?<br />
                    Vous cherchez un traitement cibl\u00e9 pour am\u00e9liorer votre bien-\u00eatre ?
                  </p>
                  <p className="leading-relaxed mb-8" style={{ color: '#555' }}>
                    Je suis un physioth\u00e9rapeute qualifi\u00e9 et je propose des massages personnalis\u00e9s pour soulager les tensions, favoriser la relaxation et am\u00e9liorer la fonctionnalit\u00e9 musculaire et articulaire.
                  </p>
                  <h3 className="text-xl font-bold mb-4 font-serif" style={{ color: '#2C2C2C' }}>Comment se d\u00e9roule la s\u00e9ance ?</h3>
                  <p className="leading-relaxed mb-3" style={{ color: '#555' }}>Chaque s\u00e9ance dure 45 minutes, r\u00e9parties comme suit :</p>
                  <ul className="space-y-2 ml-1 mb-8" style={{ color: '#555' }}>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>\u2022</span><span><strong style={{ color: '#2C2C2C' }}>1\u00e8re phase : Anamn\u00e8se personnalis\u00e9e</strong>, pour identifier vos besoins sp\u00e9cifiques.</span></li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>\u2022</span><span><strong style={{ color: '#2C2C2C' }}>2i\u00e8me phase : Traitement cibl\u00e9</strong>, avec des techniques sp\u00e9cialis\u00e9es telles que :</span></li>
                    <li className="flex items-start gap-2 ml-6"><span style={{ color: '#B8977E' }}>\u2022</span><span><strong style={{ color: '#2C2C2C' }}>Th\u00e9rapie manuelle articulaire</strong> : pour am\u00e9liorer la mobilit\u00e9 des articulations.</span></li>
                    <li className="flex items-start gap-2 ml-6"><span style={{ color: '#B8977E' }}>\u2022</span><span><strong style={{ color: '#2C2C2C' }}>Techniques musculaires</strong> : comme le Strain-Counterstrain pour lib\u00e9rer les tensions profondes.</span></li>
                    <li className="flex items-start gap-2 ml-6"><span style={{ color: '#B8977E' }}>\u2022</span><span><strong style={{ color: '#2C2C2C' }}>Mobilisation neurale</strong> : pour traiter les troubles li\u00e9s au syst\u00e8me nerveux p\u00e9riph\u00e9rique.</span></li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4 font-serif" style={{ color: '#2C2C2C' }}>Les b\u00e9n\u00e9fices de mes traitements :</h3>
                  <ul className="space-y-1.5 mb-8" style={{ color: '#555' }}>
                    <li>\u2714 R\u00e9duction des douleurs musculaires et articulaires</li>
                    <li>\u2714 Am\u00e9lioration de la flexibilit\u00e9 et de la mobilit\u00e9</li>
                    <li>\u2714 Relaxation profonde et r\u00e9duction du stress</li>
                    <li>\u2714 Bien-\u00eatre g\u00e9n\u00e9ral renforc\u00e9</li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4 font-serif" style={{ color: '#2C2C2C' }}>Les techniques que j&apos;utilise :</h3>
                  <ul className="space-y-1.5 mb-8" style={{ color: '#555' }}>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>\u2022</span>Massage th\u00e9rapeutique</li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>\u2022</span>Massage relaxant</li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>\u2022</span>Massage sportif</li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>\u2022</span>Massage d\u00e9contracturant</li>
                  </ul>
                  <div className="pt-2">
                    <p className="text-lg font-bold mb-2" style={{ color: '#2C2C2C' }}>\ud83d\udcde R\u00e9servez d\u00e8s maintenant</p>
                    <p className="leading-relaxed" style={{ color: '#555' }}>
                      Offrez-vous une heure pour votre bien-\u00eatre.<br />
                      Le tout accompagn\u00e9 d&apos;une musique personnalis\u00e9e et adapt\u00e9e \u00e0 vos besoins du moment.
                    </p>
                    <p className="mt-3" style={{ color: '#555' }}>
                      Contactez-moi d\u00e8s aujourd&apos;hui pour prendre rendez-vous ou pour plus d&apos;informations.
                    </p>
                    <a href="tel:+41217842666" className="inline-block mt-4 px-8 py-3 rounded-full text-base font-bold transition-colors" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                      021 784 26 66
                    </a>
                    <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 ml-3 px-8 py-3 rounded-full text-base font-bold transition-colors border-2" style={{ borderColor: '#B8977E', color: '#B8977E' }}>
                      Prendre RDV en ligne
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>{treatmentModal.title}</h2>
                  <div className="w-20 h-1.5 mb-8 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
                  {treatmentModal.desc && (
                    <p className="text-lg leading-relaxed mb-8" style={{ color: '#555' }}>{treatmentModal.desc}</p>
                  )}
                  <div className="pt-2">
                    <a href="tel:+41217842666" className="inline-block px-8 py-3 rounded-full text-base font-bold transition-colors" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                      021 784 26 66
                    </a>
                    <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 ml-3 px-8 py-3 rounded-full text-base font-bold transition-colors border-2" style={{ borderColor: '#B8977E', color: '#B8977E' }}>
                      Prendre RDV en ligne
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ACADEMIC EXCELLENCE SECTION */}
      <section className="py-20 px-6 border-y" style={{ backgroundColor: '#F3F0EB', borderColor: '#E5E0DB' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Excellence Académique et Professionnelle</h2>
          <div className="w-24 h-2 mb-12 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 font-semibold leading-relaxed text-xl" style={{ color: '#2C2C2C' }}>
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

      {/* GALLERY SECTION */}
      <section className="py-24 px-6 border-y" style={{ backgroundColor: '#F3F0EB', borderColor: '#E5E0DB' }}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Galerie</h2>
          <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
        </div>

        {/* Mixed masonry – photos and videos interleaved, natural aspect ratios */}
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

      {/* LINKEDIN PROFILE CARD SECTION */}
      <section className="py-20 px-6 border-y" style={{ backgroundColor: '#FAF9F6', borderColor: '#E5E0DB' }}>
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 font-serif" style={{ color: '#2C2C2C' }}>Retrouvez-moi sur LinkedIn</h2>
          <p className="text-lg" style={{ color: '#666' }}>Suivez l&apos;actualité du cabinet et les conseils en physiothérapie.</p>
        </div>
        <div className="max-w-xs mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center py-10 px-8" style={{ backgroundColor: '#1E1E1E' }}>
          <div className="w-48 overflow-hidden rounded-2xl mb-6" style={{ backgroundColor: '#333' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/gallery/giuseppe_portrait.jpeg" alt="Giuseppe Costa" className="w-full h-auto object-cover object-top" />
          </div>
          <h3 className="text-white text-2xl font-extrabold font-serif tracking-tight mb-1">Giuseppe Costa</h3>
          <p className="text-sm font-medium mb-6" style={{ color: '#999' }}>Physiothérapeute</p>
          <a
            href="https://www.linkedin.com/in/giuseppe-costa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold px-6 py-2.5 rounded-full text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Voir le profil
          </a>
        </div>
      </section>

      {/* CONTACT & FOOTER (Aéré par padding py-24 et gap-16) */}
      <footer id="contact" className="text-white py-24 px-6 mt-24" style={{ backgroundColor: '#1E1E1E', borderTop: '4px solid #B8977E' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-16 items-start">
          
          <div className="h-full flex flex-col justify-between items-start">
            <div>
              <h3 className="text-white text-3xl font-extrabold mb-10 tracking-tight font-serif">Nous trouver</h3>
              <ul className="space-y-7 text-lg" style={{ color: '#C0B8AD' }}>
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
              <a href="https://www.onedoc.ch/en/physiotherapist/epalinges/pcyqz/giuseppe-costa" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full text-lg font-bold transition-colors shadow-lg w-full text-center" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                Prise de RDV en ligne
              </a>
            </div>
          </div>

          <div className="h-full rounded-3xl overflow-hidden p-4 shadow-xl" style={{ border: '1px solid #333', backgroundColor: '#F3F0EB' }}>
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
        <div className="max-w-7xl mx-auto mt-20 pt-10 text-base text-center font-medium" style={{ borderTop: '1px solid #333', color: '#888' }}>
          © {new Date().getFullYear()} Physio-Epalinges - Giuseppe Costa. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
