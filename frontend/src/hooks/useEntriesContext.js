import { EntriesContext } from "../context/EntryContext";
import { useContext } from "react";

// Invoked to use the context in any component
export const useEntriesContext = () => {
    
    // Entry context
    const context = useContext(EntriesContext)

    if (!context) {
        throw Error('useEntriesContext must be used inside an EntriesContextProvider')
    }

    return context
}