import "./styles/Cart.css";
import CartItems from "./components/CartItems.jsx";
import AddExtraCourses from "./components/AddExtraCourses.jsx";
function Cart() {
  return (
    <>
      <div className={"cart-container"}>
        <div className={"cart-items-screen"}>
          <CartItems />
        </div>
        <div className={"add-extra-courses-screen"}>
          <AddExtraCourses />
        </div>
      </div>
    </>
  );
}

export default Cart;
