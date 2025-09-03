import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ContactInfo = {
  title: string;
  value: string;
  iconType: "phone" | "email" | "location";
  description: string;
};

type ContactSectionProps = {
  data: {
    title: string;
    subtitle?: string;
    contactInfo?: ContactInfo[];
    address?: string;
    phoneNumber?: string;
    email?: string;
    locationDescription?: string;
    mapEmbedUrl?: string;
  };
};

// Componente per renderizzare le icone di contatto in base al tipo
const ContactIcon = ({ iconType }: { iconType: string }) => {
  switch (iconType) {
    case "phone":
      return <Phone className="h-6 w-6 text-blu-polvere" />;
    case "email":
      return <Mail className="h-6 w-6 text-blu-polvere" />;
    case "location":
      return <MapPin className="h-6 w-6 text-blu-polvere" />;
    default:
      return <Mail className="h-6 w-6 text-blu-polvere" />;
  }
};

export function ContactSection({ data }: ContactSectionProps) {
  // Costruisco l'array di informazioni di contatto dai dati Sanity, se disponibili
  const contactInfoFromData = [];

  if (data?.phoneNumber) {
    contactInfoFromData.push({
      title: "Telefono",
      value: data.phoneNumber,
      iconType: "phone" as const,
      description: "Lun-Ven 9:00 - 17:00",
    });
  }

  if (data?.email) {
    contactInfoFromData.push({
      title: "Email",
      value: data.email,
      iconType: "email" as const,
      description: "Risponderemo entro 24 ore",
    });
  }

  if (data?.address) {
    contactInfoFromData.push({
      title: "Sede",
      value: data.address.split(",")[0] || data.address, // Prima parte dell'indirizzo
      iconType: "location" as const,
      description:
        data.address.split(",").slice(1).join(",").trim() ||
        "Indirizzo completo", // Resto dell'indirizzo
    });
  }

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
  ];

  // Usa contactInfo da data, poi contactInfoFromData costruito dai campi singoli, infine fallback
  const contactInfo =
    data?.contactInfo ||
    (contactInfoFromData.length > 0
      ? contactInfoFromData
      : fallbackContactInfo);
  const mapEmbedUrl =
    data?.mapEmbedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.505237206145!2d13.644529875626667!3d37.30685827210697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1310847ca5540ddf%3A0x2f9bf0ac4bcf509a!2sViale%20Aldo%20Moro%2C%20165%2C%2092026%20Favara%20AG!5e0!3m2!1sit!2sit!4v1743751617260!5m2!1sit!2sit";

  return (
    <section id="contact" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
        <div className="grid lg:grid-cols-2">
          {/* Informazioni di Contatto */}
          <div className="p-6 lg:p-10 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-6">
                {data?.title || "Contattaci"}
              </h2>
              <p className="text-lg text-grigio-scuro/80">
                {data?.subtitle ||
                  "Siamo qui per rispondere a qualsiasi domanda tu possa avere."}
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border-slate-200 transition-all duration-300"
                >
                  <CardContent className="flex items-center p-6">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mr-6">
                      <ContactIcon iconType={item.iconType} />
                    </div>
                    <div>
                      <h3 className="text-blu-notte font-medium mb-1">
                        {item.title}
                      </h3>
                      <p className="text-grigio-scuro/90 font-medium">
                        {item.value}
                      </p>
                      <p className="text-grigio-scuro/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mappa */}
          <div className="h-full min-h-[800px] lg:min-h-full relative">
            <iframe
              src={mapEmbedUrl}
              title="Mappa della sede del Dott. Costa"
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
  );
}
