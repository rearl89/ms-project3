// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function EntryDetails({ entry }) {
    return (
        <div className="entry-details">
            <h4>{entry.title}</h4>
            <p>{entry.message}</p>
            <p>{formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true })}</p>
        </div>
    )
}