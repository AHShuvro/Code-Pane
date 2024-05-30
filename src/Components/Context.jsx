import { createContext, useState } from 'react';
export const DataContext = createContext();

export const Context = ({ children }) => {
    const [theme, setTheme] = useState("");

    return (
        <DataContext.Provider value={{theme, setTheme}}>
            {children}
        </DataContext.Provider>
    );
};
