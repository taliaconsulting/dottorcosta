import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PortableText } from "@/components/ui/portable-text";
import { getBlogPostBySlug } from "@/lib/sanity.client";

// Lista di gradienti (non utilizzati al momento)

// Funzione per estrarre il testo dalle prime righe del contenuto
type Span = { _type: "span"; text: string };
type Block = { _type: string; children?: Span[] };

function extractExcerpt(body: Block[]): string {
  if (!body || !body.length) return "Leggi l'articolo completo";

  // Cerca i blocchi di testo
  for (const block of body) {
    if (block._type === "block" && block.children) {
      const text = block.children
        .filter((child) => child._type === "span")
        .map((span) => span.text)
        .join(" ");

      if (text) {
        // Limita a circa 160 caratteri e aggiungi ... se necessario
        return text.length > 160 ? `${text.substring(0, 157)}...` : text;
      }
    }
  }

  return "Leggi l'articolo completo";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Post non trovato | Blog Dr. Costa",
      description: "Il post richiesto non è stato trovato",
    };
  }

  const excerpt = extractExcerpt(post.body || []);

  return {
    title: `${post.title} | Blog Dr. Costa`,
    description: excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  // Redirect alla pagina del blog se il post non esiste
  if (!post) {
    redirect("/blog");
  }

  // Genera l'estratto dal contenuto (se necessario per meta/preview)
  // const excerpt = extractExcerpt(post.body || []);

  return (
    <article>
      {/* Header Section (Homepage style) */}
      <section className="p-2 sm:p-3 lg:p-4">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center text-blu-notte/80 hover:text-blu-notte mb-6 transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-slate-100">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Torna al Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-4">
              {post.title}
            </h1>
            <p className="text-grigio-scuro/80 text-lg sm:text-xl leading-relaxed">
              {post.excerpt || ""}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="p-2 sm:p-3 lg:p-4">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <PortableText
              value={post.body || []}
              className="prose prose-lg max-w-none prose-p:text-justify prose-headings:text-left prose-img:mx-auto prose-headings:font-light prose-h2:text-2xl lg:prose-h2:text-3xl prose-p:leading-relaxed prose-p:text-slate-700 prose-headings:text-blu-notte prose-a:text-blu-notte prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-blu-notte prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:italic prose-strong:text-blu-notte prose-strong:font-semibold font-['Montserrat']"
            />

            {/* Feedback Section */}
            <div className="mt-16 text-center">
              <div className="max-w-xl mx-auto space-y-4">
                <h3 className="text-2xl font-light text-blu-notte">
                  Ti è piaciuto questo articolo?
                </h3>
                <p className="text-grigio-scuro/80">
                  Scopri altri contenuti interessanti nel nostro blog
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center bg-blu-notte hover:bg-blu-notte/90 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-sm w-full sm:w-auto"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Esplora altri articoli
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center bg-blu-polvere hover:bg-blu-polvere/90 text-blu-notte px-6 py-3 rounded-full transition-all duration-300 shadow-sm w-full sm:w-auto"
                  >
                    Prenota un Appuntamento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
