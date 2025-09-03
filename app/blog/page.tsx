import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getAllBlogPosts, getBlogPage } from "@/lib/sanity.client";
import { cn } from "@/lib/utils";

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
      {/* Header Section (Homepage style) */}
      <section className="p-2 sm:p-3 lg:p-4">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-6">
              {blogPage?.title || "Blog"}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-grigio-scuro/80 max-w-3xl mx-auto">
              {blogPage?.description || "Articoli e aggiornamenti"}
            </p>
            <div className="mt-6">
              <Link href="/">
                <span className="inline-flex items-center justify-center px-5 py-2 text-blu-notte text-sm font-medium rounded-2xl hover:text-blu-notte/80 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Torna alla Homepage
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid (Homepage card style) */}
      <section className="p-2 sm:p-3 lg:p-4">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts && blogPosts.length > 0 ? (
                blogPosts.map((post, index) => (
                  <Card
                    key={post._id || index}
                    className={cn(
                      "bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border-slate-200 transition-all duration-300 group flex flex-col min-h-[280px]",
                    )}
                  >
                    <CardContent className="p-0 flex-1">
                      <div className="p-6 flex flex-col justify-between h-full gap-4">
                        <div className="space-y-4 flex-1">
                          <div className="flex items-center text-lg text-grigio-scuro/80 space-x-4">
                            <span className="font-medium">{post.category || "Generale"}</span>
                            <span>•</span>
                            <span>{post.readTime || "Lettura breve"}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-medium text-blu-notte group-hover:text-blu-notte/80 transition-colors leading-tight">
                            {post.title || "Titolo non disponibile"}
                          </h3>
                        </div>
                        <div className="pt-2">
                          <Link href={`/blog/${post.slug?.current || "404"}`}>
                            <span className="inline-flex items-center justify-start px-5 py-2 text-black text-sm font-medium rounded-2xl hover:text-black/70 transition-colors">
                              Leggi di Più
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg sm:text-xl text-grigio-scuro/80">
                    Nessun articolo disponibile al momento.
                  </p>
                  <p className="mt-2 text-grigio-scuro/70">Torna presto per leggere i nostri nuovi contenuti.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
