export default function AnnouncementBar() {
  const messages = [
    "FREE CONSULTATION ON EVERY ORDER",
    "NATIONWIDE DELIVERY FROM LAGOS",
    "CUSTOM BRANDING AVAILABLE",
    "BULK ORDERS WELCOME",
  ];

  const repeated = [...messages, ...messages, ...messages, ...messages];

  return (
    <div className="bg-navy text-cream text-[11px] tracking-[0.15em] font-sans font-medium py-2.5 overflow-hidden">
      <div className="marquee-track gap-12 flex">
        {repeated.map((msg, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            {msg}
            <span className="text-gold opacity-70 text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
