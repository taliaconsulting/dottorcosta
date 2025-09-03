import { ArrowLeft, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlogPosts, getBlogPage } from "@/lib/sanity.client";
import { cn } from "@/lib/utils";

// Lista di gradienti che corrispondono all'estetica del sito
const gradients = [
  "bg-gradient-to-br from-[#1B365C] via-[#2C3E50] to-[#1B365C]",
  "bg-gradient-to-br from-[#2C3E50] via-[#1B365C] to-[#2C3E50]",
  "bg-gradient-to-br from-[#1B365C] via-[#2F4356] to-[#1B365C]",
  "bg-gradient-to-br from-[#2F4356] via-[#1B365C] to-[#2F4356]",
  "bg-gradient-to-br from-[#1B365C] via-[#7EA1C4] to-[#1B365C]",
];

// Dati fallback per la pagina del blog
const fallbackBlogPage = {
  title: "Blog",
  description: "Resta informato sulle ultime novità nel campo della medicina",
  headerImage: "",
  postsPerPage: 9,
  categoriesTitle: "Categorie",
  recentPostsTitle: "Articoli Recenti",
};

export const metadata = {
  title: "Blog | Dr. Costa",
  description:
    "Resta informato sulle ultime novità nel campo della ginecologia, ostetricia e medicina estetica.",
};

type BlogSummary = {
  _id?: string;
  slug?: { current?: string };
  category?: string;
  readTime?: string;
  title?: string;
};

export default async function BlogPage() {
  // Initialize to avoid implicit any
  let blogPage = fallbackBlogPage;
  let blogPosts: BlogSummary[] = [];

  try {
    blogPage = (await getBlogPage()) || fallbackBlogPage;
    blogPosts = (await getAllBlogPosts()) || [];
  } catch (error) {
    console.error("Errore nel caricamento dei dati del blog:", error);
    blogPage = fallbackBlogPage;
    blogPosts = [];
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#1B365C] via-[#2C3E50] to-[#1B365C] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.1),transparent_60%)]"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              {blogPage?.title || "Blog"}
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {blogPage?.description || "Articoli e aggiornamenti"}
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="group inline-flex items-center text-white/80 hover:text-white py-2 transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <ArrowLeft className="h-4 w-4" />
                </span>
                Torna alla Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts && blogPosts.length > 0 ? (
              blogPosts.map((post, index) => {
                // Get a different gradient for each post card
                const cardGradient = gradients[index % gradients.length];

                // Generiamo l'estratto automaticamente (nelle altre parti sarà gestito lato backend)
                const excerpt = "Leggi l'articolo completo...";

                return (
                  <Link
                    key={post._id || index}
                    href={`/blog/${post.slug?.current || "404"}`}
                    className="group"
                  >
                    <Card
                      className={cn(
                        "h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]",
                        cardGradient,
                        "border-0 rounded-xl",
                      )}
                    >
                      <CardHeader className="relative pb-3">
                        <div className="relative">
                          <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                            <Tag className="h-3 w-3" />
                            <span>{post.category || "Generale"}</span>
                            <span className="text-white/60">•</span>
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime || "Lettura breve"}</span>
                          </div>
                          <CardTitle className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                            {post.title || "Titolo non disponibile"}
                          </CardTitle>
                          <CardDescription className="line-clamp-2 text-white/80">
                            {excerpt}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="relative pt-2">
                        <div className="relative flex items-center gap-2 text-sm text-white/70">
                          <Button variant="link" className="p-0 h-8 text-white/80 hover:text-white">
                            Leggi l'articolo →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Nessun articolo disponibile al momento.
                </p>
                <p className="mt-2">Torna presto per leggere i nostri nuovi contenuti.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
