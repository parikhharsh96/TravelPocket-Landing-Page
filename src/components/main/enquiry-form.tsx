"use client"

import type React from "react"

import { useState } from "react"
import { User, Phone, MessageSquare } from "lucide-react"

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0bw21rDwtTlaYtvuSpiFe9iprzsCYqGaIllZSL6kCUPJSAnV0WYSGoUShB4x8HQeGqA/exec"

export default function EnquiryForm() {
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
        formDataToSend.append("source", "Hero Section")
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full max-w-3xl px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-white font-['Figtree'] text-[12px] lg:text-[16px] font-bold mb-3">Enquire Now for 2026 Departures</h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center  mb-3">
            <div className="h-[1px] bg-[#e97737] flex-1 max-w-xs"></div>
            <div className="w-1 h-1 bg-[#e97737] rotate-45"></div>
            <div className="h-[1px] bg-[#e97737] flex-1 max-w-xs"></div>
          </div>

          <p className="text-white font-['Figtree'] text-[10px] lg:text-[12px]">Fill in the details for more info</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#e97737]">
              <User size={18} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              name="name"
               value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Name*"
              required
              className="w-full bg-white rounded-sm pl-16 pr-6 py-1 text-[#5a5a5a] font-['Figtree'] text-[12px] lg:text-[14px] placeholder:text-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#e97737]"
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#e97737]">
              <Phone size={18} strokeWidth={2.5} />
            </div>
            <input
              type="tel"
              name="phone"
               value={formData.phone}
                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone No.*"
              required
              className="w-full bg-white rounded-sm pl-16 pr-6 py-1 text-[#5a5a5a] font-['Figtree'] text-[12px] lg:text-[14px] placeholder:text-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#e97737]"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute left-6 top-2 text-[#e97737]">
              <MessageSquare size={18} strokeWidth={2.5} />
            </div>
            <textarea
              name="message"
              value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Message"
              rows={3}
              className="w-full bg-white rounded-sm pl-16 pr-6 py-1 text-[#5a5a5a] font-['Figtree'] text-[12px] lg:text-[14px] placeholder:text-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#e97737] resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
             disabled={isSubmitting}
            className="w-full bg-[#e97737] hover:bg-[#d86628] text-white font-bold font-['Figtree'] text-[12px] lg:text-[14px] py-2 rounded-sm transition-colors duration-200"
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
      </div>
    </div>
  )
}
