import Post from "./post"
import './body.css'
import { useEffect, useState } from 'react';

export default function Body() {   
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:5000/post', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setPosts(data.posts);
        }
        fetchPosts();
    }, []);
    
    return (
        <div className="body">
            {posts && posts.map((post, index) => (
                <Post 
                    key={index}
                    src={"http://localhost:5000/static/"+post.image}
                    heading={post.title} 
                    text={post.summary} 
                    author={post.username}
                />
            ))}
        </div>
    )
}