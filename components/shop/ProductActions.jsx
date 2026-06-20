"use client";

import { useState } from "react";
import { socialLinks } from "@/lib/data";

const wrapColors = [
  { name: "Purple", value: "purple", bg: "bg-purple-card", ring: "ring-purple-card" },
  { name: "Gold", value: "gold", bg: "bg-gold", ring: "ring-gold" },
  { name: "Cream", value: "cream", bg: "bg-cream-dark border border-cream-dark", ring: "ring-cream-dark" },
  { name: "Black", value: "black", bg: "bg-ol-text", ring: "ring-ol-text" },
];

export default function ProductActions({ product }) {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [engravingOn, setEngravingOn] = useState(false);
  const [engravingText, setEngravingText] = useState("");

  const whatsappMessage = encodeURIComponent(
    `Hi O'L Gifts! I'd like to order: ${product.name} (${product.priceDisplay}).${
      engravingOn && engravingText ? ` Engraving: "${engravingText}".` : ""
    } Wrap colour: ${selectedColor}. Please confirm availability.`
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Wrap colour */}
      <div>
        <p className="text-[11px] tracking-[0.15em] text-ol-text/40 uppercase font-medium mb-3">Wrap Colour</p>
        <div className="flex gap-2.5">
          {wrapColors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              title={color.name}
              className={`w-8 h-8 rounded-full ${color.bg} transition-all ${
                selectedColor === color.value
                  ? `ring-2 ${color.ring} ring-offset-2`
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Select ${color.name} wrap`}
            />
          ))}
        </div>
      </div>

      {/* Personalisation */}
      {product.features.includes("Custom engraving available") && (
        <div>
          <p className="text-[11px] tracking-[0.15em] text-ol-text/40 uppercase font-medium mb-3">Personalise it</p>
          <div className="rounded-xl border border-cream-dark bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-card/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-purple-card">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-ol-text">Add engraving</p>
                  <p className="text-[11px] text-ol-text/40">Up to 24 characters</p>
                </div>
              </div>
              {/* Toggle */}
              <button
                onClick={() => setEngravingOn(!engravingOn)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  engravingOn ? "bg-gold" : "bg-cream-dark"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                    engravingOn ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {engravingOn && (
              <input
                type="text"
                maxLength={24}
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                placeholder="e.g. Happy Birthday, Dad"
                className="mt-3 w-full px-3 py-2.5 rounded-lg border border-cream-dark text-[13px] text-ol-text placeholder-ol-text/30 focus:outline-none focus:border-purple-card transition-colors bg-cream"
              />
            )}
          </div>
        </div>
      )}

      {/* CTA buttons */}
      <div className="flex gap-3">
        <a
          href={`${socialLinks.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-purple-deep text-white text-[13px] font-medium rounded-full hover:bg-purple-card transition-colors"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order on WhatsApp
        </a>
        <button
          className="w-14 h-14 flex-shrink-0 rounded-full border-2 border-cream-dark flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
          aria-label="Save to wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
