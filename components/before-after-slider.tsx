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
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    setSliderPosition(50)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    setSliderPosition(50)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateSliderPositionTouch(e)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderPositionTouch(e)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const updateSliderPositionTouch = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setSliderPosition(percentage)
      }
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging])

  if (!items || items.length === 0) {
    return <div className="text-center p-8 text-gray-500">No comparison images available</div>
  }

  const currentItem = items[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Comparison Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Image Comparison */}
        <div
          ref={containerRef}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "none" }}
        >
          {/* After image (full width) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={currentItem.afterImage || "/placeholder.svg"}
              alt="After transformation"
              fill
              className="object-cover"
              priority
              draggable={false}
            />
            {/* After overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 h-full overflow-hidden transition-all duration-75 ease-out"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={currentItem.beforeImage || "/placeholder.svg"}
              alt="Before transformation"
              fill
              className="object-cover"
              priority
              draggable={false}
            />
            {/* Before overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Slider line with enhanced design */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20 transition-all duration-75 ease-out"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            {/* Gradient line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-primary to-white opacity-80" />
          </div>

          {/* Enhanced slider handle */}
          <div
            className="absolute top-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center pointer-events-none shadow-2xl border-4 border-primary z-30 transition-all duration-75 ease-out hover:scale-110"
            style={{
              left: `${sliderPosition}%`,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 0 0 2px rgba(139, 69, 19, 0.1)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M8 3L4 7l4 4" />
              <path d="M16 3l4 4-4 4" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="21" x2="14" y2="21" />
              <line x1="12" y1="3" x2="12" y2="21" />
            </svg>
          </div>

          {/* Modern labels with improved design */}
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse" />
                Avant
              </span>
            </div>
          </div>

          <div className="absolute top-6 right-6 z-10">
            <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Après
              </span>
            </div>
          </div>
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
