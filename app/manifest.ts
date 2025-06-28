import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Decora Sol",
    short_name: "Decora Sol",
    description: "Wood flooring solutions for residential and commercial spaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8b4513",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
