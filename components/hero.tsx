"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    image: "/1.avif",
    title: "Installation de Planchers en Bois",
    description: "Spécialisé dans tous types et formes de planchers, intérieurs et extérieurs",
  },
  {
    image: "/2.avif",
    title: "Qualité Professionnelle",
    description: "Notre devise est la qualité - Installation précise et durable",
  },
  {
    image: "/3.avif",
    title: "Expertise en Parquet",
    description: "Transformez vos espaces avec nos planchers en bois premium",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title || "Installation de planchers en bois par Decora Sol à Marrakech"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].description}</p>

            {/* Buttons Container - Full width on mobile, side by side on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Contact Button */}
              <Link href="/" className="w-full sm:w-auto">
                <Button className="group relative overflow-hidden rounded-md bg-white text-primary hover:bg-primary hover:text-white transition-all duration-700 px-8 py-6 text-lg font-medium shadow-lg w-full sm:w-auto">
                  <span className="relative z-10">Contactez-Nous</span>
                  <span className="absolute bottom-0 left-0 h-full w-0 bg-primary transition-all duration-700 group-hover:w-full"></span>
                </Button>
              </Link>

              {/* Phone Button with Blue Transparent Background and Shiny Effect */}
              <a href="tel:+212666865356" className="w-full sm:w-auto">
                <Button className="group relative overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-sm text-white border border-blue-400/50 hover:bg-blue-600/40 hover:border-blue-300/70 transition-all duration-700 px-8 py-6 text-lg font-medium shadow-lg w-full sm:w-auto shiny-button">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    +212 666-865356
                  </span>
                  {/* Shiny overlay effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
