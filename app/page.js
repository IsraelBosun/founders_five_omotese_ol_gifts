import Hero from "@/components/home/Hero";
import OccasionGrid from "@/components/home/OccasionGrid";
import BudgetSection from "@/components/home/BudgetSection";
import CuratedSection from "@/components/home/CuratedSection";
import VisionSection from "@/components/home/VisionSection";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OccasionGrid />
      <BudgetSection />
      <CuratedSection />
      <VisionSection />
      <Testimonials />

      {/* CTA Banner */}
      <section className="bg-cream-dark py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase mb-4">Get started</p>
          <h2 className="font-serif font-bold text-[28px] lg:text-[40px] text-ol-text mb-4 max-w-xl mx-auto leading-tight">
            Not sure where to begin? Let us guide you.
          </h2>
          <p className="text-[14px] text-ol-text/50 mb-8 max-w-md mx-auto">
            Book a free consultation and we&apos;ll help you find the perfect gift for your occasion and budget.
          </p>
          <Link
            href="/bespoke"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-deep text-white text-[13px] font-medium rounded-full hover:bg-purple-card transition-colors"
          >
            Book a free consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
