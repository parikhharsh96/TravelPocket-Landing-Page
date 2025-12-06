"use client"

import type React from "react"

import { useState } from "react"
import { User, Phone, MessageSquare } from "lucide-react"

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Your Message"
              rows={3}
              className="w-full bg-white rounded-sm pl-16 pr-6 py-1 text-[#5a5a5a] font-['Figtree'] text-[12px] lg:text-[14px] placeholder:text-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#e97737] resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e97737] hover:bg-[#d86628] text-white font-bold font-['Figtree'] text-[12px] lg:text-[14px] py-2 rounded-sm transition-colors duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}
