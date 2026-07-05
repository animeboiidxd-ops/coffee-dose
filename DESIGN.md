# Design Brief: COFFEE DOZE Flagship

## Tone & Differentiation
Quiet Luxury meets Editorial Elegance. Vogue magazine aesthetic layered with Apple minimalism. Sensorial, cinematic, unforgettable within 5 seconds. Premium artisanal café positioned as lifestyle destination, not transactional point-of-sale.

## Color Palette (OKLCH)
| Token | OKLCH Values | Hex | Usage |
|-------|--------------|-----|-------|
| Deep Espresso | 0.22 0.06 30 | #3C2A21 | Primary dark, text, dominant base |
| Champagne Cream | 0.96 0.02 60 | #F5EBE0 | Background, breathing space, light sections |
| Brushed Gold | 0.70 0.16 60 | #D4AF37 | Accents, CTAs, hover states, highlights |
| Soft Taupe | 0.85 0.03 40 | #D9CEBF | Secondary dividers, subtle depth |
| Soft Black | 0.12 0.02 30 | #1A1510 | Text, foreground contrast |

## Typography
Display (Editorial): Fraunces, serif | Body (Clean): GeneralSans, sans-serif | Mono: JetBrainsMono | Headlines: Oversized, high contrast, letter-spacing +0.05em. Body: 1.6 line-height, +0.02em tracking.

## Elevation & Depth
Glassmorphism navbar: backdrop-blur, 70% opacity card bg, gold border 20% opacity. Cards: soft shadows (0 8px 24px -8px rgba(0,0,0,0.2)), hover elevation (0 20px 40px -10px rgba(0,0,0,0.15)). Vignette overlay (inset 0 0 60px 30px black 30% opacity) on hero. Grain texture SVG overlay <5% opacity for tactile richness.

## Structural Zones
| Zone | Treatment | Colors |
|------|-----------|--------|
| Header/Navbar | Glassmorphism, sticky, shrink-on-scroll | Card bg/70%, gold border/20%, espresso text |
| Hero Section | Full viewport, cinematic, parallax depth, vignette | Espresso base, cream accent text, gold CTA |
| Content Sections | Alternating: cream bg, card bg/glass | Espresso text, gold interactive accents |
| Cards/Components | Glass effect, border accent/20%, shadow-luxury | Card bg, espresso text, gold hover |
| Footer | Minimal luxury, sparse copy, borders | Espresso bg, cream text, gold links |
| CTA Buttons | Magnetic, gold glow on hover, scale effects | Gold bg, espresso text; border accent variants |

## Component Patterns
Magnetic buttons (scale 1.05 on hover, active 0.95). Glass cards (backdrop-blur, border accent/20%). Image overlays: gold shimmer gradient on hover. Hover zoom 1.05x + subtle 3D tilt. Scarcity badges: accent bg/10%, border accent/30%, tracking-wider. Link luxury: underline animation on hover.

## Motion & Interactions
Smooth transitions (all 0.3s cubic-bezier(0.4, 0, 0.2, 1)). Staggered reveals on scroll (fade-in + slide-up 0.6s). Cursor-based parallax depth. Buttery 60fps animations. No bouncy easing or jarring effects — refinement over playfulness.

## Signature Detail
Gold glow aura on interactive elements (0 0 20px rgba(212,175,55,0.4)). Grain overlay texture reinforces tactile, premium feel. Cinematic vignette draws focus to hero copy. Glassmorphic surfaces with warm lighting create sensorial depth.

## Constraints
- LCP under 1.8s (lazy loading, next-gen images)
- No raw hex/rgb colors; all tokens via OKLCH CSS variables
- Mobile-first responsive (iPhone 13 Pro Max + MacBook Pro Retina parity)
- All links 100% functional (District, Swiggy, Instagram, Zomato, Maps, phone)
- SEO-optimized schema for premium café keywords
