import { createContext, useCallback, useContext, useState } from "react";
import type { CartItem, MenuItem } from "../types";

interface CartContextValue {
  cart: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotalPrice: () => number;
  getItemQuantity: (itemId: string) => number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function useCartState(): CartContextValue {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = useCallback((item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci,
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
    } else {
      setCart((prev) =>
        prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity } : ci)),
      );
    }
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const getItemCount = useCallback(
    () => cart.reduce((sum, ci) => sum + ci.quantity, 0),
    [cart],
  );

  const getTotalPrice = useCallback(
    () => cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0),
    [cart],
  );

  const getItemQuantity = useCallback(
    (itemId: string) => cart.find((ci) => ci.item.id === itemId)?.quantity ?? 0,
    [cart],
  );

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemCount,
    getTotalPrice,
    getItemQuantity,
  };
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
