import Link from "next/link";
import { occasions } from "@/lib/data";

const featuredOccasions = occasions.slice(0, 5);

export default function OccasionGrid() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-8">
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
        </div>

        {/* Desktop — horizontal row */}
        <div className="hidden sm:grid grid-cols-5 gap-4">
          {featuredOccasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/occasions/${occasion.slug}`}
              className="group border border-cream-dark rounded-2xl p-5 hover:border-gold/40 hover:bg-cream/60 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-cream-dark flex items-center justify-center text-xl mb-4 group-hover:border-gold/40 transition-colors">
                {occasion.icon}
              </div>
              <p className="font-serif font-semibold text-[15px] text-ol-text group-hover:text-purple-card transition-colors">
                {occasion.name}
              </p>
              <p className="text-[12px] text-ol-text/40 mt-1">{occasion.count} items</p>
            </Link>
          ))}
        </div>

        {/* Mobile — 3-column then overflow */}
        <div className="sm:hidden grid grid-cols-3 gap-3">
          {featuredOccasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/occasions/${occasion.slug}`}
              className="group border border-cream-dark rounded-xl p-3.5 hover:border-gold/40 hover:bg-cream/60 transition-all text-center"
            >
              <div className="text-2xl mb-2">{occasion.icon}</div>
              <p className="font-medium text-[13px] text-ol-text">{occasion.name}</p>
              <p className="text-[11px] text-ol-text/40 mt-0.5">{occasion.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
