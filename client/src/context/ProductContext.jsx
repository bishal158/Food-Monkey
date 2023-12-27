import { createContext, useEffect, useState } from "react";
import { BASEURL } from "../../config.js";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${BASEURL}api/getProduct`).then((response) => {
      response.json().then((product) => {
        setProducts(product);
      });
    });
  }, [products, setProducts]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
