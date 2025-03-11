import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Sezioni del sito per la navigazione
const sectionNavigation = [
  { name: "Home", href: "#hero" },
  { name: "Servizi", href: "#services" },
  { name: "Chi Siamo", href: "#about" },
  { name: "Certificazioni", href: "#certifications" },
  { name: "Blog", href: "#blog" },
  { name: "Contatti", href: "#contact" },
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
              <SheetContent side="right" className="w-[300px] sm:w-[350px] border-l border-slate-700/50 bg-slate-800/95 backdrop-blur-md">
                <nav className="flex flex-col gap-6 mt-8">
                  {sectionNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg text-white hover:text-blue-300 transition-colors px-2 py-1.5 border-l-2 border-transparent hover:border-blue-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="tel:+39123456789"
                    className="mt-6 flex justify-center rounded-md bg-blu-polvere px-8 py-3 text-base text-blu-notte shadow hover:bg-blu-polvere/90 border-0 transition-colors"
                  >
                    Prenota Visita
                  </Link>
                </nav>
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
              href="tel:+39123456789"
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