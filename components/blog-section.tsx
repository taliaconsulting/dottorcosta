import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

type BlogPost = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage: string
  category: string
  publishedAt: string
  readTime: string
}

type BlogSectionProps = {
  data: {
    title: string
    subtitle?: string
    viewAllButtonText?: string
    featuredPostsCount?: number
  }
  posts: BlogPost[]
}

export function BlogSection({ data, posts }: BlogSectionProps) {
  // Fallback per i post del blog se non ci sono dati da Sanity
  const fallbackPosts = [
    {
      _id: "1",
      title: "Understanding LASIK: A Complete Guide",
      slug: { current: "understanding-lasik" },
      excerpt: "Learn about the latest advancements in LASIK surgery and what to expect during the procedure.",
      mainImage: "/blog/lasik-guide.jpg",
      category: "LASIK",
      publishedAt: "2024-03-15T00:00:00Z",
      readTime: "5 min read",
    },
    {
      _id: "2",
      title: "Breakthrough in Cataract Surgery Technology",
      slug: { current: "cataract-surgery-technology" },
      excerpt: "Discover how new lens technology is revolutionizing cataract surgery outcomes.",
      mainImage: "/blog/cataract-tech.jpg",
      category: "Cataract",
      publishedAt: "2024-03-10T00:00:00Z",
      readTime: "4 min read",
    },
    {
      _id: "3",
      title: "Common Eye Problems After 40",
      slug: { current: "eye-problems-after-40" },
      excerpt: "Understanding age-related vision changes and how to maintain optimal eye health.",
      mainImage: "/blog/eye-health.jpg",
      category: "Eye Health",
      publishedAt: "2024-03-05T00:00:00Z",
      readTime: "6 min read",
    },
  ]

  const blogPosts = posts?.length ? posts : fallbackPosts
  
  // Funzione per formattare la data
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(date)
    } catch (e) {
      return dateString
    }
  }

  return (
    <section id="blog" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-5xl sm:text-6xl font-light text-white">{data?.title || "Il Nostro Blog"}</h2>
              <p className="mt-4 text-lg text-white/80">
                {data?.subtitle || "Prospettive di esperti sulla cura degli occhi e la correzione della vista"}
              </p>
            </div>
            <Link href="/blog">
              <Button 
                variant="outline" 
                className="mt-6 md:mt-0 bg-white/5 hover:bg-white/10 text-white border-white/10"
              >
                {data?.viewAllButtonText || "Vedi Tutti i Post"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card 
                key={post._id}
                className="bg-white/5 hover:bg-white/10 border-white/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/90 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center text-sm text-white/60 space-x-4">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="pt-2">
                      <Link href={`/blog/${post.slug.current}`}>
                        <Button 
                          variant="link" 
                          className="px-0 text-blue-400 hover:text-blue-300"
                        >
                          Leggi di Più
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 