import { useContext } from "react"
import { ProfileContext } from "./context/ProfileContext"

export default function ProfileName() {
    let name = useContext(ProfileContext)

    return (
        <>
            <h3>Nama Saya adalah : {name} </h3>
        </>
    )
}