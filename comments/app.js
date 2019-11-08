// Make this component render an image
const ProfilePic = () => {
    return <span><img src="https://i.imgur.com/YcP0tik.jpg"></img></span>
}

// Make this component render a username in bold above the comment text
const CommentBody = () => {
    return <span><h4>Sharky McSharks</h4></span>
}

// Make each comment render a profile picture and the comment body
const Comment = () => {
    return <span>
        <CommentBody/>
        <ProfilePic/>
        <p>Mystery snail lionfish papershell houndshark. Wobbegong shark blue whale gold damsel faucet snail.</p>
        </span>
}

const Comments = () => {
    return (<span><Comment/></span>)
}

ReactDOM.render(<Comments />, document.getElementById('root'))