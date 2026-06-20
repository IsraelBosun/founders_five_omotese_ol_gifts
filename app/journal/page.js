import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Journal — O'L Gifts & Souvenirs",
  description: "Gifting inspiration, trends, and stories from the O'L atelier.",
};

const articles = [
  {
    slug: "how-to-choose-the-perfect-gift",
    category: "Gifting Guide",
    title: "How to Choose the Perfect Gift for Any Occasion",
    excerpt: "Finding the right gift isn't about price — it's about intention. Here's how we approach every brief at O'L Gifts.",
    image: "/images/photos/photo_3.jpeg",
    date: "June 2026",
    readTime: "4 min read",
  },
  {
    slug: "corporate-gifting-trends-2026",
    category: "Corporate",
    title: "Corporate Gifting in 2026: What Works and What Doesn't",
    excerpt: "Branded souvenirs have evolved. We explore what modern clients and employees actually appreciate — and why personalisation matters more than ever.",
    image: "/images/photos/photo_10.jpeg",
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    slug: "wedding-souvenirs-guide",
    category: "Events",
    title: "The Ultimate Guide to Wedding Souvenirs in Nigeria",
    excerpt: "From asoebi gifts to personalised keepsakes — how to choose souvenirs your guests will actually keep and treasure.",
    image: "/images/photos/photo_7.jpeg",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    slug: "personalised-gifts-impact",
    category: "Gifting Guide",
    title: "Why Personalised Gifts Leave a Lasting Impression",
    excerpt: "There's a reason a name engraved on a flask means more than the flask itself. We explore the psychology of personalisation in gifting.",
    image: "/images/photos/photo_6.jpeg",
    date: "March 2026",
    readTime: "3 min read",
  },
  {
    slug: "lagos-gifting-culture",
    category: "Culture",
    title: "The Art of Gifting in Lagos — A Cultural Perspective",
    excerpt: "In Lagos, a gift is never just a gift. It's a statement, a relationship, a memory. Here's what makes gifting so special in Nigerian culture.",
    image: "/images/photos/photo_2.jpeg",
    date: "February 2026",
    readTime: "5 min read",
  },
  {
    slug: "gift-packaging-matters",
    category: "Behind the Scenes",
    title: "Why Packaging Is Half the Gift",
    excerpt: "The moment of unwrapping is as important as what's inside. We share our approach to presentation and why we obsess over every detail.",
    image: "/images/photos/photo_1.jpeg",
    date: "January 2026",
    readTime: "4 min read",
  },
];

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-cream-dark py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1px] bg-gold" />
            <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">The journal</p>
          </div>
          <h1 className="font-serif font-bold text-[36px] lg:text-[52px] text-ol-text leading-tight">
            Gifting, <em className="italic">stories</em> & inspiration.
          </h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Featured article */}
        <Link href={`/journal/${featured.slug}`} className="group block mb-12 lg:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-dark">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.15em] text-gold font-medium uppercase mb-3">{featured.category}</p>
              <h2 className="font-serif font-bold text-[26px] lg:text-[36px] text-ol-text group-hover:text-purple-card transition-colors leading-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-[14px] text-ol-text/55 leading-relaxed mb-5">{featured.excerpt}</p>
              <p className="text-[12px] text-ol-text/35">{featured.date} · {featured.readTime}</p>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="border-t border-cream-dark mb-12" />

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article) => (
            <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-cream-dark mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-[10px] tracking-[0.15em] text-gold font-medium uppercase mb-2">{article.category}</p>
              <h3 className="font-serif font-semibold text-[17px] text-ol-text group-hover:text-purple-card transition-colors leading-snug mb-2">
                {article.title}
              </h3>
              <p className="text-[12px] text-ol-text/40">{article.date} · {article.readTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
