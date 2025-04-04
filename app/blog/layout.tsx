import Link from "next/link"
import { BookOpen, Phone, Search } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-slate-200 flex min-h-screen flex-col">

      
      <main className="flex-1">
        {children}
      </main>
      
      <SiteFooter />
    </div>
  )
} 