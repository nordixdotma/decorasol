"use client"

import { useRef } from "react"
import Image from "next/image"
import SectionTitle from "./section-title"

// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    role: "Propriétaire de Villa",
    image: "t1.png",
    quote:
      "Decora Sol a transformé notre salon avec un magnifique parquet en chêne. Le travail est impeccable et l'équipe très professionnelle. Je recommande vivement leurs services.",
    rating: 5.0,
    bgColor: "bg-primary/5", // Very light primary
  },
  {
    id: 2,
    name: "Fatima El Amrani",
    role: "Propriétaire d'Appartement",
    image: "t2.png",
    quote:
      "Installation parfaite de planchers en bois dans toute notre maison. L'équipe de Decora Sol est ponctuelle, soigneuse et le résultat dépasse nos attentes. Excellent rapport qualité-prix.",
    rating: 5.0,
    bgColor: "bg-primary/10", // Light primary
  },
  {
    id: 3,
    name: "Youssef Tazi",
    role: "Architecte",
    image: "t3.png",
    quote:
      "En tant qu'architecte, j'apprécie la qualité du travail de Decora Sol. Leurs planchers en bois apportent une vraie valeur ajoutée à mes projets. Une équipe de confiance.",
    rating: 5.0,
    bgColor: "bg-primary/8", // Medium light primary
  },
  {
    id: 4,
    name: "Amina Alaoui",
    role: "Propriétaire de Restaurant",
    image: "t4.png",
    quote:
      "Pour notre restaurant, nous voulions un sol en bois chaleureux et résistant. Decora Sol a su répondre parfaitement à nos besoins avec un parquet adapté au passage intensif.",
    rating: 5.0,
    bgColor: "bg-primary/6", // Light primary
  },
  {
    id: 5,
    name: "Mohamed Chakir",
    role: "Propriétaire de Riad",
    image: "t1.png",
    quote:
      "Rénovation complète des sols de notre riad avec des planchers en bois traditionnels. Le savoir-faire de Decora Sol a préservé l'authenticité tout en apportant une touche moderne.",
    rating: 5.0,
    bgColor: "bg-primary/12", // Medium primary
  },
  {
    id: 6,
    name: "Khadija Bennani",
    role: "Décoratrice d'Intérieur",
    image: "t2.png",
    quote:
      "Je collabore régulièrement avec Decora Sol pour mes projets. Leur expertise en planchers bois et leur respect des délais en font un partenaire de choix pour mes clients.",
    rating: 5.0,
    bgColor: "bg-primary/7", // Light primary
  },
]

import type { Swiper as SwiperClass } from "swiper"

export default function Testimonials() {
  const swiperRef = useRef<SwiperClass | null>(null)

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Témoignages"
          subtitle="Découvrez ce que nos clients disent de leur expérience avec Decora Sol et nos installations de planchers en bois."
        />

        <div className="mt-12 md:mt-16 mb-8">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="testimonial-swiper pb-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="pb-4">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  quote: string
  rating: number
  bgColor: string
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative h-full">
      {/* Card */}
      <div
        className={`${testimonial.bgColor} rounded-2xl p-6 md:p-8 h-full flex flex-col shadow-lg border border-primary/20 relative overflow-hidden`}
      >
        {/* Profile Image - positioned at top right with rounded bottom-left corner */}
        <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden">
          <div className="w-full h-full relative" style={{ borderBottomLeftRadius: "1rem" }}>
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
              style={{ borderBottomLeftRadius: "1rem" }}
            />
          </div>
        </div>

        {/* Brand Logo - top left */}
        <div className="flex items-center mb-6">
          <Image src="/favicon.jpg" alt="Decora Sol" width={32} height={32} className="rounded-full mr-3" />
          <span className="font-bold text-lg text-gray-800">Decora Sol</span>
        </div>

        {/* Quote Icon */}
        <div className="mb-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow leading-relaxed pr-6">{testimonial.quote}</p>

        {/* Footer with name and role */}
        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-bold text-gray-900 text-base md:text-lg">{testimonial.name}</h4>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
