"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Home, Stethoscope, User, Award, BookOpen, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Sezioni del sito per la navigazione con icone
const sectionNavigation = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Servizi", href: "#services", icon: Stethoscope },
  { name: "Chi Siamo", href: "#about", icon: User },
  { name: "Certificazioni", href: "#certifications", icon: Award },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Contatti", href: "#contact", icon: Mail },
]

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funzione per gestire lo scroll manuale e chiudere il menu custom
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
    // Chiudi il menu custom immediatamente
    setIsMobileMenuOpen(false);
  };

  // Gestione click sul logo principale (leggermente adattata)
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = '#hero';
    if (isMobileMenuOpen) {
      handleLinkClick(e, href); // Chiude anche il menu
    } else {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      targetElement?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  // Effetto per bloccare lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function per ripristinare lo scroll se il componente viene smontato
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 z-50">
      <nav className="rounded-t-2xl bg-gradient-to-b from-black/20 to-transparent backdrop-blur-[2px] px-4 sm:px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="#hero"
              className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 hover:scale-105 group"
              onClick={handleLogoClick}
            >
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Dottor Costa Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-light text-white group-hover:text-white/90">
                Dottor Costa
              </span>
            </Link>
          </div>
          
          {/* Menu Mobile */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              className="p-2 text-white hover:bg-white/10 rounded-full"
              aria-label="Apri menu"
              onClick={() => setIsMobileMenuOpen(true)} // Apre il menu custom
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Apri menu</span>
            </Button>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {sectionNavigation.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="text-white hover:text-blue-200 transition-all duration-300 px-4 py-2 hover:bg-white/5 rounded-md inline-flex relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-1/2 transition-all duration-300"/>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link
              href="tel:+39123456789"
              className="ml-4 rounded-md bg-blu-polvere px-8 py-2 text-base text-blu-notte shadow hover:bg-blu-polvere/90 border-0 transition-colors"
            >
              Prenota Visita
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay e Contenuto del Menu Mobile Custom */}
      {/* Overlay semi-trasparente */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)} // Chiude cliccando sull'overlay
        aria-hidden="true"
      />

      {/* Contenuto del drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full max-h-[100dvh] flex flex-col", // Usa full height
          "bg-gradient-to-b from-blu-notte via-blu-notte/95 to-blu-notte/90 backdrop-blur-md",
          "z-50 transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        )}
      >
        {/* Header del menu mobile custom */}
        <div className="flex items-center justify-between p-6 border-b border-blu-polvere/20 flex-shrink-0">
          <Link
            href="#hero"
            className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group"
            onClick={(e) => handleLinkClick(e, '#hero')}
          >
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="Dottor Costa Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-light text-bianco-perla group-hover:text-blu-polvere">
              Dottor Costa
            </span>
          </Link>
          <Button
            variant="ghost"
            size="lg"
            className="bg-blu-polvere/10 rounded-full h-12 w-12 text-bianco-perla hover:text-blu-polvere hover:bg-blu-polvere/20 relative"
            onClick={() => setIsMobileMenuOpen(false)} // Chiude il menu custom
            aria-label="Chiudi menu"
          >
            <X className="h-6 w-6 absolute" />
            <span className="sr-only">Chiudi menu</span>
          </Button>
        </div>

        {/* Contenuto scrollabile del menu mobile custom */}
        <nav className="flex flex-col p-6 space-y-6 flex-grow overflow-y-auto">
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
            {sectionNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 text-xl text-bianco-perla hover:text-blu-polvere transition-all duration-300 p-4 rounded-xl hover:bg-bianco-perla/5"
                onClick={(e) => handleLinkClick(e, item.href)} // Scrolla e chiude immediatamente
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blu-polvere/20 text-blu-polvere group-hover:bg-blu-polvere/30 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="font-light">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer del menu mobile custom */}
        <div className="p-6 mt-auto border-t border-blu-polvere/20 flex-shrink-0">
          <Link
            href="tel:+39123456789"
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-blu-polvere py-5 text-lg text-blu-notte font-medium shadow hover:bg-blu-polvere/90 transition-all duration-300 hover:scale-[1.02]"
            onClick={() => setIsMobileMenuOpen(false)} // Chiude semplicemente il menu
          >
            <Phone className="h-5 w-5" />
            Prenota Visita
          </Link>
          <p className="text-center text-bianco-perla/60 text-sm mt-6">
            © {new Date().getFullYear()} Dottor Costa. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </header>
  )
} 