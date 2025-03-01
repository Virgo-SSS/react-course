import { useContext } from "react";
import { ProfileContext } from "./context/ProfileContext";

export default function ProfileAddress() {
    let name = useContext(ProfileContext)

    return (
        <>
            <h3>Alamat user {name} adalah : New York Blok U NO 10</h3>
        </>
    )

}