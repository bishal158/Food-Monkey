import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/CartAmountToggle.css";
export const CartAmountToggle = ({ setDecrease, setIncrease, amount }) => {
  return (
    <div className={"cart-inc-dec"}>
      <p className={"inc-button"} onClick={() => setIncrease()}>
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </p>
      <div className={"quantity"}>{amount}</div>
      <p className={"dec-button"} onClick={() => setDecrease()}>
        <FontAwesomeIcon icon="fa-solid fa-minus" />
      </p>
    </div>
  );
};
