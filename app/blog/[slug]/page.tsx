import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// List of beautiful gradients that match the site's aesthetic
const gradients = [
  "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
  "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
  "bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900",
  "bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900",
  "bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900",
]

// This would typically come from your CMS or API
const getBlogPost = async (slug: string) => {
  // Mock data - in a real app, this would fetch from your CMS/API
  return {
    slug,
    title: "The Latest Advancements in LASIK Technology",
    description: "Explore how modern LASIK surgery has evolved and what new technologies mean for patients.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    content: `
      <p>
        LASIK eye surgery has come a long way since its FDA approval in 1999. Today, the procedure
        is more precise, safer, and offers better outcomes than ever before. In this article, we'll
        explore the latest technological advancements that are revolutionizing LASIK surgery.
      </p>
      
      <h2>The Evolution of LASIK Technology</h2>
      
      <p>
        Modern LASIK procedures utilize advanced wavefront technology to create a detailed map of your eye's
        unique imperfections. This allows for incredibly precise customization of the treatment to your
        specific needs.
      </p>
      
      <h2>Benefits of Modern LASIK</h2>
      
      <ul>
        <li>Improved accuracy and precision</li>
        <li>Faster recovery times</li>
        <li>Better night vision outcomes</li>
        <li>Reduced risk of complications</li>
      </ul>
      
      <p>
        With these advancements, more patients than ever are candidates for LASIK surgery. However,
        it's important to have a thorough consultation to determine if LASIK is right for you.
      </p>
    `
  }
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const post = await getBlogPost(props.params.slug)
  return {
    title: `${post.title} | Dr. Besser Eye Care Blog`,
    description: post.description,
  }
}

export default async function BlogPost(props: any) {
  const post = await getBlogPost(props.params.slug)
  
  // Get a random gradient
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]

  return (
    <article className="min-h-screen">
      <div className="container py-12">
        {/* Hero Card */}
        <div className={cn(
          "rounded-3xl overflow-hidden shadow-2xl mb-16",
          randomGradient
        )}>
          <div className="relative px-8 py-12 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-grid-white/5" />
            
            <div className="relative">
              <Button
                variant="ghost"
                className="text-white mb-8 hover:bg-white/10"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <div className="flex items-center gap-6 mb-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span>{post.category}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white max-w-4xl mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl">
                {post.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="prose prose-slate lg:prose-lg prose-p:text-justify prose-headings:text-left prose-img:mx-auto prose-headings:font-light prose-h2:text-2xl lg:prose-h2:text-3xl prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  )
} 