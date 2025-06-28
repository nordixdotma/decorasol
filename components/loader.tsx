"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [animating, setAnimating] = useState(false)
  const pathname = usePathname()

  // Reset loader state when pathname changes
  useEffect(() => {
    setLoading(true)
    setAnimating(false)
  }, [pathname])

  useEffect(() => {
    if (loading) {
      // Apply multiple techniques to prevent scrolling
      document.body.style.overflow = "hidden"
      document.body.style.height = "100vh"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"

      // Start the animation after 2.5 seconds
      const animateTimeout = setTimeout(() => {
        setAnimating(true)
      }, 2500)

      // Complete loading after 3 seconds
      const loadingTimeout = setTimeout(() => {
        setLoading(false)
      }, 3000)

      return () => {
        clearTimeout(animateTimeout)
        clearTimeout(loadingTimeout)
      }
    } else {
      // Re-enable scrolling
      document.body.style.overflow = ""
      document.body.style.height = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [loading])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        animating ? "opacity-0" : "opacity-100"
      }`}
      onClick={(e) => e.preventDefault()}
      onScroll={(e) => e.preventDefault()}
      onWheel={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
    >
      <div
        className={`transition-all duration-500 ease-in-out ${
          animating
            ? "transform -translate-y-[calc(50vh-32px)] -translate-x-[calc(50vw-60px)] scale-75 md:scale-100"
            : "animate-pulse-scale"
        }`}
      >
        <Image
          src="/favicon.png"
          alt="DECO DARI Logo"
          width={120}
          height={60}
          className="h-16 w-auto"
          priority
        />
      </div>
    </div>
  )
}
