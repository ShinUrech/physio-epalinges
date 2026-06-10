// Site content, separated from presentation.
// Edit copy/data here; the components in app/ and components/ render it.

export type Treatment = { id: string; title: string; desc: string; image?: string };

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
  { id: 'manipulations-vertebrales', image: '/gallery/photos/DSC03324.jpg', title: "Manipulations Vertébrales", desc: "Techniques de thérapie manuelle orthopédique visant à restaurer la mobilité articulaire des vertèbres cervicales, dorsales et lombaires. Indiquées pour les blocages articulaires et les douleurs chroniques du dos et du cou, elles s'appuient sur les approches Maitland et Mulligan pour un traitement précis et ciblé. La mobilisation articulaire permet de retrouver une amplitude de mouvement optimale tout en réduisant la douleur et les contractures musculaires associées." },
  { id: 'dry-needling', title: "Dry Needling", desc: "Insertion de fines aiguilles dans les points gâchettes (trigger points) myofasciaux pour relâcher les tensions musculaires profondes et réduire la douleur. Technique complémentaire particulièrement efficace contre les douleurs cervicales, dorsales, les myalgies chroniques et les céphalées de tension. La désactivation des trigger points améliore la circulation locale, restaure la longueur musculaire normale et diminue l'excitabilité du système nerveux central." },
  { id: 'ondes-de-choc', image: '/gallery/photos/DSC03236.jpg', title: "Ondes de Choc", desc: "Traitement par ondes acoustiques à haute énergie ciblant les zones douloureuses chroniques. Particulièrement efficace pour les tendinopathies (épaule, coude, genou, talon d'Achille), les calcifications, la fasciite plantaire et les douleurs de cicatrisation. Les ondes de choc stimulent la néo-vascularisation, accélèrent la régénération tissulaire et désactivent les nocicepteurs responsables de la douleur chronique." },
  { id: 'cervicalgie', image: '/gallery/photos/DSC03131.jpg', title: "Traitement de Cervicalgie / Cervicobrachigie", desc: "Prise en charge complète des douleurs cervicales et des irradiations vers le bras (cervicobrachigie), causées par une atteinte discale, une compression nerveuse ou un déséquilibre musculaire. Le traitement combine thérapie manuelle ciblée, mobilisations neurales et techniques Mulligan pour éliminer la douleur à la source, associé à des exercices de stabilisation cervicale progressive pour prévenir les récidives." },
  { id: 'atm', image: '/gallery/photos/DSC03254.jpg', title: "Traitement de l'ATM", desc: "L'ATM (articulation temporo-mandibulaire) peut souffrir d'un déséquilibre musculaire, provoquant des douleurs au niveau de la mâchoire, des tempes, des sinus ou de la nuque. Je prends en charge ces dysfonctions avec des techniques manuelles ciblées incluant la mobilisation articulaire, le relâchement des muscles masticateurs (ptérygoïdien, temporal, masséter) et la rééducation posturale cranio-cervicale." },
  { id: 'maux-de-tete', image: '/gallery/photos/DSC03305.jpg', title: "Traitement de Maux de Tête", desc: "Approche physiothérapeutique des céphalées de tension et des migraines cervicogènes par thérapie manuelle ciblée sur les articulations cervicales hautes (C0–C3) et les muscles sous-occipitaux, fréquemment à l'origine des douleurs de tête chroniques. Mobilisation neurale du nerf grand occipital et relâchement myofascial pour une réduction durable de la fréquence et de l'intensité des crises." },
  { id: 'massage-asca', image: '/gallery/photos/DSC03330.jpg', title: "Massage Thérapeutique Remboursé (ASCA)", desc: "Massages thérapeutiques reconnus par la méthode ASCA, remboursables par certaines assurances complémentaires. Soulagement des tensions musculaires, des douleurs articulaires et amélioration de la récupération grâce à des techniques personnalisées (massage sportif, décontracturant, thérapie manuelle). Chaque séance de 45 minutes débute par une anamnèse personnalisée pour adapter le traitement à vos besoins spécifiques." },
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
  { type: 'image', src: '/gallery/photos/DSC02969.jpg', alt: 'Giuseppe Costa, physiothérapeute à Épalinges', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03012.jpg', alt: 'Exercice de rééducation avec élastique sur step', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03121.jpg', alt: 'Explication de l\'anatomie sur tablette lors d\'une consultation', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03236.jpg', alt: 'Traitement par ondes de choc à l\'épaule', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03081.jpg', alt: 'Séance de physiothérapie sur table de traitement', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03264.jpg', alt: 'Traitement de l\'articulation temporo-mandibulaire (ATM)', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03278.jpg', alt: 'Traitement cervical en décubitus dorsal', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03231.jpg', alt: 'Pose de bandes de taping (kinesio-taping)', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03054.jpg', alt: 'Giuseppe Costa, physiothérapeute', width: 2048, height: 1365 },
  { type: 'image', src: '/gallery/photos/DSC03301.jpg', alt: 'Traitement manuel du dos et de l\'épaule', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03146.jpg', alt: 'Thérapie manuelle sur table de traitement', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03305.jpg', alt: 'Traitement des tensions cranio-cervicales', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03184.jpg', alt: 'Thérapie manuelle ciblée', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03330.jpg', alt: 'Thérapie manuelle de l\'épaule', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03063.jpg', alt: 'Giuseppe Costa, physiothérapeute à Épalinges', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03247.jpg', alt: 'Traitement de physiothérapie', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03289.jpg', alt: 'Mobilisation cervicale', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03131.jpg', alt: 'Évaluation de la nuque et des épaules', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03324.jpg', alt: 'Traitement de la nuque', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03058.jpg', alt: 'Giuseppe Costa, physiothérapeute', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03254.jpg', alt: 'Thérapie manuelle ciblée', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03333.jpg', alt: 'Traitement manuel du dos', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03113.jpg', alt: 'Consultation de physiothérapie', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03221.jpg', alt: 'Séance de physiothérapie', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03042.jpg', alt: 'Giuseppe Costa, physiothérapeute à Épalinges', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03258.jpg', alt: 'Giuseppe Costa en séance de traitement', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03391.jpg', alt: 'Giuseppe Costa, physiothérapeute du sport', width: 1365, height: 2048 },
  { type: 'image', src: '/gallery/photos/DSC03425.jpg', alt: 'Cabinet de physiothérapie à Épalinges', width: 2048, height: 1365 },
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
      { label: 'Exercice 1', src: '/gallery/exercices/epaule-1.mp4', poster: '/gallery/exercices/posters/epaule-1.jpg', title: 'Rotation interne de l\'épaule', desc: 'Coude fléchi à 90° et maintenu contre le corps, effectuez une rotation interne contrôlée contre la résistance de l\'élastique. Renforce le subscapulaire et stabilise la coiffe des rotateurs.' },
      { label: 'Exercice 2', src: '/gallery/exercices/epaule-2.mp4', poster: '/gallery/exercices/posters/epaule-2.jpg', title: 'Rotation externe de l\'épaule', desc: 'Coude fléchi à 90° et collé au tronc, tournez l\'avant-bras vers l\'extérieur autour de l\'axe du coude contre l\'élastique. Renforce l\'infra-épineux et le petit rond, essentiels à l\'équilibre musculaire et à la stabilité postérieure de l\'épaule.' },
      { label: 'Exercice 3', src: '/gallery/exercices/epaule-3.mp4', poster: '/gallery/exercices/posters/epaule-3.jpg', title: 'Rotation externe (variante)', desc: 'Variante de la rotation externe sollicitant la coiffe des rotateurs sous un angle légèrement différent. Travail lent et progressif pour renforcer la stabilité dynamique de l\'épaule.' },
      { label: 'Exercice 4', src: '/gallery/exercices/epaule-4.mp4', poster: '/gallery/exercices/posters/epaule-4.jpg', title: 'Rotation externe (coudes fléchis)', desc: 'Les deux coudes fléchis et maintenus au corps, effectuez une rotation externe simultanée des deux bras contre l\'élastique. Renforce les rotateurs externes et favorise une posture scapulaire équilibrée.' },
      { label: 'Exercice 5', src: '/gallery/exercices/epaule-5.mp4', poster: '/gallery/exercices/posters/epaule-5.jpg', title: 'Élévation frontale', desc: 'Bras tendu, élevez le membre supérieur vers l\'avant jusqu\'à hauteur d\'épaule contre la résistance de l\'élastique. Renforce le deltoïde antérieur et améliore la force d\'élévation du bras.' },
      { label: 'Exercice 6', src: '/gallery/exercices/epaule-6.mp4', poster: '/gallery/exercices/posters/epaule-6.jpg', title: 'Élévation latérale assise', desc: 'Assis, élevez les bras sur le côté (abduction) contre l\'élastique jusqu\'à hauteur d\'épaule. Renforce le deltoïde moyen et le supra-épineux, en limitant les compensations grâce à la position assise.' },
      { label: 'Exercice 7', src: '/gallery/exercices/epaule-7.mp4', poster: '/gallery/exercices/posters/epaule-7.jpg', title: 'Abduction horizontale', desc: 'Bras tendus à hauteur des épaules, écartez les membres vers l\'arrière en tirant l\'élastique horizontalement. Renforce les muscles postérieurs de l\'épaule et améliore la posture.' },
      { label: 'Exercice 8', src: '/gallery/exercices/epaule-8.mp4', poster: '/gallery/exercices/posters/epaule-8.jpg', title: 'Tirage bras tendus', desc: 'Bras tendus devant vous, tirez l\'élastique vers l\'arrière en gardant les coudes verrouillés. Sollicite les fixateurs de l\'omoplate et les muscles du dos, améliore le contrôle moteur et la posture.' },
      { label: 'Exercice 9', src: '/gallery/exercices/epaule-9.mp4', poster: '/gallery/exercices/posters/epaule-9.jpg', title: 'Tirage horizontal', desc: 'Élastique fixé devant vous, tirez horizontalement en ramenant les coudes le long du corps et en serrant les omoplates. Renforce les rhomboïdes, le trapèze moyen et le grand dorsal pour une meilleure stabilité scapulaire.' },
    ],
  },
  {
    title: 'Genou — Élastiques de résistance',
    description: 'Exercices de rééducation du genou et de la hanche avec élastiques. Renforce les stabilisateurs (quadriceps, fessiers, ischio-jambiers) et améliore la stabilité articulaire et la proprioception.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/genou-1.mp4', poster: '/gallery/exercices/posters/genou-1.jpg', title: 'Squat avec résistance élastique', desc: 'Debout, élastique autour des cuisses ou des genoux, descendez en squat en gardant les genoux alignés avec les pieds. Renforce les quadriceps et les fessiers et entraîne le contrôle du valgus du genou.' },
      { label: 'Exercice 2', src: '/gallery/exercices/genou-2.mp4', poster: '/gallery/exercices/posters/genou-2.jpg', title: 'Pas chassés avec élastique', desc: 'Élastique autour des chevilles ou des genoux, effectuez des pas latéraux en position semi-fléchie sans relâcher la tension. Renforce les abducteurs de hanche (moyen fessier) et stabilise le genou lors des déplacements latéraux.' },
      { label: 'Exercice 3', src: '/gallery/exercices/genou-3.mp4', poster: '/gallery/exercices/posters/genou-3.jpg', title: 'Coquille (clam)', desc: 'Allongé sur le côté, hanches et genoux fléchis, élastique autour des cuisses, ouvrez le genou supérieur vers le haut sans bouger le bassin. Active le moyen et le petit fessier, stabilisateurs essentiels du genou et de la hanche.' },
      { label: 'Exercice 4', src: '/gallery/exercices/genou-4.mp4', poster: '/gallery/exercices/posters/genou-4.jpg', title: 'Abduction de hanche en décubitus latéral', desc: 'Allongé sur le côté, élastique autour des cuisses, élevez lentement la jambe supérieure vers le plafond puis redescendez avec contrôle. Renforce les abducteurs de hanche (moyen fessier) qui stabilisent le genou à la marche et à la course.' },
      { label: 'Exercice 5', src: '/gallery/exercices/genou-5.mp4', poster: '/gallery/exercices/posters/genou-5.jpg', title: 'Pont fessier avec élastique', desc: 'Allongé sur le dos, genoux fléchis et élastique autour des cuisses, soulevez le bassin en poussant légèrement les genoux vers l\'extérieur. Renforce les fessiers et les ischio-jambiers et améliore le contrôle lombo-pelvien.' },
      { label: 'Exercice 6', src: '/gallery/exercices/genou-6.mp4', poster: '/gallery/exercices/posters/genou-6.jpg', title: 'Travail de l\'ilio-psoas', desc: 'Élastique résistant la flexion de hanche, montez le genou vers la poitrine de façon contrôlée. Renforce l\'ilio-psoas, fléchisseur principal de la hanche, important pour la marche, la course et la montée des escaliers.' },
      { label: 'Exercice 7', src: '/gallery/exercices/genou-7.mp4', poster: '/gallery/exercices/posters/genou-7.jpg', title: 'Récupération de l\'extension du genou', desc: 'Exercice de récupération de l\'amplitude d\'extension complète du genou contre une résistance douce. Indiqué en rééducation post-traumatique ou post-opératoire pour restaurer l\'extension active et la force du quadriceps.' },
    ],
  },
  {
    title: 'Nuque — Mobilité et renforcement',
    description: 'Exercices de mobilité et de renforcement doux de la région cervicale. Améliore l\'amplitude, soulage les tensions de la nuque et renforce les muscles stabilisateurs du cou.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/nuque-1.mp4', poster: '/gallery/exercices/posters/nuque-1.jpg', title: 'Inclinaisons latérales de la nuque', desc: 'Inclinez doucement la tête d\'un côté puis de l\'autre en contrôlant l\'amplitude. Mobilise la région cervicale et étire les muscles latéraux du cou pour soulager les tensions.' },
      { label: 'Exercice 2', src: '/gallery/exercices/nuque-2.mp4', poster: '/gallery/exercices/posters/nuque-2.jpg', title: 'Flexion-extension de la nuque', desc: 'Mouvements lents de flexion (menton vers la poitrine) puis d\'extension de la nuque. Améliore la mobilité cervicale et active les fléchisseurs et extenseurs profonds du cou.' },
    ],
  },
  {
    title: 'Coude — Élastiques de résistance',
    description: 'Exercices de rééducation du coude et de l\'avant-bras avec élastiques. Indiqués pour les tendinopathies (tennis elbow, golf elbow) et le renforcement des muscles de la préhension.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/coude-1.mp4', poster: '/gallery/exercices/posters/coude-1.jpg', title: 'Flexion du coude', desc: 'Élastique fixé sous le pied, fléchissez l\'avant-bras vers l\'épaule de façon contrôlée. Renforce le biceps brachial et le brachioradial. Indiqué en phase de rééducation du coude.' },
      { label: 'Exercice 2', src: '/gallery/exercices/coude-2.mp4', poster: '/gallery/exercices/posters/coude-2.jpg', title: 'Extension du coude', desc: 'Élastique en appui au-dessus de l\'épaule, étendez l\'avant-bras vers le haut contre la résistance. Renforce le triceps et rééduque la chaîne extensrice du coude.' },
    ],
  },
  {
    title: 'Poignet — Élastiques de résistance',
    description: 'Exercices de renforcement et de mobilisation du poignet avec élastiques. Rééduque la flexion, l\'extension et la pronation pour une récupération fonctionnelle complète et une meilleure préhension.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/poignet-1.mp4', poster: '/gallery/exercices/posters/poignet-1.jpg', title: 'Fléchisseurs du poignet', desc: 'Avant-bras posé, paume vers le haut, fléchissez le poignet contre la résistance de l\'élastique. Renforce les fléchisseurs du poignet, essentiels à la stabilité et à la production de force de la préhension.' },
      { label: 'Exercice 2', src: '/gallery/exercices/poignet-2.mp4', poster: '/gallery/exercices/posters/poignet-2.jpg', title: 'Pronation de l\'avant-bras', desc: 'Avant-bras soutenu, effectuez une rotation de l\'avant-bras vers l\'intérieur (pronation) contre l\'élastique. Renforce le rond et le carré pronateurs, essentiels aux gestes du quotidien.' },
      { label: 'Exercice 3', src: '/gallery/exercices/poignet-3.mp4', poster: '/gallery/exercices/posters/poignet-3.jpg', title: 'Extension des extenseurs du poignet', desc: 'Avant-bras posé, paume vers le bas, étendez le poignet contre l\'élastique. Renforce les extenseurs du poignet — exercice clé dans le traitement de l\'épicondylite latérale (tennis elbow).' },
    ],
  },
  {
    title: 'Cheville — Élastiques de résistance',
    description: 'Exercices de renforcement de la cheville avec élastiques. Améliore la proprioception, renforce les muscles péroniers et prévient les entorses.',
    videos: [
      { label: 'Exercice 1', src: '/gallery/exercices/cheville-1.mp4', poster: '/gallery/exercices/posters/cheville-1.jpg', title: 'Éversion de la cheville', desc: 'Assis, élastique autour de l\'avant-pied, tournez le pied vers l\'extérieur contre la résistance de l\'élastique. Renforce les muscles péroniers (court et long fibulaire), stabilisateurs latéraux de la cheville, essentiels dans la prévention et la rééducation des entorses.' },
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
