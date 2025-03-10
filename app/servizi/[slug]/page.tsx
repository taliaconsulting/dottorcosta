import { Metadata } from 'next'
import { getHomepage } from '@/lib/sanity.client'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const homepage = await getHomepage()
  const servicesData = homepage?.servicesSection
  
  // Trova il servizio corrispondente allo slug
  const slug = decodeURIComponent(params.slug)
  const service = servicesData?.services?.find((s: any) => 
    s.title.toLowerCase().replace(/\s+/g, '-') === slug
  )
  
  return {
    title: service ? `${service.title} - Dott. Costa` : 'Servizio - Dott. Costa',
    description: service?.description || 'Dettagli del servizio offerto dal Dott. Costa',
  }
}

// Dati di fallback dettagliati per i servizi
const serviceFallbackData: Record<string, any> = {
  'ginecologia': {
    title: 'Ginecologia',
    iconType: 'female',
    description: "Visite ginecologiche complete, diagnosi e trattamento delle patologie ginecologiche, consulenza sulla contraccezione e sulla salute della donna in tutte le fasi della vita. Controlli preventivi regolari e pap test.\n\nLa visita ginecologica è un momento fondamentale per la salute della donna e comprende un'anamnesi dettagliata, un esame obiettivo e eventuali esami strumentali come l'ecografia pelvica.\n\nIl servizio include anche la consulenza per la contraccezione, la gestione dei disturbi del ciclo mestruale, la diagnosi e il trattamento delle infezioni, e lo screening per la prevenzione dei tumori ginecologici."
  },
  'ostetricia': {
    title: 'Ostetricia',
    iconType: 'baby',
    description: "Assistenza durante la gravidanza, monitoraggio dello sviluppo del bambino, consulenza prenatale e postnatale. Ecografie di monitoraggio e visite programmate per accompagnare le future mamme in ogni fase della gravidanza.\n\nIl percorso di assistenza ostetrica include visite periodiche per monitorare la salute della madre e del bambino, ecografie di controllo, screening prenatali e consulenza nutrizionale.\n\nForniamo supporto emotivo e pratico durante tutto il percorso della gravidanza, preparazione al parto e assistenza post-partum, con particolare attenzione al benessere psicofisico della madre."
  },
  'medicina-estetica': {
    title: 'Medicina Estetica',
    iconType: 'beauty',
    description: "Trattamenti estetici minimamente invasivi per migliorare l'aspetto della pelle e contrastare i segni dell'invecchiamento. Consulenza personalizzata sulle opzioni di trattamento più adatte alle esigenze specifiche.\n\nI trattamenti di medicina estetica includono procedure come filler dermici, biorivitalizzazione, peeling chimici e trattamenti laser per il ringiovanimento cutaneo.\n\nOgni trattamento è preceduto da una consulenza approfondita per valutare le esigenze specifiche e le aspettative del paziente, garantendo risultati naturali e armoniosi."
  },
  'chirurgia-laser': {
    title: 'Chirurgia Laser',
    iconType: 'laser',
    description: "Interventi di chirurgia refrattiva con tecnologia laser all'avanguardia per correggere difetti visivi come miopia, ipermetropia e astigmatismo. Consulenza preliminare e follow-up post-operatorio.\n\nLa chirurgia laser utilizza tecnologie avanzate per correggere i difetti visivi, riducendo o eliminando la necessità di occhiali o lenti a contatto.\n\nIl percorso include una valutazione completa pre-operatoria, l'intervento con tecnologia laser di ultima generazione e un programma di follow-up personalizzato per garantire i migliori risultati."
  },
  'chirurgia-della-cataratta': {
    title: 'Chirurgia della Cataratta',
    iconType: 'cataract',
    description: "Diagnosi e trattamento della cataratta con sostituzione del cristallino naturale con lenti artificiali di ultima generazione. Visita preoperatoria e follow-up post-intervento.\n\nLa chirurgia della cataratta è un intervento mini-invasivo che permette di ripristinare la vista compromessa dalla cataratta, sostituendo il cristallino opacizzato con una lente intraoculare.\n\nOffriamo diverse opzioni di lenti intraoculari, incluse lenti multifocali e toriche, per correggere anche altri difetti visivi come presbiopia e astigmatismo, personalizzando l'intervento in base alle esigenze del paziente."
  },
  'cura-medica-degli-occhi': {
    title: 'Cura Medica degli Occhi',
    iconType: 'eyecare',
    description: "Assistenza completa per la salute degli occhi, compresi esami della vista, diagnosi e trattamento di patologie oculari, prescrizione di occhiali e lenti a contatto.\n\nIl servizio di cura medica degli occhi include visite oculistiche complete, esami diagnostici avanzati e trattamenti per varie patologie oculari come congiuntivite, occhio secco, allergie oculari e infezioni.\n\nForniamo anche consulenza per la scelta di occhiali e lenti a contatto, con particolare attenzione al comfort visivo e alla salute oculare a lungo termine."
  },
  'lesioni-palpebrali': {
    title: 'Lesioni Palpebrali',
    iconType: 'eyelid',
    description: "Valutazione e trattamento di lesioni palpebrali, inclusi chalazion, cisti, papillomi e altre condizioni che interessano le palpebre. Interventi mini-invasivi e consulenza specialistica.\n\nLe lesioni palpebrali possono causare disagio estetico e funzionale. Offriamo una valutazione accurata e trattamenti personalizzati per ogni tipo di lesione.\n\nGli interventi sono generalmente mini-invasivi, con tempi di recupero rapidi e risultati ottimali sia dal punto di vista funzionale che estetico."
  },
  'glaucoma': {
    title: 'Glaucoma',
    iconType: 'glaucoma',
    description: "Diagnosi precoce, monitoraggio e gestione del glaucoma. Misurazione della pressione intraoculare, valutazione del nervo ottico e del campo visivo, terapie farmacologiche e follow-up personalizzati.\n\nIl glaucoma è una patologia oculare che può portare a danni irreversibili al nervo ottico se non trattata tempestivamente. La diagnosi precoce è fondamentale per preservare la vista.\n\nIl nostro approccio include una valutazione completa con tecnologie avanzate, un piano terapeutico personalizzato e un monitoraggio regolare per controllare l'evoluzione della malattia e l'efficacia del trattamento."
  },
  'test-allergie-oculari': {
    title: 'Test Allergie Oculari',
    iconType: 'allergytest',
    description: "Test specifici per identificare allergie oculari, diagnosi differenziale da altre patologie della superficie oculare e trattamenti mirati per alleviare i sintomi e prevenire le recidive.\n\nLe allergie oculari possono causare sintomi fastidiosi come prurito, bruciore, arrossamento e lacrimazione eccessiva. I test specifici permettono di identificare gli allergeni responsabili.\n\nUna volta identificata la causa, proponiamo un piano terapeutico personalizzato che può includere colliri antistaminici, stabilizzatori dei mastociti, e consigli pratici per ridurre l'esposizione agli allergeni."
  },
  'gravidanza': {
    title: 'Gravidanza',
    iconType: 'baby',
    description: "Assistenza completa durante la gravidanza, dal concepimento al parto. Monitoraggio regolare della salute della madre e del bambino, ecografie di controllo e consulenza per affrontare al meglio questo periodo speciale.\n\nIl percorso di assistenza alla gravidanza include visite periodiche programmate, ecografie di screening e morfologiche, test prenatali e consulenza nutrizionale personalizzata.\n\nForniamo supporto emotivo e pratico durante tutto il percorso, con particolare attenzione alla preparazione al parto e all'assistenza post-partum, per garantire il benessere di madre e bambino."
  }
}

