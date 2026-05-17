'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Model, { IExerciseData } from 'react-body-highlighter';

export default function GiuseppeCostaAereSite() {
  const [lightbox, setLightbox] = React.useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [treatmentModal, setTreatmentModal] = React.useState<{ title: string; desc: string } | null>(null);
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const officeCarouselRef = React.useRef<HTMLDivElement>(null);

  const WIDGET_ID = '2edd69a4568fd84cd1ef80774acbcefd42cc98790aaefdafd65a4f2e8f85edd1';

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setLightbox(null); setTreatmentModal(null); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  React.useEffect(() => {
    if (!bookingOpen) return;
    const iframe = document.getElementById('od-widget-' + WIDGET_ID) as HTMLIFrameElement | null;
    if (iframe && iframe.src === 'about:blank') {
      iframe.src = 'https://www.onedoc.ch/en/widget/' + WIDGET_ID;
    }
    const onMessage = (e: MessageEvent) => {
      const id = e.data['od-widget-id'];
      const height = e.data['od-widget-height'];
      const ios = e.data['od-widget-ios'];
      if (id !== WIDGET_ID) return;
      const el = document.getElementById('od-widget-' + id) as HTMLIFrameElement | null;
      if (!el) return;
      if (height) el.style.height = height + 'px';
      if (ios === true) { el.style.width = '100px'; el.style.minWidth = '100%'; el.scrolling = 'no'; }
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setBookingOpen(false); };
    window.addEventListener('message', onMessage);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('message', onMessage);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [bookingOpen, WIDGET_ID]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAF9F6', color: '#444' }}>

      {/* FLOATING BOOKING BUTTON */}
      <button
        onClick={() => setBookingOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-8 py-5 rounded-full text-white text-base font-bold shadow-2xl transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#B8977E' }}
        aria-label="Prendre rendez-vous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Prendre RDV
      </button>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="relative w-full sm:max-w-2xl mx-auto rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#FAF9F6', maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid #E5E0DB' }}>
              <h2 className="text-xl font-extrabold tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Réserver en ligne</h2>
              <button
                onClick={() => setBookingOpen(false)}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 72px)' }}>
              <iframe
                id={`od-widget-${WIDGET_ID}`}
                src="about:blank"
                frameBorder="0"
                style={{ width: '100%', height: '520px', display: 'block' }}
                title="Réservation en ligne OneDoc"
              />
            </div>
          </div>
        </div>
      )}

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
            <a href="#specialites" className="hover:text-white transition-colors">Traitements</a>
            <a href="#cabinet" className="hover:text-white transition-colors">Le Cabinet</a>
            <button onClick={() => setBookingOpen(true)} className="hover:text-white transition-colors">Réservation</button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
              <button onClick={() => setBookingOpen(true)} className="px-7 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
              Prendre RDV
            </button>
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
            <a href="#specialites" onClick={() => setMobileMenu(false)} className="text-sm font-medium py-2 transition-colors" style={{ color: '#C0B8AD' }}>Traitements</a>
            <button onClick={() => { setMobileMenu(false); setBookingOpen(true); }} className="text-sm font-medium py-2 transition-colors text-left" style={{ color: '#C0B8AD' }}>Réservation</button>
            <a href="#contact" onClick={() => setMobileMenu(false)} className="text-sm font-medium py-2 transition-colors" style={{ color: '#C0B8AD' }}>Contact</a>
            <div className="flex flex-col gap-3 pt-2">
              <button onClick={() => { setMobileMenu(false); setBookingOpen(true); }} className="text-center px-7 py-2.5 rounded-full text-sm font-bold transition-colors" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                Prendre RDV
              </button>
              <a href="/exercices" className="text-center text-white px-7 py-2.5 rounded-full text-sm font-bold transition-colors" style={{ backgroundColor: '#2C2C2C' }}>
                Vidéos
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION (Très aérée) */}
      <header className="relative text-white" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="absolute inset-0 overflow-hidden opacity-25 mix-blend-overlay">
          <Image src="/hero-bg.jpg" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl tracking-tight font-serif">
            Giuseppe Costa
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl font-semibold leading-snug" style={{ color: '#C0B8AD' }}>
            Physiothérapeute du sport et thérapie manuelle
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => setBookingOpen(true)} className="px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-colors shadow-xl" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
              Prendre rendez-vous <ArrowRight className="ml-2.5 w-5 h-5" />
            </button>
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
              Physiothérapeute OMPT et SPT avec plus de 11 ans d&apos;expérience, je combine thérapie manuelle orthopédique, rééducation sportive et exercice thérapeutique. Formé à l&apos;Université de Bologne et de Pise, j&apos;ai exercé auprès d&apos;athlètes professionnels au Calcio Catania, au Lausanne Sport M21, au Neuchâtel Xamax et avec l&apos;équipe suisse de football espoirs. Ma pratique intègre les techniques Maitland, Mulligan et McKenzie, le dry needling, la manipulation myofasciale Stecco, ainsi que les ondes de choc — pour un retour au sport optimal et une prise en charge complète des pathologies musculosquelettiques.
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
              <div onClick={() => setLightbox('/gallery/office_2.jpg')} className="relative flex-shrink-0 w-[240px] md:w-[300px] h-full rounded-3xl overflow-hidden shadow-md border border-slate-200 cursor-zoom-in hover:opacity-90 transition-opacity">
                <Image src="/gallery/office_2.jpg" alt="Cabinet – vue générale" fill className="object-cover" sizes="300px" />
              </div>
              <div onClick={() => setLightbox('/gallery/office_3.jpg')} className="relative flex-shrink-0 w-[240px] md:w-[300px] h-full rounded-3xl overflow-hidden shadow-md border border-slate-200 cursor-zoom-in hover:opacity-90 transition-opacity">
                <Image src="/gallery/office_3.jpg" alt="Cabinet – équipements" fill className="object-cover" sizes="300px" />
              </div>
              <div className="flex-shrink-0 w-[260px] md:w-[340px] h-full rounded-3xl overflow-hidden shadow-md border border-slate-200">
                <video src="/gallery/office_1.mp4" preload="metadata" muted playsInline className="w-full h-full object-cover" aria-label="Visite du cabinet" onMouseEnter={e => (e.currentTarget as HTMLVideoElement).setAttribute('controls', '')} onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; if (v.paused) v.removeAttribute('controls'); }} onPause={e => (e.currentTarget as HTMLVideoElement).removeAttribute('controls')} />
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
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Traitements</h2>
          <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: "Manipulations Vertébrales", desc: "Techniques de thérapie manuelle orthopédique visant à restaurer la mobilité articulaire des vertèbres cervicales, dorsales et lombaires. Indiquées pour les blocages articulaires et les douleurs chroniques du dos et du cou, elles s'appuient sur les approches Maitland et Mulligan pour un traitement précis et ciblé. La mobilisation articulaire permet de retrouver une amplitude de mouvement optimale tout en réduisant la douleur et les contractures musculaires associées." },
            { title: "Dry Needling", desc: "Insertion de fines aiguilles dans les points gâchettes (trigger points) myofasciaux pour relâcher les tensions musculaires profondes et réduire la douleur. Technique complémentaire particulièrement efficace contre les douleurs cervicales, dorsales, les myalgies chroniques et les céphalées de tension. La désactivation des trigger points améliore la circulation locale, restaure la longueur musculaire normale et diminue l'excitabilité du système nerveux central." },
            { title: "Ondes de Choc", desc: "Traitement par ondes acoustiques à haute énergie ciblant les zones douloureuses chroniques. Particulièrement efficace pour les tendinopathies (épaule, coude, genou, talon d'Achille), les calcifications, la fasciite plantaire et les douleurs de cicatrisation. Les ondes de choc stimulent la néo-vascularisation, accélèrent la régénération tissulaire et désactivent les nocicepteurs responsables de la douleur chronique." },
            { title: "Traitement de Cervicalgie / Cervicobrachigie", desc: "Prise en charge complète des douleurs cervicales et des irradiations vers le bras (cervicobrachigie), causées par une atteinte discale, une compression nerveuse ou un déséquilibre musculaire. Le traitement combine thérapie manuelle ciblée, mobilisations neurales et techniques Mulligan pour éliminer la douleur à la source, associé à des exercices de stabilisation cervicale progressive pour prévenir les récidives." },
            { title: "Traitement de l'ATM", desc: "L'ATM (articulation temporo-mandibulaire) peut souffrir d'un déséquilibre musculaire, provoquant des douleurs au niveau de la mâchoire, des tempes, des sinus ou de la nuque. Je prends en charge ces dysfonctions avec des techniques manuelles ciblées incluant la mobilisation articulaire, le relâchement des muscles masticateurs (ptérygoïdien, temporal, masséter) et la rééducation posturale cranio-cervicale." },
            { title: "Traitement de Maux de Tête", desc: "Approche physiothérapeutique des céphalées de tension et des migraines cervicogènes par thérapie manuelle ciblée sur les articulations cervicales hautes (C0–C3) et les muscles sous-occipitaux, fréquemment à l'origine des douleurs de tête chroniques. Mobilisation neurale du nerf grand occipital et relâchement myofascial pour une réduction durable de la fréquence et de l'intensité des crises." },
            { title: "Massage Thérapeutique Remboursé (ASCA)", desc: "Massages thérapeutiques reconnus par la méthode ASCA, remboursables par certaines assurances complémentaires. Soulagement des tensions musculaires, des douleurs articulaires et amélioration de la récupération grâce à des techniques personnalisées (massage sportif, décontracturant, thérapie manuelle). Chaque séance de 45 minutes débute par une anamnèse personnalisée pour adapter le traitement à vos besoins spécifiques." },
            { title: "Bottes de compression Compex", desc: "Les bottes de compression Compex utilisent la pressothérapie pneumatique séquentielle pour trois indications principales : le drainage lymphatique (réduction des œdèmes et des jambes lourdes), la récupération après l'effort (élimination des métabolites, réduction des courbatures et retour au sport accéléré), et le traitement de la cellulite (stimulation de la microcirculation et déstockage des graisses sous-cutanées). Idéales pour les sportifs, les patients en post-opératoire et toute personne souhaitant améliorer son confort circulatoire au quotidien." },
          ].map((item, index) => (
            <div key={index} className="rounded-3xl shadow-sm hover:shadow-xl transition-shadow flex flex-col overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-[#B8977E]" style={{ backgroundColor: '#FAF9F6', border: '1px solid #E5E0DB', height: '460px' }} onClick={() => setTreatmentModal(item)}>
              <div className="w-full h-48 flex-shrink-0 flex items-center justify-center text-sm" style={{ backgroundColor: '#EAE6E0', color: '#999' }}>Photo</div>
              <div className="p-8 flex flex-col flex-1 min-h-0">
                <h3 className="flex-shrink-0 text-2xl font-bold mb-3 tracking-tight leading-tight" style={{ color: '#2C2C2C' }}>{item.title}</h3>
                <div className="relative flex-1 min-h-0 overflow-hidden">
                  <p className="leading-relaxed text-base" style={{ color: '#666' }}>{item.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #FAF9F6)' }} />
                </div>
                <span className="flex-shrink-0 pt-4 text-xs font-bold tracking-wide" style={{ color: '#B8977E' }}>Lire plus →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL SPECIALISATIONS SECTION (Aérée par padding py-24) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>Domaines d&apos;expertise</h2>
          <p className="text-xl max-w-2xl mx-auto font-medium" style={{ color: '#666' }}>Expert dans la prise en charge des pathologies orthopédiques et des traumatismes sportifs complexes</p>
          <div className="w-20 h-1.5 mx-auto rounded-full mt-8" style={{ backgroundColor: '#B8977E' }}></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            {
              title: "Colonne vertébrale",
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
              {treatmentModal.title === 'Massage Thérapeutique Remboursé (ASCA)' ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>MASSAGES PROFESSIONNELS POUR VOTRE BIEN-ÊTRE</h2>
                  <div className="w-20 h-1.5 mb-8 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: '#555' }}>
                    Physiothérapeute qualifié avec un master en thérapie manuelle et un master en sport. J&apos;ai travaillé avec plusieurs équipes de football professionnel tels que Lausanne Sport, Servette FC, Vevey et l&apos;équipe nationale suisse.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#555' }}>
                    Vous vous sentez tendu ? Vous avez des douleurs musculaires ou articulaires ?<br />
                    Vous cherchez un traitement ciblé pour améliorer votre bien-être ?
                  </p>
                  <p className="leading-relaxed mb-8" style={{ color: '#555' }}>
                    Je suis un physiothérapeute qualifié et je propose des massages personnalisés pour soulager les tensions, favoriser la relaxation et améliorer la fonctionnalité musculaire et articulaire.
                  </p>
                  <h3 className="text-xl font-bold mb-4 font-serif" style={{ color: '#2C2C2C' }}>Comment se déroule la séance ?</h3>
                  <p className="leading-relaxed mb-3" style={{ color: '#555' }}>Chaque séance dure 45 minutes, réparties comme suit :</p>
                  <ul className="space-y-2 ml-1 mb-8" style={{ color: '#555' }}>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>•</span><span><strong style={{ color: '#2C2C2C' }}>1ère phase : Anamnèse personnalisée</strong>, pour identifier vos besoins spécifiques.</span></li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>•</span><span><strong style={{ color: '#2C2C2C' }}>2ième phase : Traitement ciblé</strong>, avec des techniques spécialisées telles que :</span></li>
                    <li className="flex items-start gap-2 ml-6"><span style={{ color: '#B8977E' }}>•</span><span><strong style={{ color: '#2C2C2C' }}>Thérapie manuelle articulaire</strong> : pour améliorer la mobilité des articulations.</span></li>
                    <li className="flex items-start gap-2 ml-6"><span style={{ color: '#B8977E' }}>•</span><span><strong style={{ color: '#2C2C2C' }}>Techniques musculaires</strong> : comme le Strain-Counterstrain pour libérer les tensions profondes.</span></li>
                    <li className="flex items-start gap-2 ml-6"><span style={{ color: '#B8977E' }}>•</span><span><strong style={{ color: '#2C2C2C' }}>Mobilisation neurale</strong> : pour traiter les troubles liés au système nerveux périphérique.</span></li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4 font-serif" style={{ color: '#2C2C2C' }}>Les bénéfices de mes traitements :</h3>
                  <ul className="space-y-1.5 mb-8" style={{ color: '#555' }}>
                    <li>✔ Réduction des douleurs musculaires et articulaires</li>
                    <li>✔ Amélioration de la flexibilité et de la mobilité</li>
                    <li>✔ Relaxation profonde et réduction du stress</li>
                    <li>✔ Bien-être général renforcé</li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4 font-serif" style={{ color: '#2C2C2C' }}>Les techniques que j&apos;utilise :</h3>
                  <ul className="space-y-1.5 mb-8" style={{ color: '#555' }}>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>•</span>Massage thérapeutique</li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>•</span>Massage relaxant</li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>•</span>Massage sportif</li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B8977E' }}>•</span>Massage décontracturant</li>
                  </ul>
                  <div className="pt-2">
                    <p className="text-lg font-bold mb-2" style={{ color: '#2C2C2C' }}>📞 Réservez dès maintenant</p>
                    <p className="leading-relaxed" style={{ color: '#555' }}>
                      Offrez-vous une heure pour votre bien-être.<br />
                      Le tout accompagné d&apos;une musique personnalisée et adaptée à vos besoins du moment.
                    </p>
                    <p className="mt-3" style={{ color: '#555' }}>
                      Contactez-moi dès aujourd&apos;hui pour prendre rendez-vous ou pour plus d&apos;informations.
                    </p>
                    <div className="flex flex-col gap-3 mt-4">
                      <a href="tel:+41217842666" className="block text-center px-8 py-3 rounded-full text-base font-bold transition-colors" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                        021 784 26 66
                      </a>
                      <button onClick={() => { setTreatmentModal(null); setBookingOpen(true); }} className="block w-full text-center px-8 py-3 rounded-full text-base font-bold transition-colors border-2" style={{ borderColor: '#B8977E', color: '#B8977E' }}>
                        Prendre RDV en ligne
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight font-serif" style={{ color: '#2C2C2C' }}>{treatmentModal.title}</h2>
                  <div className="w-20 h-1.5 mb-8 rounded-full" style={{ backgroundColor: '#B8977E' }}></div>
                  {treatmentModal.desc && (
                    <p className="text-lg leading-relaxed mb-8" style={{ color: '#555' }}>{treatmentModal.desc}</p>
                  )}
                  <div className="pt-2 flex flex-col gap-3">
                    <a href="tel:+41217842666" className="block text-center px-8 py-3 rounded-full text-base font-bold transition-colors" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                      021 784 26 66
                    </a>
                    <button onClick={() => { setTreatmentModal(null); setBookingOpen(true); }} className="block w-full text-center px-8 py-3 rounded-full text-base font-bold transition-colors border-2" style={{ borderColor: '#B8977E', color: '#B8977E' }}>
                      Prendre RDV en ligne
                    </button>
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
              <span>Diplôme de Physiothérapie Università di Catania (110/110)</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Master en Physiothérapie du Sport Università di Pisa</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Master en Thérapie manuelle &amp; Exercice thérapeutique Université de Bologne</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Titre OMPT (Orthopaedic Manipulative Physical Therapist) IFOMPT</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Professeur de pathokinésiologie Université Ludes (Lugano)</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Physiothérapeute Équipe suisse de football espoirs</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Chef physiothérapie Neuchâtel Xamax</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Physiothérapeute sportif Lausanne Sport M21</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Physiothérapeute Calcio Catania S.p.A.</span>
            </p>
            <p className="flex items-start"><ArrowRight className="w-6 h-6 mr-4 shrink-0 mt-1.5" style={{ color: '#B8977E' }} />
              <span>Erasmus Plus Hôpital d&apos;orthopédie et réhabilitation, Poznan (Pologne)</span>
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
            { type: 'image', src: '/gallery/physio_1.jpg',  alt: 'Séance de physiothérapie', width: 1440, height: 1800 },
            { type: 'video', src: '/gallery/physio_2.mp4',  alt: 'Exercice de rééducation' },
            { type: 'image', src: '/gallery/physio_4.jpg',  alt: 'Traitement – genou', width: 1800, height: 1202 },
            { type: 'video', src: '/gallery/physio_3.mp4',  alt: 'Entraînement fonctionnel' },
            { type: 'video', src: '/gallery/physio_8.mp4',  alt: 'Physiothérapie sportive' },
            { type: 'image', src: '/gallery/physio_6.jpg',  alt: 'Rééducation sportive', width: 1152, height: 2048 },
            { type: 'video', src: '/gallery/physio_9.mp4',  alt: 'Récupération musculaire' },
            { type: 'image', src: '/gallery/physio_7.jpg',  alt: 'Thérapie manuelle', width: 1180, height: 786 },
            { type: 'video', src: '/gallery/physio_10.mp4', alt: 'Mobilisation articulaire' },
            { type: 'video', src: '/gallery/physio_11.mp4', alt: 'Renforcement spécifique' },
            { type: 'video', src: '/gallery/physio_12.mp4', alt: 'Techniques manuelles' },
            { type: 'video', src: '/gallery/physio_16.mp4', alt: 'Rééducation en profondeur' },
            { type: 'video', src: '/gallery/physio_17.mp4', alt: 'Physiothérapie du sport' },
          ] as { type: string; src: string; alt: string; width?: number; height?: number }[]).map((item, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid #E5E0DB' }}>
              {item.type === 'image' ? (
                <div className="relative cursor-zoom-in group" onClick={() => setLightbox(item.src)}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto object-cover transition-opacity group-hover:opacity-90"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l.01.01" /></svg>
                  </div>
                </div>
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

      {/* GOOGLE REVIEWS SECTION */}
      <section className="pt-24 pb-8 px-6" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-7 h-7" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <h2 className="text-4xl font-extrabold tracking-tight font-serif text-white">Avis Google</h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="#FBBC05" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
              <span className="text-white font-bold text-xl ml-1">5,0</span>
              <span className="text-sm ml-1" style={{ color: '#999' }}>· 36 avis</span>
            </div>
            <a
              href="https://www.google.com/maps/place/Giuseppe+Costa+physioth%C3%A9rapeute+et+masseur+th%C3%A9rapeutique+ASCA/@46.547962,6.6682833,17z/data=!4m8!3m7!1s0x4eed446a7d5164af:0x3d5cdfa38278364d!8m2!3d46.547962!4d6.6708582!9m1!1b1!16s%2Fg%2F11wtktvpqd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold px-5 py-2 rounded-full border transition-colors hover:bg-white hover:text-black"
              style={{ borderColor: '#B8977E', color: '#B8977E' }}
            >
              Laisser un avis
            </a>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {([
              {
                name: 'Jenni G',
                color: '#4A90D9',
                date: 'il y a 3 mois',
                text: "Un physio exceptionnel\u00a0! En tant que cavali\u00e8re ayant mal au dos, j\u2019avais des douleurs bien sp\u00e9cifiques li\u00e9es \u00e0 l\u2019\u00e9quitation. Il a su les comprendre, les traiter efficacement et m\u2019accompagner avec beaucoup de professionnalisme et d\u2019\u00e9coute. Gr\u00e2ce \u00e0 son travail, j\u2019ai retrouv\u00e9 du confort \u00e0 cheval comme au quotidien. Je recommande les yeux ferm\u00e9s\u00a0!",
              },
              {
                name: 'Inge Appermont',
                color: '#7B68C8',
                date: 'il y a 9 mois',
                text: "Je recommande vivement Giuseppe Costa. Il est tr\u00e8s professionnel, \u00e0 l\u2019\u00e9coute et sait s\u2019adapter \u00e0 mes besoins sp\u00e9cifiques. Ses s\u00e9ances sont efficaces et bien expliqu\u00e9es. Gr\u00e2ce \u00e0 lui, j\u2019ai retrouv\u00e9 une meilleure mobilit\u00e9 et une r\u00e9duction de la douleur. Merci pour son excellent travail.",
              },
              {
                name: 'Magui Feijoo',
                color: '#E07B5A',
                date: 'il y a 9 mois',
                text: "Giuseppe m\u2019a beaucoup aid\u00e9 pour mes probl\u00e8mes de dos et cervicales. Je le remercie sp\u00e9cialement pour son aide pr\u00e9cieuse lors de mon blocage de la nuque\u00a0: il s\u2019est montr\u00e9 disponible et m\u2019a d\u00e9bloqu\u00e9 rapidement. Je le consulte d\u00e8s que j\u2019ai un blocage car je sais qu\u2019il saura faire le n\u00e9cessaire.",
              },
              {
                name: 'Pasquale Ferrantino',
                color: '#4CAF82',
                date: 'il y a un an',
                text: "Giuseppe est un expert dans son domaine et sp\u00e9cialement de la r\u00e9habilitation en lien avec le sport. Ayant subi une importante blessure \u00e0 la cheville, il m\u2019a aid\u00e9 et motiv\u00e9 gr\u00e2ce \u00e0 sa patience, son savoir-faire et son approche multidisciplinaire. Je le recommande vivement\u00a0!",
              },
              {
                name: 'Fabrizio Stella',
                color: '#C07BC5',
                date: 'il y a un an',
                text: "Giuseppe helped me after I dislocated my shoulder and needed support for rehabilitation. He is calm, balanced and immediately put me at ease. The rehabilitation strategy was very effective and allowed me to recover mobility quite quickly. I highly recommend him.",
              },
              {
                name: 'Andrea Giacalone',
                color: '#5BA4CF',
                date: 'il y a 9 mois',
                text: "Giuseppe m\u2019a suivi pour une cervicalgie. D\u00e8s le d\u00e9but, je me suis senti \u00e0 l\u2019aise. C\u2019est un kin\u00e9sith\u00e9rapeute professionnel, comp\u00e9tent et passion\u00e9 par son travail. Je le recommande vivement.",
              },
              {
                name: 'B Pellier',
                color: '#D4875A',
                date: 'il y a 8 mois',
                text: "Excellent Physioth\u00e9rapeute exp\u00e9riment\u00e9 et \u00e0 l\u2019\u00e9coute des questions des patients. Ses conseils sont pr\u00e9cis et personnalis\u00e9s. Je recommande fortement Mr Giuseppe Costa.",
              },
              {
                name: 'Voncicia Romela Ngoma',
                color: '#56A899',
                date: 'il y a 2 mois',
                text: "Giuseppe Costa m\u2019a suivi pendant 3 mois suite \u00e0 une entorse \u00e0 la cheville. D\u00e8s la premi\u00e8re s\u00e9ance, je me suis sentie \u00e0 l\u2019aise\u00a0; il donne des conseils et explique bien les exercices. Cela m\u2019a beaucoup aid\u00e9. Je recommande fortement ce physio\u00a0!",
              },
            ] as { name: string; color: string; date: string; text: string }[]).map((r, i) => (
              <div key={i} className="flex flex-col rounded-2xl p-6" style={{ backgroundColor: '#2A2A2A', border: '1px solid #3A3A3A' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-base" style={{ backgroundColor: r.color }}>
                    {r.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm leading-tight truncate">{r.name}</p>
                    <p className="text-xs" style={{ color: '#888' }}>{r.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4" fill="#FBBC05" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#C0C0C0' }}>&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Giuseppe+Costa+physioth%C3%A9rapeute+et+masseur+th%C3%A9rapeutique+ASCA/@46.547962,6.6682833,17z/data=!4m8!3m7!1s0x4eed446a7d5164af:0x3d5cdfa38278364d!8m2!3d46.547962!4d6.6708582!9m1!1b1!16s%2Fg%2F11wtktvpqd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-colors"
              style={{ backgroundColor: '#B8977E' }}
            >
              Voir tous les avis
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
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
            <Image src="/gallery/giuseppe_portrait.jpeg" alt="Giuseppe Costa" width={786} height={1203} className="w-full h-auto object-cover object-top" sizes="192px" />
          </div>
          <h3 className="text-white text-2xl font-extrabold font-serif tracking-tight mb-1">Giuseppe Costa</h3>
          <p className="text-sm font-medium mb-6" style={{ color: '#999' }}>Physiothérapeute</p>
          <a
            href="https://www.linkedin.com/in/giuseppe-costa-65697bb6/"
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
              <button onClick={() => setBookingOpen(true)} className="inline-block px-10 py-4 rounded-full text-lg font-bold transition-colors shadow-lg w-full text-center" style={{ backgroundColor: '#B8977E', color: '#fff' }}>
                Prise de RDV en ligne
              </button>
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
