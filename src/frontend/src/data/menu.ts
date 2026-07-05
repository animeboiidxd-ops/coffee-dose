import type { MenuItem } from "../types";

// ─── ARTISANAL BREWS ────────────────────────────────────────────────────────

export const brewItems: MenuItem[] = [
  {
    id: "b1",
    name: "Cafe Latte",
    price: 119,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Velvety steamed milk poured over a double shot of rich espresso — pure comfort in a cup.",
    isPopular: true,
  },
  {
    id: "b2",
    name: "Cafe Mocha",
    price: 129,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Espresso meets silky chocolate, topped with airy milk foam for a decadent classic.",
  },
  {
    id: "b3",
    name: "Cappuccino",
    price: 119,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "The perfect balance — bold espresso, steamed milk, and a cloud of velvety microfoam.",
    isPopular: true,
  },
  {
    id: "b4",
    name: "Caramel Cappuccino",
    price: 139,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Classic cappuccino elevated with golden caramel drizzle and a hint of sweetness.",
  },
  {
    id: "b5",
    name: "Hazelnut Cappuccino",
    price: 139,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Rich espresso with aromatic hazelnut syrup, crowned with silky milk foam.",
  },
  {
    id: "b6",
    name: "Irish Cappuccino",
    price: 139,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "A bold, spirited cappuccino infused with Irish cream notes for an indulgent twist.",
  },
  {
    id: "b7",
    name: "Nutella Cappuccino",
    price: 149,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Espresso blended with creamy Nutella, topped with luxurious milk foam.",
  },
  {
    id: "b8",
    name: "Pop Corn Cappuccino",
    price: 139,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "A playful artisanal cappuccino with a buttery popcorn caramel essence.",
  },
  {
    id: "b9",
    name: "Tiramisu Cappuccino",
    price: 139,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Espresso kissed with mascarpone and cocoa — your favourite Italian dessert, reimagined.",
  },
  {
    id: "b10",
    name: "Vanilla Cappuccino",
    price: 139,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Classic cappuccino with Madagascan vanilla warmth and soft aromatic foam.",
  },
  {
    id: "b11",
    name: "Americano (Black Coffee)",
    price: 119,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "Espresso shots diluted with hot water — pure, unapologetic, bold black coffee.",
  },
  {
    id: "b12",
    name: "Iced Caramel",
    price: 139,
    category: "brews",
    subcategory: "Iced Coffee",
    description:
      "Espresso over ice with golden caramel swirls and cold milk — refreshing luxury.",
  },
  {
    id: "b13",
    name: "Iced Coffee",
    price: 129,
    category: "brews",
    subcategory: "Iced Coffee",
    description:
      "Chilled espresso with cold milk over ice — a refreshing pick-me-up.",
    isPopular: true,
  },
  {
    id: "b14",
    name: "Iced Mocha",
    price: 149,
    category: "brews",
    subcategory: "Iced Coffee",
    description:
      "Espresso, chocolate, and cold milk over ice — indulgent and refreshing.",
  },
  {
    id: "b15",
    name: "Hot Chocolate",
    price: 129,
    category: "brews",
    subcategory: "Specialty",
    description: "Rich Belgian-style hot chocolate, smooth and comforting.",
  },
  {
    id: "b16",
    name: "Hot Nutella",
    price: 149,
    category: "brews",
    subcategory: "Specialty",
    description:
      "Warm, creamy Nutella blend — hazelnut chocolate bliss in every sip.",
  },
  {
    id: "b17",
    name: "Hot Rocher",
    price: 159,
    category: "brews",
    subcategory: "Specialty",
    description:
      "Ferrero Rocher-inspired hot chocolate with hazelnut and gold notes.",
  },
  {
    id: "b18",
    name: "Regular Hot Coffee",
    price: 89,
    category: "brews",
    subcategory: "Hot Coffee",
    description:
      "A simple, honest cup of freshly brewed coffee — the way it should be.",
  },
  // Teas & Chai
  {
    id: "b19",
    name: "Green Tea",
    price: 129,
    category: "brews",
    subcategory: "Tea & Chai",
    description:
      "Delicate green tea leaves steeped to perfection — light, clean, and revitalising.",
  },
  {
    id: "b20",
    name: "Lemon Tea",
    price: 129,
    category: "brews",
    subcategory: "Tea & Chai",
    description:
      "Bright black tea with a citrus lemon zing — refreshing and aromatic.",
  },
  {
    id: "b21",
    name: "Masala Chai",
    price: 129,
    category: "brews",
    subcategory: "Tea & Chai",
    description:
      "A rich, spiced Indian chai brewed with ginger, cardamom, and warm spices.",
  },
];

