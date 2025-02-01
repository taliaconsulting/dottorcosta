import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navigation = {
  lasik: [
    { name: "LASIK Overview", href: "/lasik" },
    { name: "LASIK Consultation", href: "/lasik/consultation" },
    { name: "LASIK Technology", href: "/lasik/technology" },
    { name: "LASIK Surgery Recovery", href: "/lasik/recovery" },
  ],
  cataract: [
    { name: "Cataract Surgery Overview", href: "/cataract" },
    { name: "Cataract Consultation", href: "/cataract/consultation" },
    { name: "Cataract Technology", href: "/cataract/technology" },
    { name: "Cataract Surgery Recovery", href: "/cataract/recovery" },
  ],
  refractive: [
    { name: "Refractive Lens Exchange", href: "/refractive" },
    { name: "PRK Surgery", href: "/refractive/prk" },
    { name: "Reading Vision Solutions", href: "/refractive/reading-vision" },
  ],
  medical: [
    { name: "Comprehensive Eye Exam", href: "/medical/exam" },
    { name: "Glaucoma", href: "/medical/glaucoma" },
    { name: "Diabetic Eye Disease", href: "/medical/diabetic" },
    { name: "Dry Eye", href: "/medical/dry-eye" },
  ],
}

export function SiteHeader() {
  return (
    <header className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 z-50">
      <nav className="rounded-t-2xl bg-transparent backdrop-blur-[2px] flex h-20 items-center justify-between px-8 bg-gradient-to-b from-black/20 to-transparent">
        <div className="flex lg:flex-1">
          <Link 
            href="/" 
            className="text-2xl font-light text-white hover:text-white/90 transition-all duration-300 hover:scale-105"
          >
            EduardoBesser MD
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {Object.entries(navigation).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-medium capitalize">{category}</h3>
                    <div className="flex flex-col space-y-2">
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="text-white data-[state=open]:bg-white/10 bg-transparent hover:bg-white/5 transition-all duration-300"
                >
                  LASIK
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg animate-in slide-in-from-top-5">
                    {navigation.lasik.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="text-white data-[state=open]:bg-white/10 bg-transparent hover:bg-white/5 transition-all duration-300"
                >
                  Cataract Surgery
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg animate-in slide-in-from-top-5">
                    {navigation.cataract.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="text-white data-[state=open]:bg-white/10 bg-transparent hover:bg-white/5 transition-all duration-300"
                >
                  Refractive
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg animate-in slide-in-from-top-5">
                    {navigation.refractive.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="text-white data-[state=open]:bg-white/10 bg-transparent hover:bg-white/5 transition-all duration-300"
                >
                  Medical Eye Care
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg animate-in slide-in-from-top-5">
                    {navigation.medical.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/about" 
                  className="text-white hover:text-white/80 transition-all duration-300 px-4 py-2 hover:bg-white/5 rounded-md inline-flex"
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-white/80 transition-all duration-300 px-4 py-2 hover:bg-white/5 rounded-md inline-flex"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  )
} 