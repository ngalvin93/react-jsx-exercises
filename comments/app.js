// Make this component render an image
const ProfilePic = (props) => {
    return <span><img src={props.url}></img></span>
}

// Make this component render a username in bold above the comment text
const CommentBody = (props) => {
    return <span><h4>{props.username}</h4></span>
}

// Make each comment render a profile picture and the comment body
const Comment = (props) => {
    return <span>
        <p>{props.comment}</p>
        </span>
}

const Comments = (props) => {
    return (<span>
        <ProfilePic url="https://i.imgur.com/YcP0tik.jpg"/>
        <CommentBody username="Sharky McSharks"/>
        <Comment comment="Mystery snail lionfish papershell houndshark. Wobbegong shark blue whale gold damsel faucet snail."/>
        </span>)
}

ReactDOM.render(<Comments />, document.getElementById('root'))