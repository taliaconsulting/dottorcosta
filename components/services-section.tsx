'use client'
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Calendar, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

type ServiceIconProps = {
  iconType: string
}

const ServiceIcon = ({ iconType }: ServiceIconProps) => {
  switch (iconType) {
    case 'laser':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-200/20 to-orange-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-orange-200 to-orange-300" />
        </div>
      )
    case 'cataract':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-200/20 to-cyan-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-cyan-200 to-cyan-300 border-4 border-cyan-200/20" />
        </div>
      )
    case 'eyecare':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-200/20 to-purple-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-purple-200 to-purple-300 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-5 w-px bg-purple-100 rotate-45" />
              <div className="h-px w-5 bg-purple-100 rotate-45" />
            </div>
          </div>
        </div>
      )
    case 'eyelid':
      return (
        <div className="h-10 w-10 flex items-center">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-200 to-purple-300" />
            <div className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-200 to-purple-300" />
            <div className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-200 to-purple-300" />
          </div>
        </div>
      )
    case 'glaucoma':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300 border-4 border-blue-200/20" />
        </div>
      )
    case 'allergytest':
      return (
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-200/20 to-orange-300/20 p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-amber-200 to-orange-300">
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-amber-100/20" />
            </div>
          </div>
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
  
  // Stato per il popup
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showDialog, setShowDialog] = useState(false)
  
  // Funzione per aprire il popup con il servizio selezionato
  const openServiceDialog = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setShowDialog(true)
  }
  
  // Ottieni i dettagli del servizio selezionato
  const serviceDetails = selectedService ? serviceDescriptions[selectedService] || {
    description: "Dettagli del servizio non disponibili. Contattaci per maggiori informazioni."
  } : null
  
  return (
    <section id="services" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-light text-white mb-12 text-center">{data?.title || "I Nostri Servizi"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className="bg-white/5 hover:bg-white/10 transition-all duration-300 border-white/10 hover:scale-[1.02] cursor-pointer group"
                onClick={() => openServiceDialog(service.title)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <ServiceIcon iconType={service.iconType} />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full text-white/50 group-hover:text-white opacity-60 group-hover:opacity-100 transition-all"
                      onClick={(e) => {
                        e.stopPropagation()
                        openServiceDialog(service.title)
                      }}
                    >
                      <Info size={18} />
                    </Button>
                  </div>
                  <h3 className="text-xl text-white mt-5 mb-3 font-light leading-tight">{service.title}</h3>
                  <div className="text-white/70 group-hover:text-white transition-colors flex items-center gap-2 mt-1">
                    <span>Scopri di più</span>
                    <span className="inline-block transform rotate-45">→</span>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Popup Dettagli Servizio */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[500px] bg-white border-slate-100">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-slate-800">
              {selectedService}
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Dettagli del servizio e prenotazione
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="text-slate-700 font-medium mb-2">Descrizione</h4>
              <p className="text-slate-600">{serviceDetails?.description}</p>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-start">
            <DialogClose asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <X className="h-4 w-4 mr-2" />
                Chiudi
              </Button>
            </DialogClose>
            <Button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 transition-all">
              <Calendar className="h-4 w-4 mr-2" />
              {data?.buttonText || "Prenota Appuntamento"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}