"use client"

import { useState } from "react"

import {
  Search,
  Phone,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Utensils,
  FileText,
  Plane,
  Building,
  Wind,
  MoreHorizontal,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/filters-accordion";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import React from "react"
import { ScrollArea } from "../ui/scroll-area"
import Header from "../shared/header"
import EnquiryForm from "./enquiry-form"


const topLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "JOIN POCKETCLUB", href: "/rewards" },
  { label: "OFFERS", href: "/offers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact-us" },
];

const navLinks = ["Kailash Mansarovar", "ADI Kailash", "All Destinations", "WHO WE ARE"];

const whoWeAreOptions = [
  { label: "About us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Gallery/Media", href: "/gallery-media" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];

const domesticDestinations = [
  { label: "Kailash Mansarovar", url: "/details" },
  { label: "Adi Kailash & Om Parvat", url: "/details" },
  { label: "Chardham", url: "/details" },
  { label: "Do Dham", url: "/details" },
  { label: "Kedarnath", url: "/details" },
  { label: "Himachal", url: "/details" },
  { label: "Rajasthan", url: "/details" },
  { label: "North India", url: "/details" }
];

const internationalDestinations = [
  { label: "Nepal", url: "/details" },
  { label: "Bali", url: "/details" },
  { label: "Bhutan", url: "/details" },
  { label: "Tibet", url: "/details" }
];

const destinationsList = [
  { label: "Kailash Mansarovar", url: "/details" },
  { label: "Adi Kailash", url: "/details" },
  { label: "Nepal", url: "/details" },
  { label: "Kedarnath", url: "/details" }
];

const destinations = [
  { label: "KAILASH MANSAROVAR", value: "kailash-mansarovar" },
  { label: "ADI KAILASH & OM PARVAT", value: "adi-kailash-om-parvat" },
  { label: "CHAR DHAM", value: "char-dham" },
  { label: "KEDARNATH", value: "kedarnath" },
  { label: "RAJASTHAN", value: "rajasthan" },
];

const tripTypes = [
  { label: "BY ROAD", value: "by-road" },
  { label: "BY HELICOPTER", value: "by-helicopter" },
];

const tripDurations = [
  { label: "5 NIGHT 6 DAYS", value: "5-night-6-days" },
  { label: "7 NIGHT 8 DAYS", value: "7-night-8-days" },
  { label: "6 NIGHT 7 DAYS", value: "6-night-7-days" },
  { label: "8 NIGHT / 9 DAYS", value: "8-night-9-days" },
  { label: "13 NIGHT 14 DAYS", value: "13-night-14-days" },
];

const travellers = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
];


const allDestinations = [
  ...domesticDestinations.map((d) => ({ ...d, type: "Domestic" })),
  ...internationalDestinations.map((d) => ({ ...d, type: "International" })),
];

const iconRoutes: Record<string, string> = {
  "magnifiying-glass": "/search",
  "wishlist": "/wishlist",
  "cart": "/cart",
  // "user": "/account",
}

const icons = ["magnifiying", "wishlist", "cart"];

