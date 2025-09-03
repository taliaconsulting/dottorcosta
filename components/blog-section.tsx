import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blu-notte to-blu-notte/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-5xl sm:text-6xl font-light text-bianco-perla">
                {data?.title || "Il Nostro Blog"}
              </h2>
              <p className="mt-4 text-lg text-bianco-perla/80">
                {data?.subtitle ||
                  "Prospettive di esperti sulla cura degli occhi e la correzione della vista"}
              </p>
            </div>
            <Link href="/blog">
              <Button
                variant="outline"
                className="mt-6 md:mt-0 bg-bianco-perla/5 hover:bg-bianco-perla/10 text-bianco-perla border-bianco-perla/10"
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
                className="bg-bianco-perla/5 hover:bg-bianco-perla/10 border-bianco-perla/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center text-sm text-bianco-perla/60 space-x-4">
                      <span>{post.category || "Generale"}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-medium text-bianco-perla group-hover:text-bianco-perla/90 transition-colors">
                      {post.title}
                    </h3>

                    <div className="pt-2">
                      <Link href={`/blog/${post.slug.current}`}>
                        <Button
                          variant="link"
                          className="px-0 text-blu-polvere hover:text-blu-polvere/80"
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
  );
}
