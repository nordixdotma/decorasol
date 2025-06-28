"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterSliderProps {
  items: {
    id: number
    beforeImage: string
    afterImage: string
    title?: string
    description?: string
  }[]
}

export default function BeforeAfterSlider({ items }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    // Reset slider position when changing images
    setSliderPosition(50)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    // Reset slider position when changing images
    setSliderPosition(50)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const currentItem = items[currentIndex]

  // Update CSS variable when slider position changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--position", `${sliderPosition}%`)
    }
  }, [sliderPosition])

  // Add a check to ensure items exists and has at least one element
  if (!items || items.length === 0) {
    return <div className="text-center p-4">No comparison images available</div>
  }

  return (
    <div className="relative w-full">
      {/* Image container */}
      <div
        ref={containerRef}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg"
        style={{ "--position": `${sliderPosition}%` } as React.CSSProperties}
      >
        {/* After image (full width) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={currentItem.afterImage || "/placeholder.svg"}
            alt="After"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Before image (clipped by position variable) */}
        <div className="absolute inset-0 h-full overflow-hidden" style={{ width: "var(--position)" }}>
          <Image
            src={currentItem.beforeImage || "/placeholder.svg"}
            alt="Before"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Slider input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          aria-label="Adjust before/after view"
        />

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
          style={{ left: "var(--position)", transform: "translateX(-50%)" }}
        ></div>

        {/* Slider button */}
        <div
          className="absolute top-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center pointer-events-none shadow-md"
          style={{ left: "var(--position)", transform: "translate(-50%, -50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            fill="currentColor"
            className="text-primary"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="128"
              y1="40"
              x2="128"
              y2="216"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="96"
              y1="128"
              x2="16"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <polyline
              points="48 160 16 128 48 96"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
            <line
              x1="160"
              y1="128"
              x2="240"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <polyline
              points="208 96 240 128 208 160"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
          </svg>
        </div>

        {/* Before/After labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          Avant
        </div>
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          Après
        </div>
      </div>

      {/* Only show navigation buttons if there's more than one item */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 shadow-md flex items-center justify-center transition-colors border border-gray-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 shadow-md flex items-center justify-center transition-colors border border-gray-200"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      )}
    </div>
  )
}
