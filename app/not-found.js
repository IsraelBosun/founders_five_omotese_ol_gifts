import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream px-6 text-center">
      <div className="font-serif font-black text-[120px] lg:text-[180px] text-gold/20 leading-none mb-4">404</div>
      <h1 className="font-serif font-bold text-[26px] lg:text-[34px] text-ol-text mb-3">
        Page not found
      </h1>
      <p className="text-[14px] text-ol-text/50 max-w-sm mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved or been removed.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="px-7 py-3.5 bg-purple-deep text-white text-[13px] font-medium rounded-full hover:bg-purple-card transition-colors">
          Go home
        </Link>
        <Link href="/shop" className="px-7 py-3.5 border border-ol-text/20 text-ol-text text-[13px] font-medium rounded-full hover:bg-white hover:border-ol-text/30 transition-colors">
          Browse the shop
        </Link>
      </div>
    </div>
  );
}
