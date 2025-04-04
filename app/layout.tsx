import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dottor Domenico Costa | Ginecologo e Ostetrico a Favara",
  description: "Visite ginecologiche e ostetriche con il Dott. Domenico Costa a Favara. Esperto nel trattamento di endometriosi, menopausa e infertilità. Contattaci per un appuntamento.",
  keywords: "ginecologo favara, ostetrico favara, dottor domenico costa, visita ginecologica, visita ostetrica, endometriosi, menopausa, infertilità, ginecologo agrigento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
