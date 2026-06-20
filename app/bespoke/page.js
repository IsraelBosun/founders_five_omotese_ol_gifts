import Link from "next/link";
import { socialLinks } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata = {
  title: "Bespoke Consultation — O'L Gifts & Souvenirs",
  description: "Book a free consultation with our gifting experts. We'll help you find or create the perfect gift for any occasion and budget.",
};

const steps = [
  {
    number: "01",
    title: "Book a consultation",
    description: "Reach out via WhatsApp or our booking form. Initial consultation is always free.",
  },
  {
    number: "02",
    title: "Share your vision",
    description: "Tell us about the recipient, occasion, and your budget. No idea is too big or too personal.",
  },
  {
    number: "03",
    title: "We curate & create",
    description: "Our team designs and assembles a custom gift solution tailored exactly to your brief.",
  },
  {
    number: "04",
    title: "Delivery with love",
    description: "Your beautifully packaged gift is delivered nationwide, right on time.",
  },
];

export default function BespokePage() {
  const whatsappMsg = encodeURIComponent("Hi O'L Gifts! I'd like to book a free consultation for a bespoke gift. Please tell me more.");

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-white border-b border-cream-dark py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-[1px] bg-gold" />
                <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">Bespoke service</p>
              </div>
              <h1 className="font-serif font-bold text-[38px] lg:text-[54px] text-ol-text leading-[1.08] mb-6">
                Your vision,
                <br />
                <em className="italic text-gold">crafted</em> for you.
              </h1>
              <p className="text-[15px] text-ol-text/60 leading-relaxed mb-8 max-w-md">
                Have a vision but need help bringing it to life? Our bespoke consultation service pairs you with a dedicated gifting advisor who listens, designs, and executes to perfection.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`${socialLinks.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-purple-deep text-white text-[13px] font-medium rounded-full hover:bg-purple-card transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start on WhatsApp — it&apos;s free
                </a>
              </div>
              <p className="text-[12px] text-ol-text/40 mt-4">
                ✦ Consultation is always free · No commitment required
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150} variant="scale" className="hidden lg:block">
              <div className="relative h-[480px] rounded-3xl overflow-hidden bg-purple-card">
                <img
                  src="/images/products/product_5_photo_1.jpeg"
                  alt="Bespoke gifting"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-serif italic text-white/70 text-[15px] leading-relaxed">
                    &ldquo;Every brief is reimagined from scratch.&rdquo;
                  </p>
                  <p className="text-[12px] text-gold/70 mt-2">— O&apos;L Gifting Team</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <ScrollReveal className="text-center mb-14" variant="fade">
          <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase mb-3">The process</p>
          <h2 className="font-serif font-bold text-[28px] lg:text-[38px] text-ol-text">How it works</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-cream-dark z-0" />
                )}
                <div className="relative z-10">
                  <div className="font-serif font-bold text-[36px] text-gold/30 leading-none mb-4">{step.number}</div>
                  <h3 className="font-serif font-semibold text-[17px] text-ol-text mb-2">{step.title}</h3>
                  <p className="text-[13px] text-ol-text/50 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <ScrollReveal>
        <div className="bg-purple-deep py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-[11px] tracking-[0.2em] text-gold/70 font-medium uppercase mb-4">Transparent pricing</p>
            <h2 className="font-serif font-bold text-[28px] lg:text-[38px] text-white mb-8">
              Bespoke starts from ₦3,000
            </h2>
            <p className="text-[14px] text-white/50 max-w-md mx-auto mb-8">
              The initial consultation is always free. Custom gift creation starts from ₦3,000 — the exact price depends on your requirements.
            </p>
            <a
              href={`${socialLinks.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-[13px] font-medium rounded-full hover:bg-gold-light transition-colors"
            >
              Book free consultation
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
