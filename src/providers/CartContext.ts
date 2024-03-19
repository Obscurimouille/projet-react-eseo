import { createContext } from "react";
import { Product } from "../types/product";

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  emptyCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  emptyCart: () => {},
  removeFromCart: () => {},
});
