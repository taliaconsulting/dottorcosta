import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Book, Clock, Tag } from "lucide-react"
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

// Funzione per estrarre il testo dalle prime righe del contenuto
function extractExcerpt(body: any[]): string {
  if (!body || !body.length) return "Leggi l'articolo completo";
  
  // Cerca i blocchi di testo
  for (const block of body) {
    if (block._type === 'block' && block.children) {
      const text = block.children
        .filter((child: any) => child._type === 'span')
        .map((span: any) => span.text)
        .join(' ');
      
      if (text) {
        // Limita a circa 160 caratteri e aggiungi ... se necessario
        return text.length > 160 ? text.substring(0, 157) + '...' : text;
      }
    }
  }
  
  return "Leggi l'articolo completo";
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(slug)
  if (!post) {
    return {
      title: "Post non trovato | Blog Dr. Costa",
      description: "Il post richiesto non è stato trovato",
    }
  }
  
  const excerpt = extractExcerpt(post.body || []);
  
  return {
    title: `${post.title} | Blog Dr. Costa`,
    description: excerpt,
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

  // Genera l'estratto dal contenuto
  const excerpt = extractExcerpt(post.body || []);

  return (
    <article className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#1B365C] via-[#2C3E50] to-[#1B365C] overflow-hidden">
        {/* Effetti di sfondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="group inline-flex items-center text-white/80 hover:text-white mb-8 py-2 transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Torna al Blog
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white max-w-4xl mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-6 py-4 mb-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                  <Tag className="h-4 w-4" />
                </div>
                <span className="font-medium">{post.category || "Categoria non specificata"}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                  <Clock className="h-4 w-4" />
                </div>
                <span>{post.readTime || "Tempo di lettura non disponibile"}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Onda decorativa in basso */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto text-slate-100 fill-current">
            <path d="M0,50 C250,120 350,0 500,40 C650,80 700,50 900,20 C1100,-10 1300,40 1440,90 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 -mt-2 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-slate-200">
              <PortableText 
                value={post.body || []}
                className="prose prose-lg max-w-none prose-p:text-justify prose-headings:text-left prose-img:mx-auto prose-headings:font-light prose-h2:text-2xl lg:prose-h2:text-3xl prose-p:leading-relaxed prose-p:text-slate-700 prose-headings:text-[#1B365C] prose-a:text-[#1B365C] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#1B365C] prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:italic prose-strong:text-[#1B365C] prose-strong:font-semibold font-['Montserrat']"
              />
            </div>
            
            <div className="mt-16">
              {/* Sezione feedback */}
              <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 text-center">
                <div className="max-w-xl mx-auto space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-[#1B365C]">Ti è piaciuto questo articolo?</h3>
                    <p className="text-slate-600">Scopri altri contenuti interessanti nel nostro blog</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center bg-[#1B365C] hover:bg-[#2C3E50] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Esplora altri articoli
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center bg-blu-polvere hover:bg-blu-polvere/90 text-blu-notte px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                      Prenota un Appuntamento
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 