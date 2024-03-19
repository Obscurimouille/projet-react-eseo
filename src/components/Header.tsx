import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useContext } from "react";
import { CartContext } from "../providers/CartContext";
import { Link } from 'react-router-dom';

function Header() {
  const cartContext = useContext(CartContext);

  return (
    <header className="bg-amber-300 py-4 px-6 flex justify-between align-center">
      <Link to="/" className="text-[#272343] text-2xl font-medium">
        Crousti
        <span className="font-bold">Shop</span>
      </Link>
      <Link to="/cart" className="transition-transform hover:scale-105 flex items-end gap-2">
        <div className="relative mb-0.5">
          <ShoppingCartTwoToneIcon fontSize="medium" />
          {!!cartContext.cart.length && (
            <div className="rounded-full absolute -bottom-1 -left-1 bg-white aspect-square text-[11px] font-bold w-4 flex items-center justify-center">
              {cartContext.cart.length}
            </div>
          )}
        </div>
        <span className="text-lg">Panier</span>
      </Link>
    </header>
  );
}

export default Header;
