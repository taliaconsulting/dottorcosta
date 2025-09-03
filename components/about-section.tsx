import Link from "next/link";

type AboutSectionProps = {
  data: {
    title: string;
    description: string;
    learnMoreButtonText?: string;
    consultationButtonText?: string;
  };
};

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-6 text-center">
                {data?.title || "Chi Sono"}
              </h2>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center">
              {/* Description */}
              <div className="space-y-6 mb-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-grigio-scuro leading-relaxed font-light">
                    {data?.description ||
                      "Dr. Eduardo Besser is a board-certified ophthalmologist specializing in cornea, cataract, and refractive surgery. With over two decades of experience, he has helped thousands of patients achieve their best possible vision."}
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa-polvere focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 h-12 px-8 bg-blu-polvere hover:bg-blu-polvere/90 text-blu-notte shadow-lg hover:shadow-xl"
                >
                  {data?.consultationButtonText || "Prenota la Tua Visita"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
