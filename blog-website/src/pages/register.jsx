import React from "react"
import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-type':'application/json'}
        })

        if(response.status === 200) {
            alert("Registration Successful!");
        } else {
            const errorData = await response.json()
            alert(errorData.error);
        }
        window.location.href = '/login';
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={register}>
                <input placeholder="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}></input>
                <input placeholder="password" 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}