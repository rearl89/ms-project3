import { useEffect, useState } from "react"
import { useEntriesContext } from "../../hooks/useEntriesContext"
//components
import EntryDetails from "../EntryDetails"
import { CurrentDate } from "../CurrentDate"
import EntryForm from "../EntryForm"

export default function Home() {
    const {entries, dispatch} = useEntriesContext()

    useEffect(() => {
        async function fetchEntries() {
            const response = await fetch('/entries') 
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_ENTRIES', payload: json})
            }
        }
        fetchEntries()
    }, [])
    return ( 
        <div>
            <h1>Welcome to your personal journal</h1>
            <div className="border-2 mt-2.5 mb-2.5">
                <h4>Current Date: <CurrentDate /></h4>
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