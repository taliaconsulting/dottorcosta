import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Servizio",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo", type: "string" }),
    defineField({
      name: "description",
      title: "Descrizione",
      type: "text",
      description: "Descrizione breve mostrata nelle card in homepage",
    }),
    defineField({
      name: "order",
      title: "Ordine",
      type: "number",
      description: "Ordine di visualizzazione (crescente)",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
