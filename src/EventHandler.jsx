export const EventHandler = () => {
    const handleButtonClick = () => {
        console.log("Button Clicked");
    }

    return (
        <>
            <button onClick={handleButtonClick} style={{ color:"blue", padding:"20px" }}>Click Me</button>
        </>
    )
}