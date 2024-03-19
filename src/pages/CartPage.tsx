import Cart from "../components/Cart";
import Header from "../components/Header";

function CartPage() {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center overflow-hidden bg-stone-50">
        <Cart />
      </div>
    </div>
  );
}

export default CartPage;
