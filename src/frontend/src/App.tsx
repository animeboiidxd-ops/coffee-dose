import ConversionSection from "./components/ConversionSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import MobileActionBar from "./components/MobileActionBar";
import NarrativeSection from "./components/NarrativeSection";
import Navbar from "./components/Navbar";
import TestimonialsSection from "./components/TestimonialsSection";
import { CartContext, useCartState } from "./hooks/useCart";

export default function App() {
  const cartValue = useCartState();

  return (
    <CartContext.Provider value={cartValue}>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="narrative">
            <NarrativeSection />
          </section>
          <section id="menu">
            <MenuSection />
          </section>
          <section id="gallery">
            <GallerySection />
          </section>
          <section id="reviews">
            <TestimonialsSection />
          </section>
          <section id="contact">
            <ConversionSection />
          </section>
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </CartContext.Provider>
  );
}
