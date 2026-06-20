"use client";

import Link from "next/link";
import Image from "next/image";

const cardBgMap = {
  gold: "bg-[#c9952a]",
  purple: "bg-purple-card",
  "purple-mid": "bg-[#5b2d90]",
  cream: "bg-cream-dark",
};

const initialColorMap = {
  gold: "text-[#a87c1f]/30",
  purple: "text-white/20",
  "purple-mid": "text-white/20",
  cream: "text-ol-text/15",
};

const badgeBgMap = {
  BESTSELLER: "bg-gold text-white",
  CUSTOM: "bg-purple-deep text-white",
  NEW: "bg-ol-text text-white",
  BRANDED: "bg-navy text-white",
};

export default function ProductCard({ product, showImage = true }) {
  const bg = cardBgMap[product.cardColor] || "bg-cream-dark";
  const initialColor = initialColorMap[product.cardColor] || "text-ol-text/15";
  const badgeStyle = product.badge ? (badgeBgMap[product.badge] || "bg-ol-text text-white") : null;

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Card visual */}
      <div className={`relative ${bg} rounded-2xl overflow-hidden aspect-[3/4] mb-4`}>
        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] rounded-full ${badgeStyle}`}>
            {product.badge}
          </div>
        )}

        {/* Wishlist button */}
        <button
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label="Save item"
          onClick={(e) => e.preventDefault()}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>

        {showImage && product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-serif font-black text-[140px] leading-none select-none ${initialColor} group-hover:scale-110 transition-transform duration-500`}>
              {product.initial}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <p className="text-[11px] tracking-[0.15em] text-gold font-medium mb-1">{product.categoryTag}</p>
        <h3 className="font-serif font-semibold text-[16px] text-ol-text group-hover:text-purple-card transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-[13px] text-ol-text/50 mt-1">{product.priceDisplay}</p>
      </div>
    </Link>
  );
}
