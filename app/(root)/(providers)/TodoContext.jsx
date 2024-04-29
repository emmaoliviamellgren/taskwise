'use client'

import { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [value, setValue] = useState('');

    return (
        <TodoContext.Provider value={{ value }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;