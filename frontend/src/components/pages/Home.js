import { useEffect, useState } from "react"
//components
import EntryDetails from "../EntryDetails"
import { CurrentDate } from "../CurrentDate"
import EntryForm from "../EntryForm"

export default function Home() {
    const [ entries, setEntries ] = useState(null)
    useEffect(() => {
        async function fetchEntries() {
            const response = await fetch('/entries') 
            const json = await response.json()
            if (response.ok) {
                setEntries(json)
            }
        }
        fetchEntries()
    }, [])
    return ( 
        <div>
            <h1>Welcome</h1>
            <h4>Current Date: <CurrentDate /></h4>
            <EntryForm />
            <div className="p-2.5">
                {entries && entries.map((entry) => (
                    <div className="p-2.5">
                    <EntryDetails key={entry._id} entry={entry} />
                    </div>
                ))}
            </div>
        </div>
    )
}