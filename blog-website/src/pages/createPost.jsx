import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    
    const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
    ];

    async function savePost(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.set('title', title);
        formData.set('summary', summary);
        formData.set('content', content);
        formData.set('file', file[0]);
        const response = await fetch('http://localhost:5000/post', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });
        if(response.ok) {
            setRedirect(true);
        } else {
            const error = await response.json();
            alert(error.error);
        }
    }
    if (redirect) {
        return (
            <Navigate to={'/'} />
        )
    }
    return (
        <div className="createPost">
            <input type="title" placeholder="title" value={title}
            onChange={ev => setTitle(ev.target.value)}/>
            <input type="summary" placeholder="summary" value={summary}
            onChange = {ev => setSummary(ev.target.value)}/>
            <input type="file" onChange={e => setFile(e.target.files)}/>
            <ReactQuill modules={modules} formats={formats} value={content}
            onChange={newValue => setContent(newValue)}/>
            <button onClick={savePost}>Create Post</button>
        </div>
    )
}
