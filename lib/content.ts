// Site content, separated from presentation.
// Edit copy/data here; the components in app/ and components/ render it.

export type Treatment = { id: string; title: string; desc: string };

export type Specialisation = {
  title: string;
  desc: string;
  muscles: string[];
  crop: { marginTop: number };
  type?: 'posterior';
};

export type GalleryItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  width?: number;
  height?: number;
  poster?: string;
};

export type Review = { name: string; color: string; date: string; text: string };

export type VideoItem = { label: string; src?: string; poster?: string; title?: string; desc?: string };
export type ExerciceCategory = { title: string; description: string; videos: VideoItem[] };

// ── Homepage ────────────────────────────────────────────────────────────────

export const treatments: Treatment[] = [
  { id: 'manipulations-vertebrales', title: "Manipulations Vertébrales", desc: "Techniques de thérapie manuelle orthopédique visant à restaurer la mobilité articulaire des vertèbres cervicales, dorsales et lombaires. Indiquées pour les blocages articulaires et les douleurs chroniques du dos et du cou, elles s'appuient sur les approches Maitland et Mulligan pour un traitement précis et ciblé. La mobilisation articulaire permet de retrouver une amplitude de mouvement optimale tout en réduisant la douleur et les contractures musculaires associées." },
  { id: 'dry-needling', title: "Dry Needling", desc: "Insertion de fines aiguilles dans les points gâchettes (trigger points) myofasciaux pour relâcher les tensions musculaires profondes et réduire la douleur. Technique complémentaire particulièrement efficace contre les douleurs cervicales, dorsales, les myalgies chroniques et les céphalées de tension. La désactivation des trigger points améliore la circulation locale, restaure la longueur musculaire normale et diminue l'excitabilité du système nerveux central." },
  { id: 'ondes-de-choc', title: "Ondes de Choc", desc: "Traitement par ondes acoustiques à haute énergie ciblant les zones douloureuses chroniques. Particulièrement efficace pour les tendinopathies (épaule, coude, genou, talon d'Achille), les calcifications, la fasciite plantaire et les douleurs de cicatrisation. Les ondes de choc stimulent la néo-vascularisation, accélèrent la régénération tissulaire et désactivent les nocicepteurs responsables de la douleur chronique." },
  { id: 'cervicalgie', title: "Traitement de Cervicalgie / Cervicobrachigie", desc: "Prise en charge complète des douleurs cervicales et des irradiations vers le bras (cervicobrachigie), causées par une atteinte discale, une compression nerveuse ou un déséquilibre musculaire. Le traitement combine thérapie manuelle ciblée, mobilisations neurales et techniques Mulligan pour éliminer la douleur à la source, associé à des exercices de stabilisation cervicale progressive pour prévenir les récidives." },
  { id: 'atm', title: "Traitement de l'ATM", desc: "L'ATM (articulation temporo-mandibulaire) peut souffrir d'un déséquilibre musculaire, provoquant des douleurs au niveau de la mâchoire, des tempes, des sinus ou de la nuque. Je prends en charge ces dysfonctions avec des techniques manuelles ciblées incluant la mobilisation articulaire, le relâchement des muscles masticateurs (ptérygoïdien, temporal, masséter) et la rééducation posturale cranio-cervicale." },
  { id: 'maux-de-tete', title: "Traitement de Maux de Tête", desc: "Approche physiothérapeutique des céphalées de tension et des migraines cervicogènes par thérapie manuelle ciblée sur les articulations cervicales hautes (C0–C3) et les muscles sous-occipitaux, fréquemment à l'origine des douleurs de tête chroniques. Mobilisation neurale du nerf grand occipital et relâchement myofascial pour une réduction durable de la fréquence et de l'intensité des crises." },
  { id: 'massage-asca', title: "Massage Thérapeutique Remboursé (ASCA)", desc: "Massages thérapeutiques reconnus par la méthode ASCA, remboursables par certaines assurances complémentaires. Soulagement des tensions musculaires, des douleurs articulaires et amélioration de la récupération grâce à des techniques personnalisées (massage sportif, décontracturant, thérapie manuelle). Chaque séance de 45 minutes débute par une anamnèse personnalisée pour adapter le traitement à vos besoins spécifiques." },
  { id: 'compex', title: "Bottes de compression Compex", desc: "Les bottes de compression Compex utilisent la pressothérapie pneumatique séquentielle pour trois indications principales : le drainage lymphatique (réduction des œdèmes et des jambes lourdes), la récupération après l'effort (élimination des métabolites, réduction des courbatures et retour au sport accéléré), et le traitement de la cellulite (stimulation de la microcirculation et déstockage des graisses sous-cutanées). Idéales pour les sportifs, les patients en post-opératoire et toute personne souhaitant améliorer son confort circulatoire au quotidien." },
];

