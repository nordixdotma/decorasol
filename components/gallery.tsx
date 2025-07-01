"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionTitle from "./section-title"
import BeforeAfterSlider from "./before-after-slider"

// Sample before/after comparison data
const beforeAfterItems = [
  {
    id: 1,
    beforeImage: "/4.avif",
    afterImage: "/5.avif",
    title: "Transformation Salon Moderne",
    description: "Parquet chêne massif avec finition naturelle",
  },
  {
    id: 2,
    beforeImage: "/1.avif",
    afterImage: "/2.avif",
    title: "Rénovation Chambre Principale",
    description: "Plancher stratifié effet bois authentique",
  },
  {
    id: 3,
    beforeImage: "/3.avif",
    afterImage: "/4.avif",
    title: "Aménagement Terrasse Extérieure",
    description: "Bois composite résistant aux intempéries",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Avant / Après"
          subtitle="Découvrez les transformations spectaculaires que nous avons réalisées pour nos clients."
        />

        <div className="mt-12 mb-16">
          <BeforeAfterSlider items={beforeAfterItems} />
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 border border-primary text-sm sm:text-base font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white transition-colors duration-200 corner-fill-hover"
          >
            Voir Plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