// ─── SIGNATURE COOLERS ───────────────────────────────────────────────────────

export const coolerItems: MenuItem[] = [
  // Frappes
  {
    id: "c1",
    name: "Brownie Frappe",
    price: 159,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Blended coffee frappe loaded with rich brownie pieces — a dessert disguised as a drink.",
    isPopular: true,
  },
  {
    id: "c2",
    name: "Butter Scotch Frappe",
    price: 149,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Creamy butterscotch blended frappe with a golden caramel finish.",
  },
  {
    id: "c3",
    name: "Caramel Frappe",
    price: 149,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Smooth caramel frappe blended to icy perfection with a silky cream topping.",
  },
  {
    id: "c4",
    name: "Choco Frappe",
    price: 129,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Classic chocolate frappe — blended, icy, and utterly satisfying.",
  },
  {
    id: "c5",
    name: "Choco Passion",
    price: 149,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Dark chocolate meets passion — an intense, velvety blended frappe.",
  },
  {
    id: "c6",
    name: "Cinnamon Frappe",
    price: 149,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Spiced cinnamon frappe with warm aromatic notes — cosy and indulgent.",
  },
  {
    id: "c7",
    name: "Creamy Frappe",
    price: 119,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Ultra-smooth, cloud-like frappe — the purest form of blended indulgence.",
  },
  {
    id: "c8",
    name: "Double Choco Chip Frappe",
    price: 139,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Double the chocolate, double the crunch — blended frappe with choco chips.",
  },
  {
    id: "c9",
    name: "Hazelnut Frappe",
    price: 149,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Roasted hazelnut blended with espresso and ice — nutty, rich, irresistible.",
  },
  {
    id: "c10",
    name: "Irish Frappe",
    price: 149,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Bold Irish cream-infused frappe — smooth, sophisticated, and chilled.",
  },
  {
    id: "c11",
    name: "Nutella Frappe",
    price: 169,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Generous Nutella blended into an icy frappe — hazelnut heaven.",
    isPopular: true,
  },
  {
    id: "c12",
    name: "Oreo Frappe",
    price: 159,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Crushed Oreo cookies blended into a creamy iced frappe — cookies redefined.",
  },
  {
    id: "c13",
    name: "Oreo Nutella Frappe",
    price: 179,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "The ultimate indulgence — Oreo and Nutella swirled into an icy blended masterpiece.",
  },
  {
    id: "c14",
    name: "Pop Corn Frappe",
    price: 149,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Buttery popcorn caramel frappe — fun, playful, and surprisingly addictive.",
  },
  {
    id: "c15",
    name: "Tiramisu Brownie Frappe",
    price: 169,
    category: "coolers",
    subcategory: "Frappes",
    description:
      "Tiramisu + Brownie + Frappe = the holy trinity of dessert in a glass.",
  },
  // Mojitos
  {
    id: "c16",
    name: "Black Current Mojito",
    price: 109,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Tangy blackcurrant swirled with fresh mint and fizzy soda — vibrant and refreshing.",
  },
  {
    id: "c17",
    name: "Blue Lagoon",
    price: 129,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "A striking blue citrus cooler with tropical flavour notes and stunning colour.",
    isPopular: true,
  },
  {
    id: "c18",
    name: "Cranberry Mojito",
    price: 129,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Tart cranberry with fresh mint and sparkling soda — perfectly balanced.",
  },
  {
    id: "c19",
    name: "Fresh Lime Soda",
    price: 99,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Classic freshly squeezed lime soda — simple, clean, and incredibly refreshing.",
  },
  {
    id: "c20",
    name: "Green Apple Mojito",
    price: 109,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Crisp green apple with mint and fizz — cool, tart, and effervescent.",
  },
  {
    id: "c21",
    name: "Kiwi Mojito",
    price: 119,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Fresh kiwi, muddled mint, and sparkling soda — tropical freshness in a glass.",
  },
  {
    id: "c22",
    name: "Litchi Mojito",
    price: 119,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Delicate litchi with fresh mint and soda — floral, sweet, and refreshing.",
  },
  {
    id: "c23",
    name: "Orange Mojito",
    price: 109,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description: "Bright orange with mint and sparkling water — citrus bliss.",
  },
  {
    id: "c24",
    name: "Passion Fruit Mojito",
    price: 109,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Exotic passion fruit with fresh mint and fizzy soda — tropical and tangy.",
  },
  {
    id: "c25",
    name: "Strawberry Mojito",
    price: 109,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Ripe strawberry muddled with mint and sparkling soda — summer in a glass.",
  },
  {
    id: "c26",
    name: "Virgin Mojito",
    price: 99,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "The timeless classic — fresh mint, lime, and sparkling soda over ice.",
  },
  {
    id: "c27",
    name: "Watermelon Litchi Punch",
    price: 119,
    category: "coolers",
    subcategory: "Mojitos & Punches",
    description:
      "Juicy watermelon meets floral litchi in this gorgeous blended punch.",
  },
  // Shakes
  {
    id: "c28",
    name: "Black Current Shake",
    price: 109,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Thick blackcurrant milkshake — rich, fruity, and deeply satisfying.",
  },
  {
    id: "c29",
    name: "Blueberry Shake",
    price: 119,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Antioxidant-rich blueberry blended into a creamy milkshake — sweet and vibrant.",
  },
  {
    id: "c30",
    name: "Butterscotch Shake",
    price: 119,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Velvety butterscotch milkshake — golden, sweet, and utterly comforting.",
  },
  {
    id: "c31",
    name: "Choco Brownie",
    price: 139,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Decadent chocolate brownie blended into a thick, indulgent shake.",
    isPopular: true,
  },
  {
    id: "c32",
    name: "Choco Chips Shake",
    price: 109,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Chocolate milkshake loaded with real chocolate chips for extra texture.",
  },
  {
    id: "c33",
    name: "Chocolate Shake",
    price: 109,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Pure, rich chocolate milkshake — the timeless classic, done perfectly.",
  },
  {
    id: "c34",
    name: "Cranberry Shake",
    price: 129,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Tart cranberry blended into a creamy shake — vibrant colour, bold flavour.",
  },
  {
    id: "c35",
    name: "Dark Fantasy Shake",
    price: 149,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "An intense dark chocolate and biscuit shake — mysterious and utterly irresistible.",
  },
  {
    id: "c36",
    name: "Ferrero Rocher Shake",
    price: 159,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Ferrero Rocher blended into a luxurious hazelnut chocolate shake — pure indulgence.",
  },
  {
    id: "c37",
    name: "Green Apple Shake",
    price: 109,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Crisp green apple blended into a refreshing, tangy milkshake.",
  },
  {
    id: "c38",
    name: "Kitkat Shake",
    price: 129,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Crushed KitKat blended into a crispy, chocolatey shake — a crowd favourite.",
  },
  {
    id: "c39",
    name: "Kiwi Shake",
    price: 109,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Tropical kiwi blended into a sweet-tart milkshake — fresh and vibrant.",
  },
  {
    id: "c40",
    name: "Mango Shake",
    price: 119,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Premium Alphonso mango blended into a thick, golden milkshake — pure joy.",
  },
  {
    id: "c41",
    name: "Nutella Blast Shake",
    price: 139,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "An explosion of Nutella in milkshake form — hazelnut, chocolate, perfection.",
  },
  {
    id: "c42",
    name: "Oreo Nutella Shake",
    price: 149,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Oreo cookies and Nutella blended together — the ultimate dessert shake.",
  },
  {
    id: "c43",
    name: "Oreo Shake",
    price: 129,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Crushed Oreo blended into a thick cookies-and-cream milkshake.",
  },
  {
    id: "c44",
    name: "Strawberry Shake",
    price: 109,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Fresh strawberry blended into a pink, creamy milkshake — summer bliss.",
  },
  {
    id: "c45",
    name: "Vanilla Shake",
    price: 99,
    category: "coolers",
    subcategory: "Shakes",
    description:
      "Pure Madagascan vanilla milkshake — elegant simplicity at its finest.",
  },
  // Iced Teas
  {
    id: "c46",
    name: "Black Currant Iced Tea",
    price: 129,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Chilled black tea infused with blackcurrant — fruity, refreshing, beautiful.",
  },
  {
    id: "c47",
    name: "Caramel Iced Tea",
    price: 139,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Sweetened iced tea with a luscious caramel drizzle — luxuriously refreshing.",
  },
  {
    id: "c48",
    name: "Green Apple Iced Tea",
    price: 139,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Crisp iced tea with a green apple twist — light, fruity, and energising.",
  },
  {
    id: "c49",
    name: "Kiwi Iced Tea",
    price: 139,
    category: "coolers",
    subcategory: "Iced Teas",
    description: "Tropical kiwi meets refreshing iced tea — vibrant and alive.",
  },
  {
    id: "c50",
    name: "Mango Iced Tea",
    price: 129,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Sunripened mango blended into chilled tea — tropical summer in a glass.",
  },
  {
    id: "c51",
    name: "Mix Fruits Iced Tea",
    price: 139,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "A medley of seasonal fruits in chilled refreshing tea — vibrant and colourful.",
  },
  {
    id: "c52",
    name: "Orange Iced Tea",
    price: 129,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Citrus orange infused into chilled tea — zingy and refreshing.",
  },
  {
    id: "c53",
    name: "Peach Iced Tea",
    price: 129,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Soft, fragrant peach steeped into chilled tea — delicate and sweet.",
  },
  {
    id: "c54",
    name: "Red Bull Iced Tea",
    price: 199,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Energising Red Bull paired with chilled tea — bold, buzzing, and refreshing.",
  },
  {
    id: "c55",
    name: "Regular Iced Tea",
    price: 119,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Classic chilled black tea — clean, simple, and endlessly refreshing.",
  },
  {
    id: "c56",
    name: "Strawberry Iced Tea",
    price: 139,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Sweet strawberry blended into chilled tea — pretty, fruity, and irresistible.",
  },
  {
    id: "c57",
    name: "Watermelon Iced Tea",
    price: 139,
    category: "coolers",
    subcategory: "Iced Teas",
    description:
      "Juicy watermelon infused into iced tea — the perfect summer sip.",
  },
];

