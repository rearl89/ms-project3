import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form className="login grid max-w-md bg-gray-200 rounded overflow-hidden shadow-lg p-2.5" onSubmit={handleSubmit}>
            <h3 className="font-bold">Login</h3>

            <label className="flex">Email:</label>
            <input className="login rounded" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label className="flex">Password:</label>
            <input className="login rounded" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button disabled={isLoading} className="text-white rounded bg-indigo-500 mt-2 hover:bg-indigo-400">Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}