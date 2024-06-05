'use client';

import { createContext, useContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    function redirectToSignIn(options) {
        // Your implementation here
        return new Promise((resolve, reject) => {
            // Your code here
        });
    }

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
