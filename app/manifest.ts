import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deco Dari Ameublement",
    short_name: "Deco Dari",
    description: "Design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#41879e",
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
