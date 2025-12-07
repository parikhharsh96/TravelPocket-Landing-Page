"use client"

import { Facebook, Linkedin, Instagram, Youtube, MapPin, Phone, Mail, Users, MessageSquare } from "lucide-react"
import { useState } from "react"

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0bw21rDwtTlaYtvuSpiFe9iprzsCYqGaIllZSL6kCUPJSAnV0WYSGoUShB4x8HQeGqA/exec"

export default function Footer() {

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
            formDataToSend.append("source", "Footer Section")
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
    <footer className="w-full bg-[#E9FBFF] border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Get in Touch */}
          <div className="space-y-6">
            {/* Logo */}
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-[#29a4c1]">travel</span>
                <span className="text-[#e97737]">pock</span>
                <span className="text-[#29a4c1]">et</span>
              </h2>
              <p className="text-xs text-gray-500 italic">keep your adventure alive</p>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-lg font-bold text-[#1a2f46] mb-3">Get in Touch</h3>
              <p className="text-sm font-medium text-[#1a2f46] mb-3">Travelpocket Exploration Pvt. Ltd.</p>

              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#e97737] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    302 3rd floor Wing-, Plot No. A-34 - Kunji Tower, Near HDFC Bank Soorsagar Road, Akhaliya Circle,
                    Akhaliya Vikas Yojna, Jodhpur Rajasthan 342003
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e97737] flex-shrink-0" />
                  <a href="tel:+917827033601" className="text-sm text-gray-600 hover:text-[#e97737] transition-colors">
                    +91 78270-33601
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#e97737] flex-shrink-0" />
                  <a
                    href="mailto:info@travelpocket.in"
                    className="text-sm text-gray-600 hover:text-[#e97737] transition-colors"
                  >
                    info@travelpocket.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm text-gray-600 mb-3">Follow us on</p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-[#1a2f46] hover:text-[#e97737] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#1a2f46] hover:text-[#e97737] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#1a2f46] hover:text-[#e97737] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/travelpocket/" className="text-[#1a2f46] hover:text-[#e97737] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@travelpocket/" className="text-[#1a2f46] hover:text-[#e97737] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Chat With Us */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Chat with us on</p>
              <a href="https://wa.me/917827033601" className="flex items-center gap-3 group">
                <span className="text-2xl font-semibold text-[#1a2f46] group-hover:text-[#25D366] transition-colors">
                  WhatsApp
                </span>
                <div className="w-10 h-10 rounded-full border-2 border-[#1a2f46] group-hover:border-[#25D366] flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5 text-[#1a2f46] group-hover:text-[#25D366] transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Instagram */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Follow us on</p>
              <a href="https://www.instagram.com/travelpocket/" className="flex items-center gap-3 group">
                <span className="text-2xl font-semibold text-[#1a2f46] group-hover:text-[#E4405F] transition-colors">
                  Instagram
                </span>
                <div className="w-10 h-10 rounded-full border-2 border-[#1a2f46] group-hover:border-[#E4405F] flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5 text-[#1a2f46] group-hover:text-[#E4405F] transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#1a2f46] mb-4">Explore QuickLinks</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e97737] transition-colors">
                Home
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e97737] transition-colors">
                Why Us
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e97737] transition-colors">
                Packages
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e97737] transition-colors">
                Gifts
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e97737] transition-colors">
                Testimonials
              </a>
              <a
                href="https://wa.me/917827033601"
                className="block text-sm text-gray-600 hover:text-[#e97737] transition-colors"
              >
                Reach Us On Whatsapp
              </a>
            </nav>
          </div>

          {/* Column 4 - Contact Form */}
          <div>
            <h3 className="text-lg font-bold text-[#1a2f46] mb-4">Get Yatra Details</h3>
            <form onSubmit={handleSubmit}  className="space-y-3">
              {/* Name */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e97737]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                   value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#e97737] focus:ring-1 focus:ring-[#e97737] bg-white"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e97737]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone No.*"
                  required
                   value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#e97737] focus:ring-1 focus:ring-[#e97737] bg-white"
                />
              </div>

              {/* No. of Travellers */}
              {/* <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e97737]">
                  <Users className="w-4 h-4" />
                </div>
                <input
                  type="number"
                  placeholder="No. of Travellers"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#e97737] focus:ring-1 focus:ring-[#e97737] bg-white"
                />
              </div> */}

              {/* Message */}
              <div className="relative">
                <div className="absolute left-3 top-3 text-[#e97737]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                   value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#e97737] focus:ring-1 focus:ring-[#e97737] bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1a2f46] hover:bg-[#0f1d2d] text-white px-8 py-2.5 rounded-lg font-semibold text-sm transition-colors"
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
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 py-4">
        <p className="text-center text-xs text-gray-500">© Copyright 2025 TravelPocket | All Rights Reserved.</p>
      </div>
    </footer>
  )
}
