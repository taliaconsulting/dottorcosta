"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Definizione del tipo per i dettagli del servizio
type ServiceDetail = {
  description: string;
};

// Definizione dei dati di fallback per le descrizioni dei servizi
const serviceDescriptions: Record<string, ServiceDetail> = {
  Ginecologia: {
    description:
      "Visite ginecologiche complete, diagnosi e trattamento delle patologie ginecologiche, consulenza sulla contraccezione e sulla salute della donna in tutte le fasi della vita. Controlli preventivi regolari e pap test.",
  },
  Ostetricia: {
    description:
      "Assistenza durante la gravidanza, monitoraggio dello sviluppo del bambino, consulenza prenatale e postnatale. Ecografie di monitoraggio e visite programmate per accompagnare le future mamme in ogni fase della gravidanza.",
  },
  "Medicina Estetica": {
    description:
      "Trattamenti estetici minimamente invasivi per migliorare l'aspetto della pelle e contrastare i segni dell'invecchiamento. Consulenza personalizzata sulle opzioni di trattamento più adatte alle esigenze specifiche.",
  },
  "Chirurgia Laser": {
    description:
      "Interventi di chirurgia refrattiva con tecnologia laser all'avanguardia per correggere difetti visivi come miopia, ipermetropia e astigmatismo. Consulenza preliminare e follow-up post-operatorio.",
  },
  "Chirurgia della Cataratta": {
    description:
      "Diagnosi e trattamento della cataratta con sostituzione del cristallino naturale con lenti artificiali di ultima generazione. Visita preoperatoria e follow-up post-intervento.",
  },
  "Cura Medica degli Occhi": {
    description:
      "Assistenza completa per la salute degli occhi, compresi esami della vista, diagnosi e trattamento di patologie oculari, prescrizione di occhiali e lenti a contatto.",
  },
  "Lesioni Palpebrali": {
    description:
      "Valutazione e trattamento di lesioni palpebrali, inclusi chalazion, cisti, papillomi e altre condizioni che interessano le palpebre. Interventi mini-invasivi e consulenza specialistica.",
  },
  Glaucoma: {
    description:
      "Diagnosi precoce, monitoraggio e gestione del glaucoma. Misurazione della pressione intraoculare, valutazione del nervo ottico e del campo visivo, terapie farmacologiche e follow-up personalizzati.",
  },
  "Test Allergie Oculari": {
    description:
      "Test specifici per identificare allergie oculari, diagnosi differenziale da altre patologie della superficie oculare e trattamenti mirati per alleviare i sintomi e prevenire le recidive.",
  },
};

type ServicesSectionProps = {
  data: {
    title: string;
    services: {
      title: string;
      description?: string;
      iconType?: string; // Ora opzionale perché non lo utilizzeremo più
    }[];
  };
};

