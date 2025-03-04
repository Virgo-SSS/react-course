import useOnline from "./OnlineHook"

export default function CheckOnline() {
    let isOnline = useOnline()
    
    return (
        <>
            {isOnline ? "Online" : "Offline"}
        </>
    )
}