import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const PLATFORMS = [
  {
    name: "Order on District",
    subtitle: "Reserve a table",
    href: "https://www.district.in/dining/jaipur/coffee-dose-1-pratap-nagar",
    icon: "🍽️",
    color: "#6B46C1",
    ocid: "conversion.district_button",
  },
  {
    name: "Order on Swiggy",
    subtitle: "Home delivery",
    href: "https://www.swiggy.com/city/jaipur/coffee-dose-sector-16-rest721066",
    icon: "🛵",
    color: "#FC8019",
    ocid: "conversion.swiggy_button",
  },
  {
    name: "Order on Zomato",
    subtitle: "Dine in & delivery",
    href: "https://www.zomato.com/jaipur/coffee-dose-1-pratap-nagar",
    icon: "🍕",
    color: "#E23744",
    ocid: "conversion.zomato_button",
  },
  {
    name: "Follow on Instagram",
    subtitle: "@thecoffee.dose_",
    href: "https://www.instagram.com/thecoffee.dose_/",
    icon: "📸",
    color: "#E1306C",
    ocid: "conversion.instagram_button",
  },
];

export default function ConversionSection() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      data-ocid="conversion.section"
      className="relative py-24 md:py-36 grain-overlay"
      style={{ background: "#F5EBE0" }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="scarcity-badge mb-5">✦ Visit · Order · Connect</p>
          <h2
            className="text-5xl md:text-7xl text-[#3C2A21] leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            Your Next
            <em className="italic text-[#D4AF37]"> Chapter</em>
          </h2>
          <p
            className="text-[#3C2A21]/55 text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Find us, order from us, or follow our journey. Coffee Dose awaits.
          </p>
        </div>

        {/* Platform links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PLATFORMS.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={p.ocid}
              className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#3C2A21]/10 hover:border-[#D4AF37]/40 hover:shadow-elevated transition-all duration-400 bg-background gold-glow tilt-card ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "600ms",
              }}
              aria-label={p.name}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-luxury"
                style={{ background: `${p.color}20` }}
                aria-hidden="true"
              >
                {p.icon}
              </div>
              <div className="text-center">
                <p
                  className="text-[#3C2A21] font-medium text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-[#3C2A21]/50 text-xs mt-0.5"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {p.subtitle}
                </p>
              </div>
              <svg
                className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          ))}
        </div>

        {/* Branches */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Branch 1 */}
          <div
            className={`rounded-3xl p-7 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ background: "#3C2A21" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Branch 01
              </span>
              <span className="h-px flex-1 bg-[#D4AF37]/20" />
            </div>
            <h3
              className="text-2xl text-[#F5EBE0] mb-1 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Coffee Dose
            </h3>
            <p
              className="text-[#D4AF37] text-sm mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
            >
              Pratap Nagar — Sector 16
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex gap-3">
                <span className="text-[#D4AF37] flex-shrink-0">📍</span>
                <p
                  className="text-[#F5EBE0]/65 text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  choraha 6 no, coffee dose Coaching hub, 164/103, near Coaching
                  hub, Sector 16, Pratap Nagar, Jaipur, Rajasthan 302033
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#D4AF37] flex-shrink-0">📞</span>
                <a
                  href="tel:08209304716"
                  data-ocid="conversion.branch1_phone_link"
                  className="text-[#F5EBE0]/65 text-sm hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  08209304716
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.google.com/maps/place/COFFEE+DOSE/@26.8088106,75.8208927,17z/data=!4m6!3m5!1s0x396dc96283260d93:0xb50a19b1ba4086f9!8m2!3d26.8087774!4d75.8257565!16s%2Fg%2F11t_ssr7zh?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="conversion.branch1_directions_button"
                className="btn-primary !text-sm flex-1 text-center"
              >
                Get Directions
              </a>
              <a
                href="tel:08209304716"
                data-ocid="conversion.branch1_call_button"
                className="btn-secondary !text-sm flex-1 text-center !border-[#F5EBE0]/30 !text-[#F5EBE0]/80 hover:!bg-[#F5EBE0]/10"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Branch 2 */}
          <div
            className={`rounded-3xl p-7 transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ background: "#3C2A21" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Branch 02
              </span>
              <span className="h-px flex-1 bg-[#D4AF37]/20" />
              <span
                className="text-[#D4AF37]/70 text-[0.6rem] tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                New
              </span>
            </div>
            <h3
              className="text-2xl text-[#F5EBE0] mb-1 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Coffee Dose
            </h3>
            <p
              className="text-[#D4AF37] text-sm mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
            >
              Jagatpura — Jagtpura Flyover
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex gap-3">
                <span className="text-[#D4AF37] flex-shrink-0">📍</span>
                <p
                  className="text-[#F5EBE0]/65 text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  NEAR JAGTPURA FLYOVER, PLOT NO -5, Brij Vihar, EXTENSION,
                  Jagatpura, Jaipur, Rajasthan 302017
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[#D4AF37] flex-shrink-0">📞</span>
                <a
                  href="tel:08209304716"
                  data-ocid="conversion.branch2_phone_link"
                  className="text-[#F5EBE0]/65 text-sm hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  08209304716
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://maps.app.goo.gl/nXaNVqcM9rFus5vz9"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="conversion.branch2_directions_button"
                className="btn-primary !text-sm flex-1 text-center"
              >
                Get Directions
              </a>
              <a
                href="tel:08209304716"
                data-ocid="conversion.branch2_call_button"
                className="btn-secondary !text-sm flex-1 text-center !border-[#F5EBE0]/30 !text-[#F5EBE0]/80 hover:!bg-[#F5EBE0]/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div className="grid md:grid-cols-1 gap-8">
          {/* Map embed — Pratap Nagar */}
          <div
            className={`rounded-3xl overflow-hidden shadow-luxury transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ minHeight: "320px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d75.8208927!3d26.8088106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc96283260d93%3A0xb50a19b1ba4086f9!2sCOFFEE%20DOSE!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "320px",
                filter: "sepia(0.3) saturate(0.8)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Dose — Pratap Nagar on Google Maps"
              data-ocid="conversion.map"
            />
          </div>
        </div>

        {/* Scarcity CTA */}
        <div
          className={`mt-12 text-center rounded-3xl py-10 px-8 border border-[#D4AF37]/20 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 100%)",
          }}
        >
          <span className="scarcity-badge mb-4 inline-block">
            ⚡ Limited Seating — Walk-Ins Welcome
          </span>
          <h3
            className="text-3xl md:text-4xl text-[#3C2A21] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            Reserve your{" "}
            <em className="italic text-[#D4AF37]">perfect moment</em> today
          </h3>
          <a
            href="https://www.district.in/dining/jaipur/coffee-dose-1-pratap-nagar"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="conversion.reserve_primary_button"
            className="btn-primary !text-base !px-12 !py-4 inline-flex gold-pulse"
          >
            Book a Table on District
          </a>
        </div>
      </div>
    </div>
  );
}
