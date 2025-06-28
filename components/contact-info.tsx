import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="contact-card">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
          </div>
          <div className="ml-3 md:ml-4">
            <h4 className="text-base md:text-lg font-medium text-gray-900">Adresse</h4>
            <p className="mt-1 text-sm md:text-base text-gray-600">Marrakech, Maroc</p>
            <a
              href="https://maps.google.com/?q=Marrakech, Maroc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 md:mt-2 inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
            >
              Itinéraire
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
          </div>
          <div className="ml-3 md:ml-4">
            <h4 className="text-base md:text-lg font-medium text-gray-900">Téléphone</h4>
            <p className="mt-1">
              <a
                href="tel:+212666865356"
                className="text-sm md:text-base text-gray-600 hover:text-primary transition-colors"
              >
                +212 666-865356
              </a>
            </p>
            <div className="mt-1 md:mt-2 flex space-x-3">
              <a
                href="tel:+212666865356"
                className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
              >
                Appeler
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://wa.me/212666865356"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
              >
                WhatsApp
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
          </div>
          <div className="ml-3 md:ml-4">
            <h4 className="text-base md:text-lg font-medium text-gray-900">Email</h4>
            <p className="mt-1">
              <a
                href="mailto:Decorasol21@gmail.com"
                className="text-sm md:text-base text-gray-600 hover:text-primary transition-colors"
              >
                Decorasol21@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
