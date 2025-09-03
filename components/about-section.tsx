import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type CredentialIconProps = {
  iconType: string;
};

const CredentialIcon = ({ iconType }: CredentialIconProps) => {
  switch (iconType) {
    case "blue":
      return <div className="h-10 w-10 rounded-full bg-blue-200"></div>;
    case "green":
      return <div className="h-10 w-10 rounded-full bg-verde-acqua"></div>;
    case "amber":
      return <div className="h-10 w-10 rounded-full bg-blu-polvere"></div>;
    default:
      return <div className="h-10 w-10 rounded-full bg-blue-200"></div>;
  }
};

type AboutSectionProps = {
  data: {
    title: string;
    description: string;
    credentials: {
      title: string;
      description: string;
      iconType: string;
    }[];
    learnMoreButtonText?: string;
    consultationButtonText?: string;
  };
};

export function AboutSection({ data }: AboutSectionProps) {
  // Fallback per le credenziali se non ci sono dati da Sanity
  const fallbackCredentials = [
    {
      title: "Board Certified",
      description: "American Board of Ophthalmology",
      iconType: "blue",
    },
    {
      title: "Fellowship Trained",
      description: "Cornea and Refractive Surgery",
      iconType: "green",
    },
    {
      title: "20+ Years Experience",
      description: "Surgical Excellence",
      iconType: "amber",
    },
  ];

  const credentials = data?.credentials || fallbackCredentials;

  return (
    <section id="about" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-blu-notte">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-left mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-bianco-perla mb-6">
                {data?.title || "Chi Sono"}
              </h2>
              <div className="h-1 w-20 bg-rosa-polvere rounded-full mb-8"></div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              {/* Description */}
              <div className="space-y-6">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl text-bianco-perla/90 leading-relaxed font-light">
                    {data?.description ||
                      "Dr. Eduardo Besser is a board-certified ophthalmologist specializing in cornea, cataract, and refractive surgery. With over two decades of experience, he has helped thousands of patients achieve their best possible vision."}
                  </p>
                </div>
              </div>

              {/* Credentials Grid */}
              <div className="grid gap-4">
                {credentials.map((credential, index) => (
                  <Card
                    key={credential.title}
                    className="bg-bianco-perla/5 hover:bg-bianco-perla/10 border-bianco-perla/20 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <CredentialIcon iconType={credential.iconType} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-bianco-perla font-semibold text-lg mb-2">
                            {credential.title}
                          </h3>
                          <p className="text-bianco-perla/80 text-sm leading-relaxed">
                            {credential.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-left">
              <div className="inline-flex items-center justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosa-polvere focus-visible:ring-offset-2 focus-visible:ring-offset-blu-notte disabled:pointer-events-none disabled:opacity-50 h-12 px-8 bg-blu-polvere hover:bg-blu-polvere/90 text-blu-notte shadow-lg hover:shadow-xl transform hover:scale-105"
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
