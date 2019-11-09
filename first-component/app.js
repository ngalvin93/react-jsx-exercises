// Make this component render like the Windows logo
let FirstComponent = (props) => {
    return <span>
        <a href="https://goo.gl/images/mY5Qdv" target="_blank">
        <img src={props.url}/>
        </a>
        </span>
}

ReactDOM.render(<FirstComponent url="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg"/>, document.getElementById('root'))