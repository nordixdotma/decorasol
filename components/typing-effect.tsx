"use client"

import { useState, useEffect, useRef } from "react"

interface TypingEffectProps {
  strings: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenStrings?: number
  className?: string
}

export default function TypingEffect({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenStrings = 1000,
  className = "",
}: TypingEffectProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    if (!strings.length) return
    const fullText = strings[currentIndex]

    const timeout = setTimeout(
      () => {
        if (!mounted.current) return
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1))
          } else {
            setIsPaused(true)
            setTimeout(() => {
              if (mounted.current) {
                setIsPaused(false)
                setIsDeleting(true)
              }
            }, delayBetweenStrings)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(fullText.slice(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % strings.length)
          }
        }
      },
      isPaused ? delayBetweenStrings : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, strings, typingSpeed, deletingSpeed, delayBetweenStrings, isPaused])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
