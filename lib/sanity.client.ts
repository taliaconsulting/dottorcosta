import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import {
  allBlogPostsQuery,
  blogPageQuery,
  blogPostBySlugQuery,
  featuredBlogPostsQuery,
  homepageQuery,
  servicesQuery,
  contactInfoQuery,
} from "./sanity.queries";

// Controllo se deve essere usato il fallback
const useFallbackData = process.env.USE_SANITY_FALLBACK === "true";

// Dati di fallback per la homepage
const homepageFallbackData = {
  hero: {
    headline: "Dr. Costa - Specialista in Ginecologia",
    specialties: "Ginecologia | Ostetricia | Medicina Estetica",
    locationText: "Via Roma 123, Milano",
    locationLink: "https://goo.gl/maps/example",
    phoneNumber: "+39 123 456 7890",
    ctaButtonText: "Prenota una visita",
    backgroundImage: "https://placeholder.pics/svg/1200x600/DEDEDE/555555/immagine%20hero",
  },
  servicesSection: {
    title: "I Nostri Servizi",
    subtitle:
      "Offriamo servizi specializzati con approccio professionale e tecnologie all'avanguardia per garantire il massimo della qualità.",
    services: [
      {
        title: "Ginecologia",
        description:
          "Visite ginecologiche complete, diagnosi e trattamento delle patologie ginecologiche, consulenza sulla contraccezione e sulla salute della donna.",
        iconType: "female",
      },
      {
        title: "Ostetricia",
        description:
          "Assistenza durante la gravidanza, monitoraggio dello sviluppo fetale, consulenza prenatale e postnatale, con percorsi personalizzati per ogni mamma.",
        iconType: "baby",
      },
      {
        title: "Medicina Estetica",
        description:
          "Trattamenti minimamente invasivi per migliorare il benessere e l'aspetto della pelle, con protocolli mirati e personalizzati.",
        iconType: "beauty",
      },
    ],
  },
  aboutSection: {
    title: "Chi Sono",
    description:
      "Medico specializzato con oltre 15 anni di esperienza in ginecologia e ostetricia. La mia missione è fornire cure di alta qualità e personalizzate per ogni paziente.",
    credentials: [
      { title: "Specializzazione", description: "Università di Milano", iconType: "graduation" },
      { title: "Esperienza", description: "15+ anni", iconType: "calendar" },
      { title: "Pubblicazioni", description: "20+ articoli scientifici", iconType: "document" },
    ],
    consultationButtonText: "Prenota una consulenza",
  },
  certificationsSection: {
    title: "Certificazioni",
    subtitle: "Riconosciuto dalle principali istituzioni mediche",
    certifications: [
      {
        name: "Certificazione 1",
        logo: "https://placeholder.pics/svg/200x100/DEDEDE/555555/logo%201",
      },
      {
        name: "Certificazione 2",
        logo: "https://placeholder.pics/svg/200x100/DEDEDE/555555/logo%202",
      },
      {
        name: "Certificazione 3",
        logo: "https://placeholder.pics/svg/200x100/DEDEDE/555555/logo%203",
      },
    ],
    footerText: "Membro di associazioni professionali di primo piano",
  },
  blogPreviewSection: {
    title: "Blog e Articoli",
    subtitle: "Informazioni utili e aggiornamenti nel campo della ginecologia",
    viewAllButtonText: "Vedi tutti gli articoli",
    featuredPostsCount: 3,
  },
  contactSection: {
    title: "Contattami",
    subtitle: "Sono disponibile per rispondere alle tue domande",
    address: "Via Roma 123, Milano",
    phoneNumber: "+39 123 456 7890",
    email: "info@drcosta.it",
    formSubmitButtonText: "Invia messaggio",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.505237206145!2d13.644529875626667!3d37.30685827210697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1310847ca5540ddf%3A0x2f9bf0ac4bcf509a!2sViale%20Aldo%20Moro%2C%20165%2C%2092026%20Favara%20AG!5e0!3m2!1sit!2sit!4v1743751617260!5m2!1sit!2sit",
  },
};

// Dati di fallback per la pagina del blog
const blogPageFallbackData = {
  title: "Blog e Articoli",
  description: "Informazioni, consigli e novità nel campo della ginecologia e dell'ostetricia",
  headerImage: "https://placeholder.pics/svg/1200x400/DEDEDE/555555/header%20blog",
  postsPerPage: 6,
  categoriesTitle: "Categorie",
  recentPostsTitle: "Articoli Recenti",
};

