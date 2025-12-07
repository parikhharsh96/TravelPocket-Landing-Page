"use client"

import type React from "react"
import { User, Phone, MessageSquare, X } from "lucide-react"
import { useState, useEffect } from "react"

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0bw21rDwtTlaYtvuSpiFe9iprzsCYqGaIllZSL6kCUPJSAnV0WYSGoUShB4x8HQeGqA/exec"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new URLSearchParams()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("message", formData.message)
      formDataToSend.append("source", "Contact Modal Popup")
      formDataToSend.append("timestamp", new Date().toISOString())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      })

      setSubmitStatus("success")
      setFormData({ name: "", phone: "", message: "" })

      // Auto close after success
      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-md max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/travelpocket.png)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-[#1a2f46]" />
        </button>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center p-5 pt-12">
          {/* Contact Form Card */}
          <div className="w-full">
            <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a2f46] text-center mb-4">Contact our Experts</h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div className="relative">
                  <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#e97737] transition-colors bg-gray-50">
                    <User className="w-4 h-4 text-[#e97737] flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Name*"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="flex-1 outline-none text-gray-700 placeholder:text-gray-500 bg-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#e97737] transition-colors bg-gray-50">
                    <Phone className="w-4 h-4 text-[#e97737] flex-shrink-0" />
                    <input
                      type="tel"
                      placeholder="Phone No.*"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 outline-none text-gray-700 placeholder:text-gray-500 bg-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="flex items-start gap-2 border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#e97737] transition-colors bg-gray-50">
                    <MessageSquare className="w-4 h-4 text-[#e97737] flex-shrink-0 mt-0.5" />
                    <textarea
                      placeholder="Your Message"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="flex-1 outline-none text-gray-700 placeholder:text-gray-500 resize-none bg-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e97737] hover:bg-[#d16a2f] disabled:bg-[#e9773780] disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-xs text-center">Thank you! We&apos;ll contact you soon.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-xs text-center">Something went wrong. Please try again.</p>
                )}
              </form>

              {/* Footer Text */}
              <p className="text-center text-[#1a2f46] text-xs mt-3">
                We&apos;ll get in touch within 30 minutes. Happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Provider component to manage modal state globally
export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Show modal on page load (with a small delay for better UX)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen the modal in this session
      const hasSeenModal = sessionStorage.getItem("hasSeenContactModal")
      if (!hasSeenModal) {
        setIsModalOpen(true)
        sessionStorage.setItem("hasSeenContactModal", "true")
      }
    }, 2000) // 2 second delay after page load

    return () => clearTimeout(timer)
  }, [])

  // Expose function to open modal globally
  useEffect(() => {
    ;(window as any).openContactModal = () => setIsModalOpen(true)
    return () => {
      delete (window as any).openContactModal
    }
  }, [])

  return (
    <>
      {children}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

// Hook to use the modal from any component
export function useContactModal() {
  const openModal = () => {
    if (typeof window !== "undefined" && (window as any).openContactModal) {
      ;(window as any).openContactModal()
    }
  }
  return { openModal }
}
