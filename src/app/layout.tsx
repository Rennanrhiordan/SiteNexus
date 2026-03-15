import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexusCore — Engenharia de Software & IA Avançada",
  description:
    "Transformamos desafios complexos em software de alto desempenho. Agentes de IA, Sistemas Web escaláveis e Aplicativos Mobile com arquitetura de nível enterprise.",
  keywords: [
    "engenharia de software",
    "inteligência artificial",
    "desenvolvimento web",
    "aplicativos mobile",
    "automação",
    "agentes de IA",
    "software house",
  ],
  openGraph: {
    title: "NexusCore — Engenharia de Software & IA Avançada",
    description: "Transformamos desafios complexos em software de alto desempenho.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