// Dati di fallback per i post del blog
const blogPostsFallbackData = [
  {
    _id: "post-1",
    title: "Prevenzione ginecologica: cosa è importante sapere",
    slug: { current: "prevenzione-ginecologica" },
    category: "Ginecologia",
    readTime: "5 min",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Contenuto completo dell'articolo sulla prevenzione ginecologica.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-2",
    title: "Gravidanza: il primo trimestre",
    slug: { current: "gravidanza-primo-trimestre" },
    category: "Ostetricia",
    readTime: "8 min",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Contenuto completo dell'articolo sul primo trimestre di gravidanza.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-3",
    title: "Affrontare la menopausa: una guida completa",
    slug: { current: "guida-menopausa" },
    category: "Menopausa",
    readTime: "6 min",
    body: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Contenuto completo dell'articolo sulla menopausa." }],
      },
    ],
  },
];

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
});

export async function getHomepage() {
  if (useFallbackData) {
    console.log("Utilizzando dati di fallback per la homepage");
    return homepageFallbackData;
  }

  try {
    return await client.fetch(homepageQuery);
  } catch (error) {
    console.error("Errore nel recupero dati homepage da Sanity:", error);
    return homepageFallbackData;
  }
}

export async function getBlogPage() {
  if (useFallbackData) {
    console.log("Utilizzando dati di fallback per la pagina del blog");
    return blogPageFallbackData;
  }

  try {
    return await client.fetch(blogPageQuery);
  } catch (error) {
    console.error("Errore nel recupero dati pagina blog da Sanity:", error);
    return blogPageFallbackData;
  }
}

export async function getAllBlogPosts() {
  if (useFallbackData) {
    console.log("Utilizzando dati di fallback per tutti i post del blog");
    return blogPostsFallbackData;
  }

  try {
    return await client.fetch(allBlogPostsQuery);
  } catch (error) {
    console.error("Errore nel recupero di tutti i post del blog da Sanity:", error);
    return blogPostsFallbackData;
  }
}

export async function getFeaturedBlogPosts(count = 3) {
  if (useFallbackData) {
    console.log("Utilizzando dati di fallback per i post in evidenza");
    return blogPostsFallbackData.slice(0, count);
  }

  try {
    return await client.fetch(featuredBlogPostsQuery, { to: Math.max(0, count - 1) });
  } catch (error) {
    console.error("Errore nel recupero dei post in evidenza da Sanity:", error);
    return blogPostsFallbackData.slice(0, count);
  }
}

export async function getBlogPostBySlug(slug: string) {
  if (!slug) {
    console.error("Slug non fornito nella chiamata a getBlogPostBySlug");
    return null;
  }

  if (useFallbackData) {
    console.log(`Utilizzando dati di fallback per il post con slug: ${slug}`);
    const post = blogPostsFallbackData.find((p) => p.slug.current === slug);
    return post || null;
  }

  try {
    const post = await client.fetch(blogPostBySlugQuery, { slug });

    if (!post) {
      console.warn(`Post con slug ${slug} non trovato nel CMS`);
      return null;
    }

    return post;
  } catch (error) {
    console.error(`Errore nel recupero del post con slug ${slug} da Sanity:`, error);
    // Ritorna null anziché un fallback arbitrario per permettere il redirect appropriato
    return null;
  }
}

// Servizi (collezione)
export async function getServices() {
  if (useFallbackData) {
    // Lascio ai componenti gestire i fallback se l'array è vuoto
    return [] as Array<{ title: string; description?: string; iconType?: string }>;
  }

  try {
    return await client.fetch(servicesQuery);
  } catch (error) {
    console.error("Errore nel recupero dei servizi da Sanity:", error);
    return [];
  }
}

// Informazioni di contatto (singolo documento)
export async function getContactInfo() {
  if (useFallbackData) {
    const c = homepageFallbackData.contactSection;
    return {
      address: c.address,
      phoneNumber: c.phoneNumber,
      email: c.email,
      mapEmbedUrl: c.mapEmbedUrl,
    };
  }

  try {
    return await client.fetch(contactInfoQuery);
  } catch (error) {
    console.error("Errore nel recupero di contact info da Sanity:", error);
    const c = homepageFallbackData.contactSection;
    return {
      address: c.address,
      phoneNumber: c.phoneNumber,
      email: c.email,
      mapEmbedUrl: c.mapEmbedUrl,
    };
  }
}
