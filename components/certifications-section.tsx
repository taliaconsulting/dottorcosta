"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type CertificationsSectionProps = {
  data: {
    title: string;
    subtitle?: string;
    certifications: {
      name: string;
      logo: string;
    }[];
    footerText?: string;
  };
};

export function CertificationsSection({ data }: CertificationsSectionProps) {
  // Stato per gestire l'animazione dopo il montaggio del componente
  const [isLoaded, setIsLoaded] = useState(false);

  // Effetto per attivare l'animazione dopo il montaggio
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Fallback per le certificazioni se non ci sono dati da Sanity
  const fallbackCertifications = [
    {
      name: "SIEOG",
      logo: "https://cdn.sanity.io/images/z1oyufbt/production/f1853a4eee8d29e900a034a1747e2d4b9a5369ce-225x225.png",
    },
    {
      name: "American Academy of Ophthalmology",
      logo: "/logos/aao-logo.png",
    },
    {
      name: "American Society of Cataract and Refractive Surgery",
      logo: "/logos/ascrs-logo.png",
    },
    {
      name: "California Medical Board",
      logo: "/logos/cmb-logo.png",
    },
    {
      name: "SIEOG",
      logo: "https://cdn.sanity.io/images/z1oyufbt/production/f1853a4eee8d29e900a034a1747e2d4b9a5369ce-225x225.png",
    },
    {
      name: "American Academy of Ophthalmology",
      logo: "/logos/aao-logo.png",
    },
  ];

  // Duplica le certificazioni per creare un effetto di scorrimento infinito
  const certifications = data?.certifications || fallbackCertifications;
  // Creiamo due set di loghi per l'animazione continua
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section id="certifications" className="p-2 sm:p-3 lg:p-4 overflow-hidden">
      <div className="max-w-full mx-auto py-10 sm:py-12 px-4 sm:px-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blu-notte to-blu-notte/90">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-bianco-perla mb-6">
            {data?.title || "Certificazioni e Affiliazioni"}
          </h2>
          {(data?.subtitle || true) && (
            <p className="text-lg text-bianco-perla/80 max-w-2xl mx-auto">
              {data?.subtitle ||
                "Riconosciuto dalle principali istituzioni mediche e organizzazioni professionali in oftalmologia"}
            </p>
          )}
        </div>

        {/* Contenitore principale con overflow nascosto */}
        <div className="mt-16 relative overflow-hidden w-full">
          {/* Contenitore animato per lo scorrimento continuo */}
          <div
            className={`flex whitespace-nowrap ${
              isLoaded ? "animate-marquee" : ""
            }`}
            style={{
              animationDuration: "30s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {/* Primo set di loghi */}
            {duplicatedCertifications.map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="inline-flex justify-center items-center mx-8"
              >
                <div className="relative h-24 w-32 sm:h-28 sm:w-40 opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
