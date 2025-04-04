import Link from "next/link"
import { BookOpen, Phone, Search } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-slate-200 flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-lg sm:text-xl font-medium text-[#1B365C] hover:text-[#2C3E50] transition-all duration-300"
            >
              Dr. Costa
            </Link>
            <span className="hidden md:flex h-6 w-px bg-slate-300 mx-2"></span>
            <div className="hidden md:flex items-center gap-1">
              <BookOpen className="h-4 w-4 text-[#1B365C]" />
              <span className="text-slate-600 font-medium">Blog</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-[#1B365C] transition-all duration-300">
              Home
            </Link>
            <Link href="/blog" className="text-[#1B365C] font-medium transition-all duration-300 border-b-2 border-[#1B365C] pb-1">
              Articoli
            </Link>
            <Link href="/#services" className="text-slate-600 hover:text-[#1B365C] transition-all duration-300">
              Servizi
            </Link>
            <Link href="/#about" className="text-slate-600 hover:text-[#1B365C] transition-all duration-300">
              Chi Siamo
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
          
            <Button 
              className="hidden sm:flex bg-[#1B365C] hover:bg-[#2C3E50] transition-all duration-300"
              asChild
            >
              <Link className = 'text-white' href="/#contact">
                <Phone className="h-4 w-4 mr-2 " />
                Contattaci
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="sm:hidden border-slate-300 text-slate-600 p-2 h-9 w-9"
              asChild
            >
              <Link href="/">
                Home
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <SiteFooter />
    </div>
  )
} 