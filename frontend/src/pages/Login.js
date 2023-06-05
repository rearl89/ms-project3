import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="login grid max-w-md bg-gray-200 rounded overflow-hidden shadow-lg p-2.5" onSubmit={handleSubmit}>
            <h3 className="font-bold">Login</h3>

            <label className="flex">Email:</label>
            <input className="login rounded" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label className="flex">Password:</label>
            <input className="login rounded" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button className="text-white rounded bg-indigo-500 mt-2 hover:bg-indigo-400">Login</button>
        </form>
    )
}