let ProfilePic = (props) => {
    return <span><img src={props.image}></img></span>
}

let CommentBody = (props) => {
    return <span><ProfilePic image="https://i.imgur.com/YcP0tik.jpg"/>Make this component render a username in bold above the comment text</span>
}

let Comment = (prop) => {
    return <span><CommentBody/>Make each comment render a profile picture and the comment body</span>
}

let Comments = () => {
    return <span><li>
        <Comment/>
        <Comment/>
    </li></span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))