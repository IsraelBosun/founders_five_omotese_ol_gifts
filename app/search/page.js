import Link from "next/link";
import Image from "next/image";
import { products, occasions } from "@/lib/data";
import ProductCard from "@/components/shared/ProductCard";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata = {
  title: "Search — O'L Gifts & Souvenirs",
  description: "Search our full collection of gifts, occasions, and bespoke gifting solutions.",
};

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const matchedProducts = query
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.categoryTag.toLowerCase().includes(query) ||
        p.occasions.some((o) => o.toLowerCase().includes(query)) ||
        (p.subItems || []).some((s) => s.toLowerCase().includes(query))
      )
    : [];

  const matchedOccasions = query
    ? occasions.filter((o) => o.name.toLowerCase().includes(query))
    : [];

  const total = matchedProducts.length + matchedOccasions.length;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-cream-dark py-10 lg:py-14">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase mb-3">Search results</p>
          {query ? (
            <>
              <h1 className="font-serif font-bold text-[28px] lg:text-[42px] text-ol-text leading-tight">
                {total > 0 ? (
                  <>Results for <em className="italic text-gold">&ldquo;{q}&rdquo;</em></>
                ) : (
                  <>Nothing found for <em className="italic text-ol-text/40">&ldquo;{q}&rdquo;</em></>
                )}
              </h1>
              {total > 0 && (
                <p className="text-[13px] text-ol-text/40 mt-2">
                  {total} {total === 1 ? "result" : "results"} found
                </p>
              )}
            </>
          ) : (
            <h1 className="font-serif font-bold text-[28px] lg:text-[42px] text-ol-text">Search our collection</h1>
          )}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Empty state — no query */}
        {!query && (
          <div className="text-center py-20">
            <div className="font-serif text-[80px] text-gold/20 leading-none mb-6">✦</div>
            <p className="text-[15px] text-ol-text/50">Use the search bar above to find gifts, occasions, or products.</p>
          </div>
        )}

        {/* No results */}
        {query && total === 0 && (
          <div className="text-center py-20">
            <div className="font-serif font-black text-[100px] text-ol-text/[0.06] leading-none mb-6">?</div>
            <h2 className="font-serif font-semibold text-[22px] text-ol-text mb-3">Nothing matched that search</h2>
            <p className="text-[14px] text-ol-text/50 max-w-sm mx-auto mb-8 leading-relaxed">
              Try a different word, or browse our full collection to discover the perfect gift.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/shop"
                className="px-7 py-3.5 bg-purple-deep text-white text-[13px] font-medium rounded-full hover:bg-purple-card transition-colors"
              >
                Browse the shop
              </Link>
              <Link
                href="/occasions"
                className="px-7 py-3.5 border border-ol-text/20 text-[13px] font-medium text-ol-text rounded-full hover:bg-white transition-colors"
              >
                Shop by occasion
              </Link>
            </div>
          </div>
        )}

        {/* Products */}
        {matchedProducts.length > 0 && (
          <div className="mb-14">
            <ScrollReveal variant="fade">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-cream-dark">
                <h2 className="font-serif font-semibold text-[20px] text-ol-text">
                  Products{" "}
                  <span className="text-ol-text/30 font-sans font-normal text-[14px]">({matchedProducts.length})</span>
                </h2>
                <Link href="/shop" className="text-[12px] text-gold font-medium tracking-wider uppercase hover:text-gold-light transition-colors">
                  View all
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {matchedProducts.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 75} variant="scale">
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Occasions */}
        {matchedOccasions.length > 0 && (
          <div>
            <ScrollReveal variant="fade">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-cream-dark">
                <h2 className="font-serif font-semibold text-[20px] text-ol-text">
                  Occasions{" "}
                  <span className="text-ol-text/30 font-sans font-normal text-[14px]">({matchedOccasions.length})</span>
                </h2>
                <Link href="/occasions" className="text-[12px] text-gold font-medium tracking-wider uppercase hover:text-gold-light transition-colors">
                  View all
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {matchedOccasions.map((occasion, i) => (
                <ScrollReveal key={occasion.slug} delay={i * 75} variant="scale">
                  <Link
                    href={`/occasions/${occasion.slug}`}
                    className="group block relative rounded-2xl overflow-hidden aspect-[3/4] bg-cream-dark"
                  >
                    <Image
                      src={occasion.image}
                      alt={occasion.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-purple-deep/0 group-hover:bg-purple-deep/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-serif font-semibold text-white text-[15px] leading-snug">{occasion.name}</p>
                      <p className="text-[11px] text-white/55 mt-0.5">{occasion.count} items</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
