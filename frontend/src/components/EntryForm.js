import { useState } from "react"


export default function EntryForm() {
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
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new journal entry</h3>

            <label>Title:</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />

            <label>Entry:</label>
            <input type='text' onChange={(e) => setMessage(e.target.value)} value={message} />

            <button>Submit Entry</button>
        </form>
    )
}