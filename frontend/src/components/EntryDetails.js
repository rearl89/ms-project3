// date fns
import { useEntriesContext } from '../hooks/useEntriesContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';

export default function EntryDetails({ entry }) {
    const { dispatch } = useEntriesContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/entries/' + entry._id, { method: 'DELETE', headers: { 'Authorization': `Bearer ${user.token}` }})
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_ENTRY', payload: json})
        }
    }

    return (
        <div className="bg-gray-200 max-w-fit rounded overflow-hidden shadow-lg p-2.5">
            <h4 className="font-bold text-xl mb-2 writing">{entry.title}</h4>
            <p className="writing">{entry.message}</p>
            <p className="text-xs italic">{formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true })}</p>
            <span className="text-white rounded bg-red-500 mt-2 p-0.5 hover:bg-red-400" onClick={handleClick}>Delete</span>
        </div>
    )
}