// ─── GOURMET BITES ───────────────────────────────────────────────────────────

export const biteItems: MenuItem[] = [
  // Sandwiches
  {
    id: "f1",
    name: "Bombay Sandwich",
    price: 99,
    category: "bites",
    subcategory: "Sandwiches",
    description:
      "The classic Mumbai street sandwich elevated — layers of spiced veggies and chutney on toasted bread.",
  },
  {
    id: "f2",
    name: "Coffee Dose Special",
    price: 149,
    category: "bites",
    subcategory: "Sandwiches",
    description:
      "Our signature sandwich — a secret medley of premium ingredients exclusive to Coffee Dose.",
    isPopular: true,
  },
  {
    id: "f3",
    name: "Paneer Tikka Sandwich",
    price: 139,
    category: "bites",
    subcategory: "Sandwiches",
    description:
      "Smoky, chargrilled paneer tikka with crisp veggies in a buttery toasted sandwich.",
  },
  {
    id: "f4",
    name: "Tandoori Cheese Grill",
    price: 129,
    category: "bites",
    subcategory: "Sandwiches",
    description:
      "Tandoori spiced vegetables and molten cheese grilled to golden perfection.",
  },
  {
    id: "f5",
    name: "Veg Cheese Grilled",
    price: 119,
    category: "bites",
    subcategory: "Sandwiches",
    description:
      "Fresh vegetables with generous cheese, grilled until perfectly crispy and melty.",
  },
  {
    id: "f6",
    name: "Veg Grilled Sandwich",
    price: 109,
    category: "bites",
    subcategory: "Sandwiches",
    description:
      "A wholesome grilled vegetable sandwich — simple, satisfying, and delicious.",
  },
  // Pizzas
  {
    id: "f7",
    name: "Cheese Corn Pizza",
    price: 199,
    category: "bites",
    subcategory: "Pizzas",
    description:
      "Golden sweet corn and melted cheese on a crispy artisan base — comfort pizza.",
  },
  {
    id: "f8",
    name: "Cheese Pizza",
    price: 189,
    category: "bites",
    subcategory: "Pizzas",
    description:
      "A celebration of cheese — generous layers on a hand-rolled artisan crust.",
    isPopular: true,
  },
  {
    id: "f9",
    name: "Coffee Dose Special Pizza",
    price: 219,
    category: "bites",
    subcategory: "Pizzas",
    description:
      "Our exclusive signature pizza — premium toppings crafted with the Coffee Dose touch.",
  },
  {
    id: "f10",
    name: "Margherita Pizza",
    price: 179,
    category: "bites",
    subcategory: "Pizzas",
    description:
      "The timeless classic — San Marzano tomato, fresh basil, and mozzarella.",
  },
  {
    id: "f11",
    name: "OTC Pizza",
    price: 189,
    category: "bites",
    subcategory: "Pizzas",
    description:
      "Onion, Tomato, Capsicum on a crispy base with house sauce and melted cheese.",
  },
  {
    id: "f12",
    name: "Tandoori Paneer Pizza",
    price: 199,
    category: "bites",
    subcategory: "Pizzas",
    description:
      "Smoky tandoori paneer on a crispy pizza base with mint chutney drizzle.",
  },
  // Garlic Bread
  {
    id: "f13",
    name: "Cheese Garlic Bread (4pcs)",
    price: 119,
    category: "bites",
    subcategory: "Garlic Bread",
    description:
      "Crispy garlic bread loaded with melted cheese — the perfect accompaniment.",
  },
  {
    id: "f14",
    name: "Masala Garlic Bread (4pcs)",
    price: 139,
    category: "bites",
    subcategory: "Garlic Bread",
    description:
      "Indian spiced garlic bread with herb butter — aromatic and irresistible.",
  },
  {
    id: "f15",
    name: "OTC Garlic Bread (4pcs)",
    price: 129,
    category: "bites",
    subcategory: "Garlic Bread",
    description:
      "Onion, Tomato, Capsicum topped garlic bread — colourful and flavourful.",
  },
  // Chinese
  {
    id: "f16",
    name: "Chilly Paneer Dry",
    price: 179,
    category: "bites",
    subcategory: "Snacks & Bites",
    description:
      "Crispy paneer tossed in fiery Indo-Chinese sauces — restaurant-style perfection.",
  },
  {
    id: "f17",
    name: "Chilly Paneer Sweet Corn",
    price: 199,
    category: "bites",
    subcategory: "Snacks & Bites",
    description:
      "Spicy paneer with sweet corn — a harmonious fusion of heat and sweetness.",
  },
  {
    id: "f18",
    name: "Chilly Potato",
    price: 149,
    category: "bites",
    subcategory: "Snacks & Bites",
    description:
      "Crispy potatoes tossed with chillies and sauces — addictively spiced.",
  },
  {
    id: "f19",
    name: "Honey Chilli Potato",
    price: 159,
    category: "bites",
    subcategory: "Snacks & Bites",
    description:
      "Sweet honey glaze with fiery chilli on crispy potato bites — sweet-heat perfection.",
    isPopular: true,
  },
  {
    id: "f20",
    name: "Steamed Sweet Corn",
    price: 99,
    category: "bites",
    subcategory: "Snacks & Bites",
    description:
      "Lightly seasoned steamed sweet corn — simple, wholesome, and satisfying.",
  },
  // Momos
  {
    id: "f21",
    name: "Pan Fried Momos (8pcs)",
    price: 109,
    category: "bites",
    subcategory: "Momos",
    description:
      "Golden pan-fried dumplings with crispy skin and juicy vegetable filling.",
  },
  {
    id: "f22",
    name: "Steamed Momos (8pcs)",
    price: 99,
    category: "bites",
    subcategory: "Momos",
    description:
      "Classic steamed Tibetan dumplings — delicate, flavourful, and comforting.",
  },
  {
    id: "f23",
    name: "Tandoori Momos (8pcs)",
    price: 119,
    category: "bites",
    subcategory: "Momos",
    description:
      "Char-grilled momos with tandoori spices — smoky, spiced, and absolutely delicious.",
  },
  // Burgers & Snacks
  {
    id: "f24",
    name: "Aaloo Tikki Burger",
    price: 119,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Classic Indian aloo tikki in a soft bun with fresh slaw and tangy sauces.",
  },
  {
    id: "f25",
    name: "Cheese Burger",
    price: 129,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Generous cheese melted over a crispy patty in a toasted sesame bun.",
    isPopular: true,
  },
  {
    id: "f26",
    name: "Chilly Cheesy Nuggets (8 Pcs)",
    price: 119,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Crispy cheese-filled nuggets with a chilli kick — snackable, shareable.",
  },
  {
    id: "f27",
    name: "Chilly Garlic Potato Bites",
    price: 99,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Bite-sized potato pieces tossed in chilli garlic seasoning — bold and addictive.",
  },
  {
    id: "f28",
    name: "Crispy Onion Rings (8 Pcs)",
    price: 129,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Golden, crispy onion rings with a light beer batter — perfect with any dip.",
  },
  {
    id: "f29",
    name: "Potato Cheese Shotz (8 Pcs)",
    price: 119,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Cheese-stuffed potato balls fried to crispy golden perfection.",
  },
  {
    id: "f30",
    name: "Seasoned Mozzarella Sticks (8 Pcs)",
    price: 129,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Molten mozzarella in a perfectly seasoned crispy crust — stretch factor guaranteed.",
  },
  {
    id: "f31",
    name: "Veggie Fingers (6 Pcs)",
    price: 109,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Crispy vegetable fingers with a crunchy coating — light, tasty, great with dips.",
  },
  {
    id: "f32",
    name: "Veggie Nuggets (8 Pcs)",
    price: 109,
    category: "bites",
    subcategory: "Burgers & Snacks",
    description:
      "Golden vegetable nuggets — crispy outside, savoury inside, endlessly munchable.",
  },
  // Nachos
  {
    id: "f33",
    name: "Backed Nachos",
    price: 149,
    category: "bites",
    subcategory: "Nachos & Bhel",
    description:
      "Baked nachos with house salsa and sour cream — guilt-free, flavour-full.",
  },
  {
    id: "f34",
    name: "Bingo Bhel",
    price: 99,
    category: "bites",
    subcategory: "Nachos & Bhel",
    description:
      "Bingo chips tossed into a tangy, spicy bhel — a fun Indian street snack twist.",
  },
  {
    id: "f35",
    name: "Cheese Nachos",
    price: 129,
    category: "bites",
    subcategory: "Nachos & Bhel",
    description:
      "Crispy nachos drenched in molten cheese sauce — the ultimate sharing snack.",
  },
  {
    id: "f36",
    name: "Kurkure Bhel",
    price: 99,
    category: "bites",
    subcategory: "Nachos & Bhel",
    description:
      "Kurkure puffed into a crunchy, tangy bhel — irresistibly snackable.",
  },
  {
    id: "f37",
    name: "Nachos Bhel",
    price: 109,
    category: "bites",
    subcategory: "Nachos & Bhel",
    description:
      "Nachos and bhel — two snack worlds colliding into one flavourful bite.",
  },
  // Pastas
  {
    id: "f38",
    name: "Alfredo Pasta (White)",
    price: 189,
    category: "bites",
    subcategory: "Pastas",
    description:
      "Creamy white Alfredo sauce tossed with al dente pasta — Italian comfort food.",
    isPopular: true,
  },
  {
    id: "f39",
    name: "Arabita Pasta (Red)",
    price: 169,
    category: "bites",
    subcategory: "Pastas",
    description:
      "Arrabbiata red sauce with a chilli kick — bold Italian flavours on a plate.",
  },
  {
    id: "f40",
    name: "Pink Sauce Pasta",
    price: 199,
    category: "bites",
    subcategory: "Pastas",
    description:
      "A luxurious blend of red and white sauce — rich, creamy, and irresistible.",
  },
  // Maggi
  {
    id: "f41",
    name: "Cheese Maggi",
    price: 129,
    category: "bites",
    subcategory: "Maggi",
    description:
      "Classic Maggi noodles elevated with generous melted cheese — nostalgic indulgence.",
  },
  {
    id: "f42",
    name: "Masala Spicy Maggi",
    price: 99,
    category: "bites",
    subcategory: "Maggi",
    description:
      "Fiery spiced Maggi for the heat seekers — bold, quick, and satisfying.",
  },
  {
    id: "f43",
    name: "Paneer Maggi",
    price: 139,
    category: "bites",
    subcategory: "Maggi",
    description:
      "Soft paneer cubes tossed into spiced Maggi noodles — a hearty quick bite.",
  },
  {
    id: "f44",
    name: "Tandoori Maggi",
    price: 109,
    category: "bites",
    subcategory: "Maggi",
    description:
      "Tandoori spiced Maggi with smoky notes — a street food-inspired twist.",
  },
  // Fries
  {
    id: "f45",
    name: "Crinkle Fries",
    price: 99,
    category: "bites",
    subcategory: "Fries",
    description:
      "Perfectly crinkle-cut fries — crispy edges, fluffy inside, perfectly seasoned.",
  },
  {
    id: "f46",
    name: "Peri Peri Fries",
    price: 129,
    category: "bites",
    subcategory: "Fries",
    description:
      "Golden fries tossed in fiery peri peri seasoning — addictive heat, perfect crunch.",
    isPopular: true,
  },
  {
    id: "f47",
    name: "Plain French Fries",
    price: 99,
    category: "bites",
    subcategory: "Fries",
    description:
      "Classic golden french fries — timeless, crispy, universally loved.",
  },
  {
    id: "f48",
    name: "Tandoori Fries",
    price: 149,
    category: "bites",
    subcategory: "Fries",
    description:
      "French fries dusted with tandoori spices — Indian street food meets café crunch.",
  },
  // Desserts
  {
    id: "f49",
    name: "Brownie With Ice Cream",
    price: 139,
    category: "bites",
    subcategory: "Desserts",
    description:
      "Warm fudgy brownie with vanilla ice cream — the classic finish to any meal.",
    isPopular: true,
  },
  {
    id: "f50",
    name: "Brownie",
    price: 110,
    category: "bites",
    subcategory: "Desserts",
    description:
      "Our signature dense, fudgy chocolate brownie — baked fresh daily.",
  },
];

// ─── FEATURED MENU ITEMS (for homepage display) ──────────────────────────────

export const featuredBrews: MenuItem[] = brewItems
  .filter((i) => i.isPopular)
  .slice(0, 4);
export const featuredCoolers: MenuItem[] = coolerItems
  .filter((i) => i.isPopular)
  .slice(0, 4);
export const featuredBites: MenuItem[] = biteItems
  .filter((i) => i.isPopular)
  .slice(0, 4);

export const allMenuItems: MenuItem[] = [
  ...brewItems,
  ...coolerItems,
  ...biteItems,
];
