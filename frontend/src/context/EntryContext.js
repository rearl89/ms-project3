import { createContext, useReducer } from 'react'

export const EntriesContext = createContext()

// Updates the state whenever an action is dispatched 
export const entriesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ENTRIES':
            return {
                entries: action.payload
            }
        case 'CREATE_ENTRY':
            return {
                entries: [action.payload, ...state.entries]
            }
        case 'DELETE_ENTRY':
            return {
                entries: state.entries.filter((e) => e._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const EntriesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, {entries: null})
 

    return (
        // Wraps the app to be accessed in all components
        <EntriesContext.Provider value={{...state, dispatch}}>
            { children }
        </EntriesContext.Provider>
    )
}