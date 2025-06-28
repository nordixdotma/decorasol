import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import SectionTitle from "./section-title"
import { ArrowRight, Award, Users, Clock, Star } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="À Propos"
        />

        <div className="mt-12 md:mt-20">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Text Block */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                

                <div className="space-y-4 text-gray-600 text-sm md:text-lg leading-relaxed">
                  <p>
                    Chez <strong className="text-primary">Decora Sol</strong>, nous sommes spécialisés dans
                    l'installation de planchers en bois de haute qualité pour vos espaces intérieurs et extérieurs.
                  </p>
                  <p>
                    Notre devise est la qualité. Nous utilisons les meilleurs matériaux et techniques d'installation
                    pour garantir un résultat durable et esthétique qui transformera votre espace.
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-gray-900">100%</span>
                  </div>
                  <p className="text-sm text-gray-600">Qualité Garantie</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-gray-900">50+</span>
                  </div>
                  <p className="text-sm text-gray-600">Clients Satisfaits</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-gray-900">5+</span>
                  </div>
                  <p className="text-sm text-gray-600">Ans d'Expérience</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-gray-900">5.0</span>
                  </div>
                  <p className="text-sm text-gray-600">Note Moyenne</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  
                </div>

                <div className="group">
                  
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="/">
                  <Button className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                    <span>Découvrir Notre Histoire</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative group">
                  {/* Background decorative shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="/favicon.png"
                      alt="Installation de planchers en bois par Decora Sol à Marrakech"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-900">Disponible</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating testimonial card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-xs hidden md:block">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">DS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Decora Sol</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    "Notre devise est la qualité - Installation précise et durable"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
