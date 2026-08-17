import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import "./landing.css";
import "./service.css";
import "./ratgeber/ratgeber.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-so-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautyso.de";
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
const directionContract = `<!--
THESIS: Personal beauty guidance in Mannheim, presented as a calm modernist salon rather than a luxury-template catalogue.
OWN-WORLD: Bone, blush and wine fields; flat rule-line structure; neutral grotesk type; restrained rectangular controls.
STORY: Understand the treatments, see one real treatment film, trust the qualified process, then ask personally on WhatsApp.
FIRST VIEWPORT: Wine header above a blush, copy-led hero; consultation copy and actions left, contained 4:5 film right; mobile stacks copy before film.
FORM: Rosé Modernism, grounded candidate 1 and user-pinned choice; Impeccable direction seed 5bd160d6 corroborates the completed decision round.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kosmetikstudio Mannheim | S&O Beauty Salon",
    template: "%s | S&O Beauty Salon Mannheim",
  },
  description:
    "S&O Beauty Salon in den Mannheimer Quadraten: Laser-Haarentfernung, AquaFacial, Microneedling, Wimpernlifting und individuelle Hautpflege. Termin bequem per WhatsApp anfragen.",
  keywords: [
    "Kosmetikstudio Mannheim",
    "Beauty Salon Mannheim",
    "Laser Haarentfernung Mannheim",
    "Aquafacial Mannheim",
    "Microneedling Mannheim",
    "Wimpernlifting Mannheim",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "S&O Beauty Salon",
    title: "S&O Beauty Salon | Kosmetikstudio Mannheim",
    description:
      "Individuelle Beauty-Behandlungen und moderne Laser-Technologie im Herzen von Mannheim.",
  },
  twitter: {
    card: "summary_large_image",
    title: "S&O Beauty Salon | Mannheim",
    description:
      "Laser-Haarentfernung, AquaFacial, Microneedling, Wimpernlifting und Hautpflege in Mannheim.",
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={schibstedGrotesk.variable}>
      <body>
        <template data-impeccable-contract dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
