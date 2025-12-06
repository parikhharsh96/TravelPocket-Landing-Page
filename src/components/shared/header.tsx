'use client';

import { useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/filters-accordion";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { ScrollArea } from "../ui/scroll-area";
import { useRouter } from "next/navigation";

interface HeaderProps {
    bgColor?: string; // pass tailwind background class
    rounded?: string;
    showSearch?: boolean;
}

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

const allDestinations = [
    ...domesticDestinations.map((d) => ({ ...d, type: "Domestic" })),
    ...internationalDestinations.map((d) => ({ ...d, type: "International" })),
];

const iconRoutes: Record<string, string> = {
    "magnifiying-glass": "/search",
    "wishlist": "/wishlist",
    "cart": "/cart",
    "user": "/account",
}


export default function Header({ bgColor, rounded, showSearch = false }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const router = useRouter();

    const navLinks = ["Home", "Why Us", "Packages", "Gifts","Testimonials","Reach us On Whatsapp"];
    const topLinks = [
        { label: "Home", href: "/blogs" },
        { label: "Why Us", href: "/rewards" },
        { label: "Packages", href: "/offers" },
        { label: "Gifts", href: "/faqs" },
        { label: "Testimonials", href: "/contact-us" },
        { label: "Reach us On Whatsapp", href: "/contact-us" },
    ];
    const icons = [
        ...(!showSearch ? ["magnifiying-glass"] : []),
        "wishlist",
        "cart",
        "user"
    ];

    const handleIconClick = (icon: string) => {
        const route = iconRoutes[icon]

        if (!route) return // ignore if no route

        router.push(route)
    }

    const navigateToHome = () => {
        router.push("/");
    };

    const navigateToPackages = () => {
        router.push("/listing");
    };

    return (
        // <header className="w-full overflow-x-hidden relative bg-white rounded-md" style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.12)" }}>
        <header
            className={`w-full overflow-x-hidden relative ${bgColor ?? "bg-white"}`}
            style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.12)" }}
        >
        

            {/* Bottom Bar */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-[2rem] xl:px-[6rem] flex justify-between items-center gap-2 py-2">
                <div className="flex items-center gap-4">
                    {/* Hamburger Menu for Mobile & Tablet */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <img src="/images/header/dehaze.svg" alt="Menu" className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={navigateToHome}>
                        <img src="/images/footer/logo_design_travel_pocket.svg" alt="Logo" 
                        className="w-[110px] sm:w-[180px] h-auto" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center sm:gap-[2rem] md:gap-[2rem] lg:gap-[3rem]">
                    {topLinks.map((item, index) => {
                       

                        // For All Destination nav links, just Popover
                        return (

                            <div className="flex items-center justify-center gap-1 sm:gap-2 text-[10px] md:text-[10px] lg:text-[12px] font-semibold uppercase text-[#333] group hover:text-[#e97737] 
                            cursor-pointer" key={item.label}>
                                        <span>{item.label}</span>
                                     
                                    </div>
                            
                        );

                    })}
                </div>

               
                <div className="flex items-center gap-2 sm:gap-4">
                    <Button className="bg-[#e97737] hover:bg-[#c75414] px-2 sm:px-4">
                  <div className="flex items-center gap-2">
                    
                    <div className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">
                      <span >Book Now</span>
                     
                    </div>
                  </div>
                </Button>
                </div>
            </div>

            {/* Mobile/Tablet Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)}>
                        <img src="/images/header/close.svg" alt="Close" className="w-6 h-6" />
                    </button>
                </div>

                {/* Links */}
                <ScrollArea className="h-[calc(100%-64px)] px-6 pb-6">
                    <nav className="flex flex-col gap-4 mt-4">
                        {topLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[#1A2F46] font-[Figtree] text-[12px] md:text-[12px] font-semibold lg:text-[14px] uppercase hover:text-[#E97737] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        

                       
                    </nav>
                </ScrollArea>
            </div>

            {/* Overlay */}
            {
                isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-opacity-30 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )
            }

            {
                showSearch && (
                    <div className="px-6 pb-4 pt-1">
                        <InputGroup
                            className="[&[data-slot=input-group]]:border-0 [&[data-slot=input-group]]:shadow-none [&[data-slot=input-group]]:bg-[#DDF9FF] [&[data-slot=input-group]]:focus-within:ring-0 text-[#000000] placeholder-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-normal"
                        >
                            <InputGroupInput
                                placeholder="Search..."
                                className="bg-[#DDF9FF] !border-0 !shadow-none !focus:ring-0 !outline-none text-[#000000] placeholder-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-normal"
                            />
                            <InputGroupAddon className="bg-[#DDF9FF]">
                                <Search className="w-4 h-4 text-[#1A2F46]" />
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                )
            }
        </header >
    );
}
