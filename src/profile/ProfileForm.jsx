import { useContext, useState } from "react"
import { ProfileContext } from "./context/ProfileContext"

export default function ProfileForm({ setName }) {
    let name = useContext(ProfileContext);
    let [tempName, setTempName] = useState(name);

    const handleEditName = () => {
        setName(tempName);
    }
    const handleChange = (e) => {
        setTempName(e.target.value);
    }

    return (
        <>
            <div style={{ borderStyle: "solid", width:"13rem", textAlign:"center" }}>
                <p>Form ubah Nama</p>
                <div style={{ padding:"10px" }}>
                    <input type="text" name="name" onChange={handleChange} style={{ borderStyle:"solid" }} placeholder="Ubah nama anda disini"/>
                </div>
                <button onClick={handleEditName} style={{ marginBottom:"10px" }}>Ubah Nama</button>
            </div>
        </>
    )
}