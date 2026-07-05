import { useEffect, useRef, useState } from "react";

interface ParallaxLayer {
  x: number;
  y: number;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<ParallaxLayer>({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 120) setScrollIndicatorVisible(false);
      else setScrollIndicatorVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x = (e.clientX - rect.left - cx) / cx;
      const y = (e.clientY - rect.top - cy) / cy;
      setMouse({ x, y });
    };
    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  const scrollToNarrative = () => {
    document
      .getElementById("narrative")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Parallax offsets per layer (different speeds for depth)
  const layer1 = { x: mouse.x * -8, y: mouse.y * -8 }; // BG bokeh — slow
  const layer2 = { x: mouse.x * 4, y: mouse.y * 4 }; // Midground
  const layer3 = { x: mouse.x * -3, y: mouse.y * -3 }; // Content — subtle
  const scrollParallax = scrollY * 0.35; // Content scrolls at 35% speed

  // Entrance animation helper
  const entrance = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  });

  return (
    <>
      {/* Inject Hero keyframes */}
      <style>{`
        @keyframes bokeFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.18; }
          33% { transform: translate(18px, -24px) scale(1.12); opacity: 0.25; }
          66% { transform: translate(-14px, 10px) scale(0.92); opacity: 0.15; }
        }
        @keyframes bokeFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.12; }
          40% { transform: translate(-22px, 16px) scale(1.08); opacity: 0.20; }
          70% { transform: translate(12px, -18px) scale(0.95); opacity: 0.14; }
        }
        @keyframes bokeFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.22; }
          50% { transform: translate(28px, 20px) scale(1.15); opacity: 0.30; }
        }
        @keyframes steamDrift {
          0% { transform: translateY(0) scaleX(1); opacity: 0.08; }
          50% { transform: translateY(-30px) scaleX(1.08); opacity: 0.14; }
          100% { transform: translateY(0) scaleX(1); opacity: 0.08; }
        }
        @keyframes goldShimmer {
          0%, 100% { background-position: -200% center; }
          50% { background-position: 200% center; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.85); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .gold-text-shimmer {
          background: linear-gradient(
            90deg,
            #D4AF37 0%,
            #F0D060 40%,
            #D4AF37 60%,
            #BFA030 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 4.5s ease-in-out infinite;
        }
      `}</style>

      <div
        ref={heroRef}
        data-ocid="hero.section"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
            "linear-gradient(155deg, #1a110a 0%, #2e1a10 25%, #3c2a21 55%, #261510 80%, #140d07 100%)",
        }}
      >
        {/* === LAYER 1: Deep bokeh blobs — slowest parallax === */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            transition: "transform 0.12s ease-out",
            transform: `translate(${layer1.x}px, ${layer1.y}px) translateY(${-scrollParallax * 0.2}px)`,
            willChange: "transform",
          }}
        >
          {/* Large gold bokeh glow — top left */}
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: "12%",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.14) 0%, transparent 70%)",
              filter: "blur(40px)",
              animation: "bokeFloat1 9s ease-in-out infinite",
            }}
          />
          {/* Warm amber — center right */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              right: "10%",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(180, 100, 40, 0.12) 0%, transparent 70%)",
              filter: "blur(50px)",
              animation: "bokeFloat2 12s ease-in-out infinite 2s",
            }}
          />
          {/* Cream glow — bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "8%",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(245, 235, 224, 0.08) 0%, transparent 65%)",
              filter: "blur(35px)",
              animation: "bokeFloat3 14s ease-in-out infinite 4s",
            }}
          />
          {/* Gold accent — top right */}
          <div
            style={{
              position: "absolute",
              top: "5%",
              right: "20%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.10) 0%, transparent 65%)",
              filter: "blur(30px)",
              animation: "bokeFloat1 11s ease-in-out infinite 6s",
            }}
          />
        </div>

        {/* === LAYER 2: Hero image + midground parallax === */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-5%",
            zIndex: 1,
            backgroundImage:
              "url(/assets/generated/hero-cafe-interior.dim_1600x900.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.38,
            filter: "saturate(1.1) brightness(0.75)",
            transition: "transform 0.15s ease-out",
            transform: `translate(${layer2.x}px, ${layer2.y}px) translateY(${-scrollParallax * 0.15}px)`,
            willChange: "transform",
          }}
        />

        {/* === LAYER 3: Steam diffusion pulse === */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            transition: "transform 0.18s ease-out",
            transform: `translate(${layer2.x * 0.5}px, ${layer2.y * 0.5}px)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "300px",
              background:
                "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.07) 0%, transparent 70%)",
              filter: "blur(24px)",
              animation: "steamDrift 8s ease-in-out infinite",
            }}
          />
        </div>

        {/* === Vignette overlay === */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(20, 12, 7, 0.55) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* === Gradient bottom fade === */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            zIndex: 4,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(20, 12, 7, 0.6) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* === Grain texture overlay === */}
        <div
          aria-hidden="true"
          className="grain-overlay"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* === HERO CONTENT — Layer 4 with subtle parallax === */}
        <div
          ref={contentRef}
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 1.5rem",
            maxWidth: "900px",
            margin: "0 auto",
            transition: "transform 0.1s ease-out",
            transform: `translate(${layer3.x}px, ${layer3.y}px) translateY(${-scrollParallax * 0.5}px)`,
            willChange: "transform",
          }}
        >
          {/* Eyebrow tag */}
          <div
            data-ocid="hero.eyebrow"
            style={{
              ...entrance(0),
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "28px",
                height: "1px",
                background: "rgba(212, 175, 55, 0.6)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#D4AF37",
                opacity: 0.9,
              }}
            >
              Artisanal Café · Pratap Nagar, Jaipur
            </span>
            <span
              style={{
                display: "inline-block",
                width: "28px",
                height: "1px",
                background: "rgba(212, 175, 55, 0.6)",
              }}
            />
          </div>

          {/* Headline line 1 */}
          <h1
            data-ocid="hero.headline"
            style={{
              margin: 0,
              padding: 0,
              lineHeight: 0.95,
            }}
          >
            <span
              style={{
                ...entrance(150),
                display: "block",
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(3.8rem, 9vw, 7.5rem)",
                letterSpacing: "-0.02em",
                color: "#F5EBE0",
                marginBottom: "0.08em",
              }}
            >
              Where Every Sip
            </span>
            {/* Headline line 2 — gold shimmer */}
            <span
              style={{
                ...entrance(300),
                display: "block",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(3.8rem, 9vw, 7.5rem)",
                fontStyle: "italic",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="gold-text-shimmer">Becomes a Ritual.</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            data-ocid="hero.subheadline"
            style={{
              ...entrance(450),
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              fontWeight: 300,
              letterSpacing: "0.06em",
              color: "rgba(245, 235, 224, 0.65)",
              maxWidth: "520px",
              margin: "1.8rem auto 2.8rem",
              lineHeight: 1.75,
            }}
          >
            Crafted with obsession. Served with grace. Experienced for a
            lifetime.
          </p>

          {/* CTA Buttons */}
          <div
            data-ocid="hero.cta_group"
            style={{
              ...entrance(600),
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              data-ocid="hero.explore_button"
              className="btn-secondary gold-glow"
              onClick={scrollToNarrative}
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                padding: "0.85rem 2.2rem",
                borderRadius: "6px",
              }}
            >
              Explore the Experience
            </button>
            <a
              href="https://www.swiggy.com/city/jaipur/coffee-dose-sector-16-rest721066"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.order_button"
              className="btn-primary gold-glow"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                padding: "0.85rem 2.2rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Order Now
            </a>
          </div>

          {/* Scarcity badge */}
          <div
            data-ocid="hero.scarcity_badge"
            style={{
              ...entrance(750),
              display: "flex",
              justifyContent: "center",
              marginTop: "2.2rem",
            }}
          >
            <span className="scarcity-badge" style={{ fontSize: "0.62rem" }}>
              ✦ Limited seating ambience — Reserve yours today
            </span>
          </div>
        </div>

        {/* === Scroll Indicator === */}
        <div
          data-ocid="hero.scroll_indicator"
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: scrollIndicatorVisible && mounted ? 1 : 0,
            transition: "opacity 0.6s ease",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245, 235, 224, 0.38)",
            }}
          >
            Scroll
          </span>
          {/* Animated down arrow */}
          <div style={{ position: "relative", width: "20px", height: "36px" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "1px",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(212, 175, 55, 0.7), transparent)",
                animation: "scrollBounce 1.8s ease-in-out infinite",
              }}
            />
            {/* Pulse ring */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "1px solid rgba(212, 175, 55, 0.6)",
                animation: "pulseRing 2s ease-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
