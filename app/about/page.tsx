import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Building2, Stethoscope, ArrowRight } from "lucide-react"
import FloatingContact from "@/components/floating-contact"
// Add import for Breadcrumb
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "À Propos | Decora Sol - Spécialiste Planchers en Bois",
  description:
    "Découvrez Decora Sol, votre expert en installation de planchers en bois à Marrakech. Notre devise est la qualité pour tous vos projets de revêtement de sol.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "À Propos | Decora Sol - Spécialiste Planchers en Bois",
    description:
      "Découvrez Decora Sol, votre expert en installation de planchers en bois à Marrakech. Notre devise est la qualité pour tous vos projets de revêtement de sol.",
    url: "https://decorasol.ma/about",
    images: [
      {
        url: "/aboutimage.png",
        width: 800,
        height: 600,
        alt: "À Propos de Decora Sol - Installation Planchers Bois",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50dvh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="https://plus.unsplash.com/premium_photo-1661876059928-3083512ebd54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="À Propos de Decora Sol" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Content - Aligned to the left and positioned lower */}
        <div className="relative h-full flex items-end justify-start">
          <div className="text-left text-white p-4 md:p-12 pb-16 md:pb-24 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">À Propos de Decora Sol</h1>
            <p className="text-base md:text-xl">
              Spécialistes en installation de planchers en bois depuis plus de 5 ans.
            </p>
          </div>
        </div>
      </section>

      {/* Add Breadcrumb - only visible on mobile */}
      <div className="bg-gray-50 md:hidden">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ name: "À Propos", path: "/about" }]} />
        </div>
      </div>

      {/* Main About Content - Redesigned */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-primary font-medium">Notre Histoire</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-6">
                Passion pour les <span className="text-primary">Planchers en Bois</span>
              </h2>

              <div className="space-y-6 text-gray-600">
                <p>
                  Chez <strong className="text-primary">Decora Sol</strong>, nous sommes spécialisés dans l'installation
                  de tous types et formes de planchers en bois, intérieurs et extérieurs à Marrakech. Notre devise est
                  la qualité.
                </p>
                <p>
                  Fondée avec la passion du bois et l'expertise artisanale, notre entreprise s'est développée pour
                  devenir une référence dans l'installation de planchers en bois de qualité supérieure. Nous travaillons
                  avec les meilleurs matériaux pour garantir durabilité et esthétique.
                </p>
                <p>
                  Notre approche personnalisée et notre attention aux détails nous permettent de créer des sols qui non
                  seulement embellissent vos espaces, mais qui résistent également à l'épreuve du temps avec un
                  entretien minimal.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/favicon.jpg"
                  alt="À Propos de Decora Sol"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Our Specializations - Redesigned */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-primary font-medium">Nos Spécialisations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                Nos Types de <span className="text-primary">Planchers en Bois</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Residential Card */}
              <div className="group bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Planchers Intérieurs
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous offrons une vaste gamme de planchers intérieurs pour tous les goûts et budgets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Parquet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Stratifié</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Bois Massif</span>
                  </li>
                </ul>
              </div>

              {/* Hospitality Card */}
              <div className="group bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Planchers Extérieurs
                </h3>
                <p className="text-gray-600 mb-6">Des solutions durables et esthétiques pour vos espaces extérieurs.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Terrasses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Balcons</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Jardins</span>
                  </li>
                </ul>
              </div>

              {/* Medical Card */}
              <div className="group bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Rénovation & Entretien
                </h3>
                <p className="text-gray-600 mb-6">
                  Redonnez vie à vos planchers avec nos services de rénovation et d'entretien.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Ponçage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Vitrification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Réparation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process - Redesigned */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-primary font-medium">Notre Méthodologie</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                Notre Processus <span className="text-primary">d'Installation</span> en 4 Étapes
              </h2>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="group">
                  <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/20 h-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center text-xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        1
                      </div>
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mt-2 mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                        Évaluation
                      </h3>
                      <p className="text-gray-600">Analyse de l'espace et choix du bois</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group">
                  <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/20 h-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center text-xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        2
                      </div>
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mt-2 mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                        Préparation
                      </h3>
                      <p className="text-gray-600">Préparation du support et acclimatation</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group">
                  <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/20 h-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center text-xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        3
                      </div>
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mt-2 mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                        Installation
                      </h3>
                      <p className="text-gray-600">Pose professionnelle du plancher</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="group">
                  <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/20 h-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center text-xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        4
                      </div>
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mt-2 mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                        Finition
                      </h3>
                      <p className="text-gray-600">Ponçage, vitrification et nettoyage final</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-4">
              Prêt à Installer <span className="text-primary">Votre Plancher en Bois</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Que ce soit pour votre maison, votre commerce ou vos espaces extérieurs, notre équipe est prête à
              transformer vos sols avec des planchers en bois de qualité supérieure.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px] group">
                Contactez-Nous Aujourd'hui
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  )
}
