/**
 * SINGLE SOURCE OF TRUTH.
 * Rule: every claim here traces to a document in the project folder.
 * Anything unverified is marked `todo` and rendered as a visible gap, never invented.
 */

export const athlete = {
  name: "Mostafijur Rahman",
  nameBn: "মোস্তাফিজুর রহমান",
  altSpelling: "Md. Mostafizur Rahman", // passport / earlier documents
  role: "Long-distance triathlete & open-water swimmer",
  country: "Bangladesh",
  club: "BD TRI", // source: club banner, Oceanman Krabi 2026
  whatsapp: "+8801558021428",
  whatsappDisplay: "+880 1558-021428",
  // TODO(from athlete): date of birth, hometown, profession, year started swimming,
  // formal coaching qualifications, next target event.
};

export type Split = {
  label: string;
  discipline: "swim" | "bike" | "run" | "t";
  time: string;
  seconds: number;
  distance: string;
};

/** Source: DATEV Challenge Roth 2026 finisher certificate + race bib, "Latest Roth/". */
export const roth = {
  event: "DATEV Challenge Roth",
  year: 2026,
  date: "5 July 2026",
  iso: "2026-07-05",
  location: "Roth, Germany",
  bib: "3123",
  club: "BD TRI",
  finish: "15:05:49",
  finishSeconds: 54349,
  overall: 2614,
  ageGroupPlace: 457,
  ageGroup: "M35",
  distanceTotal: "226 km",
  splits: [
    { label: "Swim", discipline: "swim", time: "01:26:08", seconds: 5168, distance: "3.8 km" },
    { label: "T1", discipline: "t", time: "00:09:16", seconds: 556, distance: "transition" },
    { label: "Bike", discipline: "bike", time: "07:23:36", seconds: 26616, distance: "180 km" },
    { label: "T2", discipline: "t", time: "00:09:15", seconds: 555, distance: "transition" },
    { label: "Run", discipline: "run", time: "05:57:34", seconds: 21454, distance: "42.2 km" },
  ] as Split[],
  transitionsNote:
    "Certificate gives swim, bike and run. The remaining 18:31 is transition time, split evenly here.",
};

export type Race = {
  id: string;
  year: string;
  date: string;
  event: string;
  location: string;
  country: string;
  discipline: string;
  distance: string;
  result?: string;
  bib?: string;
  note?: string;
  evidence: string[];
  image?: string;
  todo?: string;
};

/** Chronological, newest first. `evidence` names the artefact that proves the row. */
export const races: Race[] = [
  {
    id: "roth-2026",
    year: "2026",
    date: "5 Jul 2026",
    event: "DATEV Challenge Roth",
    location: "Roth",
    country: "Germany",
    discipline: "Full-distance triathlon",
    distance: "226 km",
    result: "15:05:49",
    bib: "3123",
    note: "2614th overall · 457th in age group M35",
    evidence: ["Finisher certificate", "Race bib", "Finish photography"],
    image: "/img/roth/roth-03.webp",
  },
  {
    id: "oceanman-2026",
    year: "2026",
    date: "Mar 2026",
    event: "Oceanman Krabi",
    location: "Krabi",
    country: "Thailand",
    discipline: "Open-water swim",
    distance: "—",
    evidence: ["Finisher certificate", "Race photography", "The Daily Star", "Prothom Alo"],
    image: "/img/oceanman/oceanman-08.webp",
    todo: "Exact race date, category distance, finish time",
  },
  {
    id: "bangla-channel-2026",
    year: "2026",
    date: "Jan 2026",
    event: "Bangla Channel Swim",
    location: "Teknaf to St Martin Island",
    country: "Bangladesh",
    discipline: "Open-water swim",
    distance: "16.1 km",
    evidence: ["Certificate ceremony photography", "Prothom Alo", "bdnews24", "Somoy News"],
    image: "/img/banglachannel/banglachannel-03.webp",
    todo: "Crossing time and finishing position",
  },
  {
    id: "marbella-2025",
    year: "2025",
    date: "9 Nov 2025",
    event: "IRONMAN 70.3 World Championship",
    location: "Marbella",
    country: "Spain",
    discipline: "Half-distance triathlon",
    distance: "113 km",
    result: "08:17:26",
    bib: "799",
    note: "Finish-arch clock time read from race photography",
    evidence: ["Race photography with broadcast timing overlay", "Finisher medal"],
    image: "/img/marbella/marbella-07.webp",
    todo: "Official chip time and placing, to confirm against IRONMAN results",
  },
  {
    id: "desaru-2025",
    year: "2025",
    date: "2025",
    event: "IRONMAN 70.3 Desaru Coast",
    location: "Desaru Coast, Johor",
    country: "Malaysia",
    discipline: "Half-distance triathlon",
    distance: "113 km",
    bib: "248",
    note: "Official qualifier for the IRONMAN 70.3 World Championship",
    evidence: ["Finisher certificate", "Qualifier presentation photography", "Race bib (BGD)"],
    image: "/img/desaru/desaru-11.webp",
    todo: "Exact race date and finish time",
  },
  {
    id: "fishtail-nepal",
    year: "2025",
    date: "2025",
    event: "Fishtail",
    location: "Pokhara",
    country: "Nepal",
    discipline: "Endurance",
    distance: "—",
    evidence: ["Event photography"],
    image: "/img/fishtail/fishtail-01.webp",
    todo: "Event name, discipline, date, result — photography only, no document",
  },
  {
    id: "jia-2025",
    year: "2025",
    date: "2025",
    event: "Jia Swimming Carnival",
    location: "Bangladesh",
    country: "Bangladesh",
    discipline: "Swim",
    distance: "—",
    evidence: ["Event photography"],
    image: "/img/jia/jia-01.webp",
    todo: "Date, distance, result",
  },
  {
    id: "bandarban-ultra",
    year: "2024",
    date: "2024",
    event: "Vertical Dreamers Ultra Run",
    location: "Bandarban",
    country: "Bangladesh",
    discipline: "Trail ultramarathon",
    distance: "25 km",
    evidence: ["Event photography"],
    image: "/img/bandarban/bandarban-01.webp",
    todo: "Date and finish time",
  },
  {
    id: "coastal-ultra-2024",
    year: "2024",
    date: "2024",
    event: "Coastal Ultra Run",
    location: "Cox Bazar",
    country: "Bangladesh",
    discipline: "Ultramarathon",
    distance: "50 km",
    evidence: ["Finisher certificate"],
    image: "/img/coastal/coastal-01.webp",
    todo: "Date and finish time",
  },
];

