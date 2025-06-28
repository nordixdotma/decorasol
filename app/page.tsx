import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Process from "@/components/process"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import FloatingContact from "@/components/floating-contact"

export const metadata: Metadata = {
  title: "Decora Sol | Installation de Planchers en Bois à Marrakech",
  description:
    "Transformez vos espaces avec Decora Sol, spécialisé dans l'installation de tous types et formes de planchers en bois, intérieurs et extérieurs à Marrakech.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
      <FloatingContact />
    </main>
  )
}
