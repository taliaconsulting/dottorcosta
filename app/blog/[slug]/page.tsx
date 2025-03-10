import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Lista di gradienti che corrispondono all'estetica del sito
const gradients = [
  "bg-gradient-to-br from-[#1B365C] via-[#2C3E50] to-[#1B365C]",
  "bg-gradient-to-br from-[#2C3E50] via-[#1B365C] to-[#2C3E50]",
  "bg-gradient-to-br from-[#1B365C] via-[#2F4356] to-[#1B365C]",
  "bg-gradient-to-br from-[#2F4356] via-[#1B365C] to-[#2F4356]",
  "bg-gradient-to-br from-[#1B365C] via-[#7EA1C4] to-[#1B365C]",
]

// Questo normalmente verrebbe da un CMS o API
const getBlogPost = async (slug: string) => {
  // Dati di esempio - in un'app reale, questi dati verrebbero recuperati dal CMS/API
  return {
    slug,
    title: "Gli ultimi progressi nella tecnologia LASIK",
    description: "Scopri come la moderna chirurgia LASIK si è evoluta e cosa significano le nuove tecnologie per i pazienti.",
    date: "2024-03-15",
    readTime: "5 min di lettura",
    category: "Tecnologia",
    content: `
      <p>
        La chirurgia oculare LASIK ha fatto molta strada dalla sua approvazione FDA nel 1999. Oggi, la procedura
        è più precisa, sicura e offre risultati migliori rispetto al passato. In questo articolo, esploreremo
        gli ultimi progressi tecnologici che stanno rivoluzionando la chirurgia LASIK.
      </p>
      
      <h2>L'evoluzione della tecnologia LASIK</h2>
      
      <p>
        Le moderne procedure LASIK utilizzano la tecnologia wavefront avanzata per creare una mappa dettagliata delle
        imperfezioni uniche dell'occhio. Questo consente una personalizzazione incredibilmente precisa del trattamento
        in base alle esigenze specifiche del paziente.
      </p>
      
      <h2>Vantaggi della LASIK moderna</h2>
      
      <ul>
        <li>Maggiore accuratezza e precisione</li>
        <li>Tempi di recupero più rapidi</li>
        <li>Migliori risultati per la visione notturna</li>
        <li>Ridotto rischio di complicazioni</li>
      </ul>
      
      <p>
        Con questi progressi, più pazienti che mai sono candidati alla chirurgia LASIK. Tuttavia,
        è importante sottoporsi a una consulenza approfondita per determinare se la LASIK è adatta a te.
      </p>
    `
  }
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const post = await getBlogPost(props.params.slug)
  return {
    title: `${post.title} | Blog Dr. Costa`,
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
                  Torna al Blog
                </Link>
              </Button>

              <div className="flex items-center gap-6 mb-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('it-IT', {
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
            className="prose prose-slate lg:prose-lg prose-p:text-justify prose-headings:text-left prose-img:mx-auto prose-headings:font-light prose-h2:text-2xl lg:prose-h2:text-3xl prose-p:leading-relaxed font-['Montserrat']"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  )
} 