import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautyso.de";
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

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
    <html lang="de" className={`${instrumentSans.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
