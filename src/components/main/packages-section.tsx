"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

const packages = [
  {
    id: "helicopter",
    icon: "🚁",
    title: "Kailash Mansarovar Yatra 2026 | By Helicopter from Lucknow",
    duration: "10 Nights / 11 Days",
    image: "/images/package1.svg",
    features: [
      {
        title: "Curated Group Experience",
        description: "Fixed departures with maximum 35 participants for personalized attention",
      },
      {
        title: "Spiritual Immersion",
        description: "Full day at Draphuk dedicated to Charan Sparsh and meditation",
      },
      {
        title: "Expert Support",
        description: "High-altitude specialists and medical assistance throughout the journey",
      },
      {
        title: "Seamless Logistics",
        description: "Direct management with no intermediaries, priority flight and helicopter access",
      },
      {
        title: "Premium Accommodations",
        description: "4-star stays at Soaltee Western Premium, Kathmandu (or equivalent)",
      },
      {
        title: "Complete Transfers",
        description: "Complimentary airport/railway station pick-up and drop-off",
      },
      {
        title: "Culinary Excellence",
        description: "Hygienically prepared pure vegetarian meals (Jain options available)",
      },
      {
        title: "Comfortable Travel",
        description: "Air-luxury coach transportation throughout",
      },
    ],
  },
  {
    id: "kathmandu",
    icon: "🚌",
    title: "Kailash Mansarovar Yatra 2026 | By Bus from Kathmandu",
    duration: "14 Nights / 15 Days",
    image:  "/images/package2.svg",
    features: [
      {
        title: "Intimate Group Size",
        description: "Maximum 35 pilgrims per departure for enhanced devotional atmosphere",
      },
      {
        title: "Spiritual Preparation",
        description: "Sacred Hawan at Pashupatinath Temple, visits to Jal Narayan and Doleshwar Mahadev",
      },
      {
        title: "Extended Devotion",
        description: "Full day at Draphuk for Charan Sparsh and contemplative meditation",
      },
      {
        title: "Quality Accommodation",
        description: "4-star stays at Best Western Kathmandu (or equivalent)",
      },
      {
        title: "Nutritious Meals",
        description: "Hygienically prepared pure vegetarian meals (Jain options available)",
      },
      {
        title: "Expert Guidance",
        description: "High-altitude trained team with continuous medical support",
      },
      {
        title: "Premium Transport",
        description: "Modern Volvo coach with complete door-to-door transfers",
      },
      {
        title: "Direct Management",
        description: "No intermediaries—seamless service from start to finish",
      },
    ],
  },
  {
    id: "lhasa",
    icon: "✈️",
    title: "Kailash Mansarovar Yatra 2026 | Lhasa Route via Flight",
    duration: "10 Nights / 11 Days",
    image: "/images/package3.svg",
    features: [
      {
        title: "Cultural Exploration in Lhasa",
        description:
          "Potala Palace - UNESCO World Heritage Site and spiritual landmark, Jokhang Temple - Tibet's most sacred Buddhist sanctuary, Barkhor Street - Historic pilgrimage circuit and cultural hub",
      },
      {
        title: "Expert Accompaniment",
        description: "High-altitude specialists and medical professionals throughout",
      },
      {
        title: "Curated Group Experience",
        description: "Fixed departures with maximum 35 participants for personalized attention",
      },
      {
        title: "Meditation Experience",
        description: "Full day at Draphuk for sacred rituals and reflection",
      },
      {
        title: "Spiritual Preparation",
        description: "Sacred Hawan at Pashupatinath, visits to Jal Narayan and Doleshwar Mahadev",
      },
      {
        title: "Culinary Care & Complete Transfers",
        description:
          "Fresh, hygienic vegetarian meals (Jain options available), airport pick-up and complimentary transfers",
      },
      {
        title: "Premium Stays",
        description: "4-star accommodation at Best Western Kathmandu (or similar)",
      },
    ],
  },
  {
    id: "door-darshan",
    icon: "🏔️",
    title: "Kailash Mansarovar Door Darshan Yatra 2026 | via Limi-Lapcha Route",
    duration: "3 Nights / 8 Days",
    image:  "/images/package4.svg",
    idealFor: [
      "Senior pilgrims (70+ age group)",
      "No passport or visa required",
      "Closest access point—just 7 km from Lake Mansarovar",
    ],
    features: [
      {
        title: "Premium Hospitality",
        description: "4-star accommodation at Soaltee Western Premium, Kathmandu (or similar)",
      },
      {
        title: "Hassle-Free Travel",
        description: "Air-luxury coach from Lucknow to Nepalgunj with seamless connections",
      },
      {
        title: "Comprehensive Support",
        description: "High-altitude experts and medical assistance at every step",
      },
      {
        title: "Authentic Cuisine & Direct Service",
        description:
          "Fresh, hygienic vegetarian meals (Jain options available). End-to-end managed pilgrimage with no third-party involvement",
      },
    ],
  },
]

