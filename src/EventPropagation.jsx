// event di react selalu di sebarin ke element yang ada di atasnya
// misal kita punya element div dan punya element div tersebut punyai attribbute onClick
// kemudian di dalam div terdapat button dengan attribute onClick juga
// maka ketika buttonnya di click maka event akan terjadi 2x yaitu dari buttonnya kemudian dari div.
// sebagai contoh:
export default function EventPropagation() {
    const handleClick = (e) => {
        e.stopPropagation()
        alert("Event propagation")
    }

    // Cara test nya, coba click button nya kemudian cek alertnya keluar berapa kali
    // ketika buttonnya diclick harusnya alert keluar 2x karena event dari button dan juga div
    // 
    // test ke 2 kemudian coba click div kemudian lihat alertnya keluar berapa kali
    // harusnya jika hanya divnya saja yang di klik maka alert yang keluar hanya 1x
    // karena event propagation hanya menyebarkan event ke element diatasnya bukan di bawahnya
    return (
        <>
            <div onClick={handleClick} style={{ backgroundColor:"blue" }}>
                <button onClick={handleClick}>Click Me Event Propagation</button>
            </div>
        </>
    )

    // jika event propagtion yang mau di matikan silahkan tambahkan method e.stopPropagation() di function handleClicknya
}