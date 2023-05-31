// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function EntryDetails({ entry }) {
    return (
        <div className="bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg p-2.5">
            <h4 className="font-bold text-xl mb-2">{entry.title}</h4>
            <p>{entry.message}</p>
            <p className="text-xs italic">{formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true })}</p>
        </div>
    )
}