export const specialisations: Specialisation[] = [
  {
    title: "Colonne vertébrale",
    desc: "Prise en charge des lombalgies, hernies discales, scolioses, douleurs dorsales chroniques et cervicalgies.",
    muscles: ['trapezius', 'upper-back', 'lower-back'],
    crop: { marginTop: -15 },
    type: 'posterior',
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
];

export const galleryItems: GalleryItem[] = [
  { type: 'image', src: '/gallery/physio_1.jpg', alt: 'Séance de physiothérapie', width: 1440, height: 1800 },
  { type: 'video', src: '/gallery/physio_2.mp4', alt: 'Exercice de rééducation', poster: '/gallery/posters/physio_2.jpg' },
  { type: 'image', src: '/gallery/physio_4.jpg', alt: 'Traitement – genou', width: 1800, height: 1202 },
  { type: 'video', src: '/gallery/physio_3.mp4', alt: 'Entraînement fonctionnel', poster: '/gallery/posters/physio_3.jpg' },
  { type: 'video', src: '/gallery/physio_8.mp4', alt: 'Physiothérapie sportive', poster: '/gallery/posters/physio_8.jpg' },
  { type: 'image', src: '/gallery/physio_6.jpg', alt: 'Rééducation sportive', width: 1152, height: 2048 },
  { type: 'video', src: '/gallery/physio_9.mp4', alt: 'Récupération musculaire', poster: '/gallery/posters/physio_9.jpg' },
  { type: 'image', src: '/gallery/physio_7.jpg', alt: 'Thérapie manuelle', width: 1180, height: 786 },
  { type: 'video', src: '/gallery/physio_10.mp4', alt: 'Mobilisation articulaire', poster: '/gallery/posters/physio_10.jpg' },
  { type: 'video', src: '/gallery/physio_11.mp4', alt: 'Renforcement spécifique', poster: '/gallery/posters/physio_11.jpg' },
  { type: 'video', src: '/gallery/physio_12.mp4', alt: 'Techniques manuelles', poster: '/gallery/posters/physio_12.jpg' },
  { type: 'video', src: '/gallery/physio_16.mp4', alt: 'Rééducation en profondeur', poster: '/gallery/posters/physio_16.jpg' },
  { type: 'video', src: '/gallery/physio_17.mp4', alt: 'Physiothérapie du sport', poster: '/gallery/posters/physio_17.jpg' },
];

export const reviews: Review[] = [
  {
    name: 'Jenni G',
    color: '#4A90D9',
    date: 'il y a 3 mois',
    text: "Un physio exceptionnel ! En tant que cavalière ayant mal au dos, j’avais des douleurs bien spécifiques liées à l’équitation. Il a su les comprendre, les traiter efficacement et m’accompagner avec beaucoup de professionnalisme et d’écoute. Grâce à son travail, j’ai retrouvé du confort à cheval comme au quotidien. Je recommande les yeux fermés !",
  },
  {
    name: 'Inge Appermont',
    color: '#7B68C8',
    date: 'il y a 9 mois',
    text: "Je recommande vivement Giuseppe Costa. Il est très professionnel, à l’écoute et sait s’adapter à mes besoins spécifiques. Ses séances sont efficaces et bien expliquées. Grâce à lui, j’ai retrouvé une meilleure mobilité et une réduction de la douleur. Merci pour son excellent travail.",
  },
  {
    name: 'Magui Feijoo',
    color: '#E07B5A',
    date: 'il y a 9 mois',
    text: "Giuseppe m’a beaucoup aidé pour mes problèmes de dos et cervicales. Je le remercie spécialement pour son aide précieuse lors de mon blocage de la nuque : il s’est montré disponible et m’a débloqué rapidement. Je le consulte dès que j’ai un blocage car je sais qu’il saura faire le nécessaire.",
  },
  {
    name: 'Pasquale Ferrantino',
    color: '#4CAF82',
    date: 'il y a un an',
    text: "Giuseppe est un expert dans son domaine et spécialement de la réhabilitation en lien avec le sport. Ayant subi une importante blessure à la cheville, il m’a aidé et motivé grâce à sa patience, son savoir-faire et son approche multidisciplinaire. Je le recommande vivement !",
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
    text: "Giuseppe m’a suivi pour une cervicalgie. Dès le début, je me suis senti à l’aise. C’est un kinésithérapeute professionnel, compétent et passioné par son travail. Je le recommande vivement.",
  },
  {
    name: 'B Pellier',
    color: '#D4875A',
    date: 'il y a 8 mois',
    text: "Excellent Physiothérapeute expérimenté et à l’écoute des questions des patients. Ses conseils sont précis et personnalisés. Je recommande fortement Mr Giuseppe Costa.",
  },
  {
    name: 'Voncicia Romela Ngoma',
    color: '#56A899',
    date: 'il y a 2 mois',
    text: "Giuseppe Costa m’a suivi pendant 3 mois suite à une entorse à la cheville. Dès la première séance, je me suis sentie à l’aise ; il donne des conseils et explique bien les exercices. Cela m’a beaucoup aidé. Je recommande fortement ce physio !",
  },
];

// Google Business profile aggregate (shown in the reviews header).
export const reviewsSummary = { rating: '5,0', count: 36 };

// ── /exercices ────────────────────────────────────────────────────────────────

export const exerciceCategories: ExerciceCategory[] = [
  {
    title: 'Épaule — Élastiques de résistance',
    description: 'Exercices de renforcement de l\'épaule avec élastiques. Améliore la stabilité de la coiffe des rotateurs et prévient les blessures à l\'épaule.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/epaule-1.mp4', poster: '/gallery/exercices/posters/epaule-1.jpg', title: 'Rotation interne de l\'épaule', desc: 'Assis, coude fléchi à 90°, effectuez une rotation interne contre la résistance de l\'élastique. Renforce le subscapulaire et améliore la stabilité de la coiffe des rotateurs.' },
      { label: 'Exercice 2', src: '/gallery/exercices/epaule-2.mp4', poster: '/gallery/exercices/posters/epaule-2.jpg', title: 'Rotation externe de l\'épaule', desc: 'Assis, coude fléchi à 90°, effectuez une rotation externe contre la résistance de l\'élastique. Renforce l\'infra-épineux et le petit rond, essentiels pour la stabilité postérieure de l\'épaule.' },
      { label: 'Exercice 3', src: '/gallery/exercices/epaule-3.mp4', poster: '/gallery/exercices/posters/epaule-3.jpg', title: 'Abduction horizontale', desc: 'Debout, bras tendus à hauteur des épaules, écartez les bras en tirant l\'élastique horizontalement. Renforce les muscles postérieurs de l\'épaule et améliore la posture.' },
      { label: 'Exercice 4', src: '/gallery/exercices/epaule-4.mp4', poster: '/gallery/exercices/posters/epaule-4.jpg', title: 'Rétraction scapulaire', desc: 'Assis, élastique fixé devant vous, tirez les deux bras en arrière en serrant les omoplates. Renforce les rhomboïdes et les trapèzes moyens pour une meilleure stabilité scapulaire.' },
    ],
  },
  {
    title: 'Genou — Élastiques de résistance',
    description: 'Exercices de rééducation du genou avec élastiques. Renforce les muscles stabilisateurs (quadriceps, ischio-jambiers) et améliore la stabilité articulaire.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/genou-1.mp4', poster: '/gallery/exercices/posters/genou-1.jpg', title: 'Abduction de hanche en décubitus latéral', desc: 'Allongé sur le côté, élastique autour des cuisses, soulevez la jambe vers le haut. Renforce les abducteurs de hanche (moyen fessier) pour stabiliser le genou lors de la marche et de la course.' },
      { label: 'Exercice 2', src: '/gallery/exercices/genou-2.mp4', poster: '/gallery/exercices/posters/genou-2.jpg', title: 'Extension de genou en décubitus dorsal', desc: 'Allongé sur le dos, élastique autour des jambes, étendez le genou contre la résistance. Renforce le quadriceps et améliore la stabilité active du genou.' },
      { label: 'Exercice 3', src: '/gallery/exercices/genou-3.mp4', poster: '/gallery/exercices/posters/genou-3.jpg', title: 'Flexion de genou en position couchée', desc: 'En position couchée, élastique autour des chevilles, fléchissez le genou vers les fesses. Renforce les ischio-jambiers, stabilisateurs postérieurs du genou.' },
      { label: 'Exercice 4', src: '/gallery/exercices/genou-4.mp4', poster: '/gallery/exercices/posters/genou-4.jpg', title: 'Squat latéral avec élastique', desc: 'Debout, élastique autour des genoux et des chevilles, effectuez un pas latéral en gardant les genoux alignés. Renforce les abducteurs et améliore le contrôle neuromusculaire.' },
      { label: 'Exercice 5', src: '/gallery/exercices/genou-5.mp4', poster: '/gallery/exercices/posters/genou-5.jpg', title: 'Équilibre unipodal avec résistance', desc: 'Sur un pied, élastique autour des jambes, maintenez l\'équilibre tout en résistant à la traction latérale. Améliore la proprioception et la stabilité dynamique du genou.' },
      { label: 'Exercice 6', src: '/gallery/exercices/genou-6.mp4', poster: '/gallery/exercices/posters/genou-6.jpg', title: 'Fente avec contrôle du genou', desc: 'En fente avant, élastique autour des genoux, maintenez l\'alignement genou-cheville tout en descendant. Renforce le quadriceps et entraîne le contrôle valgus du genou.' },
    ],
  },
  {
    title: 'Cheville — Élastiques de résistance',
    description: 'Exercices de renforcement de la cheville avec élastiques. Améliore la proprioception, renforce les muscles péroniers et prévient les entorses.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/cheville-1.mp4', poster: '/gallery/exercices/posters/cheville-1.jpg', title: 'Éversion de la cheville', desc: 'Assis, élastique autour de l\'avant-pied, tournez le pied vers l\'extérieur contre la résistance de l\'élastique. Renforce les muscles péroniers (court et long fibulaire), stabilisateurs latéraux de la cheville, essentiels dans la prévention et la rééducation des entorses.' },
    ],
  },
  {
    title: 'Coude — Élastiques de résistance',
    description: 'Exercices de rééducation du coude et de l\'avant-bras avec élastiques. Indiqués pour les tendinopathies (tennis elbow, golf elbow) et le renforcement des muscles de la préhension.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/coude-1.mp4', poster: '/gallery/exercices/posters/coude-1.jpg', title: 'Flexion du coude', desc: 'Assis, élastique fixé sous le pied, fléchissez l\'avant-bras vers l\'épaule. Renforce le biceps brachial et le brachioradialis. Indiqué en phase de rééducation du coude.' },
      { label: 'Exercice 2', src: '/gallery/exercices/coude-2.mp4', poster: '/gallery/exercices/posters/coude-2.jpg', title: 'Extension du coude', desc: 'Assis, élastique en appui sur la cuisse, étendez l\'avant-bras vers le bas contre résistance. Renforce le triceps et rééduque la chaîne extensrice du coude.' },
      { label: 'Exercice 3', src: '/gallery/exercices/coude-3.mp4', poster: '/gallery/exercices/posters/coude-3.jpg', title: 'Extension du poignet (tennis elbow)', desc: 'Avant-bras posé sur la cuisse, paume vers le bas, étendez le poignet contre l\'élastique. Renforce les extenseurs de poignet, exercice clé dans le traitement de l\'épicondylite latérale.' },
      { label: 'Exercice 4', src: '/gallery/exercices/coude-4.mp4', poster: '/gallery/exercices/posters/coude-4.jpg', title: 'Flexion du poignet (golf elbow)', desc: 'Avant-bras posé sur la cuisse, paume vers le haut, fléchissez le poignet contre l\'élastique. Renforce les fléchisseurs de poignet, indiqué dans la rééducation de l\'épicondylite médiale.' },
    ],
  },
  {
    title: 'Poignet — Élastiques de résistance',
    description: 'Exercices de renforcement et mobilisation du poignet avec élastiques. Rééduque la pronation/supination, la flexion et la déviation radiale/ulnaire pour une récupération fonctionnelle complète.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/poignet-1.mp4', poster: '/gallery/exercices/posters/poignet-1.jpg', title: 'Pronation de l\'avant-bras', desc: 'Assis, élastique tenu à deux mains, effectuez une rotation de l\'avant-bras vers l\'intérieur (pronation) contre la résistance de l\'élastique. Renforce le rond pronateur et carré pronateur, essentiels à la stabilité et aux gestes du quotidien.' },
    ],
  },
];

// ── Practice / contact (used by UI + SEO JSON-LD) ─────────────────────────────

export const SITE_URL = 'https://physio-epalinges.ch';

export const practice = {
  name: 'Physio-Epalinges - Giuseppe Costa',
  phoneDisplay: '021 784 26 66',
  phoneHref: 'tel:+41217842666',
  whatsapp: 'https://wa.me/41768240387',
  linkedin: 'https://www.linkedin.com/in/giuseppe-costa-65697bb6/',
  mapsUrl:
    'https://www.google.com/maps/place/Giuseppe+Costa+physioth%C3%A9rapeute+et+masseur+th%C3%A9rapeutique+ASCA/@46.547962,6.6682833,17z/data=!4m8!3m7!1s0x4eed446a7d5164af:0x3d5cdfa38278364d!8m2!3d46.547962!4d6.6708582!9m1!1b1!16s%2Fg%2F11wtktvpqd',
  address: { street: 'Place Croix-Blanche 3', postalCode: '1066', city: 'Épalinges', country: 'CH' },
  geo: { lat: 46.547962, lng: 6.6708582 },
} as const;
