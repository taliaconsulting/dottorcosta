import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPage",
  title: "Pagina Blog",
  type: "document",
  fields: [
    // Impostazioni della pagina del blog
    defineField({
      name: "title",
      title: "Titolo Pagina Blog",
      type: "string",
      description: "Titolo principale della pagina del blog",
    }),
    defineField({
      name: "description",
      title: "Descrizione",
      type: "text",
      description: "Una breve descrizione della sezione blog",
    }),
    defineField({
      name: "headerImage",
      title: "Immagine Header",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Immagine principale per la pagina del blog",
    }),
    defineField({
      name: "postsPerPage",
      title: "Post Per Pagina",
      type: "number",
      description: "Numero di post da visualizzare per pagina",
      validation: (Rule) => Rule.min(1).max(20),
      initialValue: 9,
    }),
    defineField({
      name: "categoriesTitle",
      title: "Titolo Sezione Categorie",
      type: "string",
      description: "Titolo per la sezione categorie",
      initialValue: "Categorie",
    }),
    defineField({
      name: "recentPostsTitle",
      title: "Titolo Post Recenti",
      type: "string",
      description: "Titolo per la sezione post recenti",
      initialValue: "Post Recenti",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Pagina Blog",
        subtitle: "Impostazioni per la pagina principale del blog",
      };
    },
  },
});
