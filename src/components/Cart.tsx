import { useContext, useEffect } from "react";
import { CartContext } from "../providers/CartContext";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function Cart() {
  const cartContext = useContext(CartContext);

  const total = () => {
    let total = 0;
    cartContext.cart.forEach((product) => {
      total += product.price;
    });
    return total.toFixed(2);
  };

  useEffect(() => {
    changePageName(cartContext.cart.length);
  });

  const changePageName = (totalItems: number) => {
    window.document.title = String(totalItems);
  }

  const emptyCart = () => {
    const confirm = window.confirm("Voulez-vous vraiment vider votre panier ?");
    if (!confirm) return;
    cartContext.emptyCart();
  };

  const removeFromCart = (index: number) => {
    cartContext.removeFromCart(index);
  };

  return (
    <div className="basis-[800px] flex flex-col p-8 px-10 gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold mb-2">Votre panier</h2>
        <button className="underline" onClick={emptyCart}>Vider</button>
      </div>
      <hr />
      <div className="flex-1 flex flex-col overflow-y-auto my-4 gap-2">
        {cartContext.cart.map((product, index) => (
          <div
            key={index}
            className="flex justify-between bg-white p-3 px-4 rounded-lg"
          >
            <h3>
              {product.name}{" "}
              {!!product.weight && <span> - {product.weight}g</span>}
            </h3>
            <div className="flex items-center gap-4">
              <span>{product.price.toFixed(2)}€</span>
              <button onClick={() => removeFromCart(index)}>
                <DeleteOutlineOutlinedIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h3 className="mt-2 text-lg font-semibold text-end">
        Total ({cartContext.cart.length} article
        {cartContext.cart.length > 1 ? "s" : ""}): {total()}€
      </h3>
    </div>
  );
}

export default Cart;
