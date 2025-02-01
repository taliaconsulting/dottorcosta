import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="relative bg-slate-200  flex min-h-screen flex-col">
      <SiteHeader />
      <main className=" flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
