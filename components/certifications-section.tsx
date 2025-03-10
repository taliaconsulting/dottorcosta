import Image from "next/image"

type CertificationsSectionProps = {
  data: {
    title: string
    subtitle?: string
    certifications: {
      name: string
      logo: string
    }[]
    footerText?: string
  }
}

export function CertificationsSection({ data }: CertificationsSectionProps) {
  // Fallback per le certificazioni se non ci sono dati da Sanity
  const fallbackCertifications = [
    {
      name: "American Board of Ophthalmology",
      logo: "/logos/abo-logo.png",
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
  ]

  const certifications = data?.certifications || fallbackCertifications
  
  return (
    <section className="py-16 sm:py-20 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-light text-slate-900">
            {data?.title || "Certificazioni e Affiliazioni"}
          </h2>
          {(data?.subtitle || true) && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {data?.subtitle || "Riconosciuto dalle principali istituzioni mediche e organizzazioni professionali in oftalmologia"}
            </p>
          )}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="col-span-1 flex justify-center items-center"
            >
              <div className="relative h-16 w-full opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
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

        {(data?.footerText || true) && (
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-500">
              {data?.footerText || "Il nostro studio mantiene i più alti standard di eccellenza medica e assistenza al paziente"}
            </p>
          </div>
        )}
      </div>
    </section>
  )
} 