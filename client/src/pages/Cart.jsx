import "./styles/Cart.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Beverage from "../assets/images/promotion/Beverage.jpg";
import Starter from "../assets/images/promotion/Starter.jpg";
import Dessert from "../assets/images/promotion/Dessert.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import CartItems from "./components/CartItems.jsx";
import AddExtraCourses from "./components/AddExtraCourses.jsx";
function Cart() {
  return (
    <>
      <div className={'cart-container'}>
        <div className={'cart-items-screen'}>
          <CartItems/>
        </div>
        <div className={'add-extra-courses-screen'}>
          <AddExtraCourses/>
        </div>
      </div>
    </>
  );
}

export default Cart;
