import { useRef, useState } from "react"

export default function Timer() {
    let [start, setStart] = useState(null);
    let [current, setCurrent] = useState(null);
    let timer = useRef(null);

    function handleStartTimer() {
        setStart(Date.now());
        setCurrent(Date.now());

        timer.current = setInterval(() => {
            setCurrent(Date.now());
        }, 10)
    }

    function handleStopTimer() {
        clearInterval(timer.current)
    }


    return (
        <>
            <h1>Time: {current - start} Ms</h1>
            <button onClick={handleStartTimer}>Start Timer</button>
            <button onClick={handleStopTimer}>Stop Timer</button>
        </>
    )
}