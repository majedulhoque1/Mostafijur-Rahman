import type { Metadata } from "next";
import { Big_Shoulders_Display, Newsreader, IBM_Plex_Mono } from "next/font/google";
import { athlete, races, roth, press } from "@/content/data";
import "./globals.css";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--f-display",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--f-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--f-mono",
  display: "swap",
});

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://majedulhoque1.github.io/Mostafijur-Rahman";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Mostafijur Rahman — Triathlete & Open-Water Swimmer, Bangladesh",
    template: "%s · Mostafijur Rahman",
  },
  description:
    "Official record of Mostafijur Rahman (Md. Mostafizur Rahman) — Bangladeshi long-distance triathlete and open-water swimmer. Challenge Roth 2026 finisher in 15:05:49, IRONMAN 70.3 World Championship Marbella, Oceanman Krabi, Bangla Channel.",
  keywords: [
    "Mostafijur Rahman",
    "Mostafizur Rahman",
    "Md. Mostafizur Rahman",
    "মোস্তাফিজুর রহমান",
    "Bangladesh triathlete",
    "Challenge Roth 2026",
    "IRONMAN 70.3 World Championship",
    "Bangla Channel swim",
    "Oceanman Krabi",
    "BD TRI",
    "open water swimmer Bangladesh",
  ],
  authors: [{ name: athlete.name }],
  openGraph: {
    type: "profile",
    siteName: athlete.name,
    title: "Mostafijur Rahman — Triathlete & Open-Water Swimmer, Bangladesh",
    description:
      "Challenge Roth 2026 finisher, 15:05:49. IRONMAN 70.3 World Championship Marbella. Oceanman Krabi. Bangla Channel.",
    locale: "en_GB",
    images: [{ url: "/img/oceanman/oceanman-02.webp", width: 2000, height: 1500 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: athlete.name,
    alternateName: [athlete.altSpelling, athlete.nameBn, "Mostafizur Rahman"],
    jobTitle: "Long-distance triathlete and open-water swimmer",
    nationality: { "@type": "Country", name: "Bangladesh" },
    memberOf: { "@type": "SportsTeam", name: athlete.club },
    url: SITE,
    knowsAbout: ["Triathlon", "Open-water swimming", "Water safety", "Survival swimming"],
    award: races
      .filter((r) => r.result)
      .map((r) => `${r.event} ${r.year} — ${r.result}`),
    subjectOf: press.map((p) => ({
      "@type": "NewsArticle",
      headline: p.headline,
      url: p.href,
      publisher: { "@type": "Organization", name: p.outlet },
    })),
  };
  const event = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${roth.event} ${roth.year}`,
    startDate: roth.iso,
    location: { "@type": "Place", name: roth.location },
    competitor: { "@type": "Person", name: athlete.name },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
      />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#efeae0" />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
