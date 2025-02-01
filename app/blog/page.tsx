import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// List of beautiful gradients that match the site's aesthetic
const gradients = [
  "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
  "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
  "bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900",
  "bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900",
  "bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900",
]

// This would typically come from your CMS or API
const blogPosts = [
  {
    slug: "latest-lasik-technology",
    title: "The Latest Advancements in LASIK Technology",
    description: "Explore how modern LASIK surgery has evolved and what new technologies mean for patients.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    slug: "understanding-cataracts",
    title: "Understanding Cataracts: Symptoms, Causes, and Treatment",
    description: "A comprehensive guide to understanding cataracts and the latest treatment options available.",
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Education",
  },
  // Add more blog posts here
]

export const metadata = {
  title: "Blog | Dr. Besser Eye Care",
  description: "Stay informed about the latest in eye care, surgical procedures, and vision health.",
}

export default function BlogPage() {
  // Get a random gradient for the hero section
  const heroGradient = gradients[Math.floor(Math.random() * gradients.length)]

  return (
    <>
      {/* Hero Section */}
      <div className="container py-12">
        <div className={cn(
          "rounded-3xl overflow-hidden shadow-2xl mb-16",
          heroGradient
        )}>
          <div className="relative px-8 py-12 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-grid-white/5" />
            
            <div className="relative">
              <Button
                variant="ghost"
                className="text-white mb-8 hover:bg-white/10"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
                Insights & Updates
              </h1>
              <p className="text-xl text-white/80 max-w-3xl">
                Stay informed about the latest developments in eye care, surgical procedures,
                and vision health from Dr. Besser and our team of experts.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => {
            // Get a different gradient for each post card
            const cardGradient = gradients[(index + 2) % gradients.length]
            
            return (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <Card className={cn(
                  "h-full overflow-hidden hover:shadow-lg transition-all duration-300",
                  cardGradient,
                  "border-0"
                )}>
                  <CardHeader className="relative">
                    <div className="absolute inset-0 bg-grid-white/5" />
                    <div className="relative">
                      <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                        <span>{post.category}</span>
                        <span className="text-white/60">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-white/80">
                        {post.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="absolute inset-0 bg-grid-white/5" />
                    <time dateTime={post.date} className="relative text-sm text-white/70">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
} 