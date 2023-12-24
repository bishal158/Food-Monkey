import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/getProduct").then((response) => {
      response.json().then((product) => {
        setProducts(product);
      });
    });
  }, []);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
