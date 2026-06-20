import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/data";

export const metadata = {
  title: "Corporate Gifts — O'L Gifts & Souvenirs",
  description: "High-quality branded corporate gifts and souvenirs for businesses, employee appreciation, client gifting, and professional events.",
};

const corporateServices = [
  {
    title: "Branded Gift Sets",
    description: "Company-branded hampers and sets for clients, partners, and stakeholders.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80&fit=crop&auto=format",
  },
  {
    title: "Employee Appreciation",
    description: "Recognise and reward your team with thoughtful, personalised gifts.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&fit=crop&auto=format",
  },
  {
    title: "Client Gifting",
    description: "Leave a lasting impression with premium gifts for your valued clients.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80&fit=crop&auto=format",
  },
  {
    title: "Promotional Merchandise",
    description: "Custom branded items that keep your company top of mind.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80&fit=crop&auto=format",
  },
  {
    title: "Conference Souvenirs",
    description: "Professional branded souvenirs for events, seminars, and conferences.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&fit=crop&auto=format",
  },
  {
    title: "Company-Branded Items",
    description: "From stationery to lifestyle products — all bearing your brand.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80&fit=crop&auto=format",
  },
];

const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
  src: `/images/products/product_4_photo_${i}.jpeg`,
  alt: `Corporate gift work ${i}`,
}));

export default function CorporatePage() {
  const whatsappMsg = encodeURIComponent("Hi O'L Gifts! I'd like to inquire about corporate gifting solutions for my company. Please share more details.");

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-purple-deep py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-[1px] bg-gold/50" />
              <p className="text-[11px] tracking-[0.2em] text-gold/70 font-medium uppercase">Corporate gifting</p>
            </div>
            <h1 className="font-serif font-bold text-[40px] lg:text-[58px] text-white leading-[1.08] mb-6">
              Gifts that carry
              <br />
              your brand forward.
            </h1>
            <p className="text-[15px] text-white/50 leading-relaxed mb-8 max-w-lg">
              We create thoughtful, high-quality branded merchandise that represents your organisation with pride. From ₦7,000 per set, minimum 20 units.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`${socialLinks.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white text-[13px] font-medium rounded-full hover:bg-gold-light transition-colors"
              >
                Get a corporate quote
              </a>
              <Link
                href="/shop/corporate-gifts"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[13px] font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                View products
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-black text-[300px] text-white/[0.03] leading-none select-none pointer-events-none">
          C
        </div>
      </div>

      {/* Services grid — image cards */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase mb-3">What we offer</p>
          <h2 className="font-serif font-bold text-[30px] lg:text-[40px] text-ol-text">
            Corporate gifting solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {corporateServices.map((service) => (
            <div key={service.title} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-dark">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <h3 className="font-serif font-semibold text-white text-[17px] lg:text-[19px] leading-snug mb-1">
                  {service.title}
                </h3>
                <p className="text-[12px] text-white/60 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif font-bold text-[26px] lg:text-[34px] text-ol-text mb-8">Our corporate work</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-xl overflow-hidden bg-cream-dark">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing + CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="bg-navy rounded-3xl py-14 px-8 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gold/70 font-medium uppercase mb-3">Pricing</p>
            <h2 className="font-serif font-bold text-[26px] lg:text-[34px] text-white leading-tight">
              From ₦7,000 per set
            </h2>
            <p className="text-[14px] text-white/40 mt-2">Minimum 20 units · Bulk discounts available</p>
          </div>
          <a
            href={`${socialLinks.whatsapp}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-[13px] font-medium rounded-full hover:bg-gold-light transition-colors"
          >
            Request a quote
          </a>
        </div>
      </div>
    </div>
  );
}
