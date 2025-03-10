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
      name: 'excerpt',
      title: 'Estratto',
      type: 'text',
      description: 'Breve descrizione del post che apparirà nelle anteprime',
      
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'LASIK', value: 'LASIK' },
          { title: 'Cataratta', value: 'Cataract' },
          { title: 'Salute Oculare', value: 'Eye Health' },
          { title: 'Chirurgia Refrattiva', value: 'Refractive Surgery' },
          { title: 'Altro', value: 'Other' },
        ],
      },
      
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data di Pubblicazione',
      type: 'datetime',
      
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
          ],
          marks: {
            decorators: [
              { title: 'Grassetto', value: 'strong' },
              { title: 'Corsivo', value: 'em' },
              { title: 'Sottolineato', value: 'underline' },
            ],
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
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { title, media, date } = selection
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString('it-IT') : '',
      }
    },
  },
})
