import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Universo Paisagismo | Projetos e jardins em Belo Horizonte",
    template: "%s | Universo Paisagismo",
  },
  description:
    "Projetos personalizados, execução e manutenção de jardins em Belo Horizonte e região metropolitana. Visualização em 3D e acompanhamento completo.",
  openGraph: {
    title: "Universo Paisagismo",
    description:
      "Transforme seu jardim com projetos paisagísticos, execução profissional e manutenção.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">
        <div className="grain" aria-hidden />
        <SiteHeader />
        <main className="pt-20 md:pt-24 min-h-[calc(100vh-80px)] overflow-x-hidden">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
