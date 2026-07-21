import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S1 Performance Digital | Sistema de Decisão orientado por Dados",
  description: "A S1 transforma dados em decisões com o Ciclo DECIDE. Pare de achar. Comece a decidir. Peça seu Diagnóstico gratuito.",
  openGraph: {
    title: "S1 Performance Digital | Sistema de Decisão orientado por Dados",
    description: "A S1 transforma dados em decisões com o Ciclo DECIDE. Pare de achar. Comece a decidir. Peça seu Diagnóstico gratuito.",
    url: "https://www.s1performancedigital.com/",
    siteName: "S1 Performance Digital",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
