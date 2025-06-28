"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-form"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | { success: boolean; message: string }>(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      setSubmitStatus(result)

      if (result.success) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
      })
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Nom complet <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 outline-none text-sm"
            placeholder="Votre nom"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 outline-none text-sm"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="form-group">
          <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 outline-none text-sm"
            placeholder="+212 600-000000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Sujet <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 outline-none text-sm"
            placeholder="Sujet de votre message"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 outline-none resize-none text-sm"
          placeholder="Votre message ici..."
        ></textarea>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full md:w-auto px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg hover:translate-y-[-2px]"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Envoyer
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>

      {submitStatus && (
        <div
          className={`mt-4 p-3 md:p-4 ${
            submitStatus.success ? "bg-green-50 border-l-4 border-green-500" : "bg-red-50 border-l-4 border-red-500"
          } rounded-r-lg`}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className={`h-4 w-4 md:h-5 md:w-5 ${submitStatus.success ? "text-green-500" : "text-red-500"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {submitStatus.success ? (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </div>
            <div className="ml-3">
              <p className={`text-xs md:text-sm ${submitStatus.success ? "text-green-700" : "text-red-700"}`}>
                {submitStatus.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
