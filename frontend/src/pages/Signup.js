import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="signup grid max-w-md bg-gray-200 rounded overflow-hidden shadow-lg p-2.5" onSubmit={handleSubmit}>
            <h3 className="font-bold">Signup</h3>

            <label className="flex">Email:</label>
            <input className="signup rounded" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label className="flex">Password:</label>
            <input className="signup rounded" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button disabled={isLoading} className="text-white rounded bg-indigo-500 mt-2 hover:bg-indigo-400">Signup</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
