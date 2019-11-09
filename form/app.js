// Make this component render a styled text input tag
const inputStyle = {
    backgroundColor: '#F5F5F5',
    border: 'none',
    padding: '10px',
    borderRadius: '10px',
    width: '90%',
    margin: '20px'
}

const TextInput = () => {
    return <span>
        <input style={inputStyle} type="text" name="name" placeholder="Enter text here" />
        </span>
}

// Make this component render two styled radio button side by side labelled "yes" and "no"
const YesNoRadio = () => {
    return <span>
        <input type="radio" option="Left"/>
        <input type="radio" option="Right"/>
    </span>
}

// Make this component render a styled button of type "submit"
const btnStyle = {
    padding: '10px'
}

const SubmitButton = () => {
    return <span>
        <button style={btnStyle} type="submit">Submit</button>
    </span>
}

// Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button
const Form = () => {
    return <span>
        <form>
        <TextInput/>
        <TextInput/>
        <TextInput/>
        <YesNoRadio/>
        <SubmitButton/>
        </form>
    </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))