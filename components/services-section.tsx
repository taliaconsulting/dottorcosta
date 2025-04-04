'use client'
import { useState, useMemo, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Componente per il logo unificato in rosa pastello
const ServiceLogo = () => {
  return (
    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-pink-200 p-0.5 shadow-inner">
      <div className="h-full w-full rounded-full bg-white flex items-center justify-center shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-10 w-10">
          <circle cx="12" cy="12" r="10" stroke="#f9a8d4" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="5" fill="#f9a8d4" fillOpacity="0.3" />
          <path d="M12 7v10M7 12h10" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="#ec4899" />
          <path d="M15 9l-6 6M9 9l6 6" stroke="#be185d" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.6" />
        </svg>
      </div>
    </div>
  )
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
    services: {
      title: string
      description?: string
      iconType?: string // Ora opzionale perché non lo utilizzeremo più
    }[]
  }
}

export function ServicesSection({ data }: ServicesSectionProps) {
  // Fallback per i servizi se non ci sono dati da Sanity
  const fallbackServices = [
    { 
      title: "Chirurgia Laser",
      description: serviceDescriptions["Chirurgia Laser"].description 
    },
    { 
      title: "Chirurgia della Cataratta",
      description: serviceDescriptions["Chirurgia della Cataratta"].description 
    },
    { 
      title: "Cura Medica degli Occhi",
      description: serviceDescriptions["Cura Medica degli Occhi"].description 
    },
    { 
      title: "Lesioni Palpebrali",
      description: serviceDescriptions["Lesioni Palpebrali"].description 
    },
    { 
      title: "Glaucoma",
      description: serviceDescriptions["Glaucoma"].description 
    },
    { 
      title: "Test Allergie Oculari",
      description: serviceDescriptions["Test Allergie Oculari"].description 
    },
  ]

  const services = data?.services || fallbackServices
  
  // Riferimento al contenitore del carosello
  const carouselRef = useRef<HTMLDivElement>(null)
  
  // Stato per tenere traccia dell'indice attivo
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Numero di card visualizzabili contemporaneamente in base alle dimensioni dello schermo
  const [visibleCards, setVisibleCards] = useState(3)
  
  // Calcola il numero di pagine in base ai servizi e alle card visibili
  const totalPages = Math.ceil(services.length / visibleCards)
  
  // Impostazione del numero di card visibili in base alla dimensione dello schermo
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }
    
    // Imposta il valore iniziale
    handleResize()
    
    // Ascolta i cambiamenti di dimensione dello schermo
    window.addEventListener('resize', handleResize)
    
    // Pulisci l'event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Funzione per navigare al set successivo di servizi
  const goToNext = () => {
    if (activeIndex < totalPages - 1) {
      setActiveIndex(prev => prev + 1)
    } else {
      setActiveIndex(0) // Torna all'inizio
    }
  }
  
  // Funzione per navigare al set precedente di servizi
  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1)
    } else {
      setActiveIndex(totalPages - 1) // Vai alla fine
    }
  }
  
  // Funzione per generare lo slug del servizio
  const generateServiceSlug = (title: string) => {
    return encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))
  }
  
  // Effetto per controllare lo scorrimento quando cambia l'indice attivo
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = (carouselRef.current.scrollWidth / totalPages) * activeIndex
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }, [activeIndex, totalPages])
  
  return (
    <section id="services" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-blue-100/20 py-24 sm:py-32">
        {/* Elementi decorativi di sfondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-verde-acqua/5 blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-blu-polvere/5 blur-3xl"></div>
          <div className="absolute -bottom-10 right-1/4 w-64 h-64 rounded-full bg-indigo-300/5 blur-3xl"></div>
        </div>
        
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-blu-notte mb-6">
              {data?.title || "I Nostri Servizi"}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-verde-acqua to-blu-polvere rounded-full mx-auto mb-8"></div>
            <p className="text-grigio-scuro/80 max-w-3xl mx-auto text-lg sm:text-xl mb-12 leading-relaxed">
              Offriamo servizi specializzati con approccio professionale e tecnologie all'avanguardia per garantire il massimo della qualità.
            </p>
          </div>
          
          {/* Carosello servizi */}
          <div className="relative overflow-hidden pb-4">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 p-3 md:p-4 snap-start"
                >
                  <Link 
                    href={`/servizi/${generateServiceSlug(service.title)}`}
                    className="focus:outline-none block h-full"
                  >
                    <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white border border-gray-100 group relative">
                      {/* Sfondo con design più moderno */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-pink-100 via-white to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Elementi decorativi */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-100 to-transparent rounded-bl-[100px] group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-transparent rounded-tr-[80px] group-hover:scale-110 transition-transform duration-500"></div>
                      
                      <div className="relative p-8 sm:p-8 flex flex-col h-full z-10">
                        {/* Header con icona e titolo */}
                        <div className="flex flex-col items-center text-center mb-6">
                          <div className="mb-6 transform transition-transform group-hover:scale-110 duration-500">
                            <div className="p-4 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-500">
                              <ServiceLogo />
                            </div>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-medium text-blu-notte mb-4 group-hover:text-pink-500 transition-colors duration-300">{service.title}</h3>
                          <div className="h-0.5 w-12 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full mb-4 transform origin-center scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        </div>
                        
                        {/* Descrizione breve */}
                        <p className="text-grigio-scuro/70 text-xs mb-8 line-clamp-2 text-center">
                          {service.description ? service.description.split('.')[0] + '.' : 'Dettagli del servizio non disponibili.'}
                        </p>
                        
                        {/* Pulsante azione */}
                        <div className="mt-auto text-center">
                          <span className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-pink-300 to-pink-500 text-white rounded-full text-sm font-medium transform transition-all duration-300 shadow-md">
                            Scopri di più
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controlli di navigazione */}
          <div className="flex flex-col items-center justify-center mt-10 space-y-6">
            {/* Indicatori */}
            <div className="flex items-center justify-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-md">
              <button 
                onClick={goToPrevious}
                className="p-2 rounded-full text-pink-400 hover:text-pink-600 transition-colors"
                aria-label="Servizi precedenti"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex items-center space-x-2 mx-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      activeIndex === index 
                        ? 'scale-110' 
                        : 'opacity-70 scale-100 hover:opacity-100'
                    }`}
                    aria-label={`Vai a pagina ${index + 1}`}
                  >
                    <span className={`h-2 w-2 rounded-full mb-1 ${
                      activeIndex === index 
                        ? 'bg-pink-500' 
                        : 'bg-pink-200 hover:bg-pink-300'
                    }`}></span>
                    <span className="text-xs text-pink-500 font-medium">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
              
              <button 
                onClick={goToNext}
                className="p-2 rounded-full text-pink-400 hover:text-pink-600 transition-colors"
                aria-label="Servizi successivi"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}