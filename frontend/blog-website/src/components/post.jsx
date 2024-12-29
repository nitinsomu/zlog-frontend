export default function Post(props) {
    return (
        <div className="post">
            <div className="image">
                <img src={props.src}></img>
            </div>
            <div className="texts">
                <h1 className="heading">{props.heading}</h1>
                <p className="author">{props.author}</p>
                <p className="text">{props.text}</p>
            </div>

        </div>
    )
}