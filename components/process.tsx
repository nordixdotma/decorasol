"use client"

import { useRef } from "react"
import { CheckCircle, PenTool, Lightbulb, CuboidIcon as Cube } from "lucide-react"
import Image from "next/image"
import SectionTitle from "./section-title"

// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const processItems = [
  {
    icon: <Lightbulb size={40} />,
    title: "Consultation",
    description:
      "Nous commençons par une consultation approfondie pour comprendre votre vision, vos besoins et votre budget.",
    step: "01",
    bgImage: "/p1.png",
  },
  {
    icon: <PenTool size={40} />,
    title: "Étude et Conception",
    description: "Nos designers analysent l'espace et créent des plans détaillés basés sur vos exigences.",
    step: "02",
    bgImage: "/p2.png",
  },
  {
    icon: <Cube size={40} />,
    title: "Modélisation 3D",
    description:
      "Nous créons des visualisations 3D détaillées pour vous permettre de voir le résultat final avant les travaux.",
    step: "03",
    bgImage: "/p3.png",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Exécution",
    description: "Notre équipe qualifiée met en œuvre le design avec une attention méticuleuse aux détails.",
    step: "04",
    bgImage: "/p4.png",
  },
]

import type { Swiper as SwiperType } from "swiper"

export default function Process() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section id="process" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Notre Processus"
          subtitle="Notre méthodologie éprouvée garantit des résultats exceptionnels pour chaque projet, qu'il s'agisse de résidences, d'hôtels ou d'établissements médicaux."
        />

        <div className="mt-16 mb-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="process-swiper pb-8"
          >
            {processItems.map((item, index) => (
              <SwiperSlide key={index} className="pb-4">
                <ProcessCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  step={item.step}
                  bgImage={item.bgImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

type ProcessCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  step: string
  bgImage: string
}

function ProcessCard({ icon, title, description, step, bgImage }: ProcessCardProps) {
  return (
    <div className="relative h-full">
      {/* Card */}
      <div className="relative w-full h-[300px] rounded-lg shadow-md overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image src={bgImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>

        {/* Full overlay with gradient from bottom to top */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30"></div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          <div className="flex justify-between items-start mb-6">
            {/* Icon with background circle */}
            <div className="bg-white rounded-full p-2 shadow-md">
              <div className="text-primary">{icon}</div>
            </div>

            {/* Step number with enhanced visibility */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-4xl font-bold text-white">{step}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </div>
  )
}
