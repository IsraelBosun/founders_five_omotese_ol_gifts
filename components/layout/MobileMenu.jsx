"use client";

import { useEffect } from "react";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-navy/60 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-dark">
          <div className="flex flex-col leading-none">
            <span className="font-serif font-bold text-xl text-ol-text italic">O&apos;L</span>
            <span className="text-[9px] tracking-[0.2em] text-gold font-sans font-medium uppercase">Gifts & Souvenirs</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream" aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between py-3.5 text-[15px] font-medium text-ol-text border-b border-cream-dark/60 hover:text-purple-card transition-colors"
            >
              {link.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}

          <Link
            href="/bespoke"
            onClick={onClose}
            className="mt-8 flex items-center justify-center py-3.5 bg-purple-deep text-white text-[13px] font-medium tracking-wide rounded-full"
          >
            Book a free consultation
          </Link>
        </nav>

        <div className="px-6 py-5 border-t border-cream-dark">
          <p className="text-[11px] tracking-[0.12em] text-ol-text/40 mb-3 uppercase">Follow us</p>
          <div className="flex gap-3">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-cream-dark flex items-center justify-center hover:border-purple-card hover:text-purple-card transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-cream-dark flex items-center justify-center hover:border-purple-card hover:text-purple-card transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.14a8.25 8.25 0 004.83 1.55V7.24a4.85 4.85 0 01-1.06-.55z"/>
              </svg>
            </a>
            <a href={`mailto:${socialLinks.email}`} className="w-9 h-9 rounded-full border border-cream-dark flex items-center justify-center hover:border-purple-card hover:text-purple-card transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
