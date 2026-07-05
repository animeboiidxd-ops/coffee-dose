export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: "brews" | "bites" | "coolers";
  subcategory?: string;
  description: string;
  image?: string;
  isPopular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: "Zomato" | "Swiggy";
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}
