"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ProductGallery({ images, name }) {
  const gallery = images.slice(0, 5);
  const [active, setActive] = useState(0);
  const dragStartX = useRef(null);
  const didDrag = useRef(false);

  const prev = () => setActive((a) => (a - 1 + gallery.length) % gallery.length);
  const next = () => setActive((a) => (a + 1) % gallery.length);

  const onTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    dragStartX.current = null;
  };

  const onMouseDown = (e) => {
    dragStartX.current = e.clientX;
    didDrag.current = false;
  };
  const onMouseMove = (e) => {
    if (dragStartX.current !== null && Math.abs(e.clientX - dragStartX.current) > 6) {
      didDrag.current = true;
    }
  };
  const onMouseUp = (e) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    dragStartX.current = null;
  };
  const onMouseLeave = () => { dragStartX.current = null; };

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div
        className="relative aspect-square rounded-2xl overflow-hidden bg-cream-dark cursor-grab active:cursor-grabbing select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <Image
          src={gallery[active]}
          alt={`${name} — image ${active + 1}`}
          fill
          className="object-cover pointer-events-none transition-opacity duration-300"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          draggable={false}
        />

        {/* Prev / next arrows */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
              {gallery.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full bg-white transition-all duration-300 ${
                    active === i ? "w-4 opacity-100" : "w-1.5 opacity-40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-square rounded-lg overflow-hidden bg-cream-dark transition-all ${
                active === i
                  ? "ring-2 ring-purple-card ring-offset-1"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
