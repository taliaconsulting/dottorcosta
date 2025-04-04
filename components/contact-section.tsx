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
      return <Phone className="h-6 w-6 text-blu-polvere" />
    case "email":
      return <Mail className="h-6 w-6 text-blu-polvere" />
    case "location":
      return <MapPin className="h-6 w-6 text-blu-polvere" />
    default:
      return <Mail className="h-6 w-6 text-blu-polvere" />
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
      value: "Favara, AG",
      iconType: "location" as const,
      description: "Viale Aldo Moro n° 165",
    },
  ]

  const contactInfo = data?.contactInfo || fallbackContactInfo
  const mapEmbedUrl = data?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.505237206145!2d13.644529875626667!3d37.30685827210697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1310847ca5540ddf%3A0x2f9bf0ac4bcf509a!2sViale%20Aldo%20Moro%2C%20165%2C%2092026%20Favara%20AG!5e0!3m2!1sit!2sit!4v1743751617260!5m2!1sit!2sit";
  
  return (
    <section id="contact" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blu-notte to-blu-notte/80">
        <div className="grid lg:grid-cols-2">
          {/* Informazioni di Contatto */}
          <div className="p-6 lg:p-10 space-y-6">
            <div>
              <h2 className="text-5xl sm:text-6xl font-light text-bianco-perla">{data?.title || "Contattaci"}</h2>
              <p className="mt-4 text-lg text-bianco-perla/80">
                {data?.subtitle || "Siamo qui per rispondere a qualsiasi domanda tu possa avere."}
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="bg-bianco/5 hover:bg-bianco/10 border-bianco/10 transition-all duration-300"
                >
                  <CardContent className="flex items-center p-6">
                    <div className="h-12 w-12 rounded-full bg-bianco-perla/5 flex items-center justify-center mr-6">
                      <ContactIcon iconType={item.iconType} />
                    </div>
                    <div>
                      <h3 className="text-bianco-perla font-medium mb-1">{item.title}</h3>
                      <p className="text-bianco-perla/90 font-medium">{item.value}</p>
                      <p className="text-bianco-perla/60 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
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