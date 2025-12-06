import ContactOurExperts from "@/components/main/contact-our-experts";
import FeaturesSection from "@/components/main/features-section";
import HomeHeroSection from "@/components/main/hero-section";
import KailashFireHorseSection from "@/components/main/kailash-fire-horse-section";
import PackagesSection from "@/components/main/packages-section";
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

    </div>
    
  );
}
