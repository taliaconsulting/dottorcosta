"use client";
import {
  Award,
  BookOpen,
  Home,
  Mail,
  Menu,
  Phone,
  Stethoscope,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Sezioni del sito per la navigazione con icone
const sectionNavigation = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Servizi", href: "#services", icon: Stethoscope },
  { name: "Chi Siamo", href: "#about", icon: User },
  { name: "Certificazioni", href: "#certifications", icon: Award },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Contatti", href: "#contact", icon: Mail },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  // Funzione per gestire lo scroll manuale e chiudere il menu custom
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "auto", block: "start" });
    }
    // Chiudi il menu custom immediatamente
    setIsMobileMenuOpen(false);
  };

  // Gestione click sul logo principale (leggermente adattata)
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = "#hero";
    if (isMobileMenuOpen) {
      handleLinkClick(e, href); // Chiude anche il menu
    } else {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      targetElement?.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  // Effetto per bloccare lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function per ripristinare lo scroll se il componente viene smontato
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Track whether we are over the hero section to toggle nav background/colors
  useEffect(() => {
    const updateOverHero = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setOverHero(window.scrollY < 40);
        return;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setOverHero(window.scrollY + 8 < heroBottom); // small hysteresis
    };
    updateOverHero();
    window.addEventListener("scroll", updateOverHero, { passive: true });
    window.addEventListener("resize", updateOverHero);
    return () => {
      window.removeEventListener("scroll", updateOverHero);
      window.removeEventListener("resize", updateOverHero);
    };
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50")}>
      <nav
        className={cn(
          "mx-auto mt-3 sm:mt-4 lg:mt-6 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-7xl px-4 sm:px-6 py-3 transition-all duration-300",
          overHero
            ? "bg-transparent"
            : "bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 rounded-2xl"
        )}
      >
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
              <span
                className={cn(
                  "text-2xl font-light transition-colors",
                  overHero
                    ? "text-white group-hover:text-white/90"
                    : "text-slate-900 group-hover:text-slate-700"
                )}
              >
                Dottor Costa
              </span>
            </Link>
          </div>

          {/* Menu Mobile */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              className={cn(
                "p-2 rounded-full",
                overHero
                  ? "text-white hover:bg-white/10"
                  : "text-slate-800 hover:bg-slate-100"
              )}
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
                        className={cn(
                          "transition-all duration-300 px-4 py-2 rounded-md inline-flex relative group",
                          overHero
                            ? "text-white hover:text-blue-200 hover:bg-white/5"
                            : "text-slate-800 hover:text-slate-900 hover:bg-slate-100"
                        )}
                      >
                        {item.name}
                        <span
                          className={cn(
                            "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-1/2 transition-all duration-300",
                            overHero ? "bg-blue-400" : "bg-slate-400"
                          )}
                        />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="tel:+39123456789"
              className="ml-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 px-8 bg-blu-polvere hover:bg-blu-polvere/90 text-blu-notte border-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
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
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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
          isMobileMenuOpen
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        )}
      >
        {/* Header del menu mobile custom */}
        <div className="flex items-center justify-between p-6 border-b border-blu-polvere/20 flex-shrink-0">
          <Link
            href="#hero"
            className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group"
            onClick={(e) => handleLinkClick(e, "#hero")}
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
            className="flex items-center justify-center gap-3 w-full inline-flex gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 px-8 bg-blu-polvere hover:bg-blu-polvere/90 text-blu-notte border-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-300 hover:scale-[1.02]"
            onClick={() => setIsMobileMenuOpen(false)} // Chiude semplicemente il menu
          >
            <Phone className="h-5 w-5" />
            Prenota Visita
          </Link>
          <p className="text-center text-bianco-perla/60 text-sm mt-6">
            © {new Date().getFullYear()} Dottor Costa. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </header>
  );
}
