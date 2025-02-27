function HelloWorld(props) {
    return <>
        <h1>Hello {props.text.toUpperCase()}</h1>
    </>
}

export default HelloWorld;