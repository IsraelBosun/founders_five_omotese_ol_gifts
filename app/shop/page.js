import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export const metadata = {
  title: "Shop — O'L Gifts & Souvenirs",
  description: "Browse our full collection of curated, customizable gifts for every occasion and budget.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page hero */}
      <div className="bg-white border-b border-cream-dark py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1px] bg-gold" />
            <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">Our collection</p>
          </div>
          <h1 className="font-serif font-bold text-[36px] lg:text-[52px] text-ol-text leading-tight">
            Every gift, thoughtfully made.
          </h1>
          <p className="text-[15px] text-ol-text/50 mt-4 max-w-lg">
            From single presents to bulk event souvenirs — customized, curated, and crafted with care.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/shop/${product.slug}`} className="group block">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-cream-dark">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-deep text-white text-[10px] font-medium tracking-[0.12em] rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>

              <p className="text-[11px] tracking-[0.15em] text-gold font-medium mb-1.5">{product.categoryTag}</p>
              <h2 className="font-serif font-bold text-[22px] text-ol-text group-hover:text-purple-card transition-colors leading-snug">
                {product.name}
              </h2>
              <p className="text-[14px] text-ol-text/50 mt-1.5 leading-snug line-clamp-2">{product.tagline}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="font-serif font-semibold text-[18px] text-ol-text">{product.priceDisplay}</p>
                <span className="flex items-center gap-1.5 text-[12px] text-purple-card font-medium group-hover:gap-3 transition-all">
                  View details
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="bg-purple-deep mx-6 lg:mx-12 mb-16 rounded-3xl py-14 px-8 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-gold/70 font-medium uppercase mb-3">Not sure?</p>
          <h2 className="font-serif font-bold text-[26px] lg:text-[34px] text-white leading-tight max-w-sm">
            Let us curate the perfect gift for you.
          </h2>
        </div>
        <Link
          href="/bespoke"
          className="flex-shrink-0 px-8 py-4 bg-gold text-white text-[13px] font-medium rounded-full hover:bg-gold-light transition-colors"
        >
          Book free consultation
        </Link>
      </div>
    </div>
  );
}
