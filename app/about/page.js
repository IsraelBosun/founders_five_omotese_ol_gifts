import Image from "next/image";
import Link from "next/link";
import { coreValues, testimonials } from "@/lib/data";

export const metadata = {
  title: "Our Story — O'L Gifts & Souvenirs",
  description: "Learn about O'L Gifts & Souvenirs — our vision, core values, and the story behind Lagos' most trusted bespoke gifting studio.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-purple-deep py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-[1px] bg-gold/50" />
              <p className="text-[11px] tracking-[0.2em] text-gold/70 font-medium uppercase">Our story</p>
            </div>
            <h1 className="font-serif font-bold text-[40px] lg:text-[60px] text-white leading-[1.06] mb-6">
              Gifts that capture
              <br />
              <em className="italic text-gold">life&apos;s quietest joys.</em>
            </h1>
            <p className="text-[15px] lg:text-[16px] text-white/50 leading-relaxed max-w-lg">
              O&apos;L Gifts & Souvenirs was born from a simple belief — that every moment worth celebrating deserves a gift worth remembering.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 font-serif font-black text-[250px] text-white/[0.03] leading-none select-none pointer-events-none translate-y-1/4">
          O&apos;L
        </div>
      </div>

      {/* Story */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="grid grid-cols-2 gap-3 h-[420px]">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image src="/images/photos/photo_3.jpeg" alt="Gift crafting" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative rounded-2xl overflow-hidden flex-1">
                    <Image src="/images/photos/photo_4.jpeg" alt="Personalised gift" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden flex-1">
                    <Image src="/images/photos/photo_7.jpeg" alt="Wedding souvenir" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif font-bold text-[28px] lg:text-[36px] text-ol-text leading-tight mb-6">
                More than a gift shop — we create <em className="italic text-gold">gifting moments.</em>
              </h2>
              <div className="flex flex-col gap-4 text-[14px] lg:text-[15px] text-ol-text/60 leading-relaxed">
                <p>
                  At O&apos;L Gifts & Souvenirs, we focus on creating meaningful and memorable gifting experiences rather than simply selling products. Based in Lagos and delivering nationwide, we serve individuals, couples, businesses, and event planners.
                </p>
                <p>
                  We offer attention to every detail, quality craftsmanship, and excellent customer service to ensure every gift feels special. Our ability to customize products to match our customers&apos; preferences, occasions, and brand identities is what sets us apart.
                </p>
                <p>
                  From a single thoughtful present to two hundred branded souvenirs — we curate, customize, and craft the gifting moment so you don&apos;t have to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="py-16 lg:py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-gold/40" />
            <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">Our vision</p>
            <div className="w-10 h-[1px] bg-gold/40" />
          </div>
          <h2 className="font-serif font-bold text-[32px] lg:text-[50px] text-ol-text leading-[1.1] max-w-3xl mx-auto">
            To be the most trusted name in{" "}
            <em className="italic text-gold">meaningful, memorable</em>
            {" "}and magnificent gifts and souvenirs.
          </h2>
          <p className="text-[14px] text-ol-text/50 mt-6 max-w-xl mx-auto leading-relaxed">
            Gifts and souvenirs that capture life&apos;s special moments and inspire the spread of joy, love, and fulfillment — crafted in Lagos, felt everywhere.
          </p>
        </div>
      </div>

      {/* Core values */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase mb-3">What we stand for</p>
            <h2 className="font-serif font-bold text-[28px] lg:text-[38px] text-ol-text">Our core values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...coreValues, {
              roman: "v.",
              name: "Entrepreneurship",
              description: "Building something that lasts, one gift at a time.",
            }].map((value, i) => (
              <div key={i} className="rounded-2xl bg-cream border border-cream-dark p-7">
                <p className="font-serif italic text-gold/50 text-[16px] mb-4">{value.roman}</p>
                <h3 className="font-serif font-bold text-[18px] text-ol-text mb-2">{value.name}</h3>
                <p className="text-[13px] text-ol-text/50 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 lg:py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-serif font-bold text-[28px] lg:text-[38px] text-ol-text">
              Loved by <em className="italic text-gold">hundreds</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 border border-cream-dark">
                <div className="font-serif text-[48px] text-gold/20 leading-none mb-2 -mt-1">&ldquo;</div>
                <p className="font-serif italic text-[15px] text-ol-text leading-relaxed">{t.quote}</p>
                <div className="mt-5 pt-4 border-t border-cream-dark flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-card text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-medium text-[13px] text-ol-text">{t.author}</p>
                    <p className="text-[11px] text-ol-text/40">{t.occasion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif font-bold text-[28px] lg:text-[38px] text-white mb-4">
            Ready to create something special?
          </h2>
          <p className="text-[14px] text-white/40 mb-8">Let us help you find the perfect gift.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="px-8 py-4 bg-gold text-white text-[13px] font-medium rounded-full hover:bg-gold-light transition-colors">
              Browse the shop
            </Link>
            <Link href="/bespoke" className="px-8 py-4 border border-white/20 text-white text-[13px] font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-colors">
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
