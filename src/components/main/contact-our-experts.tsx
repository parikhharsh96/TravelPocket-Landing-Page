"use client"

import type React from "react"

import { User, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"

// This should look like: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0bw21rDwtTlaYtvuSpiFe9iprzsCYqGaIllZSL6kCUPJSAnV0WYSGoUShB4x8HQeGqA/exec"

export default function ContactOurExperts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

   const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new URLSearchParams()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("message", formData.message)
      formDataToSend.append("source", "Contact Section")
      formDataToSend.append("timestamp", new Date().toISOString())

      // Send directly to Google Apps Script Web App
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // Required for cross-origin requests to Google Apps Script
      })

      // Since mode is "no-cors", we can't read the response, so assume success
      setSubmitStatus("success")
      setFormData({ name: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 sm:px-6 lg:px-12">
      {/* Heading Section */}
      <div className="text-center py-8 sm:py-12">
        <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base text-[#1a2f46] mb-2">We Are Here To Help You!</p>
        <h2 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] mb-2">Witness Kailash with us</h2>
        <img
              src="/images/diamond-separator.svg"
              alt="separator"
              className="mx-auto"
            />
      </div>

      {/* Background Image Section with Contact Form */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-cover rounded-xl sm:rounded-2xl"
          style={{
            backgroundImage: "url(/images/contact-our-experts-4.svg)",
          }}
        >
          {/* Overlay for better contrast */}
        </div>

        {/* Content - Contact Form on Right */}
        <div className="absolute inset-0 flex items-center justify-end px-2 sm:px-4 lg:px-8">
          {/* Contact Form - Small card on the right side */}
          <div className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6">
              <h3 className="font-['Playfair_Display'] text-[16px] lg:text-[18px] font-bold text-center md:text-base text-[#1a2f46] mb-4">
                Contact our Experts
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div className="relative">
                  <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#e97737] transition-colors">
                    <User className="w-4 h-4 text-[#e97737] flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Name*"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="flex-1 outline-none text-gray-700 placeholder:text-gray-500 text-sm"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#e97737] transition-colors">
                    <Phone className="w-4 h-4 text-[#e97737] flex-shrink-0" />
                    <input
                      type="tel"
                      placeholder="Phone No.*"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 outline-none text-gray-700 placeholder:text-gray-500 text-sm"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="flex items-start gap-2 border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#e97737] transition-colors">
                    <MessageSquare className="w-4 h-4 text-[#e97737] flex-shrink-0 mt-1" />
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="flex-1 outline-none text-gray-700 placeholder:text-gray-500 resize-none text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                   disabled={isSubmitting}
                  className="w-full bg-[#e97737] hover:bg-[#d16a2f] text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-xs text-center">Thank you! We'll contact you soon.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-xs text-center">Something went wrong. Please try again.</p>
                )}
              </form>

              {/* Footer Text */}
              <p className="text-center font-['Figtree'] text-[10px] lg:text-[12px] font-semibold md:text-base text-[#1a2f46] mt-3 sm:mt-4">
                We&apos;ll get in touch within 30 minutes. Happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