export default function PackagesSection() {
  const [activePackage, setActivePackage] = useState("helicopter")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePackage(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    packages.forEach((pkg) => {
      const element = document.getElementById(pkg.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      packages.forEach((pkg) => {
        const element = document.getElementById(pkg.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-x-hidden overflow-y-visible">
      {/* Background Image - Contained within section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/packages-background.svg"
          alt="Kailash Mountain Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base text-[#1a2f46] mb-2">Our Best Offerings And Packages</p>
          <h2 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] mb-2">
            Best Kailash Kailash Mansarovar Yatra 2026
          </h2>
          <img
              src="/images/diamond-separator.svg"
              alt="separator"
              className="mx-auto"
            />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Navigation - Sticky */}
          <div className="lg:col-span-3">
            <div className=" flex flex-col items-stretch lg:items-start sm:w-full lg:sticky lg:top-24 space-y-2 sm:space-y-3 overflow-x-hidden">
              {packages.map((pkg) => (
                <a
                  key={pkg.id}
                  href={`#${pkg.id}`}
                  onClick={() => setActivePackage(pkg.id)}
                  className={`block p-2.5 sm:p-4 h-14 flex items-center px-4 rounded-lg transition-colors group ${
                    activePackage === pkg.id
                      ? "bg-[#29a4c1] text-white"
                      : "bg-white text-[#1a2f46] hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base leading-tight">
                      {pkg.id === "helicopter" && "Kailash Mansarovar Yatra by Helicopter"}
                      {pkg.id === "kathmandu" && "Overland Kailash Mansarovar Yatra"}
                      {pkg.id === "lhasa" && "Kailash Mansarovar Yatra Lhasa Route via Flight"}
                      {pkg.id === "door-darshan" && "Kailash Mansarovar Door Darshan"}
                    </span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Scrollable Content */}
          <div className="lg:col-span-9">
            <div className="space-y-6 max-h-[800px] lg:max-h-[700px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar w-fit">
              {packages.map((pkg) => (
                <div key={pkg.id} id={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden scroll-mt-6">
                  {/* Package Header */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl flex-shrink-0">{pkg.icon}</span>
                      <h3 className="font-['Playfair_Display'] text-[16px] lg:text-[22px] font-bold text-[#1a2f46] mb-2">{pkg.title}</h3>
                    </div>
                  </div>

                  {/* Package Content - Image Left, Features Right */}
                  <div className="grid lg:grid-cols-[1fr_1.5fr] gap-0 px-2 lg:px-6">
                    {/* Image Section */}
                    <div className="relative h-80 lg:h-auto min-h-[400px]">
                      <img src={pkg.image || "/placeholder.svg"} alt={pkg.title}  className="object-cover" />
                      {/* Duration Badge on Image */}
                      <div className="absolute top-0 left-0 bg-[#e97737] text-white px-4 py-2 rounded-sm text-sm font-medium shadow-lg">
                        Duration {pkg.duration}
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="p-0 flex flex-col">
                      {/* Ideal For Section (if applicable) */}
                      {pkg.idealFor && (
                        <div className="mb-6 p-4 bg-amber-50 rounded-lg">
                          <p className="font-semibold text-[#1a2f46] mb-2">Ideal For:</p>
                          <ul className="space-y-1 text-sm">
                            {pkg.idealFor.map((item, idx) => (
                              <li key={idx} className="text-gray-700">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Features Grid - 2 columns */}
                      <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-2">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-[#e97737] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-['Figtree'] text-[11px] lg:text-[13px] font-bold md:text-base text-[#1a2f46] mb-2">
                                {feature.title}
                              </p>
                              <p className="font-['Figtree'] text-[9px] lg:text-[11px] font-normal md:text-base text-[#1a2f46] mb-2">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Section */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-300 mt-auto mb-4">
                        <p className="text-[#29a4c1] font-['Dancing_Script'] font-bold text-[16px] lg:text-[18px]">Get Best Discounts!</p>
                        <Button className="bg-[#e97737] hover:bg-[#d66a2a] font-['Figtree'] text-white font-bold text-[10px] lg:text-[12px] px-6 lg:px-4 py-5 lg:py-6  whitespace-nowrap rounded-sm">
                          ENQUIRE NOW FOR BEST PRICE
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(233, 119, 55, 0.6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(233, 119, 55, 0.8);
        }
      `}</style>
    </section>
  )
}
