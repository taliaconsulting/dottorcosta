// @ts-nocheck
import type { Metadata } from "next";
import Link from "next/link";
import { getHomepage } from "@/lib/sanity.client";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const homepage = await getHomepage();
  const servicesData = homepage?.servicesSection;

  // Trova il servizio corrispondente allo slug
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const service = servicesData?.services?.find(
    (s: { title: string }) =>
      s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  return {
    title: service
      ? `${service.title} - Dott. Costa`
      : "Servizio - Dott. Costa",
    description:
      service?.description || "Dettagli del servizio offerto dal Dott. Costa",
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

export default async function ServizioPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const homepage = await getHomepage();
  const servicesData = homepage?.servicesSection;

  // Trova il servizio corrispondente allo slug
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const service = servicesData?.services?.find(
    (s: { title: string }) =>
      s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // Se il servizio non è trovato nei dati di Sanity, cerca nei dati di fallback
  const fallbackService = serviceFallbackData[slug];

  // Se il servizio non esiste nei dati di Sanity né nei dati di fallback, mostra un messaggio di errore
  if (!service && !fallbackService) {
    return (
      <article>
        <section className="p-2 sm:p-3 lg:p-4">
          <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-4">
                Servizio non trovato
              </h1>
              <p className="text-grigio-scuro/80 text-lg sm:text-xl leading-relaxed mb-6">
                Il servizio che stai cercando non è disponibile.
              </p>
              <Link href="/">
                <span className="inline-flex items-center justify-center px-6 py-3 text-blu-notte text-sm font-medium rounded-2xl hover:text-blu-notte/80 transition-colors">
                  Torna alla Home
                </span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    );
  }

  // Formatta la descrizione per visualizzarla in paragrafi
  const formatDescription = (description?: string) => {
    if (!description)
      return <p className="mb-4">Informazioni dettagliate non disponibili.</p>;

    return description.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  // Usa il servizio dai dati di Sanity o dai dati di fallback
  const serviceToShow = service || fallbackService;

  return (
    <article>
      {/* Header Section (Homepage style) */}
      <section className="p-2 sm:p-3 lg:p-4 h-[80vh]">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200 h-full">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-4">
              {serviceToShow.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-grigio-scuro/80 max-w-2xl">
              {serviceToShow.description?.split("\n")[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="p-2 sm:p-3 lg:p-4">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="prose prose-lg max-w-none text-grigio-scuro">
              <h2 className="text-3xl font-light text-blu-notte mb-8">
                Dettagli del servizio
              </h2>
              {formatDescription(serviceToShow.description)}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
