"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryModalProps {
  images: {
    src: string
    alt: string
  }[]
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
}

export default function GalleryModal({ images, initialIndex = 0, isOpen, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Reset current index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, images.length, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col justify-center items-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        aria-label="Fermer la galerie"
      >
        <X size={32} />
      </button>

      {/* Main image container */}
      <div className="relative w-full h-[calc(100vh-180px)] flex items-center justify-center">
        <div className="relative w-full h-full max-w-5xl max-h-full">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 md:left-8 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Image précédente"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 md:right-8 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Image suivante"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="w-full max-w-5xl mt-4 overflow-x-auto hide-scrollbar">
        <div className="flex space-x-2 px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative border-2 transition-all ${
                index === currentIndex ? "border-primary" : "border-transparent hover:border-white/50"
              }`}
              aria-label={`Voir image ${index + 1}`}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
