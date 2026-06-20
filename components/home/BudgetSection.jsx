import Link from "next/link";
import { budgetRanges } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function BudgetSection() {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-10 h-[1px] bg-gold/40" />
            <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">Shop by budget</p>
            <div className="w-10 h-[1px] bg-gold/40" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {budgetRanges.map((range, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <Link
                href={`/shop?budget=${range.range}`}
                className="group block h-full rounded-2xl border border-white/10 p-6 lg:p-8 hover:border-gold/40 hover:bg-white/5 active:scale-[0.97] transition-all duration-200"
              >
                <p className="font-serif font-bold text-white text-[20px] lg:text-[24px] group-hover:text-gold transition-colors mb-2">
                  {range.label}
                </p>
                <p className="text-[12px] text-white/40 leading-snug">{range.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-gold/0 group-hover:text-gold/70 transition-colors">
                  <span className="text-[11px] tracking-wider uppercase">Explore</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
