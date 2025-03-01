import { useState } from "react";
import { ProfileContext } from "./context/ProfileContext";
import ProfileAddress from "./ProfileAddress";
import ProfileName from "./ProfileName";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
    let [name, setName] = useState("Virgo");

    return (
        <>
            <ProfileContext.Provider value={name}>
                <ProfileName />
                <ProfileAddress />
                <ProfileForm setName={setName} />
            </ProfileContext.Provider>
        </>
    )
}