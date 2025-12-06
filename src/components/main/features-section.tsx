import { Award, ThumbsUp, Scale, FileCheck, UserCheck } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: "/images/number-one.svg",
      iconColor: "text-[#ffdb6f]",
      description:
        "India's First Company to open the Kailash Mansarovar Yatra via Limi Valley, Nepal for Indian citizens in 2024 – a Visa-Free Route for Indian pilgrims.",
    },
    {
      icon: "/images/rating.svg",
      iconColor: "text-[#e97737]",
      description: "5-star Google rating backed by hundreds of happy customers across India and abroad.",
    },
    {
      icon: "/images/handpick.svg",
      iconColor: "text-[#dc9327]",
      description: "Customizable packages, expert tour leaders, and on-ground team support for complete peace of mind.",
    },
    {
      icon: "/images/iso.svg",
      iconColor: "text-red-600",
      description: "Certified with ISO 9001 & ISO 10002, delivering high-quality and reliable services.",
    },
    {
      icon: "/images/old-man-stick.svg",
      iconColor: "text-[#e97737]",
      description: "Specialized in both senior citizen pilgrimage tours and adventure spiritual expeditions.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] text-center mb-16">
          What Sets us Apart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className={`${feature.iconColor} mb-2`}>
                <img src={feature.icon} alt="feature-icons" className="w-[30px] sm:w-[60px] h-auto cursor-pointer" />
              </div>
              <p className="font-['Figtree'] text-[12px] lg:text-[14px] md:text-base text-gray-800 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
