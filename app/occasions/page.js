import Link from "next/link";
import Image from "next/image";
import { occasions } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";

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
          <ScrollReveal variant="fade">
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
          </ScrollReveal>
        </div>
      </div>

      {/* Occasions grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {occasions.map((occasion, i) => (
            <ScrollReveal key={occasion.slug} delay={i * 60} variant="scale">
              <Link
                href={`/occasions/${occasion.slug}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[3/4] bg-cream-dark"
              >
                <Image
                  src={occasion.image}
                  alt={occasion.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-purple-deep/0 group-hover:bg-purple-deep/25 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <h2 className="font-serif font-semibold text-white text-[15px] lg:text-[17px] leading-snug">
                    {occasion.name}
                  </h2>
                  <p className="text-[11px] text-white/55 mt-1">{occasion.count} items</p>
                  <div className="mt-2 flex items-center gap-1 text-gold text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Browse →
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Consultation banner */}
      <ScrollReveal className="mx-6 lg:mx-12 mb-16">
        <div className="bg-navy rounded-3xl py-14 px-8 lg:px-14 text-center">
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
      </ScrollReveal>
    </div>
  );
}
