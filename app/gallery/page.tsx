import type { Metadata } from "next"
import GalleryHero from "@/components/gallery-hero"
import SectionTitle from "@/components/section-title"
import FloatingContact from "@/components/floating-contact"
import Breadcrumb from "@/components/breadcrumb"
import GalleryTabs from "@/components/gallery-tabs"

export const metadata: Metadata = {
  title: "Galerie | Deco Dari Ameublement",
  description:
    "Découvrez nos transformations spectaculaires d'intérieurs résidentiels, hôteliers et médicaux à Marrakech. Avant/Après de nos projets de design.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Galerie | Deco Dari Ameublement",
    description:
      "Découvrez nos transformations spectaculaires d'intérieurs résidentiels, hôteliers et médicaux à Marrakech.",
    url: "https://decodariambl.ma/gallery",
    images: [
      {
        url: "/aboutimage.png",
        width: 1200,
        height: 630,
        alt: "Galerie Deco Dari - Avant/Après",
      },
    ],
  },
}

// Sample before/after comparison data
const beforeAfterItems = [
  {
    id: 1,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
  {
    id: 2,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
  {
    id: 3,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
  {
    id: 4,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
  {
    id: 5,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
  {
    id: 6,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHero />

      {/* Add Breadcrumb - only visible on mobile */}
      <div className="bg-gray-50 md:hidden">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ name: "Galerie", path: "/gallery" }]} />
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Notre Galerie" subtitle="Découvrez nos réalisations et projets de design d'intérieur." />

          {/* Gallery Tabs */}
          <div className="mt-12">
            <GalleryTabs beforeAfterItems={beforeAfterItems} />
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  )
}
