"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navLinks } from "@/lib/data";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [desktopQuery, setDesktopQuery] = useState("");
  const [mobileQuery, setMobileQuery] = useState("");
  const router = useRouter();
  const desktopInputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) desktopInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    if (searchOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  const handleDesktopSearch = (e) => {
    e.preventDefault();
    if (desktopQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(desktopQuery.trim())}`);
      setSearchOpen(false);
      setDesktopQuery("");
    }
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (mobileQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(mobileQuery.trim())}`);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b transition-all duration-300 relative ${
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
            <Link href="/" className="flex-1 flex justify-center lg:justify-start lg:flex-none">
              <div className="flex flex-col items-center lg:items-start leading-none">
                <span className="font-serif font-bold text-xl lg:text-2xl text-ol-text italic tracking-tight">O&apos;L</span>
                <span className="text-[9px] tracking-[0.2em] text-gold font-sans font-medium uppercase">Gifts & Souvenirs</span>
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
              {/* Search — desktop */}
              <button
                onClick={() => setSearchOpen((o) => !o)}
                className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full hover:bg-cream transition-colors"
                aria-label="Search"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5L21 21" />
                </svg>
              </button>

              {/* Book consultation — desktop */}
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

        {/* Desktop search overlay — slides down from header */}
        <div
          className={`absolute top-full left-0 right-0 bg-white border-b border-cream-dark shadow-xl z-50 transition-all duration-200 ${
            searchOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5">
            <form onSubmit={handleDesktopSearch} className="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-ol-text/40 flex-shrink-0">
                <circle cx="11" cy="11" r="7" />
                <path d="M16.5 16.5L21 21" />
              </svg>
              <input
                ref={desktopInputRef}
                type="search"
                value={desktopQuery}
                onChange={(e) => setDesktopQuery(e.target.value)}
                placeholder="Search gifts, occasions, budgets..."
                className="flex-1 text-[17px] text-ol-text bg-transparent outline-none placeholder:text-ol-text/30"
              />
              <span className="hidden lg:block text-[11px] text-ol-text/25 tracking-wider">ESC to close</span>
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setDesktopQuery(""); }}
                className="text-ol-text/30 hover:text-ol-text transition-colors p-1 ml-2"
                aria-label="Close search"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Mobile search bar */}
      <div className="lg:hidden bg-white px-4 pb-3 border-b border-cream-dark">
        <form onSubmit={handleMobileSearch} className="flex items-center gap-3 bg-cream rounded-full px-4 py-2.5">
          <button type="submit" className="flex-shrink-0" aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-ol-text/40">
              <circle cx="11" cy="11" r="7" />
              <path d="M16.5 16.5L21 21" />
            </svg>
          </button>
          <input
            type="search"
            value={mobileQuery}
            onChange={(e) => setMobileQuery(e.target.value)}
            placeholder="Search gifts, occasions..."
            className="flex-1 bg-transparent text-[13px] text-ol-text outline-none placeholder:text-ol-text/30"
          />
        </form>
      </div>
    </>
  );
}
