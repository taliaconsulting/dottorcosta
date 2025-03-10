import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type CredentialIconProps = {
  iconType: string
}

const CredentialIcon = ({ iconType }: CredentialIconProps) => {
  switch (iconType) {
    case 'blue':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300" />
        </div>
      )
    case 'green':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-200/20 to-emerald-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-200 to-emerald-300" />
        </div>
      )
    case 'amber':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-200/20 to-amber-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-amber-200 to-amber-300" />
        </div>
      )
    default:
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300" />
        </div>
      )
  }
}

type AboutSectionProps = {
  data: {
    title: string
    description: string
    doctorImage?: string
    credentials: {
      title: string
      description: string
      iconType: string
    }[]
    learnMoreButtonText?: string
    consultationButtonText?: string
  }
}

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
  ]

  const credentials = data?.credentials || fallbackCredentials
  
  return (
    <section id="about" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">        
        <div className="relative z-10 w-full px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-10">
              <h2 className="text-5xl sm:text-6xl font-light text-white text-center lg:text-left mb-6">{data?.title || "Chi Sono"}</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {data?.description || "Dr. Eduardo Besser is a board-certified ophthalmologist specializing in cornea, cataract, and refractive surgery. With over two decades of experience, he has helped thousands of patients achieve their best possible vision through advanced surgical techniques and personalized care."}
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                {credentials.map((credential) => (
                  <Card 
                    key={credential.title}
                    className="bg-white/5 hover:bg-white/10 border-white/10 transition-all duration-300"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-3">
                        <CredentialIcon iconType={credential.iconType} />
                      </div>
                      <h3 className="text-white font-medium mb-1">{credential.title}</h3>
                      <p className="text-white/70 text-sm">{credential.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 text-white border-white/10 w-full sm:w-auto"
                >
                  {data?.learnMoreButtonText || "Scopri di più"}
                </Button>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                >
                  {data?.consultationButtonText || "Prenota Visita"}
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                alt="Dr. Eduardo Besser"
                className="object-cover object-center"
                fill
                src={data?.doctorImage || "/doctor-portrait.jpg"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 