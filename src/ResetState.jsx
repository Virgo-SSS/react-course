import { useState } from "react"

export default function ResetState({ name = ""}) {
    let [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber(number + 1);
    }

    return (
        <>
            <div>
                <p>Number {name} : {number}</p>
                <button
                    onClick={handleClick}
                >Increment</button>
            </div>
        </>
    )
}