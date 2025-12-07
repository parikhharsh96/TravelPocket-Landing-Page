"use client"

import { Badge } from "../ui/badge";

    interface GiftProduct {
    id: number
    name: string
    description: string
    image: string
}

    interface GiftProductCardProps {
    product: GiftProduct
}

const products = [
    {
        id: 1,
        name: "Duffel Bag",
        description: "Spacious, durable & travel-ready.",
        image: "/images/detailpage/bag_img.png",
    },
    {
        id: 2,
        name: "Backpack",
        description: "Lightweight & handy for daily yatra use.",
        image: "/images/detailpage/bagpack_m.png",
    },
    {
        id: 3,
        name: "Jacket",
        description: "Keeps you warm at high altitudes.",
        image: "/images/detailpage/gift_jacket.png",
    },
    {
        id: 4,
        name: "Puja Samagri Kit",
        description: "Includes all essentials for spiritual rituals.",
        image: "/images/detailpage/gift-acc.png",
    },
]

export default function GiftSetsSection() {



    return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-['Figtree'] text-[12px] lg:text-[14px] font-semibold md:text-base text-[#1a2f46] mb-2">Thoughtful Travel Gifts</p>
          <h2 className="font-['Playfair_Display'] text-[20px] lg:text-[30px] font-bold text-[#1a2f46] mb-2">
            Kailash Mansarovar Parikrama 2026 - Gift Sets
          </h2>
          <img
              src="/images/diamond-separator.svg"
              alt="separator"
              className="mx-auto"
            />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 mb-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>



        
        
      </div>
    </section>
  )
}

function ProductCard({ product }: GiftProductCardProps) {
    return (
        <div className="flex flex-col gap-[10px] items-start">
            <div className="relative">
                <img
                    src={product.image}
                    alt={`product-`}
                    className="object-contain rounded-lg border border-[#EAEAEA] bg-white"
                />
                {/* Gift Badge - positioned absolutely at top-left for all devices */}
                <Badge
                    variant="popular"
                    icon="/images/detailpage/featured_seasonal_and_gifts.svg"
                    className="absolute top-1 left-1 rounded-[4px] bg-[#FCD205]"
                >
                    <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Gift</span>
                </Badge>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-[6px]">
                <h3 className="text-[#333] font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{product.name}</h3>
                <p className="text-[#333] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[21px] md:leading-[22px]">{product.description}</p>
            </div>
        </div>
    )
}