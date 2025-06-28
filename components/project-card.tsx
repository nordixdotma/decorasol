"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import GalleryModal from "./gallery-modal"

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectCardProps {
  title: string
  coverImage: string
  images: ProjectImage[]
  category: string
}

export default function ProjectCard({ title, coverImage, images, category }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-96 relative"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Cover Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
          <span className="inline-block bg-primary px-3 py-1 text-xs rounded-md mb-3">{category}</span>
          <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>

          {/* CTA Button */}
          <button className="px-4 py-2 bg-white text-primary rounded-md font-medium text-sm flex items-center transition-transform group-hover:scale-105">
            Voir le projet
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal images={images} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
