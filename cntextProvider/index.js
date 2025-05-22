import React, { createContext, useContext, useState } from "react"

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    return (
        <LoginContext.Provider value={{ userData, setUserData }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
}
