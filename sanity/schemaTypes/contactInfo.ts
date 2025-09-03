import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "Informazioni di contatto",
  type: "document",
  fields: [
    defineField({ name: "address", title: "Indirizzo", type: "string" }),
    defineField({ name: "phoneNumber", title: "Telefono", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "mapEmbedUrl",
      title: "URL Mappa incorporata",
      type: "url",
      description: "URL embed Google Maps",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Informazioni di contatto" };
    },
  },
});

