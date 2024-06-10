'use client';

import { createContext, useContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {



    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error(
            'useAuthContext must be used inside an AuthContextProvider'
        );
    return context;
};
