"use client"

import { useState, useEffect, useRef } from "react"
import TypingEffect from "@/components/typing-effect"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const typingWords = ["Passion", "Excellence", "Innovation", "Expertise", "Qualité"]

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              À Propos de Decora Sol
            </h2>
            <div className="text-gray-600">
              <p
                className={`mb-6 text-sm md:text-base leading-relaxed text-justify transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Decora Sol est une entreprise spécialisée dans l'installation de planchers en bois de haute qualité
                basée à Marrakech, offrant des solutions complètes pour tous types d'espaces intérieurs et extérieurs à
                travers le Maroc.
              </p>
              <p
                className={`mb-6 text-sm md:text-base leading-relaxed text-justify transition-all duration-1000 ease-out delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Notre équipe expérimentée transforme vos espaces avec des planchers en bois authentiques qui allient
                l'artisanat traditionnel marocain aux techniques modernes d'installation, garantissant un résultat
                durable et esthétique.
              </p>
              <p
                className={`text-sm md:text-base leading-relaxed text-justify transition-all duration-1000 ease-out delay-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                De la consultation initiale à l'entretien continu, nous fournissons des services complets pour maintenir
                la beauté et la durabilité de vos planchers en bois année après année.
              </p>
            </div>

            <div
              className={`mt-8 text-lg md:text-xl font-semibold transition-all duration-1000 ease-out delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-gray-800">Créé avec </span>
              <TypingEffect
                strings={typingWords}
                typingSpeed={100}
                deletingSpeed={80}
                delayBetweenStrings={1500}
                className="text-primary"
              />
            </div>

            <div
              className={`h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full mt-8 transition-all duration-1000 ease-out delay-800 ${
                isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          <div
            className={`md:col-span-2 aspect-square bg-gray-900 rounded-lg overflow-hidden relative transition-all duration-1200 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
          >
            <Image
              src="/favicon.jpg"
              alt="Équipe Decora Sol - Installation Planchers Bois"
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />

            <div
              className={`absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/40 rounded-full transition-all duration-1000 ease-out delay-1000 ${
                isVisible ? "opacity-30 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
              }`}
            />
            <div
              className={`absolute -bottom-4 -right-4 w-12 h-12 border-2 border-primary/40 rounded-full transition-all duration-1000 ease-out delay-1200 ${
                isVisible ? "opacity-30 scale-100 rotate-0" : "opacity-0 scale-50 rotate-45"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
