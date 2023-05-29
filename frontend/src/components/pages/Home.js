import { useEffect, useState } from "react"
//components
import EntryDetails from "../EntryDetails"
import { CurrentDate } from "../CurrentDate"

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
        <div className="home">
            <h1>Welcome</h1>
            <h4>Current Date: <CurrentDate /></h4>
            <div className="entries">
                {entries && entries.map((entry) => (
                    <EntryDetails key={entry._id} entry={entry} />
                ))}
            </div>
        </div>
    )
}