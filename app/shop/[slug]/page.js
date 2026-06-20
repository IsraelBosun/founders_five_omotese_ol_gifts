import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/shop/ProductGallery";
import ProductActions from "@/components/shop/ProductActions";
import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — O'L Gifts & Souvenirs`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-cream-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-[12px] text-ol-text/40">
            <Link href="/" className="hover:text-ol-text transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-ol-text transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-ol-text">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Details */}
          <div>
            <p className="text-[11px] tracking-[0.18em] text-gold font-medium uppercase mb-3">
              {product.categoryTag}
            </p>
            <h1 className="font-serif font-bold text-[32px] lg:text-[42px] text-ol-text leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-[15px] text-ol-text/60 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-cream-dark">
              <p className="text-[12px] text-ol-text/40 uppercase tracking-wider mb-1">Starting from</p>
              <p className="font-serif font-bold text-[30px] text-ol-text">{product.priceDisplay}</p>
              {product.features.includes("Custom engraving available") && (
                <p className="text-[12px] text-ol-text/40 mt-1.5">
                  ✦ Free engraving · Gift wrap included
                </p>
              )}
            </div>

            {/* What's included */}
            {product.subItems && (
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.15em] text-ol-text/40 uppercase font-medium mb-3">
                  What we offer
                </p>
                <ul className="flex flex-col gap-2">
                  {product.subItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-ol-text/70">
                      <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.features.map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1.5 rounded-full border border-cream-dark text-[11px] text-ol-text/60"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* Actions */}
            <ProductActions product={product} />

            {/* Guarantee */}
            <div className="mt-6 pt-6 border-t border-cream-dark grid grid-cols-3 gap-3">
              {[
                { icon: "🎁", label: "Gift wrapped" },
                { icon: "🚚", label: "Nationwide delivery" },
                { icon: "✍️", label: "Customizable" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <p className="text-[11px] text-ol-text/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery grid — more images */}
        {product.images.length > 1 && (
          <div className="mt-16 lg:mt-24">
            <h2 className="font-serif font-semibold text-[22px] text-ol-text mb-6">More from this collection</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {product.images.slice(1, 6).map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-cream-dark">
                  <img src={img} alt={`${product.name} ${i + 2}`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related products */}
        <div className="mt-16 lg:mt-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif font-bold text-[24px] lg:text-[32px] text-ol-text">You may also love</h2>
            <Link href="/shop" className="text-[12px] text-gold font-medium tracking-wider uppercase hover:text-gold-light">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
