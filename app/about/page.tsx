import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Building2, Stethoscope, ArrowRight } from "lucide-react"
import FloatingContact from "@/components/floating-contact"
// Add import for Breadcrumb
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "À Propos | Deco Dari Ameublement",
  description:
    "Découvrez notre histoire, notre expertise et notre processus de design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "À Propos | Deco Dari Ameublement",
    description:
      "Découvrez notre histoire, notre expertise et notre processus de design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech.",
    url: "https://decodariambl.ma/about",
    images: [
      {
        url: "/aboutimage.png",
        width: 800,
        height: 600,
        alt: "À Propos de Deco Dari Ameublement",
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
          <Image
            src="/2.jpg"
            alt="À Propos de Deco Dari Ameublement"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Content - Aligned to the left and positioned lower */}
        <div className="relative h-full flex items-end justify-start">
          <div className="text-left text-white p-4 md:p-12 pb-16 md:pb-24 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">À Propos de Nous</h1>
            <p className="text-base md:text-xl">Experts en design d'intérieur résidentiel et commercial.</p>
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
                Passion pour le <span className="text-primary">Design d'Intérieur</span>
              </h2>

              <div className="space-y-6 text-gray-600">
                <p>
                  Chez Deco dari ameublement, nous sommes passionnés par la création d'espaces qui allient esthétique et
                  fonctionnalité. Notre équipe de designers et d'artisans qualifiés travaille en étroite collaboration
                  avec nos clients pour transformer leur vision en réalité.
                </p>
                <p>
                  Fondée avec la conviction que chaque espace a un potentiel unique, notre entreprise s'est développée
                  pour devenir un leader dans la conception d'intérieurs personnalisés pour les résidences, les hôtels
                  et les établissements médicaux au Maroc.
                </p>
                <p>
                  Notre approche collaborative et notre attention aux détails nous permettent de créer des espaces qui
                  non seulement impressionnent visuellement, mais qui répondent également parfaitement aux besoins
                  fonctionnels de nos clients.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/aboutimage.png"
                  alt="À Propos de Deco dari ameublement"
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
                Expertise dans <span className="text-primary">Divers Secteurs</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Residential Card */}
              <div className="group bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Résidentiel
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous transformons les maisons en foyers, en créant des espaces personnalisés qui reflètent la
                  personnalité et le style de vie de nos clients.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Appartements et villas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Espaces de vie sur mesure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Rénovations complètes</span>
                  </li>
                </ul>
              </div>

              {/* Hospitality Card */}
              <div className="group bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Hôtellerie
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous créons des expériences mémorables pour les clients d'hôtels grâce à des designs d'intérieur
                  captivants et fonctionnels.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Lobbies et espaces communs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Chambres et suites</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Restaurants et bars</span>
                  </li>
                </ul>
              </div>

              {/* Medical Card */}
              <div className="group bg-white rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  Médical
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous concevons des établissements médicaux qui favorisent la guérison et le bien-être avec un
                  équilibre parfait.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Laboratoires médicaux</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Cliniques et cabinets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Espaces d'accueil des patients</span>
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
                Un Processus <span className="text-primary">Éprouvé</span> en 4 Étapes
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
                        Consultation
                      </h3>
                      <p className="text-gray-600">
                        Nous commençons par comprendre vos besoins, préférences et budget. Cette étape cruciale nous
                        permet de définir clairement les objectifs du projet.
                      </p>
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
                        Étude et Conception
                      </h3>
                      <p className="text-gray-600">
                        Notre équipe analyse l'espace et développe des concepts de design. Nous créons des plans
                        détaillés pour visualiser votre projet.
                      </p>
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
                        Modélisation 3D
                      </h3>
                      <p className="text-gray-600">
                        Nous créons des modèles 3D détaillés de votre espace, vous permettant de visualiser le résultat
                        final avant le début des travaux.
                      </p>
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
                        Exécution
                      </h3>
                      <p className="text-gray-600">
                        Notre équipe d'artisans qualifiés met en œuvre le design avec une attention méticuleuse aux
                        détails, transformant les plans en réalité.
                      </p>
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
              Prêt à Transformer <span className="text-primary">Votre Espace</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Que vous ayez besoin d'un design d'intérieur pour votre résidence, votre hôtel ou votre établissement
              médical, notre équipe est prête à donner vie à votre vision.
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
