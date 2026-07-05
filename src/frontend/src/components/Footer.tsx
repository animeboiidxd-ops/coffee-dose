export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "coffeedose";

  const footerLinks = [
    { label: "Our Story", href: "#narrative" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Find Us", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/thecoffee.dose_/",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "Zomato",
      href: "https://www.zomato.com/jaipur/coffee-dose-1-pratap-nagar",
      icon: (
        <span className="text-base font-bold" aria-hidden="true">
          Z
        </span>
      ),
    },
    {
      label: "Swiggy",
      href: "https://www.swiggy.com/city/jaipur/coffee-dose-sector-16-rest721066",
      icon: (
        <span className="text-base font-bold" aria-hidden="true">
          S
        </span>
      ),
    },
  ];

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-ocid="footer"
      className="relative py-16 border-t"
      style={{ background: "#2A1A12", borderColor: "rgba(212,175,55,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2
              className="text-3xl text-[#D4AF37] mb-3 tracking-wider"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              COFFEE DOSE
            </h2>
            <p
              className="text-[#F5EBE0]/40 text-xs tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Pratap Nagar · Jaipur
            </p>
            <p
              className="text-[#F5EBE0]/55 text-sm leading-relaxed max-w-xs"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              A sanctuary for those who appreciate the finer details. Where
              every sip becomes a ritual.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[#D4AF37]/80 text-xs tracking-[0.2em] uppercase mb-5"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    className="text-[#F5EBE0]/55 hover:text-[#D4AF37] transition-colors duration-200 text-sm tracking-wider"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3
              className="text-[#D4AF37]/80 text-xs tracking-[0.2em] uppercase mb-5"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              Connect
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href="tel:08209304716"
                data-ocid="footer.phone_link"
                className="flex items-center gap-2 text-[#F5EBE0]/55 hover:text-[#D4AF37] transition-colors text-sm"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                <span aria-hidden="true">📞</span> 08209304716
              </a>
              <p
                className="flex items-start gap-2 text-[#F5EBE0]/55 text-xs"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                <span aria-hidden="true">📍</span>
                <span>2 Locations in Jaipur, Rajasthan</span>
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`footer.${social.label.toLowerCase()}_link`}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/25 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37]/15 hover:border-[#D4AF37]/60 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#F5EBE0]/35 text-xs tracking-wider text-center"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            © {year} COFFEE DOSE. All rights reserved. Crafted with passion in
            Jaipur.
          </p>
          <p
            className="text-[#F5EBE0]/25 text-xs tracking-wider"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
