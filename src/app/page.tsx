import ComparisonSection from "@/components/main/comparison-section";
import ContactOurExperts from "@/components/main/contact-our-experts";
import CtaBannerSection from "@/components/main/cta-banner-section";
import FeaturesSection from "@/components/main/features-section";
import Footer from "@/components/main/footer";
import GiftSetsSection from "@/components/main/gift-sets-section";
import HomeHeroSection from "@/components/main/hero-section";
import KailashFireHorseSection from "@/components/main/kailash-fire-horse-section";
import PackagesSection from "@/components/main/packages-section";
import TestimonialCards from "@/components/main/testimonial-cards";
import WhatsAppBanner from "@/components/main/whatsapp-banner";
import WhyTravelPocketSection from "@/components/main/why-travelpocket-section";
import { Package } from "lucide-react";
import Image from "next/image";


export default function Home() {

  
  return (
    <div className="">
      <HomeHeroSection/>
    <FeaturesSection/>
    <KailashFireHorseSection />
    <WhyTravelPocketSection />
    <PackagesSection />
    <ContactOurExperts/>
    <ComparisonSection/>
    <GiftSetsSection />
    <TestimonialCards/>
    <WhatsAppBanner/>
    <CtaBannerSection/>
    <Footer/>

    </div>
    
  );
}

export const metadata = {
  title: "Kailash Mansarovar Yatra 2026 | TravelPocket",
  description: "Best Kailash Yatra packages with TravelPocket...",
  keywords: ["Kailash Yatra","Kailash Mansarovar Yatra", "Kailash Mansarovar Yatra 2026",
     "Mount Kailash Tour", "TravelPocket","कैलाश यात्रा", " कैलाश मानसरोवर यात्रा 2026", "Kailash Mansarovar Yatra Cost","Kailash Mansarovar Yatra helicopter", "Kailash Mansarovar Yatra from Mumbai"],
  openGraph: {
    title: "Kailash Mansarovar Yatra 2026 By TravelPocket",
    description: "Premium-managed Kailash Mansarovar Yatra package 2026",
    url: "https://landing.travelpocket.co.in/",
    images: ["/images/home-section-bg-mob.png"],
  },
  alternates: {
    canonical: "https://landing.travelpocket.co.in/",
  },
};

