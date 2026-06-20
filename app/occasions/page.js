import Link from "next/link";
import { occasions } from "@/lib/data";

export const metadata = {
  title: "Shop by Occasion — O'L Gifts & Souvenirs",
  description: "Find the perfect gift for any occasion — wedding, birthday, graduation, corporate events, and more.",
};

export default function OccasionsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-cream-dark py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1px] bg-gold" />
            <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">Shop by occasion</p>
          </div>
          <h1 className="font-serif font-bold text-[36px] lg:text-[52px] text-ol-text leading-tight">
            Every moment deserves<br />a perfect gift.
          </h1>
          <p className="text-[15px] text-ol-text/50 mt-4 max-w-lg">
            Browse our curated collections by occasion and find something beautiful for every celebration in your life.
          </p>
        </div>
      </div>

      {/* Occasions grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/occasions/${occasion.slug}`}
              className="group rounded-2xl bg-white border border-cream-dark p-6 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{occasion.icon}</div>
              <h2 className="font-serif font-semibold text-[18px] text-ol-text group-hover:text-purple-card transition-colors leading-snug mb-1">
                {occasion.name}
              </h2>
              <p className="text-[12px] text-ol-text/40">{occasion.count} items</p>
              <div className="mt-4 flex items-center gap-1 text-gold/0 group-hover:text-gold text-[12px] font-medium transition-all">
                Browse →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Consultation banner */}
      <div className="bg-navy mx-6 lg:mx-12 mb-16 rounded-3xl py-14 px-8 lg:px-14 text-center">
        <p className="text-[11px] tracking-[0.2em] text-gold/70 font-medium uppercase mb-4">Not sure what fits?</p>
        <h2 className="font-serif font-bold text-[26px] lg:text-[34px] text-white leading-tight max-w-md mx-auto mb-6">
          We&apos;ll help you find the perfect gift for your occasion.
        </h2>
        <Link
          href="/bespoke"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-[13px] font-medium rounded-full hover:bg-gold-light transition-colors"
        >
          Book a free consultation
        </Link>
      </div>
    </div>
  );
}
