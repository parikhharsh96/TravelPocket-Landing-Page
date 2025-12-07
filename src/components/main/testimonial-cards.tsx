"use client";

import { useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation";

const packages = [
    {
        id: 1,
        title: "Kailash Mansarovar Yatra",
        description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 2,
        title: "Kedarnath, Tungnath and Badrinath Yatra",
        description: "Uttarakhand’s most revered temples",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 3,
        title: "Adi Kailash Om Parvat Yatra",
        description: "via Lipu Pass | Pithoragarh",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 4,
        title: "Char Dham Yatra with Helicopter",
        description: "Visit the four sacred Dhams by Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 5,
        title: "Char Dham Yatra with Helicopter",
        description: "Visit the four sacred Dhams by Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 6,
        title: "Kailash Mansarovar Yatra",
        description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    }
];

export default function TestimonialCards() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const navigateToTravelVideos = () => {
        router.push("/videos"); //need to add dynamic routing later
    };

    const CARD_WIDTH = 400;
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="container mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] mb-12 mt-12">

            <div className="flex flex-col gap-4">
                <div className="text-center mb-12">
          <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base text-[#1a2f46] mb-2">Real People</p>
          <h2 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] mb-2">
            Hapy stories from our travellers
          </h2>
          <img
              src="/images/diamond-separator.svg"
              alt="separator"
              className="mx-auto"
            />
        </div>


                {/* Slider */}
                <div className="relative px-[50px]">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10"
                        style={{ background: '#E3E6EE' }}
                    >
                        <ArrowLeft className="h-5 w-5 cursor-pointer" />
                    </button>

                    <div className="slider-wrp">
                        {/* Cards */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 px-4 scrollbar-hide no-scrollbar"
                        >
                            
                                <div className="flex-shrink-0 snap-start rounded-lg overflow-hidden bg-white shadow-md
                                                    w-[250px] sm:w-[260px] md:w-[280px] lg:w-[300px]">
                                    <div className="aspect-[9/16] w-full">
                                        <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/gLKwYFVEnKI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 snap-start rounded-lg overflow-hidden bg-white shadow-md
                                                    w-[250px] sm:w-[260px] md:w-[280px] lg:w-[300px]">
                                    <div className="aspect-[9/16] w-full">
                                        <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/gLKwYFVEnKI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>


                                <div className="flex-shrink-0 snap-start rounded-lg overflow-hidden bg-white shadow-md
                                                    w-[250px] sm:w-[260px] md:w-[280px] lg:w-[300px]">
                                    <div className="aspect-[9/16] w-full">
                                        <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/gLKwYFVEnKI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>


                                <div className="flex-shrink-0 snap-start rounded-lg overflow-hidden bg-white shadow-md
                                                    w-[250px] sm:w-[260px] md:w-[280px] lg:w-[300px]">
                                    <div className="aspect-[9/16] w-full">
                                        <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/gLKwYFVEnKI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>


                                <div className="flex-shrink-0 snap-start rounded-lg overflow-hidden bg-white shadow-md
                                                    w-[250px] sm:w-[260px] md:w-[280px] lg:w-[300px]">
                                    <div className="aspect-[9/16] w-full">
                                        <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/gLKwYFVEnKI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                            
                        </div>
                    </div>
                    {/* Right Arrow */}
                    <Button
                        onClick={() => scroll("right")}
                        className="absolute right-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10 cursor-pointer"
                        style={{ background: '#E3E6EE' }}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>

                
            </div>
        </section>
    );
}