import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import type { GalleryImage } from "../types";

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/gallery/img1.png",
    alt: "Artisanal coffee craft at Coffee Dose",
    caption: "Artisanal craft",
  },
  {
    id: "g2",
    src: "/assets/gallery/img2.png",
    alt: "Signature coffee creations at Coffee Dose",
    caption: "Signature creations",
  },
  {
    id: "g3",
    src: "/assets/gallery/img3.png",
    alt: "Golden hour vibes at Coffee Dose",
    caption: "Golden hour vibes",
  },
  {
    id: "g4",
    src: "/assets/gallery/img4.png",
    alt: "The pour ritual at Coffee Dose",
    caption: "The pour ritual",
  },
  {
    id: "g5",
    src: "/assets/gallery/img5.png",
    alt: "Coffee culture at Coffee Dose Jaipur",
    caption: "Coffee culture",
  },
  {
    id: "g6",
    src: "/assets/gallery/img6.png",
    alt: "Morning ritual at Coffee Dose",
    caption: "Morning ritual",
  },
  {
    id: "g7",
    src: "/assets/gallery/img7.png",
    alt: "Ambient perfection at Coffee Dose",
    caption: "Ambient perfection",
  },
  {
    id: "g8",
    src: "/assets/gallery/img8.png",
    alt: "Latte artistry at Coffee Dose",
    caption: "Latte artistry",
  },
  {
    id: "g9",
    src: "/assets/gallery/img9.png",
    alt: "Café moments at Coffee Dose",
    caption: "Café moments",
  },
  {
    id: "g10",
    src: "/assets/gallery/img10.png",
    alt: "Instagrammable vibes at Coffee Dose Jaipur",
    caption: "Instagrammable vibes",
  },
];

export default function GallerySection() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <div
      data-ocid="gallery.section"
      className="relative py-24 md:py-36 grain-overlay"
      style={{ background: "#F5EBE0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="scarcity-badge mb-5">✦ Signature Experience Gallery</p>
          <h2
            className="text-5xl md:text-7xl text-[#3C2A21] leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            The Experience
            <em className="italic text-[#D4AF37]"> Gallery</em>
          </h2>
          <p
            className="text-[#3C2A21]/55 text-base max-w-xl mx-auto italic"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Every visit, a story worth telling
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {GALLERY_IMAGES.map((img, index) => (
            <GalleryCard key={img.id} image={img} index={index} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <p
            className="text-[#3C2A21]/50 text-sm mb-4 tracking-wider"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Follow our story on Instagram
          </p>
          <a
            href="https://www.instagram.com/thecoffee.dose_/"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="gallery.instagram_link"
            className="btn-secondary !inline-flex gap-2 items-center"
          >
            <span>@thecoffee.dose_</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({ image, index }: { image: GalleryImage; index: number }) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <div
      ref={ref}
      data-ocid={`gallery.item.${index + 1}`}
      className={`group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-3 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
      role="img"
      aria-label={image.alt}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ display: "block" }}
        loading="lazy"
      />
      {/* Gold shimmer overlay */}
      <div className="shimmer-overlay" aria-hidden="true" />
      {/* Caption overlay with Follow us CTA */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-400"
        style={{
          background:
            "linear-gradient(to top, rgba(60,42,33,0.88) 0%, rgba(60,42,33,0.3) 50%, transparent 80%)",
        }}
      >
        <p
          className="text-[#F5EBE0] text-lg mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          {image.caption}
        </p>
        <a
          href="https://www.instagram.com/thecoffee.dose_/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[#D4AF37] text-xs tracking-widest uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:text-[#F5EBE0]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ★ Follow us
        </a>
      </div>
    </div>
  );
}
