import { groq } from "next-sanity";

// Query per i dati della homepage
export const homepageQuery = groq`
*[_type == "homepage"][0] {
  hero {
    headline,
    specialties,
    locationText,
    ctaButtonText,
    "backgroundImage": backgroundImage.asset->url,
    "backgroundVideo": backgroundVideo.asset->url,
    useVideo
  },
  servicesSection {
    title,
    subtitle,
    services[] {
      title,
      description
    }
  },
  aboutSection {
    title,
    description,
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
    mapEmbedUrl
  }
}`;

// Query per la pagina del blog
export const blogPageQuery = groq`
*[_type == "blogPage"][0] {
  title,
  description,
  "headerImage": headerImage.asset->url,
  postsPerPage,
  categoriesTitle,
  recentPostsTitle
}`;

// Query per ottenere tutti i post del blog
export const allBlogPostsQuery = groq`
*[_type == "blogPost"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  readTime
}`;

// Query per ottenere i post in evidenza per la homepage
export const featuredBlogPostsQuery = groq`
*[_type == "blogPost"] | order(publishedAt desc)[0..$to] {
  _id,
  title,
  slug,
  excerpt,
  category,
  "mainImage": mainImage.asset->url,
  publishedAt,
  readTime
}`;

// Query per un singolo post del blog tramite slug
export const blogPostBySlugQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  readTime,
  body[] {
    ...,
    _type == "image" => {
      ...,
      "asset": {
        "_ref": asset._ref,
        "url": asset->url
      }
    },
    markDefs[] {
      ...,
      _type == "link" => {
        ...,
      },
      _type == "textEffect" => {
        ...,
      }
    }
  }
}`;

// Collezione Servizi
export const servicesQuery = groq`
*[_type == "service"] | order(order asc, _createdAt asc) {
  title,
  description,
  iconType
}`;

// Informazioni di contatto (singolo documento)
export const contactInfoQuery = groq`
*[_type == "contactInfo"][0] {
  address,
  phoneNumber,
  email,
  mapEmbedUrl
}`;
