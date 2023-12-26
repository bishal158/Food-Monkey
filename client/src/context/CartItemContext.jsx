import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../../config.js";

export const CartItemContext = createContext({});

export const CartItemContextProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState([]);
  useEffect(() => {
    fetch(`${BASEURL}api/getCartItem`, {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      response.json().then((cartitem) => {
        setcartItem(cartitem);
      });
    });
  }, [cartItem]);
  return (
    <CartItemContext.Provider value={{ cartItem, setcartItem }}>
      {children}
    </CartItemContext.Provider>
  );
};
