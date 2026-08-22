import type { Metadata } from "next";
import {
  Archivo,
  Instrument_Sans,
  Noto_Sans_Khmer,
  Fraunces,
  Space_Grotesk,
  IBM_Plex_Mono,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const notoKhmer = Noto_Sans_Khmer({
  variable: "--font-noto-khmer",
  subsets: ["khmer"],
  weight: ["400", "700"],
});

// Variation typefaces (used only on the alternate homepage routes).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lafrenchtech-cambodge.com"),
  title: {
    default: "La French Tech Phnom Penh | The French Tech Community in Cambodia",
    template: "%s | La French Tech Phnom Penh",
  },
  description:
    "Official French Tech Community in Cambodia since 2019. We connect French, Cambodian, and international founders, investors, and tech talent in Phnom Penh.",
  applicationName: "La French Tech Phnom Penh",
  alternates: { canonical: "/" },
  openGraph: {
    title: "La French Tech Phnom Penh",
    description:
      "The official French Tech Community in Cambodia: events, startups, investors, and the France-Cambodia tech ecosystem.",
    url: "https://lafrenchtech-cambodge.com",
    siteName: "La French Tech Phnom Penh",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "La French Tech Phnom Penh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La French Tech Phnom Penh",
    description:
      "The official French Tech Community in Cambodia: events, startups, investors, and the France-Cambodia tech ecosystem.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${notoKhmer.variable} ${fraunces.variable} ${spaceGrotesk.variable} ${plexMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
