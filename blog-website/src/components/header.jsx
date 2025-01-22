import { useEffect, useState, useContext } from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        }
        ).then(response => {
                response.json().then(userData => {
                setUserInfo(userData);
            })
        }).catch(err => {
            console.error('Failed to fetch profile:', err);
        })
    }, [])
    
    function logout() {
        fetch('http://localhost:5000/logout', {
            method: 'POST',
            credentials: 'include'
        });
        setUserInfo(null);
    }
    const username = userInfo?.username;
    return (
        <header>
            <Link to="/" className="logo">Zlog</Link>
            <nav>
                {username && 
                    (<>
                        <Link to="/create">Create Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>)
                }
                {!username &&
                (<>               
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </>)
                }
            </nav>
        </header>
    )
}

export default Header;