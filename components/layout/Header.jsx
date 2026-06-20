"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled ? "border-cream-dark shadow-sm" : "border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Mobile: hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-1 -ml-1"
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px] bg-ol-text" />
              <span className="block w-5 h-[1.5px] bg-ol-text" />
              <span className="block w-3 h-[1.5px] bg-ol-text" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex-1 flex justify-center lg:justify-start lg:flex-none"
            >
              <div className="flex flex-col items-center lg:items-start leading-none">
                <span className="font-serif font-bold text-xl lg:text-2xl text-ol-text italic tracking-tight">
                  O&apos;L
                </span>
                <span className="text-[9px] tracking-[0.2em] text-gold font-sans font-medium uppercase">
                  Gifts & Souvenirs
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8 ml-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-ol-text/70 hover:text-ol-text tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Search — desktop only */}
              <button className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full hover:bg-cream transition-colors" aria-label="Search">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5L21 21" />
                </svg>
              </button>

              {/* Book consultation — desktop only */}
              <Link
                href="/bespoke"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-purple-deep text-white text-[12px] font-medium tracking-wide rounded-full hover:bg-purple-card transition-colors"
              >
                Book a consultation
              </Link>

              {/* Cart */}
              <button className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-cream transition-colors" aria-label="Cart">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Mobile search bar */}
      <div className="lg:hidden bg-white px-4 pb-3 border-b border-cream-dark">
        <div className="flex items-center gap-3 bg-cream rounded-full px-4 py-2.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-ol-text/30 flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </svg>
          <span className="text-[13px] text-ol-text/30">Search gifts, occasions...</span>
        </div>
      </div>
    </>
  );
}