export function ServicesSection({ data }: ServicesSectionProps) {
  // Fallback per i servizi se non ci sono dati da Sanity
  const fallbackServices = [
    {
      title: "Chirurgia Laser",
      description: serviceDescriptions["Chirurgia Laser"].description,
    },
    {
      title: "Chirurgia della Cataratta",
      description: serviceDescriptions["Chirurgia della Cataratta"].description,
    },
    {
      title: "Cura Medica degli Occhi",
      description: serviceDescriptions["Cura Medica degli Occhi"].description,
    },
    {
      title: "Lesioni Palpebrali",
      description: serviceDescriptions["Lesioni Palpebrali"].description,
    },
    {
      title: "Glaucoma",
      description: serviceDescriptions.Glaucoma.description,
    },
    {
      title: "Test Allergie Oculari",
      description: serviceDescriptions["Test Allergie Oculari"].description,
    },
  ];

  const services = data?.services || fallbackServices;

  // Riferimento al contenitore del carosello
  const carouselRef = useRef<HTMLDivElement>(null);

  // Stato per tenere traccia dell'indice attivo
  const [activeIndex, setActiveIndex] = useState(0);

  // Numero di card visualizzabili contemporaneamente in base alle dimensioni dello schermo
  const [visibleCards, setVisibleCards] = useState(3);

  // Calcola il numero di pagine in base ai servizi e alle card visibili
  const totalPages = Math.ceil(services.length / visibleCards);

  // Impostazione del numero di card visibili in base alla dimensione dello schermo
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    // Imposta il valore iniziale
    handleResize();

    // Ascolta i cambiamenti di dimensione dello schermo
    window.addEventListener("resize", handleResize);

    // Pulisci l'event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funzione per navigare al set successivo di servizi
  const goToNext = () => {
    if (activeIndex < totalPages - 1) {
      setActiveIndex((prev) => prev + 1);
    } else {
      setActiveIndex(0); // Torna all'inizio
    }
  };

  // Funzione per navigare al set precedente di servizi
  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else {
      setActiveIndex(totalPages - 1); // Vai alla fine
    }
  };

  // Funzione per generare lo slug del servizio
  const generateServiceSlug = (title: string) => {
    return encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
  };

  // Effetto per controllare lo scorrimento quando cambia l'indice attivo
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount =
        (carouselRef.current.scrollWidth / totalPages) * activeIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, totalPages]);

  return (
    <section id="services" className="p-2 sm:p-3 lg:p-4">
      <div className="relative w-full rounded-2xl overflow-hidden py-24 sm:py-32 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-blu-notte mb-6 text-center">
              {data?.title || "I Nostri Servizi"}
            </h2>
            <p className="text-grigio-scuro/80 max-w-3xl text-lg sm:text-xl mb-12 leading-relaxed text-center">
              Offriamo servizi specializzati con approccio professionale e
              tecnologie all'avanguardia per garantire il massimo della qualità.
            </p>
          </div>

          {/* Carosello servizi */}
          <div className="relative overflow-hidden pb-4">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
                    <div className="h-full min-h-[260px] md:min-h-[320px] lg:min-h-[360px] rounded-2xl overflow-hidden transition-all duration-300 bg-white border border-[#E8B8C7]/20 group relative hover:border-[#E8B8C7]/40">
                      <div className="relative p-6 flex flex-col h-full z-10">
                        {/* Header con titolo */}
                        <div className="flex flex-col items-start text-left mb-4">
                          <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 group-hover:text-[#E8B8C7] transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>{" "}
                        {/* Descrizione breve */}
                        <p className="text-gray-600 text-sm mb-6 line-clamp-1 text-left flex-1 leading-relaxed">
                          {service.description
                            ? service.description.split(".")[0] + "..."
                            : "Dettagli del servizio non disponibili."}
                        </p>
                        {/* Pulsante azione */}
                        <div className="mt-auto text-left">
                          <span className="inline-flex items-center justify-center px-4 py-2 text-gray-700 text-sm font-medium rounded-lg hover:text-[#E8B8C7] transition-colors duration-300">
                            Scopri di più
                            <ArrowRight
                              size={14}
                              className="ml-2 transition-transform group-hover:translate-x-1 duration-300"
                            />
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
            <div className="flex items-center justify-center gap-2 px-6 py-3 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur ring-1 ring-slate-200 rounded-2xl">
              <button
                type="button"
                onClick={goToPrevious}
                className="p-2 rounded-full text-[#D19BAF] hover:text-[#B97A8E] transition-colors"
                aria-label="Servizi precedenti"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-2 mx-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      activeIndex === index
                        ? "scale-110"
                        : "opacity-70 scale-100 hover:opacity-100"
                    }`}
                    aria-label={`Vai a pagina ${index + 1}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full mb-1 ${
                        activeIndex === index
                          ? "bg-[#D19BAF]"
                          : "bg-[#F2D7E0] hover:bg-[#E8B8C7]"
                      }`}
                    ></span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                className="p-2 rounded-full text-[#D19BAF] hover:text-[#B97A8E] transition-colors"
                aria-label="Servizi successivi"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
