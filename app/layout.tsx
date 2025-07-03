import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Loader from "@/components/loader"
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/json-ld"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Decora Sol | Installation de Planchers en Bois à Marrakech",
    template: "%s | Decora Sol",
  },
  description:
    "Spécialisé dans l'installation de tous types et formes de planchers en bois, intérieurs et extérieurs à Marrakech. Notre devise est la qualité.",
  keywords: [
    "plancher en bois",
    "parquet",
    "installation plancher",
    "Marrakech",
    "Decora Sol",
    "plancher intérieur",
    "plancher extérieur",
    "bois de qualité",
    "revêtement sol",
  ],
  authors: [{ name: "Decora Sol" }],
  creator: "Decora Sol",
  publisher: "Decora Sol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://decorasol.ma"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/",
    },
  },
  openGraph: {
    title: "Decora Sol | Installation de Planchers en Bois à Marrakech",
    description:
      "Spécialisé dans l'installation de tous types et formes de planchers en bois, intérieurs et extérieurs à Marrakech. Notre devise est la qualité.",
    url: "https://decorasol.ma",
    siteName: "Decora Sol",
    images: [
      {
        url: "/aboutimage.png",
        width: 1200,
        height: 630,
        alt: "Decora Sol - Installation de Planchers en Bois",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decora Sol | Installation de Planchers en Bois à Marrakech",
    description: "Spécialisé dans l'installation de tous types et formes de planchers en bois à Marrakech.",
    images: ["/aboutimage.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification=your_verification_code", // Replace with actual verification code when available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Disable browser auto-translation */}
        <meta name="google" content="notranslate" />
        <meta name="robots" content="notranslate" />
        <meta httpEquiv="Content-Language" content="fr" />
      </head>
      <body className={inter.className} translate="no">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <LocalBusinessJsonLd />
            <WebsiteJsonLd />
            <Loader />
            <Header />
            <div translate="no">{children}</div>
            <Footer />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
