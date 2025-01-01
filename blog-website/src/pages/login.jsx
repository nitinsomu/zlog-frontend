import { useState } from "react"
import {Navigate} from "react-router-dom"
export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)
 
    async function login(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-type':'application/json'},
            credentials: 'include'        
        })

        if (response.ok) {
            setRedirect(true);
        } else {
            const errorData = await response.json();
            alert(errorData.error);
        }
    }
    if (redirect) {
        return (
            <Navigate to={'/'} />
        )
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={login}>
                <input placeholder="username" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                <input placeholder="password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}