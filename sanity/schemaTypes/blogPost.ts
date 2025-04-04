import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Post del Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Ostetricia', value: 'Ostetricia' },
          { title: 'Ginecologia', value: 'Ginecologia' },
          { title: 'Menopausa', value: 'Menopausa' },
          { title: 'Endometriosi', value: 'Endometriosi' },
          { title: 'Sterilità', value: 'Sterilità' },
          { title: 'Altro', value: 'Altro' },
        ],
      },
      
    }),
    defineField({
      name: 'readTime',
      title: 'Tempo di Lettura',
      type: 'string',
      description: 'Tempo stimato di lettura (es. "5 min")',
      
    }),
    defineField({
      name: 'body',
      title: 'Contenuto',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normale', value: 'normal' },
            { title: 'Titolo 1', value: 'h1' },
            { title: 'Titolo 2', value: 'h2' },
            { title: 'Titolo 3', value: 'h3' },
            { title: 'Titolo 4', value: 'h4' },
            { title: 'Citazione', value: 'blockquote' },
            { title: 'Evidenziato', value: 'highlighted' },
            { title: 'Nota a margine', value: 'callout' },
          ],
          marks: {
            decorators: [
              { title: 'Grassetto', value: 'strong' },
              { title: 'Corsivo', value: 'em' },
              { title: 'Sottolineato', value: 'underline' },
              { title: 'Barrato', value: 'strike-through' },
              { title: 'Codice', value: 'code' },
              { title: 'Evidenziatore', value: 'highlight' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Apri in una nuova scheda',
                    initialValue: true
                  }
                ]
              },
              {
                name: 'textEffect',
                type: 'object',
                title: 'Effetto Testo',
                fields: [
                  {
                    name: 'effect',
                    type: 'string',
                    title: 'Tipo di Effetto',
                    options: {
                      list: [
                        { title: 'Gradiente', value: 'gradient' },
                        { title: 'Ombra', value: 'shadow' },
                        { title: 'Rilievo', value: 'relief' },
                        { title: 'Animato', value: 'animated' }
                      ]
                    }
                  },
                  {
                    name: 'color',
                    type: 'string',
                    title: 'Colore',
                    description: 'Opzionale, colore per l\'effetto',
                  }
                ]
              }
            ]
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Didascalia',
              options: {
                isHighlighted: true,
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Testo alternativo',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Data di Pubblicazione, Più Recente',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
      }
    },
  },
})
