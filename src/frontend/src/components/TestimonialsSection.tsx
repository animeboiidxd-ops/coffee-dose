import { useCallback, useEffect, useRef, useState } from "react";
import { reviews } from "../data/reviews";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="text-sm"
          style={{
            color: star <= rating ? "#D4AF37" : "rgba(212,175,55,0.25)",
          }}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % reviews.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  return (
    <div
      data-ocid="reviews.section"
      className="relative py-24 md:py-36"
      style={{ background: "#2A1A12" }}
    >
      {/* Decorative rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#D4AF37]/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#D4AF37]/8 pointer-events-none"
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="scarcity-badge mb-5">✦ What Guests Say</p>
          <h2
            className="text-5xl md:text-7xl text-[#F5EBE0] leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            Social Proof
            <em className="italic text-[#D4AF37]"> Engine</em>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="text-[#D4AF37] text-xl"
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>
            <span
              className="text-[#F5EBE0]/50 text-sm ml-2"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              4.9 · Based on Zomato & Swiggy reviews
            </span>
          </div>
        </div>

        {/* Featured review */}
        <div
          className="relative glass-card p-8 md:p-12 mb-8 rounded-3xl text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ background: "rgba(245,235,224,0.04)" }}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Quote mark */}
          <div
            className="text-[#D4AF37]/20 text-8xl absolute top-4 left-8 leading-none pointer-events-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative z-10">
            <StarRating rating={reviews[current].rating} />
            <p
              className="text-[#F5EBE0]/85 text-lg md:text-xl leading-relaxed mt-6 mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <span
                className="text-[#F5EBE0] font-medium text-sm tracking-wider"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {reviews[current].author}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    reviews[current].source === "Zomato"
                      ? "bg-red-900/30 text-red-400"
                      : "bg-orange-900/30 text-orange-400"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {reviews[current].source}
                </span>
                <span
                  className="text-[#F5EBE0]/30 text-xs"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {reviews[current].date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={prev}
            data-ocid="reviews.prev_button"
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all duration-200 flex items-center justify-center"
          >
            ←
          </button>
          <div
            className="flex gap-2"
            role="tablist"
            aria-label="Review navigation dots"
          >
            {reviews.map((review, i) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setCurrent(i)}
                data-ocid={`reviews.dot.${i + 1}`}
                aria-label={`Go to review ${i + 1}`}
                role="tab"
                aria-selected={i === current}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#D4AF37] w-6"
                    : "bg-[#F5EBE0]/25 hover:bg-[#D4AF37]/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            data-ocid="reviews.next_button"
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all duration-200 flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* Mini review grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reviews.slice(0, 4).map((review, i) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setCurrent(i)}
              data-ocid={`reviews.mini_card.${i + 1}`}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                i === current
                  ? "border-[#D4AF37]/50 bg-[#D4AF37]/10"
                  : "border-[#F5EBE0]/10 hover:border-[#D4AF37]/30"
              }`}
              style={{
                background:
                  i === current ? undefined : "rgba(245,235,224,0.03)",
              }}
            >
              <StarRating rating={review.rating} />
              <p
                className="text-[#F5EBE0]/60 text-xs mt-2 line-clamp-2"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {review.text.slice(0, 70)}…
              </p>
              <p
                className="text-[#D4AF37]/70 text-xs mt-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                — {review.author}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
