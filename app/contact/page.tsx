import type { Metadata } from "next"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import BusinessHours from "@/components/business-hours"
import GoogleMap from "@/components/google-map"
import FloatingContact from "@/components/floating-contact"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Contact | Deco Dari Ameublement",
  description:
    "Contactez notre équipe de design d'intérieur à Marrakech. Obtenez un devis pour votre projet résidentiel, hôtelier ou médical.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Deco Dari Ameublement",
    description: "Contactez notre équipe de design d'intérieur à Marrakech. Obtenez un devis pour votre projet.",
    url: "https://decodariambl.ma/contact",
    images: [
      {
        url: "/aboutimage.png",
        width: 1200,
        height: 630,
        alt: "Contactez Deco Dari Ameublement",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />

      {/* Add Breadcrumb - only visible on mobile */}
      <div className="bg-gray-50 md:hidden">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ name: "Contact", path: "/contact" }]} />
        </div>
      </div>

      {/* Modernized Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left Column: Contact Form */}
            <div className="order-2 md:order-1">
              <div className="mb-8">
                <span className="inline-block text-primary font-medium mb-2">Écrivez-nous</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Envoyez-nous un message</h2>
              </div>
              <ContactForm />
            </div>

            {/* Right Column: Contact Info & Hours */}
            <div className="order-1 md:order-2 space-y-12">
              {/* Contact Information */}
              <div>
                <div className="mb-6">
                  <span className="inline-block text-primary font-medium mb-2">Nos coordonnées</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                    Informations de contact
                  </h2>
                </div>
                <ContactInfo />
              </div>

              {/* Business Hours */}
              <div>
                <div className="mb-6">
                  <span className="inline-block text-primary font-medium mb-2">Quand nous visiter</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Heures d'ouverture</h2>
                </div>
                <BusinessHours />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-medium mb-2">Où nous trouver</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Notre emplacement</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <GoogleMap />
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  )
}
