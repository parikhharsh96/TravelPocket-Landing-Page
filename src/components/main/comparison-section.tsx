"use client"

import { Check, X, Users, UserCheck, Church, Headphones, UtensilsCrossed, Droplet, Route } from "lucide-react"

export default function ComparisonSection() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Group Composition",
      subtitle: "Your travel experience matters",
      travelpocket: {
        title: "Exclusive TravelPocket Groups",
        description: "Travel only with fellow TravelPocket pilgrims for a cohesive and personalized experience",
      },
      others: {
        title: "Mixed Groups",
        description: "Often combined with pilgrims from multiple tour operators, leading to coordination challenges",
      },
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Group Size",
      subtitle: "Intimate and manageable",
      travelpocket: {
        title: "Small Groups (Maximum 35 Pilgrims)",
        description: "Ensures personalized attention, better logistics, and enhanced spiritual experience",
      },
      others: {
        title: "Large Groups (50+ pilgrims)",
        description: "Often combined with pilgrims from multiple tour operators, leading to coordination challenges",
      },
    },
    {
      icon: <Church className="w-6 h-6" />,
      title: "Diraphuk Experience",
      subtitle: "Sacred time at holy site",
      travelpocket: {
        title: "Dedicated Full Day at Diraphuk",
        description:
          "Exclusive time for meditation, reflection, and optional Charan Sparsh (if permitted by authorities)",
      },
      others: {
        title: "No Special Provision",
        description: "Rush through Diraphuk with minimal time for spiritual activities",
      },
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Professional Guidance",
      subtitle: "Expert support throughout",
      travelpocket: {
        title: "High-Altitude Expert Indian Guide in Every Group",
        description:
          "Experienced guides accompany every single group with knowledge of altitude management, local culture, and emergency protocols",
      },
      others: {
        title: "Mostly No Indian Guide Provided",
        description:
          "Some companies claim to provide Indian guides in marketing, but actually don't send them with most groups. Only Tibetan guides provided, creating language and cultural barriers",
      },
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Food Quality & Hygiene",
      subtitle: "Fresh meals prepared with care",
      travelpocket: {
        title: "Dedicated Cooking Team for Your Group",
        description:
          "Exclusive kitchen staff ensures fresh, hygienic meals prepared according to your group's preferences and dietary needs",
      },
      others: {
        title: "Shared Fixed Kitchen",
        description: "One cooking team serves multiple groups, compromising food quality, hygiene, and customization",
      },
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Hydration Support",
      subtitle: "Essential at high altitude",
      travelpocket: {
        title: "Unlimited Drinking Water",
        description:
          "Complimentary unlimited drinking water throughout the journey, crucial for high-altitude acclimatization",
      },
      others: {
        title: "Limited Water Supply",
        description:
          "Typically 2 bottles per day (insufficient at high altitude); pilgrims forced to purchase expensive bottled water in Tibet",
      },
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Inclusive Options",
      subtitle: "Solutions for every pilgrim",
      travelpocket: {
        title: "Special Alternative Package - Limi-Lapcha Door Darshan",
        description:
          "Exclusive separate package for pilgrims with limited budget and those aged 70+ (as Tibet doesn't permit 70+ age entry). Experience Door Darshan of Mount Kailash & Lake Mansarovar from Limi-Lapcha Pass - just 7 km from Lake Mansarovar at Nepal-Tibet border. Pioneer: First Indian company to successfully operate this route in 2024, 2025, and ready to serve in 2026",
      },
      others: {
        title: "No Alternative Options",
        description:
          "No provisions for budget-conscious pilgrims or senior citizens above 70 years; some companies claim this route but haven't actually executed it",
      },
    },
  ]

  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-to-b from-[#fff0e8] to-white px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm text-[#1a2f46] font-medium mb-2">Comprehensive Service Comparison</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a2f46] mb-4">
            How Are We Serving Our Travellers Differently?
          </h2>
          {/* Decorative divider with diamond */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
            <div className="h-px bg-[#e97737] w-16 sm:w-24 lg:w-32"></div>
            <div className="w-3 h-3 bg-[#e97737] rotate-45"></div>
            <div className="h-px bg-[#e97737] w-16 sm:w-24 lg:w-32"></div>
          </div>
        </div>

        {/* Best Value Banner - Desktop */}
        <div className="hidden lg:block mb-0">
          <div className="grid grid-cols-12">
            {/* Empty space above Features */}
            <div className="col-span-3"></div>

            {/* Best Value cell above TravelPocket */}
            <div className="col-span-5 flex justify-center">
              <div className="bg-[#e97737] text-white text-center py-3 px-8 text-sm font-semibold rounded-t-2xl shadow-lg w-full">
                Best Value
              </div>
            </div>

            {/* Empty space above Other Companies */}
            <div className="col-span-4"></div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden relative lg:rounded-tl-none">
          <div className="hidden lg:block">
            {/* Column Headers */}
            <div className="grid grid-cols-12 border-b-2 border-gray-200">
              {/* Features Column - Light blue background */}
              <div className="col-span-3 p-6 bg-[#ddf9ff] flex items-center gap-3">
                <div className="w-8 h-8 text-[#29a4c1] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#1a2f46]">Features</h3>
              </div>

              {/* TravelPocket Column - Cream/beige gradient background */}
              <div className="col-span-5 p-6 bg-[#fff0e8] flex items-center justify-center">
                <div className="text-center">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#29a4c1]">travel</span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#1a2f46]">pocket</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">keep your adventure alive</p>
                </div>
              </div>

              {/* Other Companies Column - White background */}
              <div className="col-span-4 p-6 bg-white flex items-center justify-center">
                <h3 className="text-lg lg:text-xl font-bold text-[#1a2f46]">Other Companies</h3>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden bg-gradient-to-br from-[#fff0e8] to-white p-4 relative pt-10">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#e97737] text-white text-center py-2 px-6 text-xs font-semibold rounded-t-lg shadow-md"
              style={{ width: "60%", maxWidth: "200px" }}
            >
              Best Value
            </div>
            <div className="text-center">
              <div>
                <span className="text-xl font-bold text-[#29a4c1]">travel</span>
                <span className="text-xl font-bold text-[#1a2f46]">pocket</span>
              </div>
              <p className="text-xs text-gray-600">keep your adventure alive</p>
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-12">
                {/* Feature Column */}
                <div className="lg:col-span-3 p-4 lg:p-6 bg-[#ddf9ff] border-r border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="text-[#29a4c1] flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#1a2f46] text-sm lg:text-base mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* TravelPocket Column */}
                <div className="lg:col-span-5 p-4 lg:p-6 border-r border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4bae4f] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1a2f46] text-sm lg:text-base mb-2">
                        {feature.travelpocket.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {feature.travelpocket.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Other Companies Column */}
                <div className="lg:col-span-4 p-4 lg:p-6 bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d65a5a] flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1a2f46] text-sm lg:text-base mb-2">{feature.others.title}</h5>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature.others.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                {/* Feature Title */}
                <div className="p-3 sm:p-4 bg-[#ddf9ff] flex items-start gap-3">
                  <div className="text-[#29a4c1] flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#1a2f46] text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.subtitle}</p>
                  </div>
                </div>

                {/* TravelPocket */}
                <div className="p-3 sm:p-4 border-b border-gray-200">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4bae4f] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1a2f46] text-xs sm:text-sm mb-1">{feature.travelpocket.title}</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">{feature.travelpocket.description}</p>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                <div className="p-3 sm:p-4 bg-gray-50">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#d65a5a] flex items-center justify-center">
                      <X className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1a2f46] text-xs sm:text-sm mb-1">{feature.others.title}</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">{feature.others.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
