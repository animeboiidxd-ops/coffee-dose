import { useState } from "react";
import { biteItems, brewItems, coolerItems } from "../data/menu";
import { useCart } from "../hooks/useCart";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import type { MenuItem } from "../types";

type Tab = "brews" | "coolers" | "bites";

const TABS: { key: Tab; label: string; image: string; subcats: string[] }[] = [
  {
    key: "brews",
    label: "Artisanal Brews",
    image: "/assets/generated/menu-brews.dim_600x600.jpg",
    subcats: ["Hot Coffee", "Iced Coffee", "Specialty", "Tea & Chai"],
  },
  {
    key: "coolers",
    label: "Signature Coolers",
    image: "/assets/generated/menu-coolers.dim_600x600.jpg",
    subcats: ["Frappes", "Mojitos & Punches", "Shakes", "Iced Teas"],
  },
  {
    key: "bites",
    label: "Gourmet Bites",
    image: "/assets/generated/menu-bites.dim_600x600.jpg",
    subcats: [
      "Sandwiches",
      "Pizzas",
      "Garlic Bread",
      "Snacks & Bites",
      "Momos",
      "Burgers & Snacks",
      "Nachos & Bhel",
      "Pastas",
      "Maggi",
      "Fries",
      "Desserts",
    ],
  },
];

const ALL_ITEMS: Record<Tab, MenuItem[]> = {
  brews: brewItems,
  coolers: coolerItems,
  bites: biteItems,
};

