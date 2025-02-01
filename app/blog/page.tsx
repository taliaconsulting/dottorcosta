import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

// This would typically come from your CMS or API
const blogPosts = [
  {
    slug: "latest-lasik-technology",
    title: "The Latest Advancements in LASIK Technology",
    description: "Explore how modern LASIK surgery has evolved and what new technologies mean for patients.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    image: "/blog/lasik-tech.jpg"
  },
  {
    slug: "understanding-cataracts",
    title: "Understanding Cataracts: Symptoms, Causes, and Treatment",
    description: "A comprehensive guide to understanding cataracts and the latest treatment options available.",
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Education",
    image: "/blog/cataracts.jpg"
  },
  // Add more blog posts here
]

export const metadata = {
  title: "Blog | Dr. Besser Eye Care",
  description: "Stay informed about the latest in eye care, surgical procedures, and vision health.",
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-white/80">
              Stay informed about the latest developments in eye care, surgical procedures,
              and vision health from Dr. Besser and our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-medium">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <time dateTime={post.date} className="text-sm text-slate-600">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 