export default function HomeHeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToPackages = () => {
    router.push("/listings");
  };

  const handleIconClick = (icon: string) => {
    const route = iconRoutes[icon]

    if (!route) return // ignore if no route

    router.push(route)
  }

  return (
    <div className="bg-[#ffffff]">
      {/* Top Banner */}
      <div className="bg-[#242A3A]  px-4 text-center">
        <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-1 lg:gap-2">
          <div className="flex items-center gap-2">
            <img src="/images/microphone.gif" alt="Announcement" className="w-6 h-6" />
            <span className="text-white font-['Figtree'] text-[10px] lg:text-[12px] font-normal leading-normal">Registrations Now Open for <span className="font-semibold">Kailash Mansarovar Yatra 2026 Parikrama!</span> Secure your seat
              today!</span>
          </div>
          
            <span className="text-white font-['Figtree'] text-[10px] lg:text-[12px] font-semibold leading-normal underline underline-offset-auto decoration-solid uppercase">REGISTER NOW</span>
          
        </div>
      </div>

      {/* Background Image Container with Overlay */}
      <div
        className="bg-gradient-to-b from-[#1a2f46] to-[#21315d] bg-cover bg-center bg-no-repeat relative bg-[url('/images/home-section-bg-mob.png')] md:bg-[url('/images/home-section-bg-mob.png')] lg:bg-[url('/images/home-section-bg.svg')]"
      >
        {/* Dark overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        {/* Content with relative positioning */}
        <div className="relative z-10">
          

          <div><Header /></div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="hidden lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#1a2f46]/95 backdrop-blur-sm z-50">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#ffffff] p-2 hover:bg-[#ffffff]/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-4 py-6 space-y-4">
                {/* Top Navigation Links */}
                <div className="space-y-3">
                  <nav className="flex flex-col gap-4 px-6 mt-4">
                    {topLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[#FFFFFF] font-['Figtree'] text-[12px] md:text-[12px] font-semibold lg:text-[14px] uppercase hover:text-[#E97737] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        {link.label}
                      </Link>
                    ))}

                    <Separator orientation="horizontal" className="my-2 bg-[#E7E7E7] border border-[#E7E7E7]" />

                    {/**DestionList Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="destinations">
                        {/* Accordion Header */}
                        <AccordionTrigger className="text-[#FFFFFF] font-['Figtree'] text-[16px] font-semibold leading-normal hover:text-[#E97737] transition-colors py-1" iconColor="text-[#FFFFFF]">
                          All Destinations
                        </AccordionTrigger>

                        {/* Accordion Content — contains all links */}
                        <AccordionContent className="">
                          <ScrollArea className="h-64 w-full">
                            <div className="flex flex-col gap-2 p-2">
                              {allDestinations.map((destination, index) => (
                                <div key={destination.label}>
                                  <Link
                                    href={destination.url}
                                    className="block px-2 py-2 text-[#FFFFFF] font-['Figtree'] text-[15px] font-medium hover:text-[#E97737] transition-colors"
                                  >
                                    {destination.label}
                                  </Link>

                                  {/* Separator below each link except the last one */}
                                  {index !== allDestinations.length - 1 && (
                                    <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" /> */}

                    {/**Who are we accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="who-we-are">
                        {/* Accordion Header */}
                        <AccordionTrigger iconColor="text-[#FFFFFF]" className="text-[#FFFFFF] font-['Figtree'] text-[16px] font-semibold leading-normal hover:text-[#E97737] transition-colors py-1">
                          Who We Are
                        </AccordionTrigger>

                        {/* Accordion Content — contains all links */}
                        <AccordionContent className="">
                          <ScrollArea className="h-64 w-full">
                            <div className="flex flex-col gap-2 p-2">
                              {whoWeAreOptions.map((option, index) => (
                                <div key={option.label}>
                                  <Link
                                    href={option.href}
                                    className="block px-2 py-2 text-[#FFFFFF] font-['Figtree'] text-[15px] font-medium hover:text-[#E97737] transition-colors"
                                  >
                                    {option.label}
                                  </Link>

                                  {/* Separator below each link except the last one */}
                                  {index !== whoWeAreOptions.length - 1 && (
                                    <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mb-2" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                  </nav>
                </div>
              </div>
            </div>
          )}

         

          {/* Hero Section */}
          <main className="mx-auto py-8 sm:py-16 px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className=" mb-4 lg:mb-8 rounded-lg p-4 sm:p-8 text-center lg:text-left ">
                  <h1 className="text-white font-bold text-[30px] lg:text-[50px]">
  Kailash Mansarovar <br />
  Yatra 2026
</h1>

                  <div className="text-white font-['Figtree'] text-[22px] lg:text-[30px] font-semibold leading-normal mb-6">
                    Registrations are {" "}
                    <span className="bg-[#e97737] text-[#ffffff] px-2 sm:px-3 py-1 rounded">Open Now</span>
                  </div>
                  <div className="text-white font-['Figtree'] text-[14px] 
                  lg:text-[15px] font-semibold leading-normal mb-4 lg:mb-8 w-full lg:w-[70%]  text-center lg:text-left">
                    Begin your spiritual journey to the abode of Lord Shiva with TravelPocket’s trusted Kailash Mansarovar Yatra packages for 2026. Experience one of the world’s most sacred pilgrimages, crafted with safety, comfort, and guidance from start to finish.
                    </div>
                 
                </div>
              </div>

              {/* Inclusions Sidebar */}
              <div className="rounded-lg bg-black/40 lg:bg-black/20 backdrop-blur-sm px-4 py-4 sm:px-4 sm:py-4 h-fit max-w-sm mx-auto lg:mx-0">
                
                <EnquiryForm />       
              </div>
            </div>

           
          </main>
        </div>
      </div>

      <section className="container mx-auto lg:hidden"> {/**max-w-[1920px] */}
        <div className="w-full fixed bottom-0 left-0 right-0 z-100">
          <div className="bg-[#D06225] px-4 py-3">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-[4px] shrink-0 items-center cursor-pointer">
                <img src="/images/detailpage/call_white.svg" alt="" className="" />
                <div className="text-white text-center font-['Figtree'] text-[13px] font-semibold leading-[normal] capitalize">
                  Request
                  <span className="lowercase"> a </span>
                  call back
                </div>
              </div>
              <div className="flex flex-row gap-[6px] shrink-0 items-center cursor-pointer">
                <div className="text-white font-['Figtree'] text-[13px] font-semibold leading-[normal] capitalize">Chat with us</div>
                <img src="/images/detailpage/whatsapp_white.svg" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
