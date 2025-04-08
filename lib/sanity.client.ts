import 'server-only'

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import {
  homepageQuery,
  blogPageQuery,
  allBlogPostsQuery,
  featuredBlogPostsQuery,
  blogPostBySlugQuery
} from './sanity.queries'

// Controllo se deve essere usato il fallback
const useFallbackData = process.env.USE_SANITY_FALLBACK === 'true'

// Dati di fallback per la homepage
const homepageFallbackData = {
  hero: {
    headline: 'Dr. Costa - Specialista in Ginecologia',
    specialties: ['Ginecologia', 'Ostetricia', 'Medicina Estetica'],
    locationText: 'Via Roma 123, Milano',
    locationLink: 'https://goo.gl/maps/example',
    phoneNumber: '+39 123 456 7890',
    ctaButtonText: 'Prenota una visita',
    backgroundImage: 'https://placeholder.pics/svg/1200x600/DEDEDE/555555/immagine%20hero'
  },
  servicesSection: {
    title: 'I Nostri Servizi',
    services: [
      { title: 'Ginecologia', iconType: 'female' },
      { title: 'Ostetricia', iconType: 'baby' },
      { title: 'Medicina Estetica', iconType: 'beauty' }
    ]
  },
  aboutSection: {
    title: 'Chi Sono',
    description: 'Medico specializzato con oltre 15 anni di esperienza in ginecologia e ostetricia. La mia missione è fornire cure di alta qualità e personalizzate per ogni paziente.',
    credentials: [
      { title: 'Specializzazione', description: 'Università di Milano', iconType: 'graduation' },
      { title: 'Esperienza', description: '15+ anni', iconType: 'calendar' },
      { title: 'Pubblicazioni', description: '20+ articoli scientifici', iconType: 'document' }
    ],
    consultationButtonText: 'Prenota una consulenza'
  },
  certificationsSection: {
    title: 'Certificazioni',
    subtitle: 'Riconosciuto dalle principali istituzioni mediche',
    certifications: [
      { name: 'Certificazione 1', logo: 'https://placeholder.pics/svg/200x100/DEDEDE/555555/logo%201' },
      { name: 'Certificazione 2', logo: 'https://placeholder.pics/svg/200x100/DEDEDE/555555/logo%202' },
      { name: 'Certificazione 3', logo: 'https://placeholder.pics/svg/200x100/DEDEDE/555555/logo%203' }
    ],
    footerText: 'Membro di associazioni professionali di primo piano'
  },
  blogPreviewSection: {
    title: 'Blog e Articoli',
    subtitle: 'Informazioni utili e aggiornamenti nel campo della ginecologia',
    viewAllButtonText: 'Vedi tutti gli articoli',
    featuredPostsCount: 3
  },
  contactSection: {
    title: 'Contattami',
    subtitle: 'Sono disponibile per rispondere alle tue domande',
    address: 'Via Roma 123, Milano',
    phoneNumber: '+39 123 456 7890',
    email: 'info@drcosta.it',
    formSubmitButtonText: 'Invia messaggio'
  }
}

// Dati di fallback per la pagina del blog
const blogPageFallbackData = {
  title: 'Blog e Articoli',
  description: 'Informazioni, consigli e novità nel campo della ginecologia e dell\'ostetricia',
  headerImage: 'https://placeholder.pics/svg/1200x400/DEDEDE/555555/header%20blog',
  postsPerPage: 6,
  categoriesTitle: 'Categorie',
  recentPostsTitle: 'Articoli Recenti'
}

// Dati di fallback per i post del blog
const blogPostsFallbackData = [
  {
    _id: 'post-1',
    title: 'Prevenzione ginecologica: cosa è importante sapere',
    slug: { current: 'prevenzione-ginecologica' },
    category: 'Ginecologia',
    readTime: '5 min',
    body: [{ _type: 'block', children: [{ _type: 'span', text: 'Contenuto completo dell\'articolo sulla prevenzione ginecologica.' }] }]
  },
  {
    _id: 'post-2',
    title: 'Gravidanza: il primo trimestre',
    slug: { current: 'gravidanza-primo-trimestre' },
    category: 'Ostetricia',
    readTime: '8 min',
    body: [{ _type: 'block', children: [{ _type: 'span', text: 'Contenuto completo dell\'articolo sul primo trimestre di gravidanza.' }] }]
  },
  {
    _id: 'post-3',
    title: 'Affrontare la menopausa: una guida completa',
    slug: { current: 'guida-menopausa' },
    category: 'Menopausa',
    readTime: '6 min',
    body: [{ _type: 'block', children: [{ _type: 'span', text: 'Contenuto completo dell\'articolo sulla menopausa.' }] }]
  }
]

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
})

export async function getHomepage() {
  if (useFallbackData) {
    console.log('Utilizzando dati di fallback per la homepage')
    return homepageFallbackData
  }
  
  try {
    return await client.fetch(homepageQuery)
  } catch (error) {
    console.error('Errore nel recupero dati homepage da Sanity:', error)
    return homepageFallbackData
  }
}

export async function getBlogPage() {
  if (useFallbackData) {
    console.log('Utilizzando dati di fallback per la pagina del blog')
    return blogPageFallbackData
  }
  
  try {
    return await client.fetch(blogPageQuery)
  } catch (error) {
    console.error('Errore nel recupero dati pagina blog da Sanity:', error)
    return blogPageFallbackData
  }
}

export async function getAllBlogPosts() {
  if (useFallbackData) {
    console.log('Utilizzando dati di fallback per tutti i post del blog')
    return blogPostsFallbackData
  }
  
  try {
    return await client.fetch(allBlogPostsQuery)
  } catch (error) {
    console.error('Errore nel recupero di tutti i post del blog da Sanity:', error)
    return blogPostsFallbackData
  }
}

export async function getFeaturedBlogPosts() {
  if (useFallbackData) {
    console.log('Utilizzando dati di fallback per i post in evidenza')
    return blogPostsFallbackData.slice(0, 3)
  }
  
  try {
    return await client.fetch(featuredBlogPostsQuery)
  } catch (error) {
    console.error('Errore nel recupero dei post in evidenza da Sanity:', error)
    return blogPostsFallbackData.slice(0, 3)
  }
}

export async function getBlogPostBySlug(slug: string) {
  if (!slug) {
    console.error("Slug non fornito nella chiamata a getBlogPostBySlug");
    return null;
  }
  
  if (useFallbackData) {
    console.log(`Utilizzando dati di fallback per il post con slug: ${slug}`)
    const post = blogPostsFallbackData.find(p => p.slug.current === slug)
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
    console.error(`Errore nel recupero del post con slug ${slug} da Sanity:`, error)
    // Ritorna null anziché un fallback arbitrario per permettere il redirect appropriato
    return null;
  }
}
