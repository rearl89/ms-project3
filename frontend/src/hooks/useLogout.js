import { useAuthContext } from "./useAuthContext"
import { useEntriesContext } from "./useEntriesContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: entriesDispatch } = useEntriesContext()

    const logout = () => {
        // remove user form storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        // clears global state
        entriesDispatch({type: 'SET_ENTRIES', payload: null})
    }

    return {logout}
}