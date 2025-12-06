"use client"

import { User, Sparkles } from "lucide-react"

export default function KailashFireHorseSection() {
  return (
    <div className="bg-[#ffffff]">
         <div className="bg-[#fff0e8] py-16 px-4  mx-auto m-[0_2rem]">
      <div className="max-w-7xl mx-auto m-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base text-[#1a2f46] mb-2">Highly Auspicious Fire Horse Year</p>
          <h1 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] mb-2">
            Kailash Yatra During Fire Horse Year 2026
          </h1>
          <img
              src="/images/diamond-separator.svg"
              alt="separator"
              className="mx-auto"
            />
          <div className="flex items-center justify-center gap-2">
            {/* <Sparkles className="w-4 h-4 text-[#e97737]" /> */}
            <p className="font-['Figtree'] font-semibold text-[12px] lg:text-[14px] md:text-base text-[#1a2f46]">
              It is believed 1 parikrama of Kailash Mansarovar in the year of Fire Horse equals 13 parikramas.
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          {/* Fire Horse Image */}
          <div className="relative">
            <div className="bg-cover bg-center aspect-video rounded-lg overflow-hidden shadow-xl bg-[url('/images/horse-year.svg')] relative">
             
            </div>
          </div>

          {/* Info Text */}
          <div className="space-y-8">
            <div>
              <h2 className="font-['Figtree'] text-[16px] lg:text-[18px] font-bold text-[#1a2f46] mb-4">
                Why 2026 Is Extraordinarily Special
              </h2>
              <p className="text-[#1a2f46] font-['Figtree'] text-[14px] lg:text-[16px] leading-relaxed">
                2026 marks the rare Fire Horse Year (beginning February 17, 2026) in the Chinese and Tibetan Zodiac
                cycle occurring only once every 60 years. This makes it the most auspicious time for Kailash Mansarovar
                Yatra.
              </p>
            </div>

            <div>
              <h2 className="font-['Figtree'] text-[16px] lg:text-[18px] font-bold text-[#1a2f46] mb-4">The Sacred 13-Fold Blessing</h2>
              <p className="text-[#1a2f46] font-['Figtree'] text-[14px] lg:text-[16px] leading-relaxed">
                According to Tibetan Buddhist tradition, one Kailash Parikrama during Horse Year equals 13 Parikramas in
                spiritual merit. This extraordinary blessing amplifies spiritual benefits manifold, making 2026 the most
                powerful year in six decades for this sacred pilgrimage.
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="overflow-hidden bg-transparent py-6 mb-16 relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits Lists */}
          <div className="space-y-10">
            <div>
              <h2 className="font-['Figtree'] text-[16px] lg:text-[18px] font-bold text-[#1a2f46] mb-4">Extraordinary Spiritual Benefits</h2>
              <div className="space-y-4 font-['Figtree'] text-[10px] lg:text-[12px]">
                <BenefitItem title="13 Times Higher Merit" description="Unparalleled spiritual returns" />
                <BenefitItem title="Wash Away Lifetimes of Sins" description="Profound karmic cleansing" />
                <BenefitItem title="Accelerated Path to Moksha" description="Liberation from rebirth cycle" />
                <BenefitItem title="Divine Protection" description="Blessings for self and future generations" />
                <BenefitItem title="Spiritual Transformation" description="Deep inner awakening and peace" />
              </div>
            </div>

            <div>
              <h2 className="font-['Figtree'] text-[16px] lg:text-[18px] font-bold text-[#1a2f46] mb-4">Lake Mansarovar Rituals</h2>
              <div className="space-y-4 font-['Figtree'] text-[10px] lg:text-[12px]">
                <BenefitItem title="Sacred bath for purification of body, mind & soul" description="" />
                <BenefitItem title="Puja & Havan ceremonies for divine grace" description="" />
                <BenefitItem title="Collect blessed Mansarovar water as sacred keepsake" description="" />
              </div>
            </div>
          </div>

          {/* Right Column - Meditation Image */}
          <div className="relative">
            <img
              src="/images/meditating.svg"
              alt="Meditation by mountain lake"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 7s linear infinite;
        }

        /* 📱 Faster speed for mobile screens */
@media (max-width: 640px) {

@keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-80%);
          }
        }
  .animate-marquee {
    animation-duration: 4s; /* <-- Increase speed on mobile */
  }
}

      `}</style>
        </div>

    </div>
   
  )
}

function MarqueeContent() {
  return (
    <div className="flex items-center gap-8 px-8">
      <svg className="w-8 h-8 text-[#17773e]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L8 8L2 10L7 15L6 22L12 18L18 22L17 15L22 10L16 8L12 2Z" />
      </svg>
      <span className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#e97737]">A Once-in-60-Years Sacred Opportunity</span>
    </div>
  )
}

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3 mb-1 items-end">
      <div className="flex-shrink-0 mt-1">
        <img
              src="/images/folded-hands.svg"
              alt="separator"
              className="mx-auto"
            />
        
      </div>
      <div>
        <p className="font-semibold text-[#1a2f46] font-['Figtree'] text-[12px] lg:text-[14px] ">
          {title}
          {description && (
            <>
              {" "}
              <span className="font-normal font-['Figtree'] text-[12px] lg:text-[14px]">- {description}</span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
