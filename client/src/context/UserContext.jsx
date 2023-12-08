import {createContext, useState} from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [userId, setuserId] = useState();
    const [userEmail, setuserEmail] = useState();
    return (
        <UserContext.Provider
            value={{ userId, setuserId, userEmail, setuserEmail }}
        >
            {children}
        </UserContext.Provider>
    );
};
