"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Info, ImageIcon, Phone, ArrowRight } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "header-solid" : "header-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 ${isScrolled ? "py-3" : "py-4"} transition-padding duration-300`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="z-10">
            {/* Conditional rendering of logos based on scroll position */}
            {isScrolled ? (
              <Image
                src="/favicon.png"
                alt="DARI Logo"
                width={120}
                height={60}
                className={`${isScrolled ? "h-12" : "h-14"} w-auto transition-all duration-300 rounded-full`}
              />
            ) : (
              <Image
                src="/favicon.png"
                alt="DARI Logo"
                width={120}
                height={60}
                className="h-14 w-auto transition-opacity duration-300 rounded-full"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <NavLinks textColor={isScrolled ? "text-black" : "text-white"} />
          </nav>

          {/* Restyled Contact Button */}
          <Link href="/">
            <Button
              className={`hidden md:inline-flex transition-all duration-300 wobble-on-hover ${
                isScrolled ? "bg-primary text-white hover:bg-primary" : "bg-white text-primary hover:bg-white"
              }`}
            >
              Obtenir un Devis
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : "rotate-0 -translate-y-1"
                } ${isScrolled ? "bg-black" : "bg-white"}`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } ${isScrolled ? "bg-black" : "bg-white"}`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-0.5" : "rotate-0 translate-y-1"
                } ${isScrolled ? "bg-black" : "bg-white"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay with Scroll */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker z-40 transform transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Scrollable Content Container */}
        <div className="relative h-full overflow-y-auto">
          <div className="min-h-full flex flex-col">
            {/* Header - Fixed at top */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 pt-6">
              <Image
                src="/favicon.png"
                alt="Decora Sol Logo"
                width={120}
                height={60}
                className="h-10 w-auto brightness-0 invert rounded-full"
              />
            </div>

            {/* Main Content - Flexible */}
            <div className="flex-1 flex flex-col justify-center px-6 py-8 min-h-0">
              {/* Navigation Links */}
              <nav className="space-y-1 mb-8">
                <MobileNavLink
                  href="/"
                  icon={<Home className="w-5 h-5" />}
                  onClick={() => setIsMenuOpen(false)}
                  delay="0.1s"
                >
                  Accueil
                </MobileNavLink>
                <MobileNavLink
                  href="/"
                  icon={<Info className="w-5 h-5" />}
                  onClick={() => setIsMenuOpen(false)}
                  delay="0.2s"
                >
                  À Propos
                </MobileNavLink>
                <MobileNavLink
                  href="/"
                  icon={<ImageIcon className="w-5 h-5" />}
                  onClick={() => setIsMenuOpen(false)}
                  delay="0.3s"
                >
                  Galerie
                </MobileNavLink>
                <MobileNavLink
                  href="/"
                  icon={<Phone className="w-5 h-5" />}
                  onClick={() => setIsMenuOpen(false)}
                  delay="0.4s"
                >
                  Contact
                </MobileNavLink>
              </nav>

              {/* CTA Section */}
              <div
                className={`space-y-4 transform transition-all duration-700 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="text-center mb-4">
                  <h3 className="text-white text-lg font-semibold mb-1">Prêt à commencer?</h3>
                  <p className="text-white/80 text-sm">Obtenez votre devis gratuit</p>
                </div>

                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-white text-primary hover:bg-gray-100 py-3 text-base font-semibold rounded-xl shadow-lg group">
                    <span>Obtenir un Devis</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>

                {/* Contact Info */}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-4 text-white/80">
                    <a
                      href="tel:+212666865356"
                      className="flex items-center space-x-2 hover:text-white transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+212 666-865356</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer - Fixed at bottom */}
            <div className="flex-shrink-0 p-4 text-center">
              <p className="text-white/60 text-xs">© 2024 Decora Sol. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLinks({ textColor, onClick }: { textColor: string; onClick?: () => void }) {
  return (
    <>
      <Link href="/" className={`${textColor} hover:text-primary font-medium nav-link-underline`} onClick={onClick}>
        Accueil
      </Link>
      <Link
        href="/"
        className={`${textColor} hover:text-primary font-medium nav-link-underline`}
        onClick={onClick}
      >
        À Propos
      </Link>
      <Link
        href="/"
        className={`${textColor} hover:text-primary font-medium nav-link-underline`}
        onClick={onClick}
      >
        Galerie
      </Link>
      <Link
        href="/"
        className={`${textColor} hover:text-primary font-medium nav-link-underline`}
        onClick={onClick}
      >
        Contact
      </Link>
    </>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
  icon,
  delay,
}: {
  href: string
  onClick?: () => void
  children: React.ReactNode
  icon: React.ReactNode
  delay: string
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), Number.parseFloat(delay) * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Link
      href={href}
      className={`group flex items-center space-x-3 text-white hover:text-white/80 py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
      onClick={onClick}
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-lg font-medium flex-1">{children}</span>
      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  )
}
