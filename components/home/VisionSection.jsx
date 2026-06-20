import Link from "next/link";
import { coreValues } from "@/lib/data";

export default function VisionSection() {
  return (
    <section className="py-20 lg:py-28 bg-purple-deep overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
          {/* Left — vision statement */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-[1px] bg-gold/50" />
              <p className="text-[10px] tracking-[0.25em] text-gold/70 font-medium uppercase">Our Vision</p>
            </div>

            <h2 className="font-serif font-bold text-[36px] lg:text-[52px] text-white leading-[1.1] mb-8">
              To be the most
              <br />
              trusted name in
              <br />
              <em className="italic text-gold">meaningful,
              <br />
              memorable</em> and
              <br />
              magnificent gifts.
            </h2>

            <p className="text-[14px] lg:text-[15px] leading-relaxed text-white/50 max-w-md mb-8">
              We don&apos;t just sell products. We help you capture life&apos;s quietest
              joys — a promotion, a vow, a homecoming — and place them into
              something a loved one can hold.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] text-gold/70 hover:text-gold uppercase font-medium transition-colors"
            >
              Read our story
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — core values grid */}
          <div className="grid grid-cols-2 gap-4">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 p-5 lg:p-6 hover:border-gold/30 hover:bg-white/5 transition-all"
              >
                <p className="font-serif italic text-gold/60 text-[13px] mb-3">{value.roman}</p>
                <h3 className="font-serif font-semibold text-white text-[15px] leading-snug mb-2">
                  {value.name}
                </h3>
                <p className="text-[12px] text-white/40 leading-snug">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
