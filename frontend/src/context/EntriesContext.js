import { createContext, useReducer } from "react";

export const EntriesContext = createContext()

export default function EntriesContextProvider({ children }) {
    const [state, dispatch] = useReducer(entryReducer, {entries: null})
    return (
        <EntriesContext.Provider>
            { children }
        </EntriesContext.Provider>
    )
}