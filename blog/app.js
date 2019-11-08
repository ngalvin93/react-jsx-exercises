const Header = () => {
    return <span><h1>Wordpress</h1></span>
}
const Article = (prop) => {
    return <span><h3>{prop.title}</h3></span>
}
const Footer = () => {
    return <span><p>Copyright 2019</p></span>
}

const Blog = () => {
    return <span><Header/>
    <Article title="React is the best!"/>
    <Footer/>
    </span>
}


ReactDOM.render(<Blog/>, document.getElementById('root'))