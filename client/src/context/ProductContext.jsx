import {createContext, useState} from "react";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState();
    // const [userEmail, setuserEmail] = useState();
    return (
        <ProductContext.Provider
            value={{ products, setProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};
