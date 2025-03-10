import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.sanity.io',  // Dominio di Sanity per le immagini
      'placeholder.pics'  // Dominio per le immagini di fallback
    ],
  },
};

export default nextConfig;
