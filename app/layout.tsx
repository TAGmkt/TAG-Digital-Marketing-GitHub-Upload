import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAG Digital Marketing | Marketing de autoridade para profissionais da saúde",
  description:
    "Marketing estratégico para médicos, dentistas, biomédicas e clínicas que buscam autoridade, previsibilidade e organização no digital.",
  openGraph: {
    title: "TAG Digital Marketing | Autoridade digital para profissionais da saúde",
    description:
      "Posicionamento, conteúdo e tráfego pago para médicos, dentistas, biomédicas e clínicas que querem crescer com clareza e estratégia.",
    siteName: "TAG Digital Marketing",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
