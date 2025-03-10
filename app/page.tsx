import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getHomepage, getFeaturedBlogPosts } from "@/lib/sanity.client"

export default async function Home() {
  const homepage = await getHomepage()
  const featuredPosts = await getFeaturedBlogPosts()
  
  return (
    <div className="relative bg-slate-200 flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection data={homepage.hero} />
        <ServicesSection data={homepage.servicesSection} />
        <AboutSection data={homepage.aboutSection} />
        <CertificationsSection data={homepage.certificationsSection} />
        <BlogSection data={homepage.blogPreviewSection} posts={featuredPosts} />
        <ContactSection data={homepage.contactSection} />
      </main>
      <SiteFooter />
    </div>
  )
}