export default async function ServizioPage({ params }: Props) {
  const homepage = await getHomepage()
  const servicesData = homepage?.servicesSection
  
  // Trova il servizio corrispondente allo slug
  const slug = decodeURIComponent(params.slug)
  const service = servicesData?.services?.find((s: any) => 
    s.title.toLowerCase().replace(/\s+/g, '-') === slug
  )
  
  // Se il servizio non è trovato nei dati di Sanity, cerca nei dati di fallback
  const fallbackService = serviceFallbackData[slug]
  
  // Se il servizio non esiste nei dati di Sanity né nei dati di fallback, mostra un messaggio di errore
  if (!service && !fallbackService) {
    return (
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-light text-blu-notte mb-6">Servizio non trovato</h1>
          <p className="text-grigio-scuro mb-8">Il servizio che stai cercando non è disponibile.</p>
          <Link href="/">
            <Button className="bg-blu-polvere hover:bg-blu-polvere/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna alla Home
            </Button>
          </Link>
        </div>
      </main>
    )
  }
  
  // Funzione per ottenere l'icona del servizio in base al tipo
  const getServiceIcon = (iconType: string) => {
    switch (iconType) {
      case 'laser':
        return (
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-verde-acqua/20 to-verde-acqua/30 p-1">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-verde-acqua to-verde-acqua/80" />
          </div>
        )
      case 'cataract':
        return (
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blu-polvere/20 to-blu-polvere/30 p-1">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-blu-polvere to-blu-polvere/80 border-4 border-blu-polvere/20" />
          </div>
        )
      case 'eyecare':
        return (
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blu-polvere/20 to-verde-acqua/30 p-1">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-blu-polvere to-verde-acqua relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-bianco-perla/20" />
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 p-1">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300" />
          </div>
        )
    }
  }
  
  // Formatta la descrizione per visualizzarla in paragrafi
  const formatDescription = (description?: string) => {
    if (!description) return <p className="mb-4">Informazioni dettagliate non disponibili.</p>;
    
    return description.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ))
  }
  
  // Usa il servizio dai dati di Sanity o dai dati di fallback
  const serviceToShow = service || fallbackService
  
  return (
    <main className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm text-grigio-scuro hover:text-blu-polvere">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-grigio-chiaro mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-blu-polvere md:ml-2">{serviceToShow.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Intestazione */}
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-verde-acqua/10 to-blu-polvere/10">
            {getServiceIcon(serviceToShow.iconType)}
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-light text-blu-notte mb-4 text-center md:text-left">{serviceToShow.title}</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-verde-acqua to-blu-polvere rounded-full mb-6 mx-auto md:mx-0"></div>
          </div>
        </div>
        
        {/* Contenuto */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <div className="prose prose-lg max-w-none text-grigio-scuro">
            {formatDescription(serviceToShow.description)}
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="border-blu-polvere text-blu-polvere hover:bg-blu-polvere/5">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna alla Home
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="bg-gradient-to-r from-verde-acqua to-blu-polvere hover:from-verde-acqua/90 hover:to-blu-polvere/90 text-white">
              {servicesData?.buttonText || "Prenota una Visita"}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
