import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "LASIK Surgery", href: "/lasik" },
    { name: "Cataract Surgery", href: "/cataract" },
    { name: "Refractive Surgery", href: "/refractive" },
    { name: "Medical Eye Care", href: "/medical" },
  ],
  resources: [
    { name: "Patient Forms", href: "/forms" },
    { name: "Insurance", href: "/insurance" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
]

export function SiteFooter() {
  return (
    <footer className="p-3 sm:p-4 lg:p-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link 
                href="/" 
                className="text-2xl font-light text-white hover:text-white/90 transition-all duration-300"
              >
                EduardoBesser MD
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">
                Providing exceptional eye care and surgical services with state-of-the-art technology and personalized attention.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="h-5 w-5 text-white/80" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="space-y-6">
              <h3 className="text-white font-medium">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-6">
              <h3 className="text-white font-medium">Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-white font-medium">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Eduardo Besser MD. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 