function MenuItemCard({ item, onAdd }: { item: MenuItem; onAdd: () => void }) {
  const { getItemQuantity, removeItem } = useCart();
  const qty = getItemQuantity(item.id);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      data-ocid="menu.item_card"
      className="group flex items-center justify-between gap-4 py-4 border-b border-[#3C2A21]/10 hover:bg-[#D4AF37]/5 px-3 rounded-lg transition-all duration-300"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-white font-medium text-sm truncate"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {item.name}
          </span>
          {item.isPopular && (
            <span className="scarcity-badge !text-[0.55rem] !px-2 !py-0.5 flex-shrink-0">
              Popular
            </span>
          )}
        </div>
        <p
          className="text-white/70 text-xs leading-relaxed line-clamp-2"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          {item.description}
        </p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span
          className="text-white font-semibold"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
          }}
        >
          ₹{item.price}
        </span>
        {qty > 0 ? (
          <div className="flex items-center gap-1.5 bg-[#3C2A21] rounded-full px-2 py-1">
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              aria-label={`Remove ${item.name} from cart`}
              className="w-5 h-5 text-[#D4AF37] text-base leading-none hover:text-[#F5EBE0] transition-colors"
            >
              −
            </button>
            <span className="text-[#F5EBE0] text-xs w-4 text-center">
              {qty}
            </span>
            <button
              type="button"
              onClick={handleAdd}
              aria-label={`Add another ${item.name} to cart`}
              className="w-5 h-5 text-[#D4AF37] text-base leading-none hover:text-[#F5EBE0] transition-colors"
            >
              +
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleAdd}
            data-ocid="menu.add_button"
            aria-label={`Add ${item.name} to cart`}
            className={`w-8 h-8 rounded-full border transition-all duration-300 flex items-center justify-center text-base ${
              added
                ? "bg-[#D4AF37] border-[#D4AF37] text-[#3C2A21] scale-110"
                : "border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3C2A21] hover:scale-110"
            }`}
          >
            {added ? "✓" : "+"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Tab>("brews");
  const [activeSub, setActiveSub] = useState<string>("All");
  const [cartOpen, setCartOpen] = useState(false);
  const { addItem, cart, getItemCount, getTotalPrice, removeItem } = useCart();
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  const currentTab = TABS.find((t) => t.key === activeTab)!;
  const items = ALL_ITEMS[activeTab];
  const subcats = ["All", ...currentTab.subcats];
  const filtered =
    activeSub === "All"
      ? items
      : items.filter((i) => i.subcategory === activeSub);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setActiveSub("All");
  };

  const count = getItemCount();
  const total = getTotalPrice();

  return (
    <div
      data-ocid="menu.section"
      className="relative py-24 md:py-36"
      style={{ background: "#3C2A21" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="scarcity-badge mb-5">✦ Our Menu</p>
          <h2
            className="text-5xl md:text-7xl text-white leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            Interactive
            <em className="italic text-[#D4AF37]"> Gastronomy</em>
          </h2>
          <p
            className="text-white/70 text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Curated selections crafted with artisanal passion. Every item, a
            story.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => handleTabChange(tab.key)}
              data-ocid={`menu.${tab.key}_tab`}
              className={`relative px-8 py-3.5 rounded-full text-sm tracking-[0.12em] uppercase transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-[#D4AF37] text-white shadow-gold-glow font-semibold"
                  : "border border-[#D4AF37]/30 text-white/70 hover:border-[#D4AF37]/60 hover:text-white"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Tab image + subcategory filters */}
          <div className="md:col-span-2">
            <img
              src={currentTab.image}
              alt={currentTab.label}
              className="w-full rounded-2xl object-cover mb-6 tilt-card"
              style={{ height: "280px", objectFit: "cover" }}
            />
            <div className="flex flex-wrap gap-2">
              {subcats.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setActiveSub(sub)}
                  data-ocid="menu.subcat_filter"
                  className={`px-3 py-1.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 ${
                    activeSub === sub
                      ? "bg-[#D4AF37]/20 text-white border border-[#D4AF37]/50"
                      : "border border-[#F5EBE0]/15 text-white/60 hover:border-[#F5EBE0]/30 hover:text-white/80"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Menu items list */}
          <div className="md:col-span-3">
            <div
              className="rounded-2xl p-6 max-h-[520px] overflow-y-auto"
              style={{
                background: "rgba(245,235,224,0.05)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              {filtered.length === 0 ? (
                <p
                  className="text-white/40 text-center py-8"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  No items in this category.
                </p>
              ) : (
                filtered.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAdd={() => addItem(item)}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Floating cart */}
        {count > 0 && (
          <div className="fixed bottom-24 right-6 z-40 md:bottom-8">
            <button
              type="button"
              onClick={() => setCartOpen((o) => !o)}
              data-ocid="menu.cart_button"
              aria-label={`View cart — ${count} items`}
              className="btn-primary !rounded-full !w-16 !h-16 !p-0 relative shadow-gold-glow gold-pulse flex items-center justify-center text-2xl"
            >
              🛒
              <span
                className="absolute -top-1 -right-1 w-5 h-5 bg-[#F5EBE0] text-[#3C2A21] rounded-full text-[0.65rem] font-bold flex items-center justify-center"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {count}
              </span>
            </button>

            {cartOpen && (
              <div
                data-ocid="menu.cart_panel"
                className="absolute bottom-20 right-0 w-80 rounded-2xl shadow-elevated p-5"
                style={{
                  background: "#2A1A12",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <h3
                  className="text-white text-lg mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                  }}
                >
                  Your Order
                </h3>
                <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
                  {cart.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <span
                        className="text-white/80 text-xs flex-1 min-w-0 truncate"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {ci.item.name} × {ci.quantity}
                      </span>
                      <span
                        className="text-white text-xs flex-shrink-0"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        ₹{ci.item.price * ci.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(ci.item.id)}
                        aria-label={`Remove ${ci.item.name}`}
                        className="text-white/50 hover:text-red-400 transition-colors text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#D4AF37]/20 pt-3 flex items-center justify-between mb-4">
                  <span
                    className="text-white/70 text-sm"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Total
                  </span>
                  <span
                    className="text-white font-semibold"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                    }}
                  >
                    ₹{total}
                  </span>
                </div>
                <a
                  href="https://www.swiggy.com/city/jaipur/coffee-dose-sector-16-rest721066"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="menu.cart_order_button"
                  className="btn-primary w-full !text-sm text-center block"
                >
                  Order on Swiggy
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
