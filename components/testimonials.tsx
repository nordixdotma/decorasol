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
    bgColor: "bg-primary-lightest",
  },
  {
    id: 2,
    name: "Fatima El Amrani",
    role: "Propriétaire d'Appartement",
    image: "t2.png",
    quote:
      "Installation parfaite de planchers en bois dans toute notre maison. L'équipe de Decora Sol est ponctuelle, soigneuse et le résultat dépasse nos attentes. Excellent rapport qualité-prix.",
    rating: 5.0,
    bgColor: "bg-primary-light",
  },
  {
    id: 3,
    name: "Youssef Tazi",
    role: "Architecte",
    image: "t3.png",
    quote:
      "En tant qu'architecte, j'apprécie la qualité du travail de Decora Sol. Leurs planchers en bois apportent une vraie valeur ajoutée à mes projets. Une équipe de confiance.",
    rating: 5.0,
    bgColor: "bg-primary-lighter",
  },
  {
    id: 4,
    name: "Amina Alaoui",
    role: "Propriétaire de Restaurant",
    image: "t4.png",
    quote:
      "Pour notre restaurant, nous voulions un sol en bois chaleureux et résistant. Decora Sol a su répondre parfaitement à nos besoins avec un parquet adapté au passage intensif.",
    rating: 5.0,
    bgColor: "bg-primary-lightest",
  },
  {
    id: 5,
    name: "Mohamed Chakir",
    role: "Propriétaire de Riad",
    image: "t1.png",
    quote:
      "Rénovation complète des sols de notre riad avec des planchers en bois traditionnels. Le savoir-faire de Decora Sol a préservé l'authenticité tout en apportant une touche moderne.",
    rating: 5.0,
    bgColor: "bg-primary-light",
  },
  {
    id: 6,
    name: "Khadija Bennani",
    role: "Décoratrice d'Intérieur",
    image: "t2.png",
    quote:
      "Je collabore régulièrement avec Decora Sol pour mes projets. Leur expertise en planchers bois et leur respect des délais en font un partenaire de choix pour mes clients.",
    rating: 5.0,
    bgColor: "bg-primary-lighter",
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
    <div className="relative h-full mt-10 mb-4">
      {/* Card */}
      <div className={`${testimonial.bgColor} rounded-2xl p-5 md:p-6 pt-14 md:pt-16 h-full flex flex-col shadow-sm`}>
        {/* Profile Image - positioned at the top of the card */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="rounded-full border-4 border-white overflow-hidden h-16 w-16 md:h-20 md:w-20 shadow-md">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 text-center text-sm md:text-base mb-4 md:mb-6 flex-grow">{testimonial.quote}</p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-3 md:my-4"></div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
            <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-1 font-semibold text-sm md:text-base">{testimonial.rating.toFixed(1)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
