"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useContactModal } from "./contact-modal"

const packages = [
  {
    id: "helicopter",
    icon: "helicopter",
    title: "Kailash Mansarovar Yatra 2026 | By Helicopter from Lucknow",
    duration: "10 Nights / 11 Days",
    image: "/images/1.webp",
    imageMob:"/images/package1.webp",
    idealFor: [
      "Pickup: Lucknow",
      "Duration: 10 Nights / 11 Days",
      "Group Size: Maximum 35 Yatris",
    ],
    features: [
      {
        title: "End-to-End Yatra Management",
        description: "Complete journey handled from Lucknow to Kailash–Mansarovar & back",
      },
      {
        title: "Helicopter-Assisted Travel",
        description: "Comfortable and time-efficient route, suitable for all age groups",
      },
      {
        title: "Accommodation",
        description: "5★ hotel in Lucknow + best available stays during Yatra",
      },
      {
        title: "Meals",
        description: "Pure vegetarian meals (Jain options available)",
      },
      {
        title: "Medical & High-Altitude Support",
        description: "On-trip medical assistance with experienced Indian Team Leader accompanying the group throughout the journey",
      },
      {
        title: "Spiritual Experience",
        description: "Charan Sparsh, Mansarovar Parikrama & meditation at Dirapuk",
      },
      
    ],
  },
  {
    id: "kathmandu",
    icon: "bus",
    title: "Kailash Mansarovar Yatra 2026 | By Bus from Kathmandu",
    duration: "14 Nights / 15 Days",
    image:  "/images/2.webp",
    imageMob:"/images/package2.webp",
    idealFor: [
      "Pickup: Kathmandu",
      "Duration: 14 Nights / 15 Days",
      "Group Size: Maximum 35 Yatris (Fixed Departures)",
    ],
    features: [
      {
        title: "End-to-End Yatra Management",
        description: "Complete journey managed from Kathmandu to Kailash–Mansarovar & return",
      },
      {
        title: "Overland / Bus Journey",
        description: "Traditional overland route by modern coach, ideal for deeper spiritual immersion",
      },
      {
        title: "Accommodation",
        description: "4★ hotel stay in Kathmandu + best available accommodations during the Yatra",
      },
      {
        title: "Meals",
        description: "Hygienically prepared pure vegetarian meals throughout (Jain options available)",
      },
      {
        title: "Medical & High-Altitude Support",
        description: "Continuous medical assistance with a trained high-altitude team and an experienced Indian Team Leader accompanying the group throughout the Yatra",
      },
      {
        title: "Spiritual Preparation",
        description: "Sacred Hawan at Pashupatinath Temple with visits to Jal Narayan & Doleshwar Mahadev",
      },
      {
        title: "Spiritual Experience",
        description: "Full day at Dirapuk for Charan Sparsh, Mansarovar Parikrama & meditation",
      },
      
    ],
  },
  {
    id: "lhasa",
    icon: "plane",
    title: "Kailash Mansarovar Yatra 2026 | Lhasa Route via Flight",
    duration: "10 Nights / 11 Days",
    image: "/images/3.webp",
    imageMob:"/images/3.webp",
     idealFor: [
      "Pickup: Kathmandu",
      "Duration: 10 Nights / 11 Days",
      "Group Size: Maximum 35 Yatris (Fixed Departures)",
    ],
    features: [
      {
        title: "End-to-End Yatra Management",
        description:
          "Complete journey managed from Kathmandu to Kailash–Mansarovar & return via Lhasa route",
      },
      {
        title: "Flight-Assisted Lhasa Route",
        description:
          "Comfortable air travel with gradual altitude acclimatization through Lhasa",
      },
      {
        title: "Cultural Exploration in Lhasa",
        description:
          "Potala Palace (UNESCO World Heritage Site), Jokhang Temple & Barkhor Street",
      },
      {
        title: "Accommodation",
        description:
          "4★ hotel stay in Kathmandu + best available accommodations during the Yatra",
      },
      {
        title: "Meals & Transfers",
        description:
          "Fresh, hygienic pure vegetarian meals (Jain options available) with complete airport & intercity transfers",
      },
      {
        title: "Medical & High-Altitude Support",
        description:
          "High-altitude specialists and medical professionals with an experienced Indian Team Leader accompanying the group throughout the Yatra",
      },
      {
        title: "Spiritual Preparation",
        description:
          "Sacred Hawan at Pashupatinath with visits to Jal Narayan & Doleshwar Mahadev",
      },
      {
        title: "Spiritual Experience",
        description:
          "Full day at Drapuk for Charan Sparsh, Mansarovar Parikrama & meditation",
      },
     
    ],
  },
  {
    id: "door-darshan",
    icon: "mountain",
    title: "Kailash Mansarovar Door Darshan Yatra 2026 | via Limi-Lapcha Route",
    duration: "3 Nights / 8 Days",
    image:  "/images/4.webp",
    imageMob:"/images/package4.webp",
    idealFor: [
      "Pickup: Lucknow",
      "Duration: 7 Nights / 8 Days",
      "Group Size: Limited Group (Comfort-Focused Departures)"
    ],
    features: [
      {
        title: "Closest Kailash Darshan Route",
        description: "India–Nepal border via Limi–Lapcha, with Kailash Darshan point just 7 km from Lake Mansarovar",
      },
      {
        title: "Ideal for Senior Pilgrims",
        description: "Specially designed for 70+ age group, minimal walking & gradual altitude exposure",
      },
      {
        title: "No Passport / No Visa Required",
        description: "Indian citizens can undertake the Yatra without passport or visa formalities",
      },
      {
        title: "Premium Hospitality",
        description: "5★ accommodation in Lucknow (Soaltee Western Premium or similar) with best available stays en route",
      },
      {
        title: "Hassle-Free Travel",
        description: "Air-luxury coach from Lucknow to Nepalgunj with smooth intercity transfers",
      },
      {
        title: "Authentic Vegetarian Meals",
        description: "Fresh, hygienic pure vegetarian meals (Jain options available)",
      },
      {
        title: "Medical & High-Altitude Support",
        description: "Continuous medical assistance with high-altitude experts and an experienced Indian Team Leader accompanying the group throughout the journey",
      },
      {
        title: "End-to-End Managed Yatra",
        description: "Complete pilgrimage managed in-house with no third-party involvement",
      },
     
    ],
  },
]

