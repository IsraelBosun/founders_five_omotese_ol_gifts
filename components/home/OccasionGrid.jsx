import Link from "next/link";
import Image from "next/image";
import { occasions } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";

const featuredOccasions = occasions.slice(0, 5);

export default function OccasionGrid() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <ScrollReveal className="flex items-end justify-between mb-8">
          <h2 className="font-serif font-bold text-[28px] lg:text-[34px] text-ol-text">
            Shop by occasion
          </h2>
          <Link
            href="/occasions"
            className="text-[12px] tracking-[0.12em] text-gold font-medium uppercase hover:text-gold-light transition-colors flex items-center gap-1.5"
          >
            View all 12
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 lg:gap-4">
          {featuredOccasions.map((occasion, i) => (
            <ScrollReveal key={occasion.slug} delay={i * 75} variant="scale">
              <Link
                href={`/occasions/${occasion.slug}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[3/4] bg-cream-dark"
              >
                <Image
                  src={occasion.image}
                  alt={occasion.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-0 bg-purple-deep/0 group-hover:bg-purple-deep/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                  <p className="font-serif font-semibold text-white text-[13px] lg:text-[16px] leading-snug">
                    {occasion.name}
                  </p>
                  <p className="text-[10px] lg:text-[11px] text-white/55 mt-0.5">
                    {occasion.count} items
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
