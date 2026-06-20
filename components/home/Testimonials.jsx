import { testimonials } from "@/lib/data";

const featured = testimonials.slice(0, 3);

const avatarColors = [
  "bg-purple-card text-white",
  "bg-gold text-white",
  "bg-navy text-white",
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-gold/40" />
            <p className="text-[11px] tracking-[0.2em] text-gold font-medium uppercase">From the journal</p>
            <div className="w-10 h-[1px] bg-gold/40" />
          </div>
          <h2 className="font-serif font-bold text-[30px] lg:text-[40px] text-ol-text">
            Words from <em className="italic text-gold">our</em> recipients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="bg-cream rounded-2xl p-7 flex flex-col"
            >
              {/* Quote mark */}
              <div className="font-serif text-[60px] text-gold/30 leading-none mb-2 -mt-2">&ldquo;</div>

              <p className="font-serif italic text-[17px] text-ol-text leading-relaxed flex-1">
                {testimonial.quote}
              </p>

              {testimonial.detail && (
                <p className="text-[13px] text-ol-text/50 mt-3 leading-relaxed">{testimonial.detail}</p>
              )}

              <div className="mt-6 pt-5 border-t border-cream-dark flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${avatarColors[i % avatarColors.length]}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-medium text-[13px] text-ol-text">{testimonial.author}</p>
                  <p className="text-[11px] text-ol-text/40">
                    {testimonial.occasion}
                    {testimonial.orders && ` · ${testimonial.orders}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
