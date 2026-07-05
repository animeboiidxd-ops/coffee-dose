import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const orderBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide scroll indicator after scrolling
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 200);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  };

  // Magnetic effect on Order Now button
  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = orderBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px) scale(1.04)`;
  };
  const handleMagneticLeave = () => {
    if (orderBtnRef.current) {
      orderBtnRef.current.style.transform = "translate(0,0) scale(1)";
    }
  };

  return (
    <>
      <header
        data-ocid="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: scrolled ? "blur(22px) saturate(1.4)" : "blur(0px)",
          WebkitBackdropFilter: scrolled
            ? "blur(22px) saturate(1.4)"
            : "blur(0px)",
          background: scrolled ? "rgba(30, 19, 12, 0.88)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(212, 175, 55, 0.20)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 40px rgba(26, 17, 10, 0.35)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "0.65rem 2rem" : "1.3rem 2rem",
            transition: "padding 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Logo */}
          <button
            type="button"
            data-ocid="navbar.logo_link"
            aria-label="Coffee Dose — Back to top"
            onClick={() => handleNavClick("#hero")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/coffee-dose-logo.png"
              alt="Coffee Dose"
              style={{
                height: scrolled ? "40px" : "52px",
                width: "auto",
                objectFit: "contain",
                transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                filter: "drop-shadow(0 0 8px rgba(212,175,55,0.25))",
              }}
            />
          </button>

          {/* Desktop nav links */}
          <nav
            aria-label="Main navigation"
            style={{ display: "flex", gap: "2.8rem", alignItems: "center" }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(245, 235, 224, 0.82)",
                  textDecoration: "none",
                  position: "relative",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#D4AF37";
                  const line = el.querySelector("span") as HTMLSpanElement;
                  if (line) line.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "rgba(245, 235, 224, 0.82)";
                  const line = el.querySelector("span") as HTMLSpanElement;
                  if (line) line.style.width = "0";
                }}
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-3px",
                    left: 0,
                    height: "1px",
                    width: 0,
                    background: "#D4AF37",
                    transition: "width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA — Order Now */}
          <a
            ref={orderBtnRef}
            href="https://www.swiggy.com/city/jaipur/coffee-dose-sector-16-rest721066"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="navbar.order_now_button"
            className="hidden md:inline-flex"
            onMouseMove={handleMagnetic}
            onMouseLeave={handleMagneticLeave}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: scrolled ? "0.5rem 1.4rem" : "0.65rem 1.65rem",
              background: "#D4AF37",
              color: "#3C2A21",
              borderRadius: "6px",
              fontFamily: "var(--font-display)",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              boxShadow: "0 0 0 rgba(212,175,55,0)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = "0 0 24px rgba(212,175,55,0.5)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(212,175,55,0)";
            }}
          >
            Order Now
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="navbar.hamburger_button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "26px",
                height: "1.5px",
                background: "#D4AF37",
                transformOrigin: "center",
                transition: "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: menuOpen
                  ? "translateY(7.5px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "1.5px",
                background: "#D4AF37",
                marginLeft: "auto",
                transition: "opacity 0.28s ease, width 0.38s ease",
                opacity: menuOpen ? 0 : 1,
                width: menuOpen ? "0" : "18px",
              }}
            />
            <span
              style={{
                display: "block",
                width: "26px",
                height: "1.5px",
                background: "#D4AF37",
                transformOrigin: "center",
                transition: "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: menuOpen
                  ? "translateY(-7.5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      <dialog
        data-ocid="navbar.mobile_menu"
        aria-label="Mobile navigation"
        open={menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(17, 10, 6, 0.97)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Decorative gold line */}
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(212, 175, 55, 0.45)",
            marginBottom: "2rem",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.5s ease 0.1s",
          }}
        />

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 6vw, 3.2rem)",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#F5EBE0",
              textDecoration: "none",
              transition: `color 0.3s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.06}s, opacity 0.45s ease ${i * 0.06}s`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              padding: "0.6rem 0",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#F5EBE0";
            }}
          >
            {link.label}
          </a>
        ))}

        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(212, 175, 55, 0.45)",
            margin: "1.5rem 0",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.5s ease 0.1s",
          }}
        />

        <a
          href="https://www.swiggy.com/city/jaipur/coffee-dose-sector-16-rest721066"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="navbar.mobile_order_button"
          className="btn-primary"
          style={{
            fontSize: "0.95rem",
            letterSpacing: "0.18em",
            padding: "0.9rem 2.4rem",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${NAV_LINKS.length * 0.06 + 0.05}s`,
          }}
        >
          Order Now
        </a>

        {/* Eyebrow text */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(245, 235, 224, 0.35)",
            marginTop: "2rem",
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.5s ease ${NAV_LINKS.length * 0.06 + 0.15}s`,
          }}
        >
          Pratap Nagar · Jaipur
        </p>
      </dialog>
      <div
        style={{ display: "none" }}
        data-scroll-opacity={scrollIndicatorOpacity}
      />
    </>
  );
}
