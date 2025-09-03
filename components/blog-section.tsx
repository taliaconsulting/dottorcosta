import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: string;
  category: string;
  publishedAt: string;
  readTime: string;
};

type BlogSectionProps = {
  data: {
    title: string;
    subtitle?: string;
    viewAllButtonText?: string;
    featuredPostsCount?: number;
  };
  posts: BlogPost[];
};

export function BlogSection({ data, posts }: BlogSectionProps) {
  // Fallback per i post del blog se non ci sono dati da Sanity
  const fallbackPosts = [
    {
      _id: "1",
      title: "Capire la gravidanza: Una guida completa",
      slug: { current: "capire-gravidanza" },
      category: "Ostetricia",
      readTime: "5 min di lettura",
    },
    {
      _id: "2",
      title: "Novità nel trattamento dell'endometriosi",
      slug: { current: "trattamento-endometriosi" },
      category: "Endometriosi",
      readTime: "4 min di lettura",
    },
    {
      _id: "3",
      title: "Problemi comuni durante la menopausa",
      slug: { current: "problemi-menopausa" },
      category: "Menopausa",
      readTime: "6 min di lettura",
    },
  ];

  const blogPosts = posts?.length ? posts : fallbackPosts;

  return (
    <section id="blog" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-6">
                {data?.title || "Il Nostro Blog"}
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-grigio-scuro/80">
                {data?.subtitle ||
                  "Prospettive di esperti sulla cura degli occhi e la correzione della vista"}
              </p>
            </div>
            <Link href="/blog">
              <span className="mt-6 md:mt-0 inline-flex items-center justify-center px-6 py-2 text-blu-notte text-sm font-medium rounded-2xl hover:text-blu-notte/80 transition-colors">
                {data?.viewAllButtonText || "Vedi Tutti i Post"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post._id}
                className="bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border-slate-200 transition-all duration-300 group flex flex-col min-h-[280px]"
              >
                <CardContent className="p-0 flex-1">
                  <div className="p-6 flex flex-col justify-between h-full gap-4">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center text-lg text-grigio-scuro/80 space-x-4">
                        <span className="font-medium">
                          {post.category || "Generale"}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-medium text-blu-notte group-hover:text-blu-notte/80 transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </div>

                    <div className="pt-2">
                      <Link href={`/blog/${post.slug.current}`}>
                        <span className="inline-flex items-center justify-start px-5 py-2 text-black text-sm font-medium rounded-2xl hover:text-black/70 transition-colors">
                          Leggi di Più
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
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
  );
}
