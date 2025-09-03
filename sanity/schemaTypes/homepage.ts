import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    // Hero Section
    defineField({
      name: "hero",
      title: "Sezione Hero",
      type: "object",
      fields: [
        defineField({
          name: "headline",
          title: "Titolo Principale",
          type: "string",
          description: "Il titolo principale della sezione hero",
        }),
        defineField({
          name: "specialties",
          title: "Specialità",
          type: "string",
          description:
            "Elenco delle specialità (es. LASIK | REFRACTIVE | CATARACTS)",
        }),
        defineField({
          name: "locationText",
          title: "Testo Localizzazione",
          type: "string",
          description: "Testo che indica la localizzazione dello studio",
        }),
        defineField({
          name: "ctaButtonText",
          title: "Testo Pulsante CTA",
          type: "string",
          description: "Testo per il pulsante call-to-action",
        }),
        defineField({
          name: "backgroundImage",
          title: "Immagine di Sfondo",
          type: "image",
          description:
            "Immagine di sfondo per la sezione hero (utilizzata se non è presente un video)",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "backgroundVideo",
          title: "Video di Sfondo",
          type: "file",
          description:
            "Video di sfondo per la sezione hero (ha priorità rispetto all'immagine)",
          options: {
            accept: "video/*",
          },
        }),
        defineField({
          name: "useVideo",
          title: "Usa Video",
          type: "boolean",
          description: "Seleziona se utilizzare il video invece dell'immagine",
          initialValue: false,
        }),
      ],
    }),

    // Services Section
    defineField({
      name: "servicesSection",
      title: "Sezione Servizi",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Titolo Sezione",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Sottotitolo",
          type: "text",
          description:
            "Testo introduttivo sotto il titolo (opzionale). Se vuoto, verrà mostrato un testo di fallback.",
        }),
        defineField({
          name: "services",
          title: "Servizi",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Titolo Servizio",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Descrizione",
                  type: "text",
                  description: "Descrizione dettagliata del servizio",
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // About Section
    defineField({
      name: "aboutSection",
      title: "Sezione Chi Siamo",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Titolo Sezione",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Descrizione",
          type: "text",
        }),
        defineField({
          name: "credentials",
          title: "Credenziali/Highlight",
          type: "array",
          description:
            "Punti salienti come specializzazioni, anni di esperienza, pubblicazioni, ecc. (opzionale)",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Titolo", type: "string" }),
                defineField({
                  name: "description",
                  title: "Descrizione",
                  type: "string",
                }),
                defineField({
                  name: "iconType",
                  title: "Icona (opzionale)",
                  type: "string",
                  options: {
                    list: [
                      { title: "Laurea", value: "graduation" },
                      { title: "Calendario", value: "calendar" },
                      { title: "Documento", value: "document" },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "learnMoreButtonText",
          title: 'Testo Pulsante "Scopri di Più"',
          type: "string",
        }),
        defineField({
          name: "consultationButtonText",
          title: 'Testo Pulsante "Prenotazione"',
          type: "string",
        }),
      ],
    }),

    // Certifications Section
    defineField({
      name: "certificationsSection",
      title: "Sezione Certificazioni",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Titolo Sezione",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Sottotitolo",
          type: "text",
        }),
        defineField({
          name: "certifications",
          title: "Certificazioni",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Nome",
                  type: "string",
                }),
                defineField({
                  name: "logo",
                  title: "Logo",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Blog Preview Section (for homepage)
    defineField({
      name: "blogPreviewSection",
      title: "Sezione Anteprima Blog",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Titolo Sezione",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Sottotitolo",
          type: "string",
        }),
        defineField({
          name: "viewAllButtonText",
          title: 'Testo Pulsante "Vedi Tutti"',
          type: "string",
        }),
        defineField({
          name: "featuredPostsCount",
          title: "Numero di Post in Evidenza",
          type: "number",
          description: "Quanti post del blog mostrare in questa sezione",
          validation: (Rule) => Rule.min(1).max(6),
        }),
      ],
    }),

    // Contact Section
    defineField({
      name: "contactSection",
      title: "Sezione Contatti",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Titolo Sezione",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Sottotitolo",
          type: "string",
        }),
        defineField({
          name: "address",
          title: "Indirizzo",
          type: "string",
        }),
        defineField({
          name: "phoneNumber",
          title: "Numero di Telefono",
          type: "string",
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
        }),
        defineField({
          name: "mapEmbedUrl",
          title: "URL Mappa incorporata",
          type: "url",
          description:
            "URL di incorporamento Google Maps (opzionale). Se vuoto, verrà usato un URL di fallback.",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "hero.headline",
    },
    prepare({ title }) {
      return {
        title: "Homepage",
        subtitle: title,
      };
    },
  },
});
