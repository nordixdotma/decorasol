"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  // Check if current page needs scrolled header
  const shouldShowScrolledHeader = false // You can customize this based on your needs

  // Scroll detection
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(shouldShowScrolledHeader)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 || shouldShowScrolledHeader) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  // Set visible state on mount for specific pages
  useEffect(() => {
    if (shouldShowScrolledHeader) {
      setVisible(true)
    }
  }, [shouldShowScrolledHeader])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Toggle body scroll when mobile menu is open/closed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Navigation items for Decora Sol
  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Galerie", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 w-full">
      {/* Desktop Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "75%" : "100%",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
          borderRadius: visible ? "0.375rem" : "9999px",
        }}
        className={`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
          <Image src="/favicon.jpg" alt="Decora Sol" width={150} height={50} className="h-12 w-auto rounded-full" />
        </Link>

        {/* Nav Items */}
        <motion.div
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex"
        >
          {navItems.map((item, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              <Link
                onMouseEnter={() => setHovered(idx)}
                className={`relative px-4 py-2 ${
                  visible ? "text-neutral-600" : "text-white"
                } ${pathname && pathname === item.href ? "font-semibold" : ""} hover:text-primary transition-colors`}
                href={item.href}
              >
                {hovered === idx && (
                  <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full" />
                )}
                <span className="relative z-20 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:-translate-x-1/2 hover:after:w-full">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center justify-end relative z-30">
          <Link href="/contact">
            <Button
              className={`transition-all duration-300 relative z-30 ${
                visible ? "bg-primary text-white hover:bg-primary-dark" : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Obtenir un Devis
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          paddingRight: visible ? "12px" : "16px",
          paddingLeft: visible ? "12px" : "16px",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        style={{
          borderRadius: visible ? "0.375rem" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/favicon.jpg" alt="Decora Sol" width={120} height={40} className="h-10 w-auto rounded-full" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`p-2 rounded-full ${visible ? "text-black" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Semi-transparent overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Mobile menu panel */}
              <motion.div
                ref={menuRef}
                className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Navigation Links */}
                <div className="w-full space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all ${
                          pathname && pathname === item.href
                            ? "bg-gray-100 text-primary"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="w-full pt-4 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="flex items-center justify-center space-x-4 mb-4"
                  >
                    <a
                      href="https://web.facebook.com/profile.php?id=100091396990504"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                      aria-label="Suivez-nous sur Facebook"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/decorasol_top"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FFDC80] hover:from-[#D73447] hover:via-[#E1552F] hover:to-[#FFCD5C] text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label="Suivez-nous sur Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </motion.div>
                </div>

                {/* CTA Button for Mobile */}
                <div className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Link href="/contact" className="w-full">
                      <Button
                        className="w-full bg-primary text-white hover:bg-primary-dark"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Obtenir un Devis
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
