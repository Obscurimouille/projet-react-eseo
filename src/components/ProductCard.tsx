import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { CartContext } from "../providers/CartContext";
import { useContext, useState } from "react";
import { Product } from "../types/product";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

function ProductCard({ product }: { product: Product; addToCart: () => void }) {
  const cartContext = useContext(CartContext);
  const [showImage, setShowImage] = useState(false);

  const addToCart = () => {
    cartContext.addToCart(product);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div
      className={`flex-1 min-w-72 max-w-72 h-96 bg-stone-50 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-start relative hover:scale-[1.03] transition-transform
        ${
          !!product.specialOffer ? "outline outline-4 outline-orange-300" : ""
        }`}
    >
      <div
        className={`transition-all relative flex-1 bg-red-200 ${
          !!showImage
            ? "min-h-96 cursor-zoom-out brightness-100"
            : "min-h-32 cursor-zoom-in brightness-95"
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.name}
          onClick={toggleImage}
        />

        {!!product.specialOffer && (
          <div
            className={`cursor-default transition-opacity absolute bg-white rounded-md px-2 text-sm top-3 left-3 z-100 flex items-center gap-1 shadow-lg ${
              !showImage ? "opacity-100" : "opacity-0"
            }`}
          >
            Promotion
            <SellOutlinedIcon sx={{ fontSize: 12 }} />
          </div>
        )}
      </div>

      <div className={`p-4 px-6 relative flex-1 flex flex-col gap-1`}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <div className="flex gap-1 align-end">
            {!!product.specialOffer && (
              <span
                className={
                  !!product.specialOffer
                    ? "text-sm line-through align-bottom leading-[1.4rem]"
                    : ""
                }
              >
                {product.specialOffer.oldPrice.toFixed(2)}€
              </span>
            )}
            <span className="font-semibold">{product.price.toFixed(2)}€</span>
          </div>
        </div>
        {!!product.weight && <span>{product.weight}g</span>}
        <div className="absolute bottom-4 right-4">
          <IconButton
            aria-label="add to shopping cart"
            size="large"
            onClick={addToCart}
          >
            <AddShoppingCartIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
