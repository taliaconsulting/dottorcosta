// @ts-nocheck

import { Home } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getHomepage } from "@/lib/sanity.client";

type Params = {
  slug: string;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const homepage = await getHomepage();
  const servicesData = homepage?.servicesSection;

  // Trova il servizio corrispondente allo slug
  const slug = decodeURIComponent(params.slug);
  const service = servicesData?.services?.find(
    (s: { title: string }) => s.title.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  return {
    title: service ? `${service.title} - Dott. Costa` : "Servizio - Dott. Costa",
    description: service?.description || "Dettagli del servizio offerto dal Dott. Costa",
  };
}

// Dati di fallback dettagliati per i servizi
type Service = {
  title: string;
  iconType: string;
  description: string;
};

const serviceFallbackData: Record<string, Service> = {
  ginecologia: {
    title: "Ginecologia",
    iconType: "female",
    description:
      "Visite ginecologiche complete, diagnosi e trattamento delle patologie ginecologiche, consulenza sulla contraccezione e sulla salute della donna in tutte le fasi della vita. Controlli preventivi regolari e pap test.\n\nLa visita ginecologica è un momento fondamentale per la salute della donna e comprende un'anamnesi dettagliata, un esame obiettivo e eventuali esami strumentali come l'ecografia pelvica.\n\nIl servizio include anche la consulenza per la contraccezione, la gestione dei disturbi del ciclo mestruale, la diagnosi e il trattamento delle infezioni, e lo screening per la prevenzione dei tumori ginecologici.",
  },
  ostetricia: {
    title: "Ostetricia",
    iconType: "baby",
    description:
      "Assistenza durante la gravidanza, monitoraggio dello sviluppo del bambino, consulenza prenatale e postnatale. Ecografie di monitoraggio e visite programmate per accompagnare le future mamme in ogni fase della gravidanza.\n\nIl percorso di assistenza ostetrica include visite periodiche per monitorare la salute della madre e del bambino, ecografie di controllo, screening prenatali e consulenza nutrizionale.\n\nForniamo supporto emotivo e pratico durante tutto il percorso della gravidanza, preparazione al parto e assistenza post-partum, con particolare attenzione al benessere psicofisico della madre.",
  },
  "medicina-estetica": {
    title: "Medicina Estetica",
    iconType: "beauty",
    description:
      "Trattamenti estetici minimamente invasivi per migliorare l'aspetto della pelle e contrastare i segni dell'invecchiamento. Consulenza personalizzata sulle opzioni di trattamento più adatte alle esigenze specifiche.\n\nI trattamenti di medicina estetica includono procedure come filler dermici, biorivitalizzazione, peeling chimici e trattamenti laser per il ringiovanimento cutaneo.\n\nOgni trattamento è preceduto da una consulenza approfondita per valutare le esigenze specifiche e le aspettative del paziente, garantendo risultati naturali e armoniosi.",
  },
  "chirurgia-laser": {
    title: "Chirurgia Laser",
    iconType: "laser",
    description:
      "Interventi di chirurgia refrattiva con tecnologia laser all'avanguardia per correggere difetti visivi come miopia, ipermetropia e astigmatismo. Consulenza preliminare e follow-up post-operatorio.\n\nLa chirurgia laser utilizza tecnologie avanzate per correggere i difetti visivi, riducendo o eliminando la necessità di occhiali o lenti a contatto.\n\nIl percorso include una valutazione completa pre-operatoria, l'intervento con tecnologia laser di ultima generazione e un programma di follow-up personalizzato per garantire i migliori risultati.",
  },
  "chirurgia-della-cataratta": {
    title: "Chirurgia della Cataratta",
    iconType: "cataract",
    description:
      "Diagnosi e trattamento della cataratta con sostituzione del cristallino naturale con lenti artificiali di ultima generazione. Visita preoperatoria e follow-up post-intervento.\n\nLa chirurgia della cataratta è un intervento mini-invasivo che permette di ripristinare la vista compromessa dalla cataratta, sostituendo il cristallino opacizzato con una lente intraoculare.\n\nOffriamo diverse opzioni di lenti intraoculari, incluse lenti multifocali e toriche, per correggere anche altri difetti visivi come presbiopia e astigmatismo, personalizzando l'intervento in base alle esigenze del paziente.",
  },
  "cura-medica-degli-occhi": {
    title: "Cura Medica degli Occhi",
    iconType: "eyecare",
    description:
      "Assistenza completa per la salute degli occhi, compresi esami della vista, diagnosi e trattamento di patologie oculari, prescrizione di occhiali e lenti a contatto.\n\nIl servizio di cura medica degli occhi include visite oculistiche complete, esami diagnostici avanzati e trattamenti per varie patologie oculari come congiuntivite, occhio secco, allergie oculari e infezioni.\n\nForniamo anche consulenza per la scelta di occhiali e lenti a contatto, con particolare attenzione al comfort visivo e alla salute oculare a lungo termine.",
  },
  "lesioni-palpebrali": {
    title: "Lesioni Palpebrali",
    iconType: "eyelid",
    description:
      "Valutazione e trattamento di lesioni palpebrali, inclusi chalazion, cisti, papillomi e altre condizioni che interessano le palpebre. Interventi mini-invasivi e consulenza specialistica.\n\nLe lesioni palpebrali possono causare disagio estetico e funzionale. Offriamo una valutazione accurata e trattamenti personalizzati per ogni tipo di lesione.\n\nGli interventi sono generalmente mini-invasivi, con tempi di recupero rapidi e risultati ottimali sia dal punto di vista funzionale che estetico.",
  },
  glaucoma: {
    title: "Glaucoma",
    iconType: "glaucoma",
    description:
      "Diagnosi precoce, monitoraggio e gestione del glaucoma. Misurazione della pressione intraoculare, valutazione del nervo ottico e del campo visivo, terapie farmacologiche e follow-up personalizzati.\n\nIl glaucoma è una patologia oculare che può portare a danni irreversibili al nervo ottico se non trattata tempestivamente. La diagnosi precoce è fondamentale per preservare la vista.\n\nIl nostro approccio include una valutazione completa con tecnologie avanzate, un piano terapeutico personalizzato e un monitoraggio regolare per controllare l'evoluzione della malattia e l'efficacia del trattamento.",
  },
  "test-allergie-oculari": {
    title: "Test Allergie Oculari",
    iconType: "allergytest",
    description:
      "Test specifici per identificare allergie oculari, diagnosi differenziale da altre patologie della superficie oculare e trattamenti mirati per alleviare i sintomi e prevenire le recidive.\n\nLe allergie oculari possono causare sintomi fastidiosi come prurito, bruciore, arrossamento e lacrimazione eccessiva. I test specifici permettono di identificare gli allergeni responsabili.\n\nUna volta identificata la causa, proponiamo un piano terapeutico personalizzato che può includere colliri antistaminici, stabilizzatori dei mastociti, e consigli pratici per ridurre l'esposizione agli allergeni.",
  },
  gravidanza: {
    title: "Gravidanza",
    iconType: "baby",
    description:
      "Assistenza completa durante la gravidanza, dal concepimento al parto. Monitoraggio regolare della salute della madre e del bambino, ecografie di controllo e consulenza per affrontare al meglio questo periodo speciale.\n\nIl percorso di assistenza alla gravidanza include visite periodiche programmate, ecografie di screening e morfologiche, test prenatali e consulenza nutrizionale personalizzata.\n\nForniamo supporto emotivo e pratico durante tutto il percorso, con particolare attenzione alla preparazione al parto e all'assistenza post-partum, per garantire il benessere di madre e bambino.",
  },
};

export default async function ServizioPage({ params }: { params: Params }) {
  const homepage = await getHomepage();
  const servicesData = homepage?.servicesSection;

  // Trova il servizio corrispondente allo slug
  const slug = decodeURIComponent(params.slug);
  const service = servicesData?.services?.find(
    (s: { title: string }) => s.title.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  // Se il servizio non è trovato nei dati di Sanity, cerca nei dati di fallback
  const fallbackService = serviceFallbackData[slug];

  // Se il servizio non esiste nei dati di Sanity né nei dati di fallback, mostra un messaggio di errore
  if (!service && !fallbackService) {
    return (
      <main className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F9E3EB]/10 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block p-4 bg-red-50 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#D19BAF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Servizio non trovato</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-light text-blu-notte mb-6">Servizio non trovato</h1>
          <p className="text-grigio-scuro mb-8">Il servizio che stai cercando non è disponibile.</p>
          <Link href="/">
            <Button className="bg-[#E8B8C7] hover:bg-[#D19BAF] rounded-full px-8 py-6 h-auto">
              <Home className="mr-2 h-5 w-5" />
              Torna alla Home
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  // Formatta la descrizione per visualizzarla in paragrafi
  const formatDescription = (description?: string) => {
    if (!description) return <p className="mb-4">Informazioni dettagliate non disponibili.</p>;

    return description.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  // Usa il servizio dai dati di Sanity o dai dati di fallback
  const serviceToShow = service || fallbackService;

  // Funzione per ottenere un'immagine decorativa basata sul servizio
  const getDecoImage = () => {
    // Si potrebbe aggiungere un sistema più avanzato di selezione immagini
    return (
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden rounded-l-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2D7E0] to-[#D19BAF] transform rotate-12 scale-150"></div>
      </div>
    );
  };

  // Funzione per il video o immagine in base al servizio
  const getServiceMedia = () => {
    // In futuro si potrebbe aggiungere un campo nel modello Sanity per video specifici per servizio
    // Per ora è solo decorativo
    return getDecoImage();
  };

  return (
    <main className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F9E3EB]/10 overflow-hidden">
      {/* Floating home button */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
        <Link href="/">
          <Button
            variant="default"
            className="bg-[#E8B8C7] hover:bg-[#D19BAF] text-white rounded-full px-8 py-5 shadow-lg transition-all hover:shadow-xl flex items-center text-lg"
          >
            <Home className="h-6 w-6 mr-3" />
            <span>Torna alla Home</span>
          </Button>
        </Link>
      </div>

      {/* Elementi decorativi di sfondo */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-[#F2D7E0]/20 to-[#E8B8C7]/20"></div>
      <div className="absolute bottom-40 right-0 w-64 h-64 rounded-full bg-[#F2D7E0]/30 blur-3xl"></div>
      <div className="absolute top-40 left-0 w-80 h-80 rounded-full bg-[#E8B8C7]/20 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm text-grigio-scuro hover:text-[#D19BAF]"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-grigio-chiaro mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-[#D19BAF] md:ml-2">
                    {serviceToShow.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero section */}
        <div className="relative mb-16 bg-gradient-to-br from-white to-[#F9E3EB]/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
          <div className="relative z-10 px-8 py-12 md:py-16 md:px-12 lg:px-16">
            <h1 className="text-5xl sm:text-6xl font-light text-blu-notte mb-6 max-w-3xl">
              <span className="relative inline-block">
                {serviceToShow.title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F2D7E0] to-[#D19BAF] transform"></span>
              </span>
            </h1>
            <div className="max-w-2xl text-lg text-grigio-scuro/90 mb-8 leading-relaxed">
              {serviceToShow.description?.split("\n")[0]}
            </div>
          </div>
          {getServiceMedia()}
        </div>

        {/* Contenuto */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F2D7E0] to-[#D19BAF]"></div>
          <div className="prose prose-lg max-w-none text-grigio-scuro relative z-10">
            <h2 className="text-3xl font-light text-blu-notte mb-8">Dettagli del servizio</h2>
            {formatDescription(serviceToShow.description)}
          </div>
        </div>
      </div>
    </main>
  );
}
