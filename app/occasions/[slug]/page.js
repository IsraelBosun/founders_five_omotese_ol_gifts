import { occasions, products } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";
import ScrollReveal from "@/components/shared/ScrollReveal";

export async function generateStaticParams() {
  return occasions.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const occasion = occasions.find((o) => o.slug === slug);
  if (!occasion) return {};
  return {
    title: `${occasion.name} Gifts — O'L Gifts & Souvenirs`,
    description: `Find the perfect ${occasion.name.toLowerCase()} gifts. Curated and customised with love.`,
  };
}

export default async function OccasionPage({ params }) {
  const { slug } = await params;
  const occasion = occasions.find((o) => o.slug === slug);
  if (!occasion) notFound();

  const relevant = products.filter(
    (p) => p.occasions.some((o) => o.toLowerCase() === occasion.name.toLowerCase()) || p.id <= 4
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-white border-b border-cream-dark py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade">
            <nav className="flex items-center gap-2 text-[12px] text-ol-text/40 mb-6">
              <Link href="/" className="hover:text-ol-text transition-colors">Home</Link>
              <span>/</span>
              <Link href="/occasions" className="hover:text-ol-text transition-colors">Occasions</Link>
              <span>/</span>
              <span className="text-ol-text">{occasion.name}</span>
            </nav>
            <div className="text-4xl mb-4">{occasion.icon}</div>
            <h1 className="font-serif font-bold text-[36px] lg:text-[52px] text-ol-text leading-tight">
              {occasion.name} gifts
            </h1>
            <p className="text-[15px] text-ol-text/50 mt-4 max-w-lg">
              Thoughtfully curated gifts to celebrate every {occasion.name.toLowerCase()} — customised, beautifully packaged, and delivered with care.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {relevant.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80} variant="scale">
              <ProductCard product={p} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-ol-text/20 text-[13px] font-medium text-ol-text hover:bg-white hover:border-ol-text/30 transition-all">
            View all products
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
