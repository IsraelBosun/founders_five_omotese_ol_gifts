"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/components/shared/ProductCard";

const tabs = ["All", "For him", "For her", "Event", "Corporate"];

const tabFilterMap = {
  "All": null,
  "For him": "For Him",
  "For her": "For Her",
  "Event": "Wedding Souvenir",
  "Corporate": "Corporate",
};

export default function CuratedSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? products.filter((p) => p.id <= 4)
    : products.filter((p) => p.category === tabFilterMap[activeTab]);

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif font-bold text-[28px] lg:text-[38px] text-ol-text leading-tight">
              Curated <em className="italic text-gold">just</em> for you.
            </h2>
            <p className="text-[14px] text-ol-text/50 mt-2">This week&apos;s most-loved picks from our atelier.</p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-purple-deep text-white shadow-sm"
                    : "bg-white text-ol-text/60 border border-cream-dark hover:border-ol-text/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-ol-text/40 font-serif italic text-lg">
            No items in this category yet.
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-ol-text/20 text-[13px] font-medium text-ol-text hover:bg-white hover:border-ol-text/30 transition-all"
          >
            View all products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
