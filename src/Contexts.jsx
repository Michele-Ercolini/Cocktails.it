import { createContext, useCallback, useState } from "react";

export const DarkContext = createContext();

export function DarkContextProvider({ children }) {

    const [dark, setDark] = useState(false);
    const handleDark = useCallback(() => setDark(!dark));

    return (
        <DarkContext.Provider value={{ dark, handleDark }}>
            {children}
        </DarkContext.Provider>
    )
}