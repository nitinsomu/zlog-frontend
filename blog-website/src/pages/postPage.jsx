import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function PostPage() {
    const { id } = useParams();
    const [content, setContent] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/post/${id}`, {
            method: 'GET',
        })
        .then(response => {
            response.json().then(data => setContent(data))
        })
    }, []);

    return (
        <div className="postPage">
            <h1>{content.title}</h1>
            <p>by {content.username}</p>
            <div className="image">
                <img src={`http://localhost:5000/static/${content.image}`} alt={content.title}></img>
            </div>
            <div dangerouslySetInnerHTML={{__html:content.content}} />
        </div>
    )
}