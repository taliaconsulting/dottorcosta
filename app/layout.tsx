import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dr. Name - Medical Professional",
  description: "Professional medical services and patient care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          dm_sans.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
