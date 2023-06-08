import { useEffect } from "react"
import { useEntriesContext } from "../hooks/useEntriesContext"
import { useAuthContext } from '../hooks/useAuthContext'
//components
import EntryDetails from "../components/EntryDetails"
import { CurrentDate } from "../components/CurrentDate"
import EntryForm from "../components/EntryForm"

export default function Home() {
    const {entries, dispatch} = useEntriesContext()
    const { user } = useAuthContext()
    // Fetches entries from the backend
    useEffect(() => {
        async function fetchEntries() {
            const response = await fetch('/entries', {
                headers: {
                    // Separates entries based on user
                    'Authorization': `Bearer ${user.token}`
                }
            }) 
            const json = await response.json()
            // Updates the global entries context state
            if (response.ok) {
                dispatch({type: 'SET_ENTRIES', payload: json})
            }
        }
        if (user) {
           fetchEntries()
        }
    }, [dispatch])
    return ( 
        <div>
            <h1 className="font-bold">Welcome to your personal journal!</h1>
            <div className="date">
                <h4 className="border-2 rounded mt-2.5 mb-2.5">Current Date: <CurrentDate /></h4>
            </div>
            <div className="flex">
                <div className="pl-2.5 pr-2.5 pb-2.5">
                    {entries && entries.map((entry) => (
                        <div className="p-2.5">
                        <EntryDetails key={entry._id} entry={entry} />
                        </div>
                    ))}
                </div>
                <div className="p-2.5"> 
                    <EntryForm />
                </div>
            </div>
        </div>
    )
}