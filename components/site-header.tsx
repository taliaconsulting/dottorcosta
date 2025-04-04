import Link from "next/link"
import { Menu, X, Home, Stethoscope, User, Award, BookOpen, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Sezioni del sito per la navigazione con icone
const sectionNavigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Servizi", href: "/#services", icon: Stethoscope },
  { name: "Chi Siamo", href: "/#about", icon: User },
  { name: "Certificazioni", href: "/#certifications", icon: Award },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contatti", href: "/#contact", icon: Mail },
]

export function SiteHeader() {
  return (
    <header className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 z-50">
      <nav className="rounded-t-2xl bg-gradient-to-b from-black/20 to-transparent backdrop-blur-[2px] px-4 sm:px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="#hero" 
              className="text-2xl font-light text-white hover:text-white/90 transition-all duration-300 hover:scale-105"
            >
              Dottor Costa
            </Link>
          </div>
          
          {/* Menu Mobile */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 text-white hover:bg-white/10 rounded-full"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Apri menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="top" 
                className="w-full h-[100dvh] border-0 p-0 bg-gradient-to-b from-blu-notte via-blu-notte/95 to-blu-notte/90 backdrop-blur-md animate-in slide-in-from-top-full duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Header del menu mobile */}
                  <div className="flex items-center justify-between p-6 border-b border-blu-polvere/20">
                    <Link 
                      href="#hero" 
                      className="text-2xl font-light text-bianco-perla hover:text-blu-polvere transition-all duration-300"
                    >
                      Dottor Costa
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="lg" className="bg-blu-polvere/10 rounded-full h-12 w-12 text-bianco-perla hover:text-blu-polvere hover:bg-blu-polvere/20 relative">
                        <X className="h-6 w-6 absolute" />
                        <span className="sr-only">Chiudi menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  
                  {/* Contenuto del menu mobile */}
                  <nav className="flex flex-col p-6 space-y-6 flex-grow overflow-y-auto">
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                      {sectionNavigation.map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className="group flex items-center gap-4 text-xl text-bianco-perla hover:text-blu-polvere transition-all duration-300 p-4 rounded-xl hover:bg-bianco-perla/5"
                          >
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blu-polvere/20 text-blu-polvere group-hover:bg-blu-polvere/30 transition-all duration-300 group-hover:scale-110">
                              <item.icon className="h-6 w-6" />
                            </span>
                            <span className="font-light">{item.name}</span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>
                  
                  {/* Footer del menu mobile */}
                  <div className="p-6 mt-auto border-t border-blu-polvere/20">
                    <Link
                      href="#contact"
                      className="flex items-center justify-center gap-3 w-full rounded-xl bg-blu-polvere py-5 text-lg text-blu-notte font-medium shadow hover:bg-blu-polvere/90 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Phone className="h-5 w-5" />
                      Prenota Visita
                    </Link>
                    <p className="text-center text-bianco-perla/60 text-sm mt-6">
                      © {new Date().getFullYear()} Dottor Costa. Tutti i diritti riservati.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
              href="#contact"
              className="ml-4 rounded-md bg-blu-polvere px-8 py-2 text-base text-blu-notte shadow hover:bg-blu-polvere/90 border-0 transition-colors"
            >
              Prenota Visita
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 