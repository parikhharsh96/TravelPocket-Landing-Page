import ComparisonSection from "@/components/main/comparison-section";
import ContactOurExperts from "@/components/main/contact-our-experts";
import FeaturesSection from "@/components/main/features-section";
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

    </div>
    
  );
}
