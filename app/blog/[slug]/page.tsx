import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PortableText } from "@/components/ui/portable-text"
import { getBlogPostBySlug } from "@/lib/sanity.client"
import { redirect } from "next/navigation"

// Lista di gradienti che corrispondono all'estetica del sito
const gradients = [
  "bg-gradient-to-br from-[#1B365C] via-[#2C3E50] to-[#1B365C]",
  "bg-gradient-to-br from-[#2C3E50] via-[#1B365C] to-[#2C3E50]",
  "bg-gradient-to-br from-[#1B365C] via-[#2F4356] to-[#1B365C]",
  "bg-gradient-to-br from-[#2F4356] via-[#1B365C] to-[#2F4356]",
  "bg-gradient-to-br from-[#1B365C] via-[#7EA1C4] to-[#1B365C]",
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) {
    return {
      title: "Post non trovato | Blog Dr. Costa",
      description: "Il post richiesto non è stato trovato",
    }
  }
  
  return {
    title: `${post.title} | Blog Dr. Costa`,
    description: post.excerpt || "Leggi questo articolo sul blog del Dr. Costa",
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  
  // Redirect alla pagina del blog se il post non esiste
  if (!post) {
    redirect("/blog")
  }
  
  // Get a random gradient
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]

  // Assicurare che le date siano formattate correttamente anche se mancanti
  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('it-IT', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      })
    : "Data non disponibile"

  return (
    <article>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B365C] via-[#2C3E50] to-[#1B365C] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.1),transparent_60%)]"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna al Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt || ""}>
                  {formattedDate}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime || "Tempo di lettura non disponibile"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{post.category || "Categoria non specificata"}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white max-w-4xl mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl">
              {post.excerpt || ""}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10">
              <PortableText 
                value={post.body || []}
                className="prose-p:text-justify prose-headings:text-left prose-img:mx-auto prose-headings:font-light prose-h2:text-2xl lg:prose-h2:text-3xl prose-p:leading-relaxed font-['Montserrat']"
              />
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center text-[#1B365C] hover:text-[#2C3E50] font-medium transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna agli articoli
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 