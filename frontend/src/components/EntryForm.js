import { useState } from "react"


export default function EntryForm() {
    function refreshPage() {
        window.location.reload(false);
    }
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        
        const entry = {title, message}

        const response = await fetch('/entries', {method: 'POST', body: JSON.stringify(entry), headers: {'Content-Type': 'application/json'}})
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setTitle('')
            setMessage('')
            setError(null)
            console.log('new entry added')
        }
    }

    return (
        <form className="grid bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg p-2.5" onSubmit={handleSubmit}>
            <h3 className="font-bold">Add a new journal entry</h3>

            <label>Title:</label>
            <input type='text' className="rounded" onChange={(e) => setTitle(e.target.value)} value={title} />

            <label>Entry:</label>
            <textarea rows="10" cols="120" className="rounded" onChange={(e) => setMessage(e.target.value)} value={message} />

            <button className="text-white rounded bg-indigo-500 mt-2  hover:bg-indigo-400" onClick={refreshPage}>Submit Entry</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}