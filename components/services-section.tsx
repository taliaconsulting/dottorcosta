'use client'
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Check } from "lucide-react"
import Link from "next/link"

type ServiceIconProps = {
  iconType: string
}

const ServiceIcon = ({ iconType }: ServiceIconProps) => {
  switch (iconType) {
    case 'laser':
      return (
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-verde-acqua/10 to-verde-acqua/20 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#A7E8BD" strokeWidth="2" className="h-6 w-6">
            <path d="M12 5v14M5 12h14M8.5 8.5l7 7M15.5 8.5l-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )
    case 'cataract':
      return (
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blu-polvere/10 to-blu-polvere/20 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#B0C4DE" strokeWidth="2" className="h-6 w-6">
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      )
    case 'eyecare':
      return (
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blu-polvere/10 to-verde-acqua/20 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#B0C4DE" strokeWidth="2" className="h-6 w-6">
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      )
    case 'eyelid':
      return (
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blu-polvere/10 to-verde-acqua/20 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#B0C4DE" strokeWidth="2" className="h-6 w-6">
            <path d="M2 12c.5-4.5 4.5-8 10-8s9.5 3.5 10 8" strokeLinecap="round" />
            <path d="M12 16c1.5 0 3-1.5 3-3" strokeLinecap="round" />
          </svg>
        </div>
      )
    case 'glaucoma':
      return (
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blu-polvere/10 to-blu-polvere/20 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#B0C4DE" strokeWidth="2" className="h-6 w-6">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 12v-4M12 12h4" strokeLinecap="round" />
          </svg>
        </div>
      )
    case 'allergytest':
      return (
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-verde-acqua/10 to-blu-polvere/20 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#A7E8BD" strokeWidth="2" className="h-6 w-6">
            <path d="M8 12h8M12 8v8M20 20L4 4M20 4l-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )
    default:
      return (
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blu-polvere/10 to-blu-polvere/20 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#B0C4DE" strokeWidth="2" className="h-6 w-6">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v8M8 12h8" strokeLinecap="round" />
          </svg>
        </div>
      )
  }
}

// Definizione del tipo per i dettagli del servizio
type ServiceDetail = {
  description: string;
};

// Definizione dei dati di fallback per le descrizioni dei servizi
const serviceDescriptions: Record<string, ServiceDetail> = {
  "Ginecologia": {
    description: "Visite ginecologiche complete, diagnosi e trattamento delle patologie ginecologiche, consulenza sulla contraccezione e sulla salute della donna in tutte le fasi della vita. Controlli preventivi regolari e pap test."
  },
  "Ostetricia": {
    description: "Assistenza durante la gravidanza, monitoraggio dello sviluppo del bambino, consulenza prenatale e postnatale. Ecografie di monitoraggio e visite programmate per accompagnare le future mamme in ogni fase della gravidanza."
  },
  "Medicina Estetica": {
    description: "Trattamenti estetici minimamente invasivi per migliorare l'aspetto della pelle e contrastare i segni dell'invecchiamento. Consulenza personalizzata sulle opzioni di trattamento più adatte alle esigenze specifiche."
  },
  "Chirurgia Laser": {
    description: "Interventi di chirurgia refrattiva con tecnologia laser all'avanguardia per correggere difetti visivi come miopia, ipermetropia e astigmatismo. Consulenza preliminare e follow-up post-operatorio."
  },
  "Chirurgia della Cataratta": {
    description: "Diagnosi e trattamento della cataratta con sostituzione del cristallino naturale con lenti artificiali di ultima generazione. Visita preoperatoria e follow-up post-intervento."
  },
  "Cura Medica degli Occhi": {
    description: "Assistenza completa per la salute degli occhi, compresi esami della vista, diagnosi e trattamento di patologie oculari, prescrizione di occhiali e lenti a contatto."
  },
  "Lesioni Palpebrali": {
    description: "Valutazione e trattamento di lesioni palpebrali, inclusi chalazion, cisti, papillomi e altre condizioni che interessano le palpebre. Interventi mini-invasivi e consulenza specialistica."
  },
  "Glaucoma": {
    description: "Diagnosi precoce, monitoraggio e gestione del glaucoma. Misurazione della pressione intraoculare, valutazione del nervo ottico e del campo visivo, terapie farmacologiche e follow-up personalizzati."
  },
  "Test Allergie Oculari": {
    description: "Test specifici per identificare allergie oculari, diagnosi differenziale da altre patologie della superficie oculare e trattamenti mirati per alleviare i sintomi e prevenire le recidive."
  }
}

type ServicesSectionProps = {
  data: {
    title: string
    buttonText?: string
    services: {
      title: string
      description?: string
      iconType: string
    }[]
  }
}

export function ServicesSection({ data }: ServicesSectionProps) {
  // Fallback per i servizi se non ci sono dati da Sanity
  const fallbackServices = [
    { 
      title: "Chirurgia Laser", 
      iconType: "laser",
      description: serviceDescriptions["Chirurgia Laser"].description 
    },
    { 
      title: "Chirurgia della Cataratta", 
      iconType: "cataract",
      description: serviceDescriptions["Chirurgia della Cataratta"].description 
    },
    { 
      title: "Cura Medica degli Occhi", 
      iconType: "eyecare",
      description: serviceDescriptions["Cura Medica degli Occhi"].description 
    },
    { 
      title: "Lesioni Palpebrali", 
      iconType: "eyelid",
      description: serviceDescriptions["Lesioni Palpebrali"].description 
    },
    { 
      title: "Glaucoma", 
      iconType: "glaucoma",
      description: serviceDescriptions["Glaucoma"].description 
    },
    { 
      title: "Test Allergie Oculari", 
      iconType: "allergytest",
      description: serviceDescriptions["Test Allergie Oculari"].description 
    },
  ]

  const services = data?.services || fallbackServices
  
  // Non abbiamo più bisogno delle variabili e funzioni per il popup
  
  // Stato per il servizio attivo nella visualizzazione a griglia
  const [activeService, setActiveService] = useState<string | null>(null)
  
  // Funzione per generare lo slug del servizio
  const generateServiceSlug = (title: string) => {
    return encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))
  }
  
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Sfondo decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] rounded-full bg-gradient-to-br from-verde-acqua via-blu-polvere to-blu-notte blur-3xl" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Intestazione sezione */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-blu-notte inline-block relative">
            {data?.title || "I Nostri Servizi"}
            <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-1 bg-gradient-to-r from-verde-acqua to-blu-polvere rounded-full"></span>
          </h2>
          <p className="text-grigio-scuro mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Servizi specialistici per la cura e il benessere dei tuoi occhi. Seleziona un servizio per scoprire maggiori dettagli.
          </p>
        </div>
        
        {/* Griglia servizi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12 mt-8 sm:mt-12">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={`/servizi/${generateServiceSlug(service.title)}`}
              className="block relative group"
            >
              <div 
                className={`h-full rounded-xl p-1 transition-all duration-500 ${activeService === service.title ? 'bg-gradient-to-br from-verde-acqua to-blu-polvere shadow-lg' : 'bg-white hover:bg-gradient-to-br hover:from-verde-acqua/20 hover:to-blu-polvere/20'}`}
                onMouseEnter={() => setActiveService(service.title)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="bg-white rounded-lg h-full p-4 sm:p-6 md:p-8 flex flex-col relative overflow-hidden">
                  {/* Indicatore di stato attivo - nascosto su mobile per risparmiare spazio */}
                  <div className={`absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 -mt-6 -mr-6 sm:-mt-8 sm:-mr-8 bg-gradient-to-br from-verde-acqua to-blu-polvere rotate-45 transition-opacity duration-300 ${activeService === service.title ? 'opacity-100' : 'opacity-0'} hidden sm:block`}>
                    <Check className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-white h-3 w-3 sm:h-4 sm:w-4 rotate-[-45deg]" />
                  </div>
                  
                  {/* Icona del servizio - layout più compatto su mobile */}
                  <div className="mb-3 sm:mb-4 md:mb-6 flex flex-col sm:flex-row items-start sm:items-center">
                    <div className={`p-2 sm:p-3 rounded-xl transition-all duration-300 mb-2 sm:mb-0 ${activeService === service.title ? 'bg-gradient-to-br from-verde-acqua/20 to-blu-polvere/20' : 'bg-grigio-chiaro/20'}`}>
                      <ServiceIcon iconType={service.iconType} />
                    </div>
                    <h3 className="text-lg sm:text-xl text-blu-notte sm:ml-4 font-medium">{service.title}</h3>
                  </div>
                  
                  {/* Descrizione - più compatta su mobile */}
                  <p className="text-sm sm:text-base text-grigio-scuro mb-4 sm:mb-6 flex-grow line-clamp-3">
                    {service.description?.substring(0, 120)}...
                  </p>
                  
                  {/* Pulsante azione - dimensioni ottimizzate per tocco */}
                  <div className="mt-auto">
                    <span className="group/btn inline-flex items-center pl-0 hover:bg-transparent text-grigio-scuro group-hover:text-blu-polvere text-sm sm:text-base">
                      <span className="mr-2 relative">
                        <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blu-polvere transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        Scopri di più
                      </span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA - dimensioni ottimizzate per mobile */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <Link href="#contact">
            <Button 
              className="bg-gradient-to-r from-verde-acqua to-blu-polvere hover:from-verde-acqua/90 hover:to-blu-polvere/90 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg shadow-md sm:shadow-lg hover:shadow-xl transition-all w-full sm:w-auto max-w-xs mx-auto"
            >
              {data?.buttonText || "Prenota una Visita"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}