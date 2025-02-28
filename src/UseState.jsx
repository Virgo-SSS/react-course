// component kadang perlu berubah tergantung kepada interaksi dengan pengguna.
// component harus bisa mengingat current value.
// di react, memori spesific di component atau bisa di bilang menyimpan data di component itu di sebut state

import { useState } from "react";

export default function UseState() {
    // useState itu merupakan hooks dari react
    // useState dapat digunakan jika kita ingin component menyimpan sebuah value.
    // useState akan mengembalikan array yaitu yang pertama ada state nya yang kedua adalah function untuk ngubah statenya
    let [number, setNumber] = useState(0);


    function handleClick() {
        console.log(number);
        setNumber(number + 1);
        console.log("number" + number);
    }

    // setelah button di click maka function handleClick akan mulai mengubah value statenya, 
    // ketika value statenya berubah maka component akan otomatis ngerender ulang componentnya.
    console.log("rendered") // console log untuk cek componentnya di render ulang setelah nilai state berubah 

    return (
        <>
            <button onClick={handleClick}>Increment</button>
            <p>Number: {number}</p>
        </>
    )
}