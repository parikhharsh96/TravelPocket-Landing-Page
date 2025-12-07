import { Phone } from "lucide-react"

export default function CtaBannerSection() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/let-the-journey-begin-bg.svg')`,
        }}
      >
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/30"></div>

        {/* Content - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          
          
        <img
              src="/images/let-the-journey-begin-text.svg"
              alt="separator"
              className="mx-auto"
            />

          {/* Text */}
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 max-w-2xl">
            Kailash Awaits. Your Blessings Await. Don&apos;t just dream about Kailash, make it a reality with the most
            trusted name in pilgrimage travel in 2026.
          </p>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-md sm:max-w-none sm:w-auto">
            <button className="bg-[#e97737] hover:bg-[#d16a2f] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base text-center whitespace-nowrap">
              Book your Spot for 2026
            </button>

            <a
              href="tel:+917827033601"
              className="flex items-center justify-center gap-2 bg-[#e97737] hover:bg-[#d16a2f] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              +91 78270-33601
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
