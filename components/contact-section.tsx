import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

type ContactInfo = {
  title: string
  value: string
  iconType: "phone" | "email" | "location"
  description: string
}

type ContactSectionProps = {
  data: {
    title: string
    subtitle?: string
    contactInfo: ContactInfo[]
    locationDescription?: string
    mapEmbedUrl?: string
  }
}

// Componente per renderizzare le icone di contatto in base al tipo
const ContactIcon = ({ iconType }: { iconType: string }) => {
  switch (iconType) {
    case "phone":
      return <Phone className="h-6 w-6 text-blue-400" />
    case "email":
      return <Mail className="h-6 w-6 text-blue-400" />
    case "location":
      return <MapPin className="h-6 w-6 text-blue-400" />
    default:
      return <Mail className="h-6 w-6 text-blue-400" />
  }
}

export function ContactSection({ data }: ContactSectionProps) {
  // Fallback per le informazioni di contatto se non ci sono dati da Sanity
  const fallbackContactInfo = [
    {
      title: "Telefono",
      value: "310-838-0202",
      iconType: "phone" as const,
      description: "Lun-Ven 9:00 - 17:00",
    },
    {
      title: "Email",
      value: "info@bessereye.com",
      iconType: "email" as const,
      description: "Risponderemo entro 24 ore",
    },
    {
      title: "Sede",
      value: "Culver City, CA",
      iconType: "location" as const,
      description: "3831 Hughes Ave, Suite 607",
    },
  ]

  const contactInfo = data?.contactInfo || fallbackContactInfo
  const mapEmbedUrl = data?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6750902684574!2d-118.3859!3d34.0275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9c5c0f0f0f9%3A0x9b0f0f0f0f0f0f0f!2s3831%20Hughes%20Ave%2C%20Culver%20City%2C%20CA%2090232!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  
  return (
    <section className="p-3 sm:p-4 lg:p-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="grid lg:grid-cols-2">
          {/* Informazioni di Contatto */}
          <div className="p-8 lg:p-12 space-y-8">
            <div>
              <h2 className="text-4xl font-light text-white">{data?.title || "Contattaci"}</h2>
              <p className="mt-4 text-lg text-white/80">
                {data?.subtitle || "Siamo qui per rispondere a qualsiasi domanda tu possa avere."}
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="bg-white/5 hover:bg-white/10 border-white/10 transition-all duration-300"
                >
                  <CardContent className="flex items-center p-6">
                    <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mr-6">
                      <ContactIcon iconType={item.iconType} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <p className="text-white/90 font-medium">{item.value}</p>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-white/80">
                {data?.locationDescription || "Il nostro studio è situato nel cuore di Culver City, facilmente accessibile per i pazienti di tutta la contea di Los Angeles."}
              </p>
            </div>
          </div>

          {/* Mappa */}
          <div className="h-full min-h-[600px] lg:min-h-full relative">
            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
} 