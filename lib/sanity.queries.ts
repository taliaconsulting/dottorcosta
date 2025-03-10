import { groq } from 'next-sanity'

// Query per i dati della homepage
export const homepageQuery = groq`
*[_type == "homepage"][0] {
  hero {
    headline,
    specialties,
    locationText,
    locationLink,
    phoneNumber,
    ctaButtonText,
    "backgroundImage": backgroundImage.asset->url
  },
  servicesSection {
    title,
    services[] {
      title,
      iconType
    }
  },
  aboutSection {
    title,
    description,
    "doctorImage": doctorImage.asset->url,
    credentials[] {
      title,
      description,
      iconType
    },
    learnMoreButtonText,
    consultationButtonText
  },
  certificationsSection {
    title,
    subtitle,
    certifications[] {
      name,
      "logo": logo.asset->url
    },
    footerText
  },
  blogPreviewSection {
    title,
    subtitle,
    viewAllButtonText,
    featuredPostsCount
  },
  contactSection {
    title,
    subtitle,
    address,
    phoneNumber,
    email,
    formSubmitButtonText
  }
}`

// Query per la pagina del blog
export const blogPageQuery = groq`
*[_type == "blogPage"][0] {
  title,
  description,
  "headerImage": headerImage.asset->url,
  postsPerPage,
  categoriesTitle,
  recentPostsTitle
}`

// Query per ottenere tutti i post del blog
export const allBlogPostsQuery = groq`
*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  "mainImage": mainImage.asset->url,
  publishedAt,
  readTime
}`

// Query per ottenere i post in evidenza per la homepage
export const featuredBlogPostsQuery = groq`
*[_type == "blogPost"] | order(publishedAt desc)[0..2] {
  _id,
  title,
  slug,
  excerpt,
  category,
  "mainImage": mainImage.asset->url,
  publishedAt,
  readTime
}`

// Query per un singolo post del blog tramite slug
export const blogPostBySlugQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  category,
  "mainImage": mainImage.asset->url,
  publishedAt,
  readTime,
  body
}`
