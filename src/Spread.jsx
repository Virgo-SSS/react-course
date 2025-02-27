// Spread syntax js digunakan untuk mengirim semua attribute tanpa harus ketik satu2

export function Spread(props) {
    return <>
    <h2>Ini Spread syntax</h2>
    <p>Hobby saya: {props.hobby}</p>
    <p>Makanan: {props.food}</p>
    <p>Minuman: {props.drink}</p>
    </>
}