import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function NarrativeSection() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
  });
  const [imgRef, imgVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      data-ocid="narrative.section"
      className="relative py-28 md:py-40 overflow-hidden grain-overlay"
      style={{ background: "#F5EBE0" }}
    >
      {/* Decorative background ring */}
      <div
        className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#D4AF37]/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#D4AF37]/15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="scarcity-badge mb-6">✦ Our Philosophy</p>
          <h2
            className="text-4xl md:text-6xl text-[#3C2A21] leading-tight mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            The Art of
            <br />
            <em className="italic text-[#D4AF37]">the Pour</em>
          </h2>
          <p
            className="text-[#3C2A21]/70 text-lg leading-relaxed mb-10"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            Brewing Bliss wasn't just built; it was poured. We are a sanctuary
            for those who appreciate the finer details—from the perfect crema on
            a latte to the subtle zest in our signature mocktails. Our café is a
            canvas for your best moments.
          </p>

          <div className="flex gap-12">
            {[
              { number: "50+", label: "Menu Items" },
              { number: "4.9★", label: "Average Rating" },
              { number: "10K+", label: "Happy Guests" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-3xl text-[#D4AF37]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-[0.7rem] text-[#3C2A21]/50 tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          className={`relative transition-all duration-1000 delay-200 ease-out ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div
            className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37]/25 rounded-2xl"
            aria-hidden="true"
          />
          <img
            src="/assets/generated/gallery-latte-art.dim_800x1000.jpg"
            alt="Barista pouring perfect latte art at Coffee Dose"
            className="relative z-10 w-full rounded-2xl object-cover"
            style={{ height: "520px", objectFit: "cover" }}
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 z-20 glass-card px-4 py-3">
            <p
              className="text-[#D4AF37] text-sm tracking-wider"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              "Handcrafted with precision, served with soul."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
