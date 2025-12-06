"use client"

import { Users, UserCheck, Utensils, Hotel, Bed, Plane, MapPin, Droplets, DollarSign, Heart } from "lucide-react"
import Image from "next/image"

export default function WhyTravelPocketSection() {
  const features = [
    {
      icon: Users,
      title: "Exclusive TravelPocket Group",
      description:
        "Premium-managed groups operated exclusively by TravelPocket for a smoother, safer, and more personalized Yatra experience.",
    },
    {
      icon: Users,
      title: "Small Group Size – Maximum 35 Pilgrims",
      description:
        "Limited group size ensures enhanced connectivity, better management, and personalized attention to every pilgrim throughout the journey.",
    },
    {
      icon: UserCheck,
      title: "Experienced Indian Guide with Every Group",
      description:
        "Dedicated Indian tour leader accompanies your group for smooth coordination, cultural understanding, and constant support throughout the entire Yatra.",
    },
    {
      icon: Utensils,
      title: "Separate Dedicated Cooking Team",
      description:
        "Professional Nepali cooks travel with the group, preparing fresh meals, energizing soups, high-tea, and nutritious energy meals daily to keep you healthy at high altitudes.",
    },
    {
      icon: Utensils,
      title: "Pure Vegetarian Meals (Jain Food Also Available)",
      description: "Complete vegetarian menu with authentic Indian cuisine. Special Jain food options available",
    },
    {
      icon: Hotel,
      title: "Premium Handpicked Accommodation",
      description:
        "Carefully selected hotels and comfortable guesthouses throughout the route, ensuring the best available facilities for your rest and recovery.",
    },
    {
      icon: Bed,
      title: "Comfortable Room Sharing Arrangements",
      description:
        "Hotels: Double sharing rooms for privacy and comfort Guesthouses: 3-4 sharing at Darchen, Zuthulphuk, and Mansarovar (as per local availability and conditions)",
    },
    {
      icon: Plane,
      title: "Priority Access to Flights & Helicopter Services",
      description:
        "First preference given to TravelPocket groups for flight connections and helicopter operations, minimizing wait times and ensuring schedule adherence.",
    },
    {
      icon: MapPin,
      title: "Dedicated Tibetan Guide for Your Group",
      description:
        "Experienced local Tibetan guide assigned to your group for smooth navigation, cultural insights, and safe movement across the sacred Kailash region.",
    },
    {
      icon: Droplets,
      title: "Unlimited Safe Drinking Water Throughout",
      description:
        "Clean, purified drinking water provided daily at all locations to keep you well-hydrated during the high-altitude journey.",
    },
    {
      icon: DollarSign,
      title: "100% Transparent Pricing – No Hidden Charges",
      description:
        "Completely transparent pricing structure with no surprise costs or last-minute add-ons. What you see is what you pay.",
    },
    {
      icon: Heart,
      title: "100% Pilgrim-Focused Personalized Support",
      description:
        "Your spiritual experience, physical comfort, and safety are our highest priorities. Every decision is made with your wellbeing in mind.",
    },
  ]

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base text-[#1a2f46] mb-2">Why Choose TravelPocket</p>
          <h2 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] mb-2">
            Why TravelPocket Is the First Choice for Kailash Mansarovar Yatra 2026
          </h2>
          <img
              src="/images/diamond-separator.svg"
              alt="separator"
              className="mx-auto"
            />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          {/* <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 lg:sticky lg:top-24">
            <Image
              src="/images/travelpocket.jpeg"
              alt="TravelPocket group travelers"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div> */}

          <div className="w-full aspect-[9/16]">
  <iframe
    className="w-full h-full rounded-lg"
    src="https://www.youtube.com/embed/gLKwYFVEnKI"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#e97737]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-['Figtree'] text-[14px] lg:text-[16px] font-bold md:text-base text-[#1a2f46] mb-2 text-center text-balance">
                    {feature.title}
                  </h3>
                  <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-normal md:text-base text-[#1a2f46] mb-2 text-center leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