export default function PackagesSection() {
  const [activePackage, setActivePackage] = useState("helicopter")
  const { openModal } = useContactModal()

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
    <>

    {/* Header */}
        <div id="packages" className="text-center mb-12 mt-8">
          <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base text-[#1a2f46] mb-2">Our Best Offerings And Packages for</p>
          <h2 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] mb-2">
            Kailash Mansarovar Yatra 2026
          </h2>
          <img
              src="/images/diamond-separator.svg"
              alt="separator"
              className="mx-auto"
            />
        </div>

    <section className="relative bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('/images/packages-background.svg')" }}>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-12 lg:py-20">
        

        {/* Main Content Grid */}
        <div className="lg:flex gap-4 sm:gap-6 lg:gap-8">
          {/* Left Navigation - Sticky */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 lg:sticky lg:top-24">
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
          <div className="w-full lg:w-3/4">
            <div className="space-y-4 sm:space-y-6">
              {packages.map((pkg) => (
                <div key={pkg.id} id={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden scroll-mt-6">
                  {/* Package Header */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl flex-shrink-0">
                        <img src={'images/'+pkg.icon + '.svg'} />
                      </span>
                      <h3 className="font-['Playfair_Display'] text-[16px] lg:text-[22px] font-bold text-[#1a2f46] mb-2">{pkg.title}</h3>
                    </div>
                  </div>

                  {/* Package Content - Image Left, Features Right */}
                  <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4 px-2 lg:px-6">
                    {/* Image Section */}
                    <div className="relative lg:h-auto mb-4">
                      <img src={pkg.image || "/placeholder.svg"} alt={pkg.title}  className="hidden lg:block object-cover w-full lg:max-w-none max-h-[200px] lg:max-h-none lg:h-full" />
                      <img src={pkg.imageMob || "/placeholder.svg"} alt={pkg.title}  className="block lg:hidden object-cover w-full lg:max-w-none max-h-[200px] lg:max-h-none lg:h-full" />
                      {/* Duration Badge on Image */}
                      {/* <div className="absolute top-0 left-0 bg-[#e97737] text-white px-4 py-2 rounded-sm text-sm font-medium shadow-lg">
                        Duration {pkg.duration}
                      </div> */}
                    </div>

                    {/* Features Section */}
                    <div className="p-0 flex flex-col">
                      {/* Ideal For Section (if applicable) */}
                      {pkg.idealFor && (
                        <div className="mb-6 p-4 bg-amber-50 rounded-lg">
                          <p className="font-semibold text-[#1a2f46] mb-2">Yatra Overview :</p>
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
                            
                              <img src='images/checkmark.svg' />
                            
                            <div className="flex-1 min-w-0">
                              <p className="font-['Figtree'] text-[13px] lg:text-[13px] font-bold md:text-base text-[#1a2f46] mb-2">
                                {feature.title}
                              </p>
                              <p className="font-['Figtree'] text-[11px] lg:text-[11px] font-normal md:text-base text-[#1a2f46] mb-2">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Section */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap -2 lg:gap-4 pt-4 border-t border-gray-300 mt-auto mb-4">
                        <p className="text-[#29a4c1] font-['Dancing_Script'] font-bold text-[20px] lg:text-[18px]">Get Best Discounts!</p>
                        <Button className="bg-[#e97737] hover:bg-[#d66a2a] font-['Figtree'] text-white font-bold text-[10px] lg:text-[12px] px-6 lg:px-4 py-5 lg:py-6  whitespace-nowrap rounded-sm"
                        onClick={openModal}>
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
    </>
  )
}
