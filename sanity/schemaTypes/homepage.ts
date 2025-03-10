import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Sezione Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Titolo Principale',
          type: 'string',
          description: 'Il titolo principale della sezione hero',
          
        }),
        defineField({
          name: 'specialties',
          title: 'Specialità',
          type: 'string',
          description: 'Elenco delle specialità (es. LASIK | REFRACTIVE | CATARACTS)',
          
        }),
        defineField({
          name: 'locationText',
          title: 'Testo Localizzazione',
          type: 'string',
          description: 'Testo che indica la localizzazione dello studio',
          
        }),
        defineField({
          name: 'locationLink',
          title: 'Link Localizzazione',
          type: 'string',
          description: 'Link associato alla localizzazione',
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Numero di Telefono',
          type: 'string',
          description: 'Numero di telefono per il primo pulsante',
        }),
        defineField({
          name: 'ctaButtonText',
          title: 'Testo Pulsante CTA',
          type: 'string',
          description: 'Testo per il pulsante call-to-action',
          
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Immagine di Sfondo',
          type: 'image',
          description: 'Immagine di sfondo per la sezione hero',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    
    // Services Section
    defineField({
      name: 'servicesSection',
      title: 'Sezione Servizi',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titolo Sezione',
          type: 'string',
          
        }),
        defineField({
          name: 'buttonText',
          title: 'Testo Pulsante Prenotazione',
          type: 'string',
          description: 'Testo per il pulsante di prenotazione nei servizi',
        }),
        defineField({
          name: 'services',
          title: 'Servizi',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Titolo Servizio',
                  type: 'string',
                  
                }),
                defineField({
                  name: 'description',
                  title: 'Descrizione',
                  type: 'text',
                  description: 'Descrizione dettagliata del servizio',
                }),
                defineField({
                  name: 'iconType',
                  title: 'Tipo di Icona',
                  type: 'string',
                  description: 'Identificatore per il tipo di icona da visualizzare',
                  options: {
                    list: [
                      {title: 'Laser', value: 'laser'},
                      {title: 'Cataratta', value: 'cataract'},
                      {title: 'Cura Oculare', value: 'eyecare'},
                      {title: 'Lesioni Palpebrali', value: 'eyelid'},
                      {title: 'Glaucoma', value: 'glaucoma'},
                      {title: 'Allergia Oculare', value: 'allergytest'},
                    ],
                  },
                  
                }),
              ],
            },
          ],
        }),
      ],
    }),
    
    // About Section
    defineField({
      name: 'aboutSection',
      title: 'Sezione Chi Siamo',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titolo Sezione',
          type: 'string',
          
        }),
        defineField({
          name: 'description',
          title: 'Descrizione',
          type: 'text',
          
        }),
        defineField({
          name: 'doctorImage',
          title: 'Immagine Dottore',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'credentials',
          title: 'Credenziali',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Titolo',
                  type: 'string',
                  
                }),
                defineField({
                  name: 'description',
                  title: 'Descrizione',
                  type: 'string',
                  
                }),
                defineField({
                  name: 'iconType',
                  title: 'Tipo di Icona',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Blu', value: 'blue'},
                      {title: 'Verde', value: 'green'},
                      {title: 'Ambra', value: 'amber'},
                    ],
                  },
                  
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'learnMoreButtonText',
          title: 'Testo Pulsante "Scopri di Più"',
          type: 'string',
        }),
        defineField({
          name: 'consultationButtonText',
          title: 'Testo Pulsante "Prenotazione"',
          type: 'string',
        }),
      ],
    }),
    
    // Certifications Section
    defineField({
      name: 'certificationsSection',
      title: 'Sezione Certificazioni',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titolo Sezione',
          type: 'string',
          
        }),
        defineField({
          name: 'subtitle',
          title: 'Sottotitolo',
          type: 'text',
        }),
        defineField({
          name: 'certifications',
          title: 'Certificazioni',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Nome',
                  type: 'string',
                  
                }),
                defineField({
                  name: 'logo',
                  title: 'Logo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'footerText',
          title: 'Testo a Piè di Pagina',
          type: 'string',
        }),
      ],
    }),
    
    // Blog Preview Section (for homepage)
    defineField({
      name: 'blogPreviewSection',
      title: 'Sezione Anteprima Blog',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titolo Sezione',
          type: 'string',
          
        }),
        defineField({
          name: 'subtitle',
          title: 'Sottotitolo',
          type: 'string',
        }),
        defineField({
          name: 'viewAllButtonText',
          title: 'Testo Pulsante "Vedi Tutti"',
          type: 'string',
        }),
        defineField({
          name: 'featuredPostsCount',
          title: 'Numero di Post in Evidenza',
          type: 'number',
          description: 'Quanti post del blog mostrare in questa sezione',
          validation: (Rule) => Rule.min(1).max(6),
        }),
      ],
    }),
    
    // Contact Section
    defineField({
      name: 'contactSection',
      title: 'Sezione Contatti',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titolo Sezione',
          type: 'string',
          
        }),
        defineField({
          name: 'subtitle',
          title: 'Sottotitolo',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Indirizzo',
          type: 'string',
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Numero di Telefono',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'formSubmitButtonText',
          title: 'Testo Pulsante Invio Modulo',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.headline',
    },
    prepare({ title }) {
      return {
        title: 'Homepage',
        subtitle: title,
      }
    },
  },
})
