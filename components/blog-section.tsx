import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Understanding LASIK: A Complete Guide",
    excerpt: "Learn about the latest advancements in LASIK surgery and what to expect during the procedure.",
    image: "/blog/lasik-guide.jpg",
    category: "LASIK",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Breakthrough in Cataract Surgery Technology",
    excerpt: "Discover how new lens technology is revolutionizing cataract surgery outcomes.",
    image: "/blog/cataract-tech.jpg",
    category: "Cataract",
    date: "March 10, 2024",
    readTime: "4 min read",
  },
  {
    title: "Common Eye Problems After 40",
    excerpt: "Understanding age-related vision changes and how to maintain optimal eye health.",
    image: "/blog/eye-health.jpg",
    category: "Eye Health",
    date: "March 5, 2024",
    readTime: "6 min read",
  },
]

export function BlogSection() {
  return (
    <section className="p-3 sm:p-4 lg:p-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl font-light text-white">Latest Insights</h2>
              <p className="mt-4 text-lg text-white/80">
                Expert perspectives on eye care and vision correction
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-6 md:mt-0 bg-white/5 hover:bg-white/10 text-white border-white/10"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card 
                key={post.title}
                className="bg-white/5 hover:bg-white/10 border-white/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={post.image}
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
                      <span>{post.date}</span>
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
                      <Button 
                        variant="link" 
                        className="px-0 text-blue-400 hover:text-blue-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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