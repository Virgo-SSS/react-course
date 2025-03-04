import { useRef, useState } from "react";

export default function DomRef() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const nameInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        setName("")
        setMessage("")

        nameInput.current.focus();

        alert("Nama saya adalah " + name + " Pesan saya adalah : " + message)
    }

    return (
        <>
            <h1>Guest Form</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input ref={nameInput} type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <label htmlFor="message">Message</label>
                <textarea name="" id="" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        
        </>
    )
}