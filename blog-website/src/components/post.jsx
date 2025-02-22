import { Link } from "react-router-dom"

export default function Post(props) {
    return (
        <div className="post">
            <div className="image">
                <Link to = {`/post/${props._id}`}>
                    <img src={props.src}></img>
                </Link>
            </div>
            <div className="texts">
                <Link to = {`/post/${props._id}`}>
                    <h1 className="heading">{props.heading}</h1>
                </Link>
                <p className="author">{props.author}</p>
                <p className="text">{props.text}</p>
            </div>

        </div>
    )
}