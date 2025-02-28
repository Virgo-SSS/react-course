export default function EventHandlerAsProps({handleClick}) {
    return (
        <>
            <button onClick={handleClick}>Click me from handle props</button>
        </>
    )
}