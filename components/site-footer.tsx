import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Utilizziamo gli stessi link della navbar per coerenza
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Servizi", href: "/#services" },
  { name: "Chi Siamo", href: "/#about" },
  { name: "Certificazioni", href: "/#certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contatti", href: "/#contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Termini di Servizio", href: "/terms" },
];

type FooterContact = {
  address?: string;
  phoneNumber?: string;
  email?: string;
};

export function SiteFooter({ contact }: { contact?: FooterContact } = {}) {
  return (
    <footer id="footer" className="p-2 sm:p-3 lg:p-4">
      <div className="relative mx-auto w-full max-w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blu-notte to-[#2C3E50]">
        <div className="px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand + Social */}
            <div className="space-y-6">
              <Link
                href="#hero"
                className="flex items-center gap-4 hover:opacity-90 transition-all"
              >
                <Image
                  src="/logo.png"
                  alt="Logo Dottor Costa"
                  width={160}
                  height={56}
                  className="w-auto h-12"
                />
                <span className="text-2xl font-light text-white">Dottor Costa</span>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                Cura specialistica con approccio umano e tecnologie all’avanguardia.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Useful Links */}
            <div className="grid grid-cols-2 gap-8 md:gap-6">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white/80 mb-4">
                  Link Utili
                </h3>
                <ul className="space-y-3">
                  {navLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white/80 mb-4">Legale</h3>
                <ul className="space-y-3">
                  {legalLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-white/80 mb-2">Contatti</h3>
              <p className="text-white/80">{contact?.address || "Viale Aldo Moro 165, 92026 Favara (AG)"}</p>
              <p>
                <Link href={`tel:${(contact?.phoneNumber || "+39 123 456 789").replace(/\s+/g, "")}`} className="text-white hover:underline">
                  {contact?.phoneNumber || "+39 123 456 789"}
                </Link>
              </p>
              <p>
                <Link href={`mailto:${contact?.email || "info@dottorcosta.it"}`} className="text-white hover:underline">
                  {contact?.email || "info@dottorcosta.it"}
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-white/60">
                © {new Date().getFullYear()} Studio Medico Costa. Tutti i diritti riservati.
              </p>
              <div className="flex gap-4 items-center">
                {legalLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="text-white/60 hover:text-white">
                    {item.name}
                  </Link>
                ))}
                <span className="text-white/30">•</span>
                <Link
                  href="https://taliaconsulting.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Made in Talia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
