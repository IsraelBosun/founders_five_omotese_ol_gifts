import Link from "next/link";
import { socialLinks } from "@/lib/data";

const shopLinks = [
  { label: "Gifts for him", href: "/shop/gifts-for-him" },
  { label: "Gifts for her", href: "/shop/gifts-for-her" },
  { label: "Event souvenirs", href: "/shop/event-souvenirs" },
  { label: "Corporate gifts", href: "/shop/corporate-gifts" },
  { label: "Bespoke consultation", href: "/bespoke" },
];

const occasionLinks = [
  { label: "Wedding", href: "/occasions/wedding" },
  { label: "Birthday", href: "/occasions/birthday" },
  { label: "Graduation", href: "/occasions/graduation" },
  { label: "Anniversary", href: "/occasions/anniversary" },
  { label: "Church & conference", href: "/occasions/church-conference" },
];

const helpLinks = [
  { label: "Track your order", href: "/track" },
  { label: "Delivery & returns", href: "/delivery" },
  { label: "Custom branding", href: "/bespoke" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-24 lg:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2 max-w-xs">
            <div className="mb-4 flex flex-col leading-none">
              <span className="font-serif font-bold text-2xl text-white italic">O&apos;L</span>
              <span className="text-[9px] tracking-[0.2em] text-gold font-sans font-medium uppercase mt-0.5">Gifts & Souvenirs</span>
            </div>
            <p className="text-[13px] leading-relaxed text-white/50 mb-6">
              Meaningful, memorable, magnificent gifts — curated and crafted in Lagos, delivered nationwide.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.14a8.25 8.25 0 004.83 1.55V7.24a4.85 4.85 0 01-1.06-.55z"/>
                </svg>
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Email"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.18em] font-medium text-white/40 uppercase mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Occasions */}
          <div>
            <h4 className="text-[11px] tracking-[0.18em] font-medium text-white/40 uppercase mb-5">Occasions</h4>
            <ul className="flex flex-col gap-3">
              {occasionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] tracking-[0.18em] font-medium text-white/40 uppercase mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
          <span>© 2026 O&apos;L Gifts & Souvenirs. All rights reserved.</span>
          <span className="font-serif italic text-gold/40">olgiftssouvenirs@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
