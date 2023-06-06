import { useState } from "react"
import { useEntriesContext } from "../hooks/useEntriesContext"
import { useAuthContext } from "../hooks/useAuthContext"


export default function EntryForm() {
    const { dispatch } = useEntriesContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in.')
            return
        }
        
        const entry = {title, message}

        const response = await fetch('/entries', {method: 'POST', body: JSON.stringify(entry), headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`}})
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setTitle('')
            setMessage('')
            setError(null)
            console.log('new entry added')
            dispatch({type: 'CREATE_ENTRY', payload: json})
        }
    }

    return (
        <form className="grid bg-gray-200 rounded overflow-hidden shadow-lg p-2.5 mr-2.5" onSubmit={handleSubmit}>
            <h3 className="font-bold">Add a new entry</h3>

            <label className="flex">Title:</label>
            <input placeholder="Ex. Great weekend trip to..." type='text' className="rounded" onChange={(e) => setTitle(e.target.value)} value={title} />

            <label className="flex">Entry:</label>
            <textarea placeholder="Dear journal...." rows="15" cols="1000" className="rounded" onChange={(e) => setMessage(e.target.value)} value={message} />

            <button className="text-white rounded bg-indigo-500 mt-2 hover:bg-indigo-400">Submit Entry</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}