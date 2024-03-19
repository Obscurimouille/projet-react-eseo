import { useState } from "react";
import { Product } from "./types/product";
import { CartContext } from "./providers/CartContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart: (product: Product) => addToCart(product), removeFromCart, emptyCart }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
