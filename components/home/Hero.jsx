import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-0 lg:pt-16 pb-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy (hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">
                Bespoke Gifting · Est. Lagos
              </p>
            </div>

            <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[58px] font-bold leading-[1.08] tracking-tight text-ol-text mb-6">
              Gifts worth{" "}
              <em className="italic text-gold not-italic font-bold">remembering.</em>
              <br />
              Wrapped with
              <br />
              intention.
            </h1>

            <p className="text-[15px] leading-relaxed text-ol-text/60 mb-8 max-w-md">
              From a single thoughtful present to two hundred branded
              souvenirs — we curate, customize, and craft the gifting
              moment so you don&apos;t have to.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-purple-deep text-white text-[13px] font-medium rounded-full hover:bg-purple-card transition-colors"
              >
                Browse the collection
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/bespoke"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-ol-text/20 text-ol-text text-[13px] font-medium rounded-full hover:border-ol-text/40 hover:bg-cream transition-colors"
              >
                Book a free consultation
              </Link>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {["Handcrafted quality", "Nationwide delivery", "Custom branding"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span className="text-[12px] text-ol-text/50 tracking-wide">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — product cards mosaic */}
          <div className="relative hidden lg:flex justify-center items-end pb-0 min-h-[540px]">
            {/* Main featured card — purple */}
            <div className="absolute top-0 right-8 w-[220px] bg-purple-card rounded-2xl p-5 shadow-xl shadow-purple-card/20">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-gold/80 uppercase">Gift for Him</p>
                  <p className="text-[10px] text-white/40">#047</p>
                </div>
                <span className="px-2 py-0.5 bg-gold text-white text-[9px] font-medium rounded-full tracking-wider">NEW</span>
              </div>
              <div className="h-[100px] flex items-center justify-center">
                <span className="font-serif font-black text-[80px] text-white/10 leading-none">P</span>
              </div>
              <div className="mt-3 border-t border-white/10 pt-3">
                <h3 className="font-serif font-bold text-white text-[15px]">The Patriarch Set</h3>
                <p className="text-[11px] text-gold mt-1">From ₦45,000 · Engraving included</p>
              </div>
            </div>

            {/* Testimonial quote card */}
            <div className="absolute top-[170px] right-[260px] w-[200px] bg-white rounded-2xl p-4 shadow-lg border border-cream-dark">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#c69b2d">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] italic font-serif text-ol-text leading-snug">
                &ldquo;The recipient loved it. The packaging alone was worth it.&rdquo;
              </p>
            </div>

            {/* Monogram card — cream */}
            <div className="absolute top-[260px] right-0 w-[180px] h-[130px] bg-cream-dark rounded-2xl flex flex-col items-center justify-center shadow-md">
              <span className="font-serif font-bold text-[40px] text-ol-text/25 leading-none italic">L &amp; J</span>
              <p className="text-[10px] tracking-[0.12em] text-gold/70 mt-1 uppercase">Couples Set</p>
            </div>

            {/* Souvenir tag card */}
            <div className="absolute bottom-[80px] right-[220px] bg-white rounded-xl px-4 py-3 shadow-lg border border-cream-dark">
              <p className="text-[11px] font-medium text-ol-text">Wedding Souvenirs</p>
              <p className="text-[10px] text-ol-text/40">Set of 100</p>
              <p className="text-[13px] font-serif font-bold text-gold mt-1">₦2,500/ea</p>
            </div>

            {/* Product image — largest, anchoring right bottom */}
            <div className="relative w-[240px] h-[360px] rounded-2xl overflow-hidden ml-auto mt-auto shadow-2xl">
              <Image
                src="/images/photos/photo_1.jpeg"
                alt="Featured gift set"
                fill
                className="object-cover"
                priority
                sizes="240px"
              />
            </div>
          </div>
        </div>

        {/* Mobile hero card — full dark-purple style matching mockup */}
        <div className="lg:hidden -mx-6 px-4 pb-6 bg-white">
          <div className="bg-purple-deep rounded-2xl p-6 relative overflow-hidden">
            {/* gold corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold/20 rounded-bl-[60px]" />
            <p className="text-[10px] tracking-[0.2em] text-gold/80 uppercase font-medium mb-3">Bespoke Gifting · Lagos</p>
            <h2 className="font-serif font-bold text-[26px] text-white leading-tight mb-3">
              Gifts worth<br />
              <em className="italic text-gold">remembering.</em>
            </h2>
            <p className="text-[13px] text-white/50 leading-relaxed mb-5">
              From a single thoughtful present to two hundred branded souvenirs — curated, customized, crafted.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-white text-[12px] font-medium rounded-full hover:bg-gold-light transition-colors"
            >
              Browse collection
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