export const countries = ["Bangladesh", "Malaysia", "Spain", "Thailand", "Nepal", "Germany"];

export const press = [
  {
    outlet: "Jamuna TV",
    lang: "BN",
    date: "16 Aug 2026",
    headline: "অপ্রতিরোধ্য বাংলাদেশ — Sokaler Bangladesh, 7 AM",
    href: "https://youtu.be/wUxk32P755U",
  },
  {
    outlet: "The Daily Star",
    lang: "EN",
    date: "Mar 2026",
    headline:
      "Oceanman 2026: Two Bangladeshi swimmers conquer the waves of Andaman Sea",
    href: "https://www.thedailystar.net/news/bangladesh/news/oceanman-2026-two-bangladeshi-swimmers-conquer-the-waves-andaman-sea-4139836",
  },
  {
    outlet: "Ittefaq",
    lang: "BN",
    date: "Mar 2026",
    headline: "আন্দামান সাগরের ঢেউকে সঙ্গী করে বাংলাদেশের দুই সাঁতারু",
    href: "https://www.ittefaq.com.bd/781836",
  },
  {
    outlet: "Prothom Alo",
    lang: "BN",
    date: "Mar 2026",
    headline: "Oceanman Krabi — sports desk",
    href: "https://www.prothomalo.com/sports/other-sports/g2v55trwed",
  },
  {
    outlet: "Jamuna Sports",
    lang: "BN",
    date: "31 Mar 2026",
    headline:
      "ওশানম্যান ২০২৬ এ নিজেদের সামর্থ্যের প্রমাণ দিলেন বাংলাদেশের দুই অ্যাথলেট",
    href: "https://youtu.be/40PcPonH220",
  },
  {
    outlet: "Fox Bangla 24",
    lang: "BN",
    date: "31 Mar 2026",
    headline: "Oceanman Krabi report",
    href: "https://foxbangla24.com/news/standard?id=260331HALFBXSAJH",
  },
  {
    outlet: "Somoy News",
    lang: "BN",
    date: "17 Jan 2026",
    headline: "Bangla Channel crossing — television report",
    href: "https://www.somoynews.tv/news/2026-01-17/30R71wPZ",
  },
  {
    outlet: "Prothom Alo",
    lang: "BN",
    date: "Jan 2026",
    headline: "Bangla Channel crossing — district desk",
    href: "https://www.prothomalo.com/bangladesh/district/ifg1rhmlfw",
  },
  {
    outlet: "bdnews24",
    lang: "BN",
    date: "Jan 2026",
    headline: "Bangla Channel crossing coverage",
    href: "https://bangla.bdnews24.com/samagrabangladesh/a2e812bbbb82",
  },
];

/**
 * Coaching. Framed exactly as the evidence supports: documented sessions,
 * and a stated ambition that is labelled as an ambition.
 * The "300+ trained / 150+ children" figures from earlier drafts have no
 * supporting document in the project folder and are deliberately not published.
 */
export const coaching = {
  headline: "Swim For Life Bangladesh",
  status: "Stated mission",
  body:
    "Drowning is one of the leading causes of child death in Bangladesh. Alongside racing, Mostafijur runs open-water swimming and water-safety sessions in Dhaka: land warm-up, a briefing at the water line, then supervised in-water work with tow floats and safety buoys.",
  ambition:
    "The stated long-term goal is a nationwide programme teaching survival swimming to 10,000 children and young people.",
  images: [
    "/img/coaching/coaching-06.webp",
    "/img/coaching/coaching-02.webp",
    "/img/coaching/coaching-09.webp",
  ],
  todo:
    "Documentation for participant numbers; registered programme name, venue and partner organisation",
};

export const gallery = [
  { src: "/img/marbella/marbella-08.webp", caption: "IRONMAN 70.3 World Championship, Marbella" },
  { src: "/img/oceanman/oceanman-07.webp", caption: "Oceanman Krabi, Andaman Sea" },
  { src: "/img/banglachannel/banglachannel-01.webp", caption: "Bangla Channel, Cox Bazar" },
  { src: "/img/desaru/desaru-10.webp", caption: "IRONMAN 70.3 Desaru Coast, Malaysia" },
  { src: "/img/oceanman/oceanman-09.webp", caption: "Open-water start, Krabi" },
  { src: "/img/marbella/marbella-06.webp", caption: "Run course, Puerto Banus" },
  { src: "/img/roth/roth-03.webp", caption: "Challenge Roth finisher medal at the Roth arch" },
];

export const nav = [
  { id: "about", label: "Profile" },
  { id: "record", label: "Record" },
  { id: "water", label: "Open Water" },
  { id: "coaching", label: "Coaching" },
  { id: "press", label: "Press" },
];
