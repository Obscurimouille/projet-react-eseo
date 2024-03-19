import ProductCard from "./ProductCard";
import { useState } from "react";
import { Product } from "../types/product";
import products from "../data/cereals";

function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-1 p-8 gap-12 flex-wrap overflow-y-auto">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default Cart;
