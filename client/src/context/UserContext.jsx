import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [fullName , setFullname] = useState();
    const [phone , setPhone] = useState();
    const [email , setEmail] = useState();
    const [isAdmin , setIsAdmin] = useState(false);

    return (
        <UserContext.Provider
            value={{ fullName, setFullname,phone,setPhone,email,setEmail,isAdmin,setIsAdmin }}
        >
            {children}
        </UserContext.Provider>
    );
};
