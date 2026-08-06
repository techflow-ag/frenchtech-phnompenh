import type { Metadata } from "next";
import { Archivo, Instrument_Sans, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://frenchtech-phnompenh.vercel.app"),
  title: {
    default: "La French Tech Phnom Penh — The French Tech Community in Cambodia",
    template: "%s — La French Tech Phnom Penh",
  },
  description:
    "Official French Tech Community in Cambodia since 2019. We connect French, Cambodian, and international founders, investors, and tech talent in Phnom Penh.",
  openGraph: {
    title: "La French Tech Phnom Penh",
    description:
      "The official French Tech Community in Cambodia — events, startups, investors, and the France–Cambodia tech ecosystem.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${notoKhmer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
