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
    name: "Fatima Benali",
    role: "Propriétaire",
    image: "t4.png",
    quote:
      "DECO DARI a complètement transformé notre maison. Leur expertise en design d'intérieur a créé un espace à la fois élégant et fonctionnel.",
    rating: 5.0,
    bgColor: "bg-primary-lightest",
  },
  {
    id: 2,
    name: "Mohammed El Amrani",
    role: "Propriétaire d'Entreprise",
    image: "t2.png",
    quote:
      "L'équipe de DECO DARI a conçu notre espace de bureau avec un parfait équilibre entre esthétique et fonctionnalité. Un travail remarquable!",
    rating: 5.0,
    bgColor: "bg-primary-light",
  },
  {
    id: 3,
    name: "Amina Tazi",
    role: "Propriétaire d'Appartement",
    image: "t3.png",
    quote:
      "Je suis impressionnée par la capacité de DECO DARI à maximiser notre petit espace tout en créant une ambiance luxueuse et accueillante.",
    rating: 5.0,
    bgColor: "bg-primary-lighter",
  },
  {
    id: 4,
    name: "Youssef Alaoui",
    role: "Architecte",
    image: "t1.png",
    quote:
      "En tant qu'architecte, j'apprécie le souci du détail et la créativité que DECO DARI apporte à chaque projet. Une collaboration exceptionnelle.",
    rating: 5.0,
    bgColor: "bg-primary-lightest",
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
          subtitle="Découvrez ce que nos clients disent de leur expérience avec DECO DARI."
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
              className="w-4 h-4 md:w-5 md:h-5 text-black